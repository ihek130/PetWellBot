import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { AlertTriangle, Heart, Clock, Home, Activity, ArrowRight, CheckCircle, XCircle, Eye } from "lucide-react";
import { Link } from "wouter";

export default function CatHidingWontComeOut() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <SEOHead 
        title="Cat Hiding and Won't Come Out - Health vs Behavioral Causes | PetWellBot"
        description="Cat suddenly hiding and refusing to come out? Learn when hiding signals illness vs stress, signs of pain in hiding cats, and when to seek vet care."
        keywords="cat hiding won't come out, cat hiding under bed, sick cat hiding, cat hiding behavior, why is my cat hiding"
        canonicalUrl="https://petwellbot.com/cat-hiding-wont-come-out"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Cat Symptoms", href: "/symptoms" },
              { label: "Cat Hiding and Won't Come Out" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ⚠️ MONITOR - Assessment Needed
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cat Hiding and Won't Come Out: Understanding Hiding Behavior
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Sudden hiding can signal pain, illness, fear, or stress. Learn to distinguish sick hiding from behavioral hiding, 
              health warning signs, and when hiding becomes an emergency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Health Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-purple-600"
              >
                <Eye className="w-5 h-5 mr-2" />
                Health Check Guide
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
                <h2 className="text-xl font-bold text-orange-900 mb-2">⚠️ See a Vet Immediately If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Hiding + not eating for 24+ hours</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Labored breathing, panting, or mouth breathing</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Vomiting, diarrhea, or blood in urine/stool</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Hiding in unusual positions (hunched, head pressing)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Crying, growling, or hissing when approached</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Yellow eyes/gums, pale gums, or lethargy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Sick vs Stressed Assessment */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-purple-600" />
              Is My Cat Sick or Just Stressed? Quick Assessment
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  SICK HIDING (See Vet)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✗ <strong>Sudden onset:</strong> Normal yesterday, hiding today</li>
                  <li>✗ <strong>Won't eat/drink:</strong> Refuses even favorite treats</li>
                  <li>✗ <strong>Body language:</strong> Hunched, tense, eyes squinted (pain signals)</li>
                  <li>✗ <strong>Vocalizing:</strong> Crying, growling when touched</li>
                  <li>✗ <strong>Physical changes:</strong> Vomiting, diarrhea, breathing changes</li>
                  <li>✗ <strong>Elimination issues:</strong> Not using litter box, straining to urinate</li>
                  <li>✗ <strong>Duration:</strong> Hiding 24+ hours continuously</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  STRESSED HIDING (Try Home Care)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ <strong>Triggered by event:</strong> New pet, visitor, loud noise, move</li>
                  <li>✓ <strong>Still eats/drinks:</strong> Comes out at night for food when quiet</li>
                  <li>✓ <strong>Body language:</strong> Alert, ears forward, will respond to toys/treats</li>
                  <li>✓ <strong>Quiet:</strong> No vocalizing, no signs of distress</li>
                  <li>✓ <strong>Physically normal:</strong> No vomiting, normal breathing, normal gait</li>
                  <li>✓ <strong>Using litter box:</strong> Normal urination/defecation</li>
                  <li>✓ <strong>Pattern:</strong> Hiding part of day, comes out for meals/play</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-purple-900 font-medium mb-2">
                🔍 <strong>Key Test:</strong> Offer tuna juice or favorite treat near hiding spot. 
              </p>
              <p className="text-sm text-purple-800">
                <strong>Stressed cat:</strong> Will eat or come out when household is quiet. 
                <strong className="text-red-700"> Sick cat:</strong> Refuses food even when offered directly, may hiss/growl if approached.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Medical Causes */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8 Medical Reasons Cats Hide
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Pain (Any Source)</h3>
                <p className="text-sm text-gray-700">Cats hide when in pain - dental disease, arthritis, injury, UTI, pancreatitis. Look for hunched posture, reluctance to move.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Urinary Blockage (Male Cats Emergency)</h3>
                <p className="text-sm text-gray-700">Cat hides due to severe bladder pain. Straining in litter box, crying, licking genitals. LIFE-THREATENING within 48 hours.</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Upper Respiratory Infection</h3>
                <p className="text-sm text-gray-700">Cats feel vulnerable when sick. Sneezing, nasal discharge, eye discharge, fever. Hide to avoid predators (instinct).</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Kidney Disease</h3>
                <p className="text-sm text-gray-700">Nausea from toxin buildup makes cats seek quiet, dark spaces. Often in senior cats 7+ years. Weight loss, increased thirst.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Toxin Ingestion</h3>
                <p className="text-sm text-gray-700">Poisoned cats hide. Lilies, antifreeze, essential oils, human meds cause nausea, organ damage. Drooling, vomiting, seizures possible.</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Heart Disease (Cardiomyopathy)</h3>
                <p className="text-sm text-gray-700">Difficulty breathing makes cats hide. Often no symptoms until sudden crisis. Rapid breathing, open-mouth breathing, lethargy.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Hyperthyroidism</h3>
                <p className="text-sm text-gray-700">Overactive thyroid causes anxiety, restlessness. Cats hide from overstimulation. Weight loss despite increased appetite, hyperactivity.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#8 Post-Anesthesia/Surgery</h3>
                <p className="text-sm text-gray-700">Normal for 24-48 hours after vet visit. Disorientation, pain from procedure. Should eat/drink by day 2 - call vet if not.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Behavioral Causes */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5 Behavioral/Stress Reasons for Hiding
            </h2>

            <div className="space-y-4">
              <div className="p-4 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">1. New Pet or Baby in Home</h3>
                <p className="text-sm text-gray-700 mb-2">Territory invasion triggers hiding. Cat may avoid areas with new pet's scent.</p>
                <p className="text-sm font-medium text-blue-700">Solution: Slow introductions, separate spaces, pheromone diffusers (Feliway), maintain routine</p>
              </div>

              <div className="p-4 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">2. Moving to New Home</h3>
                <p className="text-sm text-gray-700 mb-2">Cats hide 1-7 days in new environment. Normal adjustment - they need time to map territory.</p>
                <p className="text-sm font-medium text-green-700">Solution: Start in one room, gradually expand access, don't force interaction, provide hiding boxes</p>
              </div>

              <div className="p-4 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">3. Loud Noises/Construction/Fireworks</h3>
                <p className="text-sm text-gray-700 mb-2">Acute stress from scary sounds. Cat emerges when noise stops.</p>
                <p className="text-sm font-medium text-yellow-700">Solution: Create "safe room" with white noise, litter box, food/water. Calming supplements (L-theanine)</p>
              </div>

              <div className="p-4 border border-orange-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">4. Punishment or Trauma</h3>
                <p className="text-sm text-gray-700 mb-2">Cats hide after being yelled at, sprayed with water, or negative vet experience.</p>
                <p className="text-sm font-medium text-orange-700">Solution: Rebuild trust with treats, play, patience. Never punish hiding - it reinforces fear</p>
              </div>

              <div className="p-4 border border-purple-200 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">5. Bully Cat in Multi-Cat Home</h3>
                <p className="text-sm text-gray-700 mb-2">Subordinate cat hides to avoid aggression from dominant cat. May only come out to eat at night.</p>
                <p className="text-sm font-medium text-purple-700">Solution: Separate resources (multiple litter boxes, feeding stations), vertical territory (cat trees), consult behaviorist</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Do */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Home className="h-6 w-6 text-purple-600" />
              How to Help a Hiding Cat
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">✓ DO These Things:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Rule out medical first:</strong> Check for eating/drinking, litter box use, vomiting, breathing changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Allow hiding spot:</strong> Don't force cat out - provide cardboard box, covered bed in quiet area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Move resources closer:</strong> Place food, water, litter box near hiding spot</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Use pheromones:</strong> Feliway diffuser reduces stress (takes 7-14 days to work)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Quiet household:</strong> Reduce noise, limit visitors, maintain routine</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">✗ DON'T Do These:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Force interaction:</strong> Dragging cat out increases stress and can cause injury if cat is sick/injured</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Ignore medical signs:</strong> If not eating 24+ hours, see vet immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Punish hiding:</strong> Never yell at or discipline hiding cat - it confirms fear</span>
                  </li>
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

              <Link href="/cat-third-eyelid-showing-suddenly">
                <Card className="border-2 border-pink-200 hover:border-pink-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Third Eyelid Showing Suddenly</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Haw syndrome and other causes of visible third eyelid
                    </p>
                    <div className="flex items-center text-pink-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/cat-breathing-mouth-open-after-playing">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Cat Breathing with Mouth Open After Playing</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Normal vs concerning open-mouth breathing patterns
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
                <h2 className="text-3xl font-bold mb-4">Concerned About Your Hiding Cat?</h2>
                <p className="text-xl mb-6 text-purple-100">
                  Tell our free AI veterinary assistant how long your cat has been hiding, other symptoms, and behavioral triggers. 
                  Get instant guidance on whether hiding signals illness or stress.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Hiding Behavior Analysis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-purple-100">
                  ✓ Available 24/7 ✓ Instant Health Assessment ✓ All Cat Breeds ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
