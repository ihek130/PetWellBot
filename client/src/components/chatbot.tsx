import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThumbsUp, ThumbsDown, Send } from "lucide-react";
import { useChatbot } from "@/hooks/use-chatbot";
import type { ChatHistoryItem } from "@/hooks/use-chatbot";
import ReactMarkdown from 'react-markdown';
import './markdown.css';

const quickSymptoms = [
  "Not eating",
  "Vomiting", 
  "Diarrhea",
  "Lethargy"
];

export function Chatbot() {
  const [messageInput, setMessageInput] = useState("");
  const [feedbackGiven, setFeedbackGiven] = useState<Set<string>>(new Set());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  const {
    selectedPet,
    petName,
    chatHistory,
    isSetupComplete,
    isLoading,
    selectPet,
    confirmPetName,
    sendMessage,
    submitMessageFeedback,
  } = useChatbot();

  // Scroll to bottom function
  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  // Auto-scroll when messages change
  useEffect(() => {
    if (chatHistory.length > 0) {
      const timer = setTimeout(() => {
        scrollToBottom();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [chatHistory]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!messageInput.trim() || isLoading) return;
    
    // Don't send if setup isn't complete
    if (!isSetupComplete) return;
    
    const message = messageInput.trim();
    setMessageInput("");
    
    try {
      await sendMessage(message);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleQuickSymptom = async (symptom: string) => {
    if (isLoading || !isSetupComplete) return;
    
    const message = `My ${selectedPet || 'pet'} ${petName ? `(${petName})` : ''} has been showing: ${symptom}`;
    
    try {
      await sendMessage(message);
    } catch (error) {
      console.error("Error sending quick symptom:", error);
    }
  };

  const handleFeedback = async (messageId: string, rating: "positive" | "negative") => {
    if (feedbackGiven.has(messageId)) return;
    
    try {
      await submitMessageFeedback(messageId, rating);
      setFeedbackGiven(prev => new Set(Array.from(prev).concat([messageId])));
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const formatMessage = (message: string) => {
    // Check if the message starts with recommended products section
    if (message.includes("## Recommended Products") || message.includes("## Pet Care Products")) {
      // Remove the recommended products section
      const parts = message.split(/## (Recommended Products|Pet Care Products)/);
      return (
        <div className="text-foreground markdown-content">
          <ReactMarkdown>
            {parts[0].trim()}
          </ReactMarkdown>
        </div>
      );
    }
    return (
      <div className="text-foreground markdown-content">
        <ReactMarkdown>
          {message}
        </ReactMarkdown>
      </div>
    );
  };

  return (
    <Card className="rounded-2xl shadow-xl overflow-hidden">
      {/* Chat Header - More Spacious */}
      <div className="bg-primary text-primary-foreground p-8 md:p-6">
        <div className="flex items-center gap-6 md:gap-4">
          <div className="w-20 h-20 md:w-16 md:h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center text-3xl md:text-2xl">
            💬
          </div>
          <div>
            <h2 className="text-2xl md:text-xl font-bold">Pet Assistant 🐾</h2>
            <p className="text-primary-foreground/80 text-lg md:text-base">Your Pet Care Helper</p>
            <div className="flex items-center gap-3 md:gap-2 mt-3 md:mt-2">
              <div className="w-3 h-3 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-base md:text-sm">Online & Ready to Help</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages - Much Larger and More Spacious */}
      <ScrollArea 
        ref={scrollAreaRef}
        className="h-[600px] md:h-[500px] p-8 md:p-6"
      >
        <div className="space-y-6 md:space-y-4">
          {chatHistory.map((item) => (
            <ChatMessage
              key={item.id}
              item={item}
              onFeedback={handleFeedback}
              feedbackGiven={feedbackGiven.has(item.messageId || "")}
              formatMessage={formatMessage}
            />
          ))}
          
          {isLoading && <TypingIndicator />}
          
          {/* Only render scroll target after user interaction */}
          {chatHistory.length > 0 && <div ref={messagesEndRef} />}
        </div>
      </ScrollArea>

      {/* Chat Input - More Spacious */}
      <div className="p-8 md:p-6 border-t border-border">
        <form onSubmit={handleSendMessage} className="flex gap-4 md:gap-3 mb-6 md:mb-4">
          <Input
            type="text"
            placeholder="Ask about your pet's health, behavior, or care..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-1 h-12 md:h-10 text-base md:text-sm px-4 md:px-3"
            disabled={isLoading}
            data-testid="input-chat-message"
          />
          <Button 
            type="submit" 
            disabled={isLoading || !messageInput.trim()}
            className="h-12 w-12 md:h-10 md:w-10"
            data-testid="button-send-message"
          >
            <Send className="w-6 h-6 md:w-5 md:h-5" />
          </Button>
        </form>
        
        <div className="flex flex-wrap gap-3 md:gap-2 mb-6 md:mb-4">
          <span className="text-base md:text-sm text-muted-foreground font-medium">Quick symptoms:</span>
          {quickSymptoms.map((symptom) => (
            <Button
              key={symptom}
              variant="outline"
              size="default"
              className="rounded-full text-base md:text-sm px-6 md:px-4 py-3 md:py-2 hover:bg-primary hover:text-primary-foreground"
              onClick={() => handleQuickSymptom(symptom)}
              disabled={isLoading}
              data-testid={`button-quick-symptom-${symptom.toLowerCase().replace(' ', '-')}`}
            >
              {symptom}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}

interface ChatMessageProps {
  item: ChatHistoryItem;
  onFeedback: (messageId: string, rating: "positive" | "negative") => void;
  feedbackGiven: boolean;
  formatMessage: (message: string) => React.ReactNode;
}

function ChatMessage({ item, onFeedback, feedbackGiven, formatMessage }: ChatMessageProps) {
  if (item.type === "user") {
    return (
      <div className="flex items-start gap-4 md:gap-3 justify-end">
        <div className="chat-bubble-user rounded-2xl rounded-tr-sm px-6 md:px-4 py-4 md:py-3 max-w-xs lg:max-w-md">
          <p className="text-primary-foreground text-base md:text-sm">{item.message}</p>
        </div>
        <div className="w-10 h-10 md:w-8 md:h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-secondary-foreground text-lg md:text-sm">👤</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 md:space-y-2">
      <div className="flex items-start gap-4 md:gap-3">
        <div className="w-10 h-10 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-primary-foreground text-lg md:text-sm">🐾</span>
        </div>
        <div className="chat-bubble-bot rounded-2xl rounded-tl-sm px-6 md:px-4 py-4 md:py-3 max-w-xs lg:max-w-md">
          {formatMessage(item.message)}
        </div>
      </div>
      
      {item.messageId && item.type === "bot" && (
        <div className="flex items-center justify-end gap-3 md:gap-2 mr-16 md:mr-12">
          <span className="text-sm md:text-xs text-muted-foreground">Was this helpful?</span>
          <Button
            variant="ghost"
            size="sm"
            className={`p-2 md:p-1 h-auto hover:bg-green-100 hover:text-green-600 ${
              feedbackGiven ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => !feedbackGiven && onFeedback(item.messageId!, "positive")}
            disabled={feedbackGiven}
            data-testid={`button-feedback-positive-${item.messageId}`}
          >
            <ThumbsUp className="w-5 h-5 md:w-4 md:h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`p-2 md:p-1 h-auto hover:bg-red-100 hover:text-red-600 ${
              feedbackGiven ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => !feedbackGiven && onFeedback(item.messageId!, "negative")}
            disabled={feedbackGiven}
            data-testid={`button-feedback-negative-${item.messageId}`}
          >
            <ThumbsDown className="w-5 h-5 md:w-4 md:h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-start gap-4 md:gap-3">
      <div className="w-10 h-10 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-primary-foreground text-lg md:text-sm">🐾</span>
      </div>
      <div className="chat-bubble-bot rounded-2xl rounded-tl-sm px-6 md:px-4 py-4 md:py-3">
        <div className="flex gap-2 md:gap-1">
          <div className="w-3 h-3 md:w-2 md:h-2 bg-muted-foreground rounded-full animate-bounce"></div>
          <div className="w-3 h-3 md:w-2 md:h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 md:w-2 md:h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
}