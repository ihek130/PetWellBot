import type { Express } from "express";
import { createServer, type Server } from "http";
import { chatMessageSchema, emailSubscriptionSchema, feedbackSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Environment check after dotenv has been loaded
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  
  console.log('🔧 Environment check:');
  console.log('- GROQ_API_KEY exists:', !!GROQ_API_KEY);
  console.log('- API key length:', GROQ_API_KEY?.length || 0);
  console.log('- API key starts with gsk_:', GROQ_API_KEY?.startsWith('gsk_') || false);
  // Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      // Validate request body exists
      if (!req.body || typeof req.body !== 'object') {
        throw new Error('Invalid request body');
      }

      const parseResult = chatMessageSchema.safeParse(req.body);
      if (!parseResult.success) {
        throw new Error('Invalid message format');
      }

      const { message, petType, petName, conversationHistory } = parseResult.data;
      
      // Ensure message is valid
      if (!message || typeof message !== 'string' || message.trim().length === 0) {
        throw new Error('Message is required');
      }

      // Universal message handling - send ALL messages to AI
      const messageText = message.toLowerCase().trim();
      const petNameText = petName ? petName.toLowerCase().trim() : '';
      
      // Only reject completely non-conversational spam or malicious content
      const maliciousPatterns = [
        /^<script|javascript:|data:|vbscript:/i,
        /^(\.{10,}|#{10,}|!{10,})$/i // Spam patterns
      ];
      
      const isMalicious = maliciousPatterns.some(pattern => pattern.test(messageText));
      
      if (isMalicious) {
        throw new Error('Invalid input detected');
      }
      
      // Send EVERYTHING to AI with conversation context

      // Call Groq API with conversation history
      console.log('🔍 Attempting Groq API call with conversation history');
      console.log('📚 Conversation history:', JSON.stringify(conversationHistory, null, 2));
      console.log('🐾 Pet context: Type:', petType, 'Name:', petName);
      const aiResponse = await callGroqAPI(message, petType || "unknown", petName || "your pet", conversationHistory || []);
      console.log('✅ Groq API response received:', aiResponse.substring(0, 100) + '...');
      
      // Simple, professional disclaimer
      const responseWithDisclaimer = `${aiResponse}\n\n*Note: This is general information only. Consult a veterinarian for medical concerns.*`;
      
      res.json({
        response: responseWithDisclaimer,
        messageId: generateMessageId()
      });
    } catch (error) {
      console.error('Chat API error:', error);
      res.status(500).json({ 
        error: "I'm having trouble connecting to my AI brain right now. Please check that your Hugging Face API is properly configured and try again in a moment.",
        messageId: generateMessageId()
      });
    }
  });

  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email, source } = emailSubscriptionSchema.parse(req.body);
      
      // TODO: Integrate with email service (Mailchimp, SendGrid, etc.)
      console.log(`New subscription: ${email} from ${source || 'website'}`);
      
      res.json({ success: true, message: "Successfully subscribed to weekly pet health tips!" });
    } catch (error) {
      console.error('Subscription error:', error);
      res.status(400).json({ error: "Invalid email address" });
    }
  });

  // Feedback endpoint
  app.post("/api/feedback", async (req, res) => {
    try {
      const feedback = feedbackSchema.parse(req.body);
      
      // TODO: Store feedback for analytics
      console.log('Feedback received:', feedback);
      
      res.json({ success: true });
    } catch (error) {
      console.error('Feedback error:', error);
      res.status(400).json({ error: "Invalid feedback data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function callGroqAPI(message: string, petType: string, petName: string, conversationHistory: Array<{role: "user" | "assistant", content: string}> = []): Promise<string> {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  const GROQ_API_URL = process.env.GROQ_API_URL;
  const MODEL = process.env.GROQ_MODEL;
  
  if (!GROQ_API_KEY || !GROQ_API_URL || !MODEL) {
    throw new Error('Groq API configuration missing. Please add GROQ_API_KEY, GROQ_API_URL, and GROQ_MODEL to your environment variables.');
  }

  // Sanitize inputs
  const safePetType = (petType && petType !== "unknown") ? petType.replace(/[^\w\s]/g, '').trim() : "pet";
  const safePetName = (petName && petName !== "your pet") ? petName.replace(/[^\w\s]/g, '').trim() : "your companion";
  const safeMessage = message.replace(/[<>]/g, '').trim();

  const systemPrompt = `You are a specialized AI assistant focused EXCLUSIVELY on two areas:

1. ANIMAL & PET CARE: Provide advice about ANY animal that exists on Earth - domestic pets (dogs, cats, birds, fish, rabbits, hamsters), exotic pets (reptiles, insects, spiders, amphibians), farm animals (horses, cows, sheep, chickens), marine life, wildlife, or any living creature. Cover health, behavior, care, nutrition, and well-being.

2. HUMAN MENTAL HEALTH: Provide support for emotional and psychological well-being including depression, anxiety, stress, sadness, grief, coping strategies, self-care, emotional support, relationship issues, and mental wellness.

IMPORTANT RESTRICTIONS: 
- If a question is about human PHYSICAL health (symptoms, diseases, medications), politely redirect: "I focus on animal care and mental health support. For physical health concerns, please consult a healthcare professional."
- If a question is completely unrelated to animals OR mental health (technology, business, general knowledge), politely redirect: "I specialize in animal care and mental health support. Is there something about your pet or emotional well-being I can help with?"
- Be flexible and helpful within these domains - if someone mentions feeling sad about their pet, that covers both areas.

Keep responses caring, practical, and informative while staying within these boundaries.`;

  try {
    console.log('🚀 Making Groq API request...');
    
    // Determine if this is the first message (no conversation history)
    const isFirstMessage = conversationHistory.length === 0;
    
    // Format the user message appropriately
    let userMessage = safeMessage;
    // Only add pet context if it's the first message AND we have actual pet info (not defaults)
    if (isFirstMessage && petType && petType !== "unknown" && petName && petName !== "your pet") {
      userMessage = `I have a ${safePetType} named ${safePetName}. ${safeMessage}`;
    }
    
    const messages = [
      {
        role: "system",
        content: systemPrompt
      },
      // Include conversation history
      ...conversationHistory,
      // Add current message
      {
        role: "user",
        content: userMessage
      }
    ];
    
    console.log('📋 Messages being sent to API:', JSON.stringify(messages, null, 2));
    
    const response = await fetch(GROQ_API_URL, {
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          model: MODEL,
          messages,
          max_tokens: 600,
          temperature: 0.7
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.log('❌ Groq API Error:', response.status, response.statusText, errorText);
      throw new Error(`Groq API error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    console.log('🔍 Raw Groq API result:', JSON.stringify(result, null, 2));
    
    if (result.error) {
      console.log('❌ API returned error:', result.error);
      throw new Error(result.error.message || result.error);
    }

    // Extract the generated text from Groq/OpenAI format
    const generatedText = result.choices?.[0]?.message?.content || "";
    console.log('📝 Generated response:', generatedText);
    
    // Validate we have a proper response
    if (!generatedText || generatedText.length < 10) {
      console.log('⚠️ Generated text too short or empty');
      throw new Error('AI generated insufficient response');
    }

    console.log('✅ Final AI response:', generatedText);
    return generatedText;
  } catch (error) {
    console.error('❌ Groq API call failed:', error);
    throw error; // Re-throw to let the main handler deal with it
  }
}

function generateMessageId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
