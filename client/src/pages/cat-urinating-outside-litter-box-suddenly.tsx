import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Droplet, Clock, Activity, ArrowRight, CheckCircle, XCircle, Home } from "lucide-react";
import { Link } from "wouter";

export default function CatUrinatingOutsideLitterBoxSuddenly() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <SEOHead 
        title="Cat Urinating Outside Litter Box Suddenly - UTI vs Behavioral Marking | PetWellBot"
        description="Cat suddenly peeing outside litter box? Learn to distinguish UTI/FLUTD medical issues from stress marking, litter aversion, and get proven solutions."
        keywords="cat peeing outside litter box, cat urinating on bed, cat inappropriate elimination, cat stress marking, cat UTI symptoms, cat FLUTD"
        canonicalUrl="https://petwellbot.com/cat-urinating-outside-litter-box-suddenly"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Cat Symptoms", href: "/symptoms" },
              { label: "Cat Urinating Outside Litter Box Suddenly" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                👁️ MONITOR - Medical Check Needed
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cat Urinating Outside Litter Box Suddenly: UTI vs Behavioral
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Sudden inappropriate urination signals UTI, FLUTD, kidney disease, or stress marking. Male cats straining = LIFE-THREATENING blockage. 
              Learn to distinguish medical from behavioral issues and proven solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Symptom Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('medical-vs-behavioral')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-purple-600"
              >
                <Droplet className="w-5 h-5 mr-2" />
                Medical vs Behavioral Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="py-6 bg-red-50 border-y-2 border-red-300" id="medical-vs-behavioral">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">🚨 EMERGENCY VET NOW If (MALE CATS):</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800 mb-4">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>STRAINING</strong> in litter box with NO urine or only drops</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Crying/vocalizing in litter box or when trying to urinate</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Blood in urine (pink/red tinged)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Licking genitals excessively + can't urinate</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Vomiting, lethargy, hiding (toxin buildup from blockage)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Hasn't urinated in 12+ hours (bladder rupture risk)</span>
                  </li>
                </ul>
                <div className="p-3 bg-white rounded border-2 border-red-400">
                  <p className="font-bold text-red-900 text-sm">
                    ⚠️ URINARY BLOCKAGE: Male cats can die within 24-48 hours. Bladder ruptures, kidneys fail, toxins build up. 
                    Straining + no urine = EMERGENCY not constipation. Do NOT wait for morning vet - go to emergency NOW.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Medical vs Behavioral */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-purple-600" />
              Medical Issue vs Behavioral Problem: How to Tell
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  MEDICAL (See Vet ASAP)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✗ <strong>Straining/crying:</strong> In box or outside, vocalization of pain</li>
                  <li>✗ <strong>Frequent attempts:</strong> Going to box every 10-30 minutes, producing little/no urine</li>
                  <li>✗ <strong>Blood in urine:</strong> Pink, red, or brown-tinged urine</li>
                  <li>✗ <strong>Accidents + using box:</strong> Cat uses box sometimes, pees elsewhere other times (can't hold it)</li>
                  <li>✗ <strong>Small puddles:</strong> Dime to quarter-sized spots (loss of control, not full bladder emptying)</li>
                  <li>✗ <strong>Random locations:</strong> Where cat was standing/sitting when urge hit (not targeted)</li>
                  <li>✗ <strong>Licking genitals:</strong> Constant grooming of urinary area</li>
                  <li>✗ <strong>Senior cat (7+ years):</strong> More likely kidney disease, diabetes</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  BEHAVIORAL (Home Solutions)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ <strong>Normal posture:</strong> Squatting normally, no straining, large volume</li>
                  <li>✓ <strong>Targeted locations:</strong> Specific spots (bed, couch, owner's belongings, doorways)</li>
                  <li>✓ <strong>Vertical surfaces:</strong> Spraying on walls, furniture = marking not medical</li>
                  <li>✓ <strong>Context-triggered:</strong> Started after new pet, move, schedule change, litter change</li>
                  <li>✓ <strong>Intact cat:</strong> Not spayed/neutered = hormonal marking</li>
                  <li>✓ <strong>Normal urine color:</strong> Clear yellow, no blood, no cloudiness</li>
                  <li>✓ <strong>Avoidance behavior:</strong> Sniffing box, pawing, leaving without using (litter aversion)</li>
                  <li>✓ <strong>Multi-cat home:</strong> Territorial competition, bully cat blocking access</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
              <p className="text-yellow-900 font-medium">
                🩺 <strong>RULE OUT MEDICAL FIRST:</strong> Even if behavior seems stress-related, vet exam required to rule out UTI/FLUTD. 
                50% of "behavioral" cases have underlying medical component. Urinalysis cost: $50-$100.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Medical Causes */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7 Medical Causes of Inappropriate Urination
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 FLUTD (Feline Lower Urinary Tract Disease)</h3>
                <p className="text-sm text-gray-700 mb-1">Umbrella term: crystals (struvite/calcium oxalate), cystitis (bladder inflammation), urethral plugs. Causes painful, frequent urination.</p>
                <p className="text-xs text-red-700"><strong>Signs:</strong> Straining, blood in urine, licking genitals, crying in box, accidents outside box</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Urinary Blockage (MALE CATS - EMERGENCY)</h3>
                <p className="text-sm text-gray-700 mb-1">Crystals/mucus plug narrows urethra (males have narrower urethra). Cat strains but NO urine comes out. FATAL if untreated.</p>
                <p className="text-xs text-orange-700"><strong>Timeline:</strong> 24-48 hours without urinating = kidney failure, bladder rupture, death. Unblocking catheter $800-$2,500.</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Bacterial UTI (Urinary Tract Infection)</h3>
                <p className="text-sm text-gray-700 mb-1">More common in senior cats (7+ years), diabetic cats, cats with kidney disease. Bacteria in bladder causes painful urination.</p>
                <p className="text-xs text-yellow-700"><strong>Diagnosis:</strong> Urinalysis + urine culture $100-$200. Treatment: 2-4 weeks antibiotics (Clavamox) $30-$80.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Kidney Disease (Senior Cats)</h3>
                <p className="text-sm text-gray-700 mb-1">Failing kidneys can't concentrate urine. Cat produces excessive dilute urine, can't hold it, accidents outside box.</p>
                <p className="text-xs text-green-700"><strong>Signs:</strong> Increased drinking/urinating, weight loss, vomiting, large puddles of clear urine, senior cat 7+ years</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Diabetes</h3>
                <p className="text-sm text-gray-700 mb-1">High blood sugar = excessive urination. Cat drinks excessively, urine volume overwhelming, can't make it to box in time.</p>
                <p className="text-xs text-blue-700"><strong>Signs:</strong> Weight loss DESPITE increased appetite, drinking 2-3x normal, sticky urine (glucose), older/overweight cats</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Arthritis/Mobility Issues</h3>
                <p className="text-sm text-gray-700 mb-1">Senior cats with joint pain can't climb into high-sided litter box or reach distant box. Pees where standing.</p>
                <p className="text-xs text-purple-700"><strong>Solution:</strong> Low-entry litter box (senior box $15-$30), place boxes on each floor, glucosamine supplements $20-$40/month</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Cognitive Dysfunction (Cat Dementia)</h3>
                <p className="text-sm text-gray-700 mb-1">Senior cats 10+ years forget litter box location, lose house-training. Urinate wherever they are when urge hits.</p>
                <p className="text-xs text-pink-700"><strong>Other signs:</strong> Wandering, staring at walls, nighttime yowling, confusion. Selegiline medication $50-$100/month helps 70%.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Behavioral Causes */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8 Behavioral Causes & Solutions
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Dirty Litter Box</h3>
                <p className="text-sm text-gray-700 mb-1">Cats refuse soiled boxes. Most common behavioral cause.</p>
                <p className="text-xs text-red-700"><strong>FIX:</strong> Scoop 2x daily minimum, full dump/wash weekly, unscented litter, 1 box per cat + 1 extra</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Wrong Litter Type</h3>
                <p className="text-sm text-gray-700 mb-1">Changed litter brand/type recently? Cats prefer fine, unscented, clumping clay. Dislike crystals, pellets, scented.</p>
                <p className="text-xs text-orange-700"><strong>TEST:</strong> Set out 2-3 boxes with different litter types, see which cat prefers. Most choose Dr. Elsey's Ultra.</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Covered Box/Liner Aversion</h3>
                <p className="text-sm text-gray-700 mb-1">Covered boxes trap smell, some cats feel trapped. Liners catch claws (uncomfortable).</p>
                <p className="text-xs text-yellow-700"><strong>FIX:</strong> Remove lid/liner. Try large uncovered box (storage tote 30+ inches). 85% of cats prefer open boxes.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Territorial Marking (Intact Cats)</h3>
                <p className="text-sm text-gray-700 mb-1">Unneutered males spray vertical surfaces. Unspayed females mark when in heat.</p>
                <p className="text-xs text-green-700"><strong>CURE:</strong> Spay/neuter stops 90% of marking. Female spay $200-$500. Male neuter $100-$300.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Stress Marking (New Pet, Move, Baby)</h3>
                <p className="text-sm text-gray-700 mb-1">Environmental changes trigger territorial anxiety. Cat marks to reassert ownership.</p>
                <p className="text-xs text-blue-700"><strong>FIX:</strong> Feliway diffuser $30-$40/month, slow introductions, give cat safe space, clean accidents with enzyme cleaner (NOT ammonia)</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Multi-Cat Competition</h3>
                <p className="text-sm text-gray-700 mb-1">Bully cat guards litter boxes, victim cat too scared to use them.</p>
                <p className="text-xs text-purple-700"><strong>FIX:</strong> Multiple boxes in different locations (not all same room), 1 per cat + 1 extra, separate resources</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Location Issues</h3>
                <p className="text-sm text-gray-700 mb-1">Box in loud/high-traffic area (near washer/dryer, dogs, toddlers). Cat feels unsafe.</p>
                <p className="text-xs text-pink-700"><strong>FIX:</strong> Quiet, low-traffic location, easy escape routes, NOT near food/water bowls</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#8 Negative Association</h3>
                <p className="text-sm text-gray-700 mb-1">Cat startled in box (loud noise, ambushed by other cat, painful UTI episode). Now avoids box.</p>
                <p className="text-xs text-gray-700"><strong>FIX:</strong> Move box to new location, new box (different style/color), positive reinforcement (treats near box)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Solutions */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-purple-600" />
              Complete Solution Protocol
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
                <h3 className="font-bold text-purple-900 mb-2">Step 1: Vet Exam (ALWAYS FIRST)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Urinalysis: $50-$100 (checks for infection, crystals, blood, glucose)</li>
                  <li>• Blood work (if senior): $150-$300 (kidney function, diabetes, thyroid)</li>
                  <li>• X-rays/ultrasound (if blockage suspected): $200-$400</li>
                  <li>• <strong>DO NOT skip vet:</strong> 50% of behavioral cases have medical component</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Step 2: Litter Box Optimization</h3>
                
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="p-3 bg-gray-50 border-l-4 border-green-500">
                    <h4 className="font-medium text-gray-900 mb-1">✓ Number: 1 per cat + 1 extra (3 cats = 4 boxes)</h4>
                    <p className="text-xs">Prevents competition, always clean box available</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-blue-500">
                    <h4 className="font-medium text-gray-900 mb-1">✓ Size: LARGE (24+ inches long, bigger is better)</h4>
                    <p className="text-xs">Cats need room to turn around. Storage totes ($10-$15) work great.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-yellow-500">
                    <h4 className="font-medium text-gray-900 mb-1">✓ Type: Uncovered, no liner</h4>
                    <p className="text-xs">85% of cats prefer open boxes. Remove lids.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-purple-500">
                    <h4 className="font-medium text-gray-900 mb-1">✓ Litter: Unscented clumping clay, 2-3 inches deep</h4>
                    <p className="text-xs">Dr. Elsey's Cat Attract ($15-$20) has pheromones to encourage use</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-pink-500">
                    <h4 className="font-medium text-gray-900 mb-1">✓ Cleaning: Scoop 2x daily, full dump weekly</h4>
                    <p className="text-xs">Wash box with dish soap + water (NO bleach/ammonia). Baking soda absorbs odor.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-orange-500">
                    <h4 className="font-medium text-gray-900 mb-1">✓ Location: Quiet, private, multiple floors</h4>
                    <p className="text-xs">NOT near food, washer/dryer, high traffic. Easy escape routes.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Step 3: Clean Accidents Properly</h3>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Enzyme cleaner ONLY:</strong> Nature's Miracle, Rocco &amp; Roxie ($15-$25). Breaks down urine proteins.</li>
                  <li>• <strong>NEVER use ammonia/bleach:</strong> Smells like urine to cats, encourages re-marking</li>
                  <li>• <strong>Soak thoroughly:</strong> Must reach carpet padding, let sit 10-15 minutes</li>
                  <li>• <strong>Blacklight detection:</strong> UV flashlight ($10-$15) shows all urine spots (glows yellow-green)</li>
                  <li>• <strong>Block access:</strong> Cover cleaned spots with aluminum foil (cats dislike texture) until behavior resolves</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Step 4: Reduce Stress</h3>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Feliway Classic diffuser:</strong> $30-$40/month, plug in room where accidents happen. 7-14 days to work.</li>
                  <li>• <strong>Separate resources:</strong> Multi-cat homes need food/water/boxes in different locations</li>
                  <li>• <strong>Vertical territory:</strong> Cat trees give escape routes, reduce conflict</li>
                  <li>• <strong>Play therapy:</strong> 15 minutes 2x daily reduces anxiety, burns energy</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                <h3 className="font-medium text-yellow-900 mb-2">💊 Last Resort Medications (Vet Prescribed):</h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• <strong>Fluoxetine (Prozac):</strong> $30-$60/month. For severe anxiety/marking. Takes 4-6 weeks to work.</li>
                  <li>• <strong>Amitriptyline:</strong> $20-$40/month. Anti-anxiety, also treats FLUTD-related inflammation.</li>
                  <li>• <strong>Gabapentin:</strong> $15-$30/month. Helps pain-related litter aversion (arthritis).</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Timeline */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-purple-600" />
              Expected Success Timeline
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900">Week 1: Medical + Setup</h3>
                <p className="text-sm text-gray-700">Vet exam, optimize litter boxes, clean all accidents with enzyme cleaner, start Feliway</p>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900">Week 2-3: Improvement Begins</h3>
                <p className="text-sm text-gray-700">70% of medical cases resolve with treatment. Behavioral cases show 30-50% reduction in accidents.</p>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">Week 4-6: Significant Progress</h3>
                <p className="text-sm text-gray-700">80-90% reduction in accidents. May have occasional relapse during stress (loud noises, schedule changes).</p>
              </div>

              <div className="p-4 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900">Week 8+: Full Resolution</h3>
                <p className="text-sm text-gray-700">Most cats using box 100% reliably. Maintain litter hygiene, stress reduction to prevent recurrence.</p>
              </div>

              <div className="p-3 bg-red-50 border border-red-200 rounded mt-4">
                <p className="text-sm text-red-800">
                  <strong>If no improvement after 4-6 weeks:</strong> Return to vet. May need X-rays, ultrasound, urine culture, behavior specialist referral.
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
              <Link href="/cat-hiding-wont-come-out">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Hiding and Won't Come Out</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Stress and hiding behavior linked to litter issues
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-meowing-night-after-moving">
                <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Meowing at Night After Moving</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Environmental stress affecting behavior patterns
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/indoor-cat-trying-escape-suddenly">
                <Card className="border-2 border-green-200 hover:border-green-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Indoor Cat Trying to Escape</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Territorial stress and intact cat behavioral issues
                    </p>
                    <div className="flex items-center text-green-600 font-semibold text-sm">
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
                      Kidney disease and diabetes causing health issues
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
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
                <h2 className="text-3xl font-bold mb-4">Cat Peeing Outside Litter Box? Get Expert Help</h2>
                <p className="text-xl mb-6 text-purple-100">
                  Tell our free AI veterinary assistant about the urination pattern, your cat's age, recent changes, and other symptoms. 
                  Get instant guidance on medical vs behavioral causes and proven solutions.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Litter Box Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-purple-100">
                  ✓ Available 24/7 ✓ UTI vs Behavioral Analysis ✓ All Cat Breeds ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
