import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Clock, Activity, ArrowRight, CheckCircle, XCircle, Droplets } from "lucide-react";
import { Link } from "wouter";

export default function GoldfishSwimmingUpsideDown() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <SEOHead 
        title="Goldfish Swimming Upside Down - Swim Bladder Disease Treatment | PetWellBot"
        description="Goldfish swimming upside down? Learn swim bladder disorder causes (overfeeding, constipation, infection, genetics), emergency treatment (fasting, peas, Epsom salt), and prevention."
        keywords="goldfish swimming upside down, goldfish swim bladder disease, goldfish floating upside down, goldfish buoyancy problems, swim bladder disorder"
        canonicalUrl="https://petwellbot.com/goldfish-swimming-upside-down"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Fish Symptoms", href: "/symptoms" },
              { label: "Goldfish Swimming Upside Down" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⚠️ URGENT - Swim Bladder Disorder (Treatable)
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Goldfish Swimming Upside Down: Swim Bladder Disease Guide
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Upside-down swimming signals swim bladder disorder - buoyancy control malfunction from overfeeding, constipation, infection, or genetics. 
              Often treatable with fasting, dietary changes, and supportive care. Learn emergency treatment and long-term solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Treatment Plan
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('emergency-treatment')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600"
              >
                <Droplets className="w-5 h-5 mr-2" />
                Emergency Treatment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-6 bg-orange-50 border-y-2 border-orange-300" id="emergency-treatment">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">⚠️ Immediate Action Required If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Can't reach food at surface</strong> (fish will starve, hand-feed if needed)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Stuck at surface or bottom</strong> unable to control depth</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Scales raised (pineconing)</strong> = dropsy (fatal, separate immediately)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Red streaks in fins/body</strong> = bacterial infection spreading</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Not eating 3+ days</strong> (starvation risk, force-feed gel food)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Gasping at surface</strong> despite upside-down position (ammonia/nitrite poisoning)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Understanding Swim Bladder */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-blue-600" />
              What is Swim Bladder Disorder?
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">🫧 The Swim Bladder: Fish Buoyancy System</h3>
                <p className="text-sm text-gray-700">
                  The swim bladder is a gas-filled internal organ that controls buoyancy. Goldfish inflate/deflate it to rise or sink. 
                  When malfunctioning: fish floats uncontrollably, sinks to bottom, or swims sideways/upside-down. Think of it like a broken flotation device.
                </p>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">📊 How Common? EXTREMELY</h3>
                <p className="text-sm text-gray-700">
                  Swim bladder issues affect 30-50% of fancy goldfish at some point. Fancy varieties (Orandas, Ryukins, Ranchus, Bubble Eyes) most susceptible due to compressed body shapes. 
                  Common goldfish (comets, shubunkins) less prone but still affected.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">🔄 Temporary vs Chronic</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Temporary (60-70% of cases):</strong> Overfeeding, constipation, gulping air. Resolves in 3-7 days with fasting/treatment.</li>
                  <li>• <strong>Chronic (30-40%):</strong> Genetic deformity, permanent organ damage, tumors. Fish may need lifelong management (shallow water, hand-feeding).</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Causes */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8 Causes of Swim Bladder Disorder in Goldfish
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Overfeeding (MOST COMMON - 40-50% of cases)</h3>
                <p className="text-sm text-gray-700 mb-1">Dry food expands in stomach, compresses swim bladder. Goldfish stomachs located near swim bladder - bloated stomach = pressure = buoyancy failure. Pellets/flakes expand 2-3x size when wet.</p>
                <p className="text-xs text-red-700"><strong>Fix:</strong> Fast fish 24-48 hours, then feed only pre-soaked pellets or gel food. Feed 1-2 times daily (NOT 3-4x). Stomach size of goldfish eye = proper portion. Prevention: soak food 5 minutes before feeding.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Constipation/GI Blockage</h3>
                <p className="text-sm text-gray-700 mb-1">Dry food low in fiber, no variety. Fish constipated, bloated, swim bladder compressed by impacted intestines. Goldfish constantly graze in wild (vegetation, insects) - need fiber.</p>
                <p className="text-xs text-orange-700"><strong>Treatment:</strong> Fast 1-2 days, then feed blanched peas (shell removed, mashed). Peas act as laxative, clear GI tract. 60-80% improvement in 24-48 hours. Then: gel food, Repashy, blanched veggies 2-3x weekly. Prevention: variety diet, high fiber.</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Gulping Air at Surface</h3>
                <p className="text-sm text-gray-700 mb-1">Goldfish eating floating pellets/flakes gulp air. Air enters swim bladder, can't be expelled properly. Overinflated bladder = fish floats upside-down.</p>
                <p className="text-xs text-yellow-700"><strong>Fix:</strong> Switch to sinking pellets (Hikari Lionhead, Saki-Hikari Fancy Goldfish), gel food fed mid-water or at bottom. Feed below surface (submerge hand). Improvement within days once air expelled naturally.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Cold Water Temperature Shock</h3>
                <p className="text-sm text-gray-700 mb-1">Sudden temperature drop (water change with cold water, room temp drops overnight). Goldfish metabolism slows, digestion halts, food sits in stomach = bloating. Swim bladder muscle function impaired in cold.</p>
                <p className="text-xs text-green-700"><strong>Prevention:</strong> Keep tank 65-75°F (goldfish tolerate 60-80°F but need stability). Water changes: match temperature ±2°F. Gradual seasonal changes OK, sudden shifts = stress. If temperature drop caused issue: slowly raise to 72-74°F, fast fish, may resolve in 2-3 days.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Bacterial/Viral Infection (Swim Bladder Inflammation)</h3>
                <p className="text-sm text-gray-700 mb-1">Bacteria (Aeromonas, Pseudomonas) or viruses infect swim bladder organ itself, causing inflammation, fluid accumulation, loss of function. Often secondary to poor water quality (ammonia/nitrite spike).</p>
                <p className="text-xs text-blue-700"><strong>Signs:</strong> Upside-down swimming + lethargy, clamped fins, red streaks, not eating. <strong>Treatment:</strong> Antibiotic food (Kanaplex, Metroplex mixed with gel food) 10-14 days, hospital tank, pristine water quality (daily water changes 25-50%). Success rate: 40-60% if caught early. Severe infections may cause permanent damage.</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Genetic/Congenital Deformity</h3>
                <p className="text-sm text-gray-700 mb-1">Fancy goldfish bred for extreme body shapes (short, round, compressed). Swim bladder deformed, too small, or positioned wrong. Fish born with issue or develops as matures (6-12 months old).</p>
                <p className="text-xs text-purple-700"><strong>Breeds most affected:</strong> Ryukins, Orandas, Ranchus, Pearlscales, Bubble Eyes, Telescope Eyes. <strong>Management not cure:</strong> Shallow water (6-8 inches), plants/decor to rest on, hand-feeding, sinking food. Fish can live full lifespan (10-20 years) with accommodations. No medical treatment fixes genetic deformity.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Internal Tumors/Cysts</h3>
                <p className="text-sm text-gray-700 mb-1">Growth pressing on swim bladder (tumors, egg-binding in females, organ enlargement). More common in fish 3+ years old.</p>
                <p className="text-xs text-pink-700"><strong>Diagnosis:</strong> X-ray at fish vet ($100-$200), or trial treatment (if fasting/peas don't help after 1-2 weeks, likely internal issue). <strong>Treatment:</strong> Limited. Surgery possible but risky/expensive ($300-$800). Most fish managed symptomatically (shallow water, hand-feed). Prognosis: guarded, depends on growth size/location.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#8 Injury/Trauma</h3>
                <p className="text-sm text-gray-700 mb-1">Physical damage to swim bladder from rough handling, aggressive tankmate bite, fish jumping out of tank. Punctured or scarred swim bladder loses function permanently.</p>
                <p className="text-xs text-gray-700"><strong>Prevention:</strong> Gentle handling (use net or hands wet), no aggressive tankmates (goldfish are peaceful, don't house with aggressive species), secure lid. <strong>If injured:</strong> May heal over 2-4 weeks in pristine water, or permanent disability requiring shallow water accommodation.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Treatment Protocol */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              Emergency Treatment Protocol (Try This FIRST)
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3">Step 1: Immediate Actions (Day 1)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>STOP FEEDING:</strong> No food for 24-48 hours. Goldfish can safely fast 7-10 days. Fasting allows stomach to empty, relieves swim bladder pressure.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Test water:</strong> Ammonia 0 ppm, Nitrite 0 ppm, Nitrate &lt;40 ppm. If elevated, do 50% water change immediately (match temp). Bad water = stress = worsens condition.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Raise temperature slightly:</strong> To 74-76°F (improves digestion/metabolism). Raise slowly over 6-12 hours (2°F per hour max).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Lower water level (if needed):</strong> If fish stuck at top, lower to 6-8 inches so fish can rest on bottom/plants without exhausting itself swimming.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Add aquarium salt (optional):</strong> 1 tablespoon per 5 gallons (dissolve first). Helps osmoregulation, reduces stress. NOT Epsom salt yet (different purpose).</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 border-2 border-orange-300 rounded-lg">
                <h3 className="font-bold text-orange-900 mb-3">Step 2: The Pea Treatment (Day 2-3)</h3>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li><strong>After 24-48 hour fast,</strong> prepare skinned peas: Frozen peas (NO canned - too much salt), boil 1-2 minutes until soft, cool, remove shell/skin (important - skin hard to digest).</li>
                  <li><strong>Mash peas:</strong> Into small pieces fish can swallow. Feed 2-3 pea pieces (size of fish's eye each).</li>
                  <li><strong>Why peas work:</strong> High fiber acts as laxative, helps pass constipation. Easily digestible, low protein (normal goldfish food high protein = hard to digest when sick).</li>
                  <li><strong>Feed peas only:</strong> For 2-3 days, 1-2 times daily. Most goldfish show improvement within 24-48 hours (swimming more normal, less floating).</li>
                  <li><strong>Monitor pooping:</strong> Look for long stringy poop (GI clearing out). Normal poop = brown, firm. White/clear stringy = parasites (different issue).</li>
                </ol>
              </div>

              <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-3">Step 3: Epsom Salt Bath (If No Improvement by Day 3-4)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Purpose:</strong> Epsom salt (magnesium sulfate) acts as muscle relaxant, helps fish expel trapped gas/fluid. Different from aquarium salt (sodium chloride).</li>
                  <li>• <strong>Dosage:</strong> 1 tablespoon Epsom salt per 5 gallons. Dissolve in cup of tank water, add slowly over 10 minutes.</li>
                  <li>• <strong>Duration:</strong> 3-5 days. Do 25% water change every 2 days, re-dose Epsom salt after water change.</li>
                  <li>• <strong>Success rate:</strong> 40-60% for constipation-related swim bladder issues. Safe to combine with fasting + pea diet.</li>
                  <li>• <strong>Note:</strong> Use PURE Epsom salt (magnesium sulfate) - NO scents/additives. Available at pharmacy/grocery store.</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3">Step 4: Resume Normal Feeding (Day 5-7)</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>If improved:</strong> Gradually reintroduce food. Start with gel food or soaked sinking pellets (soak 5 minutes). Small amounts 1-2x daily.</li>
                  <li>• <strong>NEW diet going forward:</strong> Sinking pellets (Hikari Lionhead, Repashy Soilent Green gel food), blanched veggies 2-3x weekly (peas, zucchini, spinach). NO dry floating flakes.</li>
                  <li>• <strong>Portion size:</strong> Amount goldfish can eat in 2 minutes, or size of fish's eye. Goldfish stomach = size of eye. Overfeeding = relapse.</li>
                  <li>• <strong>Fasting day:</strong> Fast fish 1 day per week (many fishkeepers do this preventatively). Helps prevent constipation/bloating.</li>
                  <li>• <strong>If NOT improved after 1 week:</strong> Likely chronic issue (genetic, tumor, infection). Move to long-term management (see below).</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Long-term Management */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Long-Term Management for Chronic Swim Bladder Issues
            </h2>

            <div className="space-y-3">
              <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900">🏊 Shallow Water Setup</h3>
                <p className="text-sm text-gray-700">Keep water level 6-10 inches deep. Fish can rest on bottom without exhausting itself. Easier to reach surface for air. Less pressure on swim bladder in shallow water. Use long/wide tank rather than tall tank.</p>
              </div>

              <div className="p-3 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900">🌿 Resting Spots</h3>
                <p className="text-sm text-gray-700">Add broad-leaf plants (live or silk), smooth rocks, tank dividers fish can rest on at different depths. Fish stuck floating can wedge itself to "anchor." Anubias, Java Fern, Amazon Sword = good choices. Avoid sharp/rough decor (fish may scrape itself trying to stabilize).</p>
              </div>

              <div className="p-3 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900">🍴 Hand-Feeding</h3>
                <p className="text-sm text-gray-700">If fish can't reach bottom: hand-feed at mid-water or near surface. Sinking gel food on chopstick/feeding stick. Ensure fish eating enough (check body condition - should have rounded belly, not concave/thin). May need to feed 3-4x daily in small amounts.</p>
              </div>

              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">💊 Antibiotic Treatment (If Infection Suspected)</h3>
                <p className="text-sm text-gray-700">If swim bladder issue started suddenly + fish lethargic/clamped fins/red streaks: try medicated food. Kanaplex or Metroplex (from Seachem) mixed into gel food. 10-14 day course. Pristine water quality critical during treatment (daily 25% water changes). Success rate: 40-60% for bacterial infections.</p>
              </div>

              <div className="p-3 bg-pink-50 border-l-4 border-pink-500">
                <h3 className="font-bold text-pink-900">🔬 Fish Vet Consult (If Available)</h3>
                <p className="text-sm text-gray-700">Specialized aquatic vets can do X-rays ($100-$200), ultrasound, aspirate swim bladder (remove fluid/gas manually - $150-$300). May diagnose tumors, cysts, or structural abnormalities. Surgery possible for some cases ($500-$1500) but risky. Many fish live full lives with management vs invasive treatment.</p>
              </div>

              <div className="p-3 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900">⚖️ Quality of Life Assessment</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Good quality:</strong> Fish eating well, active when able, interacts with environment, not distressed. Can live for years with accommodations.</li>
                  <li>• <strong>Poor quality:</strong> Can't eat (starving), constant stress/panic swimming, open wounds from scraping, gasping. Humane euthanasia (clove oil method) may be kindest option.</li>
                  <li>• <strong>Middle ground:</strong> Most fish adapt. May swim funny but otherwise healthy, eating, living comfortably. Don't euthanize just for "looking weird" if fish has good life.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prevention */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prevention: Stop Swim Bladder Issues Before They Start
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">✓ Proper Feeding</h3>
                <p className="text-sm text-gray-700">Sinking pellets (soak 5 min), gel food, variety (peas, zucchini, bloodworms 1-2x week). Feed amount goldfish can eat in 2 minutes. 1-2x daily. Weekly fasting day.</p>
              </div>

              <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">✓ Water Quality</h3>
                <p className="text-sm text-gray-700">Ammonia 0, Nitrite 0, Nitrate &lt;40 ppm. Test weekly. Goldfish = heavy bioload, need 20 gallons MINIMUM per fish (40+ gal for fancy). Strong filtration (2-3x tank volume per hour). 25-50% water change weekly.</p>
              </div>

              <div className="p-3 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 mb-2">✓ Temperature Stability</h3>
                <p className="text-sm text-gray-700">Keep 68-74°F year-round. Avoid sudden changes. Water changes: match temperature ±2°F. Heater for stability (set to 72°F). Thermometer to monitor.</p>
              </div>

              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">✓ Tank Size</h3>
                <p className="text-sm text-gray-700">20 gallons minimum per goldfish (40+ gallons better). Fancy goldfish 30-40 gallons recommended. Long/wide tanks better than tall. More water = more stable parameters = healthier fish.</p>
              </div>

              <div className="p-3 bg-pink-50 border-l-4 border-pink-500">
                <h3 className="font-bold text-pink-900 mb-2">✓ Choose Hardier Breeds</h3>
                <p className="text-sm text-gray-700">Common goldfish, Comets, Shubunkins = streamlined bodies, less prone to swim bladder issues. Fancy goldfish (Ryukins, Orandas) = higher risk due to body shape. Know what you're getting.</p>
              </div>

              <div className="p-3 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">✓ Quarantine New Fish</h3>
                <p className="text-sm text-gray-700">30 days quarantine for new goldfish. Watch for swim bladder issues before adding to main tank. Prevents introducing infections. Easier to treat one fish in hospital tank than whole tank.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              Recovery Timeline & Prognosis
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900">Excellent Prognosis (Overfeeding/Constipation)</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Improvement timeline:</strong> Day 1-2 fasting (slight improvement), Day 2-3 peas (noticeable improvement 60-80% cases), Day 5-7 normal swimming restored.</li>
                  <li>• <strong>Success rate:</strong> 70-90% full recovery with fasting + pea treatment + diet change.</li>
                  <li>• <strong>Relapse risk:</strong> 20-30% if return to old feeding habits. Prevent: permanent diet change, sinking food, weekly fasting.</li>
                  <li>• <strong>Long-term:</strong> Fish can live full 10-20 year lifespan with no issues if diet maintained.</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">Good Prognosis (Bacterial Infection)</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Treatment timeline:</strong> 10-14 days antibiotics + pristine water. Improvement by Day 5-7 if working.</li>
                  <li>• <strong>Success rate:</strong> 50-70% if caught early (within 3-5 days of symptoms). Lower if delayed or severe infection.</li>
                  <li>• <strong>Permanent damage possible:</strong> 20-30% may have chronic mild buoyancy issues even after infection cleared. Manageable with shallow water.</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900">Guarded Prognosis (Genetic/Chronic)</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Timeline:</strong> Symptoms may improve/worsen cyclically. No "cure" - lifelong management.</li>
                  <li>• <strong>Lifespan:</strong> Fish can live 5-15+ years with accommodations (shallow water, hand-feeding, appropriate diet).</li>
                  <li>• <strong>Quality of life:</strong> 70-80% of chronic fish adapt well, eat normally, exhibit normal behaviors despite swimming abnormally.</li>
                  <li>• <strong>Intervention:</strong> Surgery possible ($500-$1500) but risky. Most owners choose management over surgery.</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900">Poor Prognosis (Severe Cases)</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Tumor/mass:</strong> If large tumor compressing swim bladder, fish may progressively worsen. Unable to eat = starvation. Humane euthanasia may be needed.</li>
                  <li>• <strong>Dropsy + swim bladder:</strong> If scales pineconing (dropsy) + upside-down = kidney/organ failure. 10-20% survival even with treatment. Often fatal within weeks.</li>
                  <li>• <strong>Severe injury:</strong> Punctured swim bladder from trauma rarely heals. Fish may need permanent shallow-water setup or euthanasia if suffering.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Fish Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/symptoms">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Betta Fish Not Eating</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Appetite loss causes and treatment in bettas
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/symptoms">
                <Card className="border-2 border-cyan-200 hover:border-cyan-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Fish Gasping at Surface</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Low oxygen and ammonia poisoning emergency
                    </p>
                    <div className="flex items-center text-cyan-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/symptoms">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                  View All Fish Symptoms →
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
            <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Goldfish Swimming Upside Down? Get Treatment Plan</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Tell our free AI veterinary assistant about your goldfish's symptoms, diet, tank size, water parameters, and how long this has been happening. 
                  Get instant emergency treatment protocol and long-term management strategies.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Swim Bladder Treatment Plan
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  ✓ Available 24/7 ✓ Fasting + Pea Protocol ✓ Water Quality Analysis ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
