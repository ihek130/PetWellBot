import { SEOHead } from '../components/seo-head';
import { Breadcrumb } from '../components/breadcrumb';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import { Home, Shield, Lock, Eye, Cookie, FileText, Mail, AlertCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <SEOHead 
        title="Privacy Policy - PetWellBot | How We Protect Your Privacy"
        description="Learn about our privacy practices and how we protect your information. PetWellBot Privacy Policy - transparent data practices for pet health services."
        canonicalUrl="https://petwellbot.com/privacy-policy"
      />
      
      {/* Header - Consistent with Homepage */}
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
              <Shield className="w-6 h-6 text-emerald-600" />
              <span className="text-lg font-bold text-foreground">Privacy Policy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Consistent with Other Pages */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-emerald-100">
              Your privacy matters to us. Learn how we protect your data and respect your trust.
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
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Privacy Commitment</h2>
                    <p className="text-gray-700 leading-relaxed">
                      At PetWellBot, we care deeply about your personal information and privacy. That's why we've designed this website to be completely signup-free. We never ask for your personal email, phone number, or any other personally identifiable information to use our core services.
                    </p>
                  </div>
                </div>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
                  <p className="text-emerald-800 font-medium">
                    ✓ No registration required • ✓ No personal data collection • ✓ Privacy-first approach
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Information We Don't Collect */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Information We Don't Collect</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We believe in minimal data collection. Here's what we DO NOT collect or store:
                </p>
                <ul className="space-y-2">
                  {[
                    "Personal email addresses (unless voluntarily provided for newsletter)",
                    "Phone numbers or physical addresses",
                    "Names or personal identifiers",
                    "Account registration information",
                    "Payment or financial information",
                    "Social security numbers or government IDs",
                    "Precise geolocation data",
                    "Medical records or sensitive health information"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-emerald-600 font-bold">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Information We May Collect</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  To provide you with the best possible service and improve our platform, we may collect:
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">1. Anonymous Usage Data</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Pages visited and time spent on our website</li>
                      <li>Features used (chatbot interactions, symptom checker usage)</li>
                      <li>Referral sources (how you found our website)</li>
                      <li>Aggregated search queries (to improve content)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">2. Technical Information</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Device type (mobile, tablet, desktop)</li>
                      <li>Screen resolution and display settings</li>
                      <li>IP address (anonymized for analytics)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">3. Pet Health Queries</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Anonymized symptom descriptions</li>
                      <li>Pet type and basic health questions</li>
                      <li>These are NOT linked to your identity</li>
                      <li>Used solely to improve AI accuracy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Cookie className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                    <p className="text-gray-700">
                      We use essential cookies necessary for website functionality, such as remembering your preferences and maintaining session state. These cannot be disabled as they're required for the website to function properly.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-700 mb-2">
                      We use Google Analytics to understand how visitors interact with our website. This helps us improve user experience. Google Analytics collects:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Anonymous visitor statistics</li>
                      <li>Page view counts and duration</li>
                      <li>Traffic sources and demographics (age ranges, general location)</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                    <p className="text-orange-800">
                      <strong>Your Control:</strong> You can disable cookies in your browser settings or use browser extensions like uBlock Origin or Privacy Badger to block tracking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Services & Advertising */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Third-Party Services & Advertising</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Google AdSense</h3>
                    <p className="text-gray-700 mb-2">
                      Our website uses Google AdSense to display advertisements. Google may use cookies and web beacons to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Show personalized ads based on your interests</li>
                      <li>Measure ad performance and engagement</li>
                      <li>Prevent fraudulent ad clicks</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                      You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Google Ads Settings</a>.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Other Third-Party Services</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li><strong>Google Analytics:</strong> Website traffic analysis (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Privacy Policy</a>)</li>
                      <li><strong>Unsplash:</strong> Stock images for content (<a href="https://unsplash.com/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Privacy Policy</a>)</li>
                      <li><strong>Google Fonts:</strong> Web font delivery (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">Privacy Policy</a>)</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded">
                    <p className="text-indigo-800 text-sm">
                      <strong>Important:</strong> These third-party services have their own privacy policies. We encourage you to review them to understand how they handle your data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We implement industry-standard security measures to protect any information we collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>HTTPS encryption for all data transmission</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited data retention (we don't store what we don't need)</li>
                  <li>Secure server infrastructure with access controls</li>
                  <li>No storage of sensitive personal information</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  However, since we don't collect personally identifiable information for our core services, your privacy risk is inherently minimized.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have certain rights regarding your data:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <div>
                      <strong className="text-gray-900">Right to Access:</strong>
                      <span className="text-gray-700"> Request information about data we may have collected</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <div>
                      <strong className="text-gray-900">Right to Deletion:</strong>
                      <span className="text-gray-700"> Request deletion of your data (if applicable)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <div>
                      <strong className="text-gray-900">Right to Opt-Out:</strong>
                      <span className="text-gray-700"> Disable cookies and tracking in your browser</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <div>
                      <strong className="text-gray-900">Right to Withdraw Consent:</strong>
                      <span className="text-gray-700"> Stop using our service at any time</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Children's Privacy</h2>
                </div>
                <p className="text-gray-700 mb-2">
                  Our service is not directed to children under the age of 13, and we do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 mb-2">
                  We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated "Last updated" date at the top.
                </p>
                <p className="text-gray-700">
                  We encourage you to review this privacy policy periodically to stay informed about how we protect your privacy.
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
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-white p-4 rounded-lg border border-emerald-200">
                  <p className="text-gray-900 font-medium mb-2">PetWellBot Support Team</p>
                  <p className="text-gray-700">Email: <a href="mailto:privacy@petwellbot.com" className="text-emerald-600 hover:underline font-medium">privacy@petwellbot.com</a></p>
                  <p className="text-gray-700 mt-2">Website: <a href="https://petwellbot.com" className="text-emerald-600 hover:underline">https://petwellbot.com</a></p>
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