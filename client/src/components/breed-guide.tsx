import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Heart, AlertTriangle, Clock, Users } from "lucide-react";

interface BreedHealthInfo {
  breed: string;
  commonIssues: string[];
  lifespanRange: string;
  size: "small" | "medium" | "large" | "giant";
  exerciseNeeds: "low" | "moderate" | "high";
  groomingNeeds: "low" | "moderate" | "high";
  preventiveCare: string[];
  watchSigns: string[];
}

interface BreedGuideProps {
  species: "dog" | "cat";
  featured?: string[];
  showAll?: boolean;
}

export function BreedGuide({ species, featured = [], showAll = false }: BreedGuideProps) {
  const dogBreeds: BreedHealthInfo[] = [
    {
      breed: "Golden Retriever",
      commonIssues: ["Hip dysplasia", "Cancer", "Heart disease", "Eye problems"],
      lifespanRange: "10-12 years",
      size: "large",
      exerciseNeeds: "high",
      groomingNeeds: "moderate",
      preventiveCare: ["Regular hip screening", "Annual eye exams", "Heart monitoring"],
      watchSigns: ["Limping", "Excessive panting", "Vision changes", "Lethargy"]
    },
    {
      breed: "German Shepherd",
      commonIssues: ["Hip/elbow dysplasia", "Bloat", "Degenerative myelopathy"],
      lifespanRange: "9-13 years", 
      size: "large",
      exerciseNeeds: "high",
      groomingNeeds: "moderate",
      preventiveCare: ["Joint health supplements", "Slow feeding bowls", "Regular exercise"],
      watchSigns: ["Difficulty standing", "Abdominal distention", "Rear weakness"]
    },
    {
      breed: "Labrador Retriever",
      commonIssues: ["Obesity", "Hip dysplasia", "Eye diseases", "Allergies"],
      lifespanRange: "10-14 years",
      size: "large", 
      exerciseNeeds: "high",
      groomingNeeds: "low",
      preventiveCare: ["Weight management", "Regular exercise", "Allergy testing"],
      watchSigns: ["Weight gain", "Scratching", "Limping", "Eye discharge"]
    },
    {
      breed: "French Bulldog",
      commonIssues: ["Breathing problems", "Spinal issues", "Allergies", "Eye problems"],
      lifespanRange: "10-12 years",
      size: "small",
      exerciseNeeds: "low",
      groomingNeeds: "low", 
      preventiveCare: ["Temperature monitoring", "Weight control", "Respiratory care"],
      watchSigns: ["Breathing difficulty", "Overheating", "Spinal pain", "Eye irritation"]
    },
    {
      breed: "Bulldog",
      commonIssues: ["Breathing issues", "Joint problems", "Skin conditions", "Heart disease"],
      lifespanRange: "8-10 years",
      size: "medium",
      exerciseNeeds: "low",
      groomingNeeds: "moderate",
      preventiveCare: ["Climate control", "Gentle exercise", "Skin care routine"],
      watchSigns: ["Labored breathing", "Skin infections", "Joint stiffness", "Heat intolerance"]
    },
    {
      breed: "Poodle",
      commonIssues: ["Hip dysplasia", "Eye diseases", "Epilepsy", "Bloat"],
      lifespanRange: "12-15 years",
      size: "medium",
      exerciseNeeds: "moderate",
      groomingNeeds: "high",
      preventiveCare: ["Regular grooming", "Mental stimulation", "Joint supplements"],
      watchSigns: ["Seizures", "Eye cloudiness", "Limping", "Abdominal swelling"]
    }
  ];

  const catBreeds: BreedHealthInfo[] = [
    {
      breed: "Persian",
      commonIssues: ["Breathing problems", "Eye issues", "Kidney disease", "Skin conditions"],
      lifespanRange: "10-17 years",
      size: "medium",
      exerciseNeeds: "low",
      groomingNeeds: "high",
      preventiveCare: ["Daily grooming", "Eye cleaning", "Regular vet checkups"],
      watchSigns: ["Breathing difficulty", "Eye discharge", "Excessive thirst", "Skin irritation"]
    },
    {
      breed: "Maine Coon",
      commonIssues: ["Heart disease", "Hip dysplasia", "Kidney disease", "Dental issues"],
      lifespanRange: "13-14 years",
      size: "large", 
      exerciseNeeds: "moderate",
      groomingNeeds: "moderate",
      preventiveCare: ["Heart monitoring", "Dental care", "Regular brushing"],
      watchSigns: ["Heart murmur", "Difficulty walking", "Bad breath", "Weight loss"]
    },
    {
      breed: "Siamese",
      commonIssues: ["Respiratory issues", "Dental problems", "Kidney disease", "Liver disease"],
      lifespanRange: "11-15 years",
      size: "medium",
      exerciseNeeds: "moderate", 
      groomingNeeds: "low",
      preventiveCare: ["Regular dental cleaning", "Kidney monitoring", "Respiratory care"],
      watchSigns: ["Breathing problems", "Dental pain", "Increased urination", "Lethargy"]
    },
    {
      breed: "British Shorthair",
      commonIssues: ["Heart disease", "Kidney disease", "Obesity", "Dental issues"],
      lifespanRange: "14-20 years",
      size: "medium",
      exerciseNeeds: "low",
      groomingNeeds: "low",
      preventiveCare: ["Weight management", "Heart screening", "Dental care"],
      watchSigns: ["Heart murmur", "Weight gain", "Dental problems", "Breathing changes"]
    },
    {
      breed: "Ragdoll",
      commonIssues: ["Heart disease", "Kidney disease", "Bladder stones", "Obesity"],
      lifespanRange: "13-18 years", 
      size: "large",
      exerciseNeeds: "low",
      groomingNeeds: "moderate",
      preventiveCare: ["Heart monitoring", "Weight control", "Urinary health"],
      watchSigns: ["Heart murmur", "Urination problems", "Weight gain", "Lethargy"]
    },
    {
      breed: "Scottish Fold",
      commonIssues: ["Joint problems", "Heart disease", "Kidney disease", "Ear issues"],
      lifespanRange: "11-14 years",
      size: "medium",
      exerciseNeeds: "low", 
      groomingNeeds: "low",
      preventiveCare: ["Joint supplements", "Ear cleaning", "Heart monitoring"],
      watchSigns: ["Joint stiffness", "Ear infections", "Heart issues", "Mobility problems"]
    }
  ];

  const breeds = species === "dog" ? dogBreeds : catBreeds;
  const displayBreeds = showAll ? breeds : 
    featured.length > 0 ? breeds.filter(breed => featured.includes(breed.breed)) :
    breeds.slice(0, 3);

  const getSizeColor = (size: string) => {
    switch (size) {
      case "small": return "bg-green-100 text-green-700";
      case "medium": return "bg-blue-100 text-blue-700";
      case "large": return "bg-purple-100 text-purple-700";
      case "giant": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getNeedsColor = (level: string) => {
    switch (level) {
      case "low": return "bg-green-100 text-green-700";
      case "moderate": return "bg-yellow-100 text-yellow-700";
      case "high": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  // Generate structured data for breed information
  const breedSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${species.charAt(0).toUpperCase() + species.slice(1)} Breed Health Guide`,
    "description": `Comprehensive health information for popular ${species} breeds`,
    "itemListElement": displayBreeds.map((breed, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "AnimalBreed", 
        "name": breed.breed,
        "description": `Health information for ${breed.breed} ${species}s`,
        "lifespan": breed.lifespanRange,
        "size": breed.size,
        "healthCondition": breed.commonIssues.map(issue => ({
          "@type": "MedicalCondition",
          "name": issue
        }))
      }
    }))
  };

  return (
    <section className="py-12 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🐕 {species.charAt(0).toUpperCase() + species.slice(1)} Breed Health Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Breed-specific health information to help you understand your {species}'s unique needs and potential health concerns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayBreeds.map((breed, index) => (
            <Card key={breed.breed} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-gray-900 mb-2">{breed.breed}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  <Badge className={getSizeColor(breed.size)}>
                    {breed.size} size
                  </Badge>
                  <Badge variant="outline" className="text-gray-600">
                    <Heart className="w-3 h-3 mr-1" />
                    {breed.lifespanRange}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Care Requirements */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Care Requirements
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm">
                      <span className="text-gray-600">Exercise:</span>
                      <Badge className={`ml-1 ${getNeedsColor(breed.exerciseNeeds)}`}>
                        {breed.exerciseNeeds}
                      </Badge>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Grooming:</span>
                      <Badge className={`ml-1 ${getNeedsColor(breed.groomingNeeds)}`}>
                        {breed.groomingNeeds}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Common Health Issues */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    Common Health Issues
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {breed.commonIssues.map((issue, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {issue}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Watch For Signs */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    Watch For These Signs
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {breed.watchSigns.slice(0, 3).map((sign, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                        {sign}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Preventive Care */}
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Preventive Care Tips
                  </h4>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    {breed.preventiveCare.slice(0, 2).map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showAll && breeds.length > displayBreeds.length && (
          <div className="text-center mt-8">
            <button className="text-emerald-600 hover:text-emerald-700 font-medium">
              View All {species.charAt(0).toUpperCase() + species.slice(1)} Breeds →
            </button>
          </div>
        )}
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breedSchema)
        }}
      />
    </section>
  );
}