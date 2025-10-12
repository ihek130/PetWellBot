import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Phone, Clock, Heart, Scale, Activity, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Link } from "wouter";

export default function DogAteChocolate3HoursAgo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <SEOHead 
        title="Dog Ate Chocolate 3 Hours Ago - Emergency Steps & Signs | PetWellBot"
        description="EMERGENCY: Dog ate chocolate 3 hours ago? Learn immediate steps, toxic doses, symptoms timeline, and when to rush to the vet. Free AI symptom checker available 24/7."
        keywords="dog ate chocolate, chocolate poisoning dogs, dog chocolate toxicity, theobromine poisoning, dog emergency chocolate, how much chocolate is toxic"
        canonicalUrl="https://petwellbot.com/dog-ate-chocolate-3-hours-ago"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Dog Symptoms", href: "/symptoms" },
              { label: "Dog Ate Chocolate 3 Hours Ago" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                🚨 EMERGENCY - IMMEDIATE ACTION REQUIRED
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dog Ate Chocolate 3 Hours Ago: What to Do RIGHT NOW
            </h1>
            <p className="text-xl text-red-100 mb-6">
              Time is critical! Chocolate poisoning symptoms can appear 1-4 hours after ingestion. 
              Learn emergency steps, toxic doses, and when to rush to the vet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Check Symptoms with AI Now
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('immediate-actions')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-red-600"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Immediate Steps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CRITICAL Emergency Banner */}
      <section className="py-6 bg-red-100 border-y-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-red-600 mb-2">⚠️ CALL YOUR VET OR EMERGENCY CLINIC NOW!</h2>
                <p className="text-gray-800 text-lg">
                  If 3 hours have already passed, your dog may be entering the toxic symptom phase. 
                  <span className="font-bold"> DO NOT wait for symptoms to appear.</span> Call ahead while driving to the vet.
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg border-2 border-red-300">
                  <p className="font-semibold text-red-700 mb-2">📞 Emergency Hotlines (24/7):</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <span className="font-medium">Pet Poison Helpline:</span> (855) 764-7661 ($75 consultation fee)</li>
                    <li>• <span className="font-medium">ASPCA Poison Control:</span> (888) 426-4435 ($95 consultation fee)</li>
                    <li>• <span className="font-medium">Your Regular Vet:</span> Call for emergency guidance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Actions Section */}
      <section id="immediate-actions" className="py-12 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-red-500" />
              What to Do IMMEDIATELY (Next 15 Minutes)
            </h2>
            
            <div className="grid gap-6 mb-8">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-2xl font-bold text-red-600">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-red-600">Calculate Toxic Dose (CRITICAL)</h3>
                      <p className="text-gray-700 mb-3">
                        You need to know: <span className="font-semibold">(1) Type of chocolate, (2) Amount eaten, (3) Dog's weight</span>
                      </p>
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <p className="font-semibold text-yellow-800 mb-2">🧮 Quick Toxicity Calculator:</p>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span><span className="font-bold">Baking chocolate:</span> 1 oz can kill a 20 lb dog (MOST TOXIC)</span>
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span><span className="font-bold">Dark chocolate (70%+):</span> 3 oz dangerous for 20 lb dog</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span><span className="font-bold">Milk chocolate:</span> 1 oz per lb body weight (less toxic but still dangerous)</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span><span className="font-bold">White chocolate:</span> Low theobromine, but high fat (pancreatitis risk)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-2xl font-bold text-orange-600">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-orange-600">Call Vet BEFORE Driving</h3>
                      <p className="text-gray-700 mb-3">
                        Call your emergency vet or poison hotline <span className="font-semibold">while someone else drives</span> or before leaving. They may instruct you to:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Induce vomiting at home (ONLY if instructed and under 2 hours since ingestion)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Bring chocolate packaging to vet (for cocoa content %)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>Come immediately (at 3 hours, decontamination window is closing)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-2xl font-bold text-yellow-600">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-yellow-600">Monitor for Symptoms (During Drive)</h3>
                      <p className="text-gray-700 mb-3">
                        Symptoms typically appear 1-4 hours after ingestion. Watch for:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 p-3 rounded-lg">
                          <p className="font-semibold text-red-700 mb-2">Early Signs (1-4 hours):</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Vomiting (may see chocolate pieces)</li>
                            <li>• Diarrhea</li>
                            <li>• Restlessness, hyperactivity</li>
                            <li>• Excessive thirst/urination</li>
                            <li>• Panting</li>
                          </ul>
                        </div>
                        <div className="bg-red-100 p-3 rounded-lg border-2 border-red-400">
                          <p className="font-semibold text-red-700 mb-2">Severe Signs (4-12 hours):</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Rapid heart rate</li>
                            <li>• Tremors, seizures</li>
                            <li>• Muscle rigidity</li>
                            <li>• Collapse, weakness</li>
                            <li>• <span className="font-bold">Blue gums (CRITICAL)</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-2xl font-bold text-blue-600">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-blue-600">What Vet Will Do</h3>
                      <p className="text-gray-700 mb-3">
                        At 3 hours post-ingestion, expect:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <Activity className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span><span className="font-semibold">Activated charcoal:</span> Binds toxins in stomach (effective up to 4-6 hours)</span>
                        </li>
                        <li className="flex items-start">
                          <Activity className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span><span className="font-semibold">IV fluids:</span> Speeds toxin elimination through kidneys</span>
                        </li>
                        <li className="flex items-start">
                          <Activity className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span><span className="font-semibold">Heart monitoring:</span> Theobromine causes arrhythmias</span>
                        </li>
                        <li className="flex items-start">
                          <Activity className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span><span className="font-semibold">Anti-seizure medication:</span> If tremors develop</span>
                        </li>
                        <li className="flex items-start">
                          <Activity className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span><span className="font-semibold">Hospitalization:</span> 12-72 hours for severe cases</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chocolate is Toxic Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why is Chocolate Toxic to Dogs?</h2>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Scale className="w-8 h-8 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-blue-600">The Science: Theobromine Poisoning</h3>
                    <p className="text-gray-700 mb-4">
                      Chocolate contains <span className="font-semibold">theobromine</span> and <span className="font-semibold">caffeine</span>, 
                      both methylxanthines that dogs metabolize 3x slower than humans. This causes toxic buildup affecting:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="font-semibold text-red-700 mb-2">❤️ Cardiovascular System:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Increased heart rate (tachycardia)</li>
                          <li>• Irregular heartbeat (arrhythmias)</li>
                          <li>• High blood pressure</li>
                          <li>• Can lead to heart failure</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <p className="font-semibold text-orange-700 mb-2">🧠 Central Nervous System:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Hyperactivity, restlessness</li>
                          <li>• Tremors and muscle twitching</li>
                          <li>• Seizures (severe cases)</li>
                          <li>• Can cause coma or death</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="font-semibold text-yellow-800 mb-2">⏱️ Timeline of Toxicity:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <span className="font-bold">0-2 hours:</span> Chocolate in stomach (can induce vomiting)</li>
                        <li>• <span className="font-bold">1-4 hours:</span> Symptoms begin (vomiting, hyperactivity)</li>
                        <li>• <span className="font-bold">4-12 hours:</span> Severe symptoms peak (seizures, heart issues)</li>
                        <li>• <span className="font-bold">12-72 hours:</span> Critical monitoring period</li>
                        <li>• Theobromine half-life in dogs: <span className="font-bold">17.5 hours</span> (vs 6-10 in humans)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Theobromine Content by Chocolate Type</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-3 text-left">Chocolate Type</th>
                        <th className="p-3 text-left">Theobromine per oz</th>
                        <th className="p-3 text-left">Danger Level</th>
                        <th className="p-3 text-left">Toxic Dose (20 lb dog)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="bg-red-50">
                        <td className="p-3 font-semibold">Baking/Baker's</td>
                        <td className="p-3">400-450 mg</td>
                        <td className="p-3"><span className="px-2 py-1 bg-red-200 text-red-800 rounded text-xs font-bold">EXTREME</span></td>
                        <td className="p-3">0.5-1 oz</td>
                      </tr>
                      <tr className="bg-orange-50">
                        <td className="p-3 font-semibold">Dark (70-85%)</td>
                        <td className="p-3">200-300 mg</td>
                        <td className="p-3"><span className="px-2 py-1 bg-orange-200 text-orange-800 rounded text-xs font-bold">VERY HIGH</span></td>
                        <td className="p-3">1-2 oz</td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="p-3 font-semibold">Semi-Sweet</td>
                        <td className="p-3">150-160 mg</td>
                        <td className="p-3"><span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs font-bold">HIGH</span></td>
                        <td className="p-3">2-3 oz</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Milk Chocolate</td>
                        <td className="p-3">40-60 mg</td>
                        <td className="p-3"><span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-xs font-bold">MODERATE</span></td>
                        <td className="p-3">8-10 oz</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">White Chocolate</td>
                        <td className="p-3">0.25 mg</td>
                        <td className="p-3"><span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs font-bold">LOW</span></td>
                        <td className="p-3">Pancreatitis risk (fat)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DO NOT DO Section */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8" />
              NEVER Do These Things (Common Mistakes)
            </h2>
            
            <div className="grid gap-4">
              <Card className="border-red-200 border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-600 mb-2">DON'T "Wait and See" at 3 Hours</h3>
                      <p className="text-gray-700">
                        By the time symptoms appear (4-12 hours), theobromine has been absorbed. Early intervention is critical. 
                        The absence of symptoms at 3 hours means NOTHING - toxicity is time-delayed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-600 mb-2">DON'T Induce Vomiting Without Vet Approval (After 2 Hours)</h3>
                      <p className="text-gray-700">
                        At 3 hours, chocolate has likely moved to intestines. Inducing vomiting can cause aspiration pneumonia. 
                        Only vet-administered activated charcoal works now.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-600 mb-2">DON'T Give Human Medications</h3>
                      <p className="text-gray-700">
                        No Pepto-Bismol, Tums, or antacids. These do NOT neutralize theobromine and may interfere with treatment. 
                        Only vet-prescribed medications are safe.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-600 mb-2">DON'T Assume "Small Amount = Safe"</h3>
                      <p className="text-gray-700">
                        Even 0.5 oz of baking chocolate can be lethal to small dogs. Dark chocolate is 3-10x more toxic than milk chocolate. 
                        Calculate dose based on chocolate TYPE + dog WEIGHT.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect: Treatment & Recovery Timeline</h2>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-600 mb-3">Best Case Scenario (Immediate Treatment):</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><span className="font-bold">0-4 hours:</span> Activated charcoal given, IV fluids started</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><span className="font-bold">4-12 hours:</span> Monitored in clinic, no severe symptoms develop</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><span className="font-bold">12-24 hours:</span> Released home with monitoring instructions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><span className="font-bold">24-72 hours:</span> Full recovery, normal eating/behavior</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-600 mb-3">Moderate Case (Delayed Treatment):</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span><span className="font-bold">3-6 hours:</span> Treatment begins, some symptoms present (vomiting, hyperactivity)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span><span className="font-bold">6-24 hours:</span> Hospitalization for heart monitoring, anti-seizure meds if needed</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span><span className="font-bold">24-72 hours:</span> Gradual improvement, may need extended fluids</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                      <span><span className="font-bold">3-7 days:</span> Full recovery, possible lingering GI upset</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-3">Severe Case (High Dose/No Treatment):</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span><span className="font-bold">4-12 hours:</span> Seizures, severe arrhythmias, collapse possible</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span><span className="font-bold">12-72 hours:</span> ICU hospitalization, heart failure risk, death possible</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Survival rate with aggressive treatment: 95%+ if treatment started within 6 hours</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Without treatment: High mortality risk for toxic doses</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Prevention: How to Keep Your Dog Safe</h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-blue-600 mb-3 text-lg">🏠 At Home:</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Store chocolate in high cabinets or locked containers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Never leave chocolate on counters/tables</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Teach kids: "No chocolate for dogs, EVER"</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Check ingredient lists (cocoa powder in baked goods)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Dispose of wrappers in dog-proof trash</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600 mb-3 text-lg">🎃 Holiday Safety:</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-bold">Halloween:</span> Hide candy bowls, count treats</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-bold">Easter:</span> Lock up chocolate eggs/bunnies</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-bold">Christmas:</span> Advent calendars are deadly</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-bold">Valentine's:</span> 20% of poison calls are Feb 14-15</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Offer dog-safe treats instead (carob, peanut butter)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Symptoms Section */}
      <section className="py-12 bg-gradient-to-br from-blue-100 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Other Urgent Dog Emergencies to Watch For
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Chocolate poisoning shares symptoms with other emergencies. Browse similar urgent conditions:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/dog-vomiting-yellow-foam-night">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-blue-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-blue-600">Dog Vomiting Yellow Foam at Night</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Vomiting can be a symptom of chocolate poisoning or indicate other digestive issues. Learn when bile vomiting requires emergency care.
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dog-diarrhea-blood-emergency">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-red-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-red-600">Dog Diarrhea with Blood: Emergency or Not?</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Chocolate toxicity causes bloody diarrhea in severe cases. Understand when bloody stool needs immediate veterinary attention.
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dog-shaking-wont-eat">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-orange-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-orange-600">Dog Shaking and Won't Eat</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Tremors and appetite loss are classic signs of chocolate poisoning. Discover other causes of shaking and when it signals danger.
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dog-wont-drink-water-will-eat">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-yellow-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-yellow-600">My Dog Won't Drink Water But Will Eat</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Refusing water while eating normally may indicate toxin ingestion. Learn how dehydration affects poisoned dogs and when to seek help.
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
                <h2 className="text-3xl font-bold mb-4">Not Sure If Your Dog Needs Emergency Care?</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Describe your dog's symptoms to our free AI health assistant. Get instant guidance on whether to rush to the vet or monitor at home.
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free AI Symptom Analysis Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  ✓ Available 24/7 ✓ Instant Results ✓ All Dog Breeds ✓ Completely Free
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
            "name": "Dog Ate Chocolate 3 Hours Ago - Emergency Guide",
            "description": "Emergency steps for chocolate poisoning in dogs, including toxic doses, symptoms timeline, and immediate treatment actions",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Chocolate Toxicity in Dogs",
              "signOrSymptom": [
                { "@type": "MedicalSymptom", "name": "Vomiting" },
                { "@type": "MedicalSymptom", "name": "Diarrhea" },
                { "@type": "MedicalSymptom", "name": "Hyperactivity" },
                { "@type": "MedicalSymptom", "name": "Seizures" },
                { "@type": "MedicalSymptom", "name": "Rapid heart rate" }
              ]
            }
          })
        }}
      />
    </div>
  );
}
