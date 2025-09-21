import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { AlertTriangle, Clock, Phone, MapPin, Heart } from "lucide-react";

interface EmergencyTimelineItem {
  timeframe: string;
  severity: "low" | "medium" | "high" | "critical";
  symptoms: string[];
  actions: string[];
  vetRequired: boolean;
}

interface EmergencyTimelineProps {
  condition: string;
  species?: "dog" | "cat" | "bird" | "small-pet";
}

export function EmergencyTimeline({ condition, species = "dog" }: EmergencyTimelineProps) {
  // Emergency timeline data for different conditions
  const timelineData: Record<string, EmergencyTimelineItem[]> = {
    vomiting: [
      {
        timeframe: "0-2 hours",
        severity: "low",
        symptoms: ["Single episode", "Still alert", "Drinking water"],
        actions: ["Monitor closely", "Withhold food for 2-4 hours", "Offer small amounts of water"],
        vetRequired: false
      },
      {
        timeframe: "2-6 hours", 
        severity: "medium",
        symptoms: ["Multiple episodes", "Lethargy", "Not keeping water down"],
        actions: ["Call veterinarian", "Continue monitoring", "Prepare for vet visit"],
        vetRequired: true
      },
      {
        timeframe: "6-12 hours",
        severity: "high", 
        symptoms: ["Persistent vomiting", "Dehydration signs", "Abdominal pain"],
        actions: ["Immediate vet attention", "Emergency clinic if regular vet closed"],
        vetRequired: true
      },
      {
        timeframe: "12+ hours",
        severity: "critical",
        symptoms: ["Continuous vomiting", "Collapse", "Severe dehydration"],
        actions: ["Emergency vet immediately", "Critical care needed"],
        vetRequired: true
      }
    ],
    "loss-of-appetite": [
      {
        timeframe: "0-24 hours",
        severity: "low",
        symptoms: ["Skipping 1-2 meals", "Otherwise normal behavior", "Drinking water"],
        actions: ["Monitor appetite", "Offer favorite foods", "Check for other symptoms"],
        vetRequired: false
      },
      {
        timeframe: "24-48 hours",
        severity: "medium", 
        symptoms: ["Not eating for 1-2 days", "Slight lethargy", "Still drinking"],
        actions: ["Call veterinarian for advice", "Try appetite stimulants", "Monitor weight"],
        vetRequired: true
      },
      {
        timeframe: "48-72 hours",
        severity: "high",
        symptoms: ["3 days without food", "Weakness", "Reduced water intake"],
        actions: ["Veterinary examination required", "Blood work needed", "Possible hospitalization"],
        vetRequired: true
      },
      {
        timeframe: "72+ hours",
        severity: "critical",
        symptoms: ["Extended fasting", "Severe weakness", "Organ dysfunction risk"],
        actions: ["Emergency care immediately", "IV fluids needed", "Critical intervention"],
        vetRequired: true
      }
    ],
    lethargy: [
      {
        timeframe: "0-12 hours",
        severity: "low", 
        symptoms: ["Slightly less active", "Still eating/drinking", "Responsive to stimuli"],
        actions: ["Monitor activity level", "Ensure comfortable environment", "Check temperature"],
        vetRequired: false
      },
      {
        timeframe: "12-24 hours",
        severity: "medium",
        symptoms: ["Markedly less active", "Reduced appetite", "Sleeping more than usual"],
        actions: ["Schedule vet appointment", "Document symptoms", "Monitor vital signs"],
        vetRequired: true
      },
      {
        timeframe: "24-48 hours", 
        severity: "high",
        symptoms: ["Very weak", "Not eating", "Difficulty standing"],
        actions: ["Immediate veterinary care", "Possible emergency visit", "Supportive care"],
        vetRequired: true
      },
      {
        timeframe: "48+ hours",
        severity: "critical",
        symptoms: ["Barely responsive", "Cannot stand", "Labored breathing"],
        actions: ["Emergency vet immediately", "Life-threatening situation", "Critical care"],
        vetRequired: true
      }
    ]
  };

  const timeline = timelineData[condition] || timelineData.vomiting;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low": return "bg-green-50 border-green-200 text-green-800";
      case "medium": return "bg-yellow-50 border-yellow-200 text-yellow-800"; 
      case "high": return "bg-orange-50 border-orange-200 text-orange-800";
      case "critical": return "bg-red-50 border-red-200 text-red-800";
      default: return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "low": return <Heart className="w-5 h-5 text-green-600" />;
      case "medium": return <Clock className="w-5 h-5 text-yellow-600" />;
      case "high": return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      case "critical": return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default: return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  // Generate structured data for emergency timeline
  const timelineSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `Emergency Timeline for ${condition.charAt(0).toUpperCase() + condition.slice(1)} in ${species.charAt(0).toUpperCase() + species.slice(1)}s`,
    "description": `Step-by-step emergency timeline for handling ${condition} in ${species}s`,
    "step": timeline.map((item, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": `${item.timeframe}: ${item.severity.toUpperCase()} Priority`,
      "text": `During ${item.timeframe}, watch for: ${item.symptoms.join(', ')}. Actions to take: ${item.actions.join(', ')}.`,
      "url": `#timeline-step-${index + 1}`
    }))
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🕐 Emergency Timeline: {condition.charAt(0).toUpperCase() + condition.slice(1)} in {species.charAt(0).toUpperCase() + species.slice(1)}s
            </h2>
            <p className="text-lg text-gray-600">
              Time-sensitive guidance to help you make critical decisions about your pet's care
            </p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <Card 
                key={index} 
                id={`timeline-step-${index + 1}`}
                className={`border-l-4 ${getSeverityColor(item.severity)} transition-all duration-300 hover:shadow-lg`}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    {getSeverityIcon(item.severity)}
                    <span className="font-bold">{item.timeframe}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.severity === "low" ? "bg-green-100 text-green-700" :
                      item.severity === "medium" ? "bg-yellow-100 text-yellow-700" :
                      item.severity === "high" ? "bg-orange-100 text-orange-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {item.severity.toUpperCase()} PRIORITY
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Watch for these symptoms:
                      </h4>
                      <ul className="space-y-1">
                        {item.symptoms.map((symptom, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        Actions to take:
                      </h4>
                      <ul className="space-y-1">
                        {item.actions.map((action, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {item.vetRequired && (
                    <div className={`p-4 rounded-lg ${
                      item.severity === "critical" ? "bg-red-100 border border-red-200" :
                      item.severity === "high" ? "bg-orange-100 border border-orange-200" : 
                      "bg-blue-100 border border-blue-200"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4" />
                        <span className="font-medium">
                          {item.severity === "critical" ? "EMERGENCY VET REQUIRED" :
                           item.severity === "high" ? "IMMEDIATE VET ATTENTION" :
                           "VETERINARY CONSULTATION NEEDED"}
                        </span>
                      </div>
                      <p className="text-sm">
                        {item.severity === "critical" 
                          ? "This is a life-threatening emergency. Contact your emergency vet immediately or go to the nearest animal hospital."
                          : "Schedule an appointment with your veterinarian or call for guidance on next steps."
                        }
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Contact CTA */}
          <Card className="mt-8 bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">🚨 Emergency Situation?</h3>
              <p className="mb-4">
                If your pet is showing severe symptoms, don't wait - get emergency veterinary care immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-red-600 hover:bg-gray-100"
                  asChild
                >
                  <a href="tel:911">Emergency Services</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Emergency Vet
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(timelineSchema)
        }}
      />
    </section>
  );
}