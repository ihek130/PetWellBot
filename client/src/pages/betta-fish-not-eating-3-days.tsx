import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { AlertTriangle, Heart, Clock, Activity, ArrowRight, CheckCircle, XCircle, Thermometer } from "lucide-react";
import { Link } from "wouter";

export default function BettaFishNotEating3Days() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <SEOHead 
        title="Betta Fish Not Eating for 3 Days - Emergency Causes & Treatment | PetWellBot"
        description="Betta fish hasn't eaten in 3 days? Learn critical causes (constipation, swim bladder, parasites, poor water quality, stress) and how to save your betta with emergency treatment."
        keywords="betta fish not eating, betta won't eat, betta fish sick, betta constipation, swim bladder disease betta, betta parasites"
        canonicalUrl="https://petwellbot.com/betta-fish-not-eating-3-days"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Fish Symptoms", href: "/symptoms" },
              { label: "Betta Fish Not Eating for 3 Days" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                🚨 URGENT - Take Action Within 24-48 Hours
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Betta Fish Not Eating for 3 Days: Critical Causes & Emergency Care
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Bettas can survive 7-14 days without food, but 3+ days of appetite loss signals illness: constipation (#1 cause), swim bladder disease, parasites, poor water quality, or stress. 
              Immediate intervention prevents starvation and treats underlying condition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get Emergency AI Assessment
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('emergency-treatment')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Emergency Treatment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning Section */}
      <section className="py-6 bg-orange-50 border-y-2 border-orange-300" id="emergency-treatment">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">⚠️ Take Immediate Action If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Swimming upside down or sideways</strong> (swim bladder disease)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Bloated abdomen</strong> (constipation, dropsy, egg binding)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Lethargic, laying on bottom</strong> (severe illness, ammonia poisoning)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>White spots, fuzzy growth</strong> (ich, fungus, velvet)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Gasping at surface, labored breathing</strong> (low oxygen, gill parasites)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Pine-cone scales (raised outward)</strong> (dropsy - often fatal)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Why 3 Days Matters */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-blue-600" />
              Why 3 Days Without Eating is Critical
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">🐟 Bettas Can Survive Long Fasts, But...</h3>
                <p className="text-sm text-gray-700">
                  Healthy bettas can survive 7-14 days without food (wild bettas fast during dry season). However, 3+ days of refusal = underlying medical problem 90% of the time. 
                  Starvation isn't the immediate risk - the CAUSE of appetite loss is the danger.
                </p>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">⏱️ Timeline: When to Worry</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>1-2 days:</strong> Could be normal (picky eating, overfed recently, fasting). MONITOR.</li>
                  <li>• <strong>3-4 days:</strong> INVESTIGATE. Check water parameters, look for illness signs, try variety of foods.</li>
                  <li>• <strong>5-7 days:</strong> URGENT. Likely medical issue. Start treatment (constipation protocol, water changes).</li>
                  <li>• <strong>8-14 days:</strong> CRITICAL. Muscle wasting begins, immune system weakens. Professional help/euthanasia consideration if no improvement.</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">🔍 Key Difference: Picky vs Sick</h3>
                <p className="text-sm text-gray-700">
                  <strong>PICKY:</strong> Rejects pellets but accepts live/frozen food (bloodworms, brine shrimp). Active, swimming normally, bright colors.<br/>
                  <strong>SICK:</strong> Rejects ALL food including favorites. Lethargic, clamped fins, dull colors, hiding, abnormal swimming.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Causes */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10 Causes of Appetite Loss in Betta Fish
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Constipation (MOST COMMON - 40-50% of cases)</h3>
                <p className="text-sm text-gray-700 mb-1">Overfeeding, pellets expand in stomach, lack of fiber. Bloated abdomen, difficulty swimming, strings of poop attached to vent, or no poop at all.</p>
                <p className="text-xs text-red-700"><strong>Treatment:</strong> FAST 2-3 days (you're already there!), then feed 1-2 daphnia (natural laxative) or thawed frozen peas (remove shell, tiny piece). Epsom salt bath: 1 tsp/gallon for 10-15 min daily x 3 days. Improvement: poop within 24-48h, eating resumes day 4-5. <strong>Prevention:</strong> Feed only 2-3 pellets 1x daily, fast 1 day/week.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Swim Bladder Disease</h3>
                <p className="text-sm text-gray-700 mb-1">Constipation-related (compressed swim bladder), bacterial infection, birth defect. Swimming upside down, sideways, floating to surface, sinking to bottom, difficulty maintaining position.</p>
                <p className="text-xs text-orange-700"><strong>Treatment:</strong> If constipation-related (most common): Epsom salt bath + fasting (as above). If bacterial: aquarium salt (1 tsp/gallon) + antibiotics (API General Cure, Kanaplex). Lower water level (6" deep) so fish can reach surface easier. Recovery: 1-2 weeks if treatable. Some cases chronic/permanent. <strong>Cost:</strong> Epsom salt $5, medications $10-$25.</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Poor Water Quality (Ammonia/Nitrite Poisoning)</h3>
                <p className="text-sm text-gray-700 mb-1">No nitrogen cycle, infrequent water changes, overstocked tank. Ammonia burns gills, causes appetite loss, lethargy, gasping at surface, red/inflamed gills, rapid breathing.</p>
                <p className="text-xs text-yellow-700"><strong>Emergency:</strong> TEST WATER immediately (API Master Test Kit $25). Ammonia/nitrite &gt; 0 ppm = TOXIC. 50% water change NOW + daily 25% changes until 0 ppm. Add Seachem Prime (detoxifies ammonia temporarily). <strong>Long-term fix:</strong> Cycle tank (4-6 weeks), minimum 5-gallon tank, weekly 25% water changes. Fish should eat within 24-48h after water quality fixed.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Temperature Stress (Too Cold)</h3>
                <p className="text-sm text-gray-700 mb-1">Bettas are tropical - need 76-82°F. Below 74°F = metabolism slows dramatically, digestive system shuts down, immune suppression. Lethargic, bottom-sitting, won't eat.</p>
                <p className="text-xs text-green-700"><strong>Fix:</strong> Get aquarium heater ($15-$25 adjustable 25W for 5-10 gal). Gradually raise temp 2°F per day to 78-80°F. Fish should resume eating within 24-48h once warm. <strong>Note:</strong> Room temp water = too cold. Heater is NOT optional for bettas.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Internal Parasites (Worms, Hexamita)</h3>
                <p className="text-sm text-gray-700 mb-1">White stringy poop, bloating despite not eating, weight loss, sunken belly, lethargic. Common in wild-caught or feeder-fish-fed bettas.</p>
                <p className="text-xs text-blue-700"><strong>Treatment:</strong> API General Cure (metronidazole + praziquantel) 2 doses 48h apart. Fritz ParaCleanse alternative. Feed medicated food if eating (Seachem Metronidazole Focus mixed in food). Continue 10-14 days. Improvement: normal poop returns, appetite increases within 3-5 days. <strong>Cost:</strong> $10-$20.</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Ich (White Spot Disease)</h3>
                <p className="text-sm text-gray-700 mb-1">Parasite causes white salt-grain spots on body/fins, flashing (rubbing on decor), clamped fins, lethargy, appetite loss. Triggered by stress/temp fluctuations.</p>
                <p className="text-xs text-purple-700"><strong>Treatment:</strong> Raise temp to 86°F (ich can't reproduce), aquarium salt (1 tsp/gallon), Ich-X or Super Ich Cure medication. Treat entire tank 7-14 days (ich life cycle). Daily water changes. Improvement: spots fall off day 3-5, eating resumes day 5-7. <strong>Cost:</strong> Medications $8-$15.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Velvet Disease (Gold Dust Disease)</h3>
                <p className="text-sm text-gray-700 mb-1">Parasitic infection. Fine gold/rust dust on body (flashlight at angle to see), clamped fins, rapid breathing, flashing, hiding, won't eat. More deadly than ich if untreated.</p>
                <p className="text-xs text-pink-700"><strong>Treatment:</strong> Dark tank (cover completely - velvet needs light), raise temp to 82-86°F, copper-based medication (Cupramine) OR Ich-X. Salt optional. Treat 10-14 days. Very contagious - treat entire tank. Recovery: 5-7 days, appetite returns day 7-10. <strong>Cost:</strong> $12-$25.</p>
              </div>

              <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50">
                <h3 className="font-bold text-gray-900">#8 Dropsy (Kidney Failure/Bacterial Infection)</h3>
                <p className="text-sm text-gray-700 mb-1">Pine-cone appearance (scales raised outward from fluid buildup), bloated body, bulging eyes, lethargy, won't eat. Often fatal - organ failure.</p>
                <p className="text-xs text-indigo-700"><strong>Treatment:</strong> Kanaplex + Metroplex in tank (Seachem). Epsom salt bath 1 tsp/gallon (reduces swelling). Prognosis: 10-30% survival. If caught VERY early, 50% chance. Late stage = euthanasia recommended (clove oil). <strong>Cost:</strong> $15-$30 for meds.</p>
              </div>

              <div className="p-3 border-l-4 border-teal-500 bg-teal-50">
                <h3 className="font-bold text-gray-900">#9 Stress (New Tank, Tank Mates, Environment)</h3>
                <p className="text-sm text-gray-700 mb-1">Just brought home, tank moved, aggressive tank mates, strong filter current, bright lights, no hiding spots. Stressed bettas hide, don't eat.</p>
                <p className="text-xs text-teal-700"><strong>Fix:</strong> Dim lights, add hiding caves/plants (silk or live), baffle filter (pantyhose over intake), remove aggressive fish. Give 3-5 days to acclimate. Feed high-value treats (live/frozen bloodworms) to tempt. Most resume eating within 5-7 days once stress reduced. If &gt;7 days, likely medical not just stress.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#10 Old Age / Tumor</h3>
                <p className="text-sm text-gray-700 mb-1">Bettas live 3-5 years (pet store bettas already 6-12 months old). Elderly bettas naturally eat less, slow down. Tumors (lumps) can block digestive tract or cause pain.</p>
                <p className="text-xs text-gray-700"><strong>Management:</strong> Offer variety (live foods easier to eat), smaller meals, pristine water quality. If tumor growing/fish suffering, consider euthanasia (clove oil method). Quality of life focus - some bettas naturally fade in old age.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Treatment Protocol */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              Emergency Treatment Protocol: Step-by-Step
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3">STEP 1: Test Water Parameters (FIRST PRIORITY)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Get API Master Test Kit</strong> ($25 - essential for fish keeping). Test ammonia, nitrite, nitrate, pH.</li>
                  <li>• <strong>Safe parameters:</strong> Ammonia 0 ppm, Nitrite 0 ppm, Nitrate &lt;20 ppm, pH 6.5-8.0, Temp 76-82°F</li>
                  <li>• <strong>If ANY parameter off:</strong> 50% water change immediately. Daily 25% changes until corrected.</li>
                  <li>• <strong>Add Seachem Prime:</strong> Detoxifies ammonia/nitrite temporarily (buys time while cycling).</li>
                  <li>• <strong>90% of betta problems = water quality.</strong> Fix this first before treating anything else.</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 border-2 border-orange-300 rounded-lg">
                <h3 className="font-bold text-orange-900 mb-3">STEP 2: Constipation Treatment (Most Common Cause)</h3>
                <p className="text-sm text-gray-700 mb-2"><strong>You've already fasted 3 days - perfect start!</strong></p>
                <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                  <li><strong>Epsom salt bath:</strong> Separate container, 1 tsp Epsom salt per 1 gallon dechlorinated water, same temp as tank. Fish in bath 10-15 minutes, once daily for 3 days. Acts as laxative.</li>
                  <li><strong>Feed daphnia or pea:</strong> After 3rd Epsom bath, offer 1-2 live/frozen daphnia (natural laxative) OR tiny piece thawed frozen pea (remove shell). Do NOT feed pellets yet.</li>
                  <li><strong>Watch for poop:</strong> Should see poop within 24-48h. May be large clump (backed up waste).</li>
                  <li><strong>Resume feeding day 5-6:</strong> Start with 1 pellet, increase to 2-3 pellets daily. Fast 1 day per week going forward.</li>
                </ol>
              </div>

              <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-3">STEP 3: Temperature Check</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Get aquarium thermometer</strong> ($3-$5). Check actual water temp.</li>
                  <li>• <strong>Below 76°F?</strong> Get adjustable heater ($15-$25). Gradually raise to 78-80°F over 2-3 days.</li>
                  <li>• <strong>Cold bettas won't eat.</strong> Metabolism too slow to digest food. Warming often solves problem alone.</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3">STEP 4: Food Variety / Temptation</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Live foods:</strong> Live/frozen bloodworms, brine shrimp, daphnia (irresistible to bettas)</li>
                  <li>• <strong>Pellet alternatives:</strong> Try different brands (Hikari Bio-Gold, Northfin Betta Bits, Fluval Bug Bites)</li>
                  <li>• <strong>Garlic soak:</strong> Soak pellets in garlic juice (Seachem GarlicGuard) - stimulates appetite, anti-parasitic</li>
                  <li>• <strong>Feed small amounts:</strong> 1-2 pellets only. Remove uneaten food after 5 minutes.</li>
                  <li>• <strong>If refuses ALL food:</strong> Medical issue, proceed to Step 5.</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3">STEP 5: Medication (If Water Good, Constipation Treated, Still Not Eating)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Visible parasites/ich/velvet:</strong> Treat with appropriate medication (see causes above)</li>
                  <li>• <strong>White stringy poop:</strong> API General Cure (internal parasites)</li>
                  <li>• <strong>Bloating + pine-cone scales:</strong> Kanaplex + Metroplex (dropsy - guarded prognosis)</li>
                  <li>• <strong>No obvious cause:</strong> General antibiotic (Seachem ParaGuard) + General Cure combo (broad spectrum)</li>
                  <li>• <strong>Always treat full course:</strong> Don't stop early even if eating resumes.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Foods to Try */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Best Foods to Tempt Non-Eating Betta (In Order of Success)
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900 mb-2">🥇 #1 Live Bloodworms</h3>
                <p className="text-sm text-gray-700">95% success rate tempting sick bettas. Wiggling triggers predatory instinct. Available at fish stores ($3-$5/portion). Freeze extras.</p>
              </div>

              <div className="p-3 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">🥈 #2 Frozen Bloodworms</h3>
                <p className="text-sm text-gray-700">90% success. Thaw in tank water, drop in front of fish. High protein, easy to digest. Hikari or Omega One brands ($4-$8/cube pack).</p>
              </div>

              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">🥉 #3 Frozen Brine Shrimp</h3>
                <p className="text-sm text-gray-700">85% success. Smaller than bloodworms, easier for weak bettas. Good for constipation (less dense than pellets). Hikari brand best.</p>
              </div>

              <div className="p-3 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">#4 Frozen Daphnia</h3>
                <p className="text-sm text-gray-700">80% success + LAXATIVE effect. Perfect for constipated bettas. Small, easy to eat. Hikari Bio-Pure Daphnia ($5-$8).</p>
              </div>

              <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">#5 Freeze-Dried Bloodworms</h3>
                <p className="text-sm text-gray-700">70% success. Must soak 5 min before feeding (prevent bloating). More convenient than frozen. Omega One brand ($6-$10).</p>
              </div>

              <div className="p-3 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 mb-2">#6 High-Quality Pellets</h3>
                <p className="text-sm text-gray-700">60% success. Try Hikari Bio-Gold, Northfin Betta Bits, Fluval Bug Bites. Soak in garlic juice. Small pellets (2-3 max).</p>
              </div>

              <div className="p-3 bg-pink-50 border-l-4 border-pink-500">
                <h3 className="font-bold text-pink-900 mb-2">#7 Thawed Frozen Pea (Constipation)</h3>
                <p className="text-sm text-gray-700">50% acceptance. TINY piece (1/4 pea), shell removed. Acts as laxative. Feed AFTER 3-day fast for constipation.</p>
              </div>

              <div className="p-3 bg-gray-50 border-l-4 border-gray-500">
                <h3 className="font-bold text-gray-900 mb-2">❌ AVOID During Illness</h3>
                <p className="text-sm text-gray-700">Flakes (poor nutrition), generic pellets (low quality), mammal meat (can't digest), bread (toxic). Stick to species-appropriate foods.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recovery Timeline */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              Expected Recovery Timeline by Cause
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900">GOOD Prognosis (85-95% Recovery)</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Constipation:</strong> Poop within 24-48h of Epsom treatment. Eating resumes day 5-6. Full recovery 1 week.</li>
                  <li>• <strong>Poor water quality:</strong> Eating resumes within 24-48h after water corrected. Energy returns 3-5 days.</li>
                  <li>• <strong>Temperature too cold:</strong> Eating resumes 24-48h after reaching 78-80°F. Immediate improvement.</li>
                  <li>• <strong>Stress/new tank:</strong> Eating resumes 5-7 days. Some take 2 weeks to settle. Patience key.</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">GUARDED Prognosis (50-70% Recovery)</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Swim bladder (constipation-related):</strong> Improvement 1-2 weeks. Some cases chronic but manageable.</li>
                  <li>• <strong>Ich:</strong> 70-90% survival with treatment. Eating resumes day 5-7. Full recovery 2 weeks.</li>
                  <li>• <strong>Internal parasites:</strong> 60-80% recovery. Improvement 5-7 days, full course 10-14 days treatment.</li>
                  <li>• <strong>Velvet:</strong> 50-70% survival (deadly if untreated). Eating day 7-10. Full recovery 2-3 weeks.</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900">POOR Prognosis (10-30% Recovery)</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Dropsy (late stage):</strong> 10-30% survival even with treatment. If pine-cone scales present, often too late.</li>
                  <li>• <strong>Severe ammonia poisoning:</strong> Permanent gill damage possible. 40-60% survival depending on exposure.</li>
                  <li>• <strong>Old age/tumor:</strong> Palliative care only. Focus on quality of life, humane euthanasia if suffering.</li>
                  <li>• <strong>No eating 14+ days:</strong> Severe muscle wasting, organ failure. Often too weak to recover even if cause treated.</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-blue-900">
                  <strong>Key Timeline:</strong> Day 3-5 most critical for treatment. If eating resumes by day 7-10, good prognosis. 
                  No improvement by day 14 = severe condition, consider euthanasia vs continued suffering. Don't wait - treat NOW at day 3 mark.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prevention */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prevention: Keep Your Betta Eating Healthy
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">✓ Proper Tank Setup</h3>
                <p className="text-sm text-gray-700"><strong>Minimum 5 gallons</strong> (larger better), filter (baffled for gentle flow), heater 76-82°F, thermometer, hiding spots (caves, plants). Bowls/tiny tanks = constant illness.</p>
              </div>

              <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">✓ Water Quality Maintenance</h3>
                <p className="text-sm text-gray-700">Weekly 25% water changes, gravel vacuum, test kit monthly checks. Cycle tank before adding fish (4-6 weeks). Dechlorinate tap water (Seachem Prime).</p>
              </div>

              <div className="p-3 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 mb-2">✓ Feeding Protocol</h3>
                <p className="text-sm text-gray-700">2-3 high-quality pellets ONCE daily. Fast 1 day/week (prevents constipation). Occasional treats (bloodworms 1-2x/week). Remove uneaten food after 5 minutes.</p>
              </div>

              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">✓ Diet Variety</h3>
                <p className="text-sm text-gray-700">Rotate pellet brands (Hikari, Northfin, Fluval), frozen foods weekly (bloodworms, brine shrimp, daphnia). Prevents nutritional deficiencies, boredom.</p>
              </div>

              <div className="p-3 bg-pink-50 border-l-4 border-pink-500">
                <h3 className="font-bold text-pink-900 mb-2">✓ Stress Reduction</h3>
                <p className="text-sm text-gray-700">No aggressive tank mates (bettas prefer solo or peaceful community), plants/hides, gentle filter, consistent lighting (8-10h/day), avoid sudden changes.</p>
              </div>

              <div className="p-3 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">✓ Daily Observation</h3>
                <p className="text-sm text-gray-700">Watch for behavior changes (hiding, clamped fins, color fading), monitor eating (count pellets consumed), check poop (normal = brown, firm). Catch problems early.</p>
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
            
            <div className="flex justify-center mb-8">
              <Link href="/goldfish-swimming-upside-down">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer h-full max-w-md">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Goldfish Swimming Upside Down</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Swim bladder disease causes and treatment
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
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
                <h2 className="text-3xl font-bold mb-4">Betta Not Eating for 3 Days? Get Emergency Guidance</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Tell our free AI veterinary assistant about your betta's symptoms, water parameters, tank setup, and behavior. 
                  Get instant emergency assessment and step-by-step treatment protocol tailored to your situation.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Emergency Betta Care Plan
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  ✓ Available 24/7 ✓ Fish Health Specialist ✓ Treatment Protocols ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
