import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { AlertTriangle, Heart, Droplets, Eye, Clock, ArrowRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function DogDiarrheaBloodEmergency() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <SEOHead 
        title="Dog Diarrhea with Blood: Emergency or Not? Red vs Black Blood Guide | PetWellBot"
        description="Dog pooping blood? Learn the difference between hematochezia (red blood) vs melena (black tarry), when it's an emergency, common causes, and home care vs vet visit decision tree."
        keywords="dog diarrhea with blood, bloody dog stool, hematochezia dogs, melena dogs, dog pooping blood emergency, bloody diarrhea dogs"
        canonicalUrl="https://petwellbot.com/dog-diarrhea-blood-emergency"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Dog Symptoms", href: "/symptoms" },
              { label: "Dog Diarrhea with Blood Emergency" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⚠️ URGENT - Assessment Needed Within Hours
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dog Diarrhea with Blood: Emergency or Not?
            </h1>
            <p className="text-xl text-red-100 mb-6">
              Blood in dog stool can signal anything from diet changes to life-threatening bleeding. 
              Learn to identify red vs black blood, assess severity, and decide if you need the ER vet tonight.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Analyze Symptoms with AI
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('color-guide')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-red-600"
              >
                <Eye className="w-5 h-5 mr-2" />
                Blood Color Guide
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
                    <span>Large amounts of blood (more than streaks/spots)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Black, tarry, tar-like stool (melena = internal bleeding)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Vomiting blood or coffee-ground vomit</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Pale or white gums (sign of blood loss/shock)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Weakness, collapse, or can't stand</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Distended (bloated) abdomen with bloody diarrhea</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Puppy under 6 months (parvo risk - highly contagious!)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Known toxin ingestion (rat poison, antifreeze)</span>
                  </li>
                </ul>
                <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
                  <p className="font-bold text-yellow-800 mb-2">⚠️ PARVOVIRUS WARNING (Puppies):</p>
                  <p className="text-sm text-gray-700">
                    Bloody diarrhea + vomiting + lethargy in unvaccinated puppies = <span className="font-bold text-red-600">PARVO UNTIL PROVEN OTHERWISE.</span> 
                    This is a medical emergency with 90% mortality if untreated. Call vet immediately, isolate dog from other pets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Color Guide Section */}
      <section id="color-guide" className="py-12 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Eye className="w-8 h-8 text-red-500" />
              Blood Color Guide: Red vs Black (CRITICAL Difference)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                      <Droplets className="w-8 h-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-red-600">Hematochezia (Bright Red Blood)</h3>
                      <p className="text-gray-700 text-sm mb-3">
                        <span className="font-semibold">What it looks like:</span> Bright red streaks, spots, or coating on stool. May drip from anus.
                      </p>
                      <p className="text-gray-700 text-sm mb-3">
                        <span className="font-semibold">Where bleeding is:</span> Lower intestine (colon, rectum) or anus. Blood hasn't been digested.
                      </p>
                      <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                        <p className="font-semibold text-orange-800 mb-2">Common Causes:</p>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Colitis (inflammation of colon)</li>
                          <li>• Parasites (hookworms, whipworms)</li>
                          <li>• Anal gland abscess/infection</li>
                          <li>• Constipation causing anal tears</li>
                          <li>• Food allergies/sensitivities</li>
                          <li>• Hemorrhagic gastroenteritis (HGE)</li>
                        </ul>
                      </div>
                      <p className="text-sm text-red-600 font-semibold mt-3">
                        Urgency: Vet within 24 hours if small amounts. Emergency if large amounts or dog seems sick.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-800 p-3 rounded-full flex-shrink-0">
                      <AlertTriangle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Melena (Black Tarry Stool)</h3>
                      <p className="text-gray-700 text-sm mb-3">
                        <span className="font-semibold">What it looks like:</span> Black, tar-like, sticky, foul-smelling stool. Looks like coffee grounds or asphalt.
                      </p>
                      <p className="text-gray-700 text-sm mb-3">
                        <span className="font-semibold">Where bleeding is:</span> Upper GI tract (stomach, small intestine). Blood has been partially digested, turning it black.
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg border-2 border-red-400">
                        <p className="font-semibold text-red-800 mb-2">Serious Causes (URGENT):</p>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Gastric ulcers (NSAIDs, stress)</li>
                          <li>• Stomach cancer/tumors</li>
                          <li>• Rat poison (anticoagulant toxicity)</li>
                          <li>• Blood clotting disorders</li>
                          <li>• Severe liver disease</li>
                          <li>• Foreign body causing internal bleeding</li>
                        </ul>
                      </div>
                      <p className="text-sm text-red-600 font-bold mt-3 bg-red-100 p-2 rounded">
                        🚨 Urgency: EMERGENCY VET NOW! Black stool = significant internal bleeding. Don't wait.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-yellow-50 border-2 border-yellow-400">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-yellow-800 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  How to Tell Red vs Black Apart
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Visual Test:</p>
                    <p className="text-sm text-gray-700">
                      Bright red = looks like fresh blood. Black = looks like tar, coffee grounds, or very dark chocolate.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Texture Test:</p>
                    <p className="text-sm text-gray-700">
                      Red blood = liquid, may drip. Black blood = sticky, tar-like consistency, harder to clean up.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Smell Test:</p>
                    <p className="text-sm text-gray-700">
                      Red blood = metallic smell. Black blood = extremely foul, "dead" odor (from digested blood).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Severity Assessment Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Severity Assessment: How Much Blood Matters</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-green-700 text-lg mb-3 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    Mild (Can Monitor at Home 24-48 Hours)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      <span><span className="font-bold">Small streaks or spots</span> of bright red blood on surface of stool</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      <span>Only 1-2 episodes in 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      <span>Dog still eating, drinking, and acting normal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      <span>No vomiting, fever, or lethargy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      <span>Recent diet change or stress event</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">
                      ✓ Home Care: Bland diet (boiled chicken + rice), probiotics, monitor. Call vet if worsens or no improvement in 48 hours.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-yellow-700 text-lg mb-3 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6" />
                    Moderate (Vet Visit Within 12-24 Hours)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2 mt-0.5">•</span>
                      <span><span className="font-bold">Mucus-coated stool</span> with blood (looks like jelly)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2 mt-0.5">•</span>
                      <span>3-5 bloody episodes in 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2 mt-0.5">•</span>
                      <span>Straining to defecate (tenesmus)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2 mt-0.5">•</span>
                      <span>Mild appetite decrease or low energy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2 mt-0.5">•</span>
                      <span>Blood increasing with each bowel movement</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                    <p className="text-sm font-semibold text-yellow-800">
                      ⚠️ Vet Needed: Likely colitis, parasites, or infection. Needs fecal test, exam, possible antibiotics. Bring fresh stool sample.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-5">
                  <h3 className="font-bold text-red-700 text-lg mb-3 flex items-center gap-2">
                    <XCircle className="w-6 h-6" />
                    Severe (Emergency Vet NOW - Within 1-2 Hours)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5">•</span>
                      <span><span className="font-bold">Mostly blood</span> with little to no stool (looks like raspberry jam)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5">•</span>
                      <span>Black, tarry stool (melena)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5">•</span>
                      <span>Vomiting + bloody diarrhea together</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5">•</span>
                      <span>Pale gums, rapid breathing, weak/collapse</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5">•</span>
                      <span>Unvaccinated puppy (parvo concern)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-0.5">•</span>
                      <span>6+ episodes in 6 hours (severe dehydration risk)</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-100 rounded-lg border-2 border-red-400">
                    <p className="text-sm font-bold text-red-800">
                      🚨 EMERGENCY: HGE, parvo, internal bleeding, or sepsis. Requires IV fluids, hospitalization, blood work. Life-threatening without treatment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Causes Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Top 12 Causes of Bloody Diarrhea in Dogs</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-sm">#1</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Hemorrhagic Gastroenteritis (HGE) - EMERGENCY</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">What it is:</span> Sudden, severe inflammation causing explosive bloody diarrhea (looks like strawberry jam). Cause unknown.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Sudden onset, large volume blood, vomiting, shock within hours. More common in small breeds.
                      </p>
                      <p className="text-orange-600 text-sm font-semibold">Treatment: Emergency IV fluids, hospitalization 24-48 hours. 95% survival rate with immediate treatment.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-full text-sm">#2</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Parvovirus (Puppies) - HIGHLY CONTAGIOUS</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Risk:</span> Unvaccinated puppies 6 weeks - 6 months. Destroys intestinal lining.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Bloody diarrhea (distinct parvo smell), vomiting, lethargy, fever, won't eat/drink.
                      </p>
                      <p className="text-red-600 text-sm font-semibold">Critical: 90% fatal without treatment. Needs isolation + aggressive IV therapy. Prevent with vaccines!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-100 text-yellow-700 font-bold px-3 py-1 rounded-full text-sm">#3</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Intestinal Parasites (Hookworms, Whipworms)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">How they cause bleeding:</span> Worms attach to intestinal wall, feed on blood. Heavy infestations cause anemia.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Chronic bloody diarrhea, weight loss despite eating, pot-bellied appearance (puppies).
                      </p>
                      <p className="text-yellow-600 text-sm font-semibold">Diagnosis: Fecal test. Treatment: Dewormer (fenbendazole, pyrantel). Usually resolves in 5-7 days.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">#4</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Food Intolerance or Sudden Diet Change</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Triggers:</span> Switching food too fast, table scraps, dairy, high-fat foods, food allergies (chicken, beef, wheat).
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Bloody diarrhea starts 6-24 hours after eating trigger food. No fever or severe illness.
                      </p>
                      <p className="text-blue-600 text-sm font-semibold">Solution: Bland diet (boiled chicken + rice) for 3-5 days. Gradual food transitions over 7-10 days.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-full text-sm">#5</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Colitis (Inflammation of Colon)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Types:</span> Stress colitis (boarding, travel), chronic colitis (IBD), infectious colitis (bacteria).
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Frequent small amounts of bloody, mucus-coated stool. Straining, urgency.
                      </p>
                      <p className="text-purple-600 text-sm font-semibold">Treatment: Anti-inflammatory diet, probiotics, metronidazole if bacterial. Chronic cases need endoscopy.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-pink-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-pink-100 text-pink-700 font-bold px-3 py-1 rounded-full text-sm">#6</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Rat Poison (Anticoagulant Toxicity)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">How it works:</span> Prevents blood clotting. Bleeding starts 3-7 days after ingestion (delayed onset!).
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Signs:</span> Black tarry stool, bloody diarrhea, bruising, pale gums, weakness, coughing up blood.
                      </p>
                      <p className="text-pink-600 text-sm font-semibold">Emergency: Vitamin K antidote for 3-4 weeks. Blood transfusion if severe. Check for rat poison in garage/yard!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-teal-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-teal-600 mb-2">#7: Foreign Body (Obstruction)</h3>
                    <p className="text-sm text-gray-700">
                      Toy, bone, fabric causing intestinal damage. Blood from ulceration. Needs x-ray/ultrasound + surgery if blocked.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-green-600 mb-2">#8: Anal Gland Abscess</h3>
                    <p className="text-sm text-gray-700">
                      Infected glands rupture, blood appears on stool surface. Scooting, licking rear, foul smell. Needs manual expression + antibiotics.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-indigo-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-indigo-600 mb-2">#9: Stomach Ulcers (NSAIDs)</h3>
                    <p className="text-sm text-gray-700">
                      Chronic use of Rimadyl, Metacam, aspirin. Causes black tarry stool. Stop NSAID, give omeprazole, sucralfate.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-red-600 mb-2">#10: Cancer (Colon, Rectum)</h3>
                    <p className="text-sm text-gray-700">
                      Senior dogs. Tumors bleed intermittently. Chronic bloody diarrhea, weight loss. Needs colonoscopy for diagnosis.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-orange-600 mb-2">#11: Clotting Disorders</h3>
                    <p className="text-sm text-gray-700">
                      Von Willebrand disease, thrombocytopenia. Spontaneous bleeding. Needs blood panel to diagnose.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-yellow-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-yellow-600 mb-2">#12: Pancreatitis</h3>
                    <p className="text-sm text-gray-700">
                      After fatty meal. Vomiting + diarrhea (may have blood). Hunched posture, won't eat. Needs bland diet + pain management.
                    </p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Home Care for Mild Bloody Diarrhea (First 24-48 Hours)</h2>
            
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
                        <span><span className="font-semibold">Bland Diet:</span> Boiled chicken (no skin) + white rice, 50:50 ratio. Feed small meals 4x daily for 3 days.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">Probiotics:</span> Fortiflora, Purina Pro Plan Veterinary Fortiflora, or plain Greek yogurt (1 tbsp per 20 lbs).</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">Hydration:</span> Fresh water always available. Add low-sodium broth to encourage drinking.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">Pumpkin:</span> 1-2 tbsp pure pumpkin (NOT pie filling) per meal. Firms stool, soothes gut.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">Monitor:</span> Count episodes, note blood amount, check gum color, take photos of stool.</span>
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
                        <span><span className="font-semibold">NO Pepto-Bismol:</span> Makes stool black (mimics melena), hard to assess bleeding. Can cause salicylate toxicity.</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">NO Imodium without vet:</span> Can worsen certain infections (parvo, bacteria). Masks symptoms.</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">NO Fasting:</span> Old advice was fast 24 hours. Now proven to delay healing. Feed bland diet immediately.</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">NO Table scraps:</span> Worsens inflammation. Stick to bland diet only.</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><span className="font-semibold">NO Waiting too long:</span> If no improvement in 48 hours or worsens, see vet. Don't "wait and see" for a week.</span>
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
              Related Dog Digestive Emergencies
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Bloody diarrhea often occurs with other symptoms. Explore related digestive issues in dogs:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/dog-vomiting-yellow-foam-night">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-yellow-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-yellow-600">Dog Vomiting Yellow Foam at Night</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Vomiting plus bloody diarrhea signals gastroenteritis or worse. Learn when bile vomit combined with blood requires emergency care.
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
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
                      Bloody diarrhea causes rapid dehydration. If your dog also refuses water, IV fluids may be needed within 12-24 hours.
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
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
                      Chocolate poisoning causes bloody diarrhea in severe cases. Understand when toxin ingestion leads to GI bleeding and what to do.
                    </p>
                    <div className="flex items-center text-red-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/puppy-ate-grass-vomiting">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-green-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-green-600">Puppy Ate Grass and Now Vomiting</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Puppies with bloody diarrhea often eat grass to soothe nausea. Learn when grass-eating plus blood signals parvovirus emergency.
                    </p>
                    <div className="flex items-center text-green-600 font-semibold text-sm">
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
            <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Not Sure If Your Dog's Bloody Diarrhea Is an Emergency?</h2>
                <p className="text-xl mb-6 text-red-100">
                  Upload a photo of your dog's stool to our free AI health assistant. Get instant analysis of blood color, severity assessment, and whether you need the ER vet tonight or can monitor at home.
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Analyze Stool Symptoms for Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-red-100">
                  ✓ Photo Upload Supported ✓ 24/7 Available ✓ Instant Emergency Assessment ✓ All Dog Breeds
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
            "name": "Dog Diarrhea with Blood - Emergency Guide",
            "description": "Comprehensive guide to bloody diarrhea in dogs, including red vs black blood differentiation, severity assessment, and treatment",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Bloody Diarrhea in Dogs (Hematochezia and Melena)",
              "possibleCause": [
                "Hemorrhagic gastroenteritis",
                "Parvovirus",
                "Parasites",
                "Colitis",
                "Internal bleeding"
              ]
            }
          })
        }}
      />

      <Footer />
    </div>
  );
}
