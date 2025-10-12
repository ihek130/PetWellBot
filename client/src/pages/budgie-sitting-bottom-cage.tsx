import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Clock, Activity, ArrowRight, CheckCircle, XCircle, Thermometer } from "lucide-react";
import { Link } from "wouter";

export default function BudgieSittingBottomCage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <SEOHead 
        title="Budgie Sitting at Bottom of Cage - Emergency Signs & Illness Causes | PetWellBot"
        description="Budgie sitting at bottom of cage is a serious warning sign. Learn emergency symptoms (fluffed feathers, lethargy, difficulty breathing), common causes, and when to see an avian vet immediately."
        keywords="budgie sitting bottom cage, sick budgie symptoms, budgerigar illness, budgie fluffed up, budgie not moving, budgie emergency"
        canonicalUrl="https://petwellbot.com/budgie-sitting-bottom-cage"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Bird Symptoms", href: "/symptoms" },
              { label: "Budgie Sitting at Bottom of Cage" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                🚨 URGENT - See Avian Vet Within 24 Hours
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Budgie Sitting at Bottom of Cage: Serious Illness Warning
            </h1>
            <p className="text-xl text-orange-100 mb-6">
              Healthy budgies rarely sit on the cage floor. Bottom-sitting indicates severe illness, injury, or distress requiring immediate veterinary attention. 
              Budgies hide illness until critically sick - don't wait.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get Emergency AI Assessment
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('emergency-signs')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-orange-600"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Emergency Signs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning Section */}
      <section className="py-6 bg-red-50 border-y-2 border-red-300" id="emergency-signs">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">🚨 EMERGENCY VET NOW (Life-Threatening Signs):</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Difficulty breathing:</strong> Open-mouth breathing, tail bobbing, gasping</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Fluffed feathers + lethargy:</strong> Sitting puffed up, eyes closed, not responding</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Blood anywhere:</strong> Vent, droppings, beak, feathers, or cage floor</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Seizures or head tilt:</strong> Falling off perch, circling, loss of balance</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Not eating 12+ hours:</strong> Budgies can die from starvation in 24-48 hours</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Egg binding (females):</strong> Straining at bottom of cage, can't pass egg</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Why Bottom Sitting is Serious */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-orange-600" />
              Why Budgies Sitting on Cage Floor is a Red Flag
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900 mb-2">🦜 Budgies Are Prey Animals - They Hide Illness</h3>
                <p className="text-sm text-gray-700">
                  In the wild, showing weakness = becoming a target for predators. Budgies instinctively hide symptoms until they're 70-80% sick and can no longer compensate. 
                  By the time they sit on the bottom, they're in <strong>CRITICAL condition</strong>.
                </p>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">⚠️ High Metabolism = Rapid Decline</h3>
                <p className="text-sm text-gray-700">
                  Budgies have extremely fast metabolisms (heart rate 300-500 bpm, body temp 104-107°F). They burn energy quickly. 
                  A budgie that's too weak to perch is <strong>hours to days</strong> from death without treatment, not weeks.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">🚨 Bottom Sitting = Last Resort Position</h3>
                <p className="text-sm text-gray-700">
                  Healthy budgies spend 99% of time on perches (even sleeping). Sitting on floor means they're too weak to grip perch, in pain, or have respiratory distress. 
                  This is NOT normal exploratory behavior.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Causes */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12 Medical Causes of Bottom Sitting in Budgies
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Respiratory Infection (MOST COMMON)</h3>
                <p className="text-sm text-gray-700 mb-1">Bacterial (Chlamydia psittaci, E. coli) or fungal (Aspergillosis) lung/air sac infection. Bird too weak from breathing difficulty to perch.</p>
                <p className="text-xs text-red-700"><strong>Signs:</strong> Tail bobbing, open-mouth breathing, wheezing, nasal discharge, fluffed feathers. <strong>Treatment:</strong> Antibiotics (doxycycline, baytril) 10-21 days. Emergency oxygen therapy. Cost: $200-$600.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Egg Binding (Females)</h3>
                <p className="text-sm text-gray-700 mb-1">Egg stuck in reproductive tract. Female sits on bottom, straining, tail pumping, abdomen swollen. FATAL within 24-48 hours without treatment.</p>
                <p className="text-xs text-orange-700"><strong>Emergency:</strong> Heat (85-90°F), humidity, calcium injection. Manual extraction or surgery $300-$800. Prevention: Calcium supplements, limit breeding triggers.</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Severe Malnutrition/Starvation</h3>
                <p className="text-sm text-gray-700 mb-1">All-seed diet (lacks vitamins A, D, calcium). Budgie too weak from muscle wasting, liver disease. Often fluffed, lethargic, underweight (keel bone prominent).</p>
                <p className="text-xs text-yellow-700"><strong>Treatment:</strong> Emergency feeding (syringe formula), vitamin injections, gradual diet change to pellets + veggies. Recovery 2-4 weeks if caught in time.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Trauma/Injury (Broken Leg, Wing, Internal)</h3>
                <p className="text-sm text-gray-700 mb-1">Hit window, attacked by cat/dog, caught in cage bars. Broken limb prevents perching. Internal bleeding from blunt trauma.</p>
                <p className="text-xs text-green-700"><strong>Diagnosis:</strong> X-rays $100-$200. Treatment: Splinting $150-$400, pain meds, cage rest 3-6 weeks. Internal bleeding = emergency surgery.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Heavy Metal Poisoning (Lead, Zinc)</h3>
                <p className="text-sm text-gray-700 mb-1">Zinc from galvanized cage, lead from old paint/weights/bells. Causes neurological symptoms (seizures, weakness), GI upset. Sits on bottom unable to coordinate.</p>
                <p className="text-xs text-blue-700"><strong>Diagnosis:</strong> Blood test (lead/zinc levels) $100-$150. Treatment: Chelation therapy (calcium EDTA injections) $300-$800. Remove source immediately.</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Kidney Disease</h3>
                <p className="text-sm text-gray-700 mb-1">More common in older budgies (5+ years). Toxin buildup causes weakness, fluffed feathers, sitting on bottom. Often from chronic dehydration/high-protein diet.</p>
                <p className="text-xs text-purple-700"><strong>Diagnosis:</strong> Blood work (uric acid elevated), X-rays (enlarged kidneys). Treatment: Fluid therapy, diet change, supportive care. Prognosis guarded.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Liver Disease</h3>
                <p className="text-sm text-gray-700 mb-1">Fatty liver from all-seed diet, obesity. Yellow-green urates in droppings, weakness, fluffed feathers, sitting on floor.</p>
                <p className="text-xs text-pink-700"><strong>Treatment:</strong> Milk thistle supplements, low-fat diet, vitamin K injections if clotting issues. Diet change to pellets CRITICAL. Recovery 4-8 weeks.</p>
              </div>

              <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50">
                <h3 className="font-bold text-gray-900">#8 Tumors (Testicular, Ovarian, Kidney)</h3>
                <p className="text-sm text-gray-700 mb-1">Common in budgies 4+ years. Abdominal swelling, leg weakness/paralysis if tumor presses on nerves. Sits on bottom can't use legs.</p>
                <p className="text-xs text-indigo-700"><strong>Diagnosis:</strong> X-rays, ultrasound $150-$400. Treatment: Surgery $500-$1500 (risky in birds), hormone therapy (Lupron). Often palliative care only.</p>
              </div>

              <div className="p-3 border-l-4 border-teal-500 bg-teal-50">
                <h3 className="font-bold text-gray-900">#9 PBFD (Psittacine Beak and Feather Disease)</h3>
                <p className="text-sm text-gray-700 mb-1">Viral disease. Feather abnormalities (retained sheaths, dystrophic feathers), beak deformities, immune suppression = secondary infections. Weakness causes bottom sitting.</p>
                <p className="text-xs text-teal-700"><strong>Diagnosis:</strong> DNA test $75-$150. NO CURE. Supportive care, quarantine from other birds. Often fatal within months to years.</p>
              </div>

              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#10 Megabacteriosis (Avian Gastric Yeast - AGY)</h3>
                <p className="text-sm text-gray-700 mb-1">Macrorhabdus ornithogaster fungal infection. Vomiting, weight loss, undigested seeds in droppings, lethargy, sitting on floor. Common in budgies.</p>
                <p className="text-xs text-red-700"><strong>Diagnosis:</strong> Fecal smear $40-$80 (see yeast). Treatment: Amphotericin B 30-60 days. Success rate 60-80% if caught early.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#11 Bumblefoot (Pododermatitis)</h3>
                <p className="text-sm text-gray-700 mb-1">Infected sores on feet from perches (wrong size, sandpaper covers, plastic). Too painful to perch, sits on floor. Swollen red feet, scabs.</p>
                <p className="text-xs text-orange-700"><strong>Treatment:</strong> Antibiotics, foot soaks (Epsom salt), bandaging, perch change (natural wood branches). Healing 2-6 weeks depending severity.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#12 Heatstroke/Hypothermia</h3>
                <p className="text-sm text-gray-700 mb-1">Cage in direct sun (heatstroke - panting, wings away from body), or drafty cold area (hypothermia - fluffed, lethargic). Emergency temperature regulation.</p>
                <p className="text-xs text-gray-700"><strong>Emergency:</strong> Heatstroke = cool gradually (70-75°F), mist with water. Hypothermia = heat lamp 85-90°F. Both need vet ASAP.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Guide */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-orange-600" />
              How to Assess Your Budgie's Condition at Home
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3">Quick Physical Assessment (Do This NOW):</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Breathing:</strong> Count breaths per minute (normal: 65-85 bpm at rest). Tail bobbing with each breath = EMERGENCY.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Feathers:</strong> Fluffed up, eyes closed, sleeping during day = CRITICAL illness.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Droppings:</strong> Check last 6 hours. Normal = green feces + white urates. Red/black (blood), all liquid (polyuria), yellow-green urates (liver) = abnormal.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Weight:</strong> Gently feel keel bone (breastbone). If sharp/prominent = severe muscle wasting, URGENT.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Response:</strong> Try to gently get bird to step up. No response or can't grip = EMERGENCY.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Crop:</strong> Check for food. Empty crop 8+ hours after last meal = not eating (CRITICAL in budgies).</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-3">Emergency First Aid While Transporting to Vet:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>HEAT:</strong> Sick birds can't regulate temperature. Use heating pad on LOW under half of carrier (85-90°F). Bird moves to cooler side if too hot.</li>
                  <li>• <strong>Darkness/Quiet:</strong> Cover carrier with towel. Reduces stress (stressed birds can die from shock).</li>
                  <li>• <strong>Water/Food Access:</strong> Offer small dish of water with electrolytes (Pedialyte), millet spray if conscious.</li>
                  <li>• <strong>DO NOT FORCE:</strong> Don't force-feed or handle excessively. Transport gently in small carrier lined with towel.</li>
                  <li>• <strong>Note Symptoms:</strong> Write down duration of symptoms, last meal time, droppings appearance, any trauma/changes. Helps vet diagnose faster.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vet Visit Expectations */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Thermometer className="h-6 w-6 text-orange-600" />
              What to Expect at Emergency Avian Vet Visit
            </h2>

            <div className="space-y-3">
              <div className="p-3 bg-gray-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900">Immediate Stabilization (First 15-30 min):</h3>
                <p className="text-sm text-gray-700">
                  Oxygen therapy if respiratory distress, heat support, fluid therapy (subcutaneous or IV if severe dehydration). 
                  Goal: stabilize bird before diagnostics. Cost: $100-$300.
                </p>
              </div>

              <div className="p-3 bg-gray-50 border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900">Diagnostic Tests:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-1">
                  <li>• <strong>Physical exam:</strong> $50-$100 (weight, body condition, auscultation)</li>
                  <li>• <strong>Fecal test:</strong> $40-$80 (parasites, bacteria, yeast)</li>
                  <li>• <strong>Blood work:</strong> $150-$250 (CBC, chemistry panel - checks organs, infection)</li>
                  <li>• <strong>X-rays:</strong> $100-$200 (2 views - check lungs, eggs, tumors, fractures)</li>
                  <li>• <strong>Crop swab:</strong> $30-$60 (if vomiting/regurgitation - check yeast, bacteria)</li>
                  <li><strong>Total diagnostic workup:</strong> $370-$690 depending on tests needed</li>
                </ul>
              </div>

              <div className="p-3 bg-gray-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-gray-900">Treatment Costs (Estimates):</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-1">
                  <li>• <strong>Antibiotics:</strong> $30-$80 (10-21 day course)</li>
                  <li>• <strong>Antifungals:</strong> $40-$100 (longer course 30-60 days)</li>
                  <li>• <strong>Pain medication:</strong> $20-$50</li>
                  <li>• <strong>Hospitalization:</strong> $100-$300/day (critical cases need 24-48 hour monitoring)</li>
                  <li>• <strong>Surgery:</strong> $300-$1500 (egg removal, tumor, fracture repair)</li>
                  <li>• <strong>Follow-up visits:</strong> $50-$100 each (recheck in 3-7 days typical)</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 border-2 border-orange-300 rounded-lg">
                <p className="text-sm text-orange-900">
                  💰 <strong>Total Emergency Visit Cost:</strong> $300-$1500 for initial visit + stabilization + diagnostics. 
                  Surgery/hospitalization cases: $1000-$3000+. Consider pet insurance or CareCredit for emergencies.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prevention */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prevention: Keep Your Budgie Healthy
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">✓ Proper Diet</h3>
                <p className="text-sm text-gray-700">70% pellets (Harrison's, Roudybush, Lafeber), 20% fresh veggies (dark leafy greens, carrots, broccoli), 10% millet/treats. NO all-seed diet.</p>
              </div>

              <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">✓ Annual Vet Checkups</h3>
                <p className="text-sm text-gray-700">Yearly exam with avian vet ($50-$100). Early detection of kidney, liver, tumors before emergency stage. Baseline blood work for older budgies (5+ years).</p>
              </div>

              <div className="p-3 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 mb-2">✓ Clean Environment</h3>
                <p className="text-sm text-gray-700">Change cage paper daily, clean food/water dishes daily, full cage clean weekly. Reduces bacterial/fungal infection risk. Humidity 40-60%.</p>
              </div>

              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">✓ Safe Cage Setup</h3>
                <p className="text-sm text-gray-700">Natural wood perches (varied diameters 3/8" - 1/2"), no sandpaper covers, stainless steel or powder-coated cage (NO galvanized zinc). Away from drafts/direct sun.</p>
              </div>

              <div className="p-3 bg-pink-50 border-l-4 border-pink-500">
                <h3 className="font-bold text-pink-900 mb-2">✓ Daily Monitoring</h3>
                <p className="text-sm text-gray-700">Check droppings, activity level, eating/drinking, weight weekly. Early symptom detection = better prognosis. Know YOUR bird's normal behavior.</p>
              </div>

              <div className="p-3 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">✓ Stress Reduction</h3>
                <p className="text-sm text-gray-700">10-12 hours sleep, consistent routine, gradual changes, enrichment (toys, foraging). Chronic stress weakens immune system.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prognosis */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-orange-600" />
              Prognosis & Recovery Timeline
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900">GOOD Prognosis (If Treated Within 24 Hours):</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Respiratory infection:</strong> 70-90% survival with antibiotics. Improvement in 3-5 days, full recovery 2-3 weeks.</li>
                  <li>• <strong>Malnutrition:</strong> 80-90% recovery if liver not permanently damaged. Diet change shows results in 1-2 weeks.</li>
                  <li>• <strong>Egg binding:</strong> 80-95% survival if treated within 12-24 hours. Prevention critical (calcium, no breeding triggers).</li>
                  <li>• <strong>Bumblefoot:</strong> 90% resolution with treatment. Healing 2-6 weeks depending severity.</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">GUARDED Prognosis:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Heavy metal poisoning:</strong> 50-70% survival depending on exposure level. Chelation therapy takes weeks. Neurological damage may be permanent.</li>
                  <li>• <strong>Kidney/Liver disease:</strong> Manageable but not curable. Supportive care, diet change. Lifespan may be shortened.</li>
                  <li>• <strong>Megabacteriosis:</strong> 60-80% respond to treatment but relapses common. Lifelong management may be needed.</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900">POOR Prognosis:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>PBFD:</strong> No cure. Often fatal within months to years. Supportive care only.</li>
                  <li>• <strong>Advanced tumors:</strong> Surgery risky, often palliative care. Weeks to months depending on tumor type/location.</li>
                  <li>• <strong>Severe respiratory distress:</strong> If already gasping/open-mouth breathing, 30-50% survival even with aggressive treatment.</li>
                  <li>• <strong>Delayed treatment (48+ hours):</strong> Survival drops to 20-40%. Budgies decline rapidly - time is critical.</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-blue-900">
                  <strong>Key Takeaway:</strong> Bottom-sitting budgie that's fluffed, lethargic, or breathing abnormally is a MEDICAL EMERGENCY. 
                  Don't "wait and see" - budgies go from sick to dead in 24-48 hours. The sooner you get to an avian vet, the better the chance of survival.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Bird Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
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

              <Link href="/bird-breathing-heavy-after-flying">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Bird Breathing Heavy After Flying</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Normal vs abnormal respiratory patterns in birds
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
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700">
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
            <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Budgie Sitting on Bottom? Get Emergency Guidance NOW</h2>
                <p className="text-xl mb-6 text-orange-100">
                  This is NOT normal behavior. Tell our free AI veterinary assistant about your budgie's symptoms, breathing pattern, droppings, and how long they've been on the floor. 
                  Get instant emergency assessment and guidance on next steps.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Emergency AI Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-orange-100">
                  ✓ Available 24/7 ✓ Emergency Triage ✓ Free Veterinary AI ✓ Avian Specialist Knowledge
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
