import { SEOHead } from '../components/seo-head';
import { Breadcrumb } from '../components/breadcrumb';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'wouter';
import { Home, Heart, Users, Target, Shield, Lightbulb, TrendingUp, CheckCircle, Clock, Globe, Award, BookOpen, Mail, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <SEOHead 
        title="About Us - PetWellBot | Our Mission & Story"
        description="Learn about PetWellBot's mission to provide free AI-powered pet health education. Discover our story, values, and commitment to helping pet owners worldwide."
        keywords="about PetWellBot, our mission, pet health education, AI pet care, our story, company values"
        canonicalUrl="https://petwellbot.com/about"
      />
      
      {/* Header - Consistent with Other Pages */}
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
              <Heart className="w-6 h-6 text-emerald-600" />
              <span className="text-lg font-bold text-foreground">About Us</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "About Us" }]} />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About PetWellBot
            </h1>
            <p className="text-lg text-emerald-100 mb-2">
              Your Trusted AI-Powered Pet Health Companion
            </p>
            <p className="text-emerald-200">
              Empowering pet owners with free, instant access to reliable pet health information since 2024
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Our Mission */}
            <Card className="mb-8 border-emerald-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      PetWellBot exists to bridge the gap between concerned pet owners and professional veterinary care. 
                      We provide free, instant access to AI-powered pet health information that helps you make informed 
                      decisions about your pet's wellbeing.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <div className="text-emerald-600 font-bold text-2xl mb-1">24/7</div>
                        <div className="text-gray-700 text-sm">Always Available</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-blue-600 font-bold text-2xl mb-1">100%</div>
                        <div className="text-gray-700 text-sm">Free Forever</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-purple-600 font-bold text-2xl mb-1">All</div>
                        <div className="text-gray-700 text-sm">Pet Types Supported</div>
                      </div>
                    </div>
                    
                    {/* Comprehensive Pet Types Grid */}
                    <div className="mt-6 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-200">
                      <h3 className="font-bold text-gray-900 mb-4 text-center">🐾 We Support Every Companion Animal</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {[
                          { emoji: "🐕", name: "Dogs", desc: "All breeds & sizes" },
                          { emoji: "🐈", name: "Cats", desc: "Domestic & exotic" },
                          { emoji: "🐦", name: "Birds", desc: "Parrots to canaries" },
                          { emoji: "🐰", name: "Rabbits", desc: "All rabbit breeds" },
                          { emoji: "🐹", name: "Hamsters", desc: "Syrian & dwarf" },
                          { emoji: "🐭", name: "Mice & Rats", desc: "Pet rodents" },
                          { emoji: "🐹", name: "Guinea Pigs", desc: "Cavies" },
                          { emoji: "🦎", name: "Reptiles", desc: "Lizards, snakes" },
                          { emoji: "🐢", name: "Turtles", desc: "Aquatic & land" },
                          { emoji: "🐠", name: "Fish", desc: "Freshwater & marine" },
                          { emoji: "🐴", name: "Horses", desc: "Equines" },
                          { emoji: "🦜", name: "Exotic Birds", desc: "Cockatoos, macaws" },
                          { emoji: "🐇", name: "Ferrets", desc: "Domestic ferrets" },
                          { emoji: "🐿️", name: "Small Mammals", desc: "Chinchillas, gerbils" },
                          { emoji: "🦔", name: "Hedgehogs", desc: "African pygmy" },
                          { emoji: "🐸", name: "Amphibians", desc: "Frogs, salamanders" },
                          { emoji: "🦎", name: "Bearded Dragons", desc: "Popular reptiles" },
                          { emoji: "🐍", name: "Snakes", desc: "Ball pythons & more" },
                          { emoji: "🦜", name: "Cockatiels", desc: "Small parrots" },
                          { emoji: "🐠", name: "Goldfish", desc: "Common pets" }
                        ].map((pet, index) => (
                          <div key={index} className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-2xl mb-1">{pet.emoji}</div>
                            <div className="font-semibold text-gray-900 text-xs mb-0.5">{pet.name}</div>
                            <div className="text-gray-600 text-[10px]">{pet.desc}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-center text-gray-700 text-sm mt-4 font-medium">
                        ...and many more! If you have a pet, we're here to help. 💚
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Story */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    PetWellBot was born from a simple observation: pet owners often face a critical dilemma when their 
                    beloved companions show signs of illness. Is it an emergency requiring immediate veterinary attention? 
                    Or can it wait until morning? Should they rush to the emergency vet at 2 AM, or is it safe to monitor at home?
                  </p>
                  <p className="leading-relaxed">
                    These questions led to the creation of PetWellBot - an AI-powered platform designed to provide instant, 
                    reliable guidance when pet owners need it most. We're not here to replace veterinarians; we're here to 
                    help you make informed decisions about when and how urgently to seek professional care.
                  </p>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-4 rounded">
                    <p className="text-emerald-900 font-medium">
                      💡 "Every pet deserves an owner who can confidently recognize when something's wrong and know what to do about it."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What We Do */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">What We Do</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  PetWellBot provides comprehensive pet health support through:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-l-4 border-purple-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🤖 AI-Powered Symptom Analysis</h3>
                    <p className="text-gray-700 text-sm">
                      Describe your pet's symptoms and receive instant analysis to help determine urgency levels
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🚨 Emergency Decision Guidance</h3>
                    <p className="text-gray-700 text-sm">
                      Clear guidance on when to seek immediate veterinary care vs. when it's safe to monitor
                    </p>
                  </div>
                  <div className="border-l-4 border-green-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">📚 Educational Content Library</h3>
                    <p className="text-gray-700 text-sm">
                      Comprehensive guides covering common health issues for ALL pet types - dogs, cats, birds, rabbits, reptiles, fish, exotic pets, and more
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🔓 Free, No-Signup Access</h3>
                    <p className="text-gray-700 text-sm">
                      Complete access to all features without registration, payments, or personal information
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Values */}
            <Card className="mb-8 border-teal-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-teal-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Values & Principles</h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      icon: "📖",
                      title: "Education First",
                      description: "We believe informed pet owners make better decisions. Our focus is on education, not replacement of professional care."
                    },
                    {
                      icon: "🔍",
                      title: "Transparency",
                      description: "Clear disclaimers, honest limitations, and no hidden agendas. What you see is what you get."
                    },
                    {
                      icon: "🌐",
                      title: "Universal Accessibility",
                      description: "Free for everyone, everywhere. No paywalls, no premium tiers, no barriers to access."
                    },
                    {
                      icon: "🔒",
                      title: "Privacy-Focused",
                      description: "Minimal data collection. We don't need your personal information to help you help your pet."
                    },
                    {
                      icon: "🏥",
                      title: "Veterinary Partnership",
                      description: "We complement, never replace, professional veterinary care. Your vet is always your best resource."
                    },
                    {
                      icon: "🔬",
                      title: "Evidence-Based",
                      description: "Information backed by veterinary knowledge, peer-reviewed research, and established medical guidelines."
                    }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl">{value.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                        <p className="text-gray-700 text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", icon: "📝", title: "Describe Symptoms", desc: "Tell us what you're observing about your pet's behavior or health" },
                    { step: "2", icon: "🤖", title: "AI Analysis", desc: "Our AI analyzes the information and compares it to known patterns" },
                    { step: "3", icon: "⚡", title: "Get Guidance", desc: "Receive instant guidance on urgency level and recommended actions" },
                    { step: "4", icon: "📚", title: "Learn More", desc: "Access relevant educational resources and detailed information" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Who We Serve */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Who We Serve</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  PetWellBot is designed for pet owners worldwide who want to make informed decisions about their pets' health:
                </p>
                <ul className="space-y-2">
                  {[
                    "🐾 First-time pet parents seeking guidance and reassurance",
                    "👨‍⚕️ Experienced pet owners looking for quick preliminary assessments",
                    "🌙 Anyone dealing with concerning symptoms outside of vet office hours",
                    "💰 Pet owners wanting to make informed decisions before emergency vet visits",
                    "🌍 Global pet community needing accessible health information",
                    "❤️ Anyone who loves their pet and wants the best for them"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-green-900 font-medium">
                    📊 Helping thousands of pet owners make informed decisions every month
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Our Commitment to Accuracy */}
            <Card className="mb-8 border-orange-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Accuracy</h2>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    We take the responsibility of providing health information seriously. Here's how we ensure quality:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        Evidence-Based Sources
                      </h3>
                      <p className="text-gray-700 text-sm">
                        All information is based on veterinary guidelines, peer-reviewed research, and established medical knowledge
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        Regular Updates
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Content is regularly reviewed and updated to reflect current veterinary best practices
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        Clear Limitations
                      </h3>
                      <p className="text-gray-700 text-sm">
                        We're transparent about what AI can and cannot do, with prominent disclaimers throughout
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-600" />
                        Vet-First Approach
                      </h3>
                      <p className="text-gray-700 text-sm">
                        We always recommend professional veterinary care for diagnosis and treatment
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl font-bold text-gray-900">The Technology Behind PetWellBot</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  PetWellBot leverages advanced artificial intelligence to provide instant, personalized guidance:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">AI-Powered Analysis:</strong>
                      <span className="text-gray-700"> Advanced language models trained on veterinary knowledge to understand and analyze pet symptoms</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Quality Assurance:</strong>
                      <span className="text-gray-700"> Continuous monitoring and improvement based on accuracy and user feedback</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Privacy & Security:</strong>
                      <span className="text-gray-700"> HTTPS encryption, minimal data collection, and no storage of personal information</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Continuous Learning:</strong>
                      <span className="text-gray-700"> Regular updates to improve accuracy and expand our knowledge base</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Trust Us */}
            <Card className="mb-8 border-emerald-200 bg-emerald-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Why Trust PetWellBot?</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Completely Free", desc: "No hidden costs or financial conflicts of interest" },
                    { title: "No Registration", desc: "Your privacy is protected - no personal data required" },
                    { title: "Transparent Limitations", desc: "We're honest about what we can and cannot do" },
                    { title: "Vet-Friendly", desc: "We encourage and support professional veterinary care" },
                    { title: "Evidence-Based", desc: "Information grounded in veterinary science" },
                    { title: "Regular Updates", desc: "Continuously improving accuracy and content" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">{item.title}:</strong>
                        <span className="text-gray-700 text-sm"> {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Looking Forward */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Looking Forward</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  We're committed to continuous improvement and expansion:
                </p>
                <ul className="space-y-2">
                  {[
                    "Expanding our content library with more specific conditions, breeds, and species-specific care",
                    "Enhancing AI capabilities for more accurate symptom analysis across all pet types",
                    "Deepening support for exotic animals (amphibians, arachnids, and rare species)",
                    "Developing multilingual support to serve pet owners worldwide",
                    "Building community features for pet owners to share experiences",
                    "Partnering with veterinary professionals and exotic animal specialists for expert content review"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-purple-600 font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Get Involved */}
            <Card className="mb-8 border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Get Involved</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  PetWellBot is built for the pet-loving community. Here's how you can be part of our journey:
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-gray-900">💬 Provide Feedback:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Help us improve by sharing your experience and suggestions
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-gray-900">🤝 Partnership Opportunities:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Veterinary professionals, pet organizations, and animal welfare groups - let's collaborate
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-gray-900">📢 Spread the Word:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Share PetWellBot with fellow pet owners who could benefit from our service
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Mail className="w-5 h-5 mr-2" />
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Important Reminder */}
            <Card className="mb-8 border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">Important Reminder</h3>
                    <p className="text-red-800 text-sm mb-2">
                      PetWellBot is an educational tool and does NOT replace professional veterinary advice, diagnosis, or treatment. 
                      Always consult with a licensed veterinarian for your pet's specific health concerns.
                    </p>
                    <p className="text-red-800 text-sm font-semibold">
                      In case of emergency, contact your veterinarian or emergency animal hospital immediately.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Back to Home CTA */}
            <div className="text-center mt-8">
              <Link to="/">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Home className="w-5 h-5 mr-2" />
                  Start Using PetWellBot
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
