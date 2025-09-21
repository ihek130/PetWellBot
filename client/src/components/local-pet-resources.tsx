import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Phone, Clock, Star, Globe, Navigation } from "lucide-react";

interface LocalResource {
  id: string;
  name: string;
  type: "emergency-vet" | "regular-vet" | "pet-store" | "grooming" | "boarding" | "training" | "pharmacy";
  address: string;
  phone?: string;
  website?: string;
  hours?: string;
  rating?: number;
  distance: string;
  services: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface LocalPetResourcesProps {
  location?: string;
  resourceType?: string;
  emergencyMode?: boolean;
}

export function LocalPetResources({ location = "Your Area", resourceType = "all", emergencyMode = false }: LocalPetResourcesProps) {
  const resources: LocalResource[] = [
    {
      id: "1",
      name: "VetCare Emergency Hospital",
      type: "emergency-vet",
      address: "123 Emergency Drive, Downtown",
      phone: "(555) 911-PETS",
      website: "https://vetcare-emergency.com",
      hours: "24/7 Emergency Services",
      rating: 4.8,
      distance: "0.5 miles",
      services: ["Emergency Surgery", "Critical Care", "24/7 Monitoring"],
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: "2", 
      name: "PetSmart Grooming & Training",
      type: "pet-store",
      address: "456 Shopping Blvd, Mall District",
      phone: "(555) 123-PETS",
      website: "https://petsmart.com",
      hours: "Mon-Sun 9AM-9PM",
      rating: 4.3,
      distance: "1.2 miles",
      services: ["Grooming", "Training Classes", "Pet Supplies", "Veterinary Clinic"],
      coordinates: { lat: 40.7282, lng: -74.0445 }
    },
    {
      id: "3",
      name: "Gentle Paws Veterinary Clinic", 
      type: "regular-vet",
      address: "789 Care Street, Residential Area",
      phone: "(555) 456-7890",
      website: "https://gentlepaws.com",
      hours: "Mon-Fri 8AM-6PM, Sat 9AM-4PM",
      rating: 4.9,
      distance: "1.8 miles",
      services: ["Wellness Exams", "Vaccinations", "Dental Care", "Surgery"],
      coordinates: { lat: 40.7589, lng: -73.9851 }
    },
    {
      id: "4",
      name: "Happy Tails Boarding",
      type: "boarding", 
      address: "321 Pet Paradise Lane, Suburbs",
      phone: "(555) 234-5678",
      website: "https://happytails-boarding.com",
      hours: "Mon-Sun 7AM-7PM (Drop-off/Pickup)",
      rating: 4.6,
      distance: "2.1 miles",
      services: ["Dog Boarding", "Cat Boarding", "Daycare", "Exercise Programs"],
      coordinates: { lat: 40.7831, lng: -73.9712 }
    },
    {
      id: "5",
      name: "Paws & Claws Grooming Spa",
      type: "grooming",
      address: "654 Beauty Boulevard, Uptown",
      phone: "(555) 345-6789", 
      website: "https://pawsandclaws-spa.com",
      hours: "Tue-Sat 9AM-5PM",
      rating: 4.7,
      distance: "2.4 miles",
      services: ["Full Grooming", "Nail Trimming", "Teeth Cleaning", "Flea Treatment"],
      coordinates: { lat: 40.6892, lng: -74.0776 }
    },
    {
      id: "6",
      name: "Pet Pharmacy Plus",
      type: "pharmacy",
      address: "987 Medicine Way, Medical District",
      phone: "(555) 678-9012",
      website: "https://petpharmacyplus.com", 
      hours: "Mon-Fri 9AM-7PM, Sat 10AM-4PM",
      rating: 4.4,
      distance: "3.2 miles",
      services: ["Prescription Medications", "Supplements", "Medical Supplies", "Compounding"],
      coordinates: { lat: 40.7505, lng: -73.9934 }
    }
  ];

  const filteredResources = emergencyMode 
    ? resources.filter(r => r.type === "emergency-vet")
    : resourceType === "all" 
      ? resources
      : resources.filter(r => r.type === resourceType);

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "emergency-vet": return "🏥";
      case "regular-vet": return "🩺";
      case "pet-store": return "🛒";
      case "grooming": return "✂️";
      case "boarding": return "🏨";
      case "training": return "🎓";
      case "pharmacy": return "💊";
      default: return "📍";
    }
  };

  const getResourceTypeLabel = (type: string) => {
    switch (type) {
      case "emergency-vet": return "Emergency Veterinary";
      case "regular-vet": return "Veterinary Clinic";
      case "pet-store": return "Pet Store";
      case "grooming": return "Grooming Services";
      case "boarding": return "Pet Boarding";
      case "training": return "Pet Training";
      case "pharmacy": return "Pet Pharmacy";
      default: return "Pet Services";
    }
  };

  // Generate local business schema for each resource
  const generateLocalBusinessSchema = (resource: LocalResource) => {
    const businessType = resource.type === "emergency-vet" || resource.type === "regular-vet" 
      ? "VeterinaryCare" 
      : resource.type === "pet-store"
      ? "PetStore"
      : "LocalBusiness";

    return {
      "@context": "https://schema.org",
      "@type": businessType,
      "name": resource.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": resource.address,
        "addressLocality": "Your City",
        "addressRegion": "Your State", 
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": resource.coordinates.lat,
        "longitude": resource.coordinates.lng
      },
      "telephone": resource.phone,
      "url": resource.website,
      "openingHours": resource.hours,
      "aggregateRating": resource.rating ? {
        "@type": "AggregateRating",
        "ratingValue": resource.rating,
        "reviewCount": Math.floor(Math.random() * 200) + 50
      } : undefined,
      "priceRange": "$$",
      "availableService": resource.services.map(service => ({
        "@type": "Service",
        "name": service
      }))
    };
  };

  return (
    <section className="py-12 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {emergencyMode ? "🚨 Emergency Pet Resources" : "📍 Local Pet Resources"} in {location}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {emergencyMode 
              ? "Find immediate emergency veterinary care in your area"
              : "Discover trusted pet care services and resources near you"
            }
          </p>
        </div>

        {/* Resource Type Filter */}
        {!emergencyMode && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["all", "regular-vet", "emergency-vet", "pet-store", "grooming", "boarding", "pharmacy"].map((type) => (
              <Button
                key={type}
                variant={resourceType === type ? "default" : "outline"}
                size="sm"
                className="capitalize"
              >
                {getResourceIcon(type)} {type === "all" ? "All Services" : getResourceTypeLabel(type)}
              </Button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-gray-900 mb-1 flex items-center gap-2">
                      <span className="text-xl">{getResourceIcon(resource.type)}</span>
                      {resource.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600 mb-2">{getResourceTypeLabel(resource.type)}</p>
                    {resource.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">{resource.rating}</span>
                        <span className="text-sm text-gray-500">• {resource.distance}</span>
                      </div>
                    )}
                  </div>
                  {resource.type === "emergency-vet" && (
                    <div className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                      24/7
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-sm text-gray-600">{resource.address}</span>
                </div>

                {resource.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${resource.phone}`} className="text-sm text-blue-600 hover:underline">
                      {resource.phone}
                    </a>
                  </div>
                )}

                {resource.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <a 
                      href={resource.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                )}

                {resource.hours && (
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                    <span className="text-sm text-gray-600">{resource.hours}</span>
                  </div>
                )}

                {/* Services */}
                <div className="pt-2">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-1">
                    {resource.services.slice(0, 3).map((service, index) => (
                      <span key={index} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs">
                        {service}
                      </span>
                    ))}
                    {resource.services.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        +{resource.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-3">
                  <Button size="sm" className="flex-1" asChild>
                    <a href={`tel:${resource.phone}`}>
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a 
                      href={`https://maps.google.com?q=${encodeURIComponent(resource.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="w-3 h-3 mr-1" />
                      Directions
                    </a>
                  </Button>
                </div>
              </CardContent>

              {/* Local Business Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(generateLocalBusinessSchema(resource))
                }}
              />
            </Card>
          ))}
        </div>

        {/* Location Update CTA */}
        <div className="text-center mt-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <h3 className="font-semibold text-gray-900 mb-2">Update Your Location</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get more accurate results by sharing your location or entering your zip code
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter zip code"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <Button size="sm">Update</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}