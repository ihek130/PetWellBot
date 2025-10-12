import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Droplets, Clock, Activity, ArrowRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function CatDroolingActingWeird() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <SEOHead 
        title="My Cat is Drooling and Acting Weird - Toxin, Pain & Neurological Causes | PetWellBot"
        description="Cat drooling excessively and acting strange? Learn causes of hypersalivation with behavior changes, toxin ingestion signs, and when drooling is an emergency."
        keywords="cat drooling excessively, cat drooling acting weird, cat hypersalivation, cat toxin poisoning, cat drooling suddenly"
        canonicalUrl="https://petwellbot.com/cat-drooling-acting-weird"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Cat Symptoms", href: "/symptoms" },
              { label: "My Cat is Drooling and Acting Weird" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⚠️ URGENT - Possible Toxin Exposure
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My Cat is Drooling and Acting Weird: Causes & Emergency Signs
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Sudden drooling with behavioral changes signals toxin ingestion, mouth pain, nausea, or neurological issues. 
              Learn emergency signs, common poisons, and when drooling requires immediate vet care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get Emergency AI Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('toxins')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-purple-600"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Common Cat Toxins
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="py-6 bg-red-50 border-y-2 border-red-300" id="toxins">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">🚨 Call Poison Control or Emergency Vet If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Excessive drooling + vomiting or diarrhea</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Seizures, tremors, or difficulty walking</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Known exposure to lilies, antifreeze, or human medications</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Foam or blood in drool</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Difficulty breathing or blue gums</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Collapse or extreme lethargy</span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-white rounded-lg border-2 border-red-300">
                  <p className="font-semibold text-red-700 mb-2">📞 Poison Hotlines (24/7):</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <span className="font-medium">Pet Poison Helpline:</span> (855) 764-7661 ($75 fee)</li>
                    <li>• <span className="font-medium">ASPCA Poison Control:</span> (888) 426-4435 ($95 fee)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Top Toxins */}
        <Card className="border-red-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              Top 10 Toxins That Cause Drooling in Cats
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Lilies (ALL PARTS DEADLY)</h3>
                <p className="text-sm text-gray-700 mb-1">Easter lilies, Tiger lilies, Stargazer - eating 1-2 leaves causes acute kidney failure within 24-72 hours.</p>
                <p className="text-xs text-red-700"><strong>Signs:</strong> Drooling, vomiting within 2 hours, then kidney failure (not urinating, weakness)</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Permethrin (Flea/Tick Products)</h3>
                <p className="text-sm text-gray-700 mb-1">DOG flea products applied to cats or cats exposed to treated dogs. Causes neurological toxicity.</p>
                <p className="text-xs text-orange-700"><strong>Signs:</strong> Profuse drooling, muscle tremors, seizures, twitching within 1-6 hours</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Essential Oils</h3>
                <p className="text-sm text-gray-700 mb-1">Tea tree, eucalyptus, peppermint, citrus oils. Cats can't metabolize them - toxic even via diffuser.</p>
                <p className="text-xs text-yellow-700"><strong>Signs:</strong> Drooling, vomiting, difficulty walking, tremors, liver damage</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Household Cleaners (Bleach, Pine-Sol)</h3>
                <p className="text-sm text-gray-700 mb-1">Walking on wet floors, then grooming paws. Caustic chemicals burn mouth/esophagus.</p>
                <p className="text-xs text-green-700"><strong>Signs:</strong> Excessive drooling, pawing at mouth, red/ulcerated gums, vomiting</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Human Medications (Tylenol, Ibuprofen, Antidepressants)</h3>
                <p className="text-sm text-gray-700 mb-1">1 Tylenol tablet can kill a cat. Ibuprofen causes kidney failure. SSRIs cause serotonin syndrome.</p>
                <p className="text-xs text-blue-700"><strong>Signs:</strong> Drooling, vomiting, lethargy, brown gums (Tylenol), seizures (SSRIs)</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Antifreeze (Ethylene Glycol)</h3>
                <p className="text-sm text-gray-700 mb-1">Sweet taste attracts cats. Causes acute kidney failure. TINY amount (1 teaspoon) is lethal.</p>
                <p className="text-xs text-purple-700"><strong>Timeline:</strong> 30min-12hr drunk behavior, drooling → 12-24hr seeming better → 24-72hr kidney failure</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Xylitol (Sugar-Free Products)</h3>
                <p className="text-sm text-gray-700 mb-1">Gum, peanut butter, medications. Causes liver failure in cats (less common than dogs but still toxic).</p>
                <p className="text-xs text-pink-700"><strong>Signs:</strong> Drooling, vomiting, weakness, seizures within 30 minutes</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#8 Rodenticides (Rat/Mouse Poison)</h3>
                <p className="text-sm text-gray-700 mb-1">Anticoagulant poisons cause internal bleeding. Bromethalin causes neurological damage.</p>
                <p className="text-xs text-gray-700"><strong>Signs:</strong> Drooling, difficulty breathing, pale gums (bleeding), tremors (bromethalin)</p>
              </div>

              <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50">
                <h3 className="font-bold text-gray-900">#9 Plants (Pothos, Philodendron, Dieffenbachia)</h3>
                <p className="text-sm text-gray-700 mb-1">Calcium oxalate crystals cause immediate mouth pain and swelling.</p>
                <p className="text-xs text-indigo-700"><strong>Signs:</strong> IMMEDIATE profuse drooling, pawing at mouth, oral swelling, difficulty swallowing</p>
              </div>

              <div className="p-3 border-l-4 border-teal-500 bg-teal-50">
                <h3 className="font-bold text-gray-900">#10 Topical Medications (Creams, Ointments)</h3>
                <p className="text-sm text-gray-700 mb-1">Grooming after owner applies cream. Bitter taste causes drooling. Some are toxic (muscle rubs, psoriasis creams).</p>
                <p className="text-xs text-teal-700"><strong>Prevention:</strong> Keep cat away 2-4 hours after applying, wash hands, cover application site</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Causes */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7 Non-Toxin Medical Causes of Drooling + Weird Behavior
            </h2>

            <div className="space-y-4">
              <div className="p-4 border border-purple-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">#1 Dental Disease/Tooth Root Abscess</h3>
                <p className="text-sm text-gray-700 mb-2">Severe mouth pain causes drooling. Cat may paw at face, refuse food, hide.</p>
                <p className="text-sm font-medium text-purple-700">Look for: Foul breath, red/swollen gums, crying when eating, one-sided drool</p>
              </div>

              <div className="p-4 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">#2 Nausea (Kidney Disease, Pancreatitis, Liver Disease)</h3>
                <p className="text-sm text-gray-700 mb-2">Severe nausea triggers hypersalivation. Cat may hide, vomit, refuse food.</p>
                <p className="text-sm font-medium text-blue-700">Context: Senior cats (kidney disease), recent diet change, vomiting/diarrhea</p>
              </div>

              <div className="p-4 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">#3 Foreign Body in Mouth/Throat</h3>
                <p className="text-sm text-gray-700 mb-2">String around tongue base, fish hook, bone fragment. Cat frantically pawing at mouth.</p>
                <p className="text-sm font-medium text-green-700">Emergency: Never pull string - can slice through tongue/intestines. See vet immediately</p>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">#4 Oral Ulcers (Calicivirus, Stomatitis)</h3>
                <p className="text-sm text-gray-700 mb-2">Painful mouth sores cause drooling. Often in immunocompromised cats or viral infections.</p>
                <p className="text-sm font-medium text-yellow-700">Signs: Blood-tinged drool, crying when eating, visible red ulcers on gums/tongue</p>
              </div>

              <div className="p-4 border border-orange-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">#5 Upper Respiratory Infection Severe</h3>
                <p className="text-sm text-gray-700 mb-2">Nasal congestion causes mouth breathing. Post-nasal drip triggers drooling.</p>
                <p className="text-sm font-medium text-orange-700">Look for: Sneezing, nasal discharge, eye discharge, fever, not eating due to can't smell</p>
              </div>

              <div className="p-4 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">#6 Seizures/Neurological Issues</h3>
                <p className="text-sm text-gray-700 mb-2">Focal seizures or brain lesions cause drooling with altered behavior (staring, circling, aggression).</p>
                <p className="text-sm font-medium text-red-700">Emergency: Head trauma, suspected seizure, sudden personality change - see vet NOW</p>
              </div>

              <div className="p-4 border border-pink-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">#7 Heatstroke</h3>
                <p className="text-sm text-gray-700 mb-2">Overheating in hot car, direct sun. Cats drool when panting fails to cool them down.</p>
                <p className="text-sm font-medium text-pink-700">Emergency signs: Drooling, panting, vomiting, collapse, temp &gt;104°F. Cool gradually, emergency vet</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Do */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-purple-600" />
              What to Do if Your Cat is Drooling
            </h2>

            <div className="space-y-6">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-2">🚨 FIRST: Rule Out Toxin Exposure</h3>
                <ul className="space-y-1 text-sm text-red-800">
                  <li>• Check for open medications, spilled cleaners, chewed plants</li>
                  <li>• Ask family if cat got into anything</li>
                  <li>• If ANY possibility of toxin - CALL VET/POISON CONTROL IMMEDIATELY</li>
                  <li>• Bring packaging/plant sample to vet</li>
                  <li>• DO NOT induce vomiting unless told by vet (some toxins burn coming back up)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Safe Home Examination:</h3>
                <ol className="space-y-2 text-gray-700 list-decimal ml-4">
                  <li><strong>Check mouth (CAREFULLY - cat may bite if in pain):</strong> Look for string under tongue, foreign objects, red/swollen gums, broken teeth</li>
                  <li><strong>Check drool appearance:</strong> Clear (normal saliva), foamy (nausea), blood-tinged (trauma/ulcers), thick/ropy (dehydration)</li>
                  <li><strong>Assess behavior:</strong> Hiding, vocalizing, pawing at mouth, head shaking, refusing food/water</li>
                  <li><strong>Check for other symptoms:</strong> Vomiting, diarrhea, difficulty walking, breathing changes</li>
                </ol>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-2">📅 See Vet Within 24 Hours If:</h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Drooling continues &gt;2 hours with no toxin exposure</li>
                  <li>• Cat refusing food, hiding, lethargic</li>
                  <li>• Visible mouth pain or dental disease</li>
                  <li>• Blood in drool or foul mouth odor</li>
                </ul>
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
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Vomiting Undigested Food</h3>
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

              <Link href="/cat-not-eating-drinking-3-days">
                <Card className="border-2 border-red-200 hover:border-red-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Not Eating for 3 Days</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Emergency anorexia and hepatic lipidosis risk
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-third-eyelid-showing-suddenly">
                <Card className="border-2 border-pink-200 hover:border-pink-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Third Eyelid Showing</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Haw syndrome and causes of visible third eyelid
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
                <h2 className="text-3xl font-bold mb-4">Cat Drooling and Acting Strange? Get Help Now</h2>
                <p className="text-xl mb-6 text-purple-100">
                  Tell our free AI veterinary assistant about the drooling pattern, behavioral changes, and possible toxin exposure. 
                  Get instant emergency guidance and poison control recommendations.
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
                  ✓ Available 24/7 ✓ Instant Toxin Analysis ✓ All Cat Breeds ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
