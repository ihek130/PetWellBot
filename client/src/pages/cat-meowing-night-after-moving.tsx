import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { AlertTriangle, Heart, Moon, Clock, Activity, ArrowRight, CheckCircle, XCircle, Home } from "lucide-react";
import { Link } from "wouter";

export default function CatMeowingNightAfterMoving() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <SEOHead 
        title="Cat Meowing at Night After Moving - Stress Adjustment & Solutions | PetWellBot"
        description="Cat crying and meowing all night after moving to new home? Learn normal adjustment timeline, stress reduction techniques, and when excessive vocalization signals a problem."
        keywords="cat meowing at night after moving, cat crying new home, cat yowling after relocation, cat adjustment moving house"
        canonicalUrl="https://petwellbot.com/cat-meowing-night-after-moving"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Cat Symptoms", href: "/symptoms" },
              { label: "Cat Meowing at Night After Moving" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                🌙 CAN WAIT - Normal Adjustment
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cat Meowing at Night After Moving: Adjustment Guide
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Night vocalization after moving is normal stress response. Most cats adjust within 1-2 weeks. 
              Learn calming techniques, adjustment timeline, and when excessive meowing signals medical issues.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Behavior Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-purple-600"
              >
                <Clock className="w-5 h-5 mr-2" />
                Adjustment Timeline
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-6 bg-yellow-50 border-y-2 border-yellow-300" id="timeline">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-yellow-900 mb-2">⚠️ See Vet If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Meowing continues 3+ weeks after move with no improvement</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Cat not eating or drinking despite quiet environment</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Painful-sounding cries (could be injury from move)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Senior cat (8+ years) with sudden excessive vocalization (hyperthyroidism, cognitive dysfunction)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Straining in litter box with crying (UTI/blockage)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Aggressive behavior or hiding + won't eat for 48+ hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Normal vs Concerning */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-purple-600" />
              Normal Adjustment vs Medical Issue
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  NORMAL Stress Meowing
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ <strong>Context:</strong> Only started after move (was quiet before)</li>
                  <li>✓ <strong>Pattern:</strong> Worst first 2-3 nights, gradually improving</li>
                  <li>✓ <strong>Eating/drinking:</strong> Still eating meals (even if less than usual)</li>
                  <li>✓ <strong>Litter box use:</strong> Using new litter box normally</li>
                  <li>✓ <strong>Daytime behavior:</strong> Explores during day, may hide but comes out for food</li>
                  <li>✓ <strong>Type of meow:</strong> Seeking attention, anxious calls, pacing</li>
                  <li>✓ <strong>Response:</strong> Calms down when comforted (temporarily)</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  MEDICAL Issue (See Vet)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✗ <strong>Context:</strong> Meowing getting WORSE after 1 week, not better</li>
                  <li>✗ <strong>Pattern:</strong> Constant, increasing in intensity</li>
                  <li>✗ <strong>Eating/drinking:</strong> Refusing food 24+ hours, not drinking</li>
                  <li>✗ <strong>Litter box:</strong> Straining, blood in urine, not using box</li>
                  <li>✗ <strong>Daytime behavior:</strong> Hiding 100% of time, aggressive when approached</li>
                  <li>✗ <strong>Type of meow:</strong> Painful cries, yowling, distress sounds</li>
                  <li>✗ <strong>Response:</strong> Doesn't calm down when comforted, hisses</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-900 font-medium">
                🕒 <strong>Expected Timeline:</strong> 80% of cats adjust within 1-2 weeks. By week 3, should be sleeping through night. 
                If still crying nightly at week 4, consult vet to rule out medical issues.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Why Cats Meow After Moving */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Cats Meow at Night After Moving
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#1 Disorientation & Anxiety</h3>
                <p className="text-sm text-gray-700 mb-1">Cats are territorial. New smells, sounds, layout = overwhelming. Night is scariest (no visual confirmation of safety).</p>
                <p className="text-xs text-purple-700"><strong>Instinct:</strong> Calling for "familiar" to return, checking if alone/vulnerable</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#2 Seeking Territory Boundaries</h3>
                <p className="text-sm text-gray-700 mb-1">Cats vocalize to establish territory and locate resources (litter, food, hiding spots) in dark.</p>
                <p className="text-xs text-blue-700"><strong>Behavior:</strong> Pacing hallways, meowing at doors, checking rooms repeatedly</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#3 Attention-Seeking (Reinforcement)</h3>
                <p className="text-sm text-gray-700 mb-1">If you respond to meowing (feeding, petting, talking), cat learns crying = attention. Creates cycle.</p>
                <p className="text-xs text-green-700"><strong>Fix:</strong> Ignore nighttime meowing (hard but necessary), reward quiet behavior only</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#4 Energy Release (Boredom)</h3>
                <p className="text-sm text-gray-700 mb-1">Moving = stressful but also under-stimulated. Cat hasn't explored or played enough during day.</p>
                <p className="text-xs text-yellow-700"><strong>Solution:</strong> Tire out with intense play session 1-2 hours before bed</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#5 Searching for "Old Home"</h3>
                <p className="text-sm text-gray-700 mb-1">Some cats vocalize looking for previous territory, especially at night when quiet and can "listen" for familiar sounds.</p>
                <p className="text-xs text-orange-700"><strong>Timeline:</strong> Usually stops within 5-7 days as cat accepts new territory</p>
              </div>

              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#6 Senior Cat Cognitive Dysfunction</h3>
                <p className="text-sm text-gray-700 mb-1">Moving can trigger dementia symptoms in cats 12+ years. Disorientation worse at night.</p>
                <p className="text-xs text-red-700"><strong>Signs:</strong> Wandering, staring at walls, forgetting litter location, excessive vocalization. See vet for medication (Selegiline).</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Solutions */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Home className="h-6 w-6 text-purple-600" />
              How to Stop Nighttime Meowing After Move
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
                <h3 className="font-bold text-purple-900 mb-2">🏠 Phase 1: Gradual Territory Introduction (Days 1-3)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Start small:</strong> Confine cat to ONE ROOM with all resources (litter, food, water, bed, toys)</li>
                  <li>• <strong>Why it works:</strong> Smaller space = less overwhelming, cat can fully claim territory faster</li>
                  <li>• <strong>Spend time there:</strong> Read, work in that room so cat associates space with your presence</li>
                  <li>• <strong>After 2-3 days:</strong> Gradually open access to more rooms (one room per day)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Proven Calming Techniques:</h3>
                
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 border-l-4 border-green-500">
                    <h4 className="font-medium text-gray-900 mb-1">Feliway Pheromone Diffuser (80% success rate)</h4>
                    <p className="text-sm text-gray-700">Plug-in diffuser releases calming facial pheromones. Takes 7-14 days to work. Cost: $30-$40/month.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-blue-500">
                    <h4 className="font-medium text-gray-900 mb-1">Pre-Bedtime Play Routine</h4>
                    <p className="text-sm text-gray-700">15-20 minutes intense play (feather wand, laser) 1-2 hours before bed. Mimics "hunt-eat-groom-sleep" natural cycle. Tires cat out.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-yellow-500">
                    <h4 className="font-medium text-gray-900 mb-1">Nightlight + White Noise</h4>
                    <p className="text-sm text-gray-700">Dim light reduces disorientation. White noise machine masks unfamiliar house sounds that trigger anxiety.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-purple-500">
                    <h4 className="font-medium text-gray-900 mb-1">Bedtime Meal</h4>
                    <p className="text-sm text-gray-700">Feed largest meal right before bed. Full stomach promotes sleep. Small snack if cat wakes at 3 AM can reset sleep cycle.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-pink-500">
                    <h4 className="font-medium text-gray-900 mb-1">Comfort Items from Old Home</h4>
                    <p className="text-sm text-gray-700">Unwashed blanket, bed, or toys with familiar scent. Don't wash until fully adjusted (2-3 weeks).</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-orange-500">
                    <h4 className="font-medium text-gray-900 mb-1">Ignore Night Meowing (Hardest but Most Important)</h4>
                    <p className="text-sm text-gray-700">DO NOT respond to meowing (no talking, feeding, playing). Even negative attention reinforces behavior. Use earplugs for first week if needed.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                <h3 className="font-medium text-yellow-900 mb-2">💊 Supplements (If Behavioral Methods Fail):</h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• <strong>Zylkene ($20-$30):</strong> Milk protein-based calming supplement. 5-7 days to take effect.</li>
                  <li>• <strong>L-Theanine/Anxitane ($15-$25):</strong> Amino acid reduces anxiety. Safe for long-term use.</li>
                  <li>• <strong>CBD Oil ($30-$60):</strong> Some cats respond well. Use pet-specific, THC-free. Start low dose.</li>
                  <li>• <strong>Prescription anti-anxiety (vet only):</strong> Gabapentin or Fluoxetine for severe cases.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-purple-600" />
              Expected Adjustment Timeline
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-red-50 border-l-4 border-red-500">
                <h3 className="font-bold text-red-900">Days 1-3: Worst Phase</h3>
                <p className="text-sm text-gray-700">Most intense meowing. Cat pacing, hiding, refusing food common. Expect little sleep. Use one-room confinement strategy.</p>
              </div>

              <div className="p-4 bg-orange-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-orange-900">Days 4-7: Starting to Explore</h3>
                <p className="text-sm text-gray-700">Meowing reduces 30-50%. Cat ventures out during day, may eat normally. Night still anxious but improving.</p>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">Week 2: Significant Improvement</h3>
                <p className="text-sm text-gray-700">70-80% of cats sleep through night by end of week 2. May have 1-2 crying episodes but shorter duration.</p>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900">Week 3-4: Fully Adjusted</h3>
                <p className="text-sm text-gray-700">Normal behavior returns. Cat sleeps through night, confident in territory. If NOT adjusted by week 4, consult vet.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Cat Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/cat-hiding-wont-come-out">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Hiding and Won't Come Out</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Understanding hiding behavior and stress vs health issues
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/indoor-cat-trying-escape-suddenly">
                <Card className="border-2 border-green-200 hover:border-green-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Indoor Cat Trying to Escape Suddenly</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Why cats door-dash after moving and escape prevention
                    </p>
                    <div className="flex items-center text-green-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-not-eating-drinking-3-days">
                <Card className="border-2 border-red-200 hover:border-red-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Not Eating for 3 Days</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Emergency anorexia and hepatic lipidosis risk
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-urinating-outside-litter-box-suddenly">
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Urinating Outside Litter Box</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Stress marking vs UTI after environmental changes
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center">
              <Link href="/symptoms">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700">
                  View All Cat Symptoms →
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
                <h2 className="text-3xl font-bold mb-4">Cat Meowing All Night After Move?</h2>
                <p className="text-xl mb-6 text-purple-100">
                  Tell our free AI veterinary assistant about the meowing pattern, your cat's age, eating habits, and move timeline. 
                  Get personalized calming strategies and know when to seek vet care.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Adjustment Plan
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-purple-100">
                  ✓ Available 24/7 ✓ Behavior Guidance ✓ All Cat Ages ✓ Completely Free
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
