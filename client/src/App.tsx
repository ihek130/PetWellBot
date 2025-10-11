import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { trackPerformance, addResourceHints } from "./lib/performance";
import { Suspense, useEffect, lazy, useState } from "react";
// Updated with Contact page

// Immediate load components (critical path)
import Home from "./pages/home";
import { ChatbotModal } from "./components/chatbot-modal";

// Lazy load chat widget for performance (loads after initial render)
const FloatingChatWidget = lazy(() => import("./components/floating-chat-widget"));

// Lazy load secondary pages for performance
const DogHealthGuide = lazy(() => import("./pages/dog-health-guide"));
const CatCareTips = lazy(() => import("./pages/cat-care-tips"));
const BirdHealthBasics = lazy(() => import("./pages/bird-health-basics"));
const SmallPetCare = lazy(() => import("./pages/small-pet-care"));
const DigestiveIssues = lazy(() => import("./pages/digestive-issues"));
const VomitingNausea = lazy(() => import("./pages/vomiting-nausea"));
const LossOfAppetite = lazy(() => import("./pages/loss-of-appetite"));
const LethargyFatigue = lazy(() => import("./pages/lethargy-fatigue"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy"));
const TermsOfService = lazy(() => import("./pages/terms-of-service"));
const MedicalDisclaimer = lazy(() => import("./pages/medical-disclaimer"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));
const NotFound = lazy(() => import("./pages/not-found"));

// Performance-optimized loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-emerald-600 font-medium">Loading...</p>
    </div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/dog-health-guide" component={DogHealthGuide} />
        <Route path="/cat-care-tips" component={CatCareTips} />
        <Route path="/bird-health-basics" component={BirdHealthBasics} />
        <Route path="/small-pet-care" component={SmallPetCare} />
        <Route path="/digestive-issues" component={DigestiveIssues} />
        <Route path="/vomiting-nausea" component={VomitingNausea} />
        <Route path="/loss-of-appetite" component={LossOfAppetite} />
        <Route path="/lethargy-fatigue" component={LethargyFatigue} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/medical-disclaimer" component={MedicalDisclaimer} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default function App() {
  const [isChatbotModalOpen, setIsChatbotModalOpen] = useState(false);

  useEffect(() => {
    // Initialize performance optimizations
    addResourceHints();
    trackPerformance();
    
    // Listen for global chatbot open events
    const handleOpenChatbot = () => setIsChatbotModalOpen(true);
    window.addEventListener('open_chatbot_modal', handleOpenChatbot);
    
    // Track chat widget impressions for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      requestIdleCallback(() => {
        (window as any).gtag('event', 'chat_widget_impression', {
          timestamp: new Date().toISOString(),
        });
      });
    }

    return () => {
      window.removeEventListener('open_chatbot_modal', handleOpenChatbot);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Suspense fallback={null}>
          <FloatingChatWidget onChatStart={() => setIsChatbotModalOpen(true)} />
        </Suspense>
        <ChatbotModal 
          isOpen={isChatbotModalOpen} 
          onClose={() => setIsChatbotModalOpen(false)} 
        />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
