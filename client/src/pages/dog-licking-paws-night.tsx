import { AlertTriangle, Heart, Droplet, Clock, Activity, ArrowRight, CheckCircle, XCircle, Bug, Thermometer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";

export default function DogLickingPawsNight() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <SEOHead 
        title="Dog Keeps Licking Paws at Night: Causes of Excessive Paw Licking and Solutions | PetWellBot"
        description="Veterinary guide to nighttime paw licking in dogs. Learn why dogs lick paws excessively at night, 10 common causes (allergies, anxiety, pain), home remedies, and when to see your vet."
        keywords="dog licking paws at night, dog excessive paw licking, dog won't stop licking paws, why does my dog lick his paws constantly, dog paw licking solutions"
        canonicalUrl="https://petwellbot.com/dog-licking-paws-night"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Dog Symptoms", href: "/symptoms" },
              { label: "Dog Keeps Licking Paws at Night" }
            ]} 
          />
          <div className="max-w-4xl mx-auto text-center mt-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold flex items-center gap-2">
                ✓ CAN WAIT - Home Care Available
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dog Keeps Licking Paws at Night: Causes & Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Excessive nighttime paw licking signals allergies, anxiety, pain, or boredom. 
              Learn 10 common causes, proven home remedies, and when nighttime licking becomes a vet emergency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Get AI Paw Analysis
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('causes')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600"
              >
                <Droplet className="w-5 h-5 mr-2" />
                Find the Cause
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Warning */}
      <section className="py-6 bg-orange-50 border-y-2 border-orange-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-orange-900 mb-2">⚠️ See a Vet If:</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-800">
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Swollen, hot, or extremely red paws (possible infection)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Open wounds, bleeding, or pus discharge</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Dog can't walk or bear weight on paw(s)</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Sudden onset with severe lameness</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Hives, facial swelling, or difficulty breathing</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Licking after contact with chemicals or toxins</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pb-16 space-y-8 mt-8" id="causes">
        {/* Why Nighttime? */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              Why Dogs Lick Paws More at Night
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                If your dog obsessively licks paws specifically at night (or seems worse at night), here's why nighttime makes it more noticeable or more intense:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">1. Fewer Distractions</h3>
                  <p className="text-purple-800 text-sm">
                    During the day, your dog is busy - walks, play, food. At night, when lying still, they become hyper-focused on any itch, pain, or discomfort in their paws.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">2. Allergy Flare-Ups</h3>
                  <p className="text-blue-800 text-sm">
                    Environmental allergies often peak at night - pollen/dust mites accumulate on paws during the day, causing itching when dog settles down. Histamine levels also naturally rise in evening.
                  </p>
                </div>

                <div className="p-4 bg-teal-50 rounded-lg">
                  <h3 className="font-semibold text-teal-900 mb-2">3. Anxiety/Boredom</h3>
                  <p className="text-teal-800 text-sm">
                    Paw licking can be self-soothing for anxious dogs. If dog is understimulated during day or has separation anxiety at bedtime, licking becomes a stress-relief behavior.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">4. You Notice It More</h3>
                  <p className="text-green-800 text-sm">
                    Your dog may lick paws all day, but you only hear the slurping sounds at night when the house is quiet. The behavior isn't worse - you're just more aware of it.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-900 font-medium mb-2">💡 Key Insight:</p>
                <p className="text-blue-800 text-sm">
                  If licking happens ONLY at night with no paw redness/irritation, it's likely behavioral (anxiety, boredom, habit). If paws show physical signs (red skin, brown staining, odor), there's a medical cause.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 10 Common Causes */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Activity className="h-6 w-6 text-blue-600" />
              10 Common Causes of Excessive Paw Licking
            </h2>

            <div className="space-y-6">
              {/* Cause 1 */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #1 Environmental Allergies (Most Common - 40%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Allergens (pollen, grass, dust mites, mold) contact paws → immune system overreacts → intense itching. Paws are like "allergy sponges" picking up irritants during walks.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Signs to look for:</strong> Red/inflamed skin between toes, brown staining on paws (from saliva), seasonal pattern (spring/fall worse), face rubbing, ear infections, belly rashes
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Home remedies:</strong> Wipe paws with baby wipes or damp cloth after walks (removes allergens), antihistamines (Benadryl 1mg/lb every 8-12 hours with vet approval), omega-3 supplements reduce inflammation
                </p>
                <p className="text-gray-700">
                  <strong>Vet treatment:</strong> Apoquel (itch relief medication $80-$150/month), Cytopoint injection (lasts 4-8 weeks, $80-$150), allergy testing + immunotherapy for long-term solution
                </p>
              </div>

              {/* Cause 2 */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #2 Food Allergies (15%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> True food allergies (most common: beef, chicken, dairy, wheat) cause year-round itching, often focused on paws and ears. Not seasonal.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Signs to look for:</strong> Paw licking year-round (doesn't improve in winter), chronic ear infections, GI issues (vomiting, diarrhea), facial swelling, skin rashes
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Home remedies:</strong> Elimination diet trial - feed novel protein (duck, venison, kangaroo) or hydrolyzed protein diet for 8-12 weeks. Must be ONLY food - no treats, table scraps, or flavored meds.
                </p>
                <p className="text-gray-700">
                  <strong>Vet treatment:</strong> Prescription hypoallergenic diet (Hill's z/d, Royal Canin Hydrolyzed Protein $70-$100/month), blood/skin allergy testing (though food allergy testing is less reliable than elimination diet)
                </p>
              </div>

              {/* Cause 3 */}
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #3 Yeast Infection (10%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Moisture + warmth between toes = perfect yeast growth environment. Often secondary to allergies (scratching damages skin barrier). More common in floppy-eared breeds and dogs with skin folds.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Signs to look for:</strong> Musty/corn chip odor from paws, brown/reddish skin between toes, thick/discolored toenails, greasy skin, head shaking if ears also infected
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Home remedies:</strong> Anti-fungal paw soaks (chlorhexidine shampoo or diluted apple cider vinegar 1:1 with water) 2x daily for 5-10 minutes, dry paws thoroughly after, probiotics may help
                </p>
                <p className="text-gray-700">
                  <strong>Vet treatment:</strong> Medicated shampoo (ketoconazole, miconazole), oral anti-fungal medication for severe cases (fluconazole, itraconazole $50-$150), address underlying allergy to prevent recurrence
                </p>
              </div>

              {/* Cause 4 */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #4 Bacterial Infection (8%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Bacteria (usually Staphylococcus) overgrow when skin is damaged from licking/scratching. Can be primary or secondary to allergies, cuts, or foreign bodies.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Signs to look for:</strong> Red, swollen paws, pustules (pus-filled bumps), crusting, hair loss, painful to touch, foul odor, lameness
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Home remedies:</strong> Antibacterial paw soaks (chlorhexidine or Epsom salt solution), keep paws clean and dry, prevent licking with e-collar if needed
                </p>
                <p className="text-gray-700">
                  <strong>Vet treatment:</strong> Oral antibiotics (cephalexin, amoxicillin-clavulanate) for 3-6 weeks ($40-$100), topical antibiotic ointment, culture if resistant infection
                </p>
              </div>

              {/* Cause 5 */}
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #5 Pain or Injury (7%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Dogs lick painful areas to self-soothe. Common causes: torn nail, cut paw pad, thorn/glass embedded, arthritis in toes, sprain, cyst between toes.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Signs to look for:</strong> Licking focused on ONE paw, limping, reluctance to walk, visible wound/swelling, excessive chewing at specific spot, suddenly onset
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Home remedies:</strong> Examine paw closely for foreign objects (use flashlight), soak in warm Epsom salt if swollen, apply cold compress if injured &lt;48 hours ago
                </p>
                <p className="text-gray-700">
                  <strong>Vet treatment:</strong> X-rays if fracture suspected ($200-$400), foreign body removal, pain medication, antibiotics if infected, surgery for severe injuries/cysts
                </p>
              </div>

              {/* Cause 6 */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #6 Anxiety/Compulsive Disorder (7%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Paw licking releases endorphins → becomes self-soothing habit. Triggered by anxiety, boredom, or develops into OCD-like behavior. More common in high-energy breeds underexercised.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Signs to look for:</strong> Licking even when paws appear normal (no redness/odor), worse during stressful times (alone, thunderstorms, changes in routine), repetitive/trancelike licking, other compulsive behaviors (tail chasing, shadow chasing)
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Home remedies:</strong> Increase exercise (physical + mental), puzzle toys, training sessions before bed, calming aids (Adaptil diffuser, calming music), establish consistent bedtime routine
                </p>
                <p className="text-gray-700">
                  <strong>Vet treatment:</strong> Behavioral consultation, anti-anxiety medication (fluoxetine, clomipramine $30-$80/month), work with certified dog behaviorist ($100-$200/session)
                </p>
              </div>

              {/* Cause 7 */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #7 Dry Skin (5%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Low humidity (especially winter), over-bathing, harsh shampoos, or poor diet can cause dry, itchy paw pads. Also common in senior dogs with reduced oil production.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Signs to look for:</strong> Cracked/flaky paw pads, dandruff, dull coat, seasonal pattern (worse in winter), no redness/odor, skin feels rough
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Home remedies:</strong> Paw balm/moisturizer (coconut oil, Musher's Secret, Bag Balm), humidifier in bedroom, omega-3 fatty acid supplement, reduce bathing frequency to every 4-6 weeks
                </p>
                <p className="text-gray-700">
                  <strong>Vet treatment:</strong> Rule out hypothyroidism if severe (blood test $100-$200), prescription moisturizing shampoos, dietary change to higher-quality food
                </p>
              </div>

              {/* Cause 8 */}
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #8 Parasites - Mites, Fleas, Ticks (4%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Sarcoptic mange mites (scabies), demodex mites, fleas, or tick bites cause intense itching. Mites burrow into skin, especially in areas with less hair like paws.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Signs to look for:</strong> Severe itching (keeps dog awake), red bumps, crusting, hair loss, visible fleas/flea dirt, spreading to other areas, other pets affected
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Home remedies:</strong> Flea prevention (monthly topical or oral), thorough home cleaning (vacuum, wash bedding), check for ticks after walks
                </p>
                <p className="text-gray-700">
                  <strong>Vet treatment:</strong> Skin scraping to identify mites, prescription anti-parasitic medication (ivermectin, selamectin), flea treatment for entire household/pets
                </p>
              </div>

              {/* Cause 9 */}
              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #9 Contact Irritants (3%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Chemicals on surfaces (lawn treatments, de-icing salts, cleaning products, pesticides) burn or irritate paw pads. Hot pavement in summer can also cause damage.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Signs to look for:</strong> Sudden onset after walk, all four paws affected, redness/blistering, limping, licking immediately after being outside
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Home remedies:</strong> Rinse paws with cool water immediately, wipe paws after every walk, use dog boots in winter/summer, avoid chemically treated lawns
                </p>
                <p className="text-gray-700">
                  <strong>Vet treatment:</strong> Topical antibiotics if blistered, pain medication, protective booties during healing
                </p>
              </div>

              {/* Cause 10 */}
              <div className="border-l-4 border-gray-500 pl-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  #10 Hormonal Issues - Hypothyroidism (1%)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Why it happens:</strong> Low thyroid hormone causes skin changes → bacterial/yeast infections → itching/licking. More common in middle-aged dogs, certain breeds (Golden Retrievers, Dobermans, Cocker Spaniels).
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Signs to look for:</strong> Weight gain, lethargy, cold intolerance, hair loss (especially tail), recurrent skin/ear infections, dry coat
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Home remedies:</strong> None - requires diagnosis and medication
                </p>
                <p className="text-gray-700">
                  <strong>Vet treatment:</strong> Blood test to measure thyroid levels ($100-$200), lifelong thyroid medication (levothyroxine $15-$40/month), recheck blood work every 6-12 months
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Paw Examination Guide */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-blue-600" />
              How to Examine Your Dog's Paws at Home
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                A thorough paw exam can help you determine if this is medical or behavioral. Do this when your dog is calm:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">1. Visual Inspection</h3>
                  <ul className="space-y-1 text-blue-800 text-sm">
                    <li>✓ Check for redness between toes</li>
                    <li>✓ Look for brown staining (saliva)</li>
                    <li>✓ Examine paw pads for cuts, cracks, foreign objects</li>
                    <li>✓ Check nails for breaks, overgrowth, or infection</li>
                    <li>✓ Look for swelling, bumps, or masses</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">2. Smell Test</h3>
                  <ul className="space-y-1 text-purple-800 text-sm">
                    <li>✓ Normal: mild dog smell</li>
                    <li>✗ Yeast: musty, corn chip, bread-like odor</li>
                    <li>✗ Bacterial infection: foul, rotten smell</li>
                    <li>✗ If strong odor present → likely infection</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">3. Spread Toes</h3>
                  <ul className="space-y-1 text-green-800 text-sm">
                    <li>✓ Gently spread toes apart to see webbing</li>
                    <li>✓ Check for redness, moisture, debris</li>
                    <li>✓ Look for cysts or nodules between toes</li>
                    <li>✓ This is where yeast/bacteria commonly hide</li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">4. Touch/Pain Test</h3>
                  <ul className="space-y-1 text-orange-800 text-sm">
                    <li>✓ Gently press each paw pad</li>
                    <li>✓ Squeeze each toe individually</li>
                    <li>✓ Rotate/bend paw gently</li>
                    <li>✗ If dog pulls away, whines, or bites → pain present</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-900 mb-2">📸 Pro Tip: Take Photos!</h3>
                <p className="text-yellow-800 text-sm">
                  Photograph your dog's paws from multiple angles. This helps track changes over time and gives your vet valuable visual info at appointment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Home Remedies */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10 Proven Home Remedies to Stop Nighttime Paw Licking</h2>

            <div className="space-y-4">
              <div className="flex gap-3 items-start p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">1. Paw Wipes After Every Walk (80% success for allergies)</h3>
                  <p className="text-gray-700 text-sm">Use unscented baby wipes or paw wipes to remove pollen, dust, and allergens BEFORE they cause itching. Make this a routine.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-purple-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">2. Antihistamines - Benadryl (70% success for mild allergies)</h3>
                  <p className="text-gray-700 text-sm">Dose: 1mg per pound every 8-12 hours. Example: 25lb dog = 25mg (one adult Benadryl tablet). ALWAYS check with vet first - some formulations contain xylitol (toxic).</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">3. Omega-3 Supplements (60% improvement in 6-8 weeks)</h3>
                  <p className="text-gray-700 text-sm">Fish oil reduces skin inflammation. Dose: ~1000mg EPA+DHA per 30lbs body weight daily. Look for dog-specific fish oil or Nordic Naturals.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-teal-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">4. Apple Cider Vinegar Soak (effective for yeast)</h3>
                  <p className="text-gray-700 text-sm">Mix 1:1 ratio ACV:water, soak paws for 5 minutes, dry thoroughly. Do NOT use if skin is broken/bleeding - will sting!</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-yellow-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">5. E-Collar or Paw Boots at Night (100% prevents licking)</h3>
                  <p className="text-gray-700 text-sm">Breaks the itch-lick cycle. Use soft inflatable collar (more comfortable than cone). Give skin 7-14 days to heal without licking.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-orange-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">6. Increase Exercise (especially mental stimulation)</h3>
                  <p className="text-gray-700 text-sm">Tired dogs sleep deeper. Add 15-30 min walk before bed, puzzle toys, training sessions. Reduces anxiety-driven licking.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-pink-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">7. Bedtime Routine + Calming Aids</h3>
                  <p className="text-gray-700 text-sm">Adaptil diffuser, calming music (Through a Dog's Ear), lavender spray on bedding (dog-safe), consistent bedtime. Reduces anxiety licking.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-indigo-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">8. Bitter Spray Deterrent (Grannick's Bitter Apple)</h3>
                  <p className="text-gray-700 text-sm">Spray on paws 30 min before bed. Taste discourages licking. Works for behavioral licking but won't stop truly itchy paws.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-red-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">9. Paw Balm/Moisturizer (for dry skin)</h3>
                  <p className="text-gray-700 text-sm">Apply Musher's Secret, Bag Balm, or coconut oil before bed. Soothes dry, cracked pads. Best for winter dryness.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">10. Redirect Behavior</h3>
                  <p className="text-gray-700 text-sm">When you hear licking, interrupt with command ("leave it") + redirect to chew toy or Kong stuffed with treats. Reward not-licking.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to See Vet */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-blue-600" />
              When to See Your Vet
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded text-sm flex-shrink-0">
                  NOW
                </div>
                <div>
                  <p className="font-medium text-gray-900">Emergency Visit</p>
                  <p className="text-gray-700 text-sm">Swollen/hot paws, open wounds, can't walk, sudden severe lameness, allergic reaction signs (hives, facial swelling, breathing difficulty)</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded text-sm flex-shrink-0">
                  24-48 hrs
                </div>
                <div>
                  <p className="font-medium text-gray-900">Schedule Vet Visit Soon</p>
                  <p className="text-gray-700 text-sm">Paw infection signs (odor, pus, severe redness), licking so intense it keeps dog from sleeping, visible pain, no improvement with home remedies after 5-7 days</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-yellow-100 text-yellow-700 font-bold px-3 py-1 rounded text-sm flex-shrink-0">
                  1-2 weeks
                </div>
                <div>
                  <p className="font-medium text-gray-900">Routine Vet Appointment</p>
                  <p className="text-gray-700 text-sm">Chronic licking (happening for months), brown staining on paws, seasonal pattern (allergies), want to rule out medical causes before assuming behavioral</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Expect at Vet */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-blue-600" />
              What to Expect at the Vet Visit
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Physical Examination ($50-$100)</h3>
                <p className="text-gray-700">Thorough paw inspection, skin examination, checking for parasites, lymph node palpation</p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Diagnostic Tests</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Skin scraping:</strong> $50-$100 - checks for mites (demodex, sarcoptic mange)</li>
                  <li><strong>Cytology (tape test or swab):</strong> $50-$150 - identifies yeast or bacterial infections under microscope</li>
                  <li><strong>Fungal culture:</strong> $100-$200 - if ringworm suspected</li>
                  <li><strong>Allergy testing:</strong> $300-$600 - blood test or intradermal skin test for environmental allergies</li>
                  <li><strong>Thyroid panel:</strong> $100-$200 - if hypothyroidism suspected</li>
                  <li><strong>Food elimination trial:</strong> $0-$100/month (cost of prescription diet) - for food allergy diagnosis</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Common Treatments</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Apoquel (allergy medication):</strong> $80-$150/month - fast-acting itch relief</li>
                  <li><strong>Cytopoint injection:</strong> $80-$150 per shot (lasts 4-8 weeks) - for allergic itch</li>
                  <li><strong>Antibiotics:</strong> $40-$100 for 3-6 week course</li>
                  <li><strong>Anti-fungal medication:</strong> $50-$150 (topical or oral)</li>
                  <li><strong>Medicated shampoos:</strong> $20-$60</li>
                  <li><strong>Anti-anxiety medication:</strong> $30-$80/month if behavioral</li>
                  <li><strong>Immunotherapy (allergy shots):</strong> $600-$1,200/year after initial testing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Related Symptoms */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Dog Symptoms</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Link href="/dog-shaking-wont-eat">
                <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dog Shaking and Won't Eat</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Common causes of trembling with appetite loss
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dog-breathing-fast-sleeping">
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dog Breathing Fast While Sleeping</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Normal vs abnormal sleep breathing patterns
                    </p>
                    <div className="flex items-center text-purple-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dog-limping-front-left-leg-suddenly">
                <Card className="border-2 border-green-200 hover:border-green-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dog Limping Front Leg Suddenly</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Sudden lameness assessment and common causes
                    </p>
                    <div className="flex items-center text-green-600 font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/dog-vomiting-yellow-foam-night">
                <Card className="border-2 border-yellow-200 hover:border-yellow-400 transition-all cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dog Vomiting Yellow Foam at Night</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Nighttime bile vomiting syndrome causes and solutions
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
                <h2 className="text-3xl font-bold mb-4">Can't Stop Your Dog From Licking Their Paws?</h2>
                <p className="text-xl mb-6 text-blue-100">
                  Tell our free AI veterinary assistant about the licking pattern, paw appearance, and other symptoms. 
                  Get instant guidance on the likely cause and whether you need vet care or can try home remedies.
                </p>
                <Link href="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Free Paw Licking Analysis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-blue-100">
                  ✓ Available 24/7 ✓ Instant Cause Assessment ✓ All Dog Breeds ✓ Completely Free
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
