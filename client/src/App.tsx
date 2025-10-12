import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { ScrollToTop } from "./components/scroll-to-top";
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
const SymptomsDirectory = lazy(() => import("./pages/symptoms-directory"));
const DogAteChocolate = lazy(() => import("./pages/dog-ate-chocolate-3-hours-ago"));
const DogLimpingFrontLeg = lazy(() => import("./pages/dog-limping-front-left-leg-suddenly"));
const DogVomitingYellowFoam = lazy(() => import("./pages/dog-vomiting-yellow-foam-night"));
const DogWontDrinkWater = lazy(() => import("./pages/dog-wont-drink-water-will-eat"));
const DogDiarrheaBlood = lazy(() => import("./pages/dog-diarrhea-blood-emergency"));
const SeniorDogWeakLegs = lazy(() => import("./pages/senior-dog-weak-back-legs"));
const PuppyAteGrass = lazy(() => import("./pages/puppy-ate-grass-vomiting"));
const DogShakingWontEat = lazy(() => import("./pages/dog-shaking-wont-eat"));
const DogBreathingFastSleeping = lazy(() => import("./pages/dog-breathing-fast-sleeping"));
const DogLickingPawsNight = lazy(() => import("./pages/dog-licking-paws-night"));

// Cat symptom pages
const CatVomitingUndigestedFood = lazy(() => import("./pages/cat-vomiting-undigested-food-hours-after-eating"));
const CatNotEatingDrinking = lazy(() => import("./pages/cat-not-eating-drinking-3-days"));
const CatHidingWontComeOut = lazy(() => import("./pages/cat-hiding-wont-come-out"));
const CatBreathingMouthOpen = lazy(() => import("./pages/cat-breathing-mouth-open-after-playing"));
const CatDroolingActingWeird = lazy(() => import("./pages/cat-drooling-acting-weird"));
const CatThirdEyelidShowing = lazy(() => import("./pages/cat-third-eyelid-showing-suddenly"));
const KittenNotPooping = lazy(() => import("./pages/kitten-not-pooping-2-days"));
const CatMeowingNight = lazy(() => import("./pages/cat-meowing-night-after-moving"));
const IndoorCatTryingEscape = lazy(() => import("./pages/indoor-cat-trying-escape-suddenly"));
const CatUrinatingOutsideBox = lazy(() => import("./pages/cat-urinating-outside-litter-box-suddenly"));

// Bird symptom pages
const ParrotPluckingFeathersOut = lazy(() => import("./pages/parrot-plucking-feathers-out"));
const BudgieSittingBottomCage = lazy(() => import("./pages/budgie-sitting-bottom-cage"));
const BirdBreathingHeavyAfterFlying = lazy(() => import("./pages/bird-breathing-heavy-after-flying"));

// Small pet symptom pages
const HamsterNotEatingDrinking = lazy(() => import("./pages/hamster-not-eating-drinking"));
const GuineaPigWheekingConstantly = lazy(() => import("./pages/guinea-pig-wheeking-constantly"));
const RabbitNotPooping12Hours = lazy(() => import("./pages/rabbit-not-pooping-12-hours"));
const FerretHairLossSuddenly = lazy(() => import("./pages/ferret-hair-loss-suddenly"));
const ChinchillaFurSlipping = lazy(() => import("./pages/chinchilla-fur-slipping"));

// Fish symptom pages
const GoldfishSwimmingUpsideDown = lazy(() => import("./pages/goldfish-swimming-upside-down"));
const BettaFishNotEating3Days = lazy(() => import("./pages/betta-fish-not-eating-3-days"));

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
      <ScrollToTop />
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
        <Route path="/symptoms" component={SymptomsDirectory} />
        <Route path="/dog-ate-chocolate-3-hours-ago" component={DogAteChocolate} />
        <Route path="/dog-limping-front-left-leg-suddenly" component={DogLimpingFrontLeg} />
        <Route path="/dog-vomiting-yellow-foam-night" component={DogVomitingYellowFoam} />
        <Route path="/dog-wont-drink-water-will-eat" component={DogWontDrinkWater} />
        <Route path="/dog-diarrhea-blood-emergency" component={DogDiarrheaBlood} />
        <Route path="/senior-dog-weak-back-legs" component={SeniorDogWeakLegs} />
        <Route path="/puppy-ate-grass-vomiting" component={PuppyAteGrass} />
        <Route path="/dog-shaking-wont-eat" component={DogShakingWontEat} />
        <Route path="/dog-breathing-fast-sleeping" component={DogBreathingFastSleeping} />
        <Route path="/dog-licking-paws-night" component={DogLickingPawsNight} />
        
        {/* Cat symptom pages */}
        <Route path="/cat-vomiting-undigested-food-hours-after-eating" component={CatVomitingUndigestedFood} />
        <Route path="/cat-not-eating-drinking-3-days" component={CatNotEatingDrinking} />
        <Route path="/cat-hiding-wont-come-out" component={CatHidingWontComeOut} />
        <Route path="/cat-breathing-mouth-open-after-playing" component={CatBreathingMouthOpen} />
        <Route path="/cat-drooling-acting-weird" component={CatDroolingActingWeird} />
        <Route path="/cat-third-eyelid-showing-suddenly" component={CatThirdEyelidShowing} />
        <Route path="/kitten-not-pooping-2-days" component={KittenNotPooping} />
        <Route path="/cat-meowing-night-after-moving" component={CatMeowingNight} />
        <Route path="/indoor-cat-trying-escape-suddenly" component={IndoorCatTryingEscape} />
        <Route path="/cat-urinating-outside-litter-box-suddenly" component={CatUrinatingOutsideBox} />

        {/* Bird symptom pages */}
        <Route path="/parrot-plucking-feathers-out" component={ParrotPluckingFeathersOut} />
        <Route path="/budgie-sitting-bottom-cage" component={BudgieSittingBottomCage} />
        <Route path="/bird-breathing-heavy-after-flying" component={BirdBreathingHeavyAfterFlying} />

        {/* Small pet symptom pages */}
        <Route path="/hamster-not-eating-drinking" component={HamsterNotEatingDrinking} />
        <Route path="/guinea-pig-wheeking-constantly" component={GuineaPigWheekingConstantly} />
        <Route path="/rabbit-not-pooping-12-hours" component={RabbitNotPooping12Hours} />
        <Route path="/ferret-hair-loss-suddenly" component={FerretHairLossSuddenly} />
        <Route path="/chinchilla-fur-slipping" component={ChinchillaFurSlipping} />

        {/* Fish symptom pages */}
        <Route path="/goldfish-swimming-upside-down" component={GoldfishSwimmingUpsideDown} />
        <Route path="/betta-fish-not-eating-3-days" component={BettaFishNotEating3Days} />
        
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
      // Fallback for Safari iOS which doesn't support requestIdleCallback
      const scheduleTask = (window as any).requestIdleCallback || setTimeout;
      scheduleTask(() => {
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
