import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendChatMessage, submitFeedback } from "@/lib/huggingface";
import type { ChatMessage } from "@shared/schema";

export interface ChatHistoryItem {
  id: string;
  type: "user" | "bot";
  message: string;
  timestamp: Date;
  messageId?: string;
}

export interface SessionMemory {
  petType?: string;
  petName?: string;
  symptoms: string[];
  previousAdvice: string[];
  userConcerns: string[];
  conversationSummary: string;
}

export function useChatbot() {
  const [selectedPet, setSelectedPet] = useState<string | null>(null);
  const [petName, setPetName] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([]);
  const [isSetupComplete, setIsSetupComplete] = useState(true);
  const [sessionMemory, setSessionMemory] = useState<SessionMemory>({
    symptoms: [],
    previousAdvice: [],
    userConcerns: [],
    conversationSummary: "",
  });

  // Intelligent context extraction - defined early
  const extractContextFromMessage = useCallback((message: string, isUserMessage: boolean) => {
    const lowerMessage = message.toLowerCase();
    
    if (isUserMessage) {
      // Extract symptoms
      const symptomKeywords = ['vomiting', 'diarrhea', 'not eating', 'lethargy', 'cough', 'fever', 'scratching', 'limping', 'bleeding', 'swollen', 'pale', 'yellow', 'green'];
      const foundSymptoms = symptomKeywords.filter(symptom => lowerMessage.includes(symptom));
      
      // Extract concerns/questions
      const concernPhrases: string[] = [];
      if (lowerMessage.includes('what does') || lowerMessage.includes('what should') || lowerMessage.includes('how do')) {
        concernPhrases.push(message.trim());
      }
      
      if (foundSymptoms.length > 0 || concernPhrases.length > 0) {
        setSessionMemory(prev => ({
          ...prev,
          symptoms: Array.from(new Set([...prev.symptoms, ...foundSymptoms])),
          userConcerns: Array.from(new Set([...prev.userConcerns, ...concernPhrases])),
        }));
      }
    } else {
      // Extract advice from bot responses
      if (lowerMessage.includes('recommend') || lowerMessage.includes('suggest') || lowerMessage.includes('try')) {
        const advice = message.split('.')[0] + '.'; // Get first sentence
        setSessionMemory(prev => ({
          ...prev,
          previousAdvice: [...prev.previousAdvice.slice(-2), advice], // Keep last 3 pieces of advice
        }));
      }
    }
  }, []);

  const chatMutation = useMutation({
    mutationFn: sendChatMessage,
    onSuccess: (response) => {
      const botMessage = {
        id: Date.now().toString(),
        type: "bot" as const,
        message: response.response,
        timestamp: new Date(),
        messageId: response.messageId,
      };
      
      setChatHistory(prev => [...prev, botMessage]);
      
      // Extract context from bot response for session memory
      extractContextFromMessage(response.response, false);
    },
    onError: (error) => {
      setChatHistory(prev => [...prev, {
        id: Date.now().toString(),
        type: "bot",
        message: "I'm having trouble processing your request right now. Please try again in a moment.",
        timestamp: new Date(),
      }]);
    },
  });

  const feedbackMutation = useMutation({
    mutationFn: ({ messageId, rating }: { messageId: string; rating: "positive" | "negative" }) =>
      submitFeedback(messageId, rating, selectedPet || undefined),
  });

  const selectPet = useCallback((petType: string) => {
    setSelectedPet(petType);
  }, []);

  const confirmPetName = useCallback((name: string) => {
    setPetName(name);
    setIsSetupComplete(true);
    // Setup complete - user can now start chatting
  }, []);

  // Build dynamic context for API
  const buildContextualPrompt = useCallback((currentMessage: string) => {
    const context = [];
    
    if (sessionMemory.symptoms.length > 0) {
      context.push(`Previously mentioned symptoms: ${sessionMemory.symptoms.join(', ')}`);
    }
    
    if (sessionMemory.userConcerns.length > 0) {
      context.push(`User's concerns: ${sessionMemory.userConcerns.slice(-2).join('; ')}`);
    }
    
    if (sessionMemory.previousAdvice.length > 0) {
      context.push(`Previous advice given: ${sessionMemory.previousAdvice.slice(-1)[0]}`);
    }
    
    const contextString = context.length > 0 ? `\n\nConversation context: ${context.join(' | ')}` : '';
    return currentMessage + contextString;
  }, [sessionMemory]);

  const sendMessage = useCallback((message: string) => {
    if (chatMutation.isPending) return;

    // Extract context from user message
    extractContextFromMessage(message, true);

    // Add user message to history first
    const newUserMessage = {
      id: Date.now().toString(),
      type: "user" as const,
      message,
      timestamp: new Date(),
    };
    
    setChatHistory(prev => [...prev, newUserMessage]);

    // Build conversation history for Option 1 (last 4 messages max for API efficiency)
    const recentHistory = chatHistory.slice(-3); // Reduced from 4 to 3 for better performance
    const conversationHistory = recentHistory.map(item => ({
      role: item.type === "user" ? "user" as const : "assistant" as const,
      content: item.message,
    }));

    // Build contextual message for Option 2
    const contextualMessage = buildContextualPrompt(message);

    // Send to API with both conversation context (Option 1) and intelligent context (Option 2)
    chatMutation.mutate({
      message: contextualMessage,
      petType: selectedPet || undefined,
      petName: petName || undefined,
      conversationHistory,
    });
  }, [selectedPet, petName, chatMutation, chatHistory, extractContextFromMessage, buildContextualPrompt]);

  const submitMessageFeedback = useCallback((messageId: string, rating: "positive" | "negative") => {
    feedbackMutation.mutate({ messageId, rating });
  }, [feedbackMutation]);

  return {
    selectedPet,
    petName,
    chatHistory,
    isSetupComplete,
    isLoading: chatMutation.isPending,
    selectPet,
    confirmPetName,
    sendMessage,
    submitMessageFeedback,
  };
}
