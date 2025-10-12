import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Eye, Clock, Activity, ArrowRight, CheckCircle, XCircle, Search } from "lucide-react";
import { Link } from "wouter";

export default function CatThirdEyelidShowingSuddenly() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <SEOHead 
        title="Cat Third Eyelid Showing Suddenly - Haw Syndrome & Medical Causes | PetWellBot"
        description="Cat's third eyelid visible across eye? Learn causes of nictitating membrane protrusion, Haw syndrome, Horner's syndrome, and when to see a vet."
        keywords="cat third eyelid showing, cat nictitating membrane, cat haw syndrome, cat third eyelid both eyes, cat horner syndrome"
        canonicalUrl="https://petwellbot.com/cat-third-eyelid-showing-suddenly"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Cat Symptoms", href: "/symptoms" },
              { label: "Cat Third Eyelid Showing Suddenly" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                👁️ MONITOR - Health Check Needed
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cat Third Eyelid Showing Suddenly: Causes & Solutions
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              The nictitating membrane (third eyelid) protruding across the eye signals GI upset, dehydration, eye injury, or neurological issues. 
              Learn when visible third eyelids are benign vs concerning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Eye Assessment
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('haw-syndrome')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-purple-600"
              >
                <Eye className="w-5 h-5 mr-2" />
                One Eye vs Both Eyes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="py-6 bg-orange-50 border-y-2 border-orange-300" id="haw-syndrome">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">⚠️ See Vet Soon If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Only ONE eye affected (could be injury/infection)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Eye discharge, redness, or squinting with third eyelid</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Third eyelid + other symptoms (vomiting, lethargy, not eating)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Pupil size difference between eyes (Horner's syndrome)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Doesn't resolve within 7-10 days</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Recent head/neck trauma or bite wound</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* One vs Both Eyes */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Search className="h-6 w-6 text-purple-600" />
              Diagnosis Clue: One Eye vs Both Eyes Affected
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  BOTH EYES Affected (Usually Benign)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Haw's Syndrome:</strong> GI upset (diarrhea, parasites, diet change) causes bilateral third eyelid elevation. Self-resolves in 3-8 weeks.</li>
                  <li><strong>Dehydration:</strong> Fat pad behind eyes shrinks, eyes sink back, third eyelid visible. Pinch skin - stays tented if dehydrated.</li>
                  <li><strong>Weight Loss:</strong> Rapid weight loss reduces orbital fat, eyes recede. Senior cats, hyperthyroidism, cancer.</li>
                  <li><strong>Tetanus (Rare):</strong> Lockjaw, stiff limbs, third eyelids prolapsed. VERY rare in cats.</li>
                </ul>
                <div className="mt-3 p-2 bg-white border border-blue-200 rounded">
                  <p className="text-xs text-blue-900 font-medium">💡 If both eyes + no other symptoms = usually Haw's syndrome (monitor at home)</p>
                </div>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  ONE EYE Affected (More Concerning)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Horner's Syndrome:</strong> Nerve damage causes droopy eyelid, small pupil, third eyelid elevation ON ONE SIDE. Can be inner ear infection, tumor, trauma.</li>
                  <li><strong>Eye Injury:</strong> Scratch, foreign body, ulcer causes painful eye to retract + third eyelid covers. Squinting, discharge.</li>
                  <li><strong>Cherry Eye:</strong> Third eyelid gland prolapses - looks like red mass in corner. Needs surgery.</li>
                  <li><strong>Tumor Behind Eye:</strong> Mass pushes eye forward, third eyelid visible. Progressive, one-sided.</li>
                </ul>
                <div className="mt-3 p-2 bg-white border border-red-200 rounded">
                  <p className="text-xs text-red-900 font-medium">⚠️ One eye = SEE VET within 48 hours to rule out injury/infection</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Haw's Syndrome Detail */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Haw's Syndrome: Most Common Cause (BOTH Eyes)
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">What is Haw's Syndrome?</h3>
                <p className="text-sm text-gray-700">
                  Benign condition where BOTH third eyelids suddenly protrude partially across the eyes. Cat can still see and is otherwise healthy. 
                  Linked to GI disturbances (diarrhea, intestinal parasites, diet change) but exact mechanism unknown.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">✓ Classic Signs:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• BOTH eyes equally affected</li>
                    <li>• Third eyelid covers 1/4 to 1/2 of eye</li>
                    <li>• No eye discharge, redness, or squinting</li>
                    <li>• Cat otherwise healthy (eating, playing, normal energy)</li>
                    <li>• Often recent diarrhea or diet change</li>
                    <li>• Self-resolves in 3-8 weeks (no treatment needed)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">🔍 GI Connection:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 70% of cases follow GI upset</li>
                    <li>• Intestinal parasites (roundworms, tapeworms)</li>
                    <li>• Diet change or food intolerance</li>
                    <li>• Mild enteritis (inflammation)</li>
                    <li>• Theory: Inflammation affects nerve controlling third eyelid</li>
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <h3 className="font-medium text-green-900 mb-1">Treatment for Haw's Syndrome:</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Deworm cat with broad-spectrum dewormer (Drontal, Profender)</li>
                  <li>• Treat any diarrhea (bland diet, probiotics)</li>
                  <li>• NO eye drops needed (not an eye problem)</li>
                  <li>• Monitor - should improve over 3-8 weeks</li>
                  <li>• If no improvement after 8 weeks, recheck with vet</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Horner's Syndrome */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Horner's Syndrome: ONE Eye + Small Pupil
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-2">🚨 Classic Triad (ONE SIDE ONLY):</h3>
                <ol className="space-y-1 text-sm text-red-800 list-decimal ml-4">
                  <li><strong>Third eyelid elevated</strong> (visible pink/white membrane in inner corner)</li>
                  <li><strong>Pupil constricted</strong> (small pupil on affected side, normal on other side)</li>
                  <li><strong>Droopy upper eyelid</strong> (ptosis - eye looks sunken)</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Causes of Horner's Syndrome:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="p-2 bg-gray-50 border-l-4 border-orange-500">
                    <strong>Inner/Middle Ear Infection (Most Common):</strong> Infection damages sympathetic nerve. May see head tilt, circling, ear discharge.
                  </li>
                  <li className="p-2 bg-gray-50 border-l-4 border-red-500">
                    <strong>Bite Wound/Trauma:</strong> Neck or head injury damages nerve pathway. Recent fight or car accident.
                  </li>
                  <li className="p-2 bg-gray-50 border-l-4 border-purple-500">
                    <strong>Tumor:</strong> Mass in chest, neck, or brain pressing on nerve. Progressive, may have other symptoms.
                  </li>
                  <li className="p-2 bg-gray-50 border-l-4 border-blue-500">
                    <strong>Idiopathic (40-50%):</strong> No cause found. Often self-resolves in 6-8 weeks.
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="font-medium text-yellow-900 mb-1">📅 Vet Visit Required:</p>
                <p className="text-sm text-yellow-800">
                  Horner's syndrome needs vet exam to rule out ear infection (treatable) or tumor (serious). Vet will examine ears, check for pain, may recommend imaging.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Other Causes */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Other Causes of Visible Third Eyelid
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">Eye Injury/Ulcer</h3>
                <p className="text-sm text-gray-700 mb-1">Painful eye retracts into socket, third eyelid slides across for protection.</p>
                <p className="text-xs text-yellow-700"><strong>Signs:</strong> ONE eye, squinting, tearing, discharge, redness. Fluorescein dye test at vet reveals ulcer.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">Dehydration</h3>
                <p className="text-sm text-gray-700 mb-1">Fat pad behind eyes shrinks when dehydrated, eyes sink back, third eyelid visible BOTH EYES.</p>
                <p className="text-xs text-green-700"><strong>Test:</strong> Pinch skin on back of neck - should snap back instantly. If stays tented 2+ seconds = dehydrated.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">Weight Loss/Muscle Wasting</h3>
                <p className="text-sm text-gray-700 mb-1">Senior cats, hyperthyroidism, cancer - rapid weight loss reduces orbital fat.</p>
                <p className="text-xs text-blue-700"><strong>Context:</strong> Both eyes sunken, bony skull visible, weight loss &gt;10% body weight, lethargy</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">Sedation/Anesthesia</h3>
                <p className="text-sm text-gray-700 mb-1">Normal for third eyelids to show during anesthesia or deep sleep. Temporary.</p>
                <p className="text-xs text-purple-700"><strong>Timeline:</strong> Resolves within 12-24 hours of waking up</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">Cherry Eye (Prolapsed Gland)</h3>
                <p className="text-sm text-gray-700 mb-1">Third eyelid gland pops out - looks like red/pink fleshy mass in inner corner. Usually ONE eye.</p>
                <p className="text-xs text-pink-700"><strong>Treatment:</strong> Surgical repositioning (don't remove - causes dry eye). $300-$800</p>
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

              <Link href="/cat-vomiting-undigested-food-hours-after-eating">
                <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Vomiting Undigested Food</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Regurgitation vs vomiting and megaesophagus causes
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
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

              <Link href="/cat-drooling-acting-weird">
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Drooling and Acting Weird</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Toxin exposure and causes of excessive drooling
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold text-sm">
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
                <h2 className="text-3xl font-bold mb-4">Worried About Your Cat's Third Eyelid?</h2>
                <p className="text-xl mb-6 text-purple-100">
                  Tell our free AI veterinary assistant about the third eyelid appearance (one or both eyes), duration, and other symptoms. 
                  Get instant guidance on Haw's syndrome, dehydration, or when vet care is needed.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Third Eyelid Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-purple-100">
                  ✓ Available 24/7 ✓ Instant Diagnosis Help ✓ All Cat Breeds ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
