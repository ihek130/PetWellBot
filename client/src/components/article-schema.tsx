interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  organizationName?: string;
  imageUrl?: string;
  category?: string;
  keywords?: string[];
  wordCount?: number;
  readingTime?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "PetWellBot Veterinary Team",
  organizationName = "PetWellBot",
  imageUrl = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
  category = "Pet Health",
  keywords = [],
  wordCount,
  readingTime
}: ArticleSchemaProps) {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": url,
    "url": url,
    "name": title,
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "inLanguage": "en-US",
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    },
    "about": {
      "@type": "MedicalCondition",
      "name": category
    },
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": "https://petwellbot.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": organizationName,
      "url": "https://petwellbot.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://petwellbot.com/favicon.svg",
        "width": 512,
        "height": 512
      },
      "sameAs": [
        "https://twitter.com/petwellbot",
        "https://facebook.com/petwellbot"
      ]
    },
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630,
      "caption": title
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "PetWellBot",
      "url": "https://petwellbot.com"
    },
    "specialty": "Veterinary Medicine",
    "medicalSpecialty": "Veterinary Medicine",
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 18
    },
    ...(keywords.length > 0 && { "keywords": keywords.join(", ") }),
    ...(wordCount && { "wordCount": wordCount }),
    ...(readingTime && { "timeRequired": readingTime }),
    "potentialAction": {
      "@type": "ReadAction",
      "target": url
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://petwellbot.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title,
          "item": url
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleStructuredData)
      }}
    />
  );
}

// Enhanced WebSite schema for homepage
export function WebSiteSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://petwellbot.com/#website",
    "url": "https://petwellbot.com",
    "name": "PetWellBot - AI Pet Health Assistant",
    "description": "Free AI-powered pet health assistant for dogs, cats, birds, and small pets. Instant symptom checking and health guidance.",
    "publisher": {
      "@type": "Organization",
      "name": "PetWellBot",
      "url": "https://petwellbot.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://petwellbot.com/favicon.svg"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://petwellbot.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://twitter.com/petwellbot",
      "https://facebook.com/petwellbot"
    ],
    "inLanguage": "en-US",
    "copyrightYear": 2025,
    "genre": "Health"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema)
      }}
    />
  );
}