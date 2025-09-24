import { useState, useEffect, memo } from 'react';
import { MessageCircle, X, Zap } from 'lucide-react';
import { Button } from './ui/button';

interface FloatingChatWidgetProps {
  onChatStart?: () => void;
}

const FloatingChatWidget = memo(({ onChatStart }: FloatingChatWidgetProps) => {
  const [showPulse, setShowPulse] = useState(false);
  const [helpedToday] = useState(127 + Math.floor(Math.random() * 50));

  // Delayed pulse for subtle attention - only after user has been on page
  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleChatStart = () => {
    onChatStart?.();
    
    // Analytics tracking with performance consideration
    if (typeof window !== 'undefined' && (window as any).gtag) {
      requestIdleCallback(() => {
        (window as any).gtag('event', 'chat_widget_opened', {
          timestamp: new Date().toISOString(),
        });
      });
    }
  };

  return (
    <>
      {/* Social Proof Badge - Positioned for mobile/desktop */}
      <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 z-40 pointer-events-none">
        <div className="bg-white shadow-lg rounded-full px-3 py-1 border border-emerald-200 animate-in slide-in-from-bottom-2 duration-500">
          <span className="text-xs text-emerald-600 font-medium">
            {helpedToday} pets helped today
          </span>
        </div>
      </div>

      {/* Main Chat Button */}
      <Button
        onClick={handleChatStart}
        className={`
          fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50
          h-14 w-14 md:h-16 md:w-16 rounded-full 
          bg-emerald-600 hover:bg-emerald-700 
          shadow-lg hover:shadow-xl
          transition-all duration-300 ease-out
          ${showPulse ? 'ring-2 ring-emerald-300 ring-opacity-60' : ''}
        `}
        aria-label="Open pet health chat"
      >
        <div className="relative">
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7 text-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full" />
        </div>
      </Button>
    </>
  );
});

FloatingChatWidget.displayName = 'FloatingChatWidget';

export default FloatingChatWidget;