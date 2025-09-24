import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { ArrowRight, Heart, AlertTriangle, CheckCircle, Star } from "lucide-react";
import { Link } from "wouter";

export default function VomitingNausea() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      <SEOHead 
        title="Pet Vomiting & Nausea 2025: Causes, Treatment & Emergency Signs"
        description="Expert guide to pet vomiting and nausea. Learn causes, when to worry, home treatment, and emergency signs for dog and cat vomiting issues."
        keywords="pet vomiting, dog vomiting, cat vomiting, pet nausea, dog throwing up, cat throwing up, pet vomit treatment, vomiting causes pets"

      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pet Vomiting & Nausea: Expert Treatment Guide 2025
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Complete veterinary guide to pet vomiting and nausea. Learn causes, emergency signs, 
              when to seek help, and effective home treatment for dogs and cats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white hover:bg-gray-50 hover:text-red-700 shadow-lg">
                <Heart className="w-5 h-5 mr-2" />
                Get Vomiting Help
              </Button>
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-red-600 shadow-lg">
                Emergency Vomiting Care
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Signs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-red-200 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">Emergency Vomiting Signs - See Vet Immediately</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-red-500">Critical Emergency Signs:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Blood in vomit (red or coffee-ground appearance)</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Vomiting multiple times within 2-4 hours</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Projectile or forceful vomiting</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Unable to keep water down</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Signs of severe pain or distress</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-orange-500">Urgent Vomiting Situations:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Vomiting with diarrhea (dehydration risk)</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Bloated or hard abdomen</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Dry heaving without producing vomit</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Lethargy, weakness, or collapse</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Puppies/kittens vomiting (any amount)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>⚠️ Important:</strong> Puppies and kittens under 6 months can become dangerously dehydrated 
                  within hours. Any vomiting in young pets requires immediate veterinary attention.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vomiting vs Normal */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Understanding Pet Vomiting vs. Normal Behavior</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-600 mb-4">🟢 Normal/Minor Vomiting</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Hairballs (Cats):</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Occasional tubular mass of hair</li>
                        <li>• Cat appears normal otherwise</li>
                        <li>• Eating and drinking normally</li>
                        <li>• More common in long-haired cats</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Eating Too Fast:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Vomits undigested food shortly after eating</li>
                        <li>• Happens occasionally, not regularly</li>
                        <li>• Pet seems fine afterward</li>
                        <li>• Can be prevented with slow-feeding bowls</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-2">Grass Eating (Dogs):</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Occasional vomiting after eating grass</li>
                        <li>• Natural behavior for stomach upset</li>
                        <li>• Not accompanied by other symptoms</li>
                        <li>• Dog returns to normal activity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-4">🔴 Concerning Vomiting</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Frequency Issues:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Multiple episodes in short time period</li>
                        <li>• Daily vomiting for several days</li>
                        <li>• Vomiting every time after eating/drinking</li>
                        <li>• Increasing frequency over time</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Content Concerns:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Blood (bright red or dark brown)</li>
                        <li>• Yellow/green bile consistently</li>
                        <li>• Foul smell or unusual appearance</li>
                        <li>• Foreign objects or unusual materials</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-600 mb-2">Associated Symptoms:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Loss of appetite or refusing water</li>
                        <li>• Lethargy or behavioral changes</li>
                        <li>• Diarrhea or constipation</li>
                        <li>• Abdominal pain or distension</li>
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
            
            {/* Dog Vomiting */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🐕 Dog Vomiting: Causes & Treatment</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-600 mb-4">Common Causes of Dog Vomiting</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-blue-700">Dietary Related (Most Common):</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Eating too fast or overeating</li>
                            <li>• Sudden diet changes</li>
                            <li>• Garbage, spoiled food, or foreign objects</li>
                            <li>• Food allergies or intolerances</li>
                            <li>• Rich, fatty, or spicy human food</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-600">Medical Causes:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Intestinal parasites or infections</li>
                            <li>• Kidney or liver disease</li>
                            <li>• Pancreatitis or gastritis</li>
                            <li>• Intestinal blockage or twisted stomach</li>
                            <li>• Motion sickness or stress</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-600 mb-4">Dog Vomiting Home Treatment</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-green-700">Immediate Steps:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Withhold food for 12-24 hours</li>
                            <li>• Provide small amounts of water frequently</li>
                            <li>• Monitor for additional symptoms</li>
                            <li>• Keep dog quiet and comfortable</li>
                            <li>• Remove access to garbage/foreign objects</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-600">Reintroducing Food:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Start with bland diet (boiled chicken + rice)</li>
                            <li>• Small portions every 4-6 hours</li>
                            <li>• Gradually increase portion size</li>
                            <li>• Return to normal diet over 3-5 days</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-3">Dog Vomiting: When to See Vet</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">Emergency (Immediate):</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Blood in vomit</li>
                          <li>• Projectile vomiting</li>
                          <li>• Bloated, hard stomach</li>
                          <li>• Dry heaving/retching</li>
                          <li>• Signs of pain</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-600 mb-2">Urgent (Within Hours):</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Vomiting 3+ times in 2 hours</li>
                          <li>• Can't keep water down</li>
                          <li>• Vomiting with diarrhea</li>
                          <li>• Lethargy or weakness</li>
                          <li>• Dehydration signs</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Schedule Appointment:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Vomiting persists &gt;24 hours</li>
                          <li>• Loss of appetite &gt;24 hours</li>
                          <li>• Senior dogs with new symptoms</li>
                          <li>• Recurring vomiting episodes</li>
                          <li>• Weight loss with vomiting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cat Vomiting */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🐱 Cat Vomiting: Causes & Treatment</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-purple-600 mb-4">Common Causes of Cat Vomiting</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-purple-700">Normal Cat Behaviors:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Hairballs (especially long-haired cats)</li>
                            <li>• Eating too quickly</li>
                            <li>• Eating grass or plants</li>
                            <li>• Occasional food regurgitation</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-600">Medical Issues:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Kidney disease (common in senior cats)</li>
                            <li>• Hyperthyroidism</li>
                            <li>• Inflammatory bowel disease</li>
                            <li>• Food allergies or dietary indiscretion</li>
                            <li>• Intestinal parasites or infections</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-orange-600 mb-4">Cat Vomiting Treatment</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-orange-700">Home Care Steps:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Withhold food for 8-12 hours (shorter than dogs)</li>
                            <li>• Ensure access to fresh water</li>
                            <li>• Monitor litter box usage</li>
                            <li>• Keep cat calm and stress-free</li>
                            <li>• Remove access to houseplants</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-600">Diet Transition:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Start with small amounts of regular food</li>
                            <li>• Consider wet food (easier to digest)</li>
                            <li>• Elevate food bowls to prevent gulping</li>
                            <li>• Multiple small meals vs. few large ones</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-600 mb-3">Cat Hairball vs. Concerning Vomiting</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">Normal Hairballs:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Tubular shape, mostly hair</li>
                          <li>• Clear liquid or small amount of food</li>
                          <li>• Cat acts normal afterward</li>
                          <li>• Occurs occasionally (weekly/monthly)</li>
                          <li>• Preceded by gagging/retching sounds</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">Concerning Vomiting:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Daily vomiting or multiple episodes</li>
                          <li>• Liquid vomit with no hair</li>
                          <li>• Blood or unusual colors</li>
                          <li>• Associated with loss of appetite</li>
                          <li>• Projectile or forceful vomiting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Note:</strong> Cats hide illness well. Any change in eating, drinking, or bathroom habits 
                        along with vomiting should be evaluated by a veterinarian promptly.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prevention */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🛡️ Preventing Pet Vomiting & Nausea</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-600 mb-3">Feeding Practices</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Regular feeding schedule (2-3 times daily)</li>
                        <li>• Appropriate portion sizes</li>
                        <li>• Slow-feeding bowls for fast eaters</li>
                        <li>• High-quality, age-appropriate food</li>
                        <li>• Avoid sudden diet changes</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-600 mb-3">Environment Safety</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Secure garbage cans with tight lids</li>
                        <li>• Remove toxic plants from home</li>
                        <li>• Store human medications safely</li>
                        <li>• Prevent access to small objects</li>
                        <li>• Clean up food spills promptly</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-600 mb-3">Health Maintenance</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Regular veterinary checkups</li>
                        <li>• Up-to-date parasite prevention</li>
                        <li>• Dental care and oral health</li>
                        <li>• Stress reduction and routine</li>
                        <li>• Weight management</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-3">Foods to Avoid (Can Cause Vomiting)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">Toxic Foods:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Chocolate, coffee, caffeine</li>
                          <li>• Grapes, raisins, onions, garlic</li>
                          <li>• Xylitol (artificial sweetener)</li>
                          <li>• Alcohol and raw yeast dough</li>
                          <li>• Macadamia nuts and avocado</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-600 mb-2">Problematic Foods:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• High-fat foods (can cause pancreatitis)</li>
                          <li>• Dairy products (lactose intolerance)</li>
                          <li>• Spicy or heavily seasoned foods</li>
                          <li>• Raw or undercooked meat/eggs</li>
                          <li>• Large bones that can splinter</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Care */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🏥 Professional Vomiting Treatment</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">What to Expect at Vet Visit</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-blue-700">Physical Examination:</h4>
                        <ul className="text-sm text-gray-600 ml-4 space-y-1">
                          <li>• Temperature, heart rate, breathing</li>
                          <li>• Abdominal palpation for pain/masses</li>
                          <li>• Hydration status assessment</li>
                          <li>• Oral examination for foreign objects</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-600">Possible Diagnostic Tests:</h4>
                        <ul className="text-sm text-gray-600 ml-4 space-y-1">
                          <li>• Blood work (organ function, electrolytes)</li>
                          <li>• X-rays or ultrasound for blockages</li>
                          <li>• Fecal examination for parasites</li>
                          <li>• Urinalysis for kidney function</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-600 mb-4">Treatment Options</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-green-700">Supportive Care:</h4>
                        <ul className="text-sm text-gray-600 ml-4 space-y-1">
                          <li>• IV fluids for dehydration</li>
                          <li>• Anti-nausea medications</li>
                          <li>• Stomach protectants</li>
                          <li>• Electrolyte replacement</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-600">Specific Treatments:</h4>
                        <ul className="text-sm text-gray-600 ml-4 space-y-1">
                          <li>• Antibiotics for infections</li>
                          <li>• Surgery for blockages</li>
                          <li>• Prescription diets</li>
                          <li>• Long-term medication for chronic conditions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-yellow-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-3">Information to Bring to Vet Visit</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-sm space-y-1">
                      <li>• Frequency and timing of vomiting episodes</li>
                      <li>• Description of vomit (color, content, consistency)</li>
                      <li>• Recent diet changes or new foods</li>
                      <li>• Possible access to garbage, toxins, or foreign objects</li>
                    </ul>
                    <ul className="text-sm space-y-1">
                      <li>• Other symptoms (diarrhea, lethargy, appetite changes)</li>
                      <li>• Current medications or supplements</li>
                      <li>• Recent travel or environmental changes</li>
                      <li>• Photo/sample of vomit if possible (helpful for diagnosis)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-red-600 to-pink-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Expert Vomiting & Nausea Guidance 24/7</h2>
                <p className="text-lg mb-6">
                  Our AI pet health specialist helps assess vomiting symptoms and provides immediate guidance on care decisions
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-red-600 text-white hover:bg-gray-50 hover:text-red-700 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-sm sm:text-base break-words hyphens-auto px-4 py-3 min-h-12"
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'anywhere',
                      whiteSpace: 'normal'
                    }}
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="flex-1">Ask About Your Pet's Vomiting - Free</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-red-100">
                  ✓ Emergency assessment ✓ Treatment guidance ✓ When to seek vet care
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
            "name": "Pet Vomiting and Nausea Treatment Guide",
            "description": "Complete guide to pet vomiting and nausea including causes, treatment, and emergency signs",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Pet Vomiting and Nausea"
            }
          })
        }}
      />
    </div>
  );
}