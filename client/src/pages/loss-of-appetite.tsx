import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Footer } from "@/components/footer";
import { ArrowRight, Heart, AlertTriangle, CheckCircle, Star } from "lucide-react";
import { Link } from "wouter";

export default function LossOfAppetite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <SEOHead 
        title="Pet Loss of Appetite 2025: Causes, Treatment & When to Worry"
        description="Expert guide to pet appetite loss. Learn causes, symptoms, treatment for dogs and cats not eating, and when loss of appetite requires emergency care."
        keywords="pet loss of appetite, dog not eating, cat not eating, pet appetite loss, dog won't eat, cat won't eat, pet not eating food, appetite problems pets"

      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pet Loss of Appetite: Complete Treatment Guide 2025
            </h1>
            <p className="text-xl mb-8 text-yellow-100">
              Expert veterinary guide to pet appetite loss. Learn why dogs and cats stop eating, 
              when to worry, effective treatments, and emergency warning signs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-yellow-600 text-white hover:bg-gray-50 hover:text-yellow-700 shadow-lg">
                <Heart className="w-5 h-5 mr-2" />
                Get Appetite Help
              </Button>
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-yellow-600 shadow-lg">
                Emergency Appetite Care
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-red-200 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-red-600">Pet Appetite Loss: Emergency Timeline</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-red-600">🚨 EMERGENCY - See Vet Immediately:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Puppies/kittens not eating 12+ hours</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Diabetic pets missing meals</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Not drinking water 24+ hours</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Vomiting + appetite loss</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Signs of pain or distress</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-orange-600">⚠️ URGENT - Within 24 Hours:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Dogs not eating 24-48 hours</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Cats not eating 24+ hours</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Senior pets with appetite changes</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Lethargy with appetite loss</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Behavioral changes</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-yellow-600">📅 MONITOR - 48-72 Hours:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />Healthy adult dogs (2-3 days max)</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />Mild stress-related appetite loss</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />Still drinking water normally</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />Otherwise acting normal</li>
                    <li className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-yellow-500 mr-2" />Trying home appetite stimulants</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-red-100 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>⚠️ Critical:</strong> Cats can develop hepatic lipidosis (fatty liver disease) 
                  within 2-3 days of not eating. Dogs can survive longer but dehydration becomes dangerous quickly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>



      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Dog Appetite Loss */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🐕 Dog Not Eating: Causes & Solutions</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-600 mb-4">Common Reasons Dogs Stop Eating</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-blue-700">Medical Causes:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Dental problems or mouth pain</li>
                            <li>• Gastrointestinal upset or nausea</li>
                            <li>• Kidney or liver disease</li>
                            <li>• Infections or fever</li>
                            <li>• Pain from arthritis or injury</li>
                            <li>• Medication side effects</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-600">Behavioral/Environmental:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Stress from changes in routine</li>
                            <li>• Food preferences or boredom</li>
                            <li>• Competition from other pets</li>
                            <li>• Hot weather reducing appetite</li>
                            <li>• Too many treats or table scraps</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-600 mb-4">Getting Your Dog to Eat Again</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-green-700">Appetite Stimulation:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Warm the food slightly (enhances smell)</li>
                            <li>• Add low-sodium chicken broth</li>
                            <li>• Mix in small amount of wet food</li>
                            <li>• Hand feeding to encourage interest</li>
                            <li>• Feed in quiet, comfortable location</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-orange-600">Food Modifications:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Switch to highly palatable food temporarily</li>
                            <li>• Offer multiple small meals vs. large portions</li>
                            <li>• Try different textures (wet vs. dry)</li>
                            <li>• Remove uneaten food after 20-30 minutes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-3">Dog Appetite Loss: Age-Specific Concerns</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">Puppies (2-6 months):</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Need to eat every 4-6 hours</li>
                          <li>• Cannot fast safely like adult dogs</li>
                          <li>• May need appetite stimulants quickly</li>
                          <li>• See vet if not eating 12+ hours</li>
                          <li>• Hypoglycemia risk if not eating</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Adult Dogs (1-7 years):</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Can safely fast 1-2 days if healthy</li>
                          <li>• Often stress or preference related</li>
                          <li>• Try appetite stimulation techniques</li>
                          <li>• Monitor for other symptoms</li>
                          <li>• Maintain normal water intake</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-600 mb-2">Senior Dogs (7+ years):</h4>
                        <ul className="text-sm space-y-1">
                          <li>• More likely to have underlying health issues</li>
                          <li>• Dental problems common cause</li>
                          <li>• Medication interactions possible</li>
                          <li>• May need softer, more palatable foods</li>
                          <li>• See vet sooner than younger dogs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cat Appetite Loss */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🐱 Cat Not Eating: Critical Care Guide</h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-600 mb-4">⚠️ Why Cat Appetite Loss is More Urgent</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-red-700 mb-2">Hepatic Lipidosis Risk:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Cats develop fatty liver disease quickly (2-3 days)</li>
                          <li>• Body begins breaking down fat stores</li>
                          <li>• Liver becomes overwhelmed processing fat</li>
                          <li>• Can be life-threatening if untreated</li>
                          <li>• More common in overweight cats</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-600 mb-2">Metabolic Differences:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Higher protein requirements than dogs</li>
                          <li>• Cannot fast safely for extended periods</li>
                          <li>• Dehydration develops more rapidly</li>
                          <li>• Blood sugar can drop dangerously</li>
                          <li>• Stress significantly impacts appetite</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-purple-600 mb-4">Common Causes: Cat Appetite Loss</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-purple-700">Medical Issues:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Upper respiratory infections (can't smell food)</li>
                            <li>• Dental disease or oral pain</li>
                            <li>• Kidney disease (especially senior cats)</li>
                            <li>• Nausea from various causes</li>
                            <li>• Hyperthyroidism or diabetes</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-600">Stress/Environmental:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Changes in household routine</li>
                            <li>• New pets or people in home</li>
                            <li>• Dirty litter box nearby food</li>
                            <li>• Food bowl location changes</li>
                            <li>• Competition from other cats</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-orange-600 mb-4">Emergency Cat Appetite Stimulation</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-orange-700">Immediate Actions:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Warm food to body temperature</li>
                            <li>• Strong-smelling foods (tuna, sardines)</li>
                            <li>• Baby food (chicken/turkey, no onion/garlic)</li>
                            <li>• Syringe feeding small amounts if necessary</li>
                            <li>• Remove stressors from environment</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-600">If Still Not Eating:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Call vet immediately after 24 hours</li>
                            <li>• May need prescription appetite stimulants</li>
                            <li>• IV fluids to prevent dehydration</li>
                            <li>• Force feeding may be necessary</li>
                            <li>• Feeding tube placement in severe cases</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-3">Cat Food Preferences & Solutions</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Texture Preferences:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Try paté, chunks in gravy, shredded</li>
                          <li>• Some cats prefer smooth textures</li>
                          <li>• Others like chunks they can feel</li>
                          <li>• Warm food releases more aroma</li>
                          <li>• Fresh food every meal (cats detect staleness)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-600 mb-2">Flavor Stimulation:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Fish flavors often most appealing</li>
                          <li>• Bonito flakes sprinkled on food</li>
                          <li>• Low-sodium chicken broth mixed in</li>
                          <li>• Freeze-dried meat treats crushed on top</li>
                          <li>• Rotate flavors to prevent boredom</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Situations */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🏥 Special Appetite Loss Situations</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-red-600 mb-4">Post-Surgery Appetite Loss</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-red-700">Normal Post-Op Changes:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Reduced appetite 24-48 hours normal</li>
                            <li>• Anesthesia effects on stomach</li>
                            <li>• Pain medication side effects</li>
                            <li>• Stress from hospital stay</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-orange-600">When to Call Vet:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• No eating after 48 hours</li>
                            <li>• Vomiting when trying to eat</li>
                            <li>• Signs of severe pain</li>
                            <li>• Not drinking water</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-600 mb-4">Medication-Related Appetite Loss</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-blue-700">Common Culprits:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Antibiotics (especially oral)</li>
                            <li>• Pain medications (opioids)</li>
                            <li>• Chemotherapy drugs</li>
                            <li>• Anti-nausea medications (ironically)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-600">Management Strategies:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Give medications with food when possible</li>
                            <li>• Ask vet about appetite stimulants</li>
                            <li>• Time medications between meals</li>
                            <li>• Never stop medications without vet approval</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-600 mb-3">Chronic Disease & Appetite Management</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">Kidney Disease:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Nausea from toxin buildup</li>
                          <li>• Prescription diets may be less palatable</li>
                          <li>• Regular appetite stimulants may be needed</li>
                          <li>• Monitor phosphorus binders timing</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-600 mb-2">Cancer Treatment:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Chemotherapy-induced nausea</li>
                          <li>• High-calorie foods important</li>
                          <li>• Anti-nausea medications essential</li>
                          <li>• Feeding tubes sometimes necessary</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Diabetes:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Eating schedule critical for insulin timing</li>
                          <li>• Monitor for ketoacidosis signs</li>
                          <li>• Blood sugar affects appetite</li>
                          <li>• Never skip meals with diabetic pets</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Appetite Stimulants */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🍽️ Natural Appetite Stimulants & Feeding Tips</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-600 mb-3">Food Temperature & Aroma</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Warm food to body temperature (not hot)</li>
                        <li>• Microwave for 10-15 seconds</li>
                        <li>• Add warm water or broth to dry food</li>
                        <li>• Strong smells stimulate appetite</li>
                        <li>• Fresh food always more appealing</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-600 mb-3">Flavor Enhancers</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Low-sodium chicken/beef broth</li>
                        <li>• Bonito flakes (cats love these)</li>
                        <li>• Small amount of tuna juice</li>
                        <li>• Baby food (meat only, no onion/garlic)</li>
                        <li>• Freeze-dried meat treats crushed</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-600 mb-3">Feeding Environment</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Quiet, stress-free location</li>
                        <li>• Elevated bowls for older pets</li>
                        <li>• Separate feeding areas (multi-pet homes)</li>
                        <li>• Clean bowls for each meal</li>
                        <li>• Consistent feeding schedule</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-3">Force Feeding Guidelines (Emergency Only)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">When Force Feeding May Be Necessary:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Vet recommends to prevent hepatic lipidosis</li>
                          <li>• Critical illness requiring nutrition</li>
                          <li>• Medication administration with food</li>
                          <li>• Bridge until professional treatment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Safe Force Feeding Technique:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Use baby food or liquid diet</li>
                          <li>• Small syringe (no needle) in side of mouth</li>
                          <li>• Very small amounts, allow swallowing</li>
                          <li>• Never force if pet is vomiting</li>
                          <li>• Get vet guidance before attempting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-red-100 rounded-lg">
                      <p className="text-sm text-red-800">
                        <strong>⚠️ Warning:</strong> Force feeding can cause aspiration pneumonia if done incorrectly. 
                        Only attempt under veterinary guidance and never force feed a vomiting animal.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Treatment */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🏥 Professional Appetite Loss Treatment</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Veterinary Appetite Stimulants</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-blue-700">Common Medications:</h4>
                        <ul className="text-sm text-gray-600 ml-4 space-y-1">
                          <li>• Mirtazapine (cats and dogs)</li>
                          <li>• Capromorelin (dogs - Elura)</li>
                          <li>• Cyproheptadine (antihistamine with appetite effects)</li>
                          <li>• Anti-nausea drugs (maropitant, ondansetron)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-600">How They Work:</h4>
                        <ul className="text-sm text-gray-600 ml-4 space-y-1">
                          <li>• Block appetite-suppressing signals</li>
                          <li>• Reduce nausea and stomach upset</li>
                          <li>• Stimulate hunger centers in brain</li>
                          <li>• Improve food palatability perception</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-green-600 mb-4">Supportive Care Options</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-green-700">Immediate Support:</h4>
                        <ul className="text-sm text-gray-600 ml-4 space-y-1">
                          <li>• IV or subcutaneous fluids</li>
                          <li>• Anti-nausea injections</li>
                          <li>• Pain management if needed</li>
                          <li>• Electrolyte replacement</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-600">Long-term Solutions:</h4>
                        <ul className="text-sm text-gray-600 ml-4 space-y-1">
                          <li>• Feeding tube placement (severe cases)</li>
                          <li>• Prescription appetite-stimulating diets</li>
                          <li>• Treatment of underlying conditions</li>
                          <li>• Regular monitoring and adjustments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-yellow-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-3">Diagnostic Testing for Appetite Loss</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Basic Workup:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Complete blood count (CBC)</li>
                        <li>• Blood chemistry panel</li>
                        <li>• Urinalysis</li>
                        <li>• Fecal examination</li>
                        <li>• Physical examination including dental</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Advanced Testing (if needed):</h4>
                      <ul className="text-sm space-y-1">
                        <li>• X-rays or ultrasound</li>
                        <li>• Thyroid function tests</li>
                        <li>• Specific organ function tests</li>
                        <li>• Endoscopy or biopsy</li>
                        <li>• CT or MRI for complex cases</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Expert Appetite Loss Guidance 24/7</h2>
                <p className="text-lg mb-6">
                  Our AI pet health specialist helps assess appetite problems and provides immediate guidance on stimulation techniques
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-yellow-600 text-white hover:bg-gray-50 hover:text-yellow-700 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-sm sm:text-base break-words hyphens-auto px-4 py-3 min-h-12"
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'anywhere',
                      whiteSpace: 'normal'
                    }}
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="flex-1">Ask About Your Pet's Appetite Loss - Free</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-yellow-100">
                  ✓ Appetite stimulation tips ✓ Emergency timeline guidance ✓ When to seek professional help
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
            "name": "Pet Loss of Appetite Treatment Guide",
            "description": "Complete guide to pet appetite loss including causes, treatment, and emergency timelines",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Pet Loss of Appetite"
            }
          })
        }}
      />

      <Footer />
    </div>
  );
}