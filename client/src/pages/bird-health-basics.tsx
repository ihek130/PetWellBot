import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { ArrowRight, Heart, AlertTriangle, CheckCircle, Feather } from "lucide-react";
import { Link } from "wouter";

export default function BirdHealthBasics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <SEOHead 
        title="Bird Health Basics 2025 | Complete Pet Bird Care & Health Guide"
        description="Essential bird health guide for pet bird owners. Learn about common bird diseases, symptoms, emergency care, and daily bird care tips from avian experts."
        keywords="bird health, pet bird care, bird diseases, bird symptoms, avian health, bird care guide, bird emergency care, pet bird problems, bird illness, bird behavior"

      />
      
      {/* Hero Section - Targeting "bird health" and "pet bird care" */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bird Health Basics 2025: Complete Pet Bird Care & Health Guide
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Expert avian veterinarian guide to bird health, diseases, and care. From budgies to macaws, 
              learn essential bird health signs, emergency care, and daily wellness tips.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-gray-50 hover:text-blue-700 shadow-lg">
                <Feather className="w-5 h-5 mr-2" />
                Check Bird Health Now
              </Button>
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600 shadow-lg">
                Bird Emergency Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Bird Problems */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Most Common Pet Bird Health Problems</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Bird Not Eating Seeds", icon: "🌾" },
              { title: "Bird Feather Plucking", icon: "🪶" },
              { title: "Bird Breathing Problems", icon: "💨" },
              { title: "Bird Sneezing Frequently", icon: "🤧" },
              { title: "Bird Egg Binding", icon: "🥚" },
              { title: "Bird Diarrhea Treatment", icon: "💧" },
              { title: "Bird Beak Problems", icon: "🦆" },
              { title: "Bird Foot Issues", icon: "🦶" },
              { title: "Bird Vomiting Food", icon: "🤮" }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{item.icon}</span>
                    <h3 className="font-semibold text-blue-600">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Bird Care */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <Card className="mb-8 border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                  <h2 className="text-2xl font-bold text-red-600">Emergency Bird Health Signs - Seek Avian Vet Immediately</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-red-500">Critical Bird Emergency Signs:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Difficulty breathing or tail bobbing</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Bird sitting on cage bottom</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Bleeding from any area</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Unconsciousness or inability to perch</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Seizures or head trauma</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-orange-500">Urgent Bird Health Issues:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Not eating for 12+ hours</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Fluffed up and lethargic</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Discharge from eyes, nose, or beak</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Sudden behavior changes</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Egg binding in female birds</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>⚠️ Important:</strong> Birds hide illness very well. Any change in normal behavior should be taken seriously. 
                    Keep your bird warm and quiet while seeking veterinary care.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Common Bird Diseases */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Common Pet Bird Diseases & Health Issues (2025)</h2>
                
                <div className="space-y-8">
                  {/* Respiratory Issues */}
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">🫁 Bird Respiratory Problems</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Bird Breathing Difficulties</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Signs:</strong> Tail bobbing, open-mouth breathing, wheezing</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Causes:</strong> Infections, air sac mites, poor air quality, stress</p>
                        <p className="text-sm text-red-600"><strong>Action:</strong> Emergency vet visit - respiratory issues are life-threatening</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Bird Sneezing & Nasal Discharge</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Causes:</strong> Upper respiratory infection, vitamin A deficiency, dusty environment</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Prevention:</strong> Clean air, proper humidity (50-60%), vitamin A-rich foods</p>
                        <p className="text-sm text-blue-600"><strong>Treatment:</strong> Vet diagnosis needed, antibiotics if bacterial</p>
                      </div>
                    </div>
                  </div>

                  {/* Digestive Issues */}
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-4">🌱 Bird Digestive Health</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Bird Not Eating Solutions</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Common causes:</strong> Illness, stress, poor diet, boredom</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Immediate steps:</strong> Offer favorite foods, ensure fresh water, check temperature</p>
                        <p className="text-sm text-red-600"><strong>Timeline:</strong> Birds can die within 24-48 hours without food</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Bird Vomiting vs. Regurgitation</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Vomiting:</strong> Forceful, undigested food, signs of illness</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Regurgitation:</strong> Normal feeding behavior, courtship display</p>
                        <p className="text-sm text-blue-600"><strong>Concern if:</strong> Frequent vomiting, lethargy, loss of appetite</p>
                      </div>
                    </div>
                  </div>

                  {/* Behavioral & Feather Issues */}
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 mb-4">🪶 Bird Feather & Behavior Problems</h3>
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">Bird Feather Plucking Solutions</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <p className="font-medium text-purple-600 mb-2">Medical Causes:</p>
                            <ul className="text-sm space-y-1">
                              <li>• Skin infections</li>
                              <li>• Parasites (mites)</li>
                              <li>• Allergies</li>
                              <li>• Nutritional deficiencies</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-purple-600 mb-2">Behavioral Causes:</p>
                            <ul className="text-sm space-y-1">
                              <li>• Boredom/lack of stimulation</li>
                              <li>• Stress or anxiety</li>
                              <li>• Hormonal issues</li>
                              <li>• Attention-seeking behavior</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-purple-600 mb-2">Treatment Approach:</p>
                            <ul className="text-sm space-y-1">
                              <li>• Vet exam first (rule out medical)</li>
                              <li>• Environmental enrichment</li>
                              <li>• Consistent routine</li>
                              <li>• Behavior modification</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Bird Beak & Nail Problems</h4>
                          <p className="text-sm text-gray-600 mb-2"><strong>Common issues:</strong> Overgrown beak/nails, beak injuries, mites</p>
                          <p className="text-sm text-gray-600 mb-2"><strong>Prevention:</strong> Proper perches, cuttlebone, mineral blocks</p>
                          <p className="text-sm text-blue-600"><strong>Professional care:</strong> Never trim beak yourself - vet only</p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Bird Foot & Leg Issues</h4>
                          <p className="text-sm text-gray-600 mb-2"><strong>Problems:</strong> Bumblefoot, arthritis, sprains, infections</p>
                          <p className="text-sm text-gray-600 mb-2"><strong>Signs:</strong> Favoring one foot, swelling, reluctance to perch</p>
                          <p className="text-sm text-red-600"><strong>Prevention:</strong> Varied perch sizes, clean cage, proper nutrition</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bird Species-Specific Care */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Bird Care by Species (2025 Guide)</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-3">🐤 Small Birds (Finches, Canaries)</h3>
                    <ul className="text-sm space-y-2">
                      <li>• High metabolism - eat frequently</li>
                      <li>• Social birds - keep in pairs</li>
                      <li>• Temperature sensitive (65-75°F)</li>
                      <li>• Flight space essential</li>
                      <li>• Seed-based diet with variety</li>
                      <li>• Life span: 7-15 years</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">🦜 Medium Birds (Cockatiels, Conures)</h3>
                    <ul className="text-sm space-y-2">
                      <li>• Pellet-based diet preferred</li>
                      <li>• 10-12 hours sleep in dark</li>
                      <li>• Social interaction crucial</li>
                      <li>• Mental stimulation needed</li>
                      <li>• Regular vet checkups</li>
                      <li>• Life span: 15-30 years</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-700 mb-3">🦅 Large Birds (Macaws, Cockatoos)</h3>
                    <ul className="text-sm space-y-2">
                      <li>• Complex nutritional needs</li>
                      <li>• Extensive socialization required</li>
                      <li>• Large cage/flight space</li>
                      <li>• Destructive if bored</li>
                      <li>• Specialized avian vet care</li>
                      <li>• Life span: 50-100+ years</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daily Bird Care */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Essential Daily Bird Care Routine</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Morning Bird Care Checklist</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Fresh Food & Water</h4>
                          <p className="text-sm text-gray-600">Remove old food, provide fresh pellets, clean water daily</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Health Check</h4>
                          <p className="text-sm text-gray-600">Observe appetite, activity, droppings, breathing</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Social Interaction</h4>
                          <p className="text-sm text-gray-600">Greet your bird, talk, sing, or whistle together</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-4">Evening Bird Care Routine</h3>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Cage Maintenance:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Remove uneaten fresh foods</li>
                          <li>• Clean food/water dishes</li>
                          <li>• Spot clean perches and toys</li>
                          <li>• Replace cage liner if needed</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Bedtime Routine:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Cover cage for 10-12 hours darkness</li>
                          <li>• Quiet environment for sleep</li>
                          <li>• Consistent sleep schedule</li>
                          <li>• Check room temperature (65-75°F)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Expert Bird Health Guidance 24/7</h2>
                <p className="text-lg mb-6">
                  Our AI avian health assistant provides specialized care advice for your feathered friend
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 text-white hover:bg-gray-50 hover:text-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-sm sm:text-base break-words hyphens-auto px-4 py-3 min-h-12"
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'anywhere',
                      whiteSpace: 'normal'
                    }}
                  >
                    <Feather className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="flex-1">Check Your Bird's Health - Free</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  ✓ Species-specific advice ✓ Emergency guidance ✓ Avian-expert knowledge
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schema Markup for Bird Health */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Bird Health Basics 2025",
            "description": "Complete guide to pet bird health, diseases, and care",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Pet Bird Health and Care"
            },
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are signs of emergency bird health problems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Emergency bird health signs include difficulty breathing, tail bobbing, sitting on cage bottom, bleeding, inability to perch, and not eating for 12+ hours."
                }
              },
              {
                "@type": "Question",
                "name": "How to treat bird feather plucking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bird feather plucking treatment requires veterinary exam to rule out medical causes, then environmental enrichment, consistent routine, and behavior modification."
                }
              },
              {
                "@type": "Question",
                "name": "What should I feed my pet bird daily?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pet birds need fresh pellets as base diet, supplemented with fresh vegetables, limited fruits, and clean water changed daily. Avoid seeds as primary diet."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}