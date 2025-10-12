import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Clock, Activity, ArrowRight, CheckCircle, XCircle, Thermometer } from "lucide-react";
import { Link } from "wouter";

export default function FerretHairLossSudden() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <SEOHead 
        title="Ferret Hair Loss Suddenly - Adrenal Disease & Other Causes | PetWellBot"
        description="Ferret losing hair suddenly? Learn about adrenal disease (#1 cause - 70% of ferrets), seasonal shedding vs abnormal alopecia, hormonal issues, and treatment options including surgery and Lupron."
        keywords="ferret hair loss, ferret adrenal disease, ferret alopecia, ferret bald tail, ferret losing fur, ferret hormone disease"
        canonicalUrl="https://petwellbot.com/ferret-hair-loss-suddenly"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Small Pet Symptoms", href: "/symptoms" },
              { label: "Ferret Hair Loss Suddenly" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⚠️ URGENT - Likely Adrenal Disease (See Vet Within 1-2 Weeks)
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ferret Hair Loss Suddenly: Adrenal Disease Warning Signs
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Sudden hair loss in ferrets (especially starting at tail/hind end) is the hallmark sign of adrenal disease - affecting 70% of ferrets over 3 years old. 
              Learn the difference between normal shedding and serious hormonal disease requiring treatment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Hair Loss Assessment
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('adrenal-disease')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-purple-600"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Adrenal Disease Signs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-6 bg-orange-50 border-y-2 border-orange-300" id="adrenal-disease">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">🚨 Classic Adrenal Disease Pattern (See Vet Within 1-2 Weeks):</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Progressive hair loss</strong> starting at tail, spreading to back/hind legs</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Symmetrical baldness</strong> (both sides losing hair equally)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Females:</strong> Enlarged vulva (even if spayed), muscle wasting</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Males:</strong> Difficulty urinating, straining (prostate enlargement)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Increased aggression or sexual behavior</strong> (mounting, marking)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Lethargy, weight loss, pot-bellied appearance</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Normal vs Abnormal Hair Loss */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-purple-600" />
              Normal Shedding vs Abnormal Hair Loss (Alopecia)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  NORMAL Seasonal Shedding
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ <strong>Timing:</strong> Spring/fall seasonal shedding (all ferrets shed 2x yearly)</li>
                  <li>✓ <strong>Pattern:</strong> Diffuse thinning over whole body, NOT bald patches</li>
                  <li>✓ <strong>Regrowth:</strong> New coat grows back within 3-6 weeks after shedding</li>
                  <li>✓ <strong>Skin:</strong> Normal, healthy pink skin underneath (no redness/scaling)</li>
                  <li>✓ <strong>Distribution:</strong> Even coat thinning, never completely bald areas</li>
                  <li>✓ <strong>Other symptoms:</strong> NONE - ferret otherwise healthy, active, normal appetite</li>
                  <li>✓ <strong>Age:</strong> Any age, even young ferrets (6 months+) shed seasonally</li>
                  <li>✓ <strong>Duration:</strong> 2-4 weeks of heavy shedding, then stops</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  ABNORMAL (Adrenal/Medical)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✗ <strong>Timing:</strong> Progressive loss over weeks/months, NOT seasonal</li>
                  <li>✗ <strong>Pattern:</strong> STARTS at tail/rump, spreads forward. Symmetrical bald patches.</li>
                  <li>✗ <strong>Regrowth:</strong> No regrowth OR thin, fuzzy regrowth that falls out again</li>
                  <li>✗ <strong>Skin:</strong> May be normal OR itchy, red, flaky, darkened (hyperpigmented)</li>
                  <li>✗ <strong>Distribution:</strong> Rat-tail appearance, bald belly, bald sides, bald back legs</li>
                  <li>✗ <strong>Other symptoms:</strong> Enlarged vulva (females), urination difficulty (males), lethargy, aggression</li>
                  <li>✗ <strong>Age:</strong> Typically 3+ years old (adrenal disease rare under 2 years)</li>
                  <li>✗ <strong>Duration:</strong> Continuous worsening over months if untreated</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
              <p className="text-blue-900 font-medium">
                🔍 <strong>Red Flag Pattern:</strong> Hair loss starting at TAIL and spreading forward = adrenal disease until proven otherwise. 
                This pattern is 90% predictive. If your ferret's tail is going bald (especially if 3+ years old), schedule vet visit ASAP.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Adrenal Disease Deep Dive */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Adrenal Disease in Ferrets: The #1 Cause (70% of Ferrets Over 3 Years)
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 mb-2">What is Adrenal Disease?</h3>
                <p className="text-sm text-gray-700">
                  One or both adrenal glands (small glands near kidneys) become hyperplastic (enlarged) or develop tumors. Glands overproduce sex hormones (estrogen, testosterone, androstenedione). 
                  These hormones cause hair loss, sexual behavior changes, and organ problems. NOT the same as Addison's disease (which is adrenal underproduction).
                </p>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">Why Are Pet Ferrets So Prone? (Wild Ferrets Don't Get This)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Theory #1 (Most Accepted):</strong> Early spay/neuter (6-8 weeks by breeders) removes sex hormones → pituitary gland overproduces hormones trying to compensate → chronic overstimulation of adrenal glands → hyperplasia/tumors.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Theory #2:</strong> Indoor housing with artificial lighting disrupts natural seasonal light cycles → hormonal dysregulation.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Theory #3:</strong> Genetic predisposition in domestically bred ferrets (Marshall Farms ferrets have higher rates).
                </p>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900 mb-2">Complete Symptom List (Hair Loss is Just One Sign):</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Hair loss:</strong> 90% of cases. Starts tail/rump, progresses forward. Rat-tail, bald belly, bald back.</li>
                  <li>• <strong>Enlarged vulva (females):</strong> 80% of spayed females. Vulva swollen like she's in heat (but she's spayed).</li>
                  <li>• <strong>Difficulty urinating (males):</strong> Excess hormones enlarge prostate → blocks urethra. Straining, dribbling, crying when urinating. EMERGENCY.</li>
                  <li>• <strong>Muscle wasting:</strong> Thin, weak hind legs. Weight loss despite normal appetite.</li>
                  <li>• <strong>Pot-bellied appearance:</strong> Abdominal distension from enlarged organs/tumors.</li>
                  <li>• <strong>Sexual aggression:</strong> Mounting other ferrets, increased aggression, marking territory.</li>
                  <li>• <strong>Lethargy:</strong> Less playful, sleeping more, reduced activity.</li>
                  <li>• <strong>Itchy skin:</strong> 30% have pruritus (itching). Scratching, redness.</li>
                  <li>• <strong>Fragile skin:</strong> Thin skin, bruises easily, slow wound healing.</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">⚠️ Life-Threatening Complication: Male Urinary Blockage</h3>
                <p className="text-sm text-gray-700">
                  Male ferrets with adrenal disease can develop complete urinary blockage from prostate enlargement. 
                  <strong className="text-red-700"> If male ferret straining to urinate with NO urine output = VET EMERGENCY NOW.</strong> Can die within 24-48 hours from bladder rupture/kidney failure. 
                  Catheterization or emergency surgery required.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Other Causes */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8 Other Causes of Hair Loss in Ferrets (Less Common)
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#2 Seasonal Flank Alopecia (Normal Variant)</h3>
                <p className="text-sm text-gray-700 mb-1">Bilateral (both sides) hair loss on flanks (sides of body) during fall/winter. REGROWS in spring. Benign condition, cosmetic only. More common in neutered males.</p>
                <p className="text-xs text-blue-700"><strong>Diagnosis:</strong> Pattern (both flanks), timing (seasonal), regrowth. <strong>Treatment:</strong> None needed. Melatonin supplements $10-$20 may help some ferrets. Not harmful.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#3 Ovarian Remnant Syndrome (Spayed Females)</h3>
                <p className="text-sm text-gray-700 mb-1">Small piece of ovarian tissue left behind during spay. Produces estrogen → hair loss, enlarged vulva. Mimics adrenal disease but different treatment.</p>
                <p className="text-xs text-green-700"><strong>Diagnosis:</strong> Hormone panel (high estrogen), ultrasound may show remnant. <strong>Treatment:</strong> Surgery to remove remnant tissue $300-$800. Full recovery after removal.</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#4 Fleas/Mites (Parasitic)</h3>
                <p className="text-sm text-gray-700 mb-1">Fleas (from contact with dogs/cats), ear mites, sarcoptic mange. Causes itching → excessive scratching → hair loss. Patchy distribution, NOT symmetrical.</p>
                <p className="text-xs text-yellow-700"><strong>Signs:</strong> Intense itching, visible fleas/flea dirt, scabs, crusty ears (ear mites). <strong>Treatment:</strong> Revolution/Advantage Multi $15-$30, ear mite drops. Resolves in 2-4 weeks.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#5 Nutritional Deficiency (Rare in Modern Diets)</h3>
                <p className="text-sm text-gray-700 mb-1">Low-quality food lacking essential fatty acids, biotin, zinc. Poor coat quality, dry skin, hair loss. Rare with high-quality ferret kibble but seen with inappropriate diets (cat food, dog food).</p>
                <p className="text-xs text-orange-700"><strong>Fix:</strong> Switch to high-quality ferret food (Wysong Epigen, Marshall Premium), omega-3 supplements (salmon oil). Improvement in 4-8 weeks.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#6 Bacterial/Fungal Skin Infection</h3>
                <p className="text-sm text-gray-700 mb-1">Staph infections, ringworm (fungal). Patchy hair loss, red/inflamed skin, crusts, scales. Often secondary to scratching from other causes.</p>
                <p className="text-xs text-pink-700"><strong>Diagnosis:</strong> Skin scraping, fungal culture. <strong>Treatment:</strong> Antibiotics (enrofloxacin) $30-$80, antifungal shampoo/cream. Heals in 2-6 weeks.</p>
              </div>

              <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50">
                <h3 className="font-bold text-gray-900">#7 Insulinoma (Pancreatic Tumors)</h3>
                <p className="text-sm text-gray-700 mb-1">Another common ferret disease (40% of ferrets 3+ years). Tumors produce excess insulin → low blood sugar. Can cause hair loss, though less common than adrenal. Often BOTH diseases coexist.</p>
                <p className="text-xs text-indigo-700"><strong>Signs:</strong> Seizures, weakness, drooling, lethargy, weight loss, hair loss. <strong>Diagnosis:</strong> Blood glucose test (low), insulin level (high). Treatment: Surgery $800-$1500 or prednisone management.</p>
              </div>

              <div className="p-3 border-l-4 border-teal-500 bg-teal-50">
                <h3 className="font-bold text-gray-900">#8 Stress/Barbering (Behavioral)</h3>
                <p className="text-sm text-gray-700 mb-1">Ferret over-grooming from stress, boredom, or cage mate barbering (dominant ferret chewing subordinate's fur). Localized hair loss, broken hair shafts visible.</p>
                <p className="text-xs text-teal-700"><strong>Fix:</strong> Increase enrichment, separate aggressive cage mates, reduce stressors. Elizabethan collar if severe. Behavior modification takes 2-8 weeks.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#9 Hypothyroidism (Very Rare in Ferrets)</h3>
                <p className="text-sm text-gray-700 mb-1">Underactive thyroid. Extremely rare in ferrets (unlike dogs). Causes lethargy, weight gain, hair loss, cold intolerance.</p>
                <p className="text-xs text-gray-700"><strong>Diagnosis:</strong> Blood work (low T4). <strong>Treatment:</strong> Thyroid hormone supplementation (levothyroxine). Rare enough that other causes should be ruled out first.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diagnosis */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-purple-600" />
              How Adrenal Disease is Diagnosed
            </h2>

            <div className="space-y-3">
              <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900">Method 1: Hormone Panel (Blood Test) - Gold Standard</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>What it measures:</strong> Estradiol, androstenedione, 17-hydroxyprogesterone levels</li>
                  <li>• <strong>How:</strong> Blood draw sent to University of Tennessee lab (most common)</li>
                  <li>• <strong>Cost:</strong> $150-$300 (test + vet visit)</li>
                  <li>• <strong>Accuracy:</strong> 85-90% sensitivity. Elevated hormones = adrenal disease confirmed.</li>
                  <li>• <strong>Timeline:</strong> Results in 5-10 days</li>
                  <li>• <strong>Note:</strong> Normal results DON'T rule out adrenal disease (10-15% false negatives). Clinical signs matter more.</li>
                </ul>
              </div>

              <div className="p-3 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900">Method 2: Ultrasound - Visualize Glands</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>What it shows:</strong> Enlarged adrenal glands (&gt;4mm = abnormal), visible tumors</li>
                  <li>• <strong>Cost:</strong> $150-$400</li>
                  <li>• <strong>Accuracy:</strong> 70-80% (small tumors may be missed, early disease may not show enlargement)</li>
                  <li>• <strong>Benefit:</strong> Immediate results, can see which gland affected (helps surgical planning)</li>
                  <li>• <strong>Limitation:</strong> Normal ultrasound doesn't rule out adrenal disease. Hormone panel more sensitive.</li>
                </ul>
              </div>

              <div className="p-3 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900">Method 3: Clinical Diagnosis (Pattern Recognition)</h3>
                <p className="text-sm text-gray-700 mt-2">
                  Experienced exotic vets often diagnose based on classic signs (tail baldness, 3+ years old, enlarged vulva, history). 
                  May start treatment without testing if ferret fits pattern perfectly. Response to treatment confirms diagnosis. 
                  This approach saves money but lacks confirmation.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-900">
                  💡 <strong>Recommendation:</strong> Hormone panel preferred for definitive diagnosis, especially if considering surgery (need to know severity). 
                  Clinical diagnosis acceptable if owner choosing medical management (Lupron) and finances limited. Ultrasound useful for pre-surgical planning.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Treatment Options */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Thermometer className="h-6 w-6 text-purple-600" />
              Treatment Options for Adrenal Disease
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 border-2 border-green-400 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3">Option 1: Surgery (Adrenalectomy) - CURATIVE for One Gland</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Procedure:</strong> Remove affected adrenal gland(s). Left gland easier (right gland under vena cava = risky).</li>
                  <li><strong>Best candidates:</strong> Young ferrets (under 5 years), one gland affected, otherwise healthy, owner can afford</li>
                  <li><strong>Success rate:</strong> 80-90% if left gland only. Symptoms resolve within 2-8 weeks. Hair regrows in 2-4 months.</li>
                  <li><strong>Risks:</strong> Anesthesia complications (5-10% risk in ferrets), bleeding during surgery, removal of both glands = lifelong steroid dependence</li>
                  <li><strong>Cost:</strong> $800-$2000 (surgery + pre-op bloodwork + post-op care)</li>
                  <li><strong>Lifespan:</strong> If left gland removed successfully, ferret can live normal lifespan. Right gland or both glands = higher recurrence risk.</li>
                  <li><strong>Recurrence:</strong> 20-40% develop disease in remaining gland within 1-3 years (then need medical management)</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border-2 border-blue-400 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3">Option 2: Lupron (Deslorelin) Implant - Medical Management</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>How it works:</strong> Hormone implant (deslorelin acetate) suppresses pituitary → reduces adrenal stimulation → symptoms improve</li>
                  <li><strong>Best candidates:</strong> Older ferrets (5+ years), both glands affected, surgical risk too high, owner prefers non-invasive</li>
                  <li><strong>Effectiveness:</strong> 70-85% of ferrets show improvement. Hair regrows in 2-6 months. Symptoms controlled but NOT cured.</li>
                  <li><strong>Duration:</strong> Implant lasts 8-24 months (average 12-16 months). Needs replacement when symptoms return.</li>
                  <li><strong>Cost:</strong> $150-$300 per implant. Lifetime cost higher than surgery but spread out.</li>
                  <li><strong>Procedure:</strong> Quick injection under skin (no surgery/anesthesia). Can do in regular vet visit.</li>
                  <li><strong>Limitation:</strong> Doesn't remove tumor - just controls symptoms. Disease progresses over time. Eventually may stop working.</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-3">Option 3: Leuprolide Injections (Monthly Lupron)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Difference from implant:</strong> Same drug but monthly injections instead of long-acting implant</li>
                  <li><strong>Cost:</strong> $30-$80 per month (cheaper per dose but requires monthly vet visits)</li>
                  <li><strong>Pros:</strong> Lower upfront cost, can adjust dose, works if implant unavailable</li>
                  <li><strong>Cons:</strong> Monthly vet visits (stressful for ferret), injections painful, more expensive long-term than implant</li>
                  <li><strong>When used:</strong> Ferret not responding to implant, owner can't afford implant, need dose adjustments</li>
                </ul>
              </div>

              <div className="p-4 bg-pink-50 border-2 border-pink-400 rounded-lg">
                <h3 className="font-bold text-pink-900 mb-3">Option 4: Melatonin (Adjunct Therapy Only)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Theory:</strong> Regulates light/dark cycles, may reduce adrenal stimulation. Evidence weak.</li>
                  <li><strong>Cost:</strong> $10-$20/month (melatonin implants or oral supplements)</li>
                  <li><strong>Effectiveness:</strong> 20-40% mild improvement. NOT sufficient as sole treatment.</li>
                  <li><strong>Use:</strong> Combine with Lupron or surgery for additional benefit. Won't control severe disease alone.</li>
                  <li><strong>Safety:</strong> Very safe, no side effects. Worth trying as supplement but don't rely on it.</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded">
                <p className="text-sm text-red-900">
                  ⚠️ <strong>Untreated Adrenal Disease:</strong> Progressive over months to years. Quality of life declines (complete baldness, muscle wasting, lethargy). 
                  Males can develop fatal urinary blockage. Median survival untreated: 1-2 years from diagnosis. WITH treatment (surgery or Lupron): 2-4+ additional years. Treatment dramatically improves quality of life.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prognosis */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-purple-600" />
              Prognosis & What to Expect
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900">With Treatment (Surgery or Lupron):</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Symptom improvement:</strong> 2-8 weeks (vulva shrinks, sexual behavior decreases, energy improves)</li>
                  <li>• <strong>Hair regrowth:</strong> 2-6 months (may be fuzzy/thin but improves over time)</li>
                  <li>• <strong>Quality of life:</strong> Excellent. Most ferrets return to normal activity, playfulness.</li>
                  <li>• <strong>Lifespan:</strong> Successful left gland surgery: near-normal lifespan (5-8 years total). Lupron management: 2-4+ years from diagnosis with good quality.</li>
                  <li>• <strong>Recurrence:</strong> Surgery 20-40% (other gland affected later), Lupron needs ongoing treatment</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">Without Treatment:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Progression:</strong> Complete baldness except head within 6-12 months</li>
                  <li>• <strong>Complications:</strong> Males: urinary blockage risk (FATAL). Females: severe muscle wasting, anemia.</li>
                  <li>• <strong>Quality of life:</strong> Declines significantly (lethargy, weakness, fragile)</li>
                  <li>• <strong>Lifespan:</strong> Median 1-2 years from onset. Death usually from complications (urinary blockage, anemia, secondary infections).</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-blue-900">
                  <strong>Bottom Line:</strong> Adrenal disease is treatable and manageable. Early treatment = better outcomes. 
                  Don't delay vet visit if you see classic signs (tail baldness, 3+ years old, enlarged vulva). Treatment isn't cheap but dramatically improves quality and length of life. 
                  Many ferrets live 2-4 additional happy years with proper management.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Small Pet Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
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

              <Link href="/guinea-pig-wheeking-constantly">
                <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Guinea Pig Wheeking Constantly</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Normal vs excessive vocalization causes
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
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
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
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ferret Losing Hair? Get Expert Assessment</h2>
                <p className="text-xl mb-6 text-purple-100">
                  Tell our free AI veterinary assistant about the hair loss pattern, your ferret's age, location of baldness, and any other symptoms. 
                  Get instant guidance on whether this is adrenal disease or another cause requiring veterinary attention.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Hair Loss Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-purple-100">
                  ✓ Available 24/7 ✓ Adrenal Disease Expert ✓ Exotic Pet Specialist ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
