import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { AlertTriangle, Heart, Clock, Activity, ArrowRight, CheckCircle, XCircle, Thermometer } from "lucide-react";
import { Link } from "wouter";

export default function HamsterNotEatingDrinking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <SEOHead 
        title="Hamster Not Eating or Drinking - Emergency Causes & Treatment | PetWellBot"
        description="Hamster stopped eating or drinking? Learn emergency causes (dental disease, wet tail, impaction, diabetes), the critical 24-48 hour window, and how to save your hamster's life."
        keywords="hamster not eating, hamster not drinking, hamster sick, hamster wet tail, hamster dental disease, hamster dehydration"
        canonicalUrl="https://petwellbot.com/hamster-not-eating-drinking"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Small Pet Symptoms", href: "/symptoms" },
              { label: "Hamster Not Eating or Drinking" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                🚨 URGENT - Emergency Vet Within 12-24 Hours
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hamster Not Eating or Drinking: Critical Emergency Warning
            </h1>
            <p className="text-xl text-orange-100 mb-6">
              Hamsters can die from dehydration in 24-48 hours and starvation in 3-4 days. Refusal to eat/drink signals severe illness: dental disease, wet tail, impaction, or organ failure. 
              This is NOT "just picky eating" - immediate veterinary care required.
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
                onClick={() => document.getElementById('emergency-first-aid')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-orange-600"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Emergency First Aid
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning Section */}
      <section className="py-6 bg-red-50 border-y-2 border-red-300" id="emergency-first-aid">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">🚨 IMMEDIATE EMERGENCY VET If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Wet tail/diarrhea:</strong> Wet, foul-smelling rear end (FATAL in 24-48 hours)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Not eaten/drunk in 24+ hours</strong> (critical dehydration/starvation risk)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Lethargic, hunched posture, eyes closed</strong> (severe pain/illness)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Cold to touch</strong> (body temp dropping = shock/near death)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Difficulty breathing, wheezing, gasping</strong></span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Blood in droppings, urine, or mouth</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Why This is Critical */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-orange-600" />
              Why Hamsters Can't Go Without Food/Water
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900 mb-2">⏱️ Extremely Fast Metabolism</h3>
                <p className="text-sm text-gray-700">
                  Hamsters have heart rates of 300-500 bpm and burn energy rapidly. They need to eat every 4-6 hours. 
                  Without food: Blood sugar drops within 12 hours → organ failure within 24-48 hours → death within 3-4 days.
                </p>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">💧 Critical Dehydration Timeline</h3>
                <p className="text-sm text-gray-700">
                  Hamsters are only 60-70g (2-3 oz). Even small water loss = severe dehydration. 
                  Without water: 12 hours = early dehydration, 24 hours = severe dehydration (sunken eyes, skin tenting), 36-48 hours = organ failure/death.
                </p>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">🦷 Hamster Teeth Never Stop Growing</h3>
                <p className="text-sm text-gray-700">
                  If hamster CAN'T eat (broken tooth, overgrown teeth, abscess), they will STARVE even with food available. 
                  Dental disease is #1 cause of appetite loss in hamsters. Teeth grow 2-3mm per week - overgrowth causes severe pain.
                </p>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">🚨 They Hide Illness Until Critical</h3>
                <p className="text-sm text-gray-700">
                  As prey animals, hamsters hide symptoms until 70-80% sick. By the time they stop eating/drinking, they're in SEVERE distress. 
                  This is not a "wait and see" situation - hours matter.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Causes */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              12 Critical Causes of Appetite/Thirst Loss in Hamsters
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Dental Disease (MOST COMMON - 60-70% of cases)</h3>
                <p className="text-sm text-gray-700 mb-1">Overgrown incisors/molars, broken tooth, abscess, malocclusion. Hamster WANTS to eat but CAN'T due to pain. Drooling, weight loss, dropping food, pawing at mouth.</p>
                <p className="text-xs text-red-700"><strong>Signs:</strong> Wet chin, weight loss despite food available, selects soft foods only, difficulty chewing seeds. <strong>Treatment:</strong> Tooth trimming $50-$150, extraction $100-$300, antibiotics if abscess. Pain meds critical. Hand-feeding soft foods during recovery.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Wet Tail (Proliferative Ileitis) - FATAL EMERGENCY</h3>
                <p className="text-sm text-gray-700 mb-1">Bacterial infection (Lawsonia intracellularis). Severe watery diarrhea, dehydration, lethargy, loss of appetite. MOST COMMON in Syrian hamsters under 8 weeks (stress from pet store/new home). 90% fatal if untreated.</p>
                <p className="text-xs text-orange-700"><strong>Signs:</strong> Wet, foul-smelling tail area, hunched posture, rectal prolapse possible. <strong>Emergency treatment:</strong> Antibiotics (enrofloxacin, metronidazole), fluid therapy (SQ fluids), force-feeding, heat support. Cost: $150-$500. Survival: 30-50% even with aggressive treatment. Hours matter.</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Gastrointestinal Impaction/Blockage</h3>
                <p className="text-sm text-gray-700 mb-1">Ingested bedding (fluffy cotton bedding #1 cause), long hair, foreign object blocks intestines. Hamster stops eating/pooping, abdomen swollen, straining, pain.</p>
                <p className="text-xs text-yellow-700"><strong>Diagnosis:</strong> X-rays $100-$200. <strong>Treatment:</strong> Fluids, laxatives, pain meds if mild. Surgery $300-$800 if severe blockage. Prevention: NEVER use cotton/fluffy bedding - use paper bedding (Kaytee Clean &amp; Cozy, aspen shavings).</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Diabetes (Common in Dwarf Hamsters)</h3>
                <p className="text-sm text-gray-700 mb-1">Campbell's and Winter White dwarfs genetically predisposed. Excessive drinking initially, then stops drinking as condition worsens. Weight loss, lethargy, sweet-smelling urine, cataracts.</p>
                <p className="text-xs text-green-700"><strong>Diagnosis:</strong> Urine glucose test strips $10-20 (positive = diabetes), blood glucose $50-$100. <strong>Treatment:</strong> NO insulin in hamsters (too small). Diet change (NO sugary treats/fruits, high-fiber pellets), weight management. Can't be cured, only managed.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Respiratory Infection (Bacterial, Viral)</h3>
                <p className="text-sm text-gray-700 mb-1">Pneumonia, upper respiratory infection. Hamster too sick/weak to eat. Sneezing, wheezing, nasal discharge, labored breathing, hunched posture.</p>
                <p className="text-xs text-blue-700"><strong>Treatment:</strong> Antibiotics (enrofloxacin, doxycycline) 7-14 days $50-$150. Nebulization, heat support (80-85°F), force-feeding if needed. Recovery 1-2 weeks if caught early.</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Cheek Pouch Impaction/Abscess</h3>
                <p className="text-sm text-gray-700 mb-1">Food/bedding stuck in cheek pouch, infection develops. Swollen face (asymmetric), drooling, refuses to eat, pawing at face, foul odor.</p>
                <p className="text-xs text-purple-700"><strong>Treatment:</strong> Pouch flushing under sedation, antibiotics, abscess drainage. Cost: $100-$300. Prevention: No sticky foods (peanut butter, chocolate), remove uneaten fresh foods within 4 hours.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Kidney Disease</h3>
                <p className="text-sm text-gray-700 mb-1">More common in older hamsters (18+ months). Excessive drinking initially, then stops drinking as kidneys fail. Weight loss, lethargy, poor coat, dehydration.</p>
                <p className="text-xs text-pink-700"><strong>Diagnosis:</strong> Blood work (elevated BUN/creatinine) $100-$200. <strong>Treatment:</strong> Fluid therapy, diet change (low protein), supportive care. Prognosis: Guarded, chronic condition. Quality of life focus.</p>
              </div>

              <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50">
                <h3 className="font-bold text-gray-900">#8 Liver Disease (Hepatic Lipidosis)</h3>
                <p className="text-sm text-gray-700 mb-1">Fatty liver from obesity, diabetes, starvation. Vicious cycle: stops eating → liver failure worsens → less appetite. Jaundice (yellowing), lethargy, weight loss.</p>
                <p className="text-xs text-indigo-700"><strong>Treatment:</strong> Force-feeding CRITICAL (syringe feed every 2-4 hours), liver support supplements (milk thistle), fluids. Must break starvation cycle immediately.</p>
              </div>

              <div className="p-3 border-l-4 border-teal-500 bg-teal-50">
                <h3 className="font-bold text-gray-900">#9 Cancer/Tumors</h3>
                <p className="text-sm text-gray-700 mb-1">Common in hamsters 18+ months. Abdominal tumors compress GI tract, oral tumors prevent eating. Visible lumps, weight loss, lethargy.</p>
                <p className="text-xs text-teal-700"><strong>Diagnosis:</strong> Physical exam, X-rays/ultrasound $150-$400. <strong>Treatment:</strong> Surgery $300-$800 (if operable, risky in hamsters), palliative care/pain management often only option.</p>
              </div>

              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#10 Heatstroke</h3>
                <p className="text-sm text-gray-700 mb-1">Cage in direct sun, room over 80°F, poor ventilation. Hamster overheated, stops eating/drinking, lethargic, panting, seizures possible.</p>
                <p className="text-xs text-red-700"><strong>Emergency:</strong> Move to cool area (65-70°F), offer water, wet fur with cool (NOT cold) water. See vet immediately - heatstroke causes organ damage even if hamster seems to recover.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#11 Pain (Injury, Arthritis, Post-Surgery)</h3>
                <p className="text-sm text-gray-700 mb-1">Broken limb from fall, arthritis in older hamsters, post-operative pain. Too painful to move to food/water. Limping, reluctance to move, vocalizing when touched.</p>
                <p className="text-xs text-orange-700"><strong>Treatment:</strong> Pain medication (meloxicam $20-$50), bring food/water closer to hamster, soft bedding. Address underlying injury.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#12 Stress/New Environment</h3>
                <p className="text-sm text-gray-700 mb-1">First 3-7 days after bringing home, moved to new cage, nearby predator (cat/dog), loud noises. Hamster too stressed to eat/drink. Hiding constantly, skittish.</p>
                <p className="text-xs text-gray-700"><strong>Solution:</strong> Quiet, dark area, cover cage partially, limit handling first week, scatter feed to encourage foraging. Should resume eating within 24-48 hours. If not, see vet (may be medical not just stress).</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Home Care */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-orange-600" />
              Emergency Home Care While Getting to Vet
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3">🚨 Critical First Steps (Do This NOW):</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>1. HEAT SUPPORT:</strong> Sick hamsters can't regulate temperature. Use heating pad on LOW under HALF of cage (hamster can move away if too hot). Target: 75-80°F. Cold hamster = shock/dying.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>2. DEHYDRATION CHECK:</strong> Gently pinch skin on scruff - should snap back immediately. Stays tented = dehydrated. Offer water with electrolytes (unflavored Pedialyte diluted 50/50).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>3. SYRINGE FEEDING:</strong> If not eaten 24+ hours, offer Critical Care (Oxbow) or baby food (pure chicken/turkey, NO seasoning). Syringe 0.5-1ml every 2-4 hours. YouTube "hamster syringe feeding" for technique.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>4. TEMPTING FOODS:</strong> Try sunflower seeds (high-value treat), scrambled egg (plain), cooked chicken, mealworms. Warm food slightly (enhances smell). Place near hamster.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>5. WATER ACCESS:</strong> If can't reach water bottle, offer water in shallow dish (hamster may be too weak to use bottle). Change every 2 hours.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-3">💧 How to Give Emergency Fluids (If Vet Not Available for Hours):</h3>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li><strong>Pedialyte solution:</strong> Unflavored Pedialyte diluted 50/50 with water. Or: 1/4 tsp salt + 1/2 tsp sugar in 8 oz water.</li>
                  <li><strong>Syringe technique:</strong> 1ml syringe (NO needle). Hamster wrapped gently in towel. Place syringe at side of mouth (NOT front - choking risk).</li>
                  <li><strong>Amount:</strong> 0.5-1ml every 1-2 hours. Give SLOWLY - 1 drop at a time. Let hamster swallow between drops.</li>
                  <li><strong>Signs of aspiration (STOP if seen):</strong> Coughing, choking, labored breathing. Let vet give fluids subcutaneously instead.</li>
                  <li><strong>This is TEMPORARY:</strong> Keeps hamster alive until you reach vet. NOT substitute for veterinary care.</li>
                </ol>
              </div>

              <div className="p-4 bg-orange-50 border border-orange-200 rounded">
                <p className="text-sm text-orange-900">
                  ⚠️ <strong>DO NOT WAIT:</strong> Home care buys time but doesn't treat underlying cause. Even if hamster starts eating after syringe feeding, 
                  see vet same day - there's a medical reason they stopped eating. Dental disease, wet tail, impaction won't resolve on their own.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vet Visit */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Thermometer className="h-6 w-6 text-orange-600" />
              What to Expect at Emergency Vet Visit
            </h2>

            <div className="space-y-3">
              <div className="p-3 bg-gray-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900">Immediate Stabilization:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-1">
                  <li>• <strong>Subcutaneous fluids:</strong> $30-$80 (rehydrate hamster - critical first step)</li>
                  <li>• <strong>Heat support:</strong> Incubator/heated cage if hypothermic</li>
                  <li>• <strong>Blood glucose check:</strong> $20-$40 (if diabetic emergency)</li>
                  <li>• <strong>Emergency feeding:</strong> Syringe feeding with Critical Care</li>
                </ul>
              </div>

              <div className="p-3 bg-gray-50 border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900">Diagnostic Tests:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-1">
                  <li>• <strong>Physical exam:</strong> $40-$80 (check teeth, palpate abdomen, listen to lungs)</li>
                  <li>• <strong>Fecal test:</strong> $30-$60 (check for parasites, bacteria, wet tail)</li>
                  <li>• <strong>X-rays:</strong> $80-$150 (check for impaction, tumors, organ size)</li>
                  <li>• <strong>Blood work:</strong> $100-$200 (if suspect kidney/liver disease, diabetes)</li>
                  <li>• <strong>Total diagnostic workup:</strong> $250-$490 depending on tests</li>
                </ul>
              </div>

              <div className="p-3 bg-gray-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-gray-900">Common Treatments & Costs:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-1">
                  <li>• <strong>Tooth trimming:</strong> $50-$150 (if dental overgrowth)</li>
                  <li>• <strong>Antibiotics:</strong> $30-$80 (wet tail, respiratory infection, abscess)</li>
                  <li>• <strong>Pain medication:</strong> $20-$50 (meloxicam - critical for dental pain)</li>
                  <li>• <strong>Hospitalization:</strong> $100-$300/day (severe cases need 24-48 hour monitoring/force-feeding)</li>
                  <li>• <strong>Surgery:</strong> $200-$800 (abscess drainage, impaction removal, tumor)</li>
                  <li>• <strong>Take-home care:</strong> Critical Care powder $15-$25, syringes, medications</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 border-2 border-orange-300 rounded-lg">
                <p className="text-sm text-orange-900">
                  💰 <strong>Total Emergency Visit Cost:</strong> $200-$800 for initial visit + stabilization + diagnostics. 
                  Wet tail treatment/hospitalization: $300-$800. Surgery cases: $500-$1200. Hamster-savvy exotic vet required - NOT all vets treat hamsters.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prognosis */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-orange-600" />
              Prognosis & Recovery Timeline by Cause
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900">GOOD Prognosis (If Treated Early):</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Dental overgrowth:</strong> 90% recovery after trimming. Resumes eating within 24 hours. May need trims every 4-8 weeks if chronic malocclusion.</li>
                  <li>• <strong>Mild dehydration/stress:</strong> 95% recovery with fluids + supportive care. Eating within 12-24 hours.</li>
                  <li>• <strong>Cheek pouch impaction:</strong> 80-90% recovery after flushing. Prevention critical (remove fresh food within 4 hours).</li>
                  <li>• <strong>Respiratory infection (early):</strong> 70-80% recovery with antibiotics. Improvement in 3-5 days, full recovery 1-2 weeks.</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">GUARDED Prognosis:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>GI impaction:</strong> 60-70% survival if caught early, surgery successful. Post-op care intensive (hand-feeding, pain meds).</li>
                  <li>• <strong>Diabetes:</strong> Can't be cured, only managed. Diet change + weight loss. Lifespan may be normal with good management.</li>
                  <li>• <strong>Kidney/liver disease:</strong> Chronic conditions. Supportive care, diet change. Variable lifespan (weeks to months).</li>
                  <li>• <strong>Abscess (dental/cheek):</strong> 60-80% recovery depending on severity. May recur if teeth don't wear properly.</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900">POOR Prognosis:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Wet tail:</strong> 10-50% survival even with aggressive treatment. If treated within 12 hours: 40-50% chance. After 24+ hours: &lt;20% survival.</li>
                  <li>• <strong>Advanced liver disease:</strong> Once jaundiced/not eating, prognosis grave. Days to 1-2 weeks even with treatment.</li>
                  <li>• <strong>Advanced cancer:</strong> Palliative care only in most cases. Surgery high-risk. Focus on quality of life (pain management).</li>
                  <li>• <strong>Severe dehydration (36+ hours):</strong> 30-50% survival. Organ damage may be irreversible even if rehydrated.</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-blue-900">
                  <strong>Time is Everything:</strong> Hamster not eating 12 hours = URGENT. 24 hours = CRITICAL. 36+ hours = GRAVE. 
                  The sooner you get to exotic vet, the better the prognosis. Don't wait until hamster is cold/unresponsive - that's often too late.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prevention */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prevention: Keep Your Hamster Eating & Drinking
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900 mb-2">✓ Proper Diet</h3>
                <p className="text-sm text-gray-700">High-quality hamster pellets (Mazuri, Oxbow), small amount seeds/grains, fresh veggies 2-3x week. NO sugary treats (especially dwarf hamsters - diabetes risk). Always fresh water.</p>
              </div>

              <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 mb-2">✓ Dental Care</h3>
                <p className="text-sm text-gray-700">Provide wood chews (apple, willow), hard pellets to wear teeth naturally. Check teeth monthly (should be even, not overgrown). Exotic vet visit if teeth look long/crooked.</p>
              </div>

              <div className="p-3 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900 mb-2">✓ Safe Bedding</h3>
                <p className="text-sm text-gray-700">Paper bedding (Kaytee Clean &amp; Cozy), aspen shavings. NEVER fluffy/cotton bedding (impaction), cedar/pine (toxic). Depth: 6+ inches for burrowing.</p>
              </div>

              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900 mb-2">✓ Stress Reduction</h3>
                <p className="text-sm text-gray-700">Quiet location, consistent routine, gradual changes, hideouts, no predator pets nearby. Syrian hamsters MUST be housed alone (territorial). Dwarfs can be social if raised together.</p>
              </div>

              <div className="p-3 bg-pink-50 border-l-4 border-pink-500">
                <h3 className="font-bold text-pink-900 mb-2">✓ Daily Monitoring</h3>
                <p className="text-sm text-gray-700">Check food/water consumption daily (hamsters hoard food - check stash vs eaten). Weigh weekly (sudden weight loss = illness). Watch droppings (normal = firm, dark brown).</p>
              </div>

              <div className="p-3 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900 mb-2">✓ Annual Vet Checkups</h3>
                <p className="text-sm text-gray-700">Yearly exam with exotic vet ($40-$80). Early detection of dental issues, tumors, diabetes. Hamster lifespan only 2-3 years - preventive care critical.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Small Pet Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/symptoms">
                <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Guinea Pig Not Eating</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Critical care for guinea pigs with appetite loss
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/symptoms">
                <Card className="border-2 border-amber-200 hover:border-amber-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Rabbit Not Pooping</h3>
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
                <Button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700">
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
            <Card className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Hamster Stopped Eating/Drinking? Get Emergency Help NOW</h2>
                <p className="text-xl mb-6 text-orange-100">
                  This is a medical emergency - hamsters can die from dehydration in 24-48 hours. Tell our free AI veterinary assistant about the symptoms, 
                  duration, droppings, and behavior. Get instant emergency guidance and triage.
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
                  ✓ Available 24/7 ✓ Emergency Triage ✓ Exotic Pet Specialist Knowledge ✓ Completely Free
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
