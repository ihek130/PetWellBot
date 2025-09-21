import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Baby, Heart, Brain, Bone, Shield, Clock } from "lucide-react";
import { useState } from "react";

interface LifeStage {
  stage: "puppy" | "kitten" | "adult" | "senior";
  ageRange: string;
  title: string;
  description: string;
  healthPriorities: string[];
  nutritionNeeds: string[];
  exerciseGuidelines: string[];
  vetSchedule: string[];
  commonConcerns: string[];
  redFlags: string[];
}

interface AgeSpecificCareProps {
  species?: "dog" | "cat" | "both";
  selectedAge?: "puppy" | "kitten" | "adult" | "senior";
}

export function AgeSpecificCare({ species = "both", selectedAge }: AgeSpecificCareProps) {
  const [activeStage, setActiveStage] = useState<string>(selectedAge || "adult");

  const dogStages: LifeStage[] = [
    {
      stage: "puppy",
      ageRange: "0-12 months",
      title: "Puppy Care (0-12 months)",
      description: "Critical development period requiring frequent vet visits, proper nutrition, and socialization.",
      healthPriorities: [
        "Core vaccinations (DHPP, Rabies)",
        "Deworming every 2-3 weeks",
        "Flea and tick prevention",
        "Spay/neuter discussion",
        "Microchipping",
        "Dental care foundation",
        "Growth monitoring"
      ],
      nutritionNeeds: [
        "High-quality puppy formula food",
        "3-4 meals daily until 6 months",
        "Age-appropriate portions",
        "Limited treats (10% of calories)",
        "Fresh water always available",
        "Avoid adult dog food",
        "Monitor growth rate"
      ],
      exerciseGuidelines: [
        "5 minutes per month of age, twice daily",
        "Gentle play sessions",
        "Avoid forced exercise",
        "Socialization walks",
        "Mental stimulation games",
        "No jumping until growth plates close",
        "Short, frequent activities"
      ],
      vetSchedule: [
        "First visit at 6-8 weeks",
        "Vaccines every 3-4 weeks until 16 weeks",
        "Monthly weight checks",
        "Spay/neuter at 6+ months",
        "Annual exam after first year",
        "Dental check by 6 months",
        "Parasite screening monthly"
      ],
      commonConcerns: [
        "House training accidents",
        "Teething and chewing",
        "Separation anxiety",
        "Inappropriate play biting",
        "Sleep schedule irregularities",
        "Growth spurts affecting appetite",
        "Socialization challenges"
      ],
      redFlags: [
        "Vomiting or diarrhea lasting >24 hours",
        "Lethargy or lack of appetite",
        "Difficulty breathing",
        "Pale gums or tongue",
        "Unable to urinate or defecate",
        "Excessive crying or whimpering",
        "Bloated or hard abdomen"
      ]
    },
    {
      stage: "adult",
      ageRange: "1-7 years",
      title: "Adult Dog Care (1-7 years)",
      description: "Prime health years focusing on maintenance, prevention, and lifestyle management.",
      healthPriorities: [
        "Annual comprehensive exams",
        "Dental cleanings as needed",
        "Parasite prevention year-round",
        "Weight management",
        "Exercise routine maintenance",
        "Vaccination boosters",
        "Preventive blood work"
      ],
      nutritionNeeds: [
        "High-quality adult dog food",
        "2 meals daily recommended",
        "Portion control for weight",
        "Treats limited to 10%",
        "Fresh water daily",
        "Avoid table scraps",
        "Adjust for activity level"
      ],
      exerciseGuidelines: [
        "30+ minutes daily minimum",
        "Mix of cardio and strength",
        "Mental stimulation activities",
        "Consistent daily routine",
        "Adjust for breed needs",
        "Include social play",
        "Monitor for overexertion"
      ],
      vetSchedule: [
        "Annual wellness exam",
        "Dental checkup annually",
        "Blood work every 1-2 years",
        "Vaccine boosters as due",
        "Parasite testing annually",
        "Weight monitoring",
        "Dental cleaning as recommended"
      ],
      commonConcerns: [
        "Weight gain tendencies",
        "Dental plaque buildup",
        "Joint wear from activity",
        "Behavioral changes",
        "Seasonal allergies",
        "Stress from life changes",
        "Minor injuries from play"
      ],
      redFlags: [
        "Sudden behavior changes",
        "Loss of appetite >2 days",
        "Persistent vomiting/diarrhea",
        "Difficulty breathing",
        "Lameness or limping",
        "Excessive drinking/urination",
        "Seizures or collapse"
      ]
    },
    {
      stage: "senior",
      ageRange: "7+ years",
      title: "Senior Dog Care (7+ years)",
      description: "Enhanced monitoring and comfort care for age-related health changes and quality of life.",
      healthPriorities: [
        "Bi-annual health exams",
        "Comprehensive blood panels",
        "Joint health management",
        "Dental health maintenance",
        "Cognitive function monitoring",
        "Cancer screenings",
        "Pain management"
      ],
      nutritionNeeds: [
        "Senior-specific dog food",
        "Easy-to-digest proteins",
        "Joint support supplements",
        "Smaller, frequent meals",
        "Increased water intake",
        "Weight management crucial",
        "Antioxidant-rich foods"
      ],
      exerciseGuidelines: [
        "Gentle, low-impact exercise",
        "Shorter, more frequent walks",
        "Swimming if available",
        "Mental stimulation priority",
        "Avoid overexertion",
        "Warm-up and cool-down",
        "Adjust for arthritis"
      ],
      vetSchedule: [
        "Wellness exams every 6 months",
        "Blood work every 6-12 months",
        "Dental care as needed",
        "Joint X-rays annually",
        "Eye and ear exams",
        "Blood pressure monitoring",
        "Cancer screenings"
      ],
      commonConcerns: [
        "Arthritis and joint pain",
        "Cognitive decline (dementia)",
        "Hearing or vision loss",
        "Dental disease",
        "Kidney or liver changes",
        "Heart disease",
        "Lumps and bumps"
      ],
      redFlags: [
        "Significant mobility changes",
        "Confusion or disorientation",
        "Breathing difficulties",
        "Loss of bladder/bowel control",
        "Persistent pain signs",
        "Rapid weight loss/gain",
        "Excessive sleeping or restlessness"
      ]
    }
  ];

  const catStages: LifeStage[] = [
    {
      stage: "kitten",
      ageRange: "0-12 months",
      title: "Kitten Care (0-12 months)",
      description: "Rapid growth phase requiring specialized nutrition, frequent health monitoring, and proper socialization.",
      healthPriorities: [
        "Core vaccines (FVRCP, Rabies)",
        "Deworming schedule",
        "Flea prevention",
        "Spay/neuter at 4-6 months",
        "Microchipping",
        "Litter training",
        "Growth tracking"
      ],
      nutritionNeeds: [
        "High-quality kitten food",
        "3-4 small meals daily",
        "Higher protein and fat",
        "Limited treats",
        "Fresh water access",
        "Avoid adult cat food",
        "Monitor eating habits"
      ],
      exerciseGuidelines: [
        "Natural play behavior",
        "Interactive toy sessions",
        "Climbing opportunities",
        "Mental stimulation",
        "Social play with littermates",
        "Short, frequent activities",
        "Avoid overexertion"
      ],
      vetSchedule: [
        "First visit at 6-8 weeks",
        "Vaccines every 3-4 weeks",
        "Monthly weight checks",
        "Spay/neuter discussion",
        "Parasite screening",
        "Dental development check",
        "First year comprehensive"
      ],
      commonConcerns: [
        "Litter box training",
        "Teething and biting",
        "Sleep pattern development",
        "Scratching furniture",
        "Climbing dangers",
        "Eating inappropriate items",
        "Socialization needs"
      ],
      redFlags: [
        "Not eating for >12 hours",
        "Diarrhea or vomiting",
        "Difficulty breathing",
        "Lethargy or weakness",
        "Eye or nose discharge",
        "Straining to urinate",
        "Cold or shivering"
      ]
    },
    {
      stage: "adult",
      ageRange: "1-10 years",
      title: "Adult Cat Care (1-10 years)",
      description: "Prime health maintenance focusing on indoor safety, dental care, and lifestyle diseases prevention.",
      healthPriorities: [
        "Annual wellness exams",
        "Dental health maintenance",
        "Weight management",
        "Parasite prevention",
        "Vaccination updates",
        "Reproductive health",
        "Stress management"
      ],
      nutritionNeeds: [
        "High-quality adult cat food",
        "Measured portions twice daily",
        "Weight-appropriate feeding",
        "Limited treats",
        "Fresh water daily",
        "Avoid dog food",
        "Monitor for hairballs"
      ],
      exerciseGuidelines: [
        "15-20 minutes active play daily",
        "Vertical climbing spaces",
        "Interactive hunting games",
        "Laser pointer sessions",
        "Puzzle feeders",
        "Scratching posts",
        "Mental enrichment"
      ],
      vetSchedule: [
        "Annual comprehensive exam",
        "Dental checkup yearly",
        "Blood work every 2-3 years",
        "Vaccine boosters",
        "Parasite screening",
        "Weight monitoring",
        "Behavior assessment"
      ],
      commonConcerns: [
        "Weight gain from inactivity",
        "Dental tartar buildup",
        "Urinary tract issues",
        "Hairball problems",
        "Stress-related behaviors",
        "Litter box aversion",
        "Indoor boredom"
      ],
      redFlags: [
        "Straining to urinate",
        "Hiding or behavior changes",
        "Loss of appetite >24 hours",
        "Excessive grooming",
        "Difficulty breathing",
        "Vomiting frequently",
        "Limping or pain signs"
      ]
    },
    {
      stage: "senior",
      ageRange: "10+ years",
      title: "Senior Cat Care (10+ years)",
      description: "Specialized geriatric care focusing on kidney health, arthritis management, and quality of life optimization.",
      healthPriorities: [
        "Bi-annual health exams",
        "Kidney function monitoring",
        "Arthritis management",
        "Dental disease treatment",
        "Thyroid screening",
        "Blood pressure checks",
        "Cancer vigilance"
      ],
      nutritionNeeds: [
        "Senior cat formula",
        "Kidney-friendly options",
        "Easier-to-chew textures",
        "Smaller, frequent meals",
        "Increased water intake",
        "Joint support supplements",
        "Digestible proteins"
      ],
      exerciseGuidelines: [
        "Gentle, low-impact play",
        "Shorter activity sessions",
        "Easy access to resources",
        "Comfortable resting areas",
        "Mental stimulation",
        "Avoid jumping strain",
        "Monitor for stiffness"
      ],
      vetSchedule: [
        "Wellness exams every 6 months",
        "Blood work every 6 months",
        "Dental care as needed",
        "Blood pressure monitoring",
        "Kidney function tests",
        "Thyroid screening",
        "Pain assessment"
      ],
      commonConcerns: [
        "Kidney disease development",
        "Arthritis and mobility",
        "Dental disease pain",
        "Hyperthyroidism",
        "Cognitive changes",
        "Weight loss",
        "High blood pressure"
      ],
      redFlags: [
        "Increased urination/drinking",
        "Rapid weight loss",
        "Difficulty jumping",
        "Confusion or disorientation",
        "Breathing difficulties",
        "Not grooming properly",
        "Hiding or withdrawn behavior"
      ]
    }
  ];

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case "puppy":
      case "kitten":
        return <Baby className="w-5 h-5 text-pink-500" />;
      case "adult":
        return <Heart className="w-5 h-5 text-blue-500" />;
      case "senior":
        return <Shield className="w-5 h-5 text-purple-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "puppy":
      case "kitten":
        return "from-pink-50 to-rose-50 border-pink-200";
      case "adult":
        return "from-blue-50 to-indigo-50 border-blue-200";
      case "senior":
        return "from-purple-50 to-violet-50 border-purple-200";
      default:
        return "from-gray-50 to-slate-50 border-gray-200";
    }
  };

  const stages = species === "dog" ? dogStages : species === "cat" ? catStages : [...dogStages, ...catStages];
  const activeStageData = stages.find(stage => stage.stage === activeStage) || stages[1];

  // Generate age-specific care schema
  const ageSpecificSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `${activeStageData.title} - Complete Care Guide`,
    "description": activeStageData.description,
    "step": [
      {
        "@type": "HowToStep",
        "name": "Health Priorities",
        "text": activeStageData.healthPriorities.join(", ")
      },
      {
        "@type": "HowToStep", 
        "name": "Nutrition Guidelines",
        "text": activeStageData.nutritionNeeds.join(", ")
      },
      {
        "@type": "HowToStep",
        "name": "Exercise Requirements",
        "text": activeStageData.exerciseGuidelines.join(", ")
      }
    ]
  };

  return (
    <section className="py-12 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🐾 Age-Specific Pet Care Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive care guidelines tailored for every life stage of your pet's journey
          </p>
        </div>

        {/* Life Stage Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 p-2 bg-white rounded-lg shadow-md">
            {stages.map((stage) => (
              <button
                key={`${stage.stage}-${stage.ageRange}`}
                onClick={() => setActiveStage(stage.stage)}
                className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-2 ${
                  activeStage === stage.stage
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {getStageIcon(stage.stage)}
                <span className="font-medium">{stage.title.split(' ')[0]}</span>
                <Badge className="text-xs">{stage.ageRange}</Badge>
              </button>
            ))}
          </div>
        </div>

        {/* Active Stage Details */}
        <Card className={`mb-8 bg-gradient-to-r ${getStageColor(activeStage)} border-2`}>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              {getStageIcon(activeStage)}
              <span>{activeStageData.title}</span>
              <Badge className="bg-white/80 text-gray-700">{activeStageData.ageRange}</Badge>
            </CardTitle>
            <p className="text-gray-700 text-lg">{activeStageData.description}</p>
          </CardHeader>
          
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Health & Veterinary Care */}
              <div className="space-y-6">
                <div className="bg-white/70 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    Health Priorities
                  </h4>
                  <ul className="space-y-2">
                    {activeStageData.healthPriorities.map((priority, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        {priority}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/70 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    Veterinary Schedule
                  </h4>
                  <ul className="space-y-2">
                    {activeStageData.vetSchedule.map((schedule, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        {schedule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Nutrition & Exercise */}
              <div className="space-y-6">
                <div className="bg-white/70 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-green-500" />
                    Nutrition Guidelines
                  </h4>
                  <ul className="space-y-2">
                    {activeStageData.nutritionNeeds.map((nutrition, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        {nutrition}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/70 p-5 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Bone className="w-4 h-4 text-orange-500" />
                    Exercise Guidelines
                  </h4>
                  <ul className="space-y-2">
                    {activeStageData.exerciseGuidelines.map((exercise, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                        {exercise}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Emergency Watch Section */}
            <div className="mt-8 bg-red-50 border border-red-200 p-5 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-3 text-lg">🚨 Emergency Warning Signs</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-red-700 mb-2">Immediate Vet Attention Required:</h5>
                  <ul className="space-y-1">
                    {activeStageData.redFlags.slice(0, Math.ceil(activeStageData.redFlags.length / 2)).map((flag, index) => (
                      <li key={index} className="text-sm text-red-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-700 mb-2">Additional Critical Signs:</h5>
                  <ul className="space-y-1">
                    {activeStageData.redFlags.slice(Math.ceil(activeStageData.redFlags.length / 2)).map((flag, index) => (
                      <li key={index} className="text-sm text-red-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Reference Cards for All Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.slice(0, 3).map((stage) => (
            <Card 
              key={`${stage.stage}-quick`}
              className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
                stage.stage === activeStage ? 'ring-2 ring-indigo-400' : ''
              }`}
              onClick={() => setActiveStage(stage.stage)}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  {getStageIcon(stage.stage)}
                  <span>{stage.title.split(' ')[0]}</span>
                  <Badge className="text-xs">{stage.ageRange}</Badge>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Key Focus:</h5>
                    <p className="text-sm text-gray-600">{stage.description}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-800 mb-1">Top Priorities:</h5>
                    <ul className="space-y-1">
                      {stage.healthPriorities.slice(0, 3).map((priority, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="w-1 h-1 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          {priority}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ageSpecificSchema)
        }}
      />
    </section>
  );
}