import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { subscribeEmail } from "@/lib/huggingface";

interface EmailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EmailModal({ open, onOpenChange }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscriptionMutation = useMutation({
    mutationFn: (email: string) => subscribeEmail(email, "modal"),
    onSuccess: () => {
      toast({
        title: "Successfully subscribed! 🎉",
        description: "You'll receive weekly pet health tips in your inbox.",
      });
      onOpenChange(false);
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Subscription failed",
        description: "Please check your email address and try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      subscriptionMutation.mutate(email.trim());
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="text-center">
            <div className="w-24 h-18 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mx-auto mb-4 flex items-center justify-center text-4xl">
              📧
            </div>
            <DialogTitle className="text-2xl font-bold mb-2">
              Get Weekly Pet Health Tips
            </DialogTitle>
            <p className="text-muted-foreground">
              Join thousands of pet parents receiving expert health tips, symptom guides, and early warning signs delivered to your inbox.
            </p>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            data-testid="input-email-subscription"
          />
          <div className="flex gap-3">
            <Button 
              type="submit" 
              className="flex-1"
              disabled={subscriptionMutation.isPending}
              data-testid="button-subscribe"
            >
              {subscriptionMutation.isPending ? "Subscribing..." : "Subscribe Free"}
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={() => onOpenChange(false)}
              data-testid="button-cancel-subscription"
            >
              Later
            </Button>
          </div>
        </form>
        
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            ✅ No spam, unsubscribe anytime<br/>
            ✅ Expert-backed pet health content<br/>
            ✅ 100% free forever
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
