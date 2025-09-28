import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    id: "dog-vomiting",
    question: "Why is my dog vomiting yellow?",
    answer: "Dog vomiting yellow foam causes typically include empty stomach bile, eating too fast, dietary changes, or stress. If your dog vomits yellow foam repeatedly, has other symptoms, or seems unwell, consult your veterinarian. Learn more about dog vomiting causes in our detailed guides.",
  },
  {
    id: "cat-not-eating",
    question: "My cat is not eating but drinking water - what should I do?",
    answer: "When a cat is not eating but drinking water, it could indicate dental problems, stress, illness, or food aversion. Monitor for 24 hours, try different foods, and consult a vet if the behavior continues. Read about cat eating problems for comprehensive guidance.",
  },
  {
    id: "bird-tail-bobbing",
    question: "Is bird tail bobbing always an emergency?",
    answer: "Bird tail bobbing often indicates respiratory distress and is usually a serious emergency requiring immediate avian veterinary attention. However, very mild tail movement during sleep or after exertion may be normal. If your bird is tail bobbing while awake, sitting on the cage bottom, breathing with an open beak, or showing fluffed feathers, seek emergency vet care immediately. Birds hide illness well and can deteriorate rapidly. Use our AI pet health assistant to assess your bird's specific symptoms and get guidance on whether this requires emergency vet attention tonight or can wait until morning.",
  },
  {
    id: "rabbit-not-eating",
    question: "When should I worry about my rabbit not eating?",
    answer: "Rabbits not eating for more than 12 hours is considered a veterinary emergency due to risk of GI stasis, a potentially fatal condition. Unlike dogs and cats, rabbits must eat continuously to maintain proper digestive function. If your rabbit hasn't eaten for 6-8 hours, try offering favorite fresh herbs, hay, or pellets. After 12 hours with no food intake, seek emergency veterinary care immediately. Signs that make this more urgent include not producing feces, hunched posture, grinding teeth, or lethargy. Our AI emergency decision tool can help assess your rabbit's symptoms and determine if immediate vet attention is needed.",
  },
  {
    id: "should-call-vet-tonight",
    question: "Should I call the vet tonight or wait until morning?",
    answer: "Call the emergency vet tonight if your pet shows difficulty breathing, severe bleeding, unconsciousness, repeated vomiting, inability to urinate, suspected poisoning, severe pain, or bloated abdomen. For less severe symptoms like mild lethargy, slight appetite changes, or minor limping without visible injury, monitoring until morning may be appropriate. However, trust your instincts - you know your pet best. Puppies, kittens, senior pets, and those with chronic conditions should be seen sooner rather than later. Our AI pet health assistant analyzes your pet's specific symptoms, age, and medical history to provide personalized guidance on whether emergency care is needed tonight.",
  },
  {
    id: "hamster-emergency",
    question: "How do I know if my hamster needs emergency vet care?",
    answer: "Hamster emergencies include not moving for several hours, difficulty breathing, wet tail (diarrhea around tail area), not eating or drinking for 24+ hours, bleeding, seizures, or dramatic temperature changes in their environment. Hamsters are prey animals that hide illness, so any sudden behavior change warrants attention. Check if they're responsive to gentle touch, if their cage temperature is appropriate (65-75°F), and if they've been eating, drinking, and producing waste normally. Because hamsters have fast metabolisms, they can decline quickly when ill. Use our AI pet health assistant to evaluate your hamster's symptoms and get immediate guidance on emergency vs routine care needs.",
  },
  {
    id: "ai-pet-accuracy",
    question: "How accurate is AI for pet emergency decisions?",
    answer: "Our AI pet health assistant uses veterinary emergency protocols and symptom assessment guidelines to help determine urgency levels for common pet health situations. While AI cannot replace professional veterinary diagnosis, it excels at analyzing multiple symptoms together, considering your pet's age and breed factors, and providing consistent guidance based on established emergency criteria. The AI is most accurate for well-documented conditions and emergency vs non-emergency decisions. It's designed as a decision-support tool to help you determine timing - whether you need emergency care now, can schedule a regular appointment, or can monitor at home safely. Always seek professional veterinary care for definitive diagnosis and treatment.",
  },
  {
    id: "puppy-diarrhea",
    question: "What are safe puppy diarrhea home remedies?",
    answer: "Puppy diarrhea home remedies include withholding food for 12-24 hours (with vet approval), offering bland foods like boiled chicken and rice, ensuring hydration, and probiotics. Always consult your vet for persistent diarrhea. Discover puppy care tips for prevention.",
  },
  {
    id: "bird-sneezing",
    question: "Why is my bird sneezing frequently?",
    answer: "Bird sneezing reasons include dust, dry air, respiratory infections, allergies, or environmental irritants. Ensure proper humidity, clean surroundings, and monitor for other symptoms. Frequent sneezing warrants a vet visit. Learn about bird health care essentials.",
  },
  {
    id: "hamster-not-moving",
    question: "My hamster is not moving much - should I be worried?",
    answer: "Hamster not moving symptoms can indicate illness, age, hibernation-like state, or stress. Check temperature, food intake, and breathing. If lethargy persists or other symptoms appear, seek exotic pet veterinary care immediately. Understand hamster behavior patterns.",
  },
  {
    id: "emergency-vet",
    question: "When should I take my pet to the emergency vet?",
    answer: "Emergency vet visits are needed for difficulty breathing, severe bleeding, unconsciousness, seizures, suspected poisoning, severe pain, or inability to urinate. Trust your instincts - when in doubt, seek immediate veterinary care. Emergency pet care guide provides comprehensive information.",
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section id="faq" className="mt-16">
      <Card className="p-6 sm:p-8 shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-4 sm:mb-6 leading-tight">
          Pet Emergency Questions - AI Health Assistant
        </h2>
        <p className="text-center text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-3xl mx-auto">
          Get instant guidance on pet emergencies and health concerns. Our AI assistant helps you decide when to call the vet for dogs, cats, birds, rabbits, and small pets.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:items-start">
          {faqData.map((item) => (
            <div key={item.id} className="border border-border rounded-lg overflow-hidden bg-card">
              <Button
                variant="ghost"
                className="w-full text-left p-3 sm:p-4 font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors flex justify-between items-start gap-3 h-auto min-h-[60px]"
                onClick={() => toggleItem(item.id)}
                data-testid={`button-faq-${item.id}`}
                style={{
                  wordWrap: 'break-word',
                  overflowWrap: 'anywhere',
                  whiteSpace: 'normal'
                }}
              >
                <span className="flex-1 text-left text-sm sm:text-base leading-snug pr-2 break-words hyphens-auto">
                  {item.question}
                </span>
                <div className="flex-shrink-0 mt-1">
                  {openItems.has(item.id) ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>
              </Button>
              {openItems.has(item.id) && (
                <div className="p-3 sm:p-4 pt-0 text-muted-foreground border-t border-border">
                  <p className="text-sm sm:text-base leading-relaxed break-words hyphens-auto mb-3 sm:mb-4" style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'anywhere'
                  }}>
                    {item.answer}
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2 sm:p-3">
                    <p className="text-xs sm:text-sm text-emerald-700 text-center">
                      💬 <strong>Need personalized assessment?</strong> Use our AI pet health assistant below for instant guidance on your specific situation.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
