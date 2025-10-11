import { SEOHead } from '../components/seo-head';
import { Breadcrumb } from '../components/breadcrumb';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import { Home, Mail, MessageSquare, Clock, MapPin, Phone, Send, HelpCircle, Shield } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <SEOHead 
        title="Contact Us - PetWellBot | Get in Touch with Our Team"
        description="Contact PetWellBot support team. Get help with pet health questions, technical support, feedback, and inquiries about our AI-powered pet symptom checker."
        keywords="contact PetWellBot, pet health support, customer service, feedback, inquiries, help"
        canonicalUrl="https://petwellbot.com/contact"
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
              <Mail className="w-6 h-6 text-emerald-600" />
              <span className="text-lg font-bold text-foreground">Contact Us</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Consistent with Privacy Policy */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Contact Us" }]} />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-emerald-100">
              Have questions, feedback, or need assistance? We're here to help!
            </p>
            <p className="text-sm text-emerald-200 mt-4">
              Response time: Within 24-48 hours
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
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">We'd Love to Hear From You</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Whether you have questions about our service, need technical support, want to provide feedback, 
                      or have partnership inquiries, our team is ready to assist you.
                    </p>
                  </div>
                </div>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
                  <p className="text-emerald-800 font-medium">
                    ✓ Quick response times • ✓ Helpful support team • ✓ We value your feedback
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              
              {/* Email Contact */}
              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Email Support</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    For general inquiries, technical support, and feedback:
                  </p>
                  <a 
                    href="mailto:support@petwellbot.com" 
                    className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg block mb-2"
                  >
                    support@petwellbot.com
                  </a>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Response within 24-48 hours</span>
                  </div>
                </CardContent>
              </Card>

              {/* Privacy Inquiries */}
              <Card className="border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Privacy Inquiries</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    For privacy-related questions and data requests:
                  </p>
                  <a 
                    href="mailto:privacy@petwellbot.com" 
                    className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg block mb-2"
                  >
                    privacy@petwellbot.com
                  </a>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Priority response for privacy matters</span>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* What We Can Help With */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <HelpCircle className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900">What We Can Help With</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-emerald-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">General Support</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>✓ Questions about using PetWellBot</li>
                      <li>✓ Technical issues or bugs</li>
                      <li>✓ Feature requests and suggestions</li>
                      <li>✓ General feedback</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Business Inquiries</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>✓ Partnership opportunities</li>
                      <li>✓ Media and press inquiries</li>
                      <li>✓ Advertising questions</li>
                      <li>✓ Collaboration proposals</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Privacy & Legal</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>✓ Privacy policy questions</li>
                      <li>✓ Data access requests</li>
                      <li>✓ Terms of service clarifications</li>
                      <li>✓ Legal compliance matters</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-orange-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Content & Accuracy</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>✓ Report inaccurate information</li>
                      <li>✓ Suggest content improvements</li>
                      <li>✓ Medical disclaimer questions</li>
                      <li>✓ Citation requests</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="mb-8 border-yellow-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Before You Contact Us</h2>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">⚠️ We Cannot Provide Veterinary Advice</h3>
                        <p className="text-gray-700">
                          If you have questions about your pet's specific health condition, please contact your veterinarian. 
                          We cannot provide personalized medical advice or diagnose your pet remotely.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">🚨 For Pet Emergencies</h3>
                        <p className="text-gray-700">
                          If your pet is experiencing a medical emergency, <strong>DO NOT email us</strong>. 
                          Contact your veterinarian or emergency animal hospital immediately.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">📚 Check Our Resources First</h3>
                        <p className="text-gray-700">
                          Many common questions are answered in our{' '}
                          <Link href="/privacy-policy" className="text-emerald-600 hover:underline">Privacy Policy</Link>,{' '}
                          <Link href="/terms-of-service" className="text-emerald-600 hover:underline">Terms of Service</Link>, and{' '}
                          <Link href="/medical-disclaimer" className="text-emerald-600 hover:underline">Medical Disclaimer</Link> pages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Response Times</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We strive to respond to all inquiries as quickly as possible:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <div>
                      <p className="text-gray-900 font-semibold">General Support & Feedback</p>
                      <p className="text-gray-600 text-sm">24-48 hours during business days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <div>
                      <p className="text-gray-900 font-semibold">Privacy & Legal Inquiries</p>
                      <p className="text-gray-600 text-sm">Priority response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <div>
                      <p className="text-gray-900 font-semibold">Technical Issues</p>
                      <p className="text-gray-600 text-sm">We aim to acknowledge within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">ℹ</span>
                    <div>
                      <p className="text-gray-900 font-semibold">Weekends & Holidays</p>
                      <p className="text-gray-600 text-sm">Responses may be delayed; we'll get back to you on the next business day</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Information */}
            <Card className="mb-8 border-indigo-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Company Information</h2>
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Name</h3>
                    <p className="text-gray-700">PetWellBot - AI Pet Health Assistant</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                    <a href="https://petwellbot.com" className="text-emerald-600 hover:underline">
                      https://petwellbot.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Type</h3>
                    <p className="text-gray-700">Educational AI-powered pet health information platform</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Alternative */}
            <Card className="mb-8 border-emerald-300 bg-emerald-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Send className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Ready to Get in Touch?</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Send us an email and we'll get back to you as soon as possible. Please include:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Your name (optional but helpful)",
                    "A clear subject line",
                    "Detailed description of your question or issue",
                    "Any relevant screenshots or examples (if applicable)",
                    "Your preferred contact method for our response"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white p-6 rounded-lg border-2 border-emerald-300">
                  <p className="text-gray-900 font-semibold mb-3">Primary Contact Email:</p>
                  <a 
                    href="mailto:support@petwellbot.com?subject=Contact%20from%20PetWellBot%20Website"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us: support@petwellbot.com
                  </a>
                  <p className="text-gray-600 text-sm mt-3">
                    Click the button above to open your email client, or copy the address to send manually.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media & Other Channels */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
                <p className="text-gray-700 mb-4">
                  While email is our primary contact method, you can also:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Use our AI chatbot on the homepage for general pet health information</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Browse our comprehensive health guides for common pet concerns</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Check our FAQ section for answers to frequently asked questions</span>
                  </li>
                </ul>
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
