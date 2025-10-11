import { SEOHead } from '../components/seo-head';
import { Breadcrumb } from '../components/breadcrumb';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import { Home, FileText, AlertCircle, Scale, Shield, BookOpen, Users, Globe, Mail, Ban } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <SEOHead 
        title="Terms of Service - PetWellBot | User Agreement & Guidelines"
        description="Terms and conditions for using PetWellBot pet health assistant service. Understand your rights and responsibilities when using our AI-powered pet symptom checker."
        keywords="terms of service, pet health terms, PetWellBot terms, user agreement, service conditions"
        canonicalUrl="https://petwellbot.com/terms-of-service"
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
              <FileText className="w-6 h-6 text-emerald-600" />
              <span className="text-lg font-bold text-foreground">Terms of Service</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Consistent with Privacy Policy */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Terms of Service" }]} />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-emerald-100">
              Please read these terms carefully before using PetWellBot services.
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
            
            {/* Introduction */}
            <Card className="mb-8 border-emerald-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Please Read Carefully</h2>
                    <p className="text-gray-700 leading-relaxed">
                      By using PetWellBot, you agree to these terms. If you disagree with any part of these terms, 
                      please do not use our service.
                    </p>
                  </div>
                </div>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
                  <p className="text-emerald-800 font-medium">
                    ✓ Educational purposes only • ✓ Not veterinary advice • ✓ Free to use
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Agreement to Terms */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">1. Agreement to Terms</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  By accessing and using PetWellBot ("Service", "Website", "we", "us", or "our"), 
                  you accept and agree to be bound by these Terms of Service. These Terms apply to all visitors, 
                  users, and others who access or use the Service.
                </p>
                <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-300">
                  <p className="text-gray-800">
                    <strong>Who We Are:</strong> PetWellBot is an AI-powered pet health information service 
                    providing educational content and guidance about pet health symptoms and care. 
                    We are not a veterinary practice and do not provide veterinary medical services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">2. Service Description</h2>
                </div>
                <p className="text-gray-700 mb-4">PetWellBot provides:</p>
                <ul className="space-y-2">
                  {[
                    "AI-powered pet symptom analysis and information",
                    "Educational content about pet health for dogs, cats, birds, and small pets",
                    "Emergency decision guidance to help determine when to seek veterinary care",
                    "Health articles and resources for pet owners",
                    "Free access to pet health chatbot assistant"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mt-4">
                  The service is provided free of charge and does not require user registration or personal information.
                </p>
              </CardContent>
            </Card>

            {/* Educational Purpose */}
            <Card className="mb-8 border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">3. Educational Purpose Only</h2>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded">
                  <p className="text-red-800 font-semibold">
                    ⚠️ IMPORTANT: This service is for educational and informational purposes ONLY. 
                    It does NOT replace professional veterinary advice, diagnosis, or treatment.
                  </p>
                </div>
                <p className="text-gray-700 mb-4">By using this service, you acknowledge and agree that:</p>
                <ul className="space-y-2">
                  {[
                    "The information provided is general in nature and may not apply to your specific pet",
                    "You will always consult with a licensed veterinarian before making any medical decisions",
                    "In case of emergency, you will contact your veterinarian or emergency animal hospital immediately",
                    "We do not diagnose, treat, or prescribe any medical treatment for your pet",
                    "No veterinarian-client-patient relationship is created by using this service"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">4. User Responsibilities</h2>
                </div>
                <p className="text-gray-700 mb-4">When using our service, you agree to:</p>
                <ul className="space-y-2">
                  {[
                    "Use the service responsibly and for its intended educational purpose",
                    "Provide accurate information when describing your pet's symptoms",
                    "Not misuse, abuse, or attempt to manipulate the AI chatbot service",
                    "Not use the service to replace necessary veterinary care",
                    "Respect all intellectual property rights and not copy or redistribute our content",
                    "Not engage in any activity that could harm or disrupt the service",
                    "Not use automated systems (bots, scrapers) to access the service without permission"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl font-bold text-gray-900">5. Intellectual Property Rights</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  The Service and its original content, features, and functionality are owned by PetWellBot 
                  and are protected by international copyright, trademark, patent, trade secret, and other 
                  intellectual property laws.
                </p>
                <div className="border-l-4 border-indigo-300 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Limited License</h3>
                  <p className="text-gray-700 mb-2">
                    We grant you a limited, non-exclusive, non-transferable, revocable license to access 
                    and use the Service for personal, non-commercial purposes. Under this license, you may NOT:
                  </p>
                  <ul className="space-y-1">
                    {[
                      "Modify, copy, or create derivative works of our content",
                      "Use the content for commercial purposes without written permission",
                      "Attempt to reverse engineer any software or AI models",
                      "Remove any copyright, trademark, or proprietary notices",
                      "Frame or mirror any part of the service without authorization"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-red-600 font-bold">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900">6. Third-Party Services & Advertising</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Google AdSense</h3>
                    <p className="text-gray-700 mb-2">
                      We use Google AdSense to display advertisements. Google may use cookies and web beacons to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Show personalized ads based on your interests</li>
                      <li>Measure ad performance and engagement</li>
                      <li>Prevent fraudulent ad clicks</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                      You can opt out of personalized advertising by visiting{' '}
                      <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
                        Google Ads Settings
                      </a>.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded">
                    <p className="text-orange-800 text-sm">
                      <strong>Important:</strong> Third-party services have their own privacy policies. 
                      We have no control over their practices and are not responsible for their content or policies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer of Warranties */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Ban className="w-6 h-6 text-yellow-600" />
                  <h2 className="text-2xl font-bold text-gray-900">7. Disclaimer of Warranties</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                  EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="space-y-2">
                  {[
                    "Warranties of merchantability or fitness for a particular purpose",
                    "Warranties that the service will be uninterrupted, timely, secure, or error-free",
                    "Warranties regarding the accuracy, reliability, or completeness of information",
                    "Warranties that defects will be corrected"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-yellow-600 font-bold">⚠</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="mb-8 border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">8. Limitation of Liability</h2>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded">
                  <p className="text-red-800 font-semibold">
                    ⚠️ CRITICAL: We are NOT liable for any decisions made based on information from our service.
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, PetWellBot SHALL NOT BE LIABLE FOR ANY:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or use</li>
                  <li>Pet injury, illness, or death resulting from use of our information</li>
                  <li>Veterinary bills or medical costs</li>
                  <li>Damages arising from reliance on information provided</li>
                  <li>Damages from delays in seeking proper veterinary care</li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">
                  You assume full responsibility for all decisions regarding your pet's health and veterinary care.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mb-8 border-emerald-300 bg-emerald-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <p className="text-gray-900 font-medium mb-2">PetWellBot Support Team</p>
                  <p className="text-gray-700">
                    Email: <a href="mailto:support@petwellbot.com" className="text-emerald-600 hover:underline font-medium">support@petwellbot.com</a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    Website: <a href="https://petwellbot.com" className="text-emerald-600 hover:underline">https://petwellbot.com</a>
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
