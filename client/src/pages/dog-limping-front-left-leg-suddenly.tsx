import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Activity, Bone, Footprints, Clock, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Link } from "wouter";

export default function DogLimpingFrontLeftLeg() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <SEOHead 
        title="Dog Limping on Front Left Leg Suddenly - Causes & When to See Vet | PetWellBot"
        description="Dog suddenly limping on front left leg? Learn common causes (sprains, fractures, shoulder issues), how to assess severity, home care tips, and when emergency vet care is needed."
        keywords="dog limping front leg, dog suddenly limping, dog leg injury, dog sprain vs fracture, shoulder injury dog, front leg lameness"
        canonicalUrl="https://petwellbot.com/dog-limping-front-left-leg-suddenly"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Dog Symptoms", href: "/symptoms" },
              { label: "Dog Limping on Front Left Leg Suddenly" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⏰ MONITOR CLOSELY - May Need Vet Care
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dog Limping on Front Left Leg Suddenly: Causes, Assessment & Care
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Sudden limping can signal anything from a minor paw injury to a serious fracture. 
              Learn how to assess severity, provide first aid, and decide when vet care is urgent.
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
                onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600"
              >
                <Activity className="w-5 h-5 mr-2" />
                Quick Assessment Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="py-6 bg-red-50 border-y-2 border-red-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-600 mb-2">🚨 See a Vet Immediately If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Dog won't put ANY weight on leg (non-weight bearing)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Visible deformity, swelling, or bone protruding</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Leg dangles or hangs at abnormal angle</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Severe pain, crying, or aggression when touched</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>After known trauma (hit by car, fall from height)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Limping worsens rapidly or spreads to other legs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Assessment Section */}
      <section id="assessment" className="py-12 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Activity className="w-8 h-8 text-blue-500" />
              Quick Severity Assessment (Do This First)
            </h2>
            
            <div className="grid gap-6 mb-8">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-2xl font-bold text-green-600">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-green-600">Weight-Bearing Test</h3>
                      <p className="text-gray-700 mb-3">
                        <span className="font-semibold">What to check:</span> Is your dog putting any weight on the affected leg when standing or walking?
                      </p>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="font-semibold text-green-700 mb-1 text-sm">✓ Mild (Can Wait):</p>
                          <p className="text-xs text-gray-600">Slight limp, still puts weight on leg, walks normally 70%+ of time</p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <p className="font-semibold text-yellow-700 mb-1 text-sm">⚠️ Moderate (Vet Soon):</p>
                          <p className="text-xs text-gray-600">Obvious limp, touches paw to ground but avoids pressure, hops occasionally</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <p className="font-semibold text-red-700 mb-1 text-sm">🚨 Severe (Vet NOW):</p>
                          <p className="text-xs text-gray-600">Holds leg up completely, won't touch ground, hops on 3 legs only</p>
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
                      <span className="text-2xl font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-blue-600">Paw-to-Shoulder Exam (Gentle!)</h3>
                      <p className="text-gray-700 mb-3">
                        <span className="font-semibold">How to do it:</span> While dog is calm and sitting, gently feel from paw up to shoulder. Stop immediately if dog shows pain.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Footprints className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-blue-700 mb-1">Paw Pad Check:</p>
                            <p className="text-sm text-gray-700">Look for cuts, glass, thorns, cracked pads, swelling between toes. Most common cause of sudden limping.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Bone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-blue-700 mb-1">Leg/Wrist Area:</p>
                            <p className="text-sm text-gray-700">Feel for heat, swelling, lumps. Compare to right leg. Hot = inflammation or infection.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Activity className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-blue-700 mb-1">Shoulder/Elbow:</p>
                            <p className="text-sm text-gray-700">Gently flex and extend. Pain here often indicates joint injury (more serious than paw cuts).</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-2xl font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-purple-600">Behavior & Pain Signals</h3>
                      <p className="text-gray-700 mb-3">
                        Dogs hide pain naturally. Watch for subtle signs:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                          <p className="font-semibold text-yellow-800 mb-2">Mild Pain Signs:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Licks injured leg constantly</li>
                            <li>• Slower on stairs/jumping</li>
                            <li>• Shifts weight when standing</li>
                            <li>• Still plays but rests more</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <p className="font-semibold text-red-800 mb-2">Severe Pain Signs:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Whimpers, cries, or growls when touched</li>
                            <li>• Won't let you near affected leg</li>
                            <li>• Panting at rest, restless</li>
                            <li>• Won't eat, hides, or seems depressed</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Causes Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Top 10 Causes of Sudden Front Leg Limping</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm">#1</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Paw Pad Injury (40% of Cases)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Causes:</span> Cut from glass/metal, thorn, foxtail, cracked pad (hot pavement), ice ball between toes
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Licks paw constantly, visible bleeding/cut, limps worse on rough surfaces
                      </p>
                      <p className="text-blue-600 text-sm font-semibold">Home Care: Clean with saline, apply antibiotic ointment, wrap if bleeding. Vet if deep cut (&gt;0.5 inch) or won't stop bleeding.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">#2</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Soft Tissue Sprain/Strain (25% of Cases)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Causes:</span> Running too hard, sudden turn, jumping, rough play, slipping on ice/floors
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Mild swelling, improves with rest, worse after exercise, no deformity
                      </p>
                      <p className="text-blue-600 text-sm font-semibold">Home Care: Rest 48-72 hours, ice 10 min 3x/day, restrict activity. Vet if no improvement in 3 days or worsens.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-100 text-yellow-700 font-bold px-3 py-1 rounded-full text-sm">#3</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Nail/Dewclaw Injury (15% of Cases)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Causes:</span> Torn nail, broken nail, overgrown nail curled into pad, dewclaw caught on fence/fabric
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Bleeding from nail bed, nail at odd angle, visible crack, licks nail area
                      </p>
                      <p className="text-blue-600 text-sm font-semibold">Home Care: Trim broken nail if dangling (quick stop powder for bleeding). Vet if nail bed exposed or bleeding won't stop.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-sm">#4</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Shoulder Sprain (10% of Cases)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Causes:</span> Agility training, frisbee catching, sudden stop while running, jumping down from furniture
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Pain when lifting leg forward, shorter stride, reluctant to go up stairs
                      </p>
                      <p className="text-orange-600 text-sm font-semibold">Vet Needed: Shoulder injuries need x-rays to rule out rotator cuff tear or bone chips. Can become chronic if untreated.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-sm">#5</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Fracture (5% of Cases)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Causes:</span> Hit by car, kicked by horse, fall from balcony, dog fight, caught in fence
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Won't bear weight, visible swelling/deformity, crepitus (grinding feeling), severe pain
                      </p>
                      <p className="text-red-600 text-sm font-semibold">EMERGENCY: Do not move dog unnecessarily. Splint leg if possible, go to ER vet immediately. Requires surgery in most cases.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">#6</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Elbow Dysplasia (Young Dogs, Large Breeds)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Breeds at risk:</span> German Shepherds, Labrador Retrievers, Golden Retrievers, Rottweilers (age 4-12 months)
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Gradual onset, worse after rest, stiff in morning, legs turned outward
                      </p>
                      <p className="text-purple-600 text-sm font-semibold">Vet Needed: X-rays or CT scan required. May need surgery. Early diagnosis prevents arthritis later.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-gray-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">#7</span>
                      Arthritis Flare-Up
                    </h3>
                    <p className="text-sm text-gray-700">Senior dogs, worse after cold/damp weather. Gradual onset but can seem sudden after heavy activity.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-gray-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">#8</span>
                      Lyme Disease
                    </h3>
                    <p className="text-sm text-gray-700">After tick bite, shifting leg lameness (moves between legs), fever, swollen joints. Needs blood test.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-gray-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">#9</span>
                      Bone Cancer (Osteosarcoma)
                    </h3>
                    <p className="text-sm text-gray-700">Large/giant breeds, age 7+. Progressive limp, swelling near wrist/elbow. X-ray shows bone destruction. Very serious.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-gray-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">#10</span>
                      Biceps Tendonitis
                    </h3>
                    <p className="text-sm text-gray-700">Inflammation of shoulder tendon. Agility/working dogs. Pain when extending leg fully. Needs ultrasound diagnosis.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Care Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Home Care for Mild Limping (First 48-72 Hours)</h2>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-green-600 mb-3 text-lg flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      DO These Things:
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">REST:</span> Strict crate rest or small room. No running, jumping, stairs for 48 hours minimum.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">ICE:</span> 10 minutes on affected area, 3-4 times per day (first 48 hours only). Use frozen peas in towel.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">SHORT LEASH WALKS:</span> Potty breaks only, 5 minutes max, slow pace, on leash.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">MONITOR:</span> Take video of walk daily to track improvement. Note if better/worse/same.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">GENTLE MASSAGE:</span> If dog allows, light circular motions around shoulder (increases blood flow).</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-red-600 mb-3 text-lg flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      DON'T Do These:
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">NO HEAT:</span> Heat worsens inflammation in first 48 hours. Only use after swelling is gone.</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">NO HUMAN MEDS:</span> Advil/Aleve are TOXIC to dogs. Only give vet-prescribed pain meds.</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">NO PLAY:</span> Even if dog seems better, no ball, tug-of-war, or rough play for 1 week minimum.</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">NO IGNORING:</span> "Wait and see" is dangerous if bone cancer or fracture. If no improvement in 3 days, see vet.</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">NO WRAPPING:</span> Unless bleeding. Improper wrapping cuts off circulation or allows swelling to worsen.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-yellow-800 mb-2">📅 When to Schedule Vet Visit (Within 3-7 Days):</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Limp not improving after 3 days of rest</li>
                    <li>• Intermittent limping (comes and goes over weeks)</li>
                    <li>• Limping in young puppy (under 1 year) - growth plate issues possible</li>
                    <li>• Senior dog with new limp - arthritis vs cancer differentiation needed</li>
                    <li>• Limping shifts between different legs (autoimmune or Lyme disease)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Vet Will Do Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect at the Vet Visit</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Step 1: Physical Exam & Gait Analysis</h3>
                  <p className="text-gray-700 mb-3">
                    Vet will watch your dog walk, compare both front legs for symmetry, and palpate (feel) each joint from paw to shoulder. They're checking for:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <Activity className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Heat, swelling, or fluid in joints</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pain response when flexing/extending</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Range of motion limitations</span>
                    </li>
                    <li className="flex items-start">
                      <Activity className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Muscle atrophy (wasting from disuse)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Step 2: Diagnostic Tests (If Needed)</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-700 mb-2">X-Rays (Radiographs) - $150-$400</p>
                      <p className="text-sm text-gray-700 mb-2">
                        First-line imaging. Shows: fractures, bone cancer, arthritis, elbow dysplasia, bone chips. Usually 2-3 views of affected leg.
                      </p>
                      <p className="text-xs text-gray-600">Sedation rarely needed for front leg x-rays unless severe pain.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-700 mb-2">Blood Tests - $80-$200</p>
                      <p className="text-sm text-gray-700 mb-2">
                        For suspected Lyme disease (tick panel), inflammatory markers, or pre-surgery workup.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-semibold text-purple-700 mb-2">Advanced Imaging (Referral Needed) - $500-$2,000</p>
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-semibold">CT Scan:</span> For elbow dysplasia surgical planning. <span className="font-semibold">MRI:</span> For soft tissue injuries (tendons, ligaments). <span className="font-semibold">Ultrasound:</span> For biceps tendon tears.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Step 3: Treatment Options</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Conservative Management (Sprains, Mild Arthritis):</p>
                        <p className="text-sm text-gray-700">NSAIDs (Rimadyl, Galliprant), strict rest 2-4 weeks, physical therapy, weight loss if needed. Success rate: 80% for sprains.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Joint Injections (Arthritis, Elbow Dysplasia):</p>
                        <p className="text-sm text-gray-700">Adequan, hyaluronic acid, or platelet-rich plasma (PRP). Reduces inflammation, promotes cartilage healing. 4-8 week protocol.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Surgery (Fractures, Severe Dysplasia, Bone Cancer):</p>
                        <p className="text-sm text-gray-700">Fracture repair ($2,000-$5,000), elbow arthroscopy ($2,500-$4,000), limb amputation for osteosarcoma ($1,500-$3,000). Recovery: 8-12 weeks.</p>
                      </div>
                    </div>
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
              Related Dog Mobility & Pain Symptoms
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Front leg limping can occur alongside other mobility issues. Explore related symptoms to get the complete picture:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/senior-dog-weak-back-legs">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-blue-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-blue-600">Senior Dog Suddenly Weak Back Legs</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      While front legs show pain, hind leg weakness suggests neurological issues or degenerative myelopathy. Learn to distinguish limping from true weakness.
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
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
                      Severe pain from fractures or bone cancer causes trembling and appetite loss. Understand when shaking signals a medical emergency beyond simple pain.
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dog-breathing-fast-sleeping">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-green-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-green-600">Dog Breathing Fast While Sleeping</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Dogs in pain often pant at rest or during sleep. If your limping dog also breathes rapidly, pain levels may be severe and require immediate intervention.
                    </p>
                    <div className="flex items-center text-green-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dog-licking-paws-night">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-purple-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-purple-600">Dog Keeps Licking Paws at Night</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Excessive paw licking indicates injury, allergy, or anxiety. Since 40% of limping stems from paw injuries, learn to identify the hidden causes of obsessive licking.
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold text-sm">
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
                <h2 className="text-3xl font-bold mb-4">Unsure How Serious Your Dog's Limp Is?</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Describe exactly what you're seeing to our free AI veterinary assistant. Get instant assessment of severity and whether you need emergency care, same-day vet visit, or home monitoring.
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Analyze Your Dog's Limp for Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  ✓ Video Analysis Supported ✓ 24/7 Available ✓ All Breeds & Ages ✓ Instant Guidance
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
            "name": "Dog Limping on Front Left Leg Suddenly - Causes & Treatment",
            "description": "Comprehensive guide to sudden front leg limping in dogs, including assessment, causes, and treatment options",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Canine Front Leg Lameness",
              "possibleCause": [
                "Paw pad injury",
                "Soft tissue sprain",
                "Fracture",
                "Shoulder injury",
                "Elbow dysplasia"
              ]
            }
          })
        }}
      />
    </div>
  );
}
