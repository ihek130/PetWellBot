import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { AlertTriangle, Heart, Droplets, Thermometer, Activity, Clock, ArrowRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function DogWontDrinkWaterWillEat() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <SEOHead 
        title="My Dog Won't Drink Water But Will Eat - Dehydration Causes & Fixes | PetWellBot"
        description="Dog refusing water but still eating? Learn why dogs avoid water, signs of dehydration, medical causes (kidney disease, nausea), and tricks to increase water intake."
        keywords="dog won't drink water, dog refusing water, dog dehydration, dog not drinking water but eating, how to get dog to drink water"
        canonicalUrl="https://petwellbot.com/dog-wont-drink-water-will-eat"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Dog Symptoms", href: "/symptoms" },
              { label: "Dog Won't Drink Water But Will Eat" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⚠️ URGENT - Dehydration Risk Within 24-48 Hours
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My Dog Won't Drink Water But Will Eat: Causes, Dangers & Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Refusing water while eating normally signals nausea, mouth pain, or water aversion. 
              Learn why it happens, how to spot dehydration, and proven tricks to get your dog drinking again.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Health Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('tricks')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600"
              >
                <Droplets className="w-5 h-5 mr-2" />
                Water Tricks That Work
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
                    <span>No water for 24+ hours (12 hours for puppies/small dogs)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Dry, sticky gums or skin tenting (doesn't snap back)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Sunken eyes or lethargy/weakness</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Vomiting, diarrhea, or blood in urine/stool</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Dark yellow/orange urine or no urination in 12+ hours</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Known kidney disease, diabetes, or senior dog (7+ years)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dehydration Check Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Droplets className="w-8 h-8 text-blue-500" />
              Quick Dehydration Test (Do This NOW)
            </h2>
            
            <Card className="mb-6 border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">3-Step Home Dehydration Check</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-xl font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Skin Tent Test</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        <span className="font-semibold">How:</span> Gently pinch skin between shoulder blades, pull up 1-2 inches, release.
                      </p>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                          <p className="font-semibold text-green-700 text-sm mb-1">✓ Normal:</p>
                          <p className="text-xs text-gray-700">Skin snaps back instantly (&lt;1 second)</p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                          <p className="font-semibold text-yellow-700 text-sm mb-1">⚠️ Mild Dehydration:</p>
                          <p className="text-xs text-gray-700">Skin takes 1-2 seconds to flatten</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                          <p className="font-semibold text-red-700 text-sm mb-1">🚨 Severe:</p>
                          <p className="text-xs text-gray-700">Skin stays tented 3+ seconds or doesn't go down</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-xl font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Gum Moisture Test</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        <span className="font-semibold">How:</span> Lift dog's lip, touch gums with finger. Check color and moisture.
                      </p>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                          <p className="font-semibold text-green-700 text-sm mb-1">✓ Normal:</p>
                          <p className="text-xs text-gray-700">Pink, wet/slippery gums. Capillary refill &lt;2 sec</p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                          <p className="font-semibold text-yellow-700 text-sm mb-1">⚠️ Mild Dehydration:</p>
                          <p className="text-xs text-gray-700">Tacky/sticky gums, pale pink</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                          <p className="font-semibold text-red-700 text-sm mb-1">🚨 Severe:</p>
                          <p className="text-xs text-gray-700">Dry, white/gray gums. No saliva</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-xl font-bold text-blue-600">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Eye & Energy Check</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        <span className="font-semibold">What to look for:</span> Sunken eyes, lethargy, loss of skin elasticity around face.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span><span className="font-bold">Normal:</span> Bright eyes, alert, playful, normal energy</span>
                        </li>
                        <li className="flex items-start">
                          <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span><span className="font-bold">Mild:</span> Slightly tired, less playful, but responsive</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span><span className="font-bold">Severe:</span> Sunken eyes, won't stand, unresponsive, collapse</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-50 rounded-lg border-2 border-red-300">
                  <p className="font-bold text-red-700 mb-2">⚠️ DEHYDRATION TIMELINE:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <span className="font-bold">12-24 hours no water:</span> Mild dehydration begins (5-6% body water loss)</li>
                    <li>• <span className="font-bold">24-48 hours:</span> Moderate dehydration (6-8% loss) - organ function affected</li>
                    <li>• <span className="font-bold">48-72 hours:</span> Severe dehydration (8-12% loss) - kidney failure risk, life-threatening</li>
                    <li>• <span className="font-bold text-red-600">Puppies/small dogs dehydrate 2x faster - emergency at 12 hours!</span></li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Dogs Refuse Water Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Would a Dog Refuse Water But Still Eat?</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-sm">#1</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Nausea or Upset Stomach</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Why:</span> Nauseated dogs avoid water because drinking triggers vomiting reflex. Food is more appealing than plain water when nauseous.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Other signs:</span> Excessive drooling, lip licking, pacing, vomiting yellow foam (bile), grass eating
                      </p>
                      <p className="text-red-600 text-sm font-semibold">Action: Try ice chips or bone broth. If vomiting starts, see vet within 24 hours.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-sm">#2</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Mouth or Throat Pain</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Causes:</span> Dental disease, broken tooth, mouth ulcers, something stuck in throat, tonsillitis
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Why water hurts more than food:</span> Cold water stings painful gums/teeth. Soft food requires less chewing/swallowing effort.
                      </p>
                      <p className="text-orange-600 text-sm font-semibold">Check: Look inside mouth for red gums, broken teeth, swelling, drooling. Vet dental exam needed.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-100 text-yellow-700 font-bold px-3 py-1 rounded-full text-sm">#3</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Kidney Disease (Chronic Renal Failure)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Paradox:</span> Early kidney disease causes increased thirst, but advanced stages cause nausea that makes dogs avoid water.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Other signs:</span> Weight loss, bad breath (ammonia smell), vomiting, increased urination then decreased, lethargy
                      </p>
                      <p className="text-yellow-600 text-sm font-semibold">Senior dogs (7+): Blood test (BUN, creatinine) essential. Kidney disease is progressive but manageable.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">#4</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Water Bowl Aversion or Environmental Issue</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Behavioral causes:</span> Dirty bowl (biofilm), plastic bowl allergy, water tastes different (new source, chlorine), bowl too deep (whisker fatigue), scared of noise (water fountain motor)
                      </p>
                      <p className="text-blue-600 text-sm font-semibold">Test: Offer water in different bowl (stainless steel, ceramic), different location, or bottled water. If drinks immediately, it's environmental!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">#5</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Diabetes (Early Stage)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Why:</span> High blood sugar causes excessive urination, leading to severe thirst. But nausea from ketoacidosis makes dog avoid water.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Other signs:</span> Weight loss despite eating well, frequent urination, sweet/fruity breath odor
                      </p>
                      <p className="text-purple-600 text-sm font-semibold">Urgent: Undiagnosed diabetes can lead to diabetic coma. Blood glucose test needed within 24-48 hours.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-green-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-green-600 mb-2 flex items-center gap-2">
                      <span className="bg-green-100 px-2 py-1 rounded text-sm">#6</span>
                      Recent Vaccination or Medication
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Vaccines can cause temporary nausea (24-48 hours). Some meds (antibiotics, pain pills) reduce thirst or cause stomach upset.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-pink-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-pink-600 mb-2 flex items-center gap-2">
                      <span className="bg-pink-100 px-2 py-1 rounded text-sm">#7</span>
                      Anxiety or Stress
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Major changes (moving, new pet, family member left) can suppress thirst. Dog eats for comfort but forgets to drink.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-teal-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-teal-600 mb-2 flex items-center gap-2">
                      <span className="bg-teal-100 px-2 py-1 rounded text-sm">#8</span>
                      Urinary Tract Infection (UTI)
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Painful urination makes dogs associate water with pain. Avoids drinking to avoid peeing. Blood in urine, straining, accidents.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-indigo-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-indigo-600 mb-2 flex items-center gap-2">
                      <span className="bg-indigo-100 px-2 py-1 rounded text-sm">#9</span>
                      Getting Moisture from Food
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Wet food is 70-80% water. Dog on canned food diet may drink very little. Check if water intake dropped after food change.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tricks to Get Dog Drinking Section */}
      <section id="tricks" className="py-12 bg-green-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Droplets className="w-8 h-8 text-green-600" />
              10 Proven Tricks to Increase Water Intake
            </h2>
            
            <div className="grid gap-4">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                      <span className="text-lg font-bold text-green-600">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-green-700 mb-2">Ice Cubes (Works 80% of Time)</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Why it works:</span> Dogs see ice as a "treat" not water. Licking ice slowly hydrates without triggering nausea. 
                        Try: Give 4-6 ice cubes every 2-3 hours. Many dogs love crunching ice!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                      <span className="text-lg font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-700 mb-2">Low-Sodium Chicken/Beef Broth</h3>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Recipe:</span> Boil chicken breast in 4 cups water, strain, cool. Or use store-bought (NO onion, NO garlic, low sodium). 
                        Dilute 1:1 with water. Most dogs can't resist the smell!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full flex-shrink-0">
                      <span className="text-lg font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-purple-700 mb-2">Add Water to Dry Food</h3>
                      <p className="text-sm text-gray-700">
                        Pour warm water (not hot) over kibble 10-15 minutes before feeding. Creates "gravy" that dog eats with food. 
                        Start with 1/4 cup water, increase to 1/2 cup daily. Hidden hydration!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
                      <span className="text-lg font-bold text-orange-600">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-orange-700 mb-2">Multiple Water Stations</h3>
                      <p className="text-sm text-gray-700">
                        Place 3-4 water bowls in different rooms. Dog may avoid one location (too bright, too noisy) but drink in another. 
                        Use different bowl types: stainless steel, ceramic, wide shallow bowl.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full flex-shrink-0">
                      <span className="text-lg font-bold text-yellow-600">5</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-yellow-700 mb-2">Flavored Water (Dog-Safe)</h3>
                      <p className="text-sm text-gray-700">
                        Add: 1 tbsp goat's milk, 1 tsp plain yogurt, or 1 tsp tuna juice (in water, not oil) to 1 cup water. 
                        Or try dog-specific electrolyte solutions (Pedialyte for dogs, unflavored).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-white">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">6. Frozen Treats</h3>
                    <p className="text-sm text-gray-700">Freeze low-sodium broth in ice cube trays. Or blend watermelon (seedless) + freeze. Hydration disguised as treat!</p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">7. Running Water (Fountain)</h3>
                    <p className="text-sm text-gray-700">Some dogs prefer flowing water. Try pet water fountain (filters keep water fresh). Change water 2x daily to keep cool.</p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">8. Water Bottle Trick</h3>
                    <p className="text-sm text-gray-700">Offer water from clean squeeze bottle (like hamster bottle). Some dogs find it fun to lick from bottle spout.</p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">9. High-Water Veggies</h3>
                    <p className="text-sm text-gray-700">Cucumbers (96% water), watermelon (92%), celery (95%). Chop small, offer as snacks. Natural hydration boost!</p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">10. Syringe Feeding (Last Resort)</h3>
                    <p className="text-sm text-gray-700">Use oral syringe (no needle), squirt 5-10ml into side of mouth every hour. Only if dog won't drink voluntarily. Consult vet first.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to See Vet Section */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-yellow-600" />
              Timeline: When to See Vet
            </h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-green-700 text-lg mb-3">✓ Try Home Tricks First (6-12 Hours)</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dog still eating normally, active, no other symptoms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Urinating normally (not dark yellow)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Gums still pink and moist</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Will drink ice chips or broth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-yellow-700 text-lg mb-3">⚠️ Vet Visit Within 24 Hours</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No water for 12-24 hours despite trying all tricks</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Mild dehydration signs (tacky gums, skin tents 1-2 sec)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Senior dog (7+) or known kidney disease</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Appetite also decreasing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-red-700 text-lg mb-3">🚨 Emergency Vet NOW</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Puppy (under 6 months) or small dog (&lt;10 lbs) - 12+ hours no water</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Vomiting, diarrhea, or blood in urine/stool</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Severe dehydration (skin tents 3+ sec, sunken eyes, collapse)</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No urination in 12+ hours or dark orange urine</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What Vet Will Do:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Physical Exam + Hydration Assessment</p>
                      <p className="text-sm text-gray-700">Check gums, skin elasticity, heart rate, temperature. Weigh dog to estimate water loss percentage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Blood Work (BUN, Creatinine, Electrolytes)</p>
                      <p className="text-sm text-gray-700">Kidney function test, dehydration severity, diabetes screening. Costs $150-$300.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Urinalysis</p>
                      <p className="text-sm text-gray-700">Check for UTI, kidney disease, diabetes. Dark concentrated urine confirms dehydration.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">IV Fluid Therapy (If Moderate-Severe Dehydration)</p>
                      <p className="text-sm text-gray-700">Subcutaneous fluids (under skin, go home same day) or IV fluids (hospitalization, 12-24 hours). Costs $200-$800.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Anti-Nausea Medication</p>
                      <p className="text-sm text-gray-700">Cerenia, Zofran if nausea is suspected. Stops vomiting, increases water intake within 6-12 hours.</p>
                    </div>
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
              Related Dog Hydration & Digestive Symptoms
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Refusing water often accompanies other symptoms. Explore related conditions that may explain your dog's behavior:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/dog-vomiting-yellow-foam-night">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-yellow-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-yellow-600">Dog Vomiting Yellow Foam at Night</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Nausea from bile reflux makes dogs avoid water. If your dog refuses water AND vomits yellow foam, learn the feeding schedule fixes that stop both symptoms.
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dog-ate-chocolate-3-hours-ago">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-red-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-red-600">Dog Ate Chocolate 3 Hours Ago</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Chocolate toxicity causes excessive thirst followed by nausea-induced water refusal. Understand when refusing water after toxin ingestion signals emergency.
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/dog-diarrhea-blood-emergency">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-orange-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-orange-600">Dog Diarrhea with Blood: Emergency?</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Diarrhea dehydrates dogs fast. When combined with water refusal, dehydration becomes life-threatening within 24 hours. Learn emergency hydration strategies.
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/senior-dog-weak-back-legs">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-purple-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-purple-600">Senior Dog Suddenly Weak Back Legs</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Kidney failure in senior dogs causes both weakness and water refusal. If your older dog won't drink AND shows hind leg weakness, urgent blood work needed.
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
                <h2 className="text-3xl font-bold mb-4">Worried Your Dog Is Getting Dehydrated?</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Tell our free AI veterinary assistant how long it's been since your dog drank water and describe any other symptoms. 
                  Get instant dehydration assessment and whether you need emergency vet care tonight.
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Dehydration Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  ✓ 24/7 Available ✓ Instant Risk Assessment ✓ All Dog Breeds ✓ Completely Free
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
            "name": "Dog Won't Drink Water But Will Eat - Causes & Solutions",
            "description": "Complete guide to dogs refusing water, including dehydration assessment, medical causes, and proven hydration tricks",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Dehydration and Water Refusal in Dogs",
              "riskFactor": "Can lead to kidney failure within 48-72 hours",
              "possibleCause": [
                "Nausea",
                "Mouth pain",
                "Kidney disease",
                "Diabetes",
                "Behavioral aversion"
              ]
            }
          })
        }}
      />

      <Footer />
    </div>
  );
}
