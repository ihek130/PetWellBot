import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Clock, Utensils, Activity, ArrowRight, CheckCircle, XCircle, AlertCircle, Thermometer } from "lucide-react";
import { Link } from "wouter";

export default function CatNotEatingDrinking3Days() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <SEOHead 
        title="Cat Not Eating or Drinking for 3 Days - Emergency Anorexia Guide | PetWellBot"
        description="Cat hasn't eaten in 3 days? Learn why complete anorexia is life-threatening in cats, hepatic lipidosis risk, and emergency feeding strategies."
        keywords="cat not eating 3 days, cat not drinking, cat anorexia emergency, hepatic lipidosis cats, cat won't eat or drink"
        canonicalUrl="https://petwellbot.com/cat-not-eating-drinking-3-days"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Cat Symptoms", href: "/symptoms" },
              { label: "Cat Not Eating or Drinking for 3 Days" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                🚨 EMERGENCY - Immediate Vet Care Required
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cat Not Eating or Drinking for 3 Days: Emergency Protocol
            </h1>
            <p className="text-xl text-red-100 mb-6">
              3 days without food is life-threatening for cats - hepatic lipidosis (fatty liver) can develop within 72 hours. 
              Learn emergency signs, causes of anorexia, and what your vet will do.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get Emergency AI Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('emergency')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-red-600"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Emergency Actions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CRITICAL Emergency Banner */}
      <section className="py-6 bg-red-100 border-y-4 border-red-500" id="emergency">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-red-600 mb-2">⚠️ CALL YOUR VET OR EMERGENCY CLINIC NOW!</h2>
                <p className="text-gray-800 text-lg mb-4">
                  3 days without food puts cats at CRITICAL risk for hepatic lipidosis (fatty liver disease) - a life-threatening condition where fat accumulates in the liver. <span className="font-bold">Cats cannot safely fast like dogs or humans.</span>
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded border-2 border-red-300">
                    <p className="font-bold text-red-700 mb-1">Timeline:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 24-48 hours: Liver begins metabolizing fat abnormally</li>
                      <li>• 72 hours: Hepatic lipidosis risk becomes CRITICAL</li>
                      <li>• 5-7 days: Irreversible organ damage possible</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-white rounded border-2 border-red-300">
                    <p className="font-bold text-red-700 mb-1">Why Cats Are Different:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Obligate carnivores - can't process fat mobilization well</li>
                      <li>• Overweight cats at HIGHEST risk (fat stores overwhelm liver)</li>
                      <li>• No food = liver tries to use fat = liver failure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Top Causes */}
        <Card className="border-red-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10 Medical Causes of Complete Anorexia in Cats
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Kidney Disease (Chronic Renal Failure)</h3>
                <p className="text-sm text-gray-700">Nausea from toxin buildup makes cats refuse food. Common in cats 7+ years old.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Pancreatitis</h3>
                <p className="text-sm text-gray-700">Severe abdominal pain and nausea. Often accompanied by lethargy, hunched posture, hiding.</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Dental Disease/Tooth Root Abscess</h3>
                <p className="text-sm text-gray-700">Mouth pain prevents eating. May paw at face, drool, or approach food then walk away.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Upper Respiratory Infection (URI)</h3>
                <p className="text-sm text-gray-700">Can't smell food = won't eat. Look for sneezing, nasal discharge, eye discharge.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Gastrointestinal Blockage (Foreign Body)</h3>
                <p className="text-sm text-gray-700">String, toy, hairball blocking intestines. Emergency - can cause perforation.</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Liver Disease (Cholangiohepatitis)</h3>
                <p className="text-sm text-gray-700">Liver inflammation causes nausea, jaundice (yellow gums/eyes), weakness.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Inflammatory Bowel Disease (IBD)</h3>
                <p className="text-sm text-gray-700">Chronic intestinal inflammation with vomiting, diarrhea, weight loss despite normal appetite initially.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#8 Hyperthyroidism (Paradoxical Anorexia)</h3>
                <p className="text-sm text-gray-700">Usually causes increased appetite, but late-stage or concurrent illness causes food refusal.</p>
              </div>

              <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50">
                <h3 className="font-bold text-gray-900">#9 Cancer (Lymphoma, Squamous Cell Carcinoma)</h3>
                <p className="text-sm text-gray-700">GI lymphoma or oral cancer causes pain/nausea. Progressive weight loss despite offering food.</p>
              </div>

              <div className="p-3 border-l-4 border-teal-500 bg-teal-50">
                <h3 className="font-bold text-gray-900">#10 Toxin Ingestion</h3>
                <p className="text-sm text-gray-700">Lilies, antifreeze, rodenticides, essential oils cause severe organ damage and anorexia.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Home Actions */}
        <Card className="border-red-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-red-600" />
              What to Do RIGHT NOW (Before Vet Visit)
            </h2>

            <div className="p-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg mb-4">
              <p className="font-bold text-yellow-900 mb-2">⚠️ FIRST: Call your vet - don't wait to try home remedies for 3-day anorexia!</p>
              <p className="text-yellow-800 text-sm">While waiting for appointment or transport, you can try these ONLY if cat is conscious and not vomiting:</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Tempt with Strong-Smelling Foods</h3>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Warm wet food (heat releases aroma - cats eat by smell)</li>
                  <li>• Tuna juice (not tuna meat - too rich), sardine juice</li>
                  <li>• Baby food (chicken or turkey, NO onion/garlic)</li>
                  <li>• Chicken or beef broth (low sodium, no onions)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Check for Dehydration</h3>
                <p className="text-sm text-gray-700 mb-2">Skin tent test: Gently pinch skin on back of neck. Normal = snaps back immediately. Dehydrated = stays tented for 2+ seconds.</p>
                <p className="text-sm font-medium text-red-600">If gums are dry/tacky or skin tents = CRITICAL dehydration = Emergency vet NOW</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Document Symptoms for Vet</h3>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Last time cat ate/drank (exact time)</li>
                  <li>• Vomiting or diarrhea? (describe appearance)</li>
                  <li>• Hiding more than usual?</li>
                  <li>• Yellow eyes or gums (jaundice)?</li>
                  <li>• Recent stress (moved, new pet, vet visit)?</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
              <p className="font-bold text-red-900 mb-1">❌ DO NOT:</p>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Force-feed solid food (can cause aspiration pneumonia)</li>
                <li>• Give milk (most cats are lactose intolerant - causes diarrhea)</li>
                <li>• Wait "one more day" to see if appetite returns</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Vet Visit */}
        <Card className="border-red-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-600" />
              What Your Vet Will Do (Emergency Visit)
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Immediate Stabilization</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>IV fluids:</strong> $100-$300 - corrects dehydration CRITICAL for kidney function</li>
                  <li><strong>Anti-nausea injection:</strong> Cerenia $40-$80 - stops vomiting, stimulates appetite</li>
                  <li><strong>Appetite stimulant:</strong> Mirtazapine $30-$60 or Maropitant</li>
                  <li><strong>Pain medication:</strong> If dental pain/pancreatitis suspected</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Diagnostic Workup ($400-$1,000+)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Blood work (CBC + Chemistry):</strong> $200-$400 - checks kidney, liver, pancreas, blood sugar, infection</li>
                  <li><strong>X-rays:</strong> $200-$400 - looks for foreign body, organ enlargement, masses</li>
                  <li><strong>Ultrasound:</strong> $300-$600 - detailed organ imaging (pancreatitis, liver disease, cancer)</li>
                  <li><strong>Feline pancreatic lipase (fPL):</strong> $150-$250 - confirms pancreatitis</li>
                  <li><strong>Urinalysis:</strong> $50-$100 - kidney function, diabetes, infection</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Treatment Options</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Hospitalization:</strong> $800-$2,000/day - IV fluids, injectable medications, force-feeding if needed</li>
                  <li><strong>Feeding tube placement:</strong> $400-$1,200 - esophagostomy tube for assisted feeding (prevents hepatic lipidosis)</li>
                  <li><strong>Cause-specific treatment:</strong> Antibiotics (URI $60-$150), kidney support (Subq fluids at home $100-$300/month), pancreatitis management</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 border border-purple-200 rounded mt-4">
                <p className="font-semibold text-purple-900 mb-2">💡 Hepatic Lipidosis Prevention:</p>
                <p className="text-sm text-purple-800">
                  If underlying cause found, vet will aggressively push nutrition (feeding tube, appetite stimulants) even before cat feels better. This prevents fatty liver disease which is harder to treat than the original problem.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Cat Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/cat-vomiting-undigested-food-hours-after-eating">
                <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Vomiting Undigested Food Hours After Eating</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Why cats regurgitate whole food and when to worry
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-hiding-wont-come-out">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Hiding and Won't Come Out</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Understanding hiding behavior and health concerns
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-drooling-acting-weird">
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">My Cat is Drooling and Acting Weird</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Causes of excessive drooling and behavioral changes
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-third-eyelid-showing-suddenly">
                <Card className="border-2 border-pink-200 hover:border-pink-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Third Eyelid Showing Suddenly</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Haw syndrome and other causes of visible third eyelid
                    </p>
                    <div className="flex items-center text-pink-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/symptoms">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                  View All Cat Symptoms →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Cat Hasn't Eaten in 3 Days? Get Help NOW</h2>
                <p className="text-xl mb-6 text-purple-100">
                  Tell our free AI veterinary assistant how long your cat hasn't eaten, other symptoms, and get instant emergency guidance. 
                  3 days is CRITICAL - don't wait another hour.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Emergency Assessment Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-purple-100">
                  ✓ Available 24/7 ✓ Instant Emergency Assessment ✓ All Cat Breeds ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
