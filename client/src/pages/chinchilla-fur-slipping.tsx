import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Clock, Activity, ArrowRight, CheckCircle, XCircle, Wind } from "lucide-react";
import { Link } from "wouter";

export default function ChinchillaFurSlipping() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      <SEOHead 
        title="Chinchilla Fur Slipping Off - Normal Defense vs Stress/Health Issues | PetWellBot"
        description="Chinchilla fur slipping? Learn normal fur slip (defense mechanism) vs excessive shedding from stress, rough handling, illness, or poor diet. When to worry and solutions."
        keywords="chinchilla fur slipping, chinchilla losing fur, chinchilla fur slip, chinchilla bald patches, chinchilla stress shedding"
        canonicalUrl="https://petwellbot.com/chinchilla-fur-slipping"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-600 to-slate-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Small Pet Symptoms", href: "/symptoms" },
              { label: "Chinchilla Fur Slipping Off" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                👁️ MONITOR - Normal Defense vs Stress/Illness
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Chinchilla Fur Slipping Off: Normal Defense Mechanism vs Health Problem
            </h1>
            <p className="text-xl text-gray-100 mb-6">
              Fur slip is a natural defense where chinchillas release patches of fur when frightened or roughly handled. But EXCESSIVE fur loss signals chronic stress, 
              nutritional deficiency, fungal infection, or illness requiring veterinary care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Assessment
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('normal-vs-problem')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-600"
              >
                <Wind className="w-5 h-5 mr-2" />
                Normal vs Problem Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-6 bg-orange-50 border-y-2 border-orange-300" id="normal-vs-problem">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">⚠️ See Vet If Fur Slipping Accompanied By:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Red, inflamed, scaly skin</strong> underneath bald patches (ringworm)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Constant scratching, biting at fur</strong> (parasites, allergies)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Fur loss spreading/worsening over weeks</strong></span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Lethargy, weight loss, not eating well</strong></span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Dull, greasy, matted coat</strong> (nutritional deficiency)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Symmetrical fur loss</strong> (hormonal/metabolic disease)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* What is Fur Slip */}
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-gray-600" />
              What is Fur Slip? Understanding the Defense Mechanism
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">🦎 Natural Survival Adaptation (Like Lizard Tail Drop)</h3>
                <p className="text-sm text-gray-700">
                  Chinchillas evolved fur slip as an escape mechanism from predators. When grabbed or frightened, they can release a large patch of fur, 
                  leaving the predator with a mouthful of fluff while chinchilla escapes. Fur releases cleanly at the follicle - no pain or bleeding.
                </p>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">🧬 How It Works: Arrector Pili Muscle</h3>
                <p className="text-sm text-gray-700">
                  Each hair follicle has an arrector pili muscle. When chinchilla is startled/grabbed, these muscles contract HARD, ejecting entire clumps of fur. 
                  This is INVOLUNTARY - chinchilla can't control it. It's a panic response, not a choice.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">⏱️ Regrowth Timeline</h3>
                <p className="text-sm text-gray-700">
                  Fur slip areas regrow completely in 6-12 weeks. New fur may appear slightly different color initially (darker) but matches eventually. 
                  Frequent fur slip in same area can damage follicles = permanent bald spots (why prevention important).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Normal vs Abnormal */}
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Normal Fur Slip vs Abnormal Excessive Shedding
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  NORMAL Fur Slip
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ <strong>Trigger:</strong> Clear event (grabbed roughly, startled by loud noise, cat pounced on cage)</li>
                  <li>✓ <strong>Pattern:</strong> Single incident, one or two patches where grabbed/touched</li>
                  <li>✓ <strong>Appearance:</strong> Clean bald patch, normal healthy skin underneath (not red/inflamed)</li>
                  <li>✓ <strong>Size:</strong> Dime to quarter-sized patch, matches where hand/paw grabbed</li>
                  <li>✓ <strong>Frequency:</strong> Rare - maybe once every few months (IF properly handled)</li>
                  <li>✓ <strong>Chinchilla behavior:</strong> Otherwise normal - eating, active, playful, healthy coat elsewhere</li>
                  <li>✓ <strong>Regrowth:</strong> Fur grows back completely in 6-12 weeks</li>
                  <li>✓ <strong>Prevention:</strong> Improves with gentler handling, reduced stress</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  ABNORMAL (Health Problem)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✗ <strong>Trigger:</strong> No clear event, spontaneous fur loss, or CONSTANT slipping with any touch</li>
                  <li>✗ <strong>Pattern:</strong> Multiple patches, spreading, symmetrical loss (both sides of body)</li>
                  <li>✗ <strong>Appearance:</strong> Red, scaly, crusty, or greasy skin. Broken hairs (not clean release)</li>
                  <li>✗ <strong>Size:</strong> Large areas (palm-sized or bigger), or many small patches</li>
                  <li>✗ <strong>Frequency:</strong> Weekly or daily fur loss, progressively worsening</li>
                  <li>✗ <strong>Chinchilla behavior:</strong> Scratching constantly, biting fur, lethargic, poor appetite, dull coat</li>
                  <li>✗ <strong>Regrowth:</strong> Fur doesn't grow back, or grows back thin/patchy</li>
                  <li>✗ <strong>Underlying issue:</strong> Stress, malnutrition, fungal infection, hormonal disease, parasites</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Causes */}
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10 Causes of Excessive Fur Slipping/Loss in Chinchillas
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Chronic Stress (MOST COMMON)</h3>
                <p className="text-sm text-gray-700 mb-1">Constant fear = constant fur slip. Causes: predator pets with access to cage (cat sitting on top of cage, dog barking at chinchilla), overcrowding (cage too small, too many chinchillas), loud environment (TV blasting, kids screaming), frequent rough handling.</p>
                <p className="text-xs text-red-700"><strong>Fix:</strong> Move cage to quiet room, block predator access, larger cage (minimum 3x2x2 feet), gentle handling only, hideouts for security. Improvement in 2-4 weeks as stress reduces.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Improper Handling Technique</h3>
                <p className="text-sm text-gray-700 mb-1">Grabbing chinchilla by scruff, chasing around cage, grabbing from above (predator approach), squeezing too tight. Triggers panic response = fur slip EVERY time handled.</p>
                <p className="text-xs text-orange-700"><strong>Correct handling:</strong> Scoop from below with both hands supporting body, approach from side (not above), gentle but secure grip, let chinchilla come to you (don't chase). Never grab by tail (can "slip" tail skin too - serious injury).</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Ringworm (Fungal Infection)</h3>
                <p className="text-sm text-gray-700 mb-1">Dermatophytosis - most common in chinchillas due to dense fur (holds moisture). Circular bald patches with red, scaly, crusty edges. Spreads to other chinchillas and HUMANS (zoonotic). Often starts on nose/ears.</p>
                <p className="text-xs text-yellow-700"><strong>Diagnosis:</strong> Wood's lamp (50% of ringworm glows), fungal culture $50-$100. <strong>Treatment:</strong> Antifungal (itraconazole, griseofulvin) 6-12 weeks $100-$300, topical creams, disinfect cage/environment. Quarantine from other pets. Resolution in 8-12 weeks.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Poor Nutrition (Protein/Vitamin Deficiency)</h3>
                <p className="text-sm text-gray-700 mb-1">Low-quality pellets, treats as main diet, lack of hay. Fur becomes brittle, breaks easily, slips with minimal handling. Dull, greasy coat, slow regrowth, poor overall health.</p>
                <p className="text-xs text-green-700"><strong>Proper diet:</strong> High-quality chinchilla pellets (Oxbow Chinchilla, Mazuri) UNLIMITED - they're designed for constant grazing, timothy hay unlimited, NO alfalfa after 6 months (too rich), limited treats (1-2 raisins per week MAX). Vitamin supplements if deficient. Coat improves in 4-8 weeks with proper diet.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Fur Chewing (Behavioral)</h3>
                <p className="text-sm text-gray-700 mb-1">Self-barbering - chinchilla chews own fur (stress, boredom) or cage mate chews (dominance, overcrowding). Results in chewed stubble (not clean fur slip), uneven patches, often on sides/back where chinchilla can reach.</p>
                <p className="text-xs text-blue-700"><strong>Solutions:</strong> Increase enrichment (chew toys, tunnels, exercise wheel 15" diameter metal), reduce stress, separate aggressive chinchillas, address dominance issues. Genetic component in some lines - may persist despite changes. Not a health issue but cosmetic.</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Parasites (Mites, Fleas - RARE in chinchillas)</h3>
                <p className="text-sm text-gray-700 mb-1">Extremely rare due to dense fur, but can happen from contact with other animals. Intense itching, scratching, fur pulling out in clumps. Red, irritated skin. May see tiny parasites in fur.</p>
                <p className="text-xs text-purple-700"><strong>Treatment:</strong> Exotic vet exam, skin scraping $40-$80. Antiparasitic (ivermectin, Revolution for cats - off-label) $30-$80. Environmental cleaning critical. Resolves in 2-4 weeks.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Hormonal Imbalance (Adrenal Disease, Reproductive Issues)</h3>
                <p className="text-sm text-gray-700 mb-1">Rare but possible. Symmetrical hair loss (both sides of body), progressive, no itching. Often affects tail first (rat-tail appearance), then flanks. More common in older chinchillas (8+ years).</p>
                <p className="text-xs text-pink-700"><strong>Diagnosis:</strong> Bloodwork, ultrasound $200-$400. <strong>Treatment:</strong> Depends on cause - may need surgery (adrenal tumor), hormone therapy. Prognosis varies. Exotic vet specialist required.</p>
              </div>

              <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50">
                <h3 className="font-bold text-gray-900">#8 Allergies (Bedding, Dust Bath, Food)</h3>
                <p className="text-sm text-gray-700 mb-1">Allergic reaction to cedar/pine bedding (toxic anyway - never use), dust bath (if using sand instead of volcanic ash), new food/treats. Itching, red skin, fur pulling, sneezing.</p>
                <p className="text-xs text-indigo-700"><strong>Fix:</strong> Switch to safe bedding (fleece, kiln-dried pine if must use shavings, paper bedding), use proper chinchilla dust (Blue Cloud, Blue Sparkle volcanic ash - NOT sand), eliminate new foods. Improvement in 1-2 weeks after allergen removed.</p>
              </div>

              <div className="p-3 border-l-4 border-teal-500 bg-teal-50">
                <h3 className="font-bold text-gray-900">#9 Overheating</h3>
                <p className="text-sm text-gray-700 mb-1">Chinchillas need temperatures below 75°F. Over 80°F = heatstroke risk. Chronic overheating causes stress = fur slip, also poor coat quality. Chinchilla may lie flat, drool, lethargic.</p>
                <p className="text-xs text-teal-700"><strong>Critical fix:</strong> Air conditioning (ideal 60-70°F), ceramic tiles/granite slabs in cage (chinchilla lies on for cooling), frozen water bottles wrapped in towel, move cage to coolest room. NEVER direct fan on chinchilla (can cause URI). Heatstroke is FATAL - prevention critical.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#10 Illness/Pain (Underlying Medical Condition)</h3>
                <p className="text-sm text-gray-700 mb-1">Chronic illness (dental disease, GI issues, kidney disease) causes stress = fur slip, plus poor coat quality from malnutrition/pain. Chinchilla not grooming properly, lethargic, weight loss.</p>
                <p className="text-xs text-gray-700"><strong>Action:</strong> Exotic vet exam if fur loss + ANY other symptoms (not eating, weight loss, lethargy, drooling, soft poops). Treat underlying condition. Coat improves once chinchilla healthy again.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prevention */}
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-gray-600" />
              How to Prevent Fur Slip: Proper Chinchilla Care
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3">1. Correct Handling Technique (CRITICAL)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Scoop method:</strong> One hand under chest behind front legs, other hand supporting hindquarters. Lift gently.</li>
                  <li>• <strong>Approach from side:</strong> NEVER from above (predator angle triggers panic).</li>
                  <li>• <strong>Don't chase:</strong> Let chinchilla come to you, or corner gently in hidey. Chasing = stress = fur slip.</li>
                  <li>• <strong>Secure but not tight:</strong> Chinchilla should feel supported, not squeezed. Too loose = falls, too tight = panic.</li>
                  <li>• <strong>Base of tail support:</strong> Can gently support (NOT grab) tail base for wiggly chinchillas. NEVER grab by tail tip.</li>
                  <li>• <strong>Short sessions:</strong> Handle 5-10 minutes initially, build trust gradually. Don't force if chinchilla stressed.</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3">2. Optimal Environment (Reduce Stress)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Temperature:</strong> 60-70°F ideal, NEVER over 75°F. Air conditioning in summer essential.</li>
                  <li>• <strong>Cage size:</strong> Minimum 3ft x 2ft x 2ft (LxWxH) for ONE chinchilla. Multi-level better (chinchillas love to climb).</li>
                  <li>• <strong>Location:</strong> Quiet room, away from TV/speakers, no high-traffic chaos, away from windows (temperature fluctuations).</li>
                  <li>• <strong>Predator protection:</strong> No cats/dogs with access to cage. Even friendly dogs cause stress.</li>
                  <li>• <strong>Hideouts:</strong> 2+ wooden hideaways (escape routes reduce stress). Tunnels, ledges for climbing.</li>
                  <li>• <strong>Routine:</strong> Consistent feeding/playtime schedule. Chinchillas are crepuscular (active dawn/dusk).</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-3">3. Proper Diet (Healthy Coat)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Pellets:</strong> UNLIMITED high-quality chinchilla pellets (Oxbow Essentials, Mazuri). Designed for constant grazing.</li>
                  <li>• <strong>Hay:</strong> UNLIMITED timothy hay. Critical for digestion + dental wear. Refill daily.</li>
                  <li>• <strong>Treats:</strong> VERY LIMITED. 1-2 raisins per week MAX. Chinchilla digestive system sensitive. No sugary treats.</li>
                  <li>• <strong>No alfalfa:</strong> After 6 months old - too rich, causes kidney/bladder stones. Timothy only.</li>
                  <li>• <strong>Fresh water:</strong> Daily, glass or stainless steel bottle (plastic retains bacteria).</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
                <h3 className="font-bold text-purple-900 mb-3">4. Dust Baths (Essential for Coat Health)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Frequency:</strong> 2-3 times per week, 10-15 minutes per session. NOT daily (dries skin).</li>
                  <li>• <strong>Proper dust:</strong> Volcanic ash (Blue Cloud, Blue Sparkle). NEVER sand (damages fur, respiratory issues).</li>
                  <li>• <strong>Container:</strong> Large enough to roll in (fish bowl, plastic bin with lid). Remove after bath (prevents overuse).</li>
                  <li>• <strong>Why it matters:</strong> Chinchillas can't get wet (dense fur won't dry, causes fungus). Dust bath removes oils, keeps fur pristine.</li>
                </ul>
              </div>

              <div className="p-4 bg-pink-50 border-2 border-pink-300 rounded-lg">
                <h3 className="font-bold text-pink-900 mb-3">5. Enrichment (Reduce Boredom/Stress)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Chew toys:</strong> Apple wood, willow sticks, pumice stones. Chinchilla teeth grow continuously - need to chew.</li>
                  <li>• <strong>Exercise wheel:</strong> 15-16 inch diameter METAL (not plastic - chinchilla chews through). Chin Spin brand popular.</li>
                  <li>• <strong>Tunnels/tubes:</strong> PVC pipes, wooden tunnels. Mimic burrow exploration.</li>
                  <li>• <strong>Playtime:</strong> Daily 1-2 hours supervised out-of-cage time in chin-proofed room. High energy animals need exercise.</li>
                  <li>• <strong>Companionship:</strong> Chinchillas social - consider same-sex pair (bonded from young age). Reduces loneliness stress.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to See Vet */}
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-gray-600" />
              When Fur Slip Requires Veterinary Attention
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900">🚨 VET WITHIN 24-48 HOURS:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Red, crusty, scaly skin</strong> in bald patches (ringworm - contagious to humans)</li>
                  <li>• <strong>Rapid spreading fur loss</strong> over days to weeks</li>
                  <li>• <strong>Constant scratching/biting at fur</strong> (intense itching)</li>
                  <li>• <strong>Fur loss + other symptoms:</strong> lethargy, not eating, weight loss, drooling</li>
                  <li>• <strong>Symmetrical hair loss</strong> (both sides of body - hormonal issue)</li>
                  <li>• <strong>No regrowth after 8 weeks</strong> (follicle damage or ongoing issue)</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">📋 MONITOR (Likely Normal/Behavioral):</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Single fur slip incident</strong> after clear trigger (grabbed, startled)</li>
                  <li>• <strong>Clean bald patch, normal skin</strong> underneath (no redness/scaling)</li>
                  <li>• <strong>Otherwise healthy:</strong> eating well, active, playful, good coat elsewhere</li>
                  <li>• <strong>Improving with handling changes</strong> (gentler approach = less slipping)</li>
                  <li>• <strong>Fur regrowing normally</strong> within 6-12 weeks</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900">💡 PREVENTION FOCUS:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Frequent fur slip</strong> (weekly or monthly) = handling technique problem OR chronic stress</li>
                  <li>• <strong>Review environment:</strong> Temperature, predator access, cage size, noise level</li>
                  <li>• <strong>Practice gentler handling:</strong> Scoop from below, approach from side, no chasing</li>
                  <li>• <strong>If no improvement after changes:</strong> See exotic vet to rule out medical causes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Small Pet Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/ferret-hair-loss-suddenly">
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Ferret Hair Loss Suddenly</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Adrenal disease and hair loss causes in ferrets
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/rabbit-not-pooping-12-hours">
                <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Rabbit Not Pooping for 12 Hours</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      GI stasis emergency in rabbits
                    </p>
                    <div className="flex items-center text-amber-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/symptoms">
                <Button className="bg-gradient-to-r from-gray-600 to-slate-600 text-white hover:from-gray-700 hover:to-slate-700">
                  View All Small Pet Symptoms →
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
            <Card className="bg-gradient-to-r from-gray-600 to-slate-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Chinchilla Fur Slipping? Get Expert Assessment</h2>
                <p className="text-xl mb-6 text-gray-100">
                  Tell our free AI veterinary assistant about the fur slip pattern, triggers, your chinchilla's environment, and handling techniques. 
                  Get instant guidance on whether this is normal or requires veterinary attention.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-gray-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Fur Slip Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-gray-100">
                  ✓ Available 24/7 ✓ Normal vs Medical Analysis ✓ Exotic Pet Specialist ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
