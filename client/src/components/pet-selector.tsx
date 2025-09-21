import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface PetSelectorProps {
  selectedPet: string | null;
  petName: string | null;
  onPetSelect: (petType: string) => void;
  onNameConfirm: (name: string) => void;
  isSetupComplete: boolean;
}

const pets = [
  { type: "dog", emoji: "🐕", label: "Dog" },
  { type: "cat", emoji: "🐱", label: "Cat" },
  { type: "bird", emoji: "🦜", label: "Bird" },
  { type: "rabbit", emoji: "🐰", label: "Rabbit" },
  { type: "hamster", emoji: "🐹", label: "Hamster" },
  { type: "fish", emoji: "🐠", label: "Fish" },
];

export function PetSelector({ selectedPet, petName, onPetSelect, onNameConfirm, isSetupComplete }: PetSelectorProps) {
  const [nameInput, setNameInput] = useState("");

  if (isSetupComplete) return null;

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onNameConfirm(nameInput.trim());
    }
  };

  return (
    <div className="space-y-6">
      {!selectedPet && (
        <div className="p-6 border-b border-border">
          <h3 className="font-semibold text-foreground mb-4">First, what type of pet do you have?</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {pets.map((pet) => (
              <Button
                key={pet.type}
                variant="outline"
                className="p-3 h-auto flex-col border-2 hover:border-primary hover:bg-primary/5 transition-all"
                onClick={() => onPetSelect(pet.type)}
                data-testid={`select-pet-${pet.type}`}
              >
                <div className="text-2xl mb-1">{pet.emoji}</div>
                <div className="text-sm font-medium">{pet.label}</div>
              </Button>
            ))}
          </div>
        </div>
      )}

      {selectedPet && !petName && (
        <div className="p-6 border-b border-border">
          <h3 className="font-semibold text-foreground mb-4">
            What's your {selectedPet}'s name?
          </h3>
          <form onSubmit={handleNameSubmit} className="flex gap-3">
            <Input
              type="text"
              placeholder="Enter your pet's name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="flex-1"
              autoFocus
              data-testid="input-pet-name"
            />
            <Button 
              type="submit" 
              disabled={!nameInput.trim()}
              data-testid="button-confirm-name"
            >
              Continue
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
