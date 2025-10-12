import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Clock, Utensils, Activity, ArrowRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function CatVomitingUndigestedFoodHoursAfterEating() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <SEOHead 
        title="Cat Vomiting Undigested Food Hours After Eating - Regurgitation Guide | PetWellBot"
        description="Cat throwing up whole food hours after eating? Learn why cats regurgitate undigested food, megaesophagus causes, and when delayed vomiting signals concern."
        keywords="cat vomiting undigested food, cat regurgitation, cat vomiting hours after eating, megaesophagus cats, cat throwing up whole food"
        canonicalUrl="https://petwellbot.com/cat-vomiting-undigested-food-hours-after-eating"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Cat Symptoms", href: "/symptoms" },
              { label: "Cat Vomiting Undigested Food Hours After Eating" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⚠️ MONITOR - Assessment Needed
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cat Vomiting Undigested Food Hours After Eating: Causes & Solutions
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Regurgitating whole food 2-8 hours after eating signals esophagus issues, not stomach problems. 
              Learn the difference between vomiting and regurgitation, causes, and when to call your vet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Symptom Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-purple-600"
              >
                <Clock className="w-5 h-5 mr-2" />
                Vomit vs Regurgitation
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
                <h2 className="text-xl font-bold text-orange-900 mb-2">⚠️ See a Vet If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Vomiting/regurgitation multiple times daily</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Weight loss or refusing food</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Difficulty swallowing or gagging when eating</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Coughing or respiratory issues</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Lethargy or weakness</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Blood in vomit or dark brown material</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Vomiting vs Regurgitation */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-purple-600" />
              Vomiting vs Regurgitation: The Critical Difference
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  VOMITING (Stomach Issue)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✗ <strong>Active process:</strong> Heaving, retching, abdominal contractions</li>
                  <li>✗ <strong>Timing:</strong> Usually within 30-60 minutes of eating</li>
                  <li>✗ <strong>Appearance:</strong> Partially digested food, yellow/green bile, liquid</li>
                  <li>✗ <strong>Warning signs:</strong> Drooling, lip licking, nausea beforehand</li>
                  <li>✗ <strong>Cause:</strong> Stomach/intestinal problem, toxins, pancreatitis</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  REGURGITATION (Esophagus Issue)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ <strong>Passive process:</strong> No heaving, food just comes back up</li>
                  <li>✓ <strong>Timing:</strong> Minutes to HOURS after eating (2-8+ hours common)</li>
                  <li>✓ <strong>Appearance:</strong> UNDIGESTED whole food, tubular/sausage shape</li>
                  <li>✓ <strong>Warning signs:</strong> None - sudden and effortless</li>
                  <li>✓ <strong>Cause:</strong> Esophagus problem, megaesophagus, stricture</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-purple-900 font-medium">
                🔍 <strong>Key Identifier:</strong> If food comes up UNDIGESTED and TUBULAR (shaped like the esophagus) hours after eating, it's regurgitation, not vomiting. The food never reached the stomach.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Common Causes */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6 Common Causes of Delayed Regurgitation in Cats
            </h2>

            <div className="space-y-4">
              <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900 mb-2">#1 Eating Too Fast (40% of cases)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Cats gulp food without chewing, trapping air in esophagus. Food sits there for hours until regurgitated.
                </p>
                <p className="text-gray-600 text-sm"><strong>Solution:</strong> Slow-feed bowls, puzzle feeders, spread food on flat plate, multiple small meals</p>
              </div>

              <div className="p-4 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900 mb-2">#2 Megaesophagus (25% of chronic cases)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Esophagus loses muscle tone, becomes dilated "floppy tube" that can't push food to stomach. Food pools for hours.
                </p>
                <p className="text-gray-600 text-sm"><strong>Red flags:</strong> Weight loss despite eating, regurgitation 2-8+ hours after EVERY meal, respiratory infections from aspiration</p>
              </div>

              <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900 mb-2">#3 Esophageal Stricture (15% of cases)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Scar tissue narrows esophagus (from hairballs, acid reflux, foreign body). Food backs up above the narrowing.
                </p>
                <p className="text-gray-600 text-sm"><strong>Timeline:</strong> Often develops weeks after severe vomiting episode or foreign body ingestion</p>
              </div>

              <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900 mb-2">#4 Hairballs Blocking Esophagus (10% of cases)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Large hairball stuck in esophagus prevents food from passing. Food accumulates above the blockage.
                </p>
                <p className="text-gray-600 text-sm"><strong>Clues:</strong> Long-haired cats, history of frequent hairballs, dry heaving between meals</p>
              </div>

              <div className="p-4 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900 mb-2">#5 Foreign Body in Esophagus (5% of cases)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> String, bone, toy piece stuck in esophagus. Partial obstruction allows some food through, rest backs up.
                </p>
                <p className="text-gray-600 text-sm"><strong>Emergency signs:</strong> Drooling, pawing at mouth, refusing food after 1-2 regurgitations</p>
              </div>

              <div className="p-4 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900 mb-2">#6 Esophagitis (Inflammation) (5% of cases)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Acid reflux, medication damage, or infection inflames esophagus lining. Swelling impairs food movement.
                </p>
                <p className="text-gray-600 text-sm"><strong>Associated:</strong> Recent anesthesia (relaxes esophageal sphincter), pill given dry, chronic vomiting</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Home Management */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Utensils className="h-6 w-6 text-purple-600" />
              Home Management Strategies
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">✓ DO These Things:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 bg-green-50 border border-green-200 rounded">
                    <p className="font-medium text-green-900 mb-1">Slow-Feed Bowls</p>
                    <p className="text-sm text-gray-700">Puzzle feeders force cats to eat slowly, reducing air swallowing (80% success rate for fast eaters)</p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded">
                    <p className="font-medium text-green-900 mb-1">Elevated Feeding</p>
                    <p className="text-sm text-gray-700">Raise bowl 4-6 inches - gravity helps food move down esophagus (essential for megaesophagus cats)</p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded">
                    <p className="font-medium text-green-900 mb-1">Small, Frequent Meals</p>
                    <p className="text-sm text-gray-700">Feed 4-6 small meals instead of 2 large - reduces esophagus workload</p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded">
                    <p className="font-medium text-green-900 mb-1">Wet Food Only</p>
                    <p className="text-sm text-gray-700">Soft food passes through esophagus easier than dry kibble (switch to pâté texture)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">✗ AVOID These Mistakes:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Free-feeding dry food:</strong> Encourages gorging and kibble is hardest to pass through esophagus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Ignoring weight loss:</strong> If cat regurgitates frequently but maintains weight, still see vet (megaesophagus risk)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Assuming it's hairballs:</strong> True hairballs are vomited (with bile), not regurgitated hours later</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to See Vet */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-purple-600" />
              When to See Your Vet
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-2">🚨 Emergency Vet (Same Day):</h3>
                <ul className="space-y-1 text-red-800 text-sm">
                  <li>• Multiple regurgitations with no food staying down (dehydration risk)</li>
                  <li>• Blood in regurgitated material or dark brown color</li>
                  <li>• Difficulty breathing, coughing after regurgitation (aspiration pneumonia)</li>
                  <li>• Complete refusal to eat or drink</li>
                  <li>• Severe lethargy or collapse</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-2">📅 Schedule Vet Visit (Within 3-5 Days):</h3>
                <ul className="space-y-1 text-yellow-800 text-sm">
                  <li>• Regurgitation happening 2-3+ times per week consistently</li>
                  <li>• Weight loss over 2-4 weeks</li>
                  <li>• Food comes up EVERY TIME after eating (megaesophagus concern)</li>
                  <li>• Regurgitation started after recent vomiting episode</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">🏠 Try Home Management First:</h3>
                <p className="text-blue-800 text-sm">
                  If regurgitation is occasional (1-2x per month), cat is healthy otherwise, eating well, and no weight loss - try slow-feed bowls and elevated feeding for 2 weeks. If continues, see vet.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vet Visit Expectations */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-purple-600" />
              What to Expect at the Vet Visit
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Physical Examination ($50-$100)</h3>
                <p className="text-gray-700">Palpate neck/chest for masses, check hydration, listen to lungs for aspiration signs, assess body condition</p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Diagnostic Tests for Regurgitation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Barium swallow (contrast X-ray):</strong> $200-$400 - cat swallows barium liquid, X-rays track movement through esophagus (gold standard for megaesophagus, strictures)</li>
                  <li><strong>Chest X-rays:</strong> $150-$300 - looks for megaesophagus, foreign bodies, aspiration pneumonia</li>
                  <li><strong>Endoscopy:</strong> $800-$1,500 - camera down esophagus to visualize strictures, inflammation, foreign bodies (requires sedation)</li>
                  <li><strong>Blood work:</strong> $150-$300 - rules out systemic causes (myasthenia gravis, hypoadrenocorticism)</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Common Treatments</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Megaesophagus management:</strong> Elevated feeding (Bailey chair $100-$300), diet modification, motility drugs (metoclopramide $20-$60/month)</li>
                  <li><strong>Esophageal stricture:</strong> Balloon dilation procedure $800-$2,000 (may need multiple sessions)</li>
                  <li><strong>Esophagitis:</strong> Acid blockers (omeprazole $30-$80/month), sucralfate coating agent $40-$100</li>
                  <li><strong>Foreign body removal:</strong> Endoscopic retrieval $1,000-$2,500 or surgery $2,000-$4,000</li>
                </ul>
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
              <Link href="/cat-not-eating-drinking-3-days">
                <Card className="border-2 border-red-200 hover:border-red-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Not Eating or Drinking for 3 Days</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Serious causes of anorexia and when to seek emergency care
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
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
                      Understanding hiding behavior and health concerns
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-breathing-mouth-open-after-playing">
                <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Breathing with Mouth Open After Playing</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Normal vs concerning open-mouth breathing in cats
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold text-sm">
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
                <h2 className="text-3xl font-bold mb-4">Worried About Your Cat's Regurgitation?</h2>
                <p className="text-xl mb-6 text-purple-100">
                  Tell our free AI veterinary assistant about the timing, appearance, and frequency of vomiting. 
                  Get instant guidance on whether it's regurgitation vs vomiting and if you need vet care.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Vomiting Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-purple-100">
                  ✓ Available 24/7 ✓ Instant Analysis ✓ All Cat Breeds ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
