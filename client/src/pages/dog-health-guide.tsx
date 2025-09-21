import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { SEOHead } from "../components/seo-head";
import { Breadcrumb } from "../components/breadcrumb";
import { RelatedContent } from "../components/related-content";
import { ArrowRight, Heart, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function DogHealthGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <SEOHead 
        title="Complete Dog Health Guide 2025 | Common Dog Health Problems & Solutions"
        description="Expert dog health guide covering common diseases, symptoms, and treatments. Free dog health checker, emergency care tips, and prevention strategies for healthy dogs."
        keywords="dog health, dog health problems, common dog diseases, dog health guide, dog symptoms, dog care tips, canine health, dog illness symptoms, dog health checker, dog emergency care"
        canonicalUrl="https://petwellbot.com/dog-health-guide"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630"
        publishedTime="2025-09-20T00:00:00Z"
        modifiedTime="2025-09-20T00:00:00Z"
        author="PetWellBot Veterinary Team"
        section="Dog Health"
      />
      
      {/* Hero Section - Optimized for "dog health guide" */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Dog Health Guide" }]} />
          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Dog Health Guide 2025: Keep Your Dog Healthy & Happy
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Expert veterinarian-reviewed guide to dog health problems, symptoms, treatments, and prevention. 
              From common dog diseases to emergency care - everything dog owners need to know.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Heart className="w-5 h-5 mr-2" />
                  Free Dog Health Check
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Emergency Dog Care Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Most Common Dog Health Problems</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Dog Vomiting Yellow Foam",
              "Dog Not Eating Solutions", 
              "Dog Limping Causes",
              "Dog Diarrhea Treatment",
              "Dog Breathing Problems",
              "Dog Skin Issues",
              "Dog Eye Discharge",
              "Dog Ear Infections"
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-blue-600 text-center">{item}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Optimized for Featured Snippets */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Dog Health Emergency Signs - Targeting "dog emergency symptoms" */}
            <Card className="mb-8 border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                  <h2 className="text-2xl font-bold text-red-600">Emergency Dog Health Signs - Call Vet Immediately</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-red-500">Critical Symptoms:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Difficulty breathing or gasping</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Unconsciousness or collapse</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Severe bleeding or trauma</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Seizures or convulsions</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Bloated, hard stomach</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-orange-500">Urgent Symptoms:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Vomiting blood or excessive vomiting</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Unable to urinate or defecate</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Extreme lethargy or weakness</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Signs of severe pain</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Suspected poisoning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Dog Diseases - High-volume keywords */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Most Common Dog Diseases & Health Problems (2025)</h2>
                
                <div className="space-y-8">
                  {/* Digestive Issues */}
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">🔥 Digestive Health Problems</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Dog Vomiting Yellow Foam</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Causes:</strong> Empty stomach bile, eating too fast, dietary indiscretion</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Treatment:</strong> Withhold food 12 hours, offer small bland meals</p>
                        <p className="text-sm text-red-600"><strong>See vet if:</strong> Continues &gt;24 hours, blood present, lethargy</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Dog Diarrhea Home Remedies</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Causes:</strong> Dietary changes, stress, infections, parasites</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Treatment:</strong> Bland diet (rice + chicken), probiotics, hydration</p>
                        <p className="text-sm text-red-600"><strong>See vet if:</strong> Blood, severe dehydration, fever</p>
                      </div>
                    </div>
                  </div>

                  {/* Skin & Coat Issues */}
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-4">🌿 Skin & Coat Health</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Dog Allergies & Itching</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Symptoms:</strong> Excessive scratching, red skin, hot spots</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Common triggers:</strong> Food allergies, environmental allergens, fleas</p>
                        <p className="text-sm text-blue-600"><strong>Solutions:</strong> Elimination diet, medicated baths, antihistamines</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Dog Shedding Solutions</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Normal causes:</strong> Seasonal changes, stress, poor nutrition</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Management:</strong> Regular brushing, omega-3 supplements, quality diet</p>
                        <p className="text-sm text-red-600"><strong>Concern if:</strong> Bald patches, excessive hair loss, skin irritation</p>
                      </div>
                    </div>
                  </div>

                  {/* Behavioral & Mental Health */}
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 mb-4">🧠 Behavioral & Mental Health</h3>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Dog Anxiety & Stress Signs</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <p className="font-medium text-purple-600 mb-2">Physical Signs:</p>
                          <ul className="text-sm space-y-1">
                            <li>• Panting when not hot</li>
                            <li>• Trembling or shaking</li>
                            <li>• Loss of appetite</li>
                            <li>• Excessive drooling</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-purple-600 mb-2">Behavioral Signs:</p>
                          <ul className="text-sm space-y-1">
                            <li>• Destructive behavior</li>
                            <li>• Excessive barking</li>
                            <li>• Hiding or withdrawal</li>
                            <li>• Aggression changes</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-purple-600 mb-2">Solutions:</p>
                          <ul className="text-sm space-y-1">
                            <li>• Create safe spaces</li>
                            <li>• Regular exercise routine</li>
                            <li>• Calming supplements</li>
                            <li>• Professional training</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preventive Care - Long-tail keywords */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Dog Health Prevention Guide 2025</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-4">Essential Preventive Care</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Regular Vet Checkups</h4>
                          <p className="text-sm text-gray-600">Annual exams for adults, bi-annual for seniors (7+ years)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Vaccination Schedule</h4>
                          <p className="text-sm text-gray-600">Core vaccines: rabies, DHPP. Non-core: based on lifestyle</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Parasite Prevention</h4>
                          <p className="text-sm text-gray-600">Monthly heartworm, flea/tick prevention year-round</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Dental Care</h4>
                          <p className="text-sm text-gray-600">Daily brushing, dental chews, professional cleanings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Daily Health Monitoring</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">What to Check Daily:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Appetite and water intake</li>
                          <li>• Energy levels and behavior</li>
                          <li>• Bathroom habits</li>
                          <li>• Eyes, ears, nose for discharge</li>
                          <li>• Breathing pattern</li>
                          <li>• Gait and mobility</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Weekly Health Checks:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Weight monitoring</li>
                          <li>• Skin and coat examination</li>
                          <li>• Nail length check</li>
                          <li>• Dental health assessment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action - Conversion optimization */}
            <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Instant Dog Health Advice 24/7</h2>
                <p className="text-lg mb-6">
                  Our AI-powered pet health assistant provides immediate guidance for your dog health concerns
                </p>
                <Link to="/">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    <Heart className="w-5 h-5 mr-2" />
                    Check Your Dog's Symptoms Now - Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-green-100">
                  ✓ Free forever ✓ Instant responses ✓ Veterinarian-reviewed guidance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Internal Linking for SEO */}
      <RelatedContent currentPage="/dog-health-guide" category="dog" maxItems={4} />
    </div>
  );
}