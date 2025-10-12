import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Activity, Brain, Clock, ArrowRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function SeniorDogWeakBackLegs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <SEOHead 
        title="Senior Dog Suddenly Weak Back Legs: Causes & Urgent Care Guide | PetWellBot"
        description="Senior dog's back legs giving out? Learn about degenerative myelopathy, IVDD, FCE stroke, when it's an emergency, neurological tests you can do at home, and treatment options."
        keywords="senior dog weak back legs, dog back legs collapsing, degenerative myelopathy dogs, IVDD dogs, dog hind leg weakness, old dog can't stand"
        canonicalUrl="https://petwellbot.com/senior-dog-weak-back-legs"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Dog Symptoms", href: "/symptoms" },
              { label: "Senior Dog Weak Back Legs" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⚕️ NEUROLOGICAL - Requires Immediate Assessment
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Senior Dog Suddenly Weak Back Legs
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Hind leg weakness in older dogs can signal anything from arthritis to spinal strokes. 
              Learn to identify neurological emergencies vs gradual degeneration, perform home tests, and understand treatment timelines.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Analyze Symptoms with AI
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('neuro-test')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600"
              >
                <Brain className="w-5 h-5 mr-2" />
                Do Neurological Test
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="py-6 bg-red-50 border-y-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-red-600 mb-2">🚨 EMERGENCY VET NOW - DO NOT WAIT!</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800 mb-4">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Complete paralysis - dragging both back legs</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Sudden onset within 1-6 hours (spinal stroke/FCE)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Loss of bladder/bowel control (urinating/pooping without awareness)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Yelping/screaming in pain when touched</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Cannot stand up at all after trying multiple times</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Knuckling both back paws (walking on top of paw)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Rapid decline - fine this morning, paralyzed tonight</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Deep pain sensation lost (no response to toe pinch)</span>
                  </li>
                </ul>
                <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
                  <p className="font-bold text-yellow-800 mb-2">⏰ TIME-SENSITIVE WARNING (IVDD):</p>
                  <p className="text-sm text-gray-700">
                    If your dog has sudden paralysis from a herniated disc (IVDD), <span className="font-bold text-red-600">the first 24-48 hours determine if they'll ever walk again.</span> 
                    Emergency surgery within 12-24 hours gives 90% success rate. After 48 hours, permanent paralysis becomes much more likely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neurological Test Section */}
      <section id="neuro-test" className="py-12 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Brain className="w-8 h-8 text-blue-500" />
              5-Step Home Neurological Test (Do This First!)
            </h2>
            
            <Card className="mb-6 bg-blue-50 border-2 border-blue-400">
              <CardContent className="p-6">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-blue-700">Why this matters:</span> These tests differentiate between nerve/spinal cord damage (neurological) 
                  vs muscle/joint pain (orthopedic). Neurological issues are more urgent and require specialized care.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-blue-700 text-lg mb-3">Test #1: Proprioception (Paw Placement Test)</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">How to do it:</p>
                      <ol className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>1. Knuckle your dog's back paw over (flip it so top of paw touches ground)</li>
                        <li>2. Watch if they immediately flip it back to normal position</li>
                        <li>3. Test both back legs separately</li>
                      </ol>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-green-50 p-3 rounded-lg border border-green-300">
                        <p className="font-semibold text-green-700 text-sm mb-1">✓ NORMAL:</p>
                        <p className="text-xs text-gray-700">Immediately corrects paw (&lt;1 second). Knows where paw is in space.</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg border border-red-300">
                        <p className="font-semibold text-red-700 text-sm mb-1">✗ ABNORMAL (Neurological):</p>
                        <p className="text-xs text-gray-700">Leaves paw knuckled over 3+ seconds OR doesn't correct at all. Signals nerve damage.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-green-700 text-lg mb-3">Test #2: Panniculus Reflex (Skin Twitch Test)</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">How to do it:</p>
                      <ol className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>1. Use a pen tip to lightly poke along your dog's spine from neck to tail</li>
                        <li>2. Normal dogs will twitch the skin where you poke (like a horse shaking off a fly)</li>
                        <li>3. Note any "dead zone" where skin doesn't twitch</li>
                      </ol>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg border-2 border-yellow-400">
                      <p className="font-semibold text-yellow-800 text-sm mb-1">⚠️ What it means:</p>
                      <p className="text-xs text-gray-700">
                        If skin stops twitching at a specific point (e.g., lower back), that's where the spinal cord lesion/injury is located. 
                        Helps vet know which vertebrae to x-ray.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-purple-700 text-lg mb-3">Test #3: Deep Pain Sensation (Toe Pinch)</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">How to do it:</p>
                      <ol className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>1. Pinch the webbing between your dog's back toes HARD (like testing if you're dreaming)</li>
                        <li>2. Look for reaction: turning head, yelping, pulling leg away, dilated pupils</li>
                        <li>3. Withdrawal reflex alone doesn't count - you need conscious pain recognition</li>
                      </ol>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg border-2 border-red-400">
                      <p className="font-semibold text-red-700 text-sm mb-1">🚨 CRITICAL:</p>
                      <p className="text-xs text-gray-700">
                        <span className="font-bold">If no pain response to hard pinch = EMERGENCY.</span> Loss of deep pain means severe spinal cord damage. 
                        Without surgery within 24 hours, permanent paralysis is almost certain.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-orange-700 text-lg mb-3">Test #4: Wheelbarrowing (Front Leg Strength)</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">How to do it:</p>
                      <ol className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>1. Lift your dog's back end off ground (hold rear legs gently)</li>
                        <li>2. See if they can walk forward on front legs only</li>
                        <li>3. Normal dogs will walk normally, weak dogs will struggle or collapse</li>
                      </ol>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-300">
                      <p className="font-semibold text-blue-700 text-sm mb-1">Why this matters:</p>
                      <p className="text-xs text-gray-700">
                        Tests if weakness is isolated to back legs (spinal issue) or whole-body (systemic illness, cancer, organ failure).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-pink-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-pink-700 text-lg mb-3">Test #5: Tail Wag & Anal Tone (Nerve Function)</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">How to do it:</p>
                      <ol className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>1. See if your dog can still wag their tail normally</li>
                        <li>2. Gently touch around anus - should see sphincter tighten (pucker)</li>
                        <li>3. Check if they know when they've urinated/pooped</li>
                      </ol>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg border border-red-300">
                      <p className="font-semibold text-red-700 text-sm mb-1">Red flags (urgent):</p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Tail hanging limp (can't wag at all)</li>
                        <li>• No anal tone (anus stays open/relaxed)</li>
                        <li>• Urinating without awareness (dribbling)</li>
                        <li>• Fecal incontinence</li>
                      </ul>
                      <p className="text-xs text-gray-700 mt-2 font-semibold">
                        These signal damage to lowest spinal nerves. Surgery/treatment urgency is CRITICAL.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Top Causes Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Top 10 Causes of Senior Dog Hind Leg Weakness</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">#1</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Degenerative Myelopathy (DM) - Most Common in Seniors</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">What it is:</span> Progressive degeneration of spinal cord (like ALS in humans). NOT painful, just weakness.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Timeline:</span> Gradual over 6-12 months. Starts with one leg wobbling, progresses to both, eventually front legs.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Classic signs:</span> Knuckling back paws, scraping toenails, swaying rear, falls when standing still.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">At-risk breeds:</span> German Shepherds (1 in 5), Corgis, Boxers, Rhodesian Ridgebacks.
                      </p>
                      <p className="text-blue-600 text-sm font-semibold">
                        Prognosis: No cure. Physical therapy, harness support, wheels can maintain quality of life 1-3 years. Eventually progresses to full paralysis.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-sm">#2</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">IVDD (Herniated Disc) - EMERGENCY</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">What it is:</span> Spinal disc ruptures, compressing spinal cord. Can happen from jumping, playing, or random.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Timeline:</span> SUDDEN - fine one minute, paralyzed hours later. Sometimes progresses over 24-48 hours.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Classic signs:</span> Hunched back, yelping, won't jump/climb stairs, trembling, then paralysis.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">At-risk breeds:</span> Dachshunds (25% get IVDD), Corgis, Beagles, Shih Tzus, Basset Hounds.
                      </p>
                      <p className="text-red-600 text-sm font-semibold">
                        Treatment: Grade 1-3 (still walking): Strict crate rest 6-8 weeks, steroids, pain meds. Grade 4-5 (paralyzed): Emergency surgery $5,000-$8,000. Success rate 90% if within 24 hours.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">#3</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">FCE (Fibrocartilaginous Embolism) - "Spinal Stroke"</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">What it is:</span> Piece of disc material breaks off, blocks blood vessel in spinal cord. Like a stroke.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Timeline:</span> INSTANT - dog yelps during play, paralyzed within 30 minutes. No warning.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Classic signs:</span> Sudden paralysis during/after exercise, one-sided weakness (left leg worse than right), no pain after initial yelp.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">At-risk:</span> Large breed dogs (Labs, Golden Retrievers), often during vigorous activity.
                      </p>
                      <p className="text-purple-600 text-sm font-semibold">
                        Prognosis: NO surgery helps (damage is done). 70% recover with physical therapy over 2-6 weeks. Permanent paralysis in 30%.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-100 text-yellow-700 font-bold px-3 py-1 rounded-full text-sm">#4</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Lumbosacral Stenosis (LS Stenosis)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">What it is:</span> Narrowing of spinal canal at base of spine (where spine meets pelvis). Pinches nerves.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Classic signs:</span> Trouble rising from lying down, bunny-hopping, tail limpness, pain when tail is lifted.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">At-risk:</span> German Shepherds (most common), large working breeds.
                      </p>
                      <p className="text-yellow-600 text-sm font-semibold">
                        Treatment: Weight loss, physical therapy, gabapentin for nerve pain. Surgery if severe ($4,000-$6,000).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm">#5</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Hip Dysplasia/Severe Arthritis</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Difference from neuro:</span> This is JOINT pain, not nerve damage. Dog can feel paws, just hurts to move.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Classic signs:</span> Worse after rest (morning stiffness), better after warming up, limping, bunny-hopping.
                      </p>
                      <p className="text-green-600 text-sm font-semibold">
                        Treatment: Pain meds (Rimadyl, Gabapentin), joint supplements (glucosamine), weight loss, underwater treadmill.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-orange-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-orange-600 mb-2">#6: Spinal Tumor/Cancer</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Tumor on/in spinal cord. Gradual progressive weakness, neurological test abnormalities. Needs MRI. Poor prognosis.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-pink-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-pink-600 mb-2">#7: Vestibular Disease</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      "Stroke-like" episode. Head tilt, circling, falling sideways. NOT back leg specific. Usually improves in 72 hours.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-teal-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-teal-600 mb-2">#8: Diabetes/Cushings</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Muscle wasting from metabolic disease. Whole-body weakness, not just back legs. Needs blood work.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-indigo-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-indigo-600 mb-2">#9: Tick Paralysis</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Neurotoxin from attached tick. Starts in back legs, progresses forward. Remove tick = rapid recovery.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-red-600 mb-2">#10: Myasthenia Gravis</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Autoimmune disease affecting nerve-muscle connection. Weakness worse with exercise, better after rest.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Decision Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-500" />
              Decision Tree: Home Care vs Vet vs Emergency
            </h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-red-700 text-lg mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    EMERGENCY VET NOW (Within 1-2 Hours)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sudden onset paralysis (fine this morning, can't walk tonight)</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Loss of deep pain sensation (no response to hard toe pinch)</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cannot stand or walk at all</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Screaming in pain, hunched back, trembling</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Loss of bladder/bowel control</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-100 rounded-lg">
                    <p className="text-sm font-semibold text-red-800">
                      🚨 Why urgent: Spinal cord has 12-24 hour window for surgery. After 48 hours, paralysis becomes permanent.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-yellow-700 text-lg mb-3 flex items-center gap-2">
                    <Clock className="w-6 h-6" />
                    VET VISIT (Within 24-48 Hours)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Progressive weakness over 1-2 weeks (can still walk but wobbly)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Knuckling back paws, scraping toenails when walking</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Trouble rising but can walk once up</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Abnormal proprioception test (doesn't flip paw back)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Swaying, falling over when standing still</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                    <p className="text-sm font-semibold text-yellow-800">
                      ⚠️ What vet will do: Neurological exam, x-rays, possibly MRI. May diagnose DM, arthritis, or early IVDD needing meds/therapy.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-green-700 text-lg mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    MONITOR AT HOME (24-48 Hours)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Mild stiffness after rest, better after warming up (arthritis pattern)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Can stand and walk normally, just slower or careful</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Normal neurological tests (proprioception, pain sensation OK)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Recent overexertion (long hike yesterday, now sore)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Eating, drinking, acting normal otherwise</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">
                      ✓ Home care: Rest, joint supplements, gentle massage, heat therapy. If no improvement in 48 hours → see vet.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Symptoms Section */}
      <section className="py-12 bg-gradient-to-br from-blue-100 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Related Senior Dog Health Issues
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Hind leg weakness often accompanies other aging-related symptoms. Explore related senior dog conditions:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/dog-limping-front-left-leg-suddenly">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-blue-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-blue-600">Dog Limping Front Left Leg Suddenly</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Front leg lameness combined with back leg weakness may signal systemic arthritis or neurological disease affecting multiple limbs.
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dog-wont-drink-water-will-eat">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-teal-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-teal-600">Dog Won't Drink Water But Will Eat</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Senior dogs with mobility issues may avoid water bowl due to pain when walking. Learn to spot dehydration in paralyzed dogs.
                    </p>
                    <div className="flex items-center text-teal-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dog-diarrhea-blood-emergency">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-red-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-red-600">Dog Diarrhea with Blood Emergency</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Paralyzed dogs may lose bowel control, leading to bloody diarrhea from straining. Understand when GI bleeding signals separate emergency.
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dog-vomiting-yellow-foam-night">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-yellow-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-yellow-600">Dog Vomiting Yellow Foam at Night</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Immobile dogs often vomit bile from lying down too long. Learn how to adjust feeding schedules for senior dogs with limited mobility.
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link to="/symptoms">
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
                <h2 className="text-3xl font-bold mb-4">Upload Photo of Your Dog's Walking Pattern</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Record a 10-second video of your senior dog walking and upload to our AI assistant. 
                  Get instant analysis of gait abnormalities, neurological red flags, and urgency assessment.
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Analyze Walking Symptoms Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  ✓ Video Upload Supported ✓ Gait Analysis ✓ Neurological Test Guidance ✓ Emergency Assessment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Senior Dog Weak Back Legs - Neurological Emergency Guide",
            "description": "Comprehensive guide to hind leg weakness in senior dogs, including neurological testing, emergency signs, and treatment options",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Canine Hind Limb Weakness and Paralysis",
              "possibleCause": [
                "Degenerative myelopathy",
                "Intervertebral disc disease (IVDD)",
                "Fibrocartilaginous embolism (FCE)",
                "Lumbosacral stenosis",
                "Hip dysplasia"
              ]
            }
          })
        }}
      />
    </div>
  );
}
