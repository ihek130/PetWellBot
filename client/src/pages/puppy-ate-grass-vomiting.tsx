import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Leaf, AlertCircle, Clock, ArrowRight, CheckCircle, XCircle, Bug } from "lucide-react";
import { Link } from "wouter";

export default function PuppyAteGrassVomiting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <SEOHead 
        title="Puppy Ate Grass and Now Vomiting: Normal or Dangerous? Vet Guide | PetWellBot"
        description="Puppy eating grass then vomiting? Learn when it's normal self-medication vs parasites, blockage, or parvovirus. Includes safe vs toxic grass guide and home care tips."
        keywords="puppy ate grass vomiting, dog eating grass throwing up, grass vomit normal, puppy grass nausea, dog grass bile"
        canonicalUrl="https://petwellbot.com/puppy-ate-grass-vomiting"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Dog Symptoms", href: "/symptoms" },
              { label: "Puppy Ate Grass Vomiting" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                🌱 COMMON BEHAVIOR - Usually Harmless
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Puppy Ate Grass and Now Vomiting
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              68% of dogs eat grass regularly - it's often normal instinct. But when grass-eating leads to repeated vomiting, 
              it can signal nausea, parasites, or dietary issues. Learn when to worry and when to relax.
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
                onClick={() => document.getElementById('normal-vs-concern')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600"
              >
                <Leaf className="w-5 h-5 mr-2" />
                Normal vs Concerning
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
                    <span>Vomiting 4+ times in 6 hours (severe dehydration risk)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Bloody vomit or bloody diarrhea (parvo concern)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Unvaccinated puppy under 6 months (parvo = 90% fatal)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Distended (bloated) abdomen with retching</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Lethargy, weakness, won't stand up</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Pale or white gums (shock/internal bleeding)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Grass vomit contains plastic, fabric, or foreign material</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Treated lawn grass (pesticides, herbicides, fertilizer)</span>
                  </li>
                </ul>
                <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
                  <p className="font-bold text-yellow-800 mb-2">⚠️ TOXIC LAWN WARNING:</p>
                  <p className="text-sm text-gray-700">
                    Grass treated with Scotts Weed &amp; Feed, Roundup, or pesticides within 24-72 hours can cause poisoning. 
                    Signs: drooling, tremors, seizures, vomiting. <span className="font-bold text-red-600">EMERGENCY - call poison control immediately: (888) 426-4435</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Normal vs Concerning Section */}
      <section id="normal-vs-concern" className="py-12 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Leaf className="w-8 h-8 text-green-500" />
              Normal vs Concerning Grass-Eating Patterns
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-green-600">NORMAL Grass-Eating</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Eats grass occasionally (1-3 times per week)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Vomits 1-2 times after eating grass, then acts normal</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Vomit contains grass + normal stomach contents (kibble, bile)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Puppy still eating, drinking, playing normally after</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Nibbles grass gently, chews 2-3 blades</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>No other symptoms (diarrhea, lethargy, appetite loss)</span>
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-green-100 rounded-lg">
                        <p className="text-sm font-semibold text-green-800">
                          ✓ Why dogs do this: Natural instinct to induce vomiting when stomach feels "off". Self-medication for mild nausea. Fiber source. Boredom.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                      <XCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-red-600">CONCERNING Grass-Eating</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Eats grass frantically every day, multiple times</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Vomits 3+ times after grass, continues vomiting without grass</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Vomit has blood, mucus, or foreign objects (toys, fabric)</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Won't eat meals, only eats grass</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Gulps grass desperately, eats huge mouthfuls</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Also has diarrhea, weight loss, or lethargy</span>
                        </li>
                      </ul>
                      <div className="mt-4 p-3 bg-red-100 rounded-lg border-2 border-red-400">
                        <p className="text-sm font-semibold text-red-800">
                          🚨 What this signals: Chronic nausea (IBD, pancreatitis), parasites, foreign body obstruction, liver/kidney disease. Needs vet exam + diagnostics.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-2 border-blue-400">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  The 68% Rule: Why Most Dogs Eat Grass
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  A study of 1,500 dogs found that <span className="font-bold">68% eat grass regularly, and only 22% vomit afterward.</span> 
                  Grass-eating is considered normal canine behavior unless accompanied by other symptoms.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Theory #1: Self-Medication</p>
                    <p className="text-xs text-gray-700">
                      Dogs instinctively eat grass to induce vomiting when stomach feels upset. Grass irritates stomach lining → triggers vomit reflex.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Theory #2: Nutritional Need</p>
                    <p className="text-xs text-gray-700">
                      Grass provides fiber, chlorophyll, enzymes. Wild wolves eat grass in prey's stomach. May signal low-fiber diet.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Theory #3: Boredom/Instinct</p>
                    <p className="text-xs text-gray-700">
                      Young puppies explore world by mouth. Grass is interesting texture/taste. More common in under-exercised dogs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Top 8 Reasons Puppies Eat Grass Then Vomit</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm">#1</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Mild Nausea/Upset Stomach (Most Common)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Trigger:</span> Ate too fast, switched food too quickly, ate something weird (dead bug, poop, etc.).
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Pattern:</span> Puppy eats grass to make themselves vomit, feels better after, acts normal.
                      </p>
                      <p className="text-green-600 text-sm font-semibold">
                        Solution: Normal self-regulation. If happens more than 2x/week → switch to bland diet, slow feeder bowl, or see vet.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-100 text-yellow-700 font-bold px-3 py-1 rounded-full text-sm">#2</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Bilious Vomiting Syndrome (Empty Stomach)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">What it is:</span> Bile builds up in empty stomach overnight, causes nausea in morning. Puppy eats grass to vomit up bile.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Vomits yellow/white foam + grass first thing in morning or before meals.
                      </p>
                      <p className="text-yellow-600 text-sm font-semibold">
                        Solution: Feed small snack before bed (biscuit, spoonful of kibble). Split meals into 3x daily instead of 2x. See <Link to="/dog-vomiting-yellow-foam-night" className="underline">yellow foam vomit guide</Link>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-sm">#3</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Intestinal Parasites (Roundworms, Hookworms, Giardia)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Why grass-eating:</span> Parasites irritate stomach/intestines → nausea → grass self-medication.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Other signs:</span> Pot-bellied appearance, diarrhea, weight loss despite eating, visible worms in stool.
                      </p>
                      <p className="text-orange-600 text-sm font-semibold">
                        Diagnosis: Fecal test. Treatment: Dewormer (fenbendazole, pyrantel). Puppies should be dewormed at 2, 4, 6, 8 weeks of age.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-sm">#4</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Parvovirus (Unvaccinated Puppies) - EMERGENCY</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Risk:</span> Unvaccinated puppies 6 weeks - 6 months. Destroys intestinal lining, causes severe nausea.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Grass-eating + vomiting + bloody diarrhea + lethargy + won't eat/drink. Distinct "parvo smell" (sweet, rotting).
                      </p>
                      <p className="text-red-600 text-sm font-semibold">
                        CRITICAL: 90% fatal without treatment. Needs emergency isolation + IV fluids + hospitalization. See <Link to="/dog-diarrhea-blood-emergency" className="underline">bloody diarrhea guide</Link>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">#5</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Foreign Body Obstruction (Swallowed Toy/Sock)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">What happens:</span> Puppy swallows non-food item, gets stuck in stomach/intestine, causes severe nausea.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Frantic grass-eating (trying to vomit up object), vomiting without relief, hunched posture, won't eat.
                      </p>
                      <p className="text-purple-600 text-sm font-semibold">
                        Diagnosis: X-ray, ultrasound. Treatment: Surgery $2,000-$5,000. Time-sensitive - object can perforate intestine.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-blue-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-blue-600 mb-2">#6: Food Allergies/Sensitivities</h3>
                    <p className="text-sm text-gray-700">
                      Allergy to chicken, beef, dairy in puppy food causes chronic nausea. Try limited ingredient diet (fish, lamb). Takes 8-12 weeks to see improvement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-teal-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-teal-600 mb-2">#7: Inflammatory Bowel Disease (IBD)</h3>
                    <p className="text-sm text-gray-700">
                      Chronic inflammation of GI tract. Grass-eating + vomiting daily for weeks/months. Weight loss despite eating. Needs endoscopy to diagnose.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-pink-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-pink-600 mb-2">#8: Boredom/Behavioral (No Medical Cause)</h3>
                    <p className="text-sm text-gray-700">
                      Puppy eats grass out of curiosity/play, not nausea. Vomits because ate too much grass. More mental stimulation + training reduces behavior.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-indigo-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-indigo-600 mb-2">Toxic Grass Warning</h3>
                    <p className="text-sm text-gray-700">
                      Grass with pesticides, herbicides (Roundup), fertilizer. Vomiting starts 1-6 hours after eating. Call poison control: (888) 426-4435.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Care Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-500" />
              When to Prevent Grass-Eating vs Let It Happen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-green-700 text-lg mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Let Them Eat Grass IF:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Untreated lawn (no pesticides in 72+ hours)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Nibbling gently, not gulping frantically</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Vomits 1-2 times, then acts normal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Natural self-medication for mild nausea</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">
                      ✓ Why: Grass helps puppy vomit up whatever's upsetting stomach. Fiber aids digestion. Generally safe behavior.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <h3 className="font-bold text-red-700 text-lg mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    STOP Them IF:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Lawn recently treated (fertilizer, pesticides)</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Eating huge mouthfuls frantically</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Already vomited 2+ times in past hour</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Grass contains fertilizer pellets/chemicals</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-100 rounded-lg">
                    <p className="text-sm font-semibold text-red-800">
                      🚨 Why: Pesticides cause poisoning. Too much grass causes obstruction. Frantic eating signals serious nausea needing vet care.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">7 Ways to Reduce Grass-Eating Behavior</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">1. Switch to High-Fiber Food</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Add pumpkin (1-2 tbsp), sweet potato, or switch to food with 4-6% fiber. May reduce grass cravings.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">2. Feed Smaller, More Frequent Meals</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Split 2 meals into 3-4 smaller meals. Prevents empty-stomach nausea that triggers grass-eating.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">3. Slow Feeder Bowl</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Eating too fast causes nausea. Puzzle feeders force puppy to eat slowly, reduces post-meal grass-eating.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">4. More Exercise &amp; Mental Stimulation</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Bored puppies eat grass. 30-60 min exercise daily + training games reduces behavior by 40%.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">5. Grow Safe "Dog Grass"</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Wheatgrass, barley grass kits from pet store. Pesticide-free alternative. Let them have designated grass.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">6. Train "Leave It" Command</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Teach puppy to ignore grass on command. Redirect to toy/treat when they approach grass.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">7. Deworming Protocol</p>
                    <p className="text-sm text-gray-700 mb-3">
                      If grass-eating is constant, assume parasites. Deworm with fenbendazole 3 days, repeat in 2 weeks.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">When to See Vet</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Grass-eating daily for 2+ weeks, weight loss, vomiting 3+ times after grass, bloody vomit/diarrhea.
                    </p>
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
              Related Puppy Digestive Issues
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Grass-eating often signals underlying GI problems. Explore related puppy vomiting and nausea issues:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/dog-vomiting-yellow-foam-night">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-yellow-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-yellow-600">Dog Vomiting Yellow Foam at Night</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Puppies who eat grass then vomit yellow bile may have bilious vomiting syndrome. Learn 3 proven solutions to stop morning grass-eating.
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
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
                      Grass-eating + vomiting + bloody diarrhea in unvaccinated puppies = parvo emergency. Understand when GI symptoms require immediate vet care.
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dog-wont-drink-water-will-eat">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-blue-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-blue-600">Dog Won't Drink Water But Will Eat</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Vomiting from grass-eating causes dehydration. If your puppy refuses water after vomiting episodes, learn how to prevent dangerous fluid loss.
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dog-ate-chocolate-3-hours-ago">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-orange-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-orange-600">Dog Ate Chocolate 3 Hours Ago</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Puppies who eat grass frantically may be trying to vomit up toxins like chocolate. Understand when grass-eating is a poisoning warning sign.
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold text-sm">
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
                <h2 className="text-3xl font-bold mb-4">Upload Photo of Grass Vomit for Analysis</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Not sure if your puppy's grass-eating is normal? Upload a photo of the vomit to our AI assistant. 
                  Get instant analysis of bile color, foreign objects, blood presence, and whether you need a vet visit today.
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Analyze Vomit Symptoms for Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  ✓ Photo Upload ✓ 24/7 Available ✓ Parvo Risk Assessment ✓ All Puppy Breeds
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
            "name": "Puppy Ate Grass and Vomiting - Normal vs Emergency Guide",
            "description": "Comprehensive guide to grass-eating and vomiting in puppies, including normal patterns, concerning signs, and treatment",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Canine Grass Ingestion and Vomiting",
              "possibleCause": [
                "Nausea self-medication",
                "Intestinal parasites",
                "Bilious vomiting syndrome",
                "Parvovirus",
                "Foreign body obstruction"
              ]
            }
          })
        }}
      />
    </div>
  );
}
