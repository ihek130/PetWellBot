import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    id: "dog-vomiting",
    question: "Why is my dog vomiting yellow foam?",
    answer: "Dog vomiting yellow foam causes typically include empty stomach bile, eating too fast, dietary changes, or stress. If your dog vomits yellow foam repeatedly, has other symptoms, or seems unwell, consult your veterinarian. Learn more about dog vomiting causes in our detailed guides.",
  },
  {
    id: "cat-not-eating",
    question: "My cat is not eating but drinking water - what should I do?",
    answer: "When a cat is not eating but drinking water, it could indicate dental problems, stress, illness, or food aversion. Monitor for 24 hours, try different foods, and consult a vet if the behavior continues. Read about cat eating problems for comprehensive guidance.",
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
      <Card className="p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-foreground text-center mb-8">
          Frequently Asked Pet Health Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqData.map((item) => (
            <div key={item.id} className="border border-border rounded-lg overflow-hidden">
              <Button
                variant="ghost"
                className="w-full text-left p-4 font-semibold text-foreground hover:bg-primary/10 hover:text-primary transition-colors flex justify-between items-center h-auto"
                onClick={() => toggleItem(item.id)}
                data-testid={`button-faq-${item.id}`}
              >
                <span className="flex-1 text-left">{item.question}</span>
                {openItems.has(item.id) ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </Button>
              {openItems.has(item.id) && (
                <div className="p-4 pt-0 text-muted-foreground border-t border-border">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
