import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, Heart, Baby, Clock, Activity, ArrowRight, CheckCircle, XCircle, Droplet } from "lucide-react";
import { Link } from "wouter";

export default function KittenNotPoopingTwoDays() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <SEOHead 
        title="Kitten Not Pooping for 2 Days - Constipation Causes & Emergency Signs | PetWellBot"
        description="Kitten hasn't pooped in 2 days? Learn causes of kitten constipation, blockage signs, stimulation techniques, and when to see emergency vet."
        keywords="kitten not pooping 2 days, kitten constipation, kitten constipated, newborn kitten not pooping, orphan kitten not defecating"
        canonicalUrl="https://petwellbot.com/kitten-not-pooping-2-days"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Cat Symptoms", href: "/symptoms" },
              { label: "Kitten Not Pooping for 2 Days" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⚠️ URGENT - 48 Hour Limit Reached
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kitten Not Pooping for 2 Days: Causes & Solutions
            </h1>
            <p className="text-xl text-orange-100 mb-6">
              Kittens should poop daily. 2 days without stool signals constipation, dehydration, blockage, or (in orphans) lack of stimulation. 
              Learn emergency signs and when to see a vet NOW.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get Urgent AI Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('age-guide')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-orange-600"
              >
                <Baby className="w-5 h-5 mr-2" />
                Age-Specific Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="py-6 bg-red-50 border-y-2 border-red-300" id="age-guide">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">🚨 Emergency Vet NOW If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Kitten vomiting or trying to vomit (blockage sign)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Swollen, hard, painful belly when touched</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Straining in litter box with crying/distress (could be urinary blockage)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Lethargy, weakness, cold to touch, won't eat</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Kitten under 4 weeks old not stimulated by mother</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>3+ days without poop despite interventions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Age-Specific Guide */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Baby className="h-6 w-6 text-orange-600" />
              Solution by Kitten Age
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-2">🍼 Orphan Kittens (0-4 Weeks) - MUST Stimulate</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Newborn kittens <strong>CANNOT poop on their own</strong>. Mother cat licks genitals to stimulate bowel movements. 
                  Orphan kittens need manual stimulation or they will become constipated/die.
                </p>
                <div className="p-3 bg-white border border-red-200 rounded mt-2">
                  <p className="font-semibold text-red-900 mb-2">How to Stimulate Kitten to Poop:</p>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal ml-4">
                    <li>Use warm, damp cloth or cotton ball</li>
                    <li>Gently wipe in circular motion on anus area (like mother's tongue)</li>
                    <li>Do this AFTER every feeding</li>
                    <li>Continue until kitten urinates and poops (may take 30-60 seconds)</li>
                    <li>Kittens should poop at least 1x daily, urinate 4-6x daily</li>
                  </ol>
                </div>
                <p className="text-xs text-red-700 mt-2"><strong>⚠️ If no poop after 2 days despite stimulation = VET NOW (blockage or megacolon)</strong></p>
              </div>

              <div className="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-2">🐾 Weaning Kittens (4-8 Weeks)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Transitioning from milk to solid food often causes constipation. Digestive system adjusting to new diet.
                </p>
                <div className="p-3 bg-white border border-yellow-200 rounded mt-2">
                  <p className="font-semibold text-yellow-900 mb-2">Solutions:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Add water to food:</strong> Make wet food soupy, helps hydration</li>
                    <li>• <strong>Wet food only:</strong> Easier to digest than dry kibble, higher moisture</li>
                    <li>• <strong>Pumpkin:</strong> 1/4 teaspoon pure pumpkin (NOT pie filling) mixed in food. High fiber.</li>
                    <li>• <strong>Kitten milk replacer:</strong> Offer alongside solid food during transition</li>
                    <li>• <strong>Warm belly massage:</strong> Gently massage belly in clockwise circles for 2-3 minutes</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">🐱 Older Kittens (2-6 Months)</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Dehydration, dietary issues, or ingested foreign object (string, toy) most common.
                </p>
                <div className="p-3 bg-white border border-blue-200 rounded mt-2">
                  <p className="font-semibold text-blue-900 mb-2">Treatment:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Increase water:</strong> Fountain, wet food, tuna water added to meals</li>
                    <li>• <strong>Pumpkin:</strong> 1/2 to 1 teaspoon in food (bulks stool, adds moisture)</li>
                    <li>• <strong>Exercise:</strong> Play session to stimulate bowel movement</li>
                    <li>• <strong>Check for foreign object:</strong> String under tongue? Chewed toy? Vet X-ray if suspected</li>
                    <li>• <strong>Laxatone/Laxaire:</strong> Kitten-safe petroleum jelly-based lubricant. Follow label dose.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Causes */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8 Causes of Kitten Constipation
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Lack of Stimulation (Orphan Kittens Under 4 Weeks)</h3>
                <p className="text-sm text-gray-700 mb-1">Mother cat licks genitals to stimulate bowel movements. Orphans need manual stimulation after every feeding.</p>
                <p className="text-xs text-red-700"><strong>Prevention:</strong> Warm damp cloth on anus in circular motion after each bottle</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Dehydration</h3>
                <p className="text-sm text-gray-700 mb-1">Most common in weaning kittens or kittens with diarrhea. Dry stool becomes impacted.</p>
                <p className="text-xs text-orange-700"><strong>Test:</strong> Pinch skin on back of neck - should snap back instantly. If stays tented 2+ seconds = dehydrated</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Diet Transition (Weaning)</h3>
                <p className="text-sm text-gray-700 mb-1">Switching from milk to solid food. Dry kibble especially constipating for young kittens.</p>
                <p className="text-xs text-yellow-700"><strong>Solution:</strong> Wet food only during weaning, add water, transition slowly over 7-10 days</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Intestinal Parasites (Roundworms, Tapeworms)</h3>
                <p className="text-sm text-gray-700 mb-1">Heavy worm burden can cause blockage. Kittens often born with roundworms from mother.</p>
                <p className="text-xs text-green-700"><strong>Signs:</strong> Pot-bellied appearance, vomiting worms, poor growth, rice-like segments in stool (tapeworms)</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Foreign Body Obstruction (String, Toy, Hairball)</h3>
                <p className="text-sm text-gray-700 mb-1">Kittens eat non-food items (pica). String/toy causes blockage. Long-haired kittens get hairballs.</p>
                <p className="text-xs text-blue-700"><strong>Emergency:</strong> Vomiting, painful belly, string under tongue (NEVER pull - causes intestinal sawing)</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Megacolon (Congenital)</h3>
                <p className="text-sm text-gray-700 mb-1">Rare. Colon loses ability to contract and push stool. Progressive condition.</p>
                <p className="text-xs text-purple-700"><strong>Signs:</strong> Chronic constipation from young age, giant hard belly, straining with no results</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Stress/Litter Box Aversion</h3>
                <p className="text-sm text-gray-700 mb-1">New environment, dirty litter box, or painful experience (diarrhea) causes kitten to avoid pooping.</p>
                <p className="text-xs text-pink-700"><strong>Fix:</strong> Multiple boxes, clean daily, unscented litter, quiet location</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#8 Pelvic Fracture/Nerve Damage</h3>
                <p className="text-sm text-gray-700 mb-1">Trauma (hit by car, fall) damages nerves controlling bowel function.</p>
                <p className="text-xs text-gray-700"><strong>Context:</strong> Recent trauma, difficulty walking, tail limpness, inability to urinate also</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Home Treatment */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-orange-600" />
              Home Treatment for Kitten Constipation
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">✓ Safe Home Remedies (Try First):</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>1. Stimulation (if under 4 weeks):</strong> Warm damp cloth on anus, circular motion, after every feeding
                  </li>
                  <li>
                    <strong>2. Pumpkin:</strong> 1/4 to 1/2 teaspoon pure pumpkin (NOT pie filling) mixed in food. Natural fiber + moisture.
                  </li>
                  <li>
                    <strong>3. Increase hydration:</strong> Wet food only, add water to food, offer tuna water/chicken broth (low sodium)
                  </li>
                  <li>
                    <strong>4. Belly massage:</strong> Gently massage belly in clockwise circles for 3-5 minutes to stimulate bowel
                  </li>
                  <li>
                    <strong>5. Warm compress:</strong> Warm (not hot) damp towel on belly for 5 minutes, then massage
                  </li>
                  <li>
                    <strong>6. Exercise:</strong> 10-15 minute play session to get things moving
                  </li>
                  <li>
                    <strong>7. Laxatone:</strong> Petroleum jelly-based hairball remedy. Follow kitten dose on label (usually 1/4 to 1/2 teaspoon)
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2">✗ DO NOT:</h3>
                <ul className="space-y-1 text-sm text-red-800">
                  <li>• Give human laxatives (Miralax, milk of magnesia) without vet approval - can cause electrolyte imbalance</li>
                  <li>• Give cow's milk (causes diarrhea in kittens)</li>
                  <li>• Use enema at home (rectal perforation risk)</li>
                  <li>• Wait longer than 3 days - impaction becomes surgical emergency</li>
                </ul>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <p className="font-medium text-blue-900 mb-1">⏰ Timeline:</p>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• If home treatment, expect poop within 12-24 hours</li>
                  <li>• If no poop by day 3 despite interventions = VET</li>
                  <li>• If kitten eating/drinking/playful = less urgent, continue monitoring</li>
                  <li>• If kitten lethargic/vomiting/painful belly = VET NOW</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vet Treatment */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What to Expect at Vet
            </h2>

            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Diagnostic Tests:</h3>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Physical exam:</strong> Palpate belly for impacted stool, check hydration</li>
                  <li>• <strong>Abdominal X-rays ($100-$200):</strong> Check for obstruction, megacolon, impacted stool</li>
                  <li>• <strong>Fecal test ($30-$50):</strong> Check for parasites</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Treatments:</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="p-2 bg-gray-50 border-l-4 border-green-500">
                    <strong>Subcutaneous fluids ($40-$80):</strong> Rehydrate kitten, softens stool
                  </li>
                  <li className="p-2 bg-gray-50 border-l-4 border-blue-500">
                    <strong>Enema ($80-$150):</strong> Warm water enema to evacuate impacted stool. Done under sedation.
                  </li>
                  <li className="p-2 bg-gray-50 border-l-4 border-purple-500">
                    <strong>Manual disimpaction ($100-$200):</strong> Vet manually removes hardened stool under sedation
                  </li>
                  <li className="p-2 bg-gray-50 border-l-4 border-yellow-500">
                    <strong>Deworming ($20-$40):</strong> Broad-spectrum dewormer if parasites present
                  </li>
                  <li className="p-2 bg-gray-50 border-l-4 border-red-500">
                    <strong>Surgery ($800-$2,000):</strong> If foreign body obstruction. Emergency procedure.
                  </li>
                </ul>
              </div>

              <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                <p className="font-medium text-purple-900 mb-1">💊 At-Home Medications After Vet:</p>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• <strong>Lactulose ($15-$30):</strong> Prescription stool softener for kittens. Sweet liquid.</li>
                  <li>• <strong>Miralax ($10-$15):</strong> Vet may approve low dose (1/8 tsp daily) for weaning kittens</li>
                  <li>• <strong>Probiotics ($15-$25):</strong> FortiFlora kitten formula to regulate digestion</li>
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
              <Link href="/cat-vomiting-undigested-food-hours-after-eating">
                <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Vomiting Undigested Food</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Regurgitation vs vomiting and megaesophagus causes
                    </p>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm">
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

              <Link href="/cat-drooling-acting-weird">
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Drooling and Acting Weird</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Toxin exposure and causes of excessive drooling
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

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
                <h2 className="text-3xl font-bold mb-4">Kitten Not Pooping? Get Help NOW</h2>
                <p className="text-xl mb-6 text-purple-100">
                  Tell our free AI veterinary assistant about your kitten's age, last bowel movement, diet, and symptoms. 
                  Get instant guidance on stimulation techniques, safe remedies, and emergency signs.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Urgent Kitten Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-purple-100">
                  ✓ Available 24/7 ✓ Instant Emergency Guidance ✓ Orphan Kitten Help ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
