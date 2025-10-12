import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Footer } from "@/components/footer";
import { ArrowRight, Heart, AlertTriangle, CheckCircle, Star } from "lucide-react";
import { Link } from "wouter";

export default function CatCareTips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <SEOHead 
        title="Expert Cat Care Tips 2025 | Complete Cat Health & Behavior Guide"
        description="Essential cat care guide with expert tips for cat health, behavior, nutrition, and happiness. Solve common cat problems with veterinarian-approved advice."
        keywords="cat care tips, cat health, cat behavior, cat problems, cat not eating, cat health issues, feline health, cat care guide, indoor cat care, cat nutrition, cat grooming"

      />
      
      {/* Hero Section - Targeting "cat care tips" and "cat health" */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Cat Care Tips 2025: Complete Feline Health & Happiness Guide
            </h1>
            <p className="text-xl mb-8 text-pink-100">
              Veterinarian-approved cat care tips for every cat owner. From kitten care to senior cats, 
              solve behavioral issues, health problems, and keep your feline friend thriving.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-pink-600 text-white hover:bg-gray-50 hover:text-pink-700 shadow-lg">
                <Heart className="w-5 h-5 mr-2" />
                Get Cat Health Advice
              </Button>
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-pink-600 shadow-lg">
                Cat Behavior Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Cat Problems */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Most Searched Cat Problems & Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Cat Not Eating Solutions", icon: "🍽️" },
              { title: "Cat Excessive Meowing", icon: "🗣️" },
              { title: "Cat Litter Box Problems", icon: "📦" },
              { title: "Cat Hiding Behavior", icon: "🙈" },
              { title: "Cat Vomiting Hairballs", icon: "🤢" },
              { title: "Cat Scratching Furniture", icon: "🪑" },
              { title: "Cat Aggressive Behavior", icon: "😾" },
              { title: "Cat Eye Discharge", icon: "👁️" },
              { title: "Cat Weight Loss Tips", icon: "⚖️" }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-pink-500">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{item.icon}</span>
                    <h3 className="font-semibold text-pink-600">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Cat Health */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <Card className="mb-8 border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                  <h2 className="text-2xl font-bold text-red-600">Emergency Cat Health Signs - Call Vet Immediately</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-red-500">Critical Cat Emergency Signs:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Difficulty breathing or open-mouth breathing</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Unable to urinate (especially male cats)</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Unconsciousness or severe weakness</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Severe trauma or bleeding</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Suspected poisoning</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-orange-500">Urgent Cat Health Issues:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Not eating for 2+ days</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Repeated vomiting</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Severe diarrhea or constipation</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Eye injuries or sudden blindness</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />High fever or very low temperature</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cat Behavior Solutions - High search volume */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Cat Behavior Problems & Solutions (2025 Expert Guide)</h2>
                
                <div className="space-y-8">
                  {/* Litter Box Issues */}
                  <div>
                    <h3 className="text-xl font-semibold text-pink-600 mb-4">🚽 Cat Litter Box Problems Solutions</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Cat Not Using Litter Box</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Common Causes:</strong> Dirty box, wrong litter, medical issues, stress</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Solutions:</strong> Daily cleaning, unscented litter, multiple boxes</p>
                        <p className="text-sm text-red-600"><strong>Rule out:</strong> UTI, kidney disease, arthritis</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Cat Peeing Outside Box</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Medical causes:</strong> Urinary tract infections, bladder stones</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Behavioral causes:</strong> Territory marking, stress, box aversion</p>
                        <p className="text-sm text-blue-600"><strong>Quick fix:</strong> More boxes (N+1 rule), enzymatic cleaners</p>
                      </div>
                    </div>
                  </div>

                  {/* Eating & Appetite Issues */}
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-4">🍽️ Cat Eating Problems & Nutrition</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Cat Not Eating Solutions</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Common reasons:</strong> Stress, illness, food aversion, dental pain</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Immediate steps:</strong> Warm food, try different flavors, hand feeding</p>
                        <p className="text-sm text-red-600"><strong>Danger zone:</strong> No food for 2+ days can cause liver issues</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Cat Overeating & Weight Control</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Portion control:</strong> Measured meals, puzzle feeders, scheduled feeding</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Weight loss tips:</strong> High-protein diet, increase activity, vet monitoring</p>
                        <p className="text-sm text-blue-600"><strong>Target:</strong> Lose 1-2% body weight per week safely</p>
                      </div>
                    </div>
                  </div>

                  {/* Behavioral & Social Issues */}
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 mb-4">😸 Cat Social & Behavioral Solutions</h3>
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">Cat Excessive Meowing Solutions</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <p className="font-medium text-purple-600 mb-2">Common Causes:</p>
                            <ul className="text-sm space-y-1">
                              <li>• Attention seeking</li>
                              <li>• Medical issues</li>
                              <li>• Stress or anxiety</li>
                              <li>• Senior cognitive decline</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-purple-600 mb-2">Training Solutions:</p>
                            <ul className="text-sm space-y-1">
                              <li>• Ignore attention-seeking meows</li>
                              <li>• Scheduled play/feeding times</li>
                              <li>• Reward quiet behavior</li>
                              <li>• Environmental enrichment</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-purple-600 mb-2">When to See Vet:</p>
                            <ul className="text-sm space-y-1">
                              <li>• Sudden behavior change</li>
                              <li>• Signs of pain/discomfort</li>
                              <li>• Senior cats (check thyroid)</li>
                              <li>• Other symptoms present</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Cat Scratching Furniture Solutions</h4>
                          <p className="text-sm text-gray-600 mb-2"><strong>Why cats scratch:</strong> Marking territory, claw maintenance, stretching</p>
                          <p className="text-sm text-gray-600 mb-2"><strong>Redirect to:</strong> Scratching posts (tall, sturdy), sisal rope, cardboard</p>
                          <p className="text-sm text-blue-600"><strong>Deterrents:</strong> Double-sided tape, citrus scents, nail caps</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Cat Aggression & Fighting</h4>
                          <p className="text-sm text-gray-600 mb-2"><strong>Types:</strong> Play aggression, fear, territorial, redirected</p>
                          <p className="text-sm text-gray-600 mb-2"><strong>Management:</strong> Identify triggers, provide escape routes, pheromones</p>
                          <p className="text-sm text-red-600"><strong>Safety:</strong> Never punish, avoid rough play, seek professional help</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cat Health Maintenance */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Essential Cat Health Care & Maintenance (2025)</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Daily Cat Care Checklist</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Fresh Water & Food</h4>
                          <p className="text-sm text-gray-600">Clean water daily, measured meals, age-appropriate nutrition</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Litter Box Maintenance</h4>
                          <p className="text-sm text-gray-600">Scoop daily, full clean weekly, proper litter depth (2-3 inches)</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Play & Exercise</h4>
                          <p className="text-sm text-gray-600">15-20 minutes interactive play, puzzle toys, climbing spaces</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Health Monitoring</h4>
                          <p className="text-sm text-gray-600">Check appetite, bathroom habits, behavior changes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-4">Weekly Cat Grooming Guide</h3>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Brushing Schedule:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Short-hair cats:</strong> 2-3 times per week</li>
                          <li>• <strong>Long-hair cats:</strong> Daily brushing required</li>
                          <li>• <strong>Shedding season:</strong> Increase frequency</li>
                          <li>• <strong>Senior cats:</strong> May need extra help grooming</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Other Grooming Tasks:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Nail trimming:</strong> Every 2-3 weeks</li>
                          <li>• <strong>Ear cleaning:</strong> Monthly or as needed</li>
                          <li>• <strong>Dental care:</strong> Daily brushing ideal</li>
                          <li>• <strong>Eye cleaning:</strong> Wipe daily if discharge</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cat Age-Specific Care */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Cat Care by Life Stage</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      <h3 className="text-lg font-semibold text-yellow-700">Kitten Care (0-1 year)</h3>
                    </div>
                    <ul className="text-sm space-y-2">
                      <li>• Multiple small meals (3-4x daily)</li>
                      <li>• Kitten-specific high-protein food</li>
                      <li>• Vaccination series (8, 12, 16 weeks)</li>
                      <li>• Spay/neuter at 4-6 months</li>
                      <li>• Socialization and play training</li>
                      <li>• Weekly weight monitoring</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Star className="w-5 h-5 text-blue-500 mr-2" />
                      <h3 className="text-lg font-semibold text-blue-700">Adult Cat Care (1-7 years)</h3>
                    </div>
                    <ul className="text-sm space-y-2">
                      <li>• 2 meals daily, measured portions</li>
                      <li>• Annual vet checkups</li>
                      <li>• Maintain ideal body weight</li>
                      <li>• Regular exercise and mental stimulation</li>
                      <li>• Preventive dental care</li>
                      <li>• Monitor for behavioral changes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Star className="w-5 h-5 text-purple-500 mr-2" />
                      <h3 className="text-lg font-semibold text-purple-700">Senior Cat Care (7+ years)</h3>
                    </div>
                    <ul className="text-sm space-y-2">
                      <li>• Bi-annual vet exams</li>
                      <li>• Senior-specific diet considerations</li>
                      <li>• Monitor for arthritis, kidney disease</li>
                      <li>• Easier access to litter boxes</li>
                      <li>• More frequent grooming assistance</li>
                      <li>• Cognitive health monitoring</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Expert Cat Care Advice Instantly</h2>
                <p className="text-lg mb-6">
                  Our AI cat health assistant provides personalized guidance for your feline friend's needs
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-pink-600 text-white hover:bg-gray-50 hover:text-pink-700 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-sm sm:text-base break-words hyphens-auto px-4 py-3 min-h-12"
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'anywhere',
                      whiteSpace: 'normal'
                    }}
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="flex-1">Ask About Your Cat's Behavior - Free</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-pink-100">
                  ✓ 24/7 availability ✓ Instant responses ✓ Behavior & health guidance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schema Markup for Cat Care */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Expert Cat Care Tips 2025",
            "description": "Complete guide to cat care, health, and behavior solutions",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Cat Health and Behavior"
            },
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How to solve cat litter box problems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cat litter box problems are solved by ensuring daily cleaning, using unscented litter, providing multiple boxes (N+1 rule), and ruling out medical issues like UTIs."
                }
              },
              {
                "@type": "Question",
                "name": "Why is my cat not eating and what should I do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cats may stop eating due to stress, illness, food aversion, or dental pain. Try warming food, offering different flavors, and see a vet if not eating for 2+ days."
                }
              },
              {
                "@type": "Question",
                "name": "How to stop cat from scratching furniture?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Redirect scratching to appropriate surfaces like tall scratching posts with sisal rope. Use deterrents like double-sided tape on furniture and provide multiple scratching options."
                }
              }
            ]
          })
        }}
      />

      <Footer />
    </div>
  );
}