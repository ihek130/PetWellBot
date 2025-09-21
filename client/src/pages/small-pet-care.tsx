import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { ArrowRight, Heart, AlertTriangle, CheckCircle, Star } from "lucide-react";
import { Link } from "wouter";

export default function SmallPetCare() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <SEOHead 
        title="Small Pet Care Guide 2025 | Hamster, Rabbit, Guinea Pig & Ferret Care"
        description="Complete small pet care guide for hamsters, rabbits, guinea pigs, ferrets, and pocket pets. Expert health tips, housing, nutrition, and emergency care advice."
        keywords="small pet care, hamster care, rabbit health, guinea pig care, ferret care, pocket pets, small animal health, rabbit nutrition, hamster problems, guinea pig illness"

      />
      
      {/* Hero Section - Targeting "small pet care" */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Small Pet Care Guide 2025: Hamsters, Rabbits, Guinea Pigs & More
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Expert care guide for all small pets. From hamster housing to rabbit nutrition, 
              learn essential small animal health, behavior, and emergency care from veterinary experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                <Heart className="w-5 h-5 mr-2" />
                Get Small Pet Advice
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Emergency Small Pet Care
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Emergency Small Pet Care */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <Card className="mb-8 border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                  <h2 className="text-2xl font-bold text-red-600">Emergency Small Pet Health Signs - Seek Vet Immediately</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-red-500">Critical Small Pet Emergency Signs:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Difficulty breathing or gasping</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Unconsciousness or severe weakness</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Bleeding from any area</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Seizures or head trauma</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Not eating for 12+ hours (small pets)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-orange-500">Urgent Small Pet Issues:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Diarrhea or wet tail (hamsters)</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />GI stasis in rabbits</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Upper respiratory infections</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Overgrown teeth problems</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Heat stroke symptoms</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>⚠️ Important:</strong> Small pets have very fast metabolisms and can deteriorate quickly. 
                    Any change in eating, drinking, or activity requires immediate attention.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Species-Specific Care */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Small Pet Care by Species (2025 Expert Guide)</h2>
                
                <div className="space-y-8">
                  {/* Hamster Care */}
                  <div>
                    <h3 className="text-xl font-semibold text-orange-600 mb-4">🐹 Hamster Care Complete Guide</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Hamster Housing Requirements</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Cage size:</strong> Minimum 450 sq inches floor space</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Bedding:</strong> Paper-based, avoid cedar/pine shavings</p>
                        <p className="text-sm text-red-600"><strong>Temperature:</strong> 65-75°F, avoid drafts and direct sunlight</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Hamster Health Problems</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Wet tail:</strong> Bacterial infection, lethargy, diarrhea</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Cheek pouch impaction:</strong> Food stuck, swollen cheeks</p>
                        <p className="text-sm text-blue-600"><strong>Prevention:</strong> Clean cage weekly, proper diet, fresh water</p>
                      </div>
                    </div>
                  </div>

                  {/* Rabbit Care */}
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-4">🐰 Rabbit Care Essential Guide</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Rabbit Nutrition Basics</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Daily diet:</strong> Unlimited timothy hay, 1/4 cup pellets per 5lbs</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Vegetables:</strong> 2-4 cups leafy greens, introduce gradually</p>
                        <p className="text-sm text-red-600"><strong>Avoid:</strong> Iceberg lettuce, seeds, nuts, chocolate</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Rabbit GI Stasis Prevention</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Signs:</strong> Not eating, small/no droppings, lethargy</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Prevention:</strong> High fiber diet, exercise, stress reduction</p>
                        <p className="text-sm text-red-600"><strong>Emergency:</strong> Can be fatal within 24 hours - see vet immediately</p>
                      </div>
                    </div>
                  </div>

                  {/* Guinea Pig Care */}
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 mb-4">🐹 Guinea Pig Care Complete Guide</h3>
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3">Guinea Pig Social & Housing Needs</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <p className="font-medium text-purple-600 mb-2">Social Requirements:</p>
                            <ul className="text-sm space-y-1">
                              <li>• Keep in pairs or groups</li>
                              <li>• Same-sex bonding preferred</li>
                              <li>• Introduce gradually</li>
                              <li>• Daily interaction with humans</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-purple-600 mb-2">Housing Essentials:</p>
                            <ul className="text-sm space-y-1">
                              <li>• Minimum 10.5 sq ft for pair</li>
                              <li>• Solid bottom cage preferred</li>
                              <li>• Hide houses for each pig</li>
                              <li>• Room temperature 65-75°F</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-purple-600 mb-2">Health Monitoring:</p>
                            <ul className="text-sm space-y-1">
                              <li>• Weekly weight checks</li>
                              <li>• Monitor eating/drinking</li>
                              <li>• Check for URI symptoms</li>
                              <li>• Vitamin C deficiency signs</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Guinea Pig Nutrition Guide</h4>
                          <p className="text-sm text-gray-600 mb-2"><strong>Vitamin C:</strong> 30mg daily (cannot produce own)</p>
                          <p className="text-sm text-gray-600 mb-2"><strong>Hay:</strong> Unlimited timothy hay, fresh daily</p>
                          <p className="text-sm text-blue-600"><strong>Pellets:</strong> 1/8 cup per pound body weight</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Common Guinea Pig Health Issues</h4>
                          <p className="text-sm text-gray-600 mb-2"><strong>Upper respiratory:</strong> Discharge, sneezing, difficulty breathing</p>
                          <p className="text-sm text-gray-600 mb-2"><strong>Scurvy:</strong> Vitamin C deficiency, joint swelling</p>
                          <p className="text-sm text-red-600"><strong>Bloat:</strong> Emergency condition, see vet immediately</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ferret Care */}
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">🦫 Ferret Care Expert Guide</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Ferret Nutrition & Feeding</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>High protein:</strong> 35-40% protein, 15-20% fat</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Frequent meals:</strong> Every 3-4 hours when awake</p>
                        <p className="text-sm text-red-600"><strong>Avoid:</strong> Dairy, sugary foods, high carb diets</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Common Ferret Health Issues</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Adrenal disease:</strong> Hair loss, aggression, urinary issues</p>
                        <p className="text-sm text-gray-600 mb-2"><strong>Insulinomas:</strong> Low blood sugar, weakness, seizures</p>
                        <p className="text-sm text-blue-600"><strong>Regular care:</strong> Annual exams after age 3, twice yearly after 5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daily Small Pet Care */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Daily Small Pet Care Essentials</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-600 mb-4">Universal Small Pet Daily Care</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Fresh Food & Water</h4>
                          <p className="text-sm text-gray-600">Species-appropriate pellets, hay, vegetables, clean water bottle</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Health Monitoring</h4>
                          <p className="text-sm text-gray-600">Check appetite, activity, breathing, bathroom habits</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1" />
                        <div>
                          <h4 className="font-medium">Environmental Maintenance</h4>
                          <p className="text-sm text-gray-600">Spot clean cage, check temperature, ensure proper ventilation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-4">Weekly Small Pet Tasks</h3>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Cage Deep Cleaning:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Complete bedding change</li>
                          <li>• Disinfect food/water containers</li>
                          <li>• Clean cage bars and accessories</li>
                          <li>• Replace worn toys or items</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Health Assessments:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Weigh your pet (especially rabbits/guinea pigs)</li>
                          <li>• Check nails, teeth, ears</li>
                          <li>• Grooming as needed</li>
                          <li>• Exercise and enrichment time</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Expert Small Pet Care Advice 24/7</h2>
                <p className="text-lg mb-6">
                  Our AI small pet specialist provides care guidance for hamsters, rabbits, guinea pigs, and more
                </p>
                <Link to="/">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                    <Heart className="w-5 h-5 mr-2" />
                    Ask About Your Small Pet - Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-orange-100">
                  ✓ Species-specific guidance ✓ Emergency help ✓ Nutrition & housing advice
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
            "name": "Small Pet Care Guide 2025",
            "description": "Complete guide to small pet care including hamsters, rabbits, guinea pigs, and ferrets",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Small Pet Health and Care"
            }
          })
        }}
      />
    </div>
  );
}