import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Clock, Activity, ArrowRight, CheckCircle, XCircle, Volume2 } from "lucide-react";
import { Link } from "wouter";

export default function GuineaPigWheekingConstantly() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <SEOHead 
        title="Guinea Pig Wheeking Constantly - Normal vs Excessive Vocalization Causes | PetWellBot"
        description="Guinea pig wheeking constantly? Learn normal wheeking (food anticipation, excitement) vs excessive vocalization causes (pain, loneliness, dominance, illness) and solutions."
        keywords="guinea pig wheeking, guinea pig sounds, guinea pig screaming, guinea pig won't stop squeaking, guinea pig vocalization, guinea pig noisy"
        canonicalUrl="https://petwellbot.com/guinea-pig-wheeking-constantly"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Small Pet Symptoms", href: "/symptoms" },
              { label: "Guinea Pig Wheeking Constantly" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                👁️ MONITOR - Normal Behavior vs Medical Issue
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Guinea Pig Wheeking Constantly: Normal vs Excessive Vocalization
            </h1>
            <p className="text-xl text-amber-100 mb-6">
              Wheeking is normal communication for food, attention, and excitement. But CONSTANT wheeking (all day/night) signals pain, loneliness, dominance issues, or illness. 
              Learn when wheeking is normal vs when it requires veterinary attention.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Behavior Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('normal-vs-excessive')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-amber-600"
              >
                <Volume2 className="w-5 h-5 mr-2" />
                Normal vs Excessive Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-6 bg-orange-50 border-y-2 border-orange-300" id="normal-vs-excessive">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">⚠️ See Vet If Wheeking Accompanied By:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Pain sounds:</strong> Shrieking, screaming, teeth chattering when touched</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Not eating or drinking</strong> despite constant wheeking</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Lethargy, hunched posture, eyes half-closed</strong></span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Respiratory sounds:</strong> Wheezing, crackling, labored breathing</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Weight loss, dull coat, not grooming</strong></span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Sudden personality change</strong> (friendly pig now wheeking aggressively)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Normal vs Excessive */}
        <Card className="border-amber-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-amber-600" />
              Normal Wheeking vs Excessive Vocalization
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  NORMAL Wheeking
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ <strong>Timing:</strong> When hearing fridge open, plastic bag rustle, food prep sounds</li>
                  <li>✓ <strong>Duration:</strong> 30 seconds to 2 minutes, stops when fed or realizes no food coming</li>
                  <li>✓ <strong>Context:</strong> Anticipation, excitement, greeting owner after work</li>
                  <li>✓ <strong>Sound quality:</strong> High-pitched, happy "wheek wheek wheek" (sounds excited, not distressed)</li>
                  <li>✓ <strong>Frequency:</strong> 5-10 times per day around feeding times, greetings</li>
                  <li>✓ <strong>Body language:</strong> Alert, popcorning, running to cage front, ears forward</li>
                  <li>✓ <strong>Stops when:</strong> Gets food, attention, or realizes false alarm</li>
                  <li>✓ <strong>Other behaviors normal:</strong> Eating well, active, social, grooming</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  EXCESSIVE (Problem)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✗ <strong>Timing:</strong> Constant, all day/night, NO relation to feeding schedule</li>
                  <li>✗ <strong>Duration:</strong> Goes on for 10+ minutes continuously, or repeats every few minutes all day</li>
                  <li>✗ <strong>Context:</strong> Wheeking even when just fed, middle of night, when alone</li>
                  <li>✗ <strong>Sound quality:</strong> Distressed, shrill, screaming quality OR hoarse from overuse</li>
                  <li>✗ <strong>Frequency:</strong> 50+ times per day, hourly, relentless</li>
                  <li>✗ <strong>Body language:</strong> Pacing, bar biting, aggression, hiding, teeth chattering</li>
                  <li>✗ <strong>Never stops:</strong> Continues wheeking even after getting food/attention</li>
                  <li>✗ <strong>Other changes:</strong> Weight loss, aggression, not eating, lethargy, fur loss</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
              <p className="text-blue-900 font-medium">
                🔊 <strong>Key Difference:</strong> Normal wheeking is CONTEXTUAL (food-related, time-limited, stops when needs met). 
                Excessive wheeking is CONSTANT (no obvious trigger, doesn't stop, disrupts sleep/daily life). If you can't identify WHY pig is wheeking, investigate further.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Causes of Excessive Wheeking */}
        <Card className="border-amber-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10 Causes of Constant/Excessive Wheeking
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Pain (URGENT - Medical Issue)</h3>
                <p className="text-sm text-gray-700 mb-1">Bladder stones (common in guinea pigs), dental disease, arthritis, injury. Guinea pig vocalizes when in pain. Wheeking becomes shrieking/screaming when touched or moving. May wheek constantly if chronic pain.</p>
                <p className="text-xs text-red-700"><strong>Signs:</strong> Hunched posture, reluctance to move, screaming when urinating (bladder stones), weight loss, not eating. <strong>Emergency vet:</strong> X-rays $100-$200, pain meds (meloxicam) $20-$50, bladder stone surgery $300-$800. Don't ignore pain vocalizations.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Loneliness (MOST COMMON Behavioral Cause)</h3>
                <p className="text-sm text-gray-700 mb-1">Guinea pigs are HERD animals - they suffer psychologically when housed alone. Constant wheeking = distress call for companionship. Single pigs wheek excessively for attention because they're desperately lonely.</p>
                <p className="text-xs text-orange-700"><strong>Solution:</strong> Get a second guinea pig (same-sex pair or neutered male + females). Proper bonding introduction over 1-2 weeks. 90% reduction in wheeking once bonded companion introduced. Cost: adoption $20-$40, larger cage needed (10.5 sq ft minimum for pair).</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Inadequate Diet/Constant Hunger</h3>
                <p className="text-sm text-gray-700 mb-1">Guinea pigs need UNLIMITED hay 24/7 (80% of diet). If only getting pellets 2x daily + limited veggies, they're HUNGRY and will wheek constantly for food. Hay provides bulk, keeps GI tract moving, allows constant grazing.</p>
                <p className="text-xs text-yellow-700"><strong>Fix:</strong> Unlimited timothy hay (refill 2-3x daily, never empty), 1/8 cup pellets daily (Oxbow Guinea Pig pellets with vitamin C), 1 cup fresh veggies daily (bell peppers, romaine, cilantro). Guinea pigs graze 20+ hours per day - need constant food access.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Learned Behavior (Reinforcement)</h3>
                <p className="text-sm text-gray-700 mb-1">Guinea pig learns: wheek → human gives treat/attention → wheek more. Accidentally trained to wheek constantly. Reinforcement every time you respond = wheeking escalates.</p>
                <p className="text-xs text-green-700"><strong>Fix:</strong> IGNORE attention-seeking wheeking. Only respond/give treats when pig is QUIET. Put on feeding schedule (same times daily) so pig knows when to expect food. Don't give random treats throughout day (reinforces begging). Improvement in 1-2 weeks of consistency.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Dominance/Territory Issues (Multi-Pig Homes)</h3>
                <p className="text-sm text-gray-700 mb-1">Dominant guinea pig wheeking aggressively to assert status over cage mate. "Rumble-strutting" + loud wheeking = dominance display. Can escalate to fighting if not addressed.</p>
                <p className="text-xs text-blue-700"><strong>Normal vs Problem:</strong> NORMAL = rumblestrutting + wheeking, no injuries, pigs still eat together/sleep near each other. PROBLEM = constant aggressive wheeking, chasing, biting, wounds, weight loss in submissive pig. Solution: Larger cage (more space reduces conflict), multiple hideys (2 exits each), separate feeding stations. If fighting severe, may need to separate permanently.</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Boredom/Inadequate Enrichment</h3>
                <p className="text-sm text-gray-700 mb-1">Empty cage with only food bowl = bored guinea pig. Wheeking for stimulation/entertainment. Intelligent animals need mental/physical activity.</p>
                <p className="text-xs text-purple-700"><strong>Enrichment:</strong> Tunnels ($15-$30), hideys (2+ per pig), fleece forests, chew toys (willow, hay-based), floor time 2-4 hours daily (supervised in pig-proofed room), foraging opportunities (scatter pellets in hay). Rearrange cage weekly for novelty.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Respiratory Illness</h3>
                <p className="text-sm text-gray-700 mb-1">URI (upper respiratory infection), pneumonia causes labored breathing. Wheeking sounds raspy/hoarse. May wheek more frequently because breathing uncomfortable.</p>
                <p className="text-xs text-pink-700"><strong>Signs:</strong> Nasal discharge, sneezing, wheezing/crackling sounds, lethargy, hunched posture, not eating. <strong>Treatment:</strong> Vet visit $50-$100, antibiotics (enrofloxacin, trimethoprim-sulfa) $30-$80. Must treat - can be fatal. Recovery 1-2 weeks.</p>
              </div>

              <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50">
                <h3 className="font-bold text-gray-900">#8 Hormonal Behavior (Females in Heat)</h3>
                <p className="text-sm text-gray-700 mb-1">Female guinea pigs cycle every 15-17 days. During estrus (heat), may wheek more, rumblestrut, mount cage mates, act restless. Lasts 24-48 hours.</p>
                <p className="text-xs text-indigo-700"><strong>Normal or Problem?</strong> NORMAL if only during heat, pig otherwise healthy, eating well. PROBLEM if constant regardless of cycle, or if male is present (pregnancy risk - separate sexes unless neutered). Spaying $200-$500 reduces hormonal wheeking but risky surgery in guinea pigs.</p>
              </div>

              <div className="p-3 border-l-4 border-teal-500 bg-teal-50">
                <h3 className="font-bold text-gray-900">#9 Cage Too Small (Stress)</h3>
                <p className="text-sm text-gray-700 mb-1">Pet store cages (typically 4-6 sq ft) are CRUELLY small. Guinea pig stressed, frustrated, wheeking in distress. Minimum: 7.5 sq ft for one pig, 10.5 sq ft for pair. Bigger is better.</p>
                <p className="text-xs text-teal-700"><strong>Upgrade:</strong> C&amp;C cage (Cubes &amp; Coroplast) DIY $80-$150 for 2x4 grid (10.5 sq ft). Midwest Guinea Habitat Plus $80-$100 (10.5 sq ft). Wheeking often reduces dramatically with more space.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#10 Environmental Stress</h3>
                <p className="text-sm text-gray-700 mb-1">Cage near TV/speakers (constant noise), predator pets (cat staring at cage), high-traffic area, temperature extremes (too hot/cold), drafts. Guinea pig wheeking from stress/fear.</p>
                <p className="text-xs text-gray-700"><strong>Fix:</strong> Quiet location away from loud noises, block visual access from predator pets, temperature 65-75°F, no drafts. Guinea pigs need calm, predictable environment. Improvement within days of reducing stressors.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guinea Pig Sounds Guide */}
        <Card className="border-amber-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Volume2 className="h-6 w-6 text-amber-600" />
              Complete Guinea Pig Sounds Guide: What Each Means
            </h2>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900">1. Wheeking (Wheek-Wheek-Wheek)</h3>
                <p className="text-sm text-gray-700"><strong>Meaning:</strong> Excitement, anticipation, "I want food!", greeting. High-pitched, loud, repetitive.</p>
                <p className="text-xs text-green-700"><strong>Context:</strong> Fridge opening, owner entering room, mealtime. NORMAL behavior.</p>
              </div>

              <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900">2. Purring (Low Rumbling Vibration)</h3>
                <p className="text-sm text-gray-700"><strong>Meaning:</strong> Contentment (deep, relaxed purr) OR annoyance (short, choppy purr). Context matters.</p>
                <p className="text-xs text-blue-700"><strong>Happy purr:</strong> During petting, relaxed body. <strong>Annoyed purr:</strong> Wants to be left alone, tense body.</p>
              </div>

              <div className="p-3 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900">3. Rumblestrutting (Deep Rumble + Swaying Walk)</h3>
                <p className="text-sm text-gray-700"><strong>Meaning:</strong> Dominance display, mating behavior. Males rumble at females, pigs establish hierarchy.</p>
                <p className="text-xs text-purple-700"><strong>Normal behavior</strong> in multi-pig homes. Only concern if escalates to fighting.</p>
              </div>

              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">4. Chutting (Quiet Chirps)</h3>
                <p className="text-sm text-gray-700"><strong>Meaning:</strong> Contentment, curiosity. Soft, repetitive sounds while exploring or eating.</p>
                <p className="text-xs text-yellow-700"><strong>Adorable and normal.</strong> Happy guinea pig exploring environment.</p>
              </div>

              <div className="p-3 bg-pink-50 border-l-4 border-pink-500">
                <h3 className="font-bold text-pink-900">5. Cooing (Soft Murmuring)</h3>
                <p className="text-sm text-gray-700"><strong>Meaning:</strong> Soothing sound mothers make to babies, or bonded pigs to each other. Affection.</p>
                <p className="text-xs text-pink-700"><strong>Sweet bonding behavior.</strong> Sign of secure, happy relationship.</p>
              </div>

              <div className="p-3 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900">6. Teeth Chattering (Rapid Clicking)</h3>
                <p className="text-sm text-gray-700"><strong>Meaning:</strong> Anger, aggression, warning. "Back off or I'll bite!" Often with raised head, tense body.</p>
                <p className="text-xs text-orange-700"><strong>Warning sign.</strong> If directed at you: put pig down, give space. Between pigs: monitor for fighting.</p>
              </div>

              <div className="p-3 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900">7. Shrieking/Screaming (LOUD, High-Pitched Scream)</h3>
                <p className="text-sm text-gray-700"><strong>Meaning:</strong> PAIN, FEAR, DISTRESS. Emergency sound. Sounds like someone stepping on pig.</p>
                <p className="text-xs text-red-700"><strong>Investigate immediately.</strong> Check for injury, illness, stuck limb. If screaming when touched: VET NOW (pain issue).</p>
              </div>

              <div className="p-3 bg-indigo-50 border-l-4 border-indigo-500">
                <h3 className="font-bold text-indigo-900">8. Hissing (Sharp Exhale)</h3>
                <p className="text-sm text-gray-700"><strong>Meaning:</strong> Annoyance, "leave me alone." Less aggressive than teeth chattering but still warning.</p>
                <p className="text-xs text-indigo-700"><strong>Respect the hiss.</strong> Guinea pig wants space. Common when new pigs first meet.</p>
              </div>

              <div className="p-3 bg-teal-50 border-l-4 border-teal-500">
                <h3 className="font-bold text-teal-900">9. Chirping (Bird-Like Sound) - RARE</h3>
                <p className="text-sm text-gray-700"><strong>Meaning:</strong> Mystery sound. Only some guinea pigs ever make it. Theories: trance-like state, stress, hormonal.</p>
                <p className="text-xs text-teal-700"><strong>Extremely rare.</strong> Other pigs freeze and listen when one chirps. Not fully understood.</p>
              </div>

              <div className="p-3 bg-gray-50 border-l-4 border-gray-500">
                <h3 className="font-bold text-gray-900">10. Whining (Sad, Complaining Sound)</h3>
                <p className="text-sm text-gray-700"><strong>Meaning:</strong> Annoyance, doesn't want to do something. Often when being picked up if pig doesn't like handling.</p>
                <p className="text-xs text-gray-700"><strong>Communication.</strong> Pig is tolerating but not enjoying. Not emergency, just preference.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Solutions */}
        <Card className="border-amber-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-amber-600" />
              How to Reduce Excessive Wheeking: Step-by-Step Solutions
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3">Step 1: Rule Out Medical Issues (FIRST PRIORITY)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Vet exam:</strong> Check for pain (bladder stones, dental disease, arthritis), respiratory infection, illness</li>
                  <li>• <strong>Red flags:</strong> Shrieking when touched, not eating, weight loss, lethargy, labored breathing</li>
                  <li>• <strong>Cost:</strong> Exotic vet exam $50-$100, X-rays if needed $100-$200, treatment varies</li>
                  <li>• <strong>Don't skip this step:</strong> Pain = emergency. Treat medical before addressing behavioral.</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 border-2 border-orange-300 rounded-lg">
                <h3 className="font-bold text-orange-900 mb-3">Step 2: Get a Companion (If Single Pig)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Guinea pigs NEED companionship:</strong> It's not optional. Single housing = psychological distress.</li>
                  <li>• <strong>Best pairs:</strong> 2 neutered males, 2 females, or neutered male + female(s). Baby + adult often works well.</li>
                  <li>• <strong>Bonding process:</strong> Neutral territory introduction, supervised meetings, 1-2 weeks gradual integration</li>
                  <li>• <strong>Result:</strong> 80-90% reduction in attention-seeking wheeking once bonded with companion</li>
                  <li>• <strong>Resources:</strong> Guinea pig rescues for bonded pairs, larger cage needed (10.5+ sq ft)</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-3">Step 3: Fix Diet (Unlimited Hay is KEY)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Unlimited timothy hay 24/7:</strong> Never empty. Refill 2-3x daily. Use hay rack + pile on floor.</li>
                  <li>• <strong>Pellets:</strong> 1/8 cup daily (Oxbow Cavy Cuisine with vitamin C). NOT unlimited - causes obesity.</li>
                  <li>• <strong>Veggies:</strong> 1 cup daily (bell peppers HIGH in vitamin C, romaine, cilantro, parsley). Feed 1-2x daily.</li>
                  <li>• <strong>Vitamin C:</strong> 10-50mg daily (critical - pigs can't make own). From veggies or supplements.</li>
                  <li>• <strong>Result:</strong> Constant access to hay reduces food-begging wheeking significantly</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3">Step 4: Establish Feeding Schedule (Reduce Learned Begging)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Consistent times:</strong> Feed veggies same time daily (e.g., 8 AM, 6 PM). Pellets once daily.</li>
                  <li>• <strong>IGNORE wheeking between meals:</strong> Don't give treats randomly. No reinforcement for begging.</li>
                  <li>• <strong>Only reward quiet behavior:</strong> If pig wheeking, wait for 30 seconds silence, THEN give treat.</li>
                  <li>• <strong>Timeline:</strong> 1-2 weeks of consistency, wheeking reduces as pig learns schedule</li>
                  <li>• <strong>Warning:</strong> If you give in "just once," you reset training. Must be consistent.</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3">Step 5: Increase Cage Size &amp; Enrichment</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Minimum cage size:</strong> 7.5 sq ft (1 pig), 10.5 sq ft (2 pigs). C&amp;C cages or Midwest Guinea Habitat.</li>
                  <li>• <strong>Enrichment:</strong> 2+ hideys (with 2 exits), tunnels, fleece forests, chew toys, ramps/levels</li>
                  <li>• <strong>Floor time:</strong> 2-4 hours daily supervised in pig-proofed area (playpen, bathroom, bedroom)</li>
                  <li>• <strong>Foraging:</strong> Scatter pellets in hay, hide veggies, stuff hay in cardboard tubes</li>
                  <li>• <strong>Result:</strong> Bored pigs wheek for entertainment. Enriched pigs too busy to wheek constantly.</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
                <h3 className="font-bold text-purple-900 mb-3">Step 6: Reduce Environmental Stress</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Location:</strong> Quiet room, away from TV/speakers, no high-traffic chaos</li>
                  <li>• <strong>Predators:</strong> No cats/dogs with visual access to cage (even friendly pets = stress)</li>
                  <li>• <strong>Temperature:</strong> 65-75°F ideal. Too hot (&gt;80°F) or cold (&lt;60°F) = stress wheeking</li>
                  <li>• <strong>Routine:</strong> Consistent schedule, gradual changes, predictable environment</li>
                  <li>• <strong>Hiding:</strong> Pigs need ability to hide/feel secure. Clear-sided cages = vulnerable feeling.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to Worry */}
        <Card className="border-amber-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-amber-600" />
              When Excessive Wheeking Requires Immediate Vet Visit
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900">🚨 EMERGENCY VET NOW:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Shrieking/screaming</strong> when touched, urinating, or moving (PAIN)</li>
                  <li>• <strong>Constant wheeking + not eating/drinking</strong> for 12+ hours (GI stasis risk - fatal in 24-48h)</li>
                  <li>• <strong>Labored breathing + wheezing sounds</strong> (respiratory distress)</li>
                  <li>• <strong>Blood in urine</strong> + painful wheeking (bladder stones emergency)</li>
                  <li>• <strong>Collapsed, lethargic, cold to touch</strong> + wheeking weakly (shock/dying)</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900">⚠️ VET WITHIN 24-48 HOURS:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Wheeking sounds hoarse/raspy</strong> (possible respiratory infection)</li>
                  <li>• <strong>Weight loss + excessive wheeking</strong> (dental disease, illness)</li>
                  <li>• <strong>Hunched posture, not grooming, dull coat</strong> + increased vocalization (pain/illness)</li>
                  <li>• <strong>Sudden personality change</strong> (friendly pig now aggressive + wheeking)</li>
                  <li>• <strong>Excessive wheeking for 2+ weeks</strong> despite environmental changes</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">📋 MONITOR (Likely Behavioral):</h3>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• <strong>Wheeking only around feeding times</strong> (normal, just enthusiastic)</li>
                  <li>• <strong>Single pig wheeking frequently</strong> (loneliness - get companion)</li>
                  <li>• <strong>Otherwise healthy</strong> (eating, active, normal weight, good coat)</li>
                  <li>• <strong>Started after schedule change</strong> (new feeding time, owner working different hours)</li>
                  <li>• <strong>Improvement with enrichment/schedule changes</strong> (behavioral, not medical)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Small Pet Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/hamster-not-eating-drinking">
                <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Hamster Not Eating or Drinking</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Emergency causes and critical care for hamsters
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
                <Button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700">
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
            <Card className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Guinea Pig Wheeking Constantly? Get Expert Analysis</h2>
                <p className="text-xl mb-6 text-amber-100">
                  Tell our free AI veterinary assistant about the wheeking pattern, frequency, context, and your guinea pig's living situation. 
                  Get instant guidance on whether this is normal behavior or requires veterinary attention.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-amber-600 hover:bg-amber-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Behavior Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-amber-100">
                  ✓ Available 24/7 ✓ Normal vs Excessive Analysis ✓ Exotic Pet Specialist ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
