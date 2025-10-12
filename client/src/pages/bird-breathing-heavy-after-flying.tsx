import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Clock, Activity, ArrowRight, CheckCircle, XCircle, Wind } from "lucide-react";
import { Link } from "wouter";

export default function BirdBreathingHeavyAfterFlying() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
      <SEOHead 
        title="Bird Breathing Heavy After Flying - Normal vs Emergency Respiratory Patterns | PetWellBot"
        description="Bird breathing heavy after flying? Learn normal recovery breathing (2-10 minutes), emergency signs (tail bobbing, open mouth, gasping), and when heavy breathing means respiratory disease."
        keywords="bird breathing heavy, bird panting after flying, bird tail bobbing, bird respiratory distress, bird breathing fast, parrot breathing heavy"
        canonicalUrl="https://petwellbot.com/bird-breathing-heavy-after-flying"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-sky-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Bird Symptoms", href: "/symptoms" },
              { label: "Bird Breathing Heavy After Flying" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                👁️ MONITOR - Normal vs Abnormal Assessment
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bird Breathing Heavy After Flying: Normal Recovery vs Respiratory Emergency
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Heavy breathing after flight is normal IF it stops within 2-10 minutes. Continued labored breathing, tail bobbing, open-mouth breathing, or gasping signals serious respiratory disease requiring emergency vet care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Breathing Assessment
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('normal-vs-abnormal')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600"
              >
                <Wind className="w-5 h-5 mr-2" />
                Normal vs Emergency Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning Section */}
      <section className="py-6 bg-red-50 border-y-2 border-red-300" id="normal-vs-abnormal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">🚨 EMERGENCY VET NOW If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Breathing doesn't normalize in 10 minutes</strong> after stopping flight</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Tail bobbing:</strong> Tail pumps up/down with each breath (air sac disease)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Open-mouth breathing</strong> while at rest (NOT immediately after exercise)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Gasping, wheezing, clicking sounds</strong> when breathing</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Labored breathing at rest or with minimal activity</strong></span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Blue/purple tongue or feet</strong> (cyanosis = lack of oxygen)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Normal vs Abnormal Comparison */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-blue-600" />
              Normal Post-Flight Breathing vs Emergency Respiratory Distress
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  NORMAL Post-Flight Recovery
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ <strong>Duration:</strong> Breathing returns to normal within 2-10 minutes of stopping flight</li>
                  <li>✓ <strong>Beak:</strong> Closed or slightly open immediately after intense flight, closes quickly</li>
                  <li>✓ <strong>Body position:</strong> Upright, alert, wings may be held slightly away from body to cool down</li>
                  <li>✓ <strong>Breathing pattern:</strong> Fast but rhythmic, no wheezing/clicking sounds</li>
                  <li>✓ <strong>Tail:</strong> Minimal to no tail bobbing (maybe slight bob immediately after, stops quickly)</li>
                  <li>✓ <strong>Color:</strong> Normal pink tongue/feet (good oxygen)</li>
                  <li>✓ <strong>Context:</strong> Just flew laps around room, played intensely, or had long flight session</li>
                  <li>✓ <strong>Recovery:</strong> Bird resumes normal activity (preening, eating, vocalizing) within 10-15 minutes</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  ABNORMAL (Emergency)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✗ <strong>Duration:</strong> Labored breathing continues 10+ minutes after minimal/no activity</li>
                  <li>✗ <strong>Beak:</strong> Open-mouth breathing while at rest, doesn't close</li>
                  <li>✗ <strong>Body position:</strong> Hunched, fluffed feathers, head down, eyes closed (severe distress)</li>
                  <li>✗ <strong>Breathing pattern:</strong> Irregular, gasping, wheezing, clicking/popping sounds</li>
                  <li>✗ <strong>Tail:</strong> Pronounced tail bobbing with EVERY breath (air sac disease sign)</li>
                  <li>✗ <strong>Color:</strong> Blue/purple tongue, feet, or cere (cyanosis = oxygen deprivation)</li>
                  <li>✗ <strong>Context:</strong> Heavy breathing with NO recent exercise, or minimal activity triggers distress</li>
                  <li>✗ <strong>Other signs:</strong> Nasal discharge, voice change/loss, sitting on floor, lethargy</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
              <p className="text-yellow-900 font-medium">
                ⏱️ <strong>THE 10-MINUTE RULE:</strong> If your bird's breathing hasn't returned to normal within 10 minutes of stopping flight/exercise, 
                this is ABNORMAL and requires emergency veterinary evaluation. Don't wait to see if it gets better.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Understanding Bird Respiratory System */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Birds Breathe Differently: The Air Sac System
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">🫁 Unique Respiratory Anatomy</h3>
                <p className="text-sm text-gray-700">
                  Unlike mammals, birds have <strong>air sacs</strong> (9 total in most species) in addition to lungs. Air flows in ONE DIRECTION through the lungs (not in/out like mammals). 
                  This makes birds incredibly efficient at oxygen extraction - critical for flight.
                </p>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">✈️ Why Flight is So Demanding</h3>
                <p className="text-sm text-gray-700">
                  Flight requires MASSIVE oxygen consumption (up to 20x resting metabolism). Heart rate can jump from 150-300 bpm at rest to 600-1000 bpm during flight. 
                  Respiratory rate increases from 15-40 bpm at rest to 100+ bpm during intense flight. Post-flight panting is NORMAL recovery.
                </p>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">⚠️ Why Respiratory Disease is So Dangerous in Birds</h3>
                <p className="text-sm text-gray-700">
                  Air sacs have NO BLOOD SUPPLY and don't produce immune cells. Bacteria/fungus can grow unchecked. 
                  By the time you see symptoms (labored breathing, tail bobbing), the infection is often ADVANCED. Birds hide illness until 70-80% compromised.
                </p>
              </div>

              <div className="p-4 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 mb-2">🌡️ Overheating is Real (Especially in Small Birds)</h3>
                <p className="text-sm text-gray-700">
                  Birds can't sweat. They cool down through open-mouth breathing and holding wings away from body. 
                  Small birds (budgies, canaries, finches) overheat faster than large parrots. Room over 85°F + exercise = heatstroke risk.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Causes of Abnormal Breathing */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10 Medical Causes of Labored Breathing After Minimal Activity
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Aspergillosis (Fungal Air Sac Infection) - MOST COMMON</h3>
                <p className="text-sm text-gray-700 mb-1">Aspergillus fungus grows in air sacs. Causes labored breathing, tail bobbing, exercise intolerance, voice change. African greys, Amazons, cockatoos most susceptible. Chronic exposure to moldy environment.</p>
                <p className="text-xs text-red-700"><strong>Diagnosis:</strong> X-rays show air sac cloudiness, endoscopy, blood test. <strong>Treatment:</strong> Antifungals (itraconazole, voriconazole) 6-12 months $500-$2000. Air sac flushing/surgery in severe cases $1000-$3000. Prognosis: Guarded, often chronic.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Bacterial Pneumonia/Air Sacculitis</h3>
                <p className="text-sm text-gray-700 mb-1">Bacterial infection (Chlamydia psittaci, E. coli, Mycoplasma) in lungs/air sacs. Rapid onset, severe respiratory distress, nasal discharge, lethargy, fluffed feathers.</p>
                <p className="text-xs text-orange-700"><strong>Treatment:</strong> Aggressive antibiotics (doxycycline, enrofloxacin) 10-21 days $200-$600. Nebulization therapy, oxygen support. Recovery 60-80% if treated early.</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Heart Disease (Congestive Heart Failure)</h3>
                <p className="text-sm text-gray-700 mb-1">Common in older birds (10+ years), obesity, atherosclerosis. Weak heart can't pump efficiently, fluid backs up into lungs. Exercise intolerance, breathing difficulty after minimal activity, abdominal distension.</p>
                <p className="text-xs text-yellow-700"><strong>Diagnosis:</strong> X-rays (enlarged heart, fluid), echocardiogram $300-$600. <strong>Treatment:</strong> Furosemide (diuretic), enalapril, low-sodium diet. Chronic management, not curable. Median survival 6-24 months.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Obesity/Deconditioning</h3>
                <p className="text-sm text-gray-700 mb-1">Overweight birds (all-seed diet, no exercise) have reduced lung capacity, fat compresses air sacs. Out of shape from cage confinement. Gets winded quickly.</p>
                <p className="text-xs text-green-700"><strong>Solution:</strong> Gradual weight loss (convert to pellets, limit seeds/nuts), increase out-of-cage exercise slowly. Target: lose 5-10% body weight over 4-8 weeks. Improvement in breathing within 2-4 weeks of starting program.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Tracheal Obstruction/Tumor</h3>
                <p className="text-sm text-gray-700 mb-1">Thyroid tumor compressing trachea (budgies), foreign body, granuloma. Breathing difficulty, voice change/loss, wheezing, head/neck stretching to open airway.</p>
                <p className="text-xs text-blue-700"><strong>Diagnosis:</strong> X-rays, endoscopy $200-$500. <strong>Treatment:</strong> Surgery $800-$2500 (risky), hormone therapy (Lupron) for thyroid tumors $100-$200/month, radioactive iodine $1500-$3000. Prognosis depends on cause.</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Anemia (Low Red Blood Cells)</h3>
                <p className="text-sm text-gray-700 mb-1">Reduces oxygen-carrying capacity. Causes: internal bleeding, heavy metal toxicity (lead/zinc), chronic disease, poor nutrition. Bird tires easily, pale mucous membranes, weakness.</p>
                <p className="text-xs text-purple-700"><strong>Diagnosis:</strong> Blood work (CBC shows low hematocrit/hemoglobin) $150-$250. <strong>Treatment:</strong> Address underlying cause, iron supplements, vitamin B12, blood transfusion in severe cases. Recovery 2-6 weeks.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Toxic Fume Exposure (PTFE/Teflon, Smoke)</h3>
                <p className="text-sm text-gray-700 mb-1">Overheated non-stick cookware releases PTFE fumes = FATAL to birds (even from different room). Candles, air fresheners, self-cleaning ovens, smoke also toxic. Acute severe respiratory distress, can die within minutes to hours.</p>
                <p className="text-xs text-pink-700"><strong>Emergency:</strong> Fresh air immediately, oxygen therapy, supportive care. Survival: 30-50% depending on exposure severity. Prevention critical - NO Teflon in bird-safe homes.</p>
              </div>

              <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50">
                <h3 className="font-bold text-gray-900">#8 Airsacculitis from Egg Yolk Peritonitis (Females)</h3>
                <p className="text-sm text-gray-700 mb-1">Egg yolk ruptures into abdomen, causes infection that spreads to air sacs. Abdominal swelling, labored breathing, lethargy, tail bobbing. Emergency condition.</p>
                <p className="text-xs text-indigo-700"><strong>Treatment:</strong> Antibiotics, anti-inflammatories, fluid drainage. Surgery in severe cases $500-$1500. Prognosis: 40-60% survival. Prevention: calcium, limit breeding triggers.</p>
              </div>

              <div className="p-3 border-l-4 border-teal-500 bg-teal-50">
                <h3 className="font-bold text-gray-900">#9 Goiter (Iodine Deficiency - Budgies)</h3>
                <p className="text-sm text-gray-700 mb-1">Enlarged thyroid gland compresses trachea, especially in budgies on all-seed diet (seeds lack iodine). Breathing difficulty, wheezing, tail bobbing, voice change, visible neck swelling.</p>
                <p className="text-xs text-teal-700"><strong>Treatment:</strong> Iodine supplementation (Lugol's iodine in water), convert to iodine-fortified pellets. Improvement in 2-4 weeks. Severe cases may need surgery.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#10 Heatstroke</h3>
                <p className="text-sm text-gray-700 mb-1">Bird overheated from exercise + high ambient temperature (&gt;85°F), direct sun, poor ventilation. Panting that doesn't stop, wings held away from body, collapse, seizures.</p>
                <p className="text-xs text-gray-700"><strong>Emergency:</strong> Move to cool area (70-75°F), mist with cool (NOT cold) water, offer water to drink. See vet immediately - can cause organ damage/death. Prevention: exercise in cool parts of day, ensure ventilation.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to Worry - Decision Tree */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              Decision Tree: When to See a Vet
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 border-2 border-green-400 rounded-lg">
                <h3 className="font-bold text-green-900 mb-2">✅ NORMAL - No Vet Needed (Monitor)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Bird just finished 5-10 minutes of active flight/play</li>
                  <li>• Breathing is fast but rhythmic, no wheezing/clicking</li>
                  <li>• Beak may be open immediately after, but closes within 1-2 minutes</li>
                  <li>• No tail bobbing, or very slight bob that stops quickly</li>
                  <li>• Breathing returns to normal within 5-10 minutes</li>
                  <li>• Bird resumes normal activity (eating, preening, vocalizing)</li>
                  <li>• This pattern repeats consistently - always recovers quickly</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-2">⚠️ CONCERNING - Vet Within 24-48 Hours</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Bird takes 10-15 minutes to recover (longer than usual)</li>
                  <li>• Exercise tolerance decreasing over time (used to fly more, now gets winded quickly)</li>
                  <li>• Occasional tail bobbing at rest, but bird otherwise acting normal</li>
                  <li>• Subtle voice change or quieter than usual</li>
                  <li>• Mild nasal discharge (clear), no other symptoms</li>
                  <li>• Overweight bird that's out of shape (needs vet checkup + weight loss plan)</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 border-2 border-orange-400 rounded-lg">
                <h3 className="font-bold text-orange-900 mb-2">🚨 URGENT - Vet Same Day</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Breathing doesn't return to normal after 15-20 minutes</li>
                  <li>• Tail bobbing present at rest consistently</li>
                  <li>• Gets winded from minimal activity (flying across room = labored breathing)</li>
                  <li>• Wheezing, clicking, or squeaking sounds when breathing</li>
                  <li>• Nasal discharge (colored - yellow/green), sneezing</li>
                  <li>• Voice significantly changed or lost</li>
                  <li>• Fluffed feathers + respiratory symptoms</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-400 rounded-lg">
                <h3 className="font-bold text-red-900 mb-2">🚑 EMERGENCY - Vet NOW (Life-Threatening)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Open-mouth breathing AT REST (no recent exercise)</li>
                  <li>• Gasping, struggling to breathe, head/neck stretching</li>
                  <li>• Blue/purple tongue, feet, or cere (cyanosis)</li>
                  <li>• Severe tail bobbing with every breath</li>
                  <li>• Sitting on cage floor, can't perch, wings drooping</li>
                  <li>• Collapse, unable to fly even when startled</li>
                  <li>• Suspected toxic fume exposure (Teflon, smoke, fumes)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Home Monitoring Guide */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              How to Monitor Your Bird's Breathing at Home
            </h2>

            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">📊 Measure Resting Respiratory Rate (RRR)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Count breaths for 15 seconds, multiply by 4 = breaths per minute (bpm). Do this when bird is calm and relaxed (not after exercise).
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Small birds (budgies, finches, canaries):</strong> 65-90 bpm normal</li>
                  <li>• <strong>Medium birds (cockatiels, conures, lovebirds):</strong> 40-80 bpm normal</li>
                  <li>• <strong>Large parrots (Amazons, African greys, cockatoos, macaws):</strong> 15-40 bpm normal</li>
                  <li>• <strong>Abnormal:</strong> Respiratory rate 50% higher than bird's normal baseline, OR tail bobbing</li>
                </ul>
              </div>

              <div className="p-3 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">👁️ Visual Checks (Daily)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Tail bobbing:</strong> Tail should NOT move with breathing at rest. Slight bob during/immediately after exercise OK, but should stop quickly.</li>
                  <li>• <strong>Nostril check:</strong> Should be clear, dry, symmetric. No discharge, crusting, or swelling.</li>
                  <li>• <strong>Breathing sounds:</strong> Silent at rest. Wheezing, clicking, squeaking = abnormal (tracheal/lung issue).</li>
                  <li>• <strong>Beak position:</strong> Closed at rest. Open-mouth breathing while resting = emergency.</li>
                  <li>• <strong>Posture:</strong> Upright, alert. Hunched with fluffed feathers = sick bird.</li>
                </ul>
              </div>

              <div className="p-3 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 mb-2">🏃 Exercise Tolerance Test (Weekly)</h3>
                <p className="text-sm text-gray-700">
                  Have bird fly a consistent route (e.g., across room 3 times). Note recovery time. If recovery time increasing over weeks (used to take 3 minutes, now takes 8 minutes) = declining respiratory/cardiovascular fitness, see vet for checkup.
                </p>
              </div>

              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">📹 Video Documentation (If Concerned)</h3>
                <p className="text-sm text-gray-700">
                  Record bird breathing at rest AND after exercise. Show video to avian vet (helps if bird not showing symptoms at appointment). Capture tail bobbing, breathing sounds, recovery time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prevention */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prevention: Keeping Your Bird's Respiratory System Healthy
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">✓ Air Quality</h3>
                <p className="text-sm text-gray-700">HEPA air filter near cage, no smoking/vaping, no scented candles/air fresheners, no Teflon cookware, proper ventilation. Clean cage frequently to prevent mold/bacteria.</p>
              </div>

              <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">✓ Humidity Control</h3>
                <p className="text-sm text-gray-700">Maintain 40-60% humidity. Too dry = respiratory irritation. Too humid (&gt;70%) = mold/Aspergillus growth. Use hygrometer to monitor.</p>
              </div>

              <div className="p-3 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 mb-2">✓ Regular Exercise</h3>
                <p className="text-sm text-gray-700">Daily out-of-cage flight (minimum 1-2 hours for flighted birds). Builds cardiovascular fitness, prevents obesity. Gradual increase for deconditioned birds.</p>
              </div>

              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">✓ Proper Nutrition</h3>
                <p className="text-sm text-gray-700">Pellets (70%) + fresh foods (20%) + treats (10%). Vitamin A critical for respiratory health (dark leafy greens, carrots, sweet potato). Avoid obesity.</p>
              </div>

              <div className="p-3 bg-pink-50 border-l-4 border-pink-500">
                <h3 className="font-bold text-pink-900 mb-2">✓ Temperature Management</h3>
                <p className="text-sm text-gray-700">Avoid overheating. Exercise in cooler parts of day (morning). Room temp 65-75°F ideal. No direct sun during exercise. Provide shade/water.</p>
              </div>

              <div className="p-3 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">✓ Annual Vet Checkups</h3>
                <p className="text-sm text-gray-700">Yearly exam with avian vet ($50-$100). Baseline X-rays for older birds (7+ years) to catch early heart/respiratory disease. Blood work if at risk.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Bird Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/budgie-sitting-bottom-cage">
                <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Budgie Sitting at Bottom of Cage</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Signs of serious illness in budgerigars
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/parrot-plucking-feathers-out">
                <Card className="border-2 border-sky-200 hover:border-sky-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Parrot Plucking Feathers Out</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Feather destructive behavior causes and solutions
                    </p>
                    <div className="flex items-center text-sky-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/symptoms">
                <Button className="bg-gradient-to-r from-blue-600 to-sky-600 text-white hover:from-blue-700 hover:to-sky-700">
                  View All Bird Symptoms →
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
            <Card className="bg-gradient-to-r from-blue-600 to-sky-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Bird Breathing Heavy? Get Expert Assessment</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Tell our free AI veterinary assistant about the breathing pattern, duration, activity level, and any other symptoms. 
                  Get instant guidance on whether this is normal post-flight recovery or an emergency requiring veterinary care.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Respiratory Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  ✓ Available 24/7 ✓ Normal vs Emergency Analysis ✓ All Bird Species ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
