import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { AlertTriangle, Clock, Phone, MapPin, Thermometer, Activity, Shield, Brain } from "lucide-react";
import { useState } from "react";

interface EmergencyProtocol {
  condition: string;
  severity: "critical" | "urgent" | "moderate";
  timeframe: string;
  immediateSteps: string[];
  transportGuidelines: string[];
  whatToTell: string[];
  prevention: string[];
  aftercare: string[];
}

interface AdvancedEmergencyProps {
  species?: "dog" | "cat" | "both";
  emergencyType?: "poisoning" | "trauma" | "breathing" | "cardiac" | "neurological";
}

export function AdvancedEmergency({ species = "both", emergencyType }: AdvancedEmergencyProps) {
  const [activeProtocol, setActiveProtocol] = useState<string>(emergencyType || "poisoning");

  const emergencyProtocols: EmergencyProtocol[] = [
    {
      condition: "Poisoning & Toxin Ingestion",
      severity: "critical",
      timeframe: "Minutes count - Act immediately",
      immediateSteps: [
        "Remove pet from toxin source immediately",
        "Do NOT induce vomiting unless instructed by vet",
        "Save packaging/sample of ingested substance",
        "Call Pet Poison Helpline: (855) 764-7661",
        "Note time of ingestion and amount if known",
        "Check pet's airway and breathing",
        "Prepare for immediate transport to emergency vet"
      ],
      transportGuidelines: [
        "Keep pet calm and warm during transport",
        "Bring toxin packaging or sample with you",
        "Monitor breathing and consciousness level",
        "Have someone call ahead to emergency clinic",
        "Do not give food, water, or medications",
        "Support pet's head if unconscious",
        "Drive safely - panic won't help"
      ],
      whatToTell: [
        "Exact substance ingested (brand name, ingredients)",
        "Approximate amount consumed",
        "Time of ingestion (be as precise as possible)",
        "Pet's current symptoms and behavior",
        "Pet's weight and age",
        "Any treatments already attempted",
        "Current medications pet is taking"
      ],
      prevention: [
        "Store all chemicals in locked cabinets",
        "Use pet-safe cleaning products",
        "Secure garbage cans with tight lids",
        "Remove toxic plants from home/yard",
        "Keep medications in secure containers",
        "Educate family about pet-toxic foods",
        "Install safety latches on lower cabinets"
      ],
      aftercare: [
        "Follow all veterinary discharge instructions",
        "Monitor for delayed symptoms (24-48 hours)",
        "Administer prescribed medications exactly as directed",
        "Restrict activity as recommended",
        "Schedule follow-up appointments",
        "Watch for appetite/bathroom habit changes",
        "Keep emergency vet contact readily available"
      ]
    },
    {
      condition: "Trauma & Injury",
      severity: "critical",
      timeframe: "Assess and act within 5-10 minutes",
      immediateSteps: [
        "Ensure scene safety before approaching",
        "Gently restrain pet to prevent further injury",
        "Check for responsiveness and breathing",
        "Control bleeding with direct pressure",
        "Immobilize suspected fractures",
        "Check for shock symptoms (pale gums, rapid pulse)",
        "Prepare for emergency transport"
      ],
      transportGuidelines: [
        "Use a firm surface (board, blanket) as stretcher",
        "Keep injured limbs/spine aligned",
        "Cover with blanket to prevent shock",
        "Handle gently to avoid worsening injuries",
        "Support breathing if compromised",
        "Monitor for deteriorating condition",
        "Have someone navigate to closest emergency clinic"
      ],
      whatToTell: [
        "How the injury occurred",
        "What body parts appear injured",
        "Whether pet lost consciousness",
        "Current bleeding or pain level",
        "Pet's ability to move/walk",
        "Any changes in breathing or alertness",
        "Estimated time since injury occurred"
      ],
      prevention: [
        "Use proper restraints in vehicles",
        "Maintain secure fencing in yards",
        "Keep pets leashed near traffic",
        "Regular safety inspections of play areas",
        "Supervise interactions with other animals",
        "Remove hazardous objects from environment",
        "Train pets for basic safety commands"
      ],
      aftercare: [
        "Strict rest as prescribed by veterinarian",
        "Administer pain medications as directed",
        "Monitor surgical sites for infection",
        "Prevent licking/chewing of wounds",
        "Physical therapy if recommended",
        "Gradual return to normal activity",
        "Watch for complications or setbacks"
      ]
    },
    {
      condition: "Breathing Difficulties",
      severity: "critical",
      timeframe: "Emergency - Transport immediately",
      immediateSteps: [
        "Keep pet calm and minimize stress",
        "Ensure airway is clear of obstructions",
        "Loosen any collars or restrictive items",
        "Position pet for optimal breathing (chest up)",
        "Do not attempt mouth-to-mouth unless trained",
        "Monitor for blue/pale gums (lack of oxygen)",
        "Head to emergency clinic immediately"
      ],
      transportGuidelines: [
        "Keep windows open for fresh air",
        "Allow pet to assume comfortable position",
        "Avoid restraining chest or neck area",
        "Monitor breathing rate and effort",
        "Be prepared for sudden deterioration",
        "Have someone call clinic en route",
        "Stay calm to avoid stressing pet further"
      ],
      whatToTell: [
        "Duration of breathing difficulty",
        "Possible triggers (exercise, stress, heat)",
        "Breathing rate and quality",
        "Color of gums and tongue",
        "Any coughing or gagging sounds",
        "Recent activities or exposures",
        "Current medications and medical history"
      ],
      prevention: [
        "Maintain healthy weight to reduce respiratory strain",
        "Avoid overexertion in hot weather",
        "Manage underlying conditions (asthma, heart disease)",
        "Regular veterinary checkups",
        "Avoid smoke and air pollutants",
        "Monitor for early signs of respiratory issues",
        "Keep rescue medications accessible if prescribed"
      ],
      aftercare: [
        "Continue prescribed respiratory medications",
        "Monitor breathing rate at rest",
        "Limit exercise as directed",
        "Maintain ideal body weight",
        "Avoid respiratory irritants",
        "Follow up with cardiology if recommended",
        "Learn to recognize early warning signs"
      ]
    },
    {
      condition: "Cardiac Events",
      severity: "critical",
      timeframe: "Life-threatening - Act within minutes",
      immediateSteps: [
        "Check for pulse and heartbeat",
        "Look for signs of circulation (gum color)",
        "Perform CPR if no heartbeat detected",
        "Keep pet calm if conscious",
        "Elevate hind legs slightly if in shock",
        "Do not give food, water, or medications",
        "Rush to emergency clinic immediately"
      ],
      transportGuidelines: [
        "Position pet on right side during transport",
        "Continue monitoring pulse and breathing",
        "Be prepared to perform CPR if needed",
        "Keep pet warm but not overheated",
        "Minimize handling once positioned",
        "Have emergency clinic contact ready",
        "Drive quickly but safely"
      ],
      whatToTell: [
        "Duration of current episode",
        "Pet's activity just before collapse",
        "Previous history of heart problems",
        "Current heart medications",
        "Quality of pulse and heartbeat",
        "Breathing pattern and rate",
        "Gum color and capillary refill"
      ],
      prevention: [
        "Regular cardiac monitoring for at-risk breeds",
        "Maintain appropriate exercise levels",
        "Manage weight to reduce cardiac stress",
        "Administer heart medications as prescribed",
        "Monitor for early signs of heart disease",
        "Avoid excessive stress or excitement",
        "Schedule regular veterinary cardiac assessments"
      ],
      aftercare: [
        "Strict medication compliance",
        "Monitor resting respiratory rate daily",
        "Restrict exercise as prescribed",
        "Watch for signs of fluid retention",
        "Follow low-sodium diet if recommended",
        "Regular cardiology follow-ups",
        "Learn emergency CPR techniques"
      ]
    },
    {
      condition: "Neurological Emergencies",
      severity: "critical",
      timeframe: "Brain function at risk - Urgent care needed",
      immediateSteps: [
        "Protect pet from injury during seizures",
        "Time the duration of seizure activity",
        "Do not put hands near mouth during seizure",
        "Clear area of objects that could cause injury",
        "Keep pet cool if overheating",
        "Note all symptoms and behaviors",
        "Transport immediately after seizure stops"
      ],
      transportGuidelines: [
        "Support pet's head and neck during transport",
        "Dim lights and minimize stimulation",
        "Be prepared for additional seizures",
        "Monitor for changes in consciousness",
        "Keep detailed notes of all symptoms",
        "Bring any videos of seizure activity",
        "Stay calm and speak softly to pet"
      ],
      whatToTell: [
        "Type and duration of neurological episode",
        "Any potential triggers or toxin exposure",
        "Previous history of seizures or neurological issues",
        "Current medications and supplements",
        "Recent changes in behavior or appetite",
        "Any head trauma or injury history",
        "Frequency of episodes if recurring"
      ],
      prevention: [
        "Administer anti-seizure medications consistently",
        "Avoid known seizure triggers",
        "Maintain stable routine and environment",
        "Monitor stress levels carefully",
        "Keep seizure diary for patterns",
        "Ensure adequate sleep and rest",
        "Regular neurological monitoring"
      ],
      aftercare: [
        "Monitor for post-seizure complications",
        "Administer medications exactly as prescribed",
        "Maintain seizure log with detailed notes",
        "Create safe environment to prevent injury",
        "Watch for medication side effects",
        "Follow up with neurologist as recommended",
        "Educate family on seizure first aid"
      ]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-red-100 text-red-800 border-red-300";
      case "urgent": return "bg-orange-100 text-orange-800 border-orange-300";
      case "moderate": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical": return <AlertTriangle className="w-4 h-4" />;
      case "urgent": return <Clock className="w-4 h-4" />;
      case "moderate": return <Activity className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  const activeProtocolData = emergencyProtocols.find(protocol => 
    protocol.condition.toLowerCase().includes(activeProtocol)
  ) || emergencyProtocols[0];

  // Generate emergency protocol schema
  const emergencySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": activeProtocolData.condition,
    "possibleTreatment": {
      "@type": "MedicalTherapy",
      "name": `Emergency Protocol for ${activeProtocolData.condition}`,
      "howPerformed": activeProtocolData.immediateSteps.join(". ")
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🚨 Advanced Emergency Protocols
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step-by-step emergency response guides for critical pet health situations
          </p>
          <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg">
            <p className="text-red-800 font-semibold">
              ⚠️ Always contact your emergency veterinarian immediately. These guides supplement professional care.
            </p>
          </div>
        </div>

        {/* Emergency Type Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {emergencyProtocols.map((protocol, index) => (
            <button
              key={index}
              onClick={() => setActiveProtocol(protocol.condition.toLowerCase().split(' ')[0])}
              className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                activeProtocol === protocol.condition.toLowerCase().split(' ')[0]
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {getSeverityIcon(protocol.severity)}
              <span className="font-medium">{protocol.condition.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Protocol Details */}
        <Card className="mb-8 border-2 border-red-200 bg-gradient-to-r from-red-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <span>{activeProtocolData.condition}</span>
              <Badge className={`${getSeverityColor(activeProtocolData.severity)} border`}>
                {activeProtocolData.severity.toUpperCase()}
              </Badge>
            </CardTitle>
            <div className="flex items-center gap-2 text-red-700 font-semibold">
              <Clock className="w-4 h-4" />
              <span>{activeProtocolData.timeframe}</span>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Immediate Action Steps */}
              <div className="space-y-6">
                <div className="bg-red-100 border border-red-200 p-5 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2 text-lg">
                    🏃‍♂️ IMMEDIATE STEPS (First 2-5 minutes)
                  </h4>
                  <ol className="space-y-2">
                    {activeProtocolData.immediateSteps.map((step, index) => (
                      <li key={index} className="text-sm text-red-800 flex items-start gap-3">
                        <span className="bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="font-medium">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Transport to Emergency Clinic
                  </h4>
                  <ul className="space-y-2">
                    {activeProtocolData.transportGuidelines.map((guideline, index) => (
                      <li key={index} className="text-sm text-blue-800 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        {guideline}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Communication & Follow-up */}
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Critical Information for Vet
                  </h4>
                  <ul className="space-y-2">
                    {activeProtocolData.whatToTell.map((info, index) => (
                      <li key={index} className="text-sm text-green-800 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-5 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    Post-Emergency Care
                  </h4>
                  <ul className="space-y-2">
                    {activeProtocolData.aftercare.map((care, index) => (
                      <li key={index} className="text-sm text-purple-800 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                        {care}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Prevention Section */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 p-5 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-3 flex items-center gap-2 text-lg">
                <Shield className="w-5 h-5" />
                Prevention Strategies
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {activeProtocolData.prevention.map((prevention, index) => (
                  <div key={index} className="text-sm text-yellow-800 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                    {prevention}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Preparedness Checklist */}
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              Emergency Preparedness Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Essential Contacts</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Primary veterinarian phone number</li>
                  <li>✓ Emergency clinic contact & address</li>
                  <li>✓ Pet Poison Helpline: (855) 764-7661</li>
                  <li>✓ Backup emergency clinic option</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">First Aid Supplies</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Gauze pads and bandages</li>
                  <li>✓ Antiseptic wipes</li>
                  <li>✓ Digital thermometer</li>
                  <li>✓ Emergency muzzle</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Important Information</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Pet's medical history & medications</li>
                  <li>✓ Emergency clinic driving directions</li>
                  <li>✓ Pet insurance information</li>
                  <li>✓ Emergency contact person</li>
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
          __html: JSON.stringify(emergencySchema)
        }}
      />
    </section>
  );
}