import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { AlertTriangle, Heart, Feather, Clock, Activity, ArrowRight, CheckCircle, XCircle, Brain } from "lucide-react";
import { Link } from "wouter";

export default function ParrotPluckingFeathersOut() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <SEOHead 
        title="Parrot Plucking Feathers Out - Causes & Solutions for Feather Destructive Behavior | PetWellBot"
        description="Parrot plucking feathers? Learn medical causes (PBFD, parasites, allergies), behavioral triggers (boredom, stress, anxiety), and proven solutions to stop feather plucking."
        keywords="parrot plucking feathers, bird feather plucking, parrot self-mutilation, feather destructive behavior, parrot boredom, PBFD parrots"
        canonicalUrl="https://petwellbot.com/parrot-plucking-feathers-out"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Bird Symptoms", href: "/symptoms" },
              { label: "Parrot Plucking Feathers Out" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                👁️ MONITOR - Behavioral/Medical Assessment
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Parrot Plucking Feathers Out: Medical vs Behavioral Causes
            </h1>
            <p className="text-xl text-sky-100 mb-6">
              Feather destructive behavior signals medical issues (PBFD, parasites, allergies, infection) or psychological stress (boredom, anxiety, lack of enrichment). 
              Learn the difference and proven solutions to stop feather plucking.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Feather Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('medical-vs-behavioral')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-sky-600"
              >
                <Feather className="w-5 h-5 mr-2" />
                Medical vs Behavioral Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-6 bg-orange-50 border-y-2 border-orange-300" id="medical-vs-behavioral">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">⚠️ See Avian Vet If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Bald patches, bleeding, or self-mutilation (breaking skin)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Sudden onset plucking in previously healthy bird</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Plucking + lethargy, fluffed feathers, or appetite loss</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Red, inflamed, or scaly skin visible under feathers</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Young bird (under 1 year) with feather abnormalities (PBFD risk)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Plucking specific areas only (chest, under wings = potential medical)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8">
        {/* Medical vs Behavioral */}
        <Card className="border-sky-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-sky-600" />
              Medical vs Behavioral Feather Plucking: How to Tell
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  MEDICAL (Vet Required)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✗ <strong>Pattern:</strong> Sudden onset, specific body areas (chest, under wings, vent)</li>
                  <li>✗ <strong>Skin condition:</strong> Red, inflamed, scaly, or crusty skin visible</li>
                  <li>✗ <strong>Feather quality:</strong> Abnormal feather growth, stress bars, discoloration</li>
                  <li>✗ <strong>Other symptoms:</strong> Lethargy, fluffed up, appetite loss, diarrhea</li>
                  <li>✗ <strong>Night plucking:</strong> Bird plucks even when covered/sleeping (pain-related)</li>
                  <li>✗ <strong>Age:</strong> Young birds (&lt;1 year) or senior birds with sudden changes</li>
                  <li>✗ <strong>Response:</strong> No improvement with enrichment/environmental changes</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  BEHAVIORAL (Enrichment/Training)
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ <strong>Pattern:</strong> Gradual onset, plucks when bored/stressed, whole body affected</li>
                  <li>✓ <strong>Skin condition:</strong> Normal healthy skin underneath (no redness/scaling)</li>
                  <li>✓ <strong>Feather quality:</strong> Normal new feather growth (bird just removes them)</li>
                  <li>✓ <strong>Other symptoms:</strong> Otherwise healthy, eating well, active</li>
                  <li>✓ <strong>Triggers:</strong> Started after owner schedule change, move, cage change, loss of companion</li>
                  <li>✓ <strong>Context:</strong> Plucks when alone/bored, stops when owner interacts</li>
                  <li>✓ <strong>Response:</strong> Improves with more toys, foraging, attention</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
              <p className="text-yellow-900 font-medium">
                🩺 <strong>RULE OUT MEDICAL FIRST:</strong> 70% of feather plucking cases have underlying medical component. 
                Always see avian vet BEFORE assuming behavioral. Full workup: $200-$500 (exam, blood work, skin scraping, feather analysis).
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Medical Causes */}
        <Card className="border-sky-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10 Medical Causes of Feather Plucking
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 PBFD (Psittacine Beak and Feather Disease)</h3>
                <p className="text-sm text-gray-700 mb-1">Viral disease causing abnormal feather growth, beak deformities, immune suppression. Most common in cockatoos, African greys, lovebirds. Young birds &lt;3 years most susceptible.</p>
                <p className="text-xs text-red-700"><strong>Signs:</strong> Feathers don't grow back, deformed beaks, chronic infections, eventually fatal. DNA test $75-$150.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 External Parasites (Mites, Lice)</h3>
                <p className="text-sm text-gray-700 mb-1">Scaly face mites (budgies), feather mites cause intense itching. Bird plucks to relieve irritation.</p>
                <p className="text-xs text-orange-700"><strong>Diagnosis:</strong> Skin scraping under microscope. Treatment: Ivermectin drops $30-$60. Resolves in 2-4 weeks.</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Giardia (Intestinal Parasite)</h3>
                <p className="text-sm text-gray-700 mb-1">Common in cockatiels, budgies. Causes itchy skin, feather plucking (especially chest/abdomen), diarrhea, weight loss.</p>
                <p className="text-xs text-yellow-700"><strong>Diagnosis:</strong> Fecal test $40-$80. Treatment: Metronidazole 7-10 days. 90% success rate.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Allergies (Food, Environmental)</h3>
                <p className="text-sm text-gray-700 mb-1">Allergic to pelleted food ingredients, dusty environments, cleaning products, air fresheners. Causes itchy skin.</p>
                <p className="text-xs text-green-700"><strong>Solution:</strong> Elimination diet (switch pellet brands), HEPA air filter, fragrance-free cleaning. Improvement in 2-4 weeks.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Bacterial/Fungal Skin Infection</h3>
                <p className="text-sm text-gray-700 mb-1">Staphylococcus, Aspergillus cause red, inflamed skin. Bird plucks irritated areas. Often secondary to poor hygiene/humidity.</p>
                <p className="text-xs text-blue-700"><strong>Treatment:</strong> Antibiotics (oral/topical) $50-$150. Address humidity (40-60% ideal for most parrots).</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Nutritional Deficiencies (Vitamin A, Calcium, Amino Acids)</h3>
                <p className="text-sm text-gray-700 mb-1">All-seed diet lacks vitamins. Poor feather quality, dry skin, plucking to remove damaged feathers.</p>
                <p className="text-xs text-purple-700"><strong>Fix:</strong> Convert to pellets (Harrison's, Roudybush, TOP). Add dark leafy greens, carrots, sweet potato. Supplement vitamin A if severe.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Heavy Metal Toxicity (Zinc, Lead)</h3>
                <p className="text-sm text-gray-700 mb-1">Zinc from galvanized cages, lead from old paint. Causes neurological issues + feather plucking. More common than realized.</p>
                <p className="text-xs text-pink-700"><strong>Diagnosis:</strong> Blood test (zinc/lead levels) $100-$200. Treatment: Chelation therapy $300-$800. Replace cage.</p>
              </div>

              <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50">
                <h3 className="font-bold text-gray-900">#8 Hormonal Issues (Breeding Season Frustration)</h3>
                <p className="text-sm text-gray-700 mb-1">Sexually mature bird without mate. Excess hormones cause plucking, screaming, aggression. Seasonal (spring).</p>
                <p className="text-xs text-indigo-700"><strong>Management:</strong> Reduce daylight to 10-12 hours, remove mirrors/perceived mates, avoid petting back/under wings. Lupron injections $100-$200 for severe cases.</p>
              </div>

              <div className="p-3 border-l-4 border-teal-500 bg-teal-50">
                <h3 className="font-bold text-gray-900">#9 Internal Organ Disease (Liver, Kidney)</h3>
                <p className="text-sm text-gray-700 mb-1">Liver disease from high-fat diet (seeds, nuts). Causes poor feather quality, plucking. Chronic kidney disease in older birds.</p>
                <p className="text-xs text-teal-700"><strong>Diagnosis:</strong> Blood work (liver enzymes, kidney values). Treatment: Diet change, milk thistle supplements, medications.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#10 Pain (Arthritis, Bumblefoot, Injury)</h3>
                <p className="text-sm text-gray-700 mb-1">Bird plucks area near pain source. Check feet for bumblefoot (infected pressure sores), wings for old injuries.</p>
                <p className="text-xs text-gray-700"><strong>Treatment:</strong> Pain meds (meloxicam $30-$60), perch variety (different diameters/textures), address underlying injury.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Behavioral Causes */}
        <Card className="border-sky-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8 Behavioral Causes & Solutions
            </h2>

            <div className="space-y-3">
              <div className="p-3 border-l-4 border-red-500 bg-red-50">
                <h3 className="font-bold text-gray-900">#1 Boredom (MOST COMMON)</h3>
                <p className="text-sm text-gray-700 mb-1">Intelligent parrots (African greys, cockatoos, amazons, macaws) need LOTS of mental stimulation. Plucking becomes self-soothing behavior.</p>
                <p className="text-xs text-red-700"><strong>FIX:</strong> Foraging toys (hide food in paper, cardboard, puzzle feeders), rotate toys weekly, training sessions 2x daily, out-of-cage time 4+ hours.</p>
              </div>

              <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                <h3 className="font-bold text-gray-900">#2 Lack of Social Interaction</h3>
                <p className="text-sm text-gray-700 mb-1">Parrots are flock animals. Solitary confinement = severe stress. Single bird needs human flock substitute.</p>
                <p className="text-xs text-orange-700"><strong>FIX:</strong> Minimum 2-3 hours direct interaction daily. Place cage in family area (NOT isolated room). Consider second bird (proper introduction over weeks).</p>
              </div>

              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <h3 className="font-bold text-gray-900">#3 Environmental Stress (Schedule Changes, Moving)</h3>
                <p className="text-sm text-gray-700 mb-1">Parrots thrive on routine. Owner schedule change (new job, school), moving homes, new pets = anxiety triggers.</p>
                <p className="text-xs text-yellow-700"><strong>FIX:</strong> Maintain consistent wake/sleep/feeding schedule. Gradual transitions (introduce changes slowly over weeks). Calming music when alone.</p>
              </div>

              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <h3 className="font-bold text-gray-900">#4 Attention-Seeking Behavior</h3>
                <p className="text-sm text-gray-700 mb-1">Bird learns plucking = owner runs over and gives attention (even negative attention reinforces behavior).</p>
                <p className="text-xs text-green-700"><strong>FIX:</strong> IGNORE plucking behavior completely. Give attention when bird plays with toys, forages, stays calm. Reward good behavior only.</p>
              </div>

              <div className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h3 className="font-bold text-gray-900">#5 Cage Too Small</h3>
                <p className="text-sm text-gray-700 mb-1">Bird can't exercise, fly, climb. Frustration leads to plucking. Minimum cage: wingspan x 1.5 width, twice bird height.</p>
                <p className="text-xs text-blue-700"><strong>Solution:</strong> Upgrade cage size. Large parrots need 3x3x4 feet MINIMUM. Flight cage better. Daily out-of-cage exercise crucial.</p>
              </div>

              <div className="p-3 border-l-4 border-purple-500 bg-purple-50">
                <h3 className="font-bold text-gray-900">#6 Sleep Deprivation</h3>
                <p className="text-sm text-gray-700 mb-1">Parrots need 10-12 hours dark, quiet sleep. TV noise, lights on late = chronic stress, plucking.</p>
                <p className="text-xs text-purple-700"><strong>FIX:</strong> Cover cage 7 PM - 7 AM in quiet room. Use blackout cage cover. White noise machine masks household sounds.</p>
              </div>

              <div className="p-3 border-l-4 border-pink-500 bg-pink-50">
                <h3 className="font-bold text-gray-900">#7 Loss of Companion (Bird or Human)</h3>
                <p className="text-sm text-gray-700 mb-1">Bonded bird dies, owner moves away, divorce = depression in parrots. Grief-related plucking.</p>
                <p className="text-xs text-pink-700"><strong>Help:</strong> Extra attention, new foraging activities, consider new companion after 4-8 week grieving period. Avian behavioral vet consult $150-$300.</p>
              </div>

              <div className="p-3 border-l-4 border-gray-500 bg-gray-50">
                <h3 className="font-bold text-gray-900">#8 Improper Bathing/Dry Skin</h3>
                <p className="text-sm text-gray-700 mb-1">Lack of bathing = dry, itchy skin. Parrots need regular showers/baths to maintain feather/skin health.</p>
                <p className="text-xs text-gray-700"><strong>FIX:</strong> Daily misting with spray bottle, shower perch 2-3x weekly, shallow bath dish. Humidity 40-60%.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Solutions Protocol */}
        <Card className="border-sky-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-sky-600" />
              Complete Solution Protocol to Stop Feather Plucking
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                <h3 className="font-bold text-red-900 mb-2">Step 1: Avian Vet Exam (MANDATORY FIRST STEP)</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Physical exam:</strong> Check skin, feather quality, beak, nails</li>
                  <li>• <strong>Blood work:</strong> $150-$250 (CBC, chemistry, PBFD test, heavy metals)</li>
                  <li>• <strong>Skin scraping:</strong> $40-$80 (check for mites, fungal infection)</li>
                  <li>• <strong>Fecal test:</strong> $40-$80 (Giardia, parasites)</li>
                  <li>• <strong>DO NOT skip:</strong> 70% of cases have medical component</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Step 2: Environmental Enrichment Overhaul</h3>
                
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="p-3 bg-gray-50 border-l-4 border-green-500">
                    <h4 className="font-medium text-gray-900 mb-1">✓ Foraging (MOST IMPORTANT)</h4>
                    <p className="text-xs">Wild parrots spend 60-80% of day foraging. Captive birds need same mental challenge. Hide food in: paper bags, cardboard rolls, puzzle feeders ($15-$50), wrapped in paper, under shredded paper. Make bird WORK for every meal.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-blue-500">
                    <h4 className="font-medium text-gray-900 mb-1">✓ Toy Rotation</h4>
                    <p className="text-xs">Have 15-20 toys total, only 4-6 in cage at once. Rotate every 3-4 days. Variety: wood chewing, rope/leather, acrylic, foraging, shredding. Budget: $100-$200 initial investment.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-yellow-500">
                    <h4 className="font-medium text-gray-900 mb-1">✓ Out-of-Cage Time</h4>
                    <p className="text-xs">Minimum 4 hours daily outside cage. Play gym, training sessions, shower time, supervised exploration. Exercise prevents boredom.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-purple-500">
                    <h4 className="font-medium text-gray-900 mb-1">✓ Training Sessions</h4>
                    <p className="text-xs">2-3 sessions daily, 10-15 minutes each. Teach tricks (wave, turn around, target training), recall, harness training. Mental stimulation + bonding.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-pink-500">
                    <h4 className="font-medium text-gray-900 mb-1">✓ Sleep Schedule</h4>
                    <p className="text-xs">10-12 hours dark, quiet sleep. Cover cage in quiet room or use sleep cage. Consistent bedtime/wake time. Sleep deprivation = major plucking trigger.</p>
                  </div>

                  <div className="p-3 bg-gray-50 border-l-4 border-orange-500">
                    <h4 className="font-medium text-gray-900 mb-1">✓ Diet Upgrade</h4>
                    <p className="text-xs">70% high-quality pellets (Harrison's, Roudybush, TOP), 20% fresh vegetables (dark leafy greens, carrots, peppers), 10% treats (nuts, fruit). NO all-seed diet. Add red palm oil for feather health (1/4 tsp daily).</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Step 3: Behavioral Modification</h3>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• <strong>Ignore plucking:</strong> No eye contact, talking, or reaction when bird plucks</li>
                  <li>• <strong>Reward good behavior:</strong> Praise/treats when playing with toys, foraging, preening normally</li>
                  <li>• <strong>Distraction:</strong> If bird starts plucking, offer favorite toy or training session</li>
                  <li>• <strong>Protective collar:</strong> Last resort only (E-collar $20-$40). Can increase stress. Vet supervised only.</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
                <h3 className="font-medium text-yellow-900 mb-2">💊 Medications (Vet Prescribed, After Other Methods Fail):</h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• <strong>Haloperidol:</strong> $30-$60/month. Anti-anxiety for severe cases. Takes 4-6 weeks. Side effects possible.</li>
                  <li>• <strong>Clomipramine:</strong> $40-$80/month. Anti-depressant for compulsive plucking. 8-12 week trial.</li>
                  <li>• <strong>Gabapentin:</strong> $25-$50/month. For anxiety/pain-related plucking.</li>
                  <li>• <strong>NOT first-line:</strong> Always try environmental/behavioral changes first. Meds = supplement not substitute.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Timeline */}
        <Card className="border-sky-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-sky-600" />
              Expected Recovery Timeline
            </h2>

            <div className="space-y-3">
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900">Week 1-2: Assessment & Setup</h3>
                <p className="text-sm text-gray-700">Vet exam completed, medical treatment started if needed, environmental changes implemented (new toys, foraging, schedule)</p>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-green-900">Week 3-6: Initial Improvement</h3>
                <p className="text-sm text-gray-700">If medical cause, significant improvement. If behavioral, bird may still pluck but less frequently. New feather growth starting (pin feathers).</p>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="font-bold text-yellow-900">Month 2-4: Major Progress</h3>
                <p className="text-sm text-gray-700">50-70% reduction in plucking. Feathers growing back in previously bald areas. Bird more engaged with toys/foraging.</p>
              </div>

              <div className="p-4 bg-purple-50 border-l-4 border-purple-500">
                <h3 className="font-bold text-purple-900">Month 6-12: Full Recovery (or Management)</h3>
                <p className="text-sm text-gray-700">Best case: Bird fully feathered, no plucking. Realistic: 80-90% improvement, occasional plucking during stress. Chronic pluckers may never fully stop but significantly reduced.</p>
              </div>

              <div className="p-3 bg-orange-50 border border-orange-200 rounded mt-4">
                <p className="text-sm text-orange-800">
                  <strong>Reality Check:</strong> Feather plucking is often MANAGEABLE not curable, especially long-term chronic pluckers (5+ years). 
                  Goal = reduce plucking 70-90%, prevent self-mutilation, improve quality of life. Patience required - takes months not weeks.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Bird Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/budgie-sitting-bottom-cage">
                <Card className="border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Budgie Sitting at Bottom of Cage</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Signs of serious illness in budgerigars
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/bird-breathing-heavy-after-flying">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Bird Breathing Heavy After Flying</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Normal vs abnormal respiratory patterns in birds
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
                <Button className="bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:from-sky-700 hover:to-blue-700">
                  View All Bird Symptoms →
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
            <Card className="bg-gradient-to-r from-sky-600 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Parrot Plucking Feathers? Get Expert Help</h2>
                <p className="text-xl mb-6 text-sky-100">
                  Tell our free AI veterinary assistant about the plucking pattern, your bird's species, diet, cage setup, and behavior. 
                  Get instant guidance on medical vs behavioral causes and proven solutions.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-sky-600 hover:bg-sky-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Feather Plucking Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-sky-100">
                  ✓ Available 24/7 ✓ Medical vs Behavioral Analysis ✓ All Parrot Species ✓ Completely Free
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
