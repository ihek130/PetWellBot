import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { ArrowRight, Heart, AlertTriangle, CheckCircle, Star } from "lucide-react";
import { Link } from "wouter";

export default function DigestiveIssues() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <SEOHead 
        title="Pet Digestive Issues 2025: Diarrhea, Constipation, Upset Stomach Treatment"
        description="Expert guide to pet digestive problems. Causes, symptoms, and treatment for dog/cat diarrhea, constipation, upset stomach, and digestive disorders."
        keywords="pet digestive issues, dog diarrhea, cat diarrhea, pet constipation, upset stomach pets, digestive problems, gastrointestinal issues, pet stomach problems"

      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pet Digestive Issues: Complete Treatment Guide 2025
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Expert veterinary guide to pet digestive problems. Learn causes, symptoms, and treatment 
              for diarrhea, constipation, upset stomach, and serious gastrointestinal issues in dogs and cats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-green-600 text-white hover:bg-gray-50 hover:text-green-700 shadow-lg">
                <Heart className="w-5 h-5 mr-2" />
                Get Digestive Help
              </Button>
              <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-green-600 shadow-lg">
                Emergency Digestive Care
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
                <h2 className="text-2xl font-bold text-red-600">Emergency Digestive Signs - See Vet Immediately</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-red-500">Critical Emergency Signs:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Blood in vomit or stool</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Severe abdominal pain or bloating</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Multiple episodes of vomiting/diarrhea</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Signs of dehydration (sunken eyes, lethargy)</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-red-500 mr-2" />Unable to keep food or water down</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-orange-500">Urgent Digestive Issues:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />No bowel movements for 2+ days</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Straining to defecate with no results</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Excessive drooling or difficulty swallowing</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Sudden loss of appetite for 24+ hours</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-500 mr-2" />Distended or hard abdomen</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>



      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Dog Diarrhea Section */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🐕 Dog Diarrhea: Causes, Treatment & Prevention</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-blue-600 mb-4">Common Causes of Dog Diarrhea</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-blue-700">Dietary Issues (Most Common):</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Sudden diet changes</li>
                            <li>• Eating garbage or spoiled food</li>
                            <li>• Food allergies or intolerances</li>
                            <li>• Too many treats or human food</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-red-600">Medical Causes:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Intestinal parasites (worms, giardia)</li>
                            <li>• Bacterial infections (salmonella, E. coli)</li>
                            <li>• Viral infections (parvovirus, distemper)</li>
                            <li>• Inflammatory bowel disease</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-600 mb-4">Dog Diarrhea Treatment at Home</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-green-700">Immediate Steps:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Fast for 12-24 hours (water only)</li>
                            <li>• Provide small, frequent water amounts</li>
                            <li>• Monitor for dehydration signs</li>
                            <li>• Keep dog comfortable and warm</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-600">Recovery Diet:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Bland diet: boiled chicken + white rice</li>
                            <li>• Small portions every 4-6 hours</li>
                            <li>• Gradually return to normal food</li>
                            <li>• Plain pumpkin (1-2 tablespoons)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-3">When to See Vet for Dog Diarrhea</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">Immediate Emergency:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Blood in stool</li>
                          <li>• Black, tarry stool</li>
                          <li>• Vomiting + diarrhea together</li>
                          <li>• Signs of pain or distress</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-600 mb-2">Within 24 Hours:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Diarrhea lasts &gt;24 hours</li>
                          <li>• Dehydration signs</li>
                          <li>• Lethargy or weakness</li>
                          <li>• Loss of appetite</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 mb-2">Puppies (Same Day):</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Any diarrhea in puppies &lt;6 months</li>
                          <li>• Multiple episodes</li>
                          <li>• Not drinking water</li>
                          <li>• Appears lethargic</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cat Digestive Issues */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🐱 Cat Digestive Problems: Constipation & Diarrhea</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-purple-600 mb-4">Cat Constipation Solutions</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-purple-700">Signs of Cat Constipation:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• No bowel movement for 2-3 days</li>
                            <li>• Straining in litter box</li>
                            <li>• Small, hard, dry stools</li>
                            <li>• Crying when trying to defecate</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-600">Home Treatment:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Increase water intake</li>
                            <li>• Add canned pumpkin (1 tsp twice daily)</li>
                            <li>• Switch to wet food temporarily</li>
                            <li>• Gentle belly massage</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-orange-600 mb-4">Cat Diarrhea Treatment</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-orange-700">Common Causes:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Diet changes or poor quality food</li>
                            <li>• Stress from environment changes</li>
                            <li>• Parasites (especially outdoor cats)</li>
                            <li>• Hairballs blocking intestines</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-600">Treatment Steps:</h4>
                          <ul className="text-sm text-gray-600 ml-4 space-y-1">
                            <li>• Remove food for 12 hours (keep water)</li>
                            <li>• Offer bland diet: boiled chicken</li>
                            <li>• Probiotics designed for cats</li>
                            <li>• Monitor litter box closely</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-600 mb-3">Cat Hairball-Related Digestive Issues</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Prevention Strategies:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Daily brushing (especially long-haired cats)</li>
                          <li>• Hairball prevention diet or treats</li>
                          <li>• Increase fiber in diet</li>
                          <li>• Regular grooming professional visits</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">When Hairballs Cause Problems:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Frequent vomiting with no hairball production</li>
                          <li>• Loss of appetite or constipation</li>
                          <li>• Lethargy or hiding behavior</li>
                          <li>• <strong>Emergency vet if no eating 24+ hours</strong></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* General Digestive Health */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🍽️ Digestive Health Prevention & Diet Tips</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-600 mb-3">Diet Quality</h3>
                      <ul className="text-sm space-y-2">
                        <li>• High-quality, age-appropriate food</li>
                        <li>• Avoid frequent diet changes</li>
                        <li>• Limited ingredient diets for sensitive pets</li>
                        <li>• Proper portion control</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-600 mb-3">Feeding Schedule</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Regular meal times (2-3 times daily)</li>
                        <li>• Avoid free feeding</li>
                        <li>• Separate eating areas (multi-pet homes)</li>
                        <li>• Fresh water always available</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-600 mb-3">Stress Reduction</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Consistent daily routine</li>
                        <li>• Quiet eating environment</li>
                        <li>• Regular exercise and mental stimulation</li>
                        <li>• Gradual introduction of changes</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-700 mb-3">Foods to Avoid for Digestive Health</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-red-600 mb-2">Toxic/Dangerous Foods:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Chocolate, grapes, raisins</li>
                          <li>• Onions, garlic, chives</li>
                          <li>• Fatty foods (can cause pancreatitis)</li>
                          <li>• Bones that can splinter</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-600 mb-2">Digestive Irritants:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Dairy products (most pets are lactose intolerant)</li>
                          <li>• Spicy or seasoned human food</li>
                          <li>• High-fat treats or table scraps</li>
                          <li>• Artificial sweeteners (especially xylitol)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* When to Seek Professional Help */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">🏥 Professional Digestive Care: When to See Your Vet</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-600 mb-4">Emergency Vet Visit Required</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        Blood in vomit or stool
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        Multiple episodes of vomiting/diarrhea
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        Signs of severe pain (crying, panting, restlessness)
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        Bloated or distended abdomen
                      </li>
                      <li className="flex items-center">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                        Inability to keep water down
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-orange-600 mb-4">Schedule Vet Appointment</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        Digestive issues lasting &gt;24-48 hours
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        Recurring digestive problems
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        Unexplained weight loss
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        Changes in appetite lasting &gt;2 days
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        Senior pets with new digestive symptoms
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-600 mb-3">What to Expect During Vet Visit</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Information to Provide:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Complete symptom timeline</li>
                        <li>• Recent diet changes or new foods</li>
                        <li>• Frequency and consistency of bowel movements</li>
                        <li>• Any medications or supplements</li>
                        <li>• Behavioral changes observed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Possible Diagnostic Tests:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Physical examination and temperature</li>
                        <li>• Fecal examination for parasites</li>
                        <li>• Blood work to check organ function</li>
                        <li>• X-rays if obstruction suspected</li>
                        <li>• Specialized tests for chronic issues</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Get Expert Digestive Health Guidance 24/7</h2>
                <p className="text-lg mb-6">
                  Our AI pet health specialist provides immediate guidance for digestive issues and emergency care decisions
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-green-600 text-white hover:bg-gray-50 hover:text-green-700 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold text-sm sm:text-base break-words hyphens-auto px-4 py-3 min-h-12"
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'anywhere',
                      whiteSpace: 'normal'
                    }}
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="flex-1">Ask About Your Pet's Digestive Issue - Free</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-green-100">
                  ✓ Immediate symptom assessment ✓ Emergency guidance ✓ Treatment recommendations
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
            "name": "Pet Digestive Issues Treatment Guide",
            "description": "Complete guide to pet digestive problems including diarrhea, constipation, and upset stomach treatment",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Pet Digestive Issues"
            }
          })
        }}
      />
    </div>
  );
}