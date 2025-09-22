import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThumbsUp, ThumbsDown, Send, X, MessageCircle } from "lucide-react";
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

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChatbotModal({ isOpen, onClose }: ChatbotModalProps) {
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

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

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
    if (chatHistory.length > 0 && isOpen) {
      const timer = setTimeout(() => {
        scrollToBottom();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [chatHistory, isOpen]);

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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6">
        {/* Modal Content */}
        <div className={`
          bg-background rounded-none md:rounded-2xl shadow-2xl
          w-full h-full md:w-[800px] md:h-[700px] md:max-h-[90vh]
          flex flex-col overflow-hidden
          transform transition-all duration-300 ease-out
          animate-in slide-in-from-bottom-full md:slide-in-from-bottom-8
          md:fade-in md:zoom-in-95
        `}>
          
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-6 md:p-5 flex items-center justify-between border-b">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 md:w-5 md:h-5" />
              </div>
              <div>
                <h2 className="text-xl md:text-lg font-bold">PetWellBot Assistant</h2>
                <p className="text-primary-foreground/80 text-sm">Your AI Pet Care Helper</p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Chat Messages */}
          <ScrollArea 
            ref={scrollAreaRef}
            className="flex-1 p-6 md:p-4"
          >
            <div className="space-y-4 md:space-y-3">
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

          {/* Input Area */}
          <div className="border-t bg-muted/5 p-6 md:p-4">
            <form onSubmit={handleSendMessage} className="flex gap-3 mb-4">
              <Input
                type="text"
                placeholder="Ask about your pet's health, behavior, or care..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-1 h-11 text-base"
                disabled={isLoading}
                data-testid="input-chat-message"
              />
              <Button 
                type="submit" 
                disabled={isLoading || !messageInput.trim()}
                className="h-11 px-6"
                data-testid="button-send-message"
              >
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
            </form>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground font-medium">Quick symptoms:</span>
              {quickSymptoms.map((symptom) => (
                <Button
                  key={symptom}
                  variant="outline"
                  size="sm"
                  className="rounded-full text-sm hover:bg-primary hover:text-primary-foreground"
                  onClick={() => handleQuickSymptom(symptom)}
                  disabled={isLoading}
                  data-testid={`button-quick-symptom-${symptom.toLowerCase().replace(' ', '-')}`}
                >
                  {symptom}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Trigger Button Component
export function ChatbotTrigger({ onClick }: { onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className="w-full min-h-16 px-4 py-3 text-sm sm:text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 leading-tight break-words hyphens-auto"
      style={{
        wordWrap: 'break-word',
        overflowWrap: 'anywhere',
        whiteSpace: 'normal',
        lineHeight: '1.2'
      }}
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
      <span className="flex-1">Start Chat with PetWellBot</span>
    </Button>
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
      <div className="flex items-start gap-3 justify-end">
        <div className="chat-bubble-user rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs lg:max-w-md">
          <p className="text-primary-foreground text-sm">{item.message}</p>
        </div>
        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-secondary-foreground text-sm">👤</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-primary-foreground text-sm">🐾</span>
        </div>
        <div className="chat-bubble-bot rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs lg:max-w-md">
          {formatMessage(item.message)}
        </div>
      </div>
      
      {item.messageId && item.type === "bot" && (
        <div className="flex items-center justify-end gap-2 mr-12">
          <span className="text-xs text-muted-foreground">Was this helpful?</span>
          <Button
            variant="ghost"
            size="sm"
            className={`p-1 h-auto hover:bg-green-100 hover:text-green-600 ${
              feedbackGiven ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => !feedbackGiven && onFeedback(item.messageId!, "positive")}
            disabled={feedbackGiven}
            data-testid={`button-feedback-positive-${item.messageId}`}
          >
            <ThumbsUp className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={`p-1 h-auto hover:bg-red-100 hover:text-red-600 ${
              feedbackGiven ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => !feedbackGiven && onFeedback(item.messageId!, "negative")}
            disabled={feedbackGiven}
            data-testid={`button-feedback-negative-${item.messageId}`}
          >
            <ThumbsDown className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-primary-foreground text-sm">🐾</span>
      </div>
      <div className="chat-bubble-bot rounded-2xl rounded-tl-sm px-4 py-3">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
}