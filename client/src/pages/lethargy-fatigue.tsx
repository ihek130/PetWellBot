import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { ArrowRight, Heart, AlertTriangle, CheckCircle, Star } from "lucide-react";
import { Link } from "wouter";

export default function LethargyFatigue() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <SEOHead 
        title="Pet Lethargy & Fatigue 2025: Causes, Symptoms & Emergency Signs"
        description="Expert guide to pet lethargy and fatigue. Learn causes, when tired pets need emergency care, and treatment for low energy in dogs and cats."
        keywords="pet lethargy, dog lethargy, cat lethargy, pet fatigue, tired pet, pet low energy, dog weak, cat weak, pet sluggish, animal fatigue"

      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pet Lethargy & Fatigue: Expert Diagnosis Guide 2025
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Complete veterinary guide to pet lethargy and fatigue. Learn to recognize normal tiredness vs. 
              concerning lethargy, causes, emergency signs, and when low energy requires immediate care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-purple-600 text-white hover:bg-gray-50 hover:text-purple-700 shadow-lg">
                <Heart className="w-5 h-5 mr-2" />
                Get Lethargy Help
              </Button>
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-purple-600 shadow-lg">
                Emergency Lethargy Care
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Assessment */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-red-200 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">Lethargy Emergency Assessment</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-red-600">🚨 EMERGENCY - See Vet Immediately:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Collapse or unable to stand</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Difficulty breathing with lethargy</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Pale or blue gums</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Unresponsive or barely conscious</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Lethargy with vomiting/diarrhea</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-orange-600">⚠️ URGENT - Same Day Vet:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Sudden onset severe lethargy</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Not eating or drinking with lethargy</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Hiding and avoiding interaction</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Trembling or shaking</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Senior pets with new lethargy</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-yellow-600">📅 MONITOR - 24-48 Hours:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />Mild lethargy after activity</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />Hot weather-related tiredness</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />Still eating and drinking normally</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />Responsive to interaction</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />Gradual energy improvement</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Key Point:</strong> Lethargy is often the first sign of serious illness in pets. 
                  When in doubt, it's always better to have your pet evaluated sooner rather than later.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Normal vs Concerning */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Normal Tiredness vs. Concerning Lethargy</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">🟢 Normal Pet Tiredness</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">After Physical Activity:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Tired after long walks, play, or exercise</li>
                        <li>• Recovers energy within 1-2 hours</li>
                        <li>• Still interested in food and water</li>
                        <li>• Responsive to favorite activities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Age-Related Changes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Senior pets sleep more (12-16 hours/day)</li>
                        <li>• Gradual decrease in activity over time</li>
                        <li>• Still has periods of alertness daily</li>
                        <li>• Maintains interest in family activities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-2">Environmental Factors:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Hot weather causing increased rest</li>
                        <li>• Rainy days leading to less activity</li>
                        <li>• Post-meal sleepiness</li>
                        <li>• Comfortable, secure environment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-4">🔴 Concerning Lethargy</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Sudden Changes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Dramatic decrease in energy overnight</li>
                        <li>• Won't get up for favorite activities</li>
                        <li>• Sleeping significantly more than usual</li>
                        <li>• Difficulty standing or walking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Associated Symptoms:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Loss of appetite or not drinking</li>
                        <li>• Hiding or avoiding interaction</li>
                        <li>• Changes in breathing pattern</li>
                        <li>• Unusual posture or positioning</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-600 mb-2">Behavioral Changes:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Not greeting family members</li>
                        <li>• Unresponsive to name or commands</li>
                        <li>• No interest in treats or toys</li>
                        <li>• Appears confused or disoriented</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Causes of Lethargy */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🔍 Common Causes of Pet Lethargy & Fatigue</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-red-600 mb-4">Medical Causes (Most Common)</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-red-700">Infections:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Bacterial infections (UTI, skin, respiratory)</li>
                            <li>• Viral infections (parvo, distemper, URI)</li>
                            <li>• Parasitic infections (worms, tick-borne diseases)</li>
                            <li>• Fungal infections (less common)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-orange-600">Organ Dysfunction:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Kidney disease (especially cats)</li>
                            <li>• Liver disease or hepatitis</li>
                            <li>• Heart disease or heart failure</li>
                            <li>• Diabetes or thyroid disorders</li>
                            <li>• Anemia or blood disorders</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-600 mb-4">Pain & Discomfort</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-blue-700">Musculoskeletal Pain:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Arthritis (very common in senior pets)</li>
                            <li>• Hip dysplasia or joint problems</li>
                            <li>• Muscle strains or injuries</li>
                            <li>• Spinal issues or disc problems</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-600">Other Pain Sources:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Dental disease or oral pain</li>
                            <li>• Gastrointestinal pain or nausea</li>
                            <li>• Ear infections causing discomfort</li>
                            <li>• Cancer-related pain</li>
                            <li>• Post-surgical or injury pain</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-600 mb-3">Medication Effects</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Post-vaccination reactions (normal 24-48h)</li>
                        <li>• Pain medication side effects</li>
                        <li>• Sedatives or anti-anxiety drugs</li>
                        <li>• Chemotherapy treatments</li>
                        <li>• Antihistamines causing drowsiness</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-yellow-600 mb-3">Environmental Stress</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Heat exhaustion or overheating</li>
                        <li>• Stress from major life changes</li>
                        <li>• Depression from loss of companion</li>
                        <li>• Boarding or hospitalization stress</li>
                        <li>• Changes in household routine</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-600 mb-3">Age-Related Changes</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Normal aging process (gradual)</li>
                        <li>• Cognitive dysfunction syndrome</li>
                        <li>• Decreased muscle mass</li>
                        <li>• Reduced cardiovascular fitness</li>
                        <li>• Multiple mild health issues</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dog vs Cat Lethargy */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🐕🐱 Species-Specific Lethargy Patterns</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-600 mb-4">🐕 Dog Lethargy Characteristics</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-blue-700">Typical Presentation:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• More obvious behavioral changes</li>
                            <li>• Usually still greets family (unless very sick)</li>
                            <li>• May follow routine but with less enthusiasm</li>
                            <li>• Often still responds to favorite activities</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-600">Warning Signs in Dogs:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Won't get up to greet family</li>
                            <li>• Refuses favorite treats or walks</li>
                            <li>• Difficulty standing or walking</li>
                            <li>• Heavy panting while resting</li>
                            <li>• Seeking isolated, quiet spaces</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-600">Breed Considerations:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Large breeds: Watch for bloat, hip dysplasia</li>
                            <li>• Brachycephalic breeds: Heat sensitivity</li>
                            <li>• High-energy breeds: Sudden lethargy more concerning</li>
                            <li>• Working breeds: May hide illness longer</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-purple-600 mb-4">🐱 Cat Lethargy Characteristics</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-purple-700">Typical Presentation:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• More subtle behavioral changes</li>
                            <li>• Often hide when feeling unwell</li>
                            <li>• May stop grooming (fur becomes unkempt)</li>
                            <li>• Changes in litter box habits</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-600">Warning Signs in Cats:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Hiding for extended periods</li>
                            <li>• Not coming for meals</li>
                            <li>• Elimination outside litter box</li>
                            <li>• Mouth breathing or panting</li>
                            <li>• Complete loss of interest in surroundings</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-orange-600">Cat-Specific Concerns:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Hide illness very well (survival instinct)</li>
                            <li>• Kidney disease extremely common</li>
                            <li>• Hyperthyroidism in senior cats</li>
                            <li>• Stress-sensitive (moves, new pets)</li>
                            <li>• Lethargy often first sign of serious illness</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assessment & Monitoring */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">📋 Home Assessment & Monitoring Guide</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Step-by-Step Lethargy Assessment</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-blue-700 mb-3">Physical Observations:</h4>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                            <div>
                              <p className="font-medium text-sm">Gum Color Check:</p>
                              <p className="text-xs text-gray-600">Lift lip, check gum color (should be pink, not pale/blue/yellow)</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                            <div>
                              <p className="font-medium text-sm">Breathing Assessment:</p>
                              <p className="text-xs text-gray-600">Count breaths per minute (dogs: 10-30, cats: 20-30 at rest)</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                            <div>
                              <p className="font-medium text-sm">Hydration Test:</p>
                              <p className="text-xs text-gray-600">Pinch skin on neck - should snap back quickly</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                            <div>
                              <p className="font-medium text-sm">Temperature Feel:</p>
                              <p className="text-xs text-gray-600">Ears/nose should feel cool and moist (not hot or cold)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-700 mb-3">Behavioral Assessment:</h4>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                            <div>
                              <p className="font-medium text-sm">Response to Name:</p>
                              <p className="text-xs text-gray-600">Does pet look up/acknowledge when called?</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                            <div>
                              <p className="font-medium text-sm">Interest in Food:</p>
                              <p className="text-xs text-gray-600">Offer favorite treat - any interest shown?</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                            <div>
                              <p className="font-medium text-sm">Mobility Check:</p>
                              <p className="text-xs text-gray-600">Can pet stand/walk normally when encouraged?</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1" />
                            <div>
                              <p className="font-medium text-sm">Social Interaction:</p>
                              <p className="text-xs text-gray-600">Does pet seek or accept gentle petting/comfort?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-600 mb-3">Daily Monitoring Log</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Energy level (1-10 scale)</li>
                        <li>• Appetite and water intake</li>
                        <li>• Bathroom habits (frequency/consistency)</li>
                        <li>• Sleep patterns (location/duration)</li>
                        <li>• Response to family interaction</li>
                        <li>• Any new symptoms noted</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-yellow-600 mb-3">Environmental Factors</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Temperature and humidity levels</li>
                        <li>• Recent household changes</li>
                        <li>• New foods, treats, or medications</li>
                        <li>• Exposure to other animals</li>
                        <li>• Recent travel or boarding</li>
                        <li>• Possible toxin exposure</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-600 mb-3">Red Flag Combinations</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Lethargy + not eating/drinking</li>
                        <li>• Lethargy + vomiting/diarrhea</li>
                        <li>• Lethargy + difficulty breathing</li>
                        <li>• Lethargy + hiding/avoidance</li>
                        <li>• Lethargy + pale gums</li>
                        <li>• Lethargy + trembling/shaking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Treatment & Support */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🏥 Treatment & Supportive Care</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-600 mb-4">Home Supportive Care</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-green-700">Comfort Measures:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Provide quiet, comfortable resting area</li>
                            <li>• Ensure easy access to water and food</li>
                            <li>• Maintain normal room temperature</li>
                            <li>• Minimize stress and loud noises</li>
                            <li>• Gentle encouragement for basic needs</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-600">Encouraging Activity:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Short, gentle walks if pet is willing</li>
                            <li>• Encourage movement for bathroom needs</li>
                            <li>• Offer favorite activities in small doses</li>
                            <li>• Use treats or toys for gentle motivation</li>
                            <li>• Avoid forcing activity if pet resists</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-600 mb-4">When Home Care Isn't Enough</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-red-600">Immediate Vet Care Needed:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• No improvement after 24 hours</li>
                            <li>• Worsening lethargy or new symptoms</li>
                            <li>• Complete loss of appetite/water intake</li>
                            <li>• Difficulty standing or walking</li>
                            <li>• Any breathing difficulties</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-orange-600">Professional Treatment Options:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Diagnostic testing to identify cause</li>
                            <li>• IV fluids for dehydration</li>
                            <li>• Pain management if discomfort present</li>
                            <li>• Specific treatment for underlying condition</li>
                            <li>• Appetite stimulants or nutritional support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-600 mb-3">Age-Specific Care Considerations</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">Puppies/Kittens:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Seek veterinary care quickly (within hours)</li>
                          <li>• Can become hypoglycemic rapidly</li>
                          <li>• Dehydration develops faster</li>
                          <li>• May need immediate IV support</li>
                          <li>• Watch for temperature changes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Adult Pets:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Can often wait 24-48 hours if stable</li>
                          <li>• Monitor for additional symptoms</li>
                          <li>• Encourage normal activities gently</li>
                          <li>• Support with comfort measures</li>
                          <li>• Track improvement or decline</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-600 mb-2">Senior Pets:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Lower threshold for veterinary care</li>
                          <li>• More likely to have serious underlying cause</li>
                          <li>• May need more intensive supportive care</li>
                          <li>• Consider quality of life factors</li>
                          <li>• Regular monitoring even when stable</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prevention */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🛡️ Preventing Pet Lethargy & Maintaining Energy</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-600 mb-3">Regular Health Maintenance</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Annual/bi-annual veterinary exams</li>
                        <li>• Up-to-date vaccinations</li>
                        <li>• Regular parasite prevention</li>
                        <li>• Dental care and cleanings</li>
                        <li>• Early detection of health issues</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-600 mb-3">Nutrition & Exercise</h3>
                      <ul className="text-sm space-y-2">
                        <li>• High-quality, age-appropriate diet</li>
                        <li>• Maintain healthy weight</li>
                        <li>• Regular, appropriate exercise</li>
                        <li>• Mental stimulation activities</li>
                        <li>• Fresh water always available</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-600 mb-3">Environmental Wellness</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Stress reduction and routine</li>
                        <li>• Comfortable sleeping areas</li>
                        <li>• Temperature control (avoid extremes)</li>
                        <li>• Safe, toxin-free environment</li>
                        <li>• Regular social interaction</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-3">Senior Pet Energy Management</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-orange-600 mb-2">Lifestyle Adaptations:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Shorter, more frequent exercise sessions</li>
                          <li>• Joint supplements for arthritis prevention</li>
                          <li>• Senior-specific diets with appropriate nutrients</li>
                          <li>• Orthopedic bedding for comfort</li>
                          <li>• Ramps or steps to reduce jumping</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Health Monitoring:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Bi-annual vet exams after age 7</li>
                          <li>• Regular blood work to catch issues early</li>
                          <li>• Blood pressure monitoring</li>
                          <li>• Pain assessment and management</li>
                          <li>• Cognitive function evaluation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Expert Lethargy & Fatigue Assessment 24/7</h2>
                <p className="text-lg mb-6">
                  Our AI pet health specialist helps evaluate lethargy symptoms and provides guidance on when immediate care is needed
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 text-white hover:bg-gray-50 hover:text-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-sm sm:text-base break-words hyphens-auto px-4 py-3 min-h-12"
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'anywhere',
                      whiteSpace: 'normal'
                    }}
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="flex-1">Ask About Your Pet's Lethargy - Free</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-purple-100">
                  ✓ Symptom severity assessment ✓ Emergency guidance ✓ Home care recommendations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Pet Lethargy and Fatigue Guide",
            "description": "Complete guide to pet lethargy and fatigue including causes, assessment, and emergency signs",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Pet Lethargy and Fatigue"
            }
          })
        }}
      />
    </div>
  );
}