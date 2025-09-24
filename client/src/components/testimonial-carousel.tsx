import { memo } from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  petName: string;
  petType: string;
  quote: string;
  outcome: string;
  timeframe: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Texas",
    petName: "Bella",
    petType: "Golden Retriever",
    quote: "Bella wasn't eating for 2 days. PetWellBot helped me understand it could be serious.",
    outcome: "Found early kidney issue - saved her life",
    timeframe: "2AM emergency"
  },
  {
    name: "Mike R.", 
    location: "California",
    petName: "Whiskers",
    petType: "Cat",
    quote: "My cat was hiding and breathing weird. Got instant guidance on what to look for.",
    outcome: "Identified respiratory infection early",
    timeframe: "Weekend consultation"
  },
  {
    name: "Emma L.",
    location: "New York", 
    petName: "Charlie",
    petType: "Beagle",
    quote: "Charlie was limping but still playful. Learned when it's urgent vs. can wait.",
    outcome: "Avoided unnecessary ER visit",
    timeframe: "Sunday evening"
  }
];

const TestimonialCarousel = memo(() => {
  return (
    <div className="w-full py-8 md:py-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Real Pet Parents, Real Results
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See how PetWellBot has helped thousands of pet owners get the right care at the right time
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 md:gap-4">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <div className="relative mb-4">
                <Quote className="w-6 h-6 text-emerald-200 absolute -top-2 -left-1" />
                <p className="text-gray-700 text-sm leading-relaxed pl-5">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Outcome Badge */}
              <div className="mb-4">
                <div className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  ✅ {testimonial.outcome}
                </div>
              </div>
              
              {/* Author Info */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600 font-medium">{testimonial.petName}</p>
                    <p className="text-xs text-gray-500">{testimonial.petType}</p>
                  </div>
                </div>
                <p className="text-xs text-emerald-600 mt-2 font-medium">
                  💡 {testimonial.timeframe}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
});

TestimonialCarousel.displayName = 'TestimonialCarousel';

export { TestimonialCarousel };