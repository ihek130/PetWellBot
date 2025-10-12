import { AlertTriangle, Heart, Thermometer, Clock, Activity, ArrowRight, CheckCircle, XCircle, Phone, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";

export default function DogShakingWontEat() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <SEOHead 
        title="Dog Shaking and Won't Eat: Common Causes of Trembling with Loss of Appetite | PetWellBot"
        description="Veterinary guide to dog trembling with appetite loss. Learn when shaking with not eating is normal vs emergency, 8 common causes, home care tips, and when to call your vet."
        keywords="dog shaking won't eat, dog trembling not eating, dog shivering loss of appetite, dog shaking refusing food, why is my dog shaking and not eating"
        canonicalUrl="https://petwellbot.com/dog-shaking-wont-eat"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Dog Symptoms", href: "/symptoms" },
              { label: "Dog Shaking and Won't Eat" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⚠️ MONITOR - Assessment Needed
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dog Shaking and Won't Eat: Common Causes & When to Worry
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Trembling with loss of appetite can signal anything from anxiety to serious illness. 
              Learn when shaking is emergency vs normal, 8 common causes, and home care tips.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Symptom Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600"
              >
                <Activity className="w-5 h-5 mr-2" />
                Quick Severity Check
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="py-6 bg-orange-50 border-y-2 border-orange-300" id="assessment">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">⚠️ Seek Emergency Care If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Severe shaking with collapse or inability to stand</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Blue or pale gums (sign of shock or oxygen deprivation)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Seizures or uncontrollable tremors</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Bloated, hard abdomen with shaking (possible GDV/bloat)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>No food or water for 24+ hours (12+ hours in puppies)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Known toxin ingestion (chocolate, xylitol, antifreeze)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Quick Assessment */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-blue-600" />
              Quick Severity Assessment
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Emergency (Go to vet NOW)
                </h3>
                <ul className="space-y-1 text-red-800 text-sm">
                  <li>✗ Severe tremors/seizures</li>
                  <li>✗ Collapse or can't stand</li>
                  <li>✗ Gums pale, blue, or white</li>
                  <li>✗ Bloated abdomen with pain</li>
                  <li>✗ Temperature &lt;99°F or &gt;103°F</li>
                  <li>✗ Known toxin exposure</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Vet Visit Today (Call within 2-4 hours)
                </h3>
                <ul className="space-y-1 text-yellow-800 text-sm">
                  <li>⚠ Shaking continues for 6+ hours</li>
                  <li>⚠ No food for 24+ hours (12+ hours for puppies)</li>
                  <li>⚠ Vomiting or diarrhea with shaking</li>
                  <li>⚠ Lethargic, won't get up to greet you</li>
                  <li>⚠ Tremors getting worse, not better</li>
                  <li>⚠ Senior dog (8+ years) or puppy (&lt;6 months)</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Monitor at Home (Safe to wait 12-24 hours)
                </h3>
                <ul className="space-y-1 text-green-800 text-sm">
                  <li>✓ Mild shaking, comes and goes</li>
                  <li>✓ Still drinking water normally</li>
                  <li>✓ Alert and responsive</li>
                  <li>✓ Skipped 1-2 meals but interested in treats</li>
                  <li>✓ Normal bowel movements</li>
                  <li>✓ Known cause (cold environment, excitement, anxiety)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 8 Common Causes */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              8 Common Causes of Shaking + No Appetite
            </h2>

            <div className="space-y-6">
              {/* Cause 1 */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #1 Nausea (Most Common - 35%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Dogs shake when nauseated - it's their version of "I feel sick." The stomach discomfort causes tremors, and naturally they refuse food.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Other signs:</strong> Lip licking, drooling, gulping, restlessness, vomiting (may bring up yellow bile or foam)
                </p>
                <p className="text-gray-700">
                  <strong>Home care:</strong> Fast for 12-24 hours (water only), then bland diet (boiled chicken + rice). If vomiting continues or blood appears, see vet immediately.
                </p>
              </div>

              {/* Cause 2 */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #2 Pain (25%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Dogs shake when in pain - could be abdominal pain (pancreatitis, blockage), joint pain, injury, or dental pain. Pain = no appetite.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Other signs:</strong> Whining, panting, reluctance to move, hunched posture, avoiding touch in certain areas, guarding behavior
                </p>
                <p className="text-gray-700">
                  <strong>Home care:</strong> Check for obvious injuries (cuts, swelling, limping). Gently palpate abdomen - hard, bloated, or extremely tense = emergency. See vet same day if pain persists.
                </p>
              </div>

              {/* Cause 3 */}
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #3 Fever/Infection (15%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Normal dog temp: 101-102.5°F. Fever (&gt;103°F) causes shaking/shivering and complete loss of appetite. Common infections: respiratory, UTI, tick-borne diseases.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Other signs:</strong> Warm ears/paws, hot dry nose, lethargy, rapid breathing, coughing, discharge from eyes/nose
                </p>
                <p className="text-gray-700">
                  <strong>Home care:</strong> Take rectal temperature if possible. Fever &gt;103°F or &lt;99°F = vet visit today. Keep dog cool, offer water frequently.
                </p>
              </div>

              {/* Cause 4 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #4 Anxiety/Fear (10%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Severe anxiety causes stress-induced shaking and appetite loss. Common triggers: thunderstorms, fireworks, new environment, separation anxiety, vet visit fear.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Other signs:</strong> Pacing, panting, hiding, tail tucked, ears back, dilated pupils, destructive behavior
                </p>
                <p className="text-gray-700">
                  <strong>Home care:</strong> Remove trigger if possible, create safe space (crate, quiet room), use calming aids (Adaptil diffuser, anxiety wrap). Should improve within 2-4 hours after trigger removal.
                </p>
              </div>

              {/* Cause 5 */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #5 Hypoglycemia (Low Blood Sugar) - Especially Small Breeds (8%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Skipping meals → blood sugar drops → shaking/tremors. Toy breeds (Chihuahuas, Yorkies) and puppies are most at risk. Can be life-threatening if severe.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Other signs:</strong> Weakness, wobbling, confusion, seizures in severe cases, glassy eyes
                </p>
                <p className="text-gray-700">
                  <strong>Home care:</strong> Offer honey or corn syrup (1 tsp for small dogs, 1 tbsp for large) rubbed on gums immediately. If dog won't eat within 30 minutes or gets worse, go to emergency vet - this can progress to seizures.
                </p>
              </div>

              {/* Cause 6 */}
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #6 Toxin Ingestion (5%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Many toxins cause tremors + GI upset. Common culprits: chocolate, xylitol (gum/candy), grapes/raisins, human medications (ibuprofen, acetaminophen), household cleaners, plants (lilies, azaleas).
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Other signs:</strong> Vomiting, diarrhea, drooling, dilated pupils, seizures, rapid heart rate
                </p>
                <p className="text-gray-700">
                  <strong>Home care:</strong> If you KNOW your dog ate something toxic within last 2 hours, call Pet Poison Helpline (855-764-7661) or emergency vet immediately. Do NOT induce vomiting without vet approval - some toxins cause more damage coming back up.
                </p>
              </div>

              {/* Cause 7 */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #7 Cold/Hypothermia (1%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Dogs shiver when cold to generate body heat. Small breeds, short-coated dogs, puppies, and seniors are most susceptible. Feeling unwell from cold can reduce appetite.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Other signs:</strong> Cold ears/paws, seeking warm spots, curled up tightly, slow movement
                </p>
                <p className="text-gray-700">
                  <strong>Home care:</strong> Warm dog gradually (blankets, warm room - NOT hot bath which can shock the system). Should stop shaking within 20-30 minutes once warm. If shaking continues despite warmth, it's not cold-related - see vet.
                </p>
              </div>

              {/* Cause 8 */}
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #8 Organ Disease (Kidney, Liver) - Especially Senior Dogs (1%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Kidney or liver disease causes toxin buildup → nausea/tremors. Usually develops gradually but can have acute episodes. More common in dogs 8+ years.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Other signs:</strong> Increased thirst/urination, weight loss, bad breath, vomiting, lethargy, yellowing of eyes/gums (liver disease)
                </p>
                <p className="text-gray-700">
                  <strong>Home care:</strong> Requires vet diagnosis (blood work, urinalysis). If your senior dog has gradual onset of shaking + appetite loss + increased thirst, schedule vet visit within 24-48 hours.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Temperature Guide */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Thermometer className="h-6 w-6 text-blue-600" />
              How to Check Your Dog's Temperature
            </h2>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="font-medium text-blue-900 mb-2">Normal Range: 101-102.5°F (38.3-39.2°C)</p>
              <p className="text-blue-800 text-sm">Fever is anything above 103°F. Below 99°F is hypothermia - both require vet care.</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Step-by-Step (Rectal - Most Accurate):</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Use digital pet thermometer (NOT glass mercury)</li>
                  <li>Lubricate tip with petroleum jelly or water-based lubricant</li>
                  <li>Gently insert 1 inch into rectum (or until it beeps)</li>
                  <li>Hold steady for 60 seconds or until thermometer beeps</li>
                  <li>Clean thermometer with alcohol after use</li>
                </ol>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Alternative: Ear Thermometer (Less Accurate but Easier)</h3>
                <p className="text-gray-700">Pet-specific ear thermometers work but can be 1-2°F off. Good for quick check but rectal is gold standard if fever suspected.</p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">No Thermometer? Physical Signs of Fever:</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Very warm ears (inside ear leather feels hot)</li>
                  <li>• Hot, dry nose (though this alone isn't reliable)</li>
                  <li>• Warm belly/groin area</li>
                  <li>• Shivering despite being in warm environment</li>
                  <li>• Lethargy + loss of appetite</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Home Care DO/DON'T */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Home Care: DO vs DON'T</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  DO These Things
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>Offer fresh water frequently - dehydration makes everything worse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>Keep environment warm and quiet - reduce stress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>Monitor closely - check gum color, temperature, behavior every 2-4 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>Try bland food after 12 hours if no vomiting (boiled chicken + rice)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>Keep a symptom log - when shaking started, frequency, other symptoms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>For small breeds: offer honey if suspected hypoglycemia</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  DON'T Do These
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 flex-shrink-0">✗</span>
                    <span>Don't force-feed - can cause aspiration if nauseated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 flex-shrink-0">✗</span>
                    <span>Don't give human medications without vet approval - many are toxic to dogs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 flex-shrink-0">✗</span>
                    <span>Don't use hot water bottle/heating pad without supervision - can cause burns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 flex-shrink-0">✗</span>
                    <span>Don't wait more than 24 hours for adult dogs, 12 hours for puppies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 flex-shrink-0">✗</span>
                    <span>Don't ignore worsening symptoms - shaking getting worse = vet NOW</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 flex-shrink-0">✗</span>
                    <span>Don't assume it's "just anxiety" without ruling out medical causes</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to Call Vet */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              Timeline: When to Call Your Vet
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded text-sm flex-shrink-0">
                  NOW
                </div>
                <div>
                  <p className="font-medium text-gray-900">Emergency - Go to Vet Immediately</p>
                  <p className="text-gray-700 text-sm">Severe tremors/seizures, collapse, pale/blue gums, bloated abdomen, known toxin ingestion, temperature &lt;99°F or &gt;103.5°F</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded text-sm flex-shrink-0">
                  2-4 hrs
                </div>
                <div>
                  <p className="font-medium text-gray-900">Call Vet for Same-Day Appointment</p>
                  <p className="text-gray-700 text-sm">Moderate shaking for 6+ hours, vomiting/diarrhea, lethargy, pain signs, puppies or seniors affected</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-yellow-100 text-yellow-700 font-bold px-3 py-1 rounded text-sm flex-shrink-0">
                  12-24 hrs
                </div>
                <div>
                  <p className="font-medium text-gray-900">Monitor at Home, Call if No Improvement</p>
                  <p className="text-gray-700 text-sm">Mild shaking, still drinking water, no other concerning symptoms. Call vet if not eating after 24 hours (12 hours for puppies) or shaking worsens</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded text-sm flex-shrink-0">
                  24-48 hrs
                </div>
                <div>
                  <p className="font-medium text-gray-900">Schedule Regular Vet Visit</p>
                  <p className="text-gray-700 text-sm">Occasional shaking resolved on its own, ate normally after 24 hours, but want to discuss pattern with vet</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Expect at Vet */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-blue-600" />
              What to Expect at the Vet Visit
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Physical Examination ($50-$100)</h3>
                <p className="text-gray-700">Temperature check, abdominal palpation, neurological assessment (reflexes, coordination), heart/lung sounds, hydration check</p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Common Diagnostic Tests</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Blood work (CBC + Chemistry):</strong> $150-$300 - checks for infection, organ function, blood sugar, electrolytes</li>
                  <li><strong>Urinalysis:</strong> $50-$100 - kidney function, diabetes, infection</li>
                  <li><strong>X-rays:</strong> $200-$400 - if suspected blockage, bloat, or organ enlargement</li>
                  <li><strong>Toxin screening:</strong> $100-$300 - if poisoning suspected</li>
                  <li><strong>Ultrasound:</strong> $300-$600 - detailed organ imaging if x-rays inconclusive</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Typical Treatments</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Anti-nausea medication:</strong> Cerenia injection or tablets ($30-$80)</li>
                  <li><strong>Pain medication:</strong> If pain-related ($20-$100)</li>
                  <li><strong>Antibiotics:</strong> If infection found ($40-$100)</li>
                  <li><strong>IV fluids:</strong> If dehydrated ($100-$300)</li>
                  <li><strong>Hospitalization:</strong> $500-$2,000/day if severe</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-blue-900 font-medium mb-2">💡 Pro Tip for Vet Visit:</p>
                <p className="text-blue-800 text-sm">Bring a video of the shaking if possible - helps vet distinguish between types of tremors (whole-body shaking vs localized tremor vs seizure activity)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Dog Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/dog-vomiting-yellow-foam-night">
                <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dog Vomiting Yellow Foam at Night</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Bilious vomiting syndrome causes and solutions for nighttime vomiting
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dog-wont-drink-water-will-eat">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dog Won't Drink Water But Will Eat</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Dehydration risks and proven tricks to encourage water drinking
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dog-diarrhea-blood-emergency">
                <Card className="border-2 border-red-200 hover:border-red-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dog Diarrhea with Blood Emergency</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Learn when bloody diarrhea requires immediate vet care vs home monitoring
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dog-ate-chocolate-3-hours-ago">
                <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dog Ate Chocolate 3 Hours Ago</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Emergency chocolate poisoning protocol and toxic dose calculations
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/symptoms">
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700">
                  View All Dog Symptoms →
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
            <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Worried About Your Dog's Shaking and Loss of Appetite?</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Tell our free AI veterinary assistant about the shaking pattern and other symptoms. 
                  Get instant guidance on whether you need emergency vet care or can monitor at home.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free AI Symptom Analysis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  ✓ Available 24/7 ✓ Instant Emergency Assessment ✓ All Dog Breeds ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
