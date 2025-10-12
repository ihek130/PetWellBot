import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Clock, Activity, ArrowRight, CheckCircle, XCircle, Thermometer } from "lucide-react";
import { Link } from "wouter";

export default function RabbitNotPooping12Hours() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <SEOHead 
        title="Rabbit Not Pooping for 12 Hours - GI Stasis Emergency Treatment | PetWellBot"
        description="Rabbit stopped pooping? This is GI stasis - a FATAL emergency. Learn emergency signs, causes (pain, diet, hairballs), critical home care, and why rabbits die within 24-48 hours without treatment."
        keywords="rabbit not pooping, rabbit GI stasis, rabbit gastrointestinal stasis, rabbit emergency, rabbit stopped eating, rabbit ileus"
        canonicalUrl="https://petwellbot.com/rabbit-not-pooping-12-hours"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Small Pet Symptoms", href: "/symptoms" },
              { label: "Rabbit Not Pooping for 12 Hours" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                🚨 EMERGENCY - See Vet IMMEDIATELY (Life-Threatening)
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Rabbit Not Pooping for 12 Hours: GI Stasis Emergency
            </h1>
            <p className="text-xl text-red-100 mb-6">
              This is GI STASIS (gastrointestinal stasis) - the #1 killer of rabbits. Rabbits MUST poop constantly (120-300 pellets/day). 
              12+ hours without poops = medical emergency requiring IMMEDIATE veterinary care. Death can occur within 24-48 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get Emergency AI Assessment
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('emergency-protocol')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-red-600"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Emergency Protocol
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning Section */}
      <section className="py-6 bg-red-50 border-y-2 border-red-300" id="emergency-protocol">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">🚨 THIS IS A MEDICAL EMERGENCY - Do NOT "Wait and See"</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>No poops for 12+ hours</strong> = GI stasis until proven otherwise</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Not eating or very little</strong> (rabbits must eat constantly)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Hunched, pressed belly to floor, grinding teeth</strong> (PAIN signs)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Bloated, hard, painful abdomen</strong> (gas buildup = life-threatening)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Lethargic, not moving, eyes half-closed</strong></span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Cold ears/feet, weak, collapsing</strong> (shock = critical)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* What is GI Stasis */}
        <Card className="border-red-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-red-600" />
              What is GI Stasis and Why It's Fatal
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900 mb-2">🔴 GI Stasis Definition</h3>
                <p className="text-sm text-gray-700">
                  <strong>Gastrointestinal Stasis (Ileus):</strong> The digestive system STOPS moving. Food/hair/gas gets stuck in stomach/intestines. 
                  Bacteria ferment trapped contents → produces toxic gas → bloats stomach → compresses organs → causes severe pain, shock, organ failure, death.
                </p>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">⏱️ Why It's So Deadly (Death Timeline)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Rabbit digestive systems are DESIGNED for constant movement. Food should pass through in 4-5 hours. Normal rabbits poop 120-300 pellets daily (every 10-30 minutes when awake).
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>0-6 hours:</strong> GI tract slows, rabbit eats less, fewer poops</li>
                  <li>• <strong>6-12 hours:</strong> Complete stasis, no poops, gas builds up, pain starts</li>
                  <li>• <strong>12-24 hours:</strong> Severe bloating, toxic gas, organ compression, critical condition</li>
                  <li>• <strong>24-48 hours:</strong> Shock, organ failure, death (even with treatment, survival drops to 30-50%)</li>
                  <li>• <strong>&lt;12 hours:</strong> Best survival rate (70-90% with aggressive treatment)</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">💀 Why "Wait and See" is Fatal</h3>
                <p className="text-sm text-gray-700">
                  Rabbits can't vomit (no gag reflex). Gas/food can ONLY exit through intestines. If GI tract stops, there's NO relief valve. 
                  Pressure builds until stomach ruptures or rabbit dies from shock/organ failure. Every hour you wait = lower survival chance.
                </p>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">🩺 #1 Emergency in Rabbits</h3>
                <p className="text-sm text-gray-700">
                  GI stasis is THE most common emergency seen by rabbit vets. It's the leading cause of death in pet rabbits. 
                  More common than you think - affects 50%+ of rabbits at some point. ALWAYS requires immediate vet care.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Causes */}
        <Card className="border-red-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12 Common Causes of GI Stasis in Rabbits
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Pain (ANY Source) - MOST COMMON TRIGGER</h3>
                <p className="text-sm text-gray-700 mb-1">Dental disease (overgrown teeth, abscesses), arthritis, urinary tract infection, injury. Pain → rabbit stops eating → GI stasis develops within 6-12 hours. Vicious cycle.</p>
                <p className="text-xs text-red-700"><strong>Why pain causes stasis:</strong> Rabbits in pain stop eating/moving. No food intake = no GI motility = stasis. Must treat BOTH pain AND stasis simultaneously. Common in older rabbits (5+ years) with dental/arthritis issues.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Inadequate Fiber (NOT ENOUGH HAY)</h3>
                <p className="text-sm text-gray-700 mb-1">Hay MUST be 80-90% of diet. Fiber keeps GI tract moving. All-pellet diet, too many treats (carrots, fruits), not enough hay = slow GI motility = stasis.</p>
                <p className="text-xs text-orange-700"><strong>Prevention:</strong> UNLIMITED hay 24/7 (timothy, orchard grass, meadow). Pellets should be 5% of diet (1/4 cup daily for 5-6 lb rabbit). Veggies 10-15%. Treats rare. Hay intake determines GI health.</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Hairballs (Trichobezoars)</h3>
                <p className="text-sm text-gray-700 mb-1">Unlike cats, rabbits can't vomit hairballs. Ingested fur accumulates in stomach, mixes with food, forms mass that blocks GI tract. Worse during molting season (spring/fall).</p>
                <p className="text-xs text-yellow-700"><strong>Prevention:</strong> Daily brushing (especially long-haired breeds), unlimited hay (fiber pushes hair through), papaya enzyme tablets (helps break down hair). Angora/Lionhead rabbits highest risk.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Stress</h3>
                <p className="text-sm text-gray-700 mb-1">Loud noises, predator animals (dogs/cats), moving, new environment, vet visit, changes in routine. Stress → stops eating → stasis. Rabbits are prey animals, easily stressed.</p>
                <p className="text-xs text-green-700"><strong>Common scenarios:</strong> Post-surgery (anesthesia + stress), holiday fireworks, home renovations, new pet, owner vacation. Monitor closely during stressful times. Offer favorite treats, keep routine consistent.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Dehydration</h3>
                <p className="text-sm text-gray-700 mb-1">Water bottle malfunction, rabbit doesn't drink enough, hot weather. Dehydration → dry GI contents → slowed motility → impaction/stasis.</p>
                <p className="text-xs text-blue-700"><strong>Check daily:</strong> Water bottle works (press ball to ensure water flows). Offer water bowl in addition to bottle (some rabbits prefer bowls). Fresh water 2x daily. In hot weather, add ice cubes.</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Lack of Exercise</h3>
                <p className="text-sm text-gray-700 mb-1">Cage-confined rabbits (no exercise time) have slower GI motility. Movement stimulates intestinal contractions. Obesity worsens risk.</p>
                <p className="text-xs text-purple-700"><strong>Prevention:</strong> Minimum 3-4 hours daily exercise outside cage in rabbit-proofed area. Free-roam is ideal. Running, jumping, binkying = healthy GI tract. Overweight rabbits need gradual exercise increase + diet change.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Foreign Object Ingestion</h3>
                <p className="text-sm text-gray-700 mb-1">Carpet fibers, plastic, rubber, fabric ingested while free-roaming. Objects block intestines. Rabbits chew EVERYTHING - must rabbit-proof home.</p>
                <p className="text-xs text-pink-700"><strong>High-risk items:</strong> Carpet (especially loops), cardboard (OK in moderation), plastic bags, rubber toys, towels/blankets. Provide safe chews (willow, apple wood, hay-based toys). Supervise during exercise time.</p>
              </div>

              <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50">
                <h3 className="font-bold text-gray-900">#8 Post-Surgical/Anesthesia</h3>
                <p className="text-sm text-gray-700 mb-1">Anesthesia slows GI motility. Common after spay/neuter, dental surgery, any procedure. Must closely monitor for 48 hours post-op.</p>
                <p className="text-xs text-indigo-700"><strong>Post-op protocol:</strong> Force-feed if not eating within 6 hours, pain medication critical, offer favorite treats, massage abdomen gently. Experienced rabbit vet knows to give gut motility drugs (metoclopramide) after surgery.</p>
              </div>

              <div className="p-3 border-l-4 border-teal-500 bg-teal-50">
                <h3 className="font-bold text-gray-900">#9 Sudden Diet Change</h3>
                <p className="text-sm text-gray-700 mb-1">Switching hay type, new pellet brand, introducing new vegetables too quickly. Disrupts gut bacteria balance → GI upset → stasis.</p>
                <p className="text-xs text-teal-700"><strong>Safe transitions:</strong> Change diet gradually over 7-10 days. Mix old/new food, increasing new portion daily. New veggies: introduce one at a time, small amounts, monitor poops.</p>
              </div>

              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#10 Extreme Temperatures</h3>
                <p className="text-sm text-gray-700 mb-1">Heat over 80°F (rabbits overheat easily), cold below 50°F. Temperature stress → decreased appetite → stasis.</p>
                <p className="text-xs text-red-700"><strong>Ideal:</strong> 60-70°F. Summer: fans, frozen water bottles in cage, tile for laying on, shade. Winter: extra hay for burrowing, insulated sleeping area, bring indoors if outdoor rabbit.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#11 Infections (E. cuniculi, Pasteurella)</h3>
                <p className="text-sm text-gray-700 mb-1">Parasitic/bacterial infections cause systemic illness → appetite loss → stasis. E. cuniculi affects nervous system + kidneys. Pasteurella causes respiratory infections.</p>
                <p className="text-xs text-orange-700"><strong>Signs:</strong> Head tilt (E. cuniculi), sneezing/nasal discharge (Pasteurella), weight loss, lethargy. Requires antibiotics + supportive care. Stasis is secondary complication.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#12 Bladder Sludge/Stones</h3>
                <p className="text-sm text-gray-700 mb-1">Calcium deposits in bladder cause pain when urinating. Rabbit associates pain with eating (pain happens after eating/drinking) → stops eating → stasis.</p>
                <p className="text-xs text-gray-700"><strong>Signs:</strong> Thick/gritty white urine, straining to urinate, blood in urine. X-rays diagnose. Treatment: fluids, diet change (reduce alfalfa/calcium), pain meds. Surgery if large stones.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Home Care */}
        <Card className="border-red-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-red-600" />
              Emergency Home Care WHILE Getting to Vet (Critical Steps)
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3">⚠️ IMPORTANT: Home care is NOT substitute for vet. These steps keep rabbit alive until you reach emergency vet.</h3>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Step-by-Step Emergency Protocol:</h3>
                
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 border-l-4 border-red-500">
                    <h4 className="font-medium text-gray-900 mb-1">1️⃣ HEAT (Priority #1 - Prevents Shock)</h4>
                    <p className="text-sm text-gray-700">
                      Sick rabbits can't regulate temperature. Body temp drops → shock → death. Use heating pad on LOW under HALF of carrier/cage (rabbit moves away if too hot). 
                      Target: 100-103°F body temp (normal). Feel ears - should be warm. Cold ears = hypothermia/shock.
                    </p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-orange-500">
                    <h4 className="font-medium text-gray-900 mb-1">2️⃣ HYDRATION (Critical - GI Stasis Causes Dehydration)</h4>
                    <p className="text-sm text-gray-700">
                      Syringe water/electrolytes every 1-2 hours. Use unflavored Pedialyte (diluted 50/50 with water) OR water + pinch of salt + tiny bit sugar. 
                      Amount: 5-10ml per hour for average 5 lb rabbit. Use 1ml syringe (NO needle), give at side of mouth SLOWLY. Don't force - aspiration risk.
                    </p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-yellow-500">
                    <h4 className="font-medium text-gray-900 mb-1">3️⃣ PAIN RELIEF (If You Have Rabbit-Safe Meds)</h4>
                    <p className="text-sm text-gray-700">
                      If vet previously prescribed meloxicam (Metacam), give dose NOW. Pain prevents eating. Breaking pain cycle is critical. 
                      DO NOT give human pain meds (acetaminophen/ibuprofen = TOXIC to rabbits). Baby gas drops (simethicone) OK: 1ml per 5 lbs every 1-2 hours (helps break up gas).
                    </p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-green-500">
                    <h4 className="font-medium text-gray-900 mb-1">4️⃣ FEEDING (Start Within 6 Hours)</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      If rabbit not eating on own, MUST syringe feed. Options (best to worst):
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Critical Care (Oxbow):</strong> $15-$25 - herbivore recovery food. Mix with water to pudding consistency. 10-15ml every 2-4 hours.</li>
                      <li>• <strong>Pellet slurry:</strong> Grind pellets, mix with water + mashed banana. Less ideal but works.</li>
                      <li>• <strong>Baby food:</strong> Pure vegetables (NO meat), mix with hay powder/pellets for fiber.</li>
                    </ul>
                    <p className="text-xs text-green-700 mt-2">YouTube "rabbit syringe feeding" for technique. Wrap rabbit in towel (burrito method), 1ml at a time, let swallow between.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-blue-500">
                    <h4 className="font-medium text-gray-900 mb-1">5️⃣ GENTLE BELLY MASSAGE &amp; EXERCISE</h4>
                    <p className="text-sm text-gray-700">
                      ONLY if abdomen soft (NOT if hard/bloated - could cause rupture). Massage belly in circular motions for 5 minutes every 2 hours. 
                      Encourage gentle movement (place in exercise area, offer favorite treats at distance to encourage hopping). Movement = GI stimulation.
                    </p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-purple-500">
                    <h4 className="font-medium text-gray-900 mb-1">6️⃣ MONITOR CLOSELY</h4>
                    <p className="text-sm text-gray-700">
                      Check for poops every hour. Count pellets. Even 2-3 small poops = improvement. Photo/video any poops to show vet (size, shape, texture matters). 
                      Monitor: temp (feel ears), hydration (skin tent test), energy level, abdomen size.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-orange-50 border border-orange-200 rounded">
                <p className="text-sm text-orange-900">
                  🚨 <strong>DO NOT DELAY VET VISIT:</strong> Even if rabbit starts pooping small amounts after home care, SEE VET SAME DAY. 
                  Underlying cause (pain, dental, foreign object) still exists. Without treating root cause, stasis will return within hours/days.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vet Treatment */}
        <Card className="border-red-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Thermometer className="h-6 w-6 text-red-600" />
              What to Expect at Emergency Vet Visit
            </h2>

            <div className="space-y-3">
              <div className="p-3 bg-gray-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900">Immediate Stabilization (First 30-60 min):</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-1">
                  <li>• <strong>Subcutaneous (SQ) fluids:</strong> $50-$100. Rehydration critical - GI stasis causes severe dehydration.</li>
                  <li>• <strong>Pain medication:</strong> Meloxicam injection $30-$60. MUST control pain to get rabbit eating again.</li>
                  <li>• <strong>Gut motility drugs:</strong> Metoclopramide/cisapride $30-$80. Stimulates GI contractions, gets things moving.</li>
                  <li>• <strong>Simethicone (gas relief):</strong> $20-$40. Breaks up gas bubbles, reduces bloating/pain.</li>
                  <li>• <strong>Heat support:</strong> Incubator/warming if hypothermic.</li>
                </ul>
              </div>

              <div className="p-3 bg-gray-50 border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900">Diagnostic Tests:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-1">
                  <li>• <strong>Physical exam:</strong> $60-$120. Palpate abdomen (check for masses, gas, pain), listen to gut sounds, check teeth, temp.</li>
                  <li>• <strong>X-rays (CRITICAL):</strong> $150-$300 (2-3 views). Shows: gas pattern, foreign objects, hairballs, impaction location. Determines treatment approach.</li>
                  <li>• <strong>Blood work:</strong> $150-$250 (if severely ill). Check organ function, electrolytes, infection markers.</li>
                  <li>• <strong>Total diagnostics:</strong> $360-$670 depending on tests needed</li>
                </ul>
              </div>

              <div className="p-3 bg-gray-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-gray-900">Treatment Options (Based on Severity):</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-1">
                  <li>• <strong>Outpatient (mild cases):</strong> Meds to go home, force-feed schedule, recheck in 12-24 hours. Cost: $200-$400 total.</li>
                  <li>• <strong>Hospitalization (moderate-severe):</strong> $100-$300/day. IV fluids, injectable meds every 4-6 hours, syringe feeding, 24-hour monitoring. Typical stay: 1-3 days.</li>
                  <li>• <strong>Surgery (if foreign object/severe impaction):</strong> $800-$2500. Exploratory to remove blockage. High-risk but sometimes only option.</li>
                  <li>• <strong>Treat underlying cause:</strong> Dental trim ($100-$200), pain management for arthritis, antibiotics for infection.</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <p className="text-sm text-red-900">
                  💰 <strong>Total Emergency GI Stasis Visit Cost:</strong> 
                  Outpatient: $400-$800. Hospitalization (2 days): $800-$1500. Surgery cases: $1500-$3500+. 
                  Must find RABBIT-SAVVY exotic vet - not all vets treat rabbits properly.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prognosis */}
        <Card className="border-red-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-red-600" />
              Prognosis & Recovery Timeline
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900">GOOD Prognosis (If Treated Early - Within 12 Hours):</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Survival rate:</strong> 70-90% with aggressive treatment started within 12 hours</li>
                  <li>• <strong>Recovery timeline:</strong> Small poops resume within 4-12 hours of treatment. Normal-sized poops by 24-48 hours. Full appetite returns in 2-4 days.</li>
                  <li>• <strong>Best outcomes:</strong> Young rabbits (&lt;5 years), mild stasis, no foreign objects, treated immediately</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">GUARDED Prognosis:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Delayed treatment (12-24 hours):</strong> 50-70% survival. Organ damage may have started.</li>
                  <li>• <strong>Recurrent stasis:</strong> Rabbits with chronic issues (dental disease, arthritis) may have repeat episodes every few months. Requires ongoing management.</li>
                  <li>• <strong>Post-surgical:</strong> 60-80% survival for foreign object removal. Depends on surgical complications.</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900">POOR Prognosis:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Critical delay (24+ hours):</strong> 20-40% survival. Severe organ damage, toxin buildup, shock.</li>
                  <li>• <strong>Complete obstruction:</strong> Foreign object fully blocking intestines. Surgery required, high mortality.</li>
                  <li>• <strong>Gastric rupture:</strong> If stomach tears from pressure. Usually fatal even with emergency surgery.</li>
                  <li>• <strong>Already in shock:</strong> Cold, unresponsive, weak pulse. Survival &lt;30% even with aggressive care.</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-blue-900">
                  <strong>Key Takeaway:</strong> TIME IS EVERYTHING. Every hour you wait = exponentially lower survival rate. 
                  12 hours no poops = EMERGENCY VET NOW. Don't wait until rabbit is collapsed/dying - by then it's often too late.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prevention */}
        <Card className="border-red-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prevention: Keeping Your Rabbit's GI Tract Healthy
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">✓ UNLIMITED HAY (Most Important)</h3>
                <p className="text-sm text-gray-700">Timothy, orchard grass, meadow hay available 24/7. NEVER empty. 80-90% of diet. Fiber = GI motility. Refill 2-3x daily.</p>
              </div>

              <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">✓ Limited Pellets</h3>
                <p className="text-sm text-gray-700">1/4 cup daily for 5-6 lb adult rabbit (Oxbow Adult Rabbit). Pellets should be SUPPLEMENT not main food. Too many pellets = obesity + low fiber = stasis risk.</p>
              </div>

              <div className="p-3 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 mb-2">✓ Fresh Vegetables Daily</h3>
                <p className="text-sm text-gray-700">2-3 cups leafy greens (romaine, cilantro, parsley, basil). Variety prevents boredom. Introduce new veggies slowly. NO iceberg lettuce (no nutrients).</p>
              </div>

              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">✓ Daily Exercise</h3>
                <p className="text-sm text-gray-700">Minimum 3-4 hours outside cage. Free-roam ideal. Running, jumping = GI motility. Overweight rabbits MUST exercise (obesity = major stasis risk).</p>
              </div>

              <div className="p-3 bg-pink-50 border-l-4 border-pink-500">
                <h3 className="font-bold text-pink-900 mb-2">✓ Fresh Water Always</h3>
                <p className="text-sm text-gray-700">Water bottle + bowl (choice). Check bottle works daily. Change water 2x daily. Dehydration = stasis trigger.</p>
              </div>

              <div className="p-3 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">✓ Regular Vet Checkups</h3>
                <p className="text-sm text-gray-700">Every 6-12 months with rabbit-savvy exotic vet. Dental exams, weight checks, early detection of arthritis/pain. Prevention saves lives.</p>
              </div>

              <div className="p-3 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900 mb-2">✓ Daily Monitoring</h3>
                <p className="text-sm text-gray-700">COUNT POOPS DAILY. Know your rabbit's normal (120-300/day). Check appetite, energy, litter box. Early detection = better prognosis.</p>
              </div>

              <div className="p-3 bg-indigo-50 border-l-4 border-indigo-500">
                <h3 className="font-bold text-indigo-900 mb-2">✓ Stress Reduction</h3>
                <p className="text-sm text-gray-700">Consistent routine, quiet environment, bonded pair (rabbits are social), gradual changes only. Stress = appetite loss = stasis.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Small Pet Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/guinea-pig-wheeking-constantly">
                <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Guinea Pig Wheeking Constantly</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Normal vs excessive vocalization causes
                    </p>
                    <div className="flex items-center text-amber-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/hamster-not-eating-drinking">
                <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Hamster Not Eating or Drinking</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Emergency causes and critical care
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
                <Button className="bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700">
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
            <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Rabbit Not Pooping? This is a MEDICAL EMERGENCY</h2>
                <p className="text-xl mb-6 text-red-100">
                  GI stasis kills rabbits within 24-48 hours. Tell our free AI veterinary assistant about the symptoms, duration, appetite, and behavior. 
                  Get instant emergency triage and critical home care steps while transporting to vet.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Emergency AI Assessment NOW
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-red-100">
                  ✓ Available 24/7 ✓ Emergency Triage Protocol ✓ Rabbit Specialist Knowledge ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
