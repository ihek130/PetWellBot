import { AlertTriangle, Heart, Wind, Clock, Activity, ArrowRight, CheckCircle, XCircle, Timer, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";

export default function DogBreathingFastSleeping() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <SEOHead 
        title="Dog Breathing Fast While Sleeping: Normal vs Abnormal Breathing Patterns During Sleep | PetWellBot"
        description="Veterinary guide to dog sleep breathing rates. Learn normal REM breathing, when fast breathing while sleeping is concerning, 7 causes, and when to call your vet."
        keywords="dog breathing fast while sleeping, dog rapid breathing sleep, dog panting in sleep, puppy breathing fast asleep, normal dog sleep breathing rate"
        canonicalUrl="https://petwellbot.com/dog-breathing-fast-sleeping"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Dog Symptoms", href: "/symptoms" },
              { label: "Dog Breathing Fast While Sleeping" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⚠️ MONITOR - Normal During REM Sleep
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dog Breathing Fast While Sleeping: Normal vs Abnormal Breathing Patterns
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Fast breathing during sleep is usually normal during REM dreams, but can signal heart or lung problems. 
              Learn normal sleep breathing rates, 7 concerning causes, and when to call your vet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Breathing Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600"
              >
                <Wind className="w-5 h-5 mr-2" />
                Check Breathing Rate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="py-6 bg-orange-50 border-y-2 border-orange-300" id="assessment">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">⚠️ Seek Emergency Care If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Blue or pale gums (sign of oxygen deprivation)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Breathing rate &gt;40 breaths/min while awake and resting</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Open-mouth breathing, gasping, or choking sounds</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Unable to settle or lie down comfortably</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Collapsed or extremely weak</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Breathing doesn't slow when awake</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Normal Breathing Rates */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Stethoscope className="h-6 w-6 text-blue-600" />
              Normal Dog Breathing Rates (Breaths Per Minute)
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">✓ Normal Awake & Resting</h3>
                <p className="text-green-800"><strong>10-30 breaths/min</strong> (most adult dogs: 15-25)</p>
                <p className="text-green-700 text-sm mt-1">Measured when dog is calm, not panting from exercise or heat</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">✓ Normal Deep Sleep (Non-REM)</h3>
                <p className="text-blue-800"><strong>10-25 breaths/min</strong> (slower, steady rhythm)</p>
                <p className="text-blue-700 text-sm mt-1">Regular, quiet breathing - this is restorative sleep phase</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">✓ Normal REM Sleep (Dreaming)</h3>
                <p className="text-purple-800"><strong>30-60 breaths/min</strong> (can be irregular, fast bursts)</p>
                <p className="text-purple-700 text-sm mt-1">The "fast breathing while sleeping" that worries most owners - THIS IS USUALLY NORMAL! May include twitching, eye movement, soft woofs</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-900 mb-2">✓ Puppies (Normal Range Higher)</h3>
                <p className="text-yellow-800"><strong>15-40 breaths/min awake, up to 65 breaths/min in REM sleep</strong></p>
                <p className="text-yellow-700 text-sm mt-1">Puppies breathe faster than adults - their respiratory system is still developing</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">✗ Concerning (Vet Visit Needed)</h3>
                <p className="text-red-800"><strong>&gt;40 breaths/min while awake and resting</strong></p>
                <p className="text-red-800"><strong>&gt;60 breaths/min during sleep in adult dogs (consistent, not brief REM burst)</strong></p>
                <p className="text-red-700 text-sm mt-1">Sustained rapid breathing outside REM sleep suggests medical issue</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">📹 How to Count Your Dog's Breathing Rate</h3>
              <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
                <li>Wait until dog is sleeping quietly (not in REM/dreaming phase - no twitching)</li>
                <li>Watch chest rise and fall - one complete breath = one rise + one fall</li>
                <li>Count breaths for 30 seconds, then multiply by 2 (or count for full 60 seconds)</li>
                <li>Repeat 2-3 times to get average</li>
                <li>Record: helps you establish YOUR dog's normal baseline</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* REM Sleep Explanation */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-purple-600" />
              REM Sleep: Why Dogs "Run" and Breathe Fast in Dreams
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>REM (Rapid Eye Movement) sleep is when dogs dream</strong> - and it's the #1 reason owners worry about fast breathing. This is completely normal and healthy!
              </p>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Normal REM Sleep Signs (All Healthy!):</h3>
                <ul className="space-y-1 text-purple-800">
                  <li>✓ Rapid, irregular breathing (30-60 breaths/min)</li>
                  <li>✓ Eyes moving under closed lids</li>
                  <li>✓ Twitching paws, legs, or tail</li>
                  <li>✓ Soft whimpers, woofs, or growls</li>
                  <li>✓ Whiskers or ears twitching</li>
                  <li>✓ Rapid breathing comes in bursts, then slows down</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <p className="text-gray-700">
                  <strong>Duration:</strong> REM cycles last 5-20 minutes and occur every 60-90 minutes during sleep. Puppies spend more time in REM (up to 50% of sleep) vs adult dogs (20-25%).
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-gray-700">
                  <strong>The Test:</strong> If you're worried, gently call your dog's name or touch them lightly. If they wake up easily and breathing immediately returns to normal, it was just REM sleep - nothing to worry about!
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 text-sm">
                  <strong>🧠 Fun Fact:</strong> Studies show dogs dream about daily activities - chasing squirrels, playing fetch, greeting their favorite humans. The brain activity during REM sleep is nearly identical to waking activity, which is why breathing and movement increase!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 7 Medical Causes */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-blue-600" />
              7 Medical Causes of Abnormal Fast Breathing During Sleep
            </h2>

            <p className="text-gray-700 mb-6">
              If fast breathing happens <strong>outside REM sleep</strong>, persists when dog is awake and resting, or is accompanied by other symptoms, these are the most common causes:
            </p>

            <div className="space-y-6">
              {/* Cause 1 */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #1 Congestive Heart Failure (CHF) - Most Common Serious Cause
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Failing heart can't pump efficiently → fluid backs up into lungs → breathing becomes rapid and labored, especially when lying down. More common in senior dogs and certain breeds (Cavalier King Charles Spaniels, Boxers, Dobermans).
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Key signs:</strong> Persistent breathing rate &gt;40/min at rest, coughing (especially at night or after lying down), reduced exercise tolerance, fainting, blue-tinged gums
                </p>
                <p className="text-gray-700">
                  <strong>What to do:</strong> This is serious - schedule vet visit within 24-48 hours if suspected. Diagnosed with x-rays, echocardiogram. Treatable with medications (furosemide, pimobendan, ACE inhibitors) but requires lifelong management.
                </p>
              </div>

              {/* Cause 2 */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #2 Pain or Discomfort
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Dogs in pain often breathe faster - it's a stress response. Could be arthritis, injury, abdominal pain, dental pain, or internal issues. Pain makes it hard to settle into restful sleep.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Key signs:</strong> Restlessness, difficulty finding comfortable position, whimpering, panting even when cool, reluctance to lie down or get up, decreased appetite
                </p>
                <p className="text-gray-700">
                  <strong>What to do:</strong> Try to locate source - check for obvious injuries, gently palpate abdomen and joints. If pain suspected, see vet within 24 hours. Never give human pain meds - many are toxic to dogs.
                </p>
              </div>

              {/* Cause 3 */}
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #3 Respiratory Disease (Pneumonia, Bronchitis, Lung Tumor)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Lung inflammation, infection, or mass reduces oxygen exchange → body compensates by breathing faster. Can affect dogs of any age.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Key signs:</strong> Coughing, wheezing, nasal discharge, labored breathing, lethargy, fever, reduced appetite, breathing faster even when awake
                </p>
                <p className="text-gray-700">
                  <strong>What to do:</strong> Respiratory infections require antibiotics. See vet same day if coughing + fast breathing. Chest x-rays will show pneumonia or masses. Treatment depends on cause (antibiotics for infection, further testing for tumors).
                </p>
              </div>

              {/* Cause 4 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #4 Obesity
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Extra weight puts mechanical pressure on lungs and makes breathing harder. Fat deposits around chest and abdomen restrict lung expansion. Overweight dogs breathe faster both awake and asleep.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Key signs:</strong> Visible excess weight, difficulty breathing after minimal activity, snoring, inability to exercise normally, breathing rate consistently at high end of normal (25-30/min at rest)
                </p>
                <p className="text-gray-700">
                  <strong>What to do:</strong> Weight loss often dramatically improves breathing. Work with vet on gradual weight loss plan (reduced calories + increased exercise). Even 10-15% weight loss can significantly help breathing.
                </p>
              </div>

              {/* Cause 5 */}
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #5 Brachycephalic Syndrome (Flat-Faced Breeds)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Bulldogs, Pugs, Boston Terriers, Shih Tzus, French Bulldogs have anatomically narrowed airways (stenotic nares, elongated soft palate, collapsed trachea). They work harder to breathe 24/7.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Key signs:</strong> Snoring, snorting, noisy breathing, exercise intolerance, overheating easily, breathing rate 25-35/min even at rest, open-mouth breathing, gagging
                </p>
                <p className="text-gray-700">
                  <strong>What to do:</strong> Mild cases: manage with weight control, avoid heat/humidity, use harness not collar. Severe cases: surgical correction (nostrils widening, soft palate trim). If breathing worsens, see vet - can become life-threatening.
                </p>
              </div>

              {/* Cause 6 */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #6 Anemia (Low Red Blood Cell Count)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Fewer red blood cells = less oxygen delivery → body compensates with faster breathing to get more oxygen. Causes: blood loss, immune disease, cancer, parasites, toxins.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Key signs:</strong> Pale or white gums (vs normal pink), weakness, lethargy, fast breathing both awake and asleep, fast heart rate, reduced appetite
                </p>
                <p className="text-gray-700">
                  <strong>What to do:</strong> Anemia is serious - see vet same day. Diagnosed with blood work (CBC). Treatment depends on cause (blood transfusion for severe cases, medications for immune-mediated, addressing underlying disease).
                </p>
              </div>

              {/* Cause 7 */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #7 Anxiety/Stress
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Anxious dogs don't fully relax during sleep → breathing stays elevated. Common in dogs with separation anxiety, noise phobias, or general anxiety disorder.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Key signs:</strong> Restless sleep, startles easily, panting during the day, pacing, destructive behavior, hypervigilance, trouble settling down
                </p>
                <p className="text-gray-700">
                  <strong>What to do:</strong> Create calm sleep environment (dark, quiet, comfortable bed). Try calming aids (Adaptil diffuser, calming music, anxiety wrap). If severe, discuss anti-anxiety medication with vet (trazodone, fluoxetine). Rule out medical causes first.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decision Tree */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Timer className="h-6 w-6 text-blue-600" />
              Decision Tree: Is My Dog's Fast Breathing Normal?
            </h2>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-900 mb-2">✓ Likely Normal - No Action Needed</h3>
                <p className="text-green-800 text-sm mb-2"><strong>If ALL of these are true:</strong></p>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Fast breathing happens during sleep with twitching/movement (REM)</li>
                  <li>• Breathing returns to normal (10-25/min) when dog wakes up or enters deep sleep</li>
                  <li>• Dog is alert, active, eating normally when awake</li>
                  <li>• Gums are pink (not pale, blue, or gray)</li>
                  <li>• No coughing, wheezing, or distress</li>
                  <li>• Breathing rate while awake and resting is &lt;30/min</li>
                </ul>
                <p className="text-green-800 font-medium mt-2">→ This is normal REM sleep breathing. Enjoy watching your dog dream!</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-semibold text-yellow-900 mb-2">⚠ Monitor Closely - Call Vet in 24-48 Hours if No Improvement</h3>
                <p className="text-yellow-800 text-sm mb-2"><strong>If ANY of these are true:</strong></p>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• Breathing rate &gt;30/min when awake and resting (not panting from heat/exercise)</li>
                  <li>• Fast breathing continues even in quiet, non-REM sleep phases</li>
                  <li>• Occasional cough or exercise intolerance developing</li>
                  <li>• Senior dog (8+ years) with new onset fast breathing</li>
                  <li>• Brachycephalic breed with worsening breathing sounds</li>
                </ul>
                <p className="text-yellow-800 font-medium mt-2">→ Track breathing rate 3x daily (morning, afternoon, night). Call vet if rates stay elevated or trend upward.</p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-red-900 mb-2">✗ Emergency - Go to Vet NOW</h3>
                <p className="text-red-800 text-sm mb-2"><strong>If ANY of these are present:</strong></p>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Breathing rate &gt;40/min while awake and resting</li>
                  <li>• Blue, purple, or white gums</li>
                  <li>• Open-mouth breathing with gasping or choking sounds</li>
                  <li>• Can't lie down comfortably - keeps standing or sitting upright</li>
                  <li>• Collapse or severe lethargy with labored breathing</li>
                  <li>• Coughing up blood or foam</li>
                  <li>• Distended/bloated abdomen (possible GDV/bloat)</li>
                </ul>
                <p className="text-red-800 font-medium mt-2">→ These are signs of respiratory distress or heart failure. Seek emergency care immediately.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Breed Considerations */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Breed-Specific Breathing Patterns</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Brachycephalic (Flat-Faced) Breeds</h3>
                <p className="text-orange-800 text-sm mb-2"><strong>Includes:</strong> Bulldogs, Pugs, Boston Terriers, French Bulldogs, Shih Tzus, Boxers, Pekingese</p>
                <p className="text-orange-700 text-sm">
                  Normal resting rate is higher (20-30/min) due to anatomical airway narrowing. Snoring and noisy breathing are common. Watch for sudden worsening, blue gums, or collapse - these breeds are prone to respiratory emergencies in heat/stress.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Large & Giant Breeds</h3>
                <p className="text-blue-800 text-sm mb-2"><strong>Includes:</strong> Great Danes, Mastiffs, St. Bernards, Newfoundlands, Irish Wolfhounds</p>
                <p className="text-blue-700 text-sm">
                  Prone to dilated cardiomyopathy (heart disease) starting at 4-8 years. If fast breathing develops in middle age, have heart evaluated. These breeds may breathe slightly slower (10-20/min) due to larger lung capacity.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Small Breeds</h3>
                <p className="text-purple-800 text-sm mb-2"><strong>Includes:</strong> Chihuahuas, Yorkshire Terriers, Pomeranians, Toy Poodles, Maltese</p>
                <p className="text-purple-700 text-sm">
                  Normal rate slightly higher (15-30/min) due to faster metabolism. Prone to collapsing trachea (honking cough) and mitral valve disease (heart murmur leading to CHF). Breathing rate &gt;35/min at rest warrants vet check.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Working & Sporting Breeds</h3>
                <p className="text-green-800 text-sm mb-2"><strong>Includes:</strong> Labrador Retrievers, Golden Retrievers, German Shepherds, Border Collies, Pointers</p>
                <p className="text-green-700 text-sm">
                  Athletic builds = efficient breathing. Normal resting rate often at low end (10-20/min). Sudden increase in breathing rate may indicate exercise-induced problems, bloat (especially deep-chested breeds), or heat stroke.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Track */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              What to Track and Report to Your Vet
            </h2>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-blue-900 font-medium mb-2">Keep a "Breathing Log" for 3-5 days if concerned:</p>
            </div>

            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Resting Breathing Rate (3x daily)</p>
                  <p className="text-gray-600 text-sm">Morning, afternoon, and evening when dog is calm and awake</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Sleeping Breathing Rate</p>
                  <p className="text-gray-600 text-sm">During quiet sleep (not REM) - helps establish baseline</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Gum Color</p>
                  <p className="text-gray-600 text-sm">Normal = pink. Concerning = pale, white, blue, or gray</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Exercise Tolerance</p>
                  <p className="text-gray-600 text-sm">Can they walk/play normally? Coughing after activity?</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Other Symptoms</p>
                  <p className="text-gray-600 text-sm">Coughing, appetite changes, lethargy, vomiting, behavioral changes</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Video of Breathing</p>
                  <p className="text-gray-600 text-sm">60-second video showing chest movement - incredibly helpful for vet assessment</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Expect at Vet */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-blue-600" />
              What to Expect at the Vet Visit
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Physical Examination ($50-$100)</h3>
                <p className="text-gray-700">Heart auscultation (listening for murmurs, arrhythmias), lung sounds (crackles, wheezes), gum color check, breathing effort assessment</p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Diagnostic Tests for Breathing Issues</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Chest X-rays:</strong> $200-$400 - shows heart size, lung patterns, fluid, masses, tracheal issues</li>
                  <li><strong>Echocardiogram (heart ultrasound):</strong> $400-$800 - definitive test for heart disease, valve function, chamber size</li>
                  <li><strong>Blood work (CBC + Chemistry):</strong> $150-$300 - checks for anemia, infection, organ function</li>
                  <li><strong>Blood pressure:</strong> $50-$100 - high BP can indicate heart disease</li>
                  <li><strong>ProBNP test:</strong> $150-$200 - blood test for heart failure (elevated if CHF present)</li>
                  <li><strong>Oxygen saturation (pulse oximetry):</strong> $20-$50 - measures blood oxygen levels</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Common Treatments</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Heart failure medications:</strong> Furosemide (diuretic) $30-$80/month, Pimobendan $60-$150/month, ACE inhibitors $20-$60/month</li>
                  <li><strong>Antibiotics for pneumonia:</strong> $40-$100 for course</li>
                  <li><strong>Oxygen therapy:</strong> $100-$300/day if hospitalized</li>
                  <li><strong>Weight loss program:</strong> Prescription diet + exercise plan</li>
                  <li><strong>Airway surgery (brachycephalic):</strong> $1,500-$4,000 for soft palate/nostril correction</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Dog Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/dog-shaking-wont-eat">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dog Shaking and Won't Eat</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Common causes of trembling with loss of appetite
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dog-vomiting-yellow-foam-night">
                <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dog Vomiting Yellow Foam at Night</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Bilious vomiting syndrome causes and solutions
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/senior-dog-weak-back-legs">
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Senior Dog Suddenly Weak Back Legs</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Causes and emergency signs of rear leg weakness in older dogs
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dog-ate-chocolate-3-hours-ago">
                <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dog Ate Chocolate 3 Hours Ago</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Emergency chocolate poisoning protocol and treatment timeline
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
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700">
                  View All Dog Symptoms →
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
            <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Concerned About Your Dog's Breathing Patterns?</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Tell our free AI veterinary assistant about your dog's breathing rate, sleep patterns, and other symptoms. 
                  Get instant guidance on whether fast breathing is normal REM sleep or requires vet attention.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Breathing Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  ✓ Available 24/7 ✓ Instant Risk Assessment ✓ All Dog Breeds ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
