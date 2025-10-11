import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { ChatbotTrigger } from "@/components/chatbot-modal";
import { FAQSection } from "@/components/faq-section";
import { EmailModal } from "@/components/email-modal";
import { SEOHead } from "@/components/seo-head";
import { SeasonalHealth } from "@/components/seasonal-health";
import { AgeSpecificCare } from "@/components/age-specific-care";
import { AdvancedEmergency } from "@/components/advanced-emergency";
import { Logo } from "../components/logo";
import { SocialProofBanner } from "../components/social-proof-banner";
import { TestimonialCarousel } from "../components/testimonial-carousel";
import { TrustIndicators } from "../components/trust-indicators";

const pets = [
  { emoji: "🐕", label: "Dogs" },
  { emoji: "🐱", label: "Cats" },
  { emoji: "🦜", label: "Birds" },
  { emoji: "🐰", label: "Rabbits" },
  { emoji: "🐹", label: "Hamsters" },
  { emoji: "🐠", label: "Fish" },
];

const trustFeatures = [
  { icon: "✓", color: "text-green-600 bg-green-100", text: "AI-powered pet symptom analysis" },
  { icon: "🔒", color: "text-blue-600 bg-blue-100", text: "100% Free & Private" },
  { icon: "📚", color: "text-purple-600 bg-purple-100", text: "Emergency decision guidance" },
  { icon: "⚡", color: "text-orange-600 bg-orange-100", text: "Instant health responses" },
];

export default function Home() {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  
  const handleChatbotOpen = () => {
    // Dispatch event to open global chatbot modal
    window.dispatchEvent(new CustomEvent('open_chatbot_modal'));
  };

  useEffect(() => {
    // Force page to start at top, override any browser auto-scroll to anchors
    window.scrollTo(0, 0);
    // Also prevent scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Auto-show email modal after 30 seconds if not shown before
    const timer = setTimeout(() => {
      if (!localStorage.getItem('emailModalShown')) {
        setEmailModalOpen(true);
        localStorage.setItem('emailModalShown', 'true');
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <SEOHead />
      
      {/* Header - Mobile Optimized */}
      <header className="bg-card/90 backdrop-blur-sm shadow-lg sticky top-0 z-40 border-b border-border/20">
        <div className="container mx-auto px-6 py-6 md:px-4 md:py-4">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">
            {/* Mobile-First Logo - Prominent and Readable */}
            <div className="flex flex-col items-center md:flex-row md:items-center">
              <Logo variant="full" size="xl" className="mb-2 md:mb-0" />
            </div>
            
            {/* Navigation - Mobile Friendly */}
            <nav className="flex items-center gap-6 md:gap-8">
              <a href="#chatbot" className="text-foreground hover:text-primary transition-colors font-medium text-lg md:text-base">Chat</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium text-lg md:text-base">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Social Proof Banner */}
      <SocialProofBanner />

      {/* Main Content - Mobile Optimized */}
      <main className="container mx-auto px-6 py-8 md:px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Pet Gallery - Mobile First */}
          <div className="order-1 lg:order-1 lg:col-span-1">
            <Card className="p-8 shadow-lg md:p-6">
              <h3 className="font-bold text-foreground mb-6 text-center text-xl md:text-lg">We Help All Pets 💕</h3>
              <div className="grid grid-cols-2 gap-6 md:gap-4">
                {pets.map((pet) => (
                  <div
                    key={pet.label}
                    className="pet-card cursor-pointer p-6 rounded-xl hover:bg-muted transition-colors text-center md:p-3"
                    data-testid={`pet-card-${pet.label.toLowerCase()}`}
                  >
                    <div className="pet-emoji text-6xl mb-3 md:text-4xl md:mb-2">{pet.emoji}</div>
                    <p className="text-base font-semibold text-foreground md:text-sm">{pet.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Center - Chatbot Interface - Priority on Mobile */}
          <div className="order-2 lg:order-2 lg:col-span-2" id="chatbot">
            <Card className="p-8 shadow-lg md:p-6 border-l-4 border-l-emerald-400">
              <div className="text-center mb-6">
                <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  🌿 Pet Health Expert Available
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3 md:text-xl">
                  Is Your Pet Acting Strange?
                </h2>
                <p className="text-lg font-semibold text-emerald-700 mb-2 md:text-base">
                  Get Expert AI Pet Health Analysis in 10 Seconds
                </p>
                <p className="text-muted-foreground text-base md:text-sm">
                  Emergency symptom analysis • When to call vet guidance • Available 24/7
                </p>
              </div>
              <ChatbotTrigger onClick={handleChatbotOpen} />
              
              {/* Quick Stats Below CTA */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <TrustIndicators />
              </div>
            </Card>
          </div>

          {/* Right Sidebar - Trust Indicators - Mobile Optimized */}
          <div className="order-3 lg:order-3 lg:col-span-1">
            <Card className="p-8 shadow-lg md:p-6">
              <h3 className="font-bold text-foreground mb-6 text-xl md:text-lg md:mb-4">Why Trust Us?</h3>
              <div className="space-y-6 md:space-y-3">
                {trustFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 md:gap-3">
                    <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center text-lg md:w-8 md:h-8 md:text-sm`}>
                      {feature.icon}
                    </div>
                    <span className="text-base font-medium text-foreground md:text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-12 md:mt-8">
          <TestimonialCarousel />
        </div>

        {/* FAQ Section - Mobile Optimized */}
        <div className="mt-12 md:mt-8">
          <FAQSection />
        </div>

        {/* Comprehensive Content Sections for Enhanced SEO */}
        <div className="mt-16 space-y-16">
          {/* Seasonal Health Guide */}
          <SeasonalHealth />
          
          {/* Age-Specific Care Guide */}
          <AgeSpecificCare />
          
          {/* Advanced Emergency Protocols */}
          <AdvancedEmergency />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card mt-16 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🐾</span>
                <span className="font-bold text-foreground">Pet Symptom Checker</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Free AI pet health assistant and symptom checker for dogs, cats, birds, rabbits, hamsters, and fish. Emergency decision guidance - educational purposes only.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Pet Health Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/dog-health-guide" className="hover:text-primary">Dog Health Guide</Link></li>
                <li><Link href="/cat-care-tips" className="hover:text-primary">Cat Care Tips</Link></li>
                <li><Link href="/bird-health-basics" className="hover:text-primary">Bird Health Basics</Link></li>
                <li><Link href="/small-pet-care" className="hover:text-primary">Small Pet Care</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Emergency Symptoms</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/vomiting-nausea" className="hover:text-primary">Dog & Cat Vomiting</Link></li>
                <li><Link href="/loss-of-appetite" className="hover:text-primary">Pet Not Eating or Drinking</Link></li>
                <li><Link href="/lethargy-fatigue" className="hover:text-primary">Lethargy & Fatigue</Link></li>
                <li><Link href="/digestive-issues" className="hover:text-primary">Digestive Issues</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link href="/medical-disclaimer" className="hover:text-primary">Medical Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Pet Symptom Checker. All rights reserved. This tool is for educational purposes only and does not replace professional veterinary advice.</p>
          </div>
        </div>
      </footer>

      {/* Email Modal */}
      <EmailModal open={emailModalOpen} onOpenChange={setEmailModalOpen} />

    </div>
  );
}
