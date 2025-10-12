import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { AlertTriangle, Heart, Clock, Moon, Droplets, ArrowRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function DogVomitingYellowFoamNight() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <SEOHead 
        title="Dog Vomiting Yellow Foam at Night - Bile, Causes & Solutions | PetWellBot"
        description="Dog vomiting yellow foam at night? Learn about bile vomit, empty stomach syndrome, feeding schedules, when it's dangerous, and how to stop nighttime vomiting in dogs."
        keywords="dog vomiting yellow foam, dog bile vomit, dog vomiting at night, bilious vomiting syndrome, empty stomach dog vomit, yellow foam dog"
        canonicalUrl="https://petwellbot.com/dog-vomiting-yellow-foam-night"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Dog Symptoms", href: "/symptoms" },
              { label: "Dog Vomiting Yellow Foam at Night" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⏰ MONITOR - Usually Not Emergency
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dog Vomiting Yellow Foam at Night: Bile, Causes & How to Stop It
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Yellow foam vomit at night is usually bile from an empty stomach. Learn when it's harmless "bilious vomiting syndrome" 
              vs. serious illness, plus feeding schedule fixes that work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Analyze Vomit with AI
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('quick-fix')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600"
              >
                <Moon className="w-5 h-5 mr-2" />
                Quick Fix Solutions
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
                <h2 className="text-xl font-bold text-red-600 mb-2">🚨 See a Vet Immediately If You Also See:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Blood in vomit (red, brown, or coffee-ground appearance)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Vomiting 3+ times in 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Accompanied by diarrhea, lethargy, or loss of appetite</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Distended (bloated) abdomen with retching</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Signs of pain (whining, hunched posture, won't move)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Puppy under 6 months (dehydration risk higher)</span>
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-700 bg-yellow-100 p-3 rounded-lg border border-yellow-300">
                  ⚠️ <span className="font-semibold">Bloat Warning:</span> If your dog tries to vomit but nothing comes up + has swollen belly, 
                  this is <span className="font-bold text-red-600">gastric torsion (bloat) - RUSH TO ER VET NOW!</span> This is life-threatening within hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Yellow Foam Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Droplets className="w-8 h-8 text-yellow-500" />
              What Is the Yellow Foam? (It's Bile!)
            </h2>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-4 rounded-full flex-shrink-0">
                    <Droplets className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-yellow-600">Bile: Your Dog's Digestive Fluid</h3>
                    <p className="text-gray-700 mb-4">
                      The yellow or greenish foam your dog vomits at night is <span className="font-semibold">bile</span> - a digestive fluid made by the liver, 
                      stored in the gallbladder, and released into the small intestine to break down fats.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-700 mb-2">Why It's Yellow/Green:</p>
                        <p className="text-sm text-gray-700">
                          Bile contains bilirubin (from broken-down red blood cells) which gives it that yellow-green color. 
                          The foamy texture comes from stomach acid mixing with bile and air.
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-semibold text-green-700 mb-2">Why It Comes Up:</p>
                        <p className="text-sm text-gray-700">
                          When the stomach is empty for too long (12+ hours), bile refluxes backward from the small intestine into the stomach, 
                          irritating the lining and triggering vomiting.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="font-semibold text-yellow-800 mb-2">🕐 The "Empty Stomach" Timeline:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <span className="font-bold">6pm:</span> Dog eats dinner</li>
                        <li>• <span className="font-bold">10pm-2am:</span> Stomach empties (4-8 hours)</li>
                        <li>• <span className="font-bold">3am-6am:</span> Bile refluxes into empty stomach (12-14 hours since last meal)</li>
                        <li>• <span className="font-bold">Result:</span> Dog vomits yellow foam, typically between 3-7am</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Medical Term: Bilious Vomiting Syndrome (BVS)</h3>
                <p className="text-gray-700 mb-3">
                  Also called "reflux gastritis" or "empty stomach syndrome." This is a <span className="font-semibold">benign condition</span> - 
                  not life-threatening, but uncomfortable for your dog and messy for you!
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="font-semibold text-green-700 text-sm mb-1">✓ Good News:</p>
                    <p className="text-xs text-gray-700">95% of cases resolve with simple feeding schedule changes. No medication needed.</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="font-semibold text-blue-700 text-sm mb-1">Common In:</p>
                    <p className="text-xs text-gray-700">Dogs fed once daily, senior dogs, small breeds, dogs with sensitive stomachs.</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <p className="font-semibold text-yellow-700 text-sm mb-1">⏱️ Timing Pattern:</p>
                    <p className="text-xs text-gray-700">Always early morning (3-7am) or late night. Rarely during the day if dog eats regularly.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Fix Section */}
      <section id="quick-fix" className="py-12 bg-green-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Moon className="w-8 h-8 text-green-600" />
              How to Stop Nighttime Vomiting (3 Proven Solutions)
            </h2>
            
            <div className="grid gap-6">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-2xl font-bold text-green-600">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-green-600">Late-Night Snack (Works 80% of Cases)</h3>
                      <p className="text-gray-700 mb-3">
                        <span className="font-semibold">The Fix:</span> Give a small snack 1-2 hours before bedtime (9-10pm if you sleep at 11pm).
                      </p>
                      <div className="bg-white p-4 rounded-lg mb-3">
                        <p className="font-semibold text-gray-900 mb-2">Best Snack Options (Pick One):</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span><span className="font-bold">2-3 plain crackers</span> (saltines or rice crackers) - absorbs stomach acid</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span><span className="font-bold">1 tablespoon plain white rice</span> - gentle on stomach</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span><span className="font-bold">2-3 small dog biscuits</span> (plain, no flavoring)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span><span className="font-bold">1-2 teaspoons canned pumpkin</span> (NOT pie filling) - soothes stomach lining</span>
                          </li>
                        </ul>
                      </div>
                      <p className="text-sm text-blue-600 font-semibold">
                        ✓ Success Rate: 80% see improvement within 3 nights. Keep snack small (under 10% of daily calories).
                      </p>
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
                      <h3 className="text-xl font-bold mb-2 text-blue-600">Split Meals Into Smaller, Frequent Portions</h3>
                      <p className="text-gray-700 mb-3">
                        <span className="font-semibold">The Fix:</span> Instead of 1-2 large meals, feed 3-4 smaller meals spread throughout the day.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <p className="font-semibold text-red-700 mb-2">❌ OLD Schedule (Causes Vomiting):</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• 8am: Breakfast (50% daily food)</li>
                            <li>• 6pm: Dinner (50% daily food)</li>
                            <li>• <span className="font-bold">12-hour gap = bile reflux at 3am</span></li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="font-semibold text-green-700 mb-2">✓ NEW Schedule (Prevents Vomiting):</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• 7am: Breakfast (30% daily food)</li>
                            <li>• 12pm: Lunch (20% daily food)</li>
                            <li>• 5pm: Dinner (30% daily food)</li>
                            <li>• 10pm: Small snack (20% daily food)</li>
                            <li>• <span className="font-bold">Max 9-hour gap = no bile reflux</span></li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm text-blue-600 font-semibold mt-3">
                        ✓ Success Rate: 90% if meals spaced every 4-6 hours. Best for chronic cases.
                      </p>
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
                      <h3 className="text-xl font-bold mb-2 text-purple-600">Acid-Reducing Medications (For Severe Cases)</h3>
                      <p className="text-gray-700 mb-3">
                        <span className="font-semibold">When to use:</span> If feeding schedule changes don't work after 7-10 days, ask your vet about these medications:
                      </p>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="font-semibold text-blue-700 mb-2">Famotidine (Pepcid AC) - Most Common</p>
                          <p className="text-sm text-gray-700 mb-2">
                            <span className="font-bold">Dose:</span> 0.25-0.5 mg per lb, given at bedtime (9-10pm). 
                            Example: 20 lb dog gets 5-10mg (half of 20mg tablet).
                          </p>
                          <p className="text-xs text-gray-600">
                            Reduces stomach acid production. Safe for long-term use. Available over-the-counter but consult vet for dosing.
                          </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="font-semibold text-green-700 mb-2">Omeprazole (Prilosec) - For Resistant Cases</p>
                          <p className="text-sm text-gray-700 mb-2">
                            <span className="font-bold">Dose:</span> 0.5-1 mg per lb once daily in morning. Prescription or OTC.
                          </p>
                          <p className="text-xs text-gray-600">
                            Stronger acid blocker. Takes 3-5 days to reach full effect. Used when Pepcid doesn't work.
                          </p>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                          <p className="font-semibold text-yellow-800 mb-1">⚠️ Important:</p>
                          <p className="text-sm text-gray-700">
                            Always try feeding schedule changes FIRST. Medications treat symptoms but don't fix the root cause (empty stomach). 
                            Never give human antacids like Tums (can cause electrolyte imbalance).
                          </p>
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

      {/* Other Causes Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Other Causes of Yellow Foam Vomit (When It's NOT Just Bile)</h2>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-orange-600 mb-2">Pancreatitis (Serious!)</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">What it is:</span> Inflammation of pancreas, often triggered by fatty food (leftover turkey, bacon grease).
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Key differences from BVS:</span> Dog also has diarrhea, hunched "prayer position," won't eat, vomits after eating (not just on empty stomach).
                      </p>
                      <p className="text-orange-600 text-sm font-semibold">Action: Vet visit within 24 hours. Blood test (cPL) confirms diagnosis. Needs hospitalization in severe cases.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-red-600 mb-2">Intestinal Blockage</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">What it is:</span> Foreign object (toy, sock, bone fragment) stuck in intestines.
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Key signs:</span> Repeated vomiting (every 2-4 hours), can't keep water down, painful abdomen, straining to poop.
                      </p>
                      <p className="text-red-600 text-sm font-semibold">Action: EMERGENCY. X-ray or ultrasound needed. Surgery often required. Don't wait - can cause intestinal rupture.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-yellow-600 mb-2">Liver/Gallbladder Disease</h3>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">What it is:</span> Excess bile production or gallbladder dysfunction (common in small breeds).
                      </p>
                      <p className="text-gray-700 text-sm mb-2">
                        <span className="font-semibold">Key signs:</span> Yellow gums/eyes (jaundice), dark urine, weight loss, vomiting persists despite feeding changes.
                      </p>
                      <p className="text-yellow-600 text-sm font-semibold">Action: Vet visit for blood work (liver enzymes). May need ultrasound. Treatable with medication/diet in most cases.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-blue-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-blue-600 mb-2">Inflammatory Bowel Disease (IBD)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Chronic condition. Vomiting + diarrhea for weeks/months. Needs endoscopy for diagnosis.
                    </p>
                    <p className="text-xs text-blue-600 font-semibold">Treatment: Prescription diet (hydrolyzed protein) + steroids.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-purple-600 mb-2">Kidney Disease</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Senior dogs. Uremia (waste buildup) causes nausea. Also: increased thirst, weight loss.
                    </p>
                    <p className="text-xs text-purple-600 font-semibold">Diagnosis: Blood test (BUN, creatinine). Treatable but not curable.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-green-600 mb-2">Gastritis (Stomach Inflammation)</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      From eating garbage, spoiled food, or toxins. Acute onset with multiple vomit episodes.
                    </p>
                    <p className="text-xs text-green-600 font-semibold">Treatment: Fasting 12-24 hrs, bland diet, anti-nausea meds.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-pink-400">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-pink-600 mb-2">Addison's Disease</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Rare. Adrenal gland failure. Episodic vomiting, weakness, collapse during stress.
                    </p>
                    <p className="text-xs text-pink-600 font-semibold">Diagnosis: ACTH stimulation test. Lifelong medication needed.</p>
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
              Decision Tree: Home Care vs. Vet Visit
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-2 border-green-400">
                <CardContent className="p-5">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-green-100 p-3 rounded-full mb-3">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-green-700 text-lg">Try Home Care First</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Only at night/early morning (3-7am)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>1-2 times per week max</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Dog acts normal otherwise (eats, plays, poops normally)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Only yellow/white foam, no blood</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>No weight loss or other symptoms</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-xs font-semibold text-green-800">Action: Try late-night snack for 7 days. Monitor frequency.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-yellow-400">
                <CardContent className="p-5">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-yellow-100 p-3 rounded-full mb-3">
                      <AlertCircle className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="font-bold text-yellow-700 text-lg">Vet Visit (1-3 Days)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">!</span>
                      <span>Vomiting 3-5 times per week</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">!</span>
                      <span>Vomiting at random times (not just night)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">!</span>
                      <span>Mild appetite decrease or pickiness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">!</span>
                      <span>Soft stool or occasional diarrhea</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">!</span>
                      <span>No improvement after 7 days of feeding changes</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                    <p className="text-xs font-semibold text-yellow-800">Action: Schedule vet exam. Bring feeding log + video of vomit episode.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-400">
                <CardContent className="p-5">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-red-100 p-3 rounded-full mb-3">
                      <XCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="font-bold text-red-700 text-lg">Emergency Vet NOW</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">🚨</span>
                      <span>Vomiting 3+ times in 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">🚨</span>
                      <span>Blood in vomit (red/brown)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">🚨</span>
                      <span>Can't keep water down</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">🚨</span>
                      <span>Bloated abdomen + retching</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">🚨</span>
                      <span>Lethargy, collapse, or pain</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-100 rounded-lg">
                    <p className="text-xs font-semibold text-red-800">Action: Don't wait. Call ER vet while driving. Risk: dehydration, bloat, poisoning.</p>
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
              Related Dog Digestive Symptoms
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Yellow foam vomit is one digestive symptom. Explore related stomach and intestinal issues in dogs:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/dog-ate-chocolate-3-hours-ago">
                <Card className="hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-red-500 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-red-600">Dog Ate Chocolate 3 Hours Ago</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Chocolate poisoning causes yellow foam vomiting alongside other symptoms. Learn emergency steps and when bile vomit signals toxin ingestion.
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
                      Vomiting and diarrhea together signal gastroenteritis or worse. Understand when bloody diarrhea plus yellow vomit means pancreatitis or blockage.
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold text-sm">
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
                      Nausea from bile reflux makes dogs avoid water. If your vomiting dog also refuses hydration, dehydration risk increases fast.
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
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
                      Dogs eat grass to induce vomiting when nauseated. Learn why bile reflux makes dogs seek grass and when grass-eating signals illness.
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
            <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Still Worried About Your Dog's Vomiting?</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Upload a photo of your dog's vomit or describe the pattern to our free AI veterinary assistant. 
                  Get instant analysis of whether it's harmless bile reflux or something serious.
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
                  ✓ Photo Upload Supported ✓ 24/7 Available ✓ All Dog Breeds ✓ Instant Guidance
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
            "name": "Dog Vomiting Yellow Foam at Night - Bile & Solutions",
            "description": "Complete guide to bilious vomiting syndrome in dogs, including causes, feeding solutions, and when to see a vet",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Bilious Vomiting Syndrome in Dogs",
              "signOrSymptom": [
                { "@type": "MedicalSymptom", "name": "Vomiting yellow foam" },
                { "@type": "MedicalSymptom", "name": "Bile reflux" },
                { "@type": "MedicalSymptom", "name": "Early morning vomiting" }
              ]
            }
          })
        }}
      />

      <Footer />
    </div>
  );
}
