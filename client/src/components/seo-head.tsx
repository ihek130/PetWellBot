import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  noindex?: boolean;
}

export function SEOHead({ 
  title = "Pet Symptom Checker - Free Online Pet Health Assistant | Dog Cat Bird Symptoms",
  description = "Free pet symptom checker for dogs, cats, birds, rabbits, hamsters, and fish. Get instant AI-powered pet health guidance for common symptoms like vomiting, diarrhea, not eating, sneezing, and more.",
  keywords = "pet symptom checker, dog vomiting yellow foam causes, cat not eating but drinking water, puppy diarrhea home remedies, bird sneezing reasons, hamster not moving symptoms, free pet health assistant",
  canonicalUrl,
  ogImage = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
  ogType = "website",
  publishedTime,
  modifiedTime,
  author = "PetWellBot Team",
  section = "Pet Health",
  noindex = false
}: SEOHeadProps) {
  const [location] = useLocation();
  useEffect(() => {
    // Determine canonical URL
    const baseUrl = "https://petwellbot.com";
    const currentCanonical = canonicalUrl || `${baseUrl}${location}`;
    
    // Update document title
    document.title = title;

    // Update meta robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      metaRobots.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      document.head.appendChild(metaRobots);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', currentCanonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', currentCanonical);
      document.head.appendChild(canonicalLink);
    }

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      document.head.appendChild(metaKeywords);
    }

    // Update Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: currentCanonical },
      { property: 'og:type', content: ogType },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'PetWellBot' },
      { property: 'og:locale', content: 'en_US' }
    ];

    if (publishedTime) {
      ogTags.push({ property: 'article:published_time', content: publishedTime });
    }
    if (modifiedTime) {
      ogTags.push({ property: 'article:modified_time', content: modifiedTime });
    }
    if (author && ogType === 'article') {
      ogTags.push({ property: 'article:author', content: author });
      ogTags.push({ property: 'article:section', content: section });
    }

    ogTags.forEach(({ property, content }) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    });

    // Update Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:site', content: '@PetWellBot' },
      { name: 'twitter:creator', content: '@PetWellBot' }
    ];

    twitterTags.forEach(({ name, content }) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    });

    // Add author meta tag
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) {
      metaAuthor.setAttribute('content', author);
    } else {
      metaAuthor = document.createElement('meta');
      metaAuthor.setAttribute('name', 'author');
      metaAuthor.setAttribute('content', author);
      document.head.appendChild(metaAuthor);
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Pet Symptom Checker",
      "description": "Free online pet health assistant for identifying symptoms in dogs, cats, birds, rabbits, hamsters, and fish",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Pet symptom analysis",
        "Multi-pet support",
        "AI-powered health guidance",
        "Free consultation"
      ]
    };

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [location, title, description, keywords, canonicalUrl, ogImage, ogType, publishedTime, modifiedTime, author, section, noindex]);

  return null;
}
