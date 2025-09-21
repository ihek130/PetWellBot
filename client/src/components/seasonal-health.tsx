import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Heart, Calendar, Thermometer, Snowflake, Sun, Leaf, Flower } from "lucide-react";

interface SeasonalTip {
  season: "spring" | "summer" | "fall" | "winter";
  title: string;
  description: string;
  tips: string[];
  warnings: string[];
  emergencyWatch: string[];
}

interface SeasonalHealthProps {
  species?: "dog" | "cat" | "bird" | "all";
  currentSeason?: "spring" | "summer" | "fall" | "winter";
}

export function SeasonalHealth({ species = "all", currentSeason }: SeasonalHealthProps) {
  const seasonalTips: SeasonalTip[] = [
    {
      season: "spring",
      title: "Spring Pet Health & Allergies",
      description: "Spring brings new allergens and increased outdoor activity. Focus on allergy prevention and parasite protection.",
      tips: [
        "Start flea and tick prevention early",
        "Gradually increase outdoor exercise",
        "Watch for seasonal allergies (sneezing, itching)",
        "Schedule annual vet checkups",
        "Update vaccinations before summer",
        "Begin heartworm prevention",
        "Clean and refresh pet bedding"
      ],
      warnings: [
        "Pollen allergies may worsen",
        "Increased flea and tick activity",
        "Spring cleaning chemicals are toxic",
        "Easter lilies are deadly to cats"
      ],
      emergencyWatch: [
        "Severe allergic reactions",
        "Toxic plant ingestion", 
        "Fertilizer poisoning",
        "Rapid breathing from allergies"
      ]
    },
    {
      season: "summer",
      title: "Summer Heat Safety & Hydration",
      description: "Hot weather requires careful temperature management and hydration monitoring to prevent heat-related emergencies.",
      tips: [
        "Provide constant access to fresh water",
        "Avoid midday walks on hot pavement",
        "Use cooling mats and fans indoors",
        "Never leave pets in cars",
        "Provide shade for outdoor pets",
        "Consider early morning/evening exercise",
        "Watch for signs of overheating"
      ],
      warnings: [
        "Heatstroke risk increases dramatically",
        "Hot pavement can burn paw pads",
        "Swimming safety concerns",
        "Increased dehydration risk"
      ],
      emergencyWatch: [
        "Excessive panting and drooling",
        "Vomiting or diarrhea from heat",
        "Collapse or weakness",
        "Paw pad burns"
      ]
    },
    {
      season: "fall",
      title: "Fall Preparation & Joint Care",
      description: "Cooler weather means preparing for winter and managing arthritis pain that often worsens in cold weather.",
      tips: [
        "Maintain consistent exercise routines",
        "Consider joint supplements for older pets",
        "Update pet identification tags",
        "Schedule pre-winter health checks",
        "Stock up on prescription medications",
        "Prepare warm bedding for winter",
        "Watch for seasonal depression"
      ],
      warnings: [
        "Arthritis pain may increase",
        "Reduced daylight affects mood",
        "Fall toxins (antifreeze, rodenticides)",
        "Weather changes stress pets"
      ],
      emergencyWatch: [
        "Severe limping or joint pain",
        "Antifreeze poisoning symptoms",
        "Sudden behavior changes",
        "Difficulty moving in cold weather"
      ]
    },
    {
      season: "winter",
      title: "Winter Warmth & Safety",
      description: "Cold weather protection and indoor air quality become priorities during the winter months.",
      tips: [
        "Provide warm, draft-free sleeping areas",
        "Use pet-safe ice melts on walkways",
        "Limit outdoor time in extreme cold",
        "Maintain indoor humidity levels",
        "Check paws for ice and salt buildup",
        "Consider protective clothing for small pets",
        "Monitor for winter depression"
      ],
      warnings: [
        "Hypothermia and frostbite risks",
        "Ice melt chemicals are toxic",
        "Dry indoor air causes skin issues",
        "Carbon monoxide from heaters"
      ],
      emergencyWatch: [
        "Shivering and lethargy",
        "Ice melt poisoning",
        "Frostbite on ears/paws",
        "Difficulty breathing from dry air"
      ]
    }
  ];

  const getCurrentSeason = (): "spring" | "summer" | "fall" | "winter" => {
    if (currentSeason) return currentSeason;
    
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return "spring";
    if (month >= 5 && month <= 7) return "summer";
    if (month >= 8 && month <= 10) return "fall";
    return "winter";
  };

  const getSeasonIcon = (season: string) => {
    switch (season) {
      case "spring": return <Flower className="w-5 h-5 text-green-500" />;
      case "summer": return <Sun className="w-5 h-5 text-yellow-500" />;
      case "fall": return <Leaf className="w-5 h-5 text-orange-500" />;
      case "winter": return <Snowflake className="w-5 h-5 text-blue-500" />;
      default: return <Calendar className="w-5 h-5 text-gray-500" />;
    }
  };

  const getSeasonColor = (season: string) => {
    switch (season) {
      case "spring": return "from-green-50 to-emerald-50 border-green-200";
      case "summer": return "from-yellow-50 to-orange-50 border-yellow-200";
      case "fall": return "from-orange-50 to-red-50 border-orange-200";
      case "winter": return "from-blue-50 to-indigo-50 border-blue-200";
      default: return "from-gray-50 to-slate-50 border-gray-200";
    }
  };

  const current = getCurrentSeason();
  const currentTips = seasonalTips.find(tip => tip.season === current);
  const allTips = seasonalTips;

  // Generate seasonal health schema
  const seasonalSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `Seasonal Pet Health Guide - ${currentTips?.title}`,
    "description": currentTips?.description,
    "step": currentTips?.tips.map((tip, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": tip,
      "text": tip
    }))
  };

  return (
    <section className="py-12 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🌍 Seasonal Pet Health Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keep your pets healthy year-round with season-specific care tips and safety guidance
          </p>
        </div>

        {/* Current Season Highlight */}
        {currentTips && (
          <Card className={`mb-8 bg-gradient-to-r ${getSeasonColor(current)} border-2`}>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                {getSeasonIcon(current)}
                <span>Current Season: {currentTips.title}</span>
                <Badge className="bg-white/80 text-gray-700">Now Active</Badge>
              </CardTitle>
              <p className="text-gray-700">{currentTips.description}</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-green-600" />
                    Essential Care Tips
                  </h4>
                  <ul className="space-y-2">
                    {currentTips.tips.slice(0, 5).map((tip, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Thermometer className="w-4 h-4 text-red-600" />
                    Emergency Watch Signs
                  </h4>
                  <ul className="space-y-2">
                    {currentTips.emergencyWatch.map((sign, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* All Seasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allTips.map((tip) => (
            <Card 
              key={tip.season} 
              className={`hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${getSeasonColor(tip.season)} ${
                tip.season === current ? 'ring-2 ring-emerald-400' : ''
              }`}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  {getSeasonIcon(tip.season)}
                  <span className="capitalize">{tip.season}</span>
                  {tip.season === current && (
                    <Badge className="bg-emerald-100 text-emerald-700 text-xs">Active</Badge>
                  )}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Focus Areas:</h4>
                  <ul className="space-y-1">
                    {tip.tips.slice(0, 3).map((tipItem, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        {tipItem}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/60 p-3 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2 text-sm">⚠️ Seasonal Dangers:</h4>
                  <ul className="space-y-1">
                    {tip.warnings.slice(0, 2).map((warning, index) => (
                      <li key={index} className="text-xs text-red-700 flex items-start gap-1">
                        <span className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        {warning}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Monthly Calendar Overview */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Year-Round Pet Health Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700 flex items-center gap-1">
                  <Flower className="w-4 h-4" /> Spring (Mar-May)
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Start parasite prevention</li>
                  <li>• Annual vet checkups</li>
                  <li>• Allergy monitoring</li>
                  <li>• Vaccination updates</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-700 flex items-center gap-1">
                  <Sun className="w-4 h-4" /> Summer (Jun-Aug)
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Heat safety protocols</li>
                  <li>• Increased hydration</li>
                  <li>• Paw protection</li>
                  <li>• Swimming safety</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-700 flex items-center gap-1">
                  <Leaf className="w-4 h-4" /> Fall (Sep-Nov)
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Joint supplement start</li>
                  <li>• Winter prep checkup</li>
                  <li>• Medication refills</li>
                  <li>• Weight management</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-700 flex items-center gap-1">
                  <Snowflake className="w-4 h-4" /> Winter (Dec-Feb)
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cold weather protection</li>
                  <li>• Indoor air quality</li>
                  <li>• Paw care routine</li>
                  <li>• Depression monitoring</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seasonalSchema)
        }}
      />
    </section>
  );
}