import { SEOHead } from '../components/seo-head';
import { Breadcrumb } from '../components/breadcrumb';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import { Home, AlertTriangle, Heart, Phone, FileText, Shield, Activity } from 'lucide-react';

export default function MedicalDisclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <SEOHead 
        title="Medical Disclaimer - PetWellBot | Important Health Information"
        description="Important medical disclaimer about PetWellBot pet health information service. This is for educational purposes only and does not replace professional veterinary advice."
        keywords="medical disclaimer, pet health disclaimer, veterinary advice, pet emergency care, educational purposes"
        canonicalUrl="https://petwellbot.com/medical-disclaimer"
      />
      
      {/* Header - Consistent with Privacy Policy */}
      <header className="bg-card/90 backdrop-blur-sm shadow-lg sticky top-0 z-40 border-b border-border/20">
        <div className="container mx-auto px-6 py-4 md:px-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="flex items-center gap-2 hover:bg-emerald-100">
                <Home className="w-5 h-5" />
                <span className="font-semibold">Back to Home</span>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-emerald-600" />
              <span className="text-lg font-bold text-foreground">Medical Disclaimer</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Consistent with Privacy Policy */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Medical Disclaimer" }]} />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Medical Disclaimer
            </h1>
            <p className="text-lg text-emerald-100">
              Important information about using PetWellBot for pet health guidance.
            </p>
            <p className="text-sm text-emerald-200 mt-4">
              Last updated: October 11, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Critical Notice */}
            <Card className="mb-8 border-red-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">⚠️ CRITICAL: READ THIS FIRST</h2>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      This information is for <strong>EDUCATIONAL PURPOSES ONLY</strong> and does NOT replace 
                      actual veterinary advice, diagnosis, or treatment.
                    </p>
                    <p className="text-gray-700 font-semibold">
                      If your pet is experiencing a medical emergency, contact your veterinarian or emergency 
                      animal hospital IMMEDIATELY.
                    </p>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-red-800 font-medium">
                    🚨 Do not rely on this website for emergency medical guidance
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Purpose of Service */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">1. Purpose of This Service</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  PetWellBot is an <strong>educational and informational tool</strong> designed to help pet owners 
                  better understand common symptoms and conditions. Our AI-powered chatbot and health articles are meant to:
                </p>
                <ul className="space-y-2">
                  {[
                    "Provide general knowledge about pet health topics",
                    "Help you understand common pet symptoms",
                    "Offer guidance on when veterinary care may be needed",
                    "Educate pet owners about preventive care",
                    "Supplement (NOT replace) professional veterinary advice"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4 rounded">
                  <p className="text-yellow-900 font-semibold">
                    ⚠️ This service does NOT provide veterinary medical advice, diagnosis, or treatment.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* No Veterinary Relationship */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">2. No Veterinarian-Client-Patient Relationship</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Using this website does NOT create a veterinarian-client-patient relationship.</strong>
                </p>
                <p className="text-gray-700 mb-4">The information provided through our service:</p>
                <ul className="space-y-2">
                  {[
                    "Is general in nature and not tailored to your specific pet's condition",
                    "Cannot replace a physical examination by a licensed veterinarian",
                    "Should not be considered as professional veterinary advice",
                    "Does not constitute a diagnosis of your pet's health condition",
                    "Cannot account for your pet's individual medical history, breed, age, or other factors"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Emergency Situations */}
            <Card className="mb-8 border-red-200 bg-red-50/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">3. Emergency Situations - ACT IMMEDIATELY</h2>
                </div>
                <div className="bg-red-100 border-2 border-red-500 p-6 mb-4 rounded-lg">
                  <h3 className="font-bold text-red-900 text-lg mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    🚨 CALL YOUR VET IMMEDIATELY IF YOUR PET SHOWS:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold mb-2 text-red-900">Life-Threatening Signs:</p>
                      <ul className="text-sm space-y-1 text-red-800">
                        <li>• Difficulty breathing or gasping for air</li>
                        <li>• Choking or severe coughing</li>
                        <li>• Unconsciousness or collapse</li>
                        <li>• Seizures or convulsions</li>
                        <li>• Severe bleeding or trauma</li>
                        <li>• Inability to stand or walk</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2 text-red-900">Urgent Symptoms:</p>
                      <ul className="text-sm space-y-1 text-red-800">
                        <li>• Bloated, hard, or painful abdomen</li>
                        <li>• Continuous vomiting or diarrhea</li>
                        <li>• Blood in vomit, stool, or urine</li>
                        <li>• Suspected poisoning or toxin ingestion</li>
                        <li>• Extreme pain or distress</li>
                        <li>• Inability to urinate or defecate</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-red-900 font-bold text-center mt-4">
                    DO NOT wait. DO NOT rely on this website. CALL YOUR VET NOW.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Always Consult a Veterinarian */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">4. Always Consult a Licensed Veterinarian</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>You must ALWAYS consult with a qualified, licensed veterinarian before:</strong>
                </p>
                <div className="space-y-2">
                  {[
                    "Making ANY treatment decisions for your pet",
                    "Administering medications, supplements, or remedies",
                    "Changing your pet's diet or feeding routine",
                    "Interpreting symptoms, test results, or health changes",
                    "Discontinuing any prescribed medications or treatments",
                    "Implementing home care recommendations",
                    "Delaying professional veterinary care based on information from this site"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-gray-700"><strong>{item}</strong></span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="mb-8 border-orange-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900">5. Limitation of Liability - YOU ARE RESPONSIBLE</h2>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4 rounded">
                  <p className="text-orange-900 font-bold">
                    ⚠️ CRITICAL LEGAL NOTICE: We are NOT responsible if you take this information as veterinary 
                    advice and implement recommendations without professional veterinary consultation.
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>By using this website, you explicitly acknowledge and agree that:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>The information is general and may not apply to your pet's specific situation</li>
                  <li>You understand the critical importance of professional veterinary care</li>
                  <li>You will NOT rely solely on this information for making medical decisions</li>
                  <li><strong>You assume FULL responsibility</strong> for any actions taken based on this information</li>
                  <li><strong>PetWellBot is NOT liable</strong> for any harm, injury, illness, death, or veterinary costs</li>
                  <li>Delays in seeking proper veterinary care could result in serious harm to your pet</li>
                </ul>
              </CardContent>
            </Card>

            {/* Individual Pet Variations */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Individual Pet Variations</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Every pet is unique.</strong> Factors that affect your pet's health include:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-teal-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Physical Factors</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Age (puppies, kittens, senior pets)</li>
                      <li>• Breed-specific conditions</li>
                      <li>• Size & weight variations</li>
                      <li>• Medical history</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-teal-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Other Factors</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Current medications</li>
                      <li>• Environment & diet</li>
                      <li>• Lifestyle factors</li>
                      <li>• Pre-existing conditions</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 mt-4 font-semibold">
                  What may be normal for one pet could indicate a serious condition in another. Only a qualified 
                  veterinarian who has examined your pet can properly assess their specific situation.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8 border-emerald-300 bg-emerald-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Remember: Your Vet is Your Partner</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Your veterinarian is your best resource for your pet's health. They have examined your pet, 
                  know their medical history, and can provide personalized care. This website is a supplementary 
                  educational tool, not a replacement for the trusted relationship you have with your veterinary care team.
                </p>
                <p className="text-gray-700 font-semibold">
                  When in doubt, always call your vet. It's better to be cautious than to wait too long.
                </p>
                <div className="bg-white p-4 rounded-lg border border-emerald-200 mt-4">
                  <p className="text-gray-900 font-medium mb-2">Questions about this disclaimer?</p>
                  <p className="text-gray-700">
                    Email: <a href="mailto:support@petwellbot.com" className="text-emerald-600 hover:underline font-medium">support@petwellbot.com</a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Back to Home CTA */}
            <div className="text-center mt-8">
              <Link to="/">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Home className="w-5 h-5 mr-2" />
                  Return to Pet Health Assistant
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card mt-16 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 PetWellBot. All rights reserved. | <Link href="/about" className="hover:text-emerald-600">About Us</Link> | <Link href="/contact" className="hover:text-emerald-600">Contact Us</Link> | <Link href="/privacy-policy" className="hover:text-emerald-600">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-emerald-600">Terms of Service</Link> | <Link href="/medical-disclaimer" className="hover:text-emerald-600">Medical Disclaimer</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
