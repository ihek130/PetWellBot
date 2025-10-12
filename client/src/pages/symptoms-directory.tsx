import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo-head";
import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowRight, Heart, Search, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function SymptomsDirectory() {
  const [activeTab, setActiveTab] = useState<'dogs' | 'cats' | 'birds' | 'small-pets'>('dogs');
  const [searchQuery, setSearchQuery] = useState('');

  const symptoms = {
    dogs: [
      { 
        title: "Dog Vomiting Yellow Foam at Night",
        url: "/dog-vomiting-yellow-foam-night",
        description: "Causes, treatment, and when to see a vet for yellow foam vomit",
        urgency: "medium"
      },
      { 
        title: "Dog Limping on Front Left Leg Suddenly",
        url: "/dog-limping-front-left-leg-suddenly",
        description: "Sudden limping causes and emergency assessment guide",
        urgency: "medium"
      },
      { 
        title: "My Dog Won't Drink Water But Will Eat",
        url: "/dog-wont-drink-water-will-eat",
        description: "Reasons for refusing water and how to encourage drinking",
        urgency: "high"
      },
      { 
        title: "Dog Diarrhea with Blood Emergency or Not",
        url: "/dog-diarrhea-blood-emergency",
        description: "Identifying when bloody diarrhea requires immediate vet care",
        urgency: "high"
      },
      { 
        title: "Senior Dog Suddenly Weak Back Legs",
        url: "/senior-dog-weak-back-legs",
        description: "Causes of sudden hind leg weakness in older dogs",
        urgency: "high"
      },
      { 
        title: "Puppy Ate Grass and Now Vomiting",
        url: "/puppy-ate-grass-vomiting",
        description: "Why puppies eat grass and when vomiting is concerning",
        urgency: "low"
      },
      { 
        title: "Dog Shaking and Won't Eat",
        url: "/dog-shaking-wont-eat",
        description: "Common causes of trembling with loss of appetite",
        urgency: "medium"
      },
      { 
        title: "Dog Breathing Fast While Sleeping",
        url: "/dog-breathing-fast-sleeping",
        description: "Normal vs abnormal breathing patterns during sleep",
        urgency: "medium"
      },
      { 
        title: "Dog Ate Chocolate 3 Hours Ago",
        url: "/dog-ate-chocolate-3-hours-ago",
        description: "Emergency steps and signs of chocolate poisoning",
        urgency: "emergency"
      },
      { 
        title: "Dog Keeps Licking Paws at Night",
        url: "/dog-licking-paws-night",
        description: "Causes of excessive paw licking and solutions",
        urgency: "low"
      }
    ],
    cats: [
      { 
        title: "Cat Vomiting Undigested Food Hours After Eating",
        url: "/cat-vomiting-undigested-food-hours-after-eating",
        description: "Why cats regurgitate whole food and when to worry",
        urgency: "medium"
      },
      { 
        title: "Cat Not Eating or Drinking for 3 Days",
        url: "/cat-not-eating-drinking-3-days",
        description: "Serious causes of anorexia and when to seek emergency care",
        urgency: "emergency"
      },
      { 
        title: "Cat Hiding and Won't Come Out",
        url: "/cat-hiding-wont-come-out",
        description: "Understanding hiding behavior and health concerns",
        urgency: "medium"
      },
      { 
        title: "Cat Breathing with Mouth Open After Playing",
        url: "/cat-breathing-mouth-open-after-playing",
        description: "Normal vs concerning open-mouth breathing in cats",
        urgency: "high"
      },
      { 
        title: "My Cat is Drooling and Acting Weird",
        url: "/cat-drooling-acting-weird",
        description: "Causes of excessive drooling and behavioral changes",
        urgency: "high"
      },
      { 
        title: "Cat Third Eyelid Showing Suddenly",
        url: "/cat-third-eyelid-showing-suddenly",
        description: "Haw syndrome and other causes of visible third eyelid",
        urgency: "medium"
      },
      { 
        title: "Kitten Not Pooping for 2 Days",
        url: "/kitten-not-pooping-2-days",
        description: "Constipation in kittens and when to intervene",
        urgency: "high"
      },
      { 
        title: "Cat Meowing at Night After Moving",
        url: "/cat-meowing-night-after-moving",
        description: "Stress-related vocalization and adjustment tips",
        urgency: "low"
      },
      { 
        title: "Indoor Cat Trying to Escape Suddenly",
        url: "/indoor-cat-trying-escape-suddenly",
        description: "Reasons for escape behavior and safety solutions",
        urgency: "low"
      },
      { 
        title: "Cat Urinating Outside Litter Box Suddenly",
        url: "/cat-urinating-outside-litter-box-suddenly",
        description: "Medical and behavioral causes of inappropriate urination",
        urgency: "medium"
      }
    ],
    birds: [
      { 
        title: "Parrot Plucking Feathers Out",
        url: "/parrot-plucking-feathers-out",
        description: "Feather destructive behavior causes and solutions",
        urgency: "medium"
      },
      { 
        title: "Budgie Sitting at Bottom of Cage",
        url: "/budgie-sitting-bottom-cage",
        description: "Signs of serious illness in budgerigars",
        urgency: "high"
      },
      { 
        title: "Bird Breathing Heavy After Flying",
        url: "/bird-breathing-heavy-after-flying",
        description: "Normal vs abnormal respiratory patterns in birds",
        urgency: "medium"
      }
    ],
    'small-pets': [
      { 
        title: "Hamster Not Eating or Drinking",
        url: "/hamster-not-eating-drinking",
        description: "Critical signs in hamsters requiring immediate care",
        urgency: "emergency"
      },
      { 
        title: "Guinea Pig Wheeking Constantly",
        url: "/guinea-pig-wheeking-constantly",
        description: "Understanding guinea pig vocalizations and needs",
        urgency: "low"
      },
      { 
        title: "Rabbit Not Pooping for 12 Hours",
        url: "/rabbit-not-pooping-12-hours",
        description: "GI stasis emergency recognition and first aid",
        urgency: "emergency"
      },
      { 
        title: "Ferret Hair Loss Suddenly",
        url: "/ferret-hair-loss-suddenly",
        description: "Adrenal disease and other causes of alopecia",
        urgency: "medium"
      },
      { 
        title: "Chinchilla Fur Slipping Off",
        url: "/chinchilla-fur-slipping",
        description: "Fur slip stress response and prevention",
        urgency: "low"
      },
      { 
        title: "Goldfish Swimming Upside Down",
        url: "/goldfish-swimming-upside-down",
        description: "Swim bladder disease causes and treatment",
        urgency: "medium"
      },
      { 
        title: "Betta Fish Not Eating for 3 Days",
        url: "/betta-fish-not-eating-3-days",
        description: "Common causes of appetite loss in bettas",
        urgency: "high"
      }
    ]
  };

  const getUrgencyBadge = (urgency: string) => {
    switch(urgency) {
      case 'emergency':
        return <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">🚨 Emergency</span>;
      case 'high':
        return <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">⚠️ Urgent</span>;
      case 'medium':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">⏰ Monitor</span>;
      default:
        return <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">✓ Can Wait</span>;
    }
  };

  const filteredSymptoms = symptoms[activeTab].filter(symptom =>
    symptom.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    symptom.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <SEOHead 
        title="Pet Symptoms Directory A-Z | All Pet Health Issues | PetWellBot"
        description="Complete directory of 30+ pet symptoms and health issues. Find instant AI analysis for dogs, cats, birds, and small pets. Emergency guidance available 24/7."
        keywords="pet symptoms, dog symptoms, cat symptoms, bird health issues, small pet problems, pet health directory, symptom checker, pet emergency signs"
        canonicalUrl="https://petwellbot.com/symptoms"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Pet Symptoms Directory" }]} />
          <div className="max-w-4xl mx-auto text-center mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pet Symptoms Directory: Find Answers to Your Pet's Health Issues
            </h1>
            <p className="text-xl mb-8 text-emerald-100">
              Browse 30+ common pet symptoms with instant AI analysis. From emergency signs to mild concerns - 
              get expert guidance for dogs, cats, birds, and small pets.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search symptoms... (e.g., 'vomiting', 'not eating', 'limping')"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-emerald-300 text-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Free AI Symptom Checker
                </Button>
              </Link>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('emergency-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-emerald-600 shadow-lg"
              >
                <AlertTriangle className="w-5 h-5 mr-2" />
                Emergency Guidance
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white shadow-md sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => setActiveTab('dogs')}
              className={`${
                activeTab === 'dogs'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-6 py-3 rounded-lg font-semibold transition-all`}
            >
              🐕 Dogs ({symptoms.dogs.length})
            </Button>
            <Button
              onClick={() => setActiveTab('cats')}
              className={`${
                activeTab === 'cats'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-6 py-3 rounded-lg font-semibold transition-all`}
            >
              🐱 Cats ({symptoms.cats.length})
            </Button>
            <Button
              onClick={() => setActiveTab('birds')}
              className={`${
                activeTab === 'birds'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-6 py-3 rounded-lg font-semibold transition-all`}
            >
              🦜 Birds ({symptoms.birds.length})
            </Button>
            <Button
              onClick={() => setActiveTab('small-pets')}
              className={`${
                activeTab === 'small-pets'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } px-6 py-3 rounded-lg font-semibold transition-all`}
            >
              🐹 Small Pets ({symptoms['small-pets'].length})
            </Button>
          </div>
        </div>
      </section>

      {/* Symptoms Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-bold text-emerald-600">{filteredSymptoms.length}</span> symptoms
                {searchQuery && <span> matching "{searchQuery}"</span>}
              </p>
            </div>

            {/* Symptoms Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSymptoms.map((symptom, index) => (
                <Link key={index} to={symptom.url}>
                  <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-l-emerald-500 h-full">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-900 flex-1 pr-2">
                          {symptom.title}
                        </h3>
                      </div>
                      
                      <div className="mb-4">
                        {getUrgencyBadge(symptom.urgency)}
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {symptom.description}
                      </p>

                      <div className="flex items-center text-emerald-600 font-semibold text-sm hover:text-emerald-700">
                        Get Instant Analysis
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* No Results */}
            {filteredSymptoms.length === 0 && (
              <Card className="mt-8 border-yellow-200">
                <CardContent className="p-12 text-center">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No symptoms found</h3>
                  <p className="text-gray-600 mb-6">
                    Try a different search term or browse by pet type above.
                  </p>
                  <Button onClick={() => setSearchQuery('')} className="bg-emerald-600 text-white hover:bg-emerald-700">
                    Clear Search
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section id="emergency-section" className="py-12 bg-red-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-red-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-red-600 mb-4">When to Seek Emergency Veterinary Care</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3 text-red-500">Life-Threatening Emergencies:</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Difficulty breathing or gasping for air</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Unconsciousness or severe weakness</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Severe bleeding or trauma</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Seizures lasting more than 5 minutes</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Known poisoning or toxin ingestion</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3 text-orange-500">Urgent Care Needed (Within Hours):</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Vomiting or diarrhea with blood</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Not eating or drinking for 24+ hours</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Sudden behavior changes with pain signs</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Straining to urinate or defecate</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                            <span>Eye injuries or sudden vision loss</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800 font-medium">
                        ⚠️ Trust your instincts: If something feels wrong with your pet, it's always better to call your vet. 
                        This directory provides guidance but is not a substitute for professional veterinary care.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Can't Find Your Pet's Symptom?</h2>
                <p className="text-xl mb-6 text-emerald-100">
                  Use our free AI-powered symptom checker to describe what you're seeing. 
                  Get instant analysis and personalized guidance for any pet health concern.
                </p>
                <Link to="/">
                  <Button 
                    size="lg" 
                    className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold px-8 py-4"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Start Free Symptom Check Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <p className="text-sm mt-4 text-emerald-100">
                  ✓ 24/7 Available ✓ All Pet Types ✓ Instant Results ✓ Completely Free
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
            "name": "Pet Symptoms Directory",
            "description": "Complete directory of pet symptoms and health issues for dogs, cats, birds, and small pets",
            "medicalAudience": "Patient",
            "about": {
              "@type": "MedicalCondition",
              "name": "Pet Health Symptoms and Conditions"
            }
          })
        }}
      />
    </div>
  );
}
