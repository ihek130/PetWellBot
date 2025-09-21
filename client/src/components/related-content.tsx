import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface RelatedArticle {
  title: string;
  href: string;
  description: string;
  category: string;
  readTime: string;
  relevanceScore?: number;
}

interface RelatedContentProps {
  currentPage: string;
  category?: string;
  maxItems?: number;
}

export function RelatedContent({ currentPage, category = "general", maxItems = 4 }: RelatedContentProps) {
  // Comprehensive related content database for strategic internal linking
  const allArticles: RelatedArticle[] = [
    // Pet Guides
    {
      title: "Complete Dog Health Guide 2025",
      href: "/dog-health-guide",
      description: "Comprehensive guide covering common dog health problems, symptoms, and when to seek veterinary care.",
      category: "dog",
      readTime: "8 min",
      relevanceScore: 0.9
    },
    {
      title: "Essential Cat Care Tips",
      href: "/cat-care-tips",
      description: "Expert cat health guidance covering nutrition, grooming, behavior, and common feline health issues.",
      category: "cat",
      readTime: "7 min",
      relevanceScore: 0.9
    },
    {
      title: "Bird Health Basics",
      href: "/bird-health-basics",
      description: "Complete bird care guide covering diet, habitat, health signs, and emergency care for pet birds.",
      category: "bird",
      readTime: "6 min",
      relevanceScore: 0.8
    },
    {
      title: "Small Pet Care Guide",
      href: "/small-pet-care",
      description: "Comprehensive care guide for rabbits, hamsters, guinea pigs, and other small pets.",
      category: "small-pets",
      readTime: "6 min",
      relevanceScore: 0.8
    },
    // Symptom Guides
    {
      title: "Pet Digestive Issues Guide",
      href: "/digestive-issues",
      description: "Complete guide to pet digestive problems including diarrhea, constipation, and stomach upset.",
      category: "symptoms",
      readTime: "5 min",
      relevanceScore: 0.95
    },
    {
      title: "Vomiting & Nausea in Pets",
      href: "/vomiting-nausea",
      description: "When pet vomiting is serious, causes, treatment options, and when to call the emergency vet.",
      category: "symptoms",
      readTime: "4 min",
      relevanceScore: 0.95
    },
    {
      title: "Loss of Appetite in Pets",
      href: "/loss-of-appetite",
      description: "Understanding why pets stop eating, serious warning signs, and how to encourage appetite.",
      category: "symptoms",
      readTime: "4 min",
      relevanceScore: 0.95
    },
    {
      title: "Pet Lethargy & Fatigue",
      href: "/lethargy-fatigue",
      description: "Recognizing when pet tiredness is concerning and understanding energy-related health issues.",
      category: "symptoms",
      readTime: "4 min",
      relevanceScore: 0.95
    }
  ];

  // Smart content filtering based on current page and relevance
  const getRelatedArticles = (): RelatedArticle[] => {
    // Filter out current page
    const filtered = allArticles.filter(article => article.href !== currentPage);
    
    // Category-based relevance scoring
    const scored = filtered.map(article => {
      let score = article.relevanceScore || 0.5;
      
      // Boost score for same category
      if (article.category === category) {
        score += 0.3;
      }
      
      // Cross-linking strategy for SEO
      if (category === "symptoms" && ["dog", "cat", "bird", "small-pets"].includes(article.category)) {
        score += 0.2; // Link symptom pages to pet guides
      }
      
      if (["dog", "cat", "bird", "small-pets"].includes(category) && article.category === "symptoms") {
        score += 0.2; // Link pet guides to symptom pages
      }
      
      // Homepage gets highest variety
      if (currentPage === "/") {
        score += 0.1;
      }
      
      return { ...article, relevanceScore: score };
    });
    
    // Sort by relevance and return top items
    return scored
      .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0))
      .slice(0, maxItems);
  };

  const relatedArticles = getRelatedArticles();

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="my-12 py-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Related Pet Health Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover more expert guidance for keeping your pets healthy and happy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedArticles.map((article, index) => (
            <Card key={article.href} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                    {article.readTime}
                  </span>
                  <span className="text-xs text-gray-500 capitalize">
                    {article.category.replace("-", " ")}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-emerald-600 transition-colors">
                  <Link 
                    href={article.href}
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                  >
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm text-gray-600 leading-relaxed">
                  {article.description}
                </CardDescription>
                <Link 
                  href={article.href}
                  className="inline-flex items-center mt-3 text-sm font-medium text-emerald-600 hover:text-emerald-700 group/link"
                >
                  Read Guide
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call-to-action for homepage */}
        {currentPage === "/" && (
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Need immediate help with your pet's symptoms?</p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Start Free Symptom Check
            </button>
          </div>
        )}
      </div>
    </section>
  );
}