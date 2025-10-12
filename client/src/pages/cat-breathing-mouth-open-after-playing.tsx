import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Wind, Clock, Activity, ArrowRight, CheckCircle, XCircle, Thermometer } from "lucide-react";
import { Link } from "wouter";

export default function CatBreathingMouthOpenAfterPlaying() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <SEOHead 
        title="Cat Breathing with Mouth Open After Playing - Normal vs Emergency | PetWellBot"
        description="Cat panting with mouth open after play? Learn when open-mouth breathing in cats is normal vs concerning, heart disease signs, and emergency respiratory distress."
        keywords="cat breathing mouth open, cat panting after playing, cat open mouth breathing, cat respiratory distress, cat heart disease"
        canonicalUrl="https://petwellbot.com/cat-breathing-mouth-open-after-playing"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Cat Symptoms", href: "/symptoms" },
              { label: "Cat Breathing with Mouth Open After Playing" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⚠️ URGENT - Assessment Needed
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cat Breathing with Mouth Open After Playing: Normal vs Concerning
            </h1>
            <p className="text-xl text-orange-100 mb-6">
              Unlike dogs, cats rarely pant. Brief open-mouth breathing after intense play is normal, but prolonged panting signals heart disease, asthma, or overheating. 
              Learn when to worry and emergency signs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Breathing Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-orange-600"
              >
                <Wind className="w-5 h-5 mr-2" />
                Normal vs Emergency
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="py-6 bg-red-50 border-y-2 border-red-300" id="assessment">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">🚨 Emergency Vet NOW If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Blue or pale gums (sign of oxygen deprivation)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Panting continues 10+ minutes after stopping play</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Labored breathing, abdominal effort, gasping</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Open-mouth breathing at REST (not after activity)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Collapse, weakness, or inability to stand</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Coughing, wheezing, or choking sounds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Normal vs Abnormal */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-orange-600" />
              Normal vs Abnormal Open-Mouth Breathing in Cats
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  NORMAL (No Vet Needed)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ <strong>Duration:</strong> Stops within 2-5 minutes of rest</li>
                  <li>✓ <strong>Context:</strong> Only after VERY intense play (laser pointer, feather wand for 10+ minutes)</li>
                  <li>✓ <strong>Breathing pattern:</strong> Rapid but regular, shallow breaths</li>
                  <li>✓ <strong>Gum color:</strong> Pink and moist</li>
                  <li>✓ <strong>Recovery:</strong> Cat quickly returns to normal, wants more play or grooms</li>
                  <li>✓ <strong>Frequency:</strong> Rare - happens 1-2x per month maximum</li>
                  <li>✓ <strong>Body language:</strong> Alert, happy, tail up after recovery</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  ABNORMAL (See Vet)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✗ <strong>Duration:</strong> Continues 10+ minutes after activity stops</li>
                  <li>✗ <strong>Context:</strong> Happens after minimal activity or at rest</li>
                  <li>✗ <strong>Breathing pattern:</strong> Labored, using abdominal muscles, irregular</li>
                  <li>✗ <strong>Gum color:</strong> Pale, white, blue, or purple-tinged</li>
                  <li>✗ <strong>Recovery:</strong> Cat hides, hunches, refuses to move</li>
                  <li>✗ <strong>Frequency:</strong> Happening daily or multiple times per week</li>
                  <li>✗ <strong>Body language:</strong> Extended neck, elbows out, scared expression</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-purple-900 font-medium">
                🔍 <strong>Key Difference:</strong> Dogs pant to cool down (normal). Cats sweat through paw pads and rely on behavioral cooling (seeking shade). 
                Open-mouth breathing in cats = inefficient cooling OR medical problem.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Medical Causes */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7 Medical Causes of Open-Mouth Breathing in Cats
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Heart Disease (Hypertrophic Cardiomyopathy - HCM)</h3>
                <p className="text-sm text-gray-700 mb-2">Most common heart disease in cats. Thickened heart muscle can't pump efficiently. Fluid backs up into lungs.</p>
                <p className="text-xs text-red-700"><strong>Red flags:</strong> Panting at rest, reduced activity, hiding, sudden onset in previously healthy cat</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Feline Asthma</h3>
                <p className="text-sm text-gray-700 mb-2">Airway inflammation causes wheezing, coughing, open-mouth breathing. Triggered by stress, dust, smoke, allergens.</p>
                <p className="text-xs text-orange-700"><strong>Signs:</strong> Hunched posture, extended neck, wheezing sounds, coughing fits, worse at night</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Overheating/Heatstroke</h3>
                <p className="text-sm text-gray-700 mb-2">Cats in hot cars, direct sun, or poor ventilation can't cool down. Body temp &gt;104°F is emergency.</p>
                <p className="text-xs text-yellow-700"><strong>Emergency:</strong> Drooling, vomiting, collapse, seizures. Cool cat gradually, seek emergency vet</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Anemia (Low Red Blood Cells)</h3>
                <p className="text-sm text-gray-700 mb-2">Blood loss, parasites, or chronic disease reduces oxygen-carrying capacity. Cat pants to compensate.</p>
                <p className="text-xs text-green-700"><strong>Check:</strong> Pale or white gums (normal = pink), lethargy, weakness, loss of appetite</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Pleural Effusion (Fluid Around Lungs)</h3>
                <p className="text-sm text-gray-700 mb-2">Fluid in chest cavity compresses lungs. Causes: FIP, heart failure, cancer, infection.</p>
                <p className="text-xs text-blue-700"><strong>Signs:</strong> Rapid shallow breathing, won't lie down (sits with elbows out), muffled heart sounds</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Upper Respiratory Obstruction</h3>
                <p className="text-sm text-gray-700 mb-2">Nasal polyps, tumors, or severe URI block nasal passages. Cat forced to mouth-breathe.</p>
                <p className="text-xs text-purple-700"><strong>Clues:</strong> Snoring, reverse sneezing, nasal discharge, snuffling sounds</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Pain or Severe Stress</h3>
                <p className="text-sm text-gray-700 mb-2">Acute pain (injury, pancreatitis) or extreme fear can cause panting as stress response.</p>
                <p className="text-xs text-pink-700"><strong>Context:</strong> After vet visit, car ride, dog encounter, or hiding with vocalizing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to See Vet */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-orange-600" />
              When to See Your Vet
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-2">🚨 Emergency Vet (NOW):</h3>
                <ul className="space-y-1 text-red-800 text-sm">
                  <li>• Panting at rest (no recent activity)</li>
                  <li>• Blue, purple, or white gums</li>
                  <li>• Can't lie down, sits with elbows out and neck extended</li>
                  <li>• Gasping, choking, or extreme effort to breathe</li>
                  <li>• Collapse or extreme weakness</li>
                  <li>• Suspected heatstroke (drooling, vomiting, temp &gt;104°F)</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-2">📅 Schedule Vet Visit (Within 24-48 Hours):</h3>
                <ul className="space-y-1 text-yellow-800 text-sm">
                  <li>• Panting happening more frequently (2-3+ times per week)</li>
                  <li>• Takes longer to recover from play than before</li>
                  <li>• Reduced activity level, hiding more, less playful</li>
                  <li>• Coughing or wheezing between panting episodes</li>
                  <li>• Weight loss or decreased appetite</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">🏠 Monitor at Home:</h3>
                <p className="text-blue-800 text-sm">
                  If panting only after VERY intense play (10+ minutes), stops within 2-5 minutes, and cat is otherwise healthy (eating, playful, normal energy) - monitor. 
                  If happens again in next 2 weeks, schedule vet checkup.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Home Management */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-orange-600" />
              Prevention & Home Management
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Prevent Overexertion:</h3>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Shorten play sessions: 3-5 minutes of intense play, then rest break</li>
                  <li>• Watch for signs: If cat starts panting, STOP play immediately</li>
                  <li>• Cool environment: Play in air-conditioned room in summer</li>
                  <li>• Overweight cats: More prone to panting - limit intensity, increase duration slowly</li>
                  <li>• Senior cats (7+ years): Lower intensity play, longer rest periods</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">After Panting Occurs:</h3>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Stop all activity immediately</li>
                  <li>• Move to cool, quiet room</li>
                  <li>• Offer fresh water (don't force)</li>
                  <li>• Check gum color: Should be pink and moist</li>
                  <li>• Monitor breathing: Should return to normal within 2-5 minutes</li>
                  <li>• Don't resume play for at least 30 minutes</li>
                </ul>
              </div>

              <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                <p className="font-medium text-purple-900 mb-1">💡 Brachycephalic Cats (Persians, Himalayans):</p>
                <p className="text-sm text-purple-800">Flat-faced cats have narrowed airways and overheat easily. They should NEVER pant - even brief episodes warrant vet checkup.</p>
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
                      Understanding hiding behavior and health concerns
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-not-eating-drinking-3-days">
                <Card className="border-2 border-red-200 hover:border-red-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Not Eating or Drinking for 3 Days</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Emergency anorexia causes and hepatic lipidosis risk
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-drooling-acting-weird">
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">My Cat is Drooling and Acting Weird</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Causes of excessive drooling and behavioral changes
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-vomiting-undigested-food-hours-after-eating">
                <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Vomiting Undigested Food Hours After Eating</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Regurgitation vs vomiting and megaesophagus causes
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
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
                <h2 className="text-3xl font-bold mb-4">Concerned About Your Cat's Breathing?</h2>
                <p className="text-xl mb-6 text-purple-100">
                  Tell our free AI veterinary assistant about your cat's breathing pattern, activity level, and symptoms. 
                  Get instant guidance on whether open-mouth breathing is normal or requires emergency vet care.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Breathing Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-purple-100">
                  ✓ Available 24/7 ✓ Instant Emergency Assessment ✓ All Cat Breeds ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
