import { Link } from "wouter";

export function Footer() {
  return (
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
              <li><Link href="/symptoms" className="hover:text-primary font-semibold">📚 Symptom Library (30+ Guides)</Link></li>
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
  );
}
