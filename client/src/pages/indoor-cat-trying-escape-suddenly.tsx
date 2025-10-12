import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, DoorOpen, Clock, Activity, ArrowRight, CheckCircle, XCircle, Shield } from "lucide-react";
import { Link } from "wouter";

export default function IndoorCatTryingEscapeSuddenly() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <SEOHead 
        title="Indoor Cat Trying to Escape Suddenly - Door Dashing Causes & Prevention | PetWellBot"
        description="Indoor cat suddenly door-dashing and trying to escape? Learn causes of escape behavior, intact cat mating drive, territorial stress, and proven prevention techniques."
        keywords="indoor cat trying to escape, cat door dashing, cat bolting out door, indoor cat wants outside suddenly, cat escape behavior"
        canonicalUrl="https://petwellbot.com/indoor-cat-trying-escape-suddenly"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Cat Symptoms", href: "/symptoms" },
              { label: "Indoor Cat Trying to Escape Suddenly" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                🚪 CAN WAIT - Behavioral Issue
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Indoor Cat Trying to Escape Suddenly: Causes & Prevention
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Sudden escape attempts signal intact cat mating drive, territorial stress, under-stimulation, or fear. 
              Learn why cats door-dash, escape-proofing techniques, and enrichment solutions.
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
                onClick={() => document.getElementById('causes')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-purple-600"
              >
                <DoorOpen className="w-5 h-5 mr-2" />
                Why Cats Escape
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-6 bg-yellow-50 border-y-2 border-yellow-300" id="causes">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-yellow-900 mb-2">⚠️ See Vet If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Intact (not spayed/neutered) cat - schedule surgery to stop mating behavior</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Escape attempts + aggression, excessive vocalization, or spraying (hormonal)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Hyperthyroidism symptoms: weight loss, increased appetite, hyperactivity (senior cats)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Escaping + hiding, not eating, or other illness signs (trying to isolate)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Cat actually escaped - outdoor dangers include cars, predators, poisons, fights</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Cognitive dysfunction (senior 10+ years): disorientation, wandering, trying to "leave"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Top Causes */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-purple-600" />
              8 Reasons Cats Suddenly Try to Escape
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Intact Cat Mating Drive (MOST COMMON)</h3>
                <p className="text-sm text-gray-700 mb-1"><strong>Females in heat:</strong> Yowling, rolling, raised hindquarters, desperate escape attempts every 2-3 weeks. <strong>Males:</strong> Smell female in heat up to 1 mile away, escape to find her.</p>
                <p className="text-xs text-red-700"><strong>SOLUTION:</strong> Spay/neuter eliminates 90% of escape behavior. Female spay: $200-$500. Male neuter: $100-$300.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Outdoor Cat Brought Inside (Wants Territory Back)</h3>
                <p className="text-sm text-gray-700 mb-1">Former outdoor cat remembers territory. Sees/smells outside through window = frustrated, door-dashes to reclaim it.</p>
                <p className="text-xs text-orange-700"><strong>Timeline:</strong> Takes 4-8 weeks to transition outdoor cat to indoor-only. Gradual supervised outdoor time helps (catio, harness walks).</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Boredom & Under-Stimulation</h3>
                <p className="text-sm text-gray-700 mb-1">High-energy breeds (Bengals, Abyssinians, Siamese) or young cats (&lt;3 years) need LOTS of play. Bored cats see outside as enrichment.</p>
                <p className="text-xs text-yellow-700"><strong>Fix:</strong> 2-3 play sessions daily (15 min each), puzzle feeders, cat TV (bird videos), rotating toys, vertical space (cat trees).</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Territorial Stress (New Pet, Baby, Visitor)</h3>
                <p className="text-sm text-gray-700 mb-1">New cat, dog, or baby = territory invasion. Cat tries to escape perceived threat or re-establish boundaries.</p>
                <p className="text-xs text-green-700"><strong>Signs:</strong> Escape attempts started after household change, spraying, hiding, aggression toward new pet/person.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Prey Drive (Seeing Birds, Squirrels, Outdoor Cats)</h3>
                <p className="text-sm text-gray-700 mb-1">Window hunting frustration. Cat watches prey daily, door = opportunity to finally catch it.</p>
                <p className="text-xs text-blue-700"><strong>Prevention:</strong> Close blinds during high activity times, redirect with interactive toys (feather wand = "indoor bird").</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Fear/Loud Noises (Escape = Flee Response)</h3>
                <p className="text-sm text-gray-700 mb-1">Construction, fireworks, dog barking, vacuum = panic. Cat bolts when door opens, not because wants outside but fleeing perceived danger.</p>
                <p className="text-xs text-purple-700"><strong>Context:</strong> Escape attempts happen specifically during/after loud events, cat seems panicked not curious.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Hyperthyroidism (Senior Cats 8+ Years)</h3>
                <p className="text-sm text-gray-700 mb-1">Overactive thyroid causes hyperactivity, weight loss despite eating MORE, vocalization, restlessness = escape attempts.</p>
                <p className="text-xs text-pink-700"><strong>Diagnosis:</strong> Blood test ($100-$200). Treatment: Daily medication ($30-$60/month) or radioactive iodine ($1,000-$1,500 cure).</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#8 Cognitive Dysfunction (Senior Cats 10+ Years)</h3>
                <p className="text-sm text-gray-700 mb-1">Cat dementia causes disorientation. Cat may try to "leave" because doesn't recognize home, or wanders without purpose.</p>
                <p className="text-xs text-gray-700"><strong>Signs:</strong> Staring at walls, forgetting litter box location, nighttime yowling, trying to escape while seeming confused not determined.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prevention Strategies */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-purple-600" />
              How to Stop Door Dashing & Escape Attempts
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-2">🔪 #1 Priority: Spay/Neuter Intact Cats</h3>
                <p className="text-sm text-gray-700 mb-2">90% of escape behavior in intact cats STOPS after surgery. Mating drive is overwhelming instinct that cannot be trained away.</p>
                <div className="p-3 bg-white border border-red-200 rounded mt-2">
                  <p className="font-semibold text-red-900 mb-1">Surgery Benefits:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Females:</strong> No more heat cycles (every 2-3 weeks), yowling stops, escape attempts cease, prevents uterine infections/cancer</li>
                    <li>• <strong>Males:</strong> No roaming instinct, stops spraying 90% of cases, reduces aggression, prevents testicular cancer</li>
                    <li>• <strong>Timeline:</strong> Behavior improvement within 2-4 weeks post-surgery as hormones normalize</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Physical Escape Prevention:</h3>
                
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 border-l-4 border-purple-500">
                    <h4 className="font-medium text-gray-900 mb-1">Double-Door System (Air Lock)</h4>
                    <p className="text-sm text-gray-700">Install baby gate or second door creating "buffer zone." Cat can't bolt through 2 barriers. Cost: $30-$80 for tall baby gate.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-blue-500">
                    <h4 className="font-medium text-gray-900 mb-1">Door Barriers Before Opening</h4>
                    <p className="text-sm text-gray-700">Before opening exterior door: close interior doors or use folding pet gate to block cat. Create habit of "where's the cat?" before ANY door opening.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-green-500">
                    <h4 className="font-medium text-gray-900 mb-1">Motion-Activated Deterrents</h4>
                    <p className="text-sm text-gray-700">SSSCAT spray ($35-$50) near door releases harmless air puff when cat approaches. Trains cat to stay back from door. Reusable canisters available.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-yellow-500">
                    <h4 className="font-medium text-gray-900 mb-1">Microchip + GPS Collar (If Cat Escapes)</h4>
                    <p className="text-sm text-gray-700">Microchip: $50-$100, permanent ID if lost. GPS collar (Tractive, Whistle): $100-$150 + $5-$10/month subscription. Real-time location tracking.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Behavioral Solutions (Reduce Desire to Escape):</h3>
                
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 border-l-4 border-orange-500">
                    <h4 className="font-medium text-gray-900 mb-1">Catio (Outdoor Enclosure)</h4>
                    <p className="text-sm text-gray-700">Window box catio ($200-$500) or full patio enclosure ($1,000-$5,000). Satisfies outdoor desire SAFELY. DIY plans available free online.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-pink-500">
                    <h4 className="font-medium text-gray-900 mb-1">Harness Training + Leash Walks</h4>
                    <p className="text-sm text-gray-700">Escape-proof harness (Kitty Holster, Come With Me Kitty) $20-$40. Train indoors first (2-3 weeks), then supervised outdoor time. Satisfies exploration need.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-indigo-500">
                    <h4 className="font-medium text-gray-900 mb-1">Increase Indoor Enrichment</h4>
                    <p className="text-sm text-gray-700">
                      • <strong>Vertical territory:</strong> 6+ ft cat tree near window for "outdoor viewing station"<br/>
                      • <strong>Puzzle feeders:</strong> Makes cat work for food = mental stimulation<br/>
                      • <strong>Cat TV:</strong> YouTube bird videos 8 hours (search "videos for cats")<br/>
                      • <strong>Rotating toys:</strong> Keep 5 toys out, swap weekly to maintain novelty<br/>
                      • <strong>Play 2-3x daily:</strong> 15 minutes each, tire cat out
                    </p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-teal-500">
                    <h4 className="font-medium text-gray-900 mb-1">Block Window Views (If Prey Frustration)</h4>
                    <p className="text-sm text-gray-700">Frosted window film on lower panes blocks view of ground prey. Cat can still see sky/trees (calming) but not squirrels/birds (frustrating). $15-$30 roll.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-red-500">
                    <h4 className="font-medium text-gray-900 mb-1">Feliway Pheromone (If Territorial Stress)</h4>
                    <p className="text-sm text-gray-700">Plug-in diffuser near door/window cat tries to escape from. Takes 7-14 days to work. $30-$40/month. Especially helpful after household changes (new pet/baby).</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                <h3 className="font-medium text-blue-900 mb-2">🎓 Training "Back Away from Door" Command:</h3>
                <ol className="text-sm text-blue-800 space-y-1 list-decimal ml-4">
                  <li>Before opening door, say "BACK" or "STAY" firmly</li>
                  <li>Toss treats AWAY from door (toward back of room)</li>
                  <li>Cat runs to get treats = away from door = YOU open door safely</li>
                  <li>Repeat 10-20x daily for 2 weeks until automatic response</li>
                  <li>ALWAYS reward with treats when cat backs away from door</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Do If Cat Escapes */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What to Do If Your Indoor Cat Escapes
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-2">🚨 First 24 Hours (CRITICAL):</h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>• <strong>DO NOT CHASE:</strong> Chasing = cat runs farther. Stay calm, call softly, shake treat bag.</li>
                  <li>• <strong>Check hiding spots NEAR home first:</strong> 75% of indoor cats stay within 300 feet (neighbor's bushes, under deck, garage, sheds).</li>
                  <li>• <strong>Put litter box outside:</strong> Familiar scent helps cat find way home (can smell litter 1+ mile away).</li>
                  <li>• <strong>Leave garage/shed doors cracked:</strong> Cat may hide there, needs escape route back.</li>
                  <li>• <strong>Search at dawn/dusk:</strong> Scared cats hide during day, move at night/early morning.</li>
                  <li>• <strong>Alert neighbors immediately:</strong> Ask to check garages, sheds, basements. Leave your phone number.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Days 2-7: Expand Search</h3>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• File lost pet report with local shelters, animal control, microchip company</li>
                  <li>• Post on Nextdoor, Facebook lost pet groups, Craigslist, Pawboost</li>
                  <li>• Put up bright neon posters with LARGE photo, "INDOOR CAT - SCARED" in big letters, phone number</li>
                  <li>• Check shelters IN PERSON every 2-3 days (phone descriptions unreliable)</li>
                  <li>• Set humane trap with food near home (borrow from shelter, $0-$50/day rental)</li>
                  <li>• Put worn clothing (your scent) outside near entry points</li>
                </ul>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <p className="font-medium text-green-900 mb-1">✓ Success Rates:</p>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• 75% of indoor cats found within 500m (1/3 mile) of home</li>
                  <li>• Most found within first week</li>
                  <li>• Don't give up - cats found after months not uncommon</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Cases */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Special Cases Requiring Vet Care
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">Intact Cat (Not Spayed/Neutered)</h3>
                <p className="text-sm text-gray-700 mb-1">Hormonal escape behavior will NOT stop with training alone. Surgery required.</p>
                <p className="text-xs text-red-700"><strong>Action:</strong> Schedule spay/neuter ASAP. Low-cost clinics $50-$150. Escape attempts cease within 2-4 weeks post-surgery.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">Hyperthyroidism (Senior Cats)</h3>
                <p className="text-sm text-gray-700 mb-1">Weight loss + increased appetite + hyperactivity + escape attempts = classic hyperthyroid.</p>
                <p className="text-xs text-orange-700"><strong>Diagnosis:</strong> Blood test (T4 level). Treatment: Daily methimazole $30-$60/month or radioactive iodine cure $1,000-$1,500.</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">Cognitive Dysfunction (Dementia)</h3>
                <p className="text-sm text-gray-700 mb-1">Senior cat 10+ years wandering aimlessly, trying to "leave," disoriented.</p>
                <p className="text-xs text-purple-700"><strong>Treatment:</strong> Selegiline (Anipryl) $50-$100/month improves symptoms 70% of cases. Nightlights, routine consistency help.</p>
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
              <Link href="/cat-meowing-night-after-moving">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Meowing at Night After Moving</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Stress vocalization and adjustment to new environment
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-hiding-wont-come-out">
                <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Hiding and Won't Come Out</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Understanding hiding behavior and stress vs health issues
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
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
                      Stress marking and territorial issues causing accidents
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-drooling-acting-weird">
                <Card className="border-2 border-red-200 hover:border-red-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Drooling and Acting Weird</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Toxin exposure and behavioral changes requiring attention
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
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
                <h2 className="text-3xl font-bold mb-4">Cat Door Dashing? Get Expert Guidance</h2>
                <p className="text-xl mb-6 text-purple-100">
                  Tell our free AI veterinary assistant about the escape attempts, your cat's spay/neuter status, age, and triggers. 
                  Get personalized prevention strategies and behavioral solutions.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Escape Prevention Plan
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-purple-100">
                  ✓ Available 24/7 ✓ Behavior Analysis ✓ All Cat Breeds ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
