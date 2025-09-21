import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Phone, Clock, Star, Navigation } from "lucide-react";
import { Link } from "wouter";

interface VetLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  rating: number;
  distance: string;
  specialties: string[];
  emergency: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface VetFinderProps {
  userLocation?: string;
  emergencyOnly?: boolean;
  maxResults?: number;
}

export function VetFinder({ userLocation = "Your Location", emergencyOnly = false, maxResults = 6 }: VetFinderProps) {
  // Sample veterinary locations (in production, this would come from an API)
  const veterinarians: VetLocation[] = [
    {
      id: "1",
      name: "BluePearl Pet Hospital",
      address: "123 Main St, Downtown",
      phone: "(555) 123-4567",
      hours: "24/7 Emergency",
      rating: 4.8,
      distance: "0.8 miles",
      specialties: ["Emergency Care", "Surgery", "Internal Medicine"],
      emergency: true,
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: "2",
      name: "VCA Animal Hospital",
      address: "456 Oak Avenue, Midtown",
      phone: "(555) 234-5678",
      hours: "Mon-Fri 8AM-8PM, Sat-Sun 9AM-6PM",
      rating: 4.6,
      distance: "1.2 miles",
      specialties: ["General Practice", "Dental", "Vaccinations"],
      emergency: false,
      coordinates: { lat: 40.7589, lng: -73.9851 }
    },
    {
      id: "3",
      name: "Banfield Pet Hospital",
      address: "789 Pine Street, Uptown",
      phone: "(555) 345-6789",
      hours: "Mon-Fri 7AM-7PM, Sat 8AM-6PM, Sun 9AM-5PM",
      rating: 4.4,
      distance: "1.8 miles",
      specialties: ["Preventive Care", "Wellness Plans", "Surgery"],
      emergency: false,
      coordinates: { lat: 40.7831, lng: -73.9712 }
    },
    {
      id: "4",
      name: "Animal Emergency Center",
      address: "321 Emergency Blvd, Riverside",
      phone: "(555) 911-PETS",
      hours: "24/7 Emergency Only",
      rating: 4.7,
      distance: "2.3 miles",
      specialties: ["Critical Care", "Emergency Surgery", "Trauma"],
      emergency: true,
      coordinates: { lat: 40.7282, lng: -74.0776 }
    },
    {
      id: "5",
      name: "Gentle Care Veterinary Clinic",
      address: "654 Calm Street, Peaceful District",
      phone: "(555) 456-7890",
      hours: "Mon-Fri 8AM-6PM, Sat 9AM-4PM",
      rating: 4.9,
      distance: "3.1 miles",
      specialties: ["Gentle Handling", "Senior Pets", "Behavioral"],
      emergency: false,
      coordinates: { lat: 40.6892, lng: -74.0445 }
    },
    {
      id: "6",
      name: "Metropolitan Emergency Veterinary",
      address: "987 Rescue Road, Emergency District", 
      phone: "(555) 567-8901",
      hours: "24/7 Emergency",
      rating: 4.5,
      distance: "4.2 miles",
      specialties: ["Emergency Medicine", "Oncology", "Cardiology"],
      emergency: true,
      coordinates: { lat: 40.7505, lng: -73.9934 }
    }
  ];

  const filteredVets = emergencyOnly 
    ? veterinarians.filter(vet => vet.emergency).slice(0, maxResults)
    : veterinarians.slice(0, maxResults);

  const generateLocalBusinessSchema = (vet: VetLocation) => {
    return {
      "@context": "https://schema.org",
      "@type": "VeterinaryCare",
      "name": vet.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": vet.address,
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": vet.coordinates.lat,
        "longitude": vet.coordinates.lng
      },
      "telephone": vet.phone,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": vet.rating,
        "reviewCount": Math.floor(Math.random() * 200) + 50
      },
      "openingHours": vet.hours,
      "priceRange": "$$",
      "medicalSpecialty": vet.specialties,
      "availableService": vet.specialties.map(specialty => ({
        "@type": "MedicalService",
        "name": specialty
      }))
    };
  };

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {emergencyOnly ? "🚨 Emergency Veterinarians Near You" : "🏥 Find Veterinarians Near You"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {emergencyOnly 
              ? "24/7 emergency veterinary care when your pet needs immediate attention"
              : "Trusted veterinary professionals in your area for routine and emergency care"
            }
          </p>
        </div>

        {/* Location Input */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your zip code or city"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              defaultValue={userLocation}
            />
            <Button size="sm" className="absolute right-2 top-2">
              <Navigation className="w-4 h-4 mr-1" />
              Find
            </Button>
          </div>
        </div>

        {/* Veterinarian Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVets.map((vet) => (
            <Card key={vet.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-gray-900 mb-1">{vet.name}</CardTitle>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">{vet.rating}</span>
                      <span className="text-sm text-gray-500">• {vet.distance}</span>
                    </div>
                  </div>
                  {vet.emergency && (
                    <div className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                      24/7
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-sm text-gray-600">{vet.address}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a href={`tel:${vet.phone}`} className="text-sm text-blue-600 hover:underline">
                    {vet.phone}
                  </a>
                </div>
                
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                  <span className="text-sm text-gray-600">{vet.hours}</span>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {vet.specialties.slice(0, 2).map((specialty, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                      {specialty}
                    </span>
                  ))}
                  {vet.specialties.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      +{vet.specialties.length - 2} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="flex-1" asChild>
                    <a href={`tel:${vet.phone}`}>Call Now</a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a 
                      href={`https://maps.google.com?q=${encodeURIComponent(vet.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
              
              {/* Local Business Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(generateLocalBusinessSchema(vet))
                }}
              />
            </Card>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            {emergencyOnly 
              ? "If this is a life-threatening emergency, call the nearest emergency vet immediately!"
              : "Can't find what you're looking for? Our AI assistant can help with immediate guidance."
            }
          </p>
          <Link to="/">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get Instant Pet Health Guidance
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}