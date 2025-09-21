interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageTitle: string;
  pageUrl: string;
}

export function FAQSchema({ faqs, pageTitle, pageUrl }: FAQSchemaProps) {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": pageTitle,
    "url": pageUrl,
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `${pageUrl}#faq-${index + 1}`,
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "url": `${pageUrl}#faq-${index + 1}`
      },
      "position": index + 1
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqStructuredData)
      }}
    />
  );
}

// Enhanced FAQ component with structured data
export function EnhancedFAQ({ faqs, pageTitle, pageUrl }: FAQSchemaProps) {
  return (
    <>
      <FAQSchema faqs={faqs} pageTitle={pageTitle} pageUrl={pageUrl} />
      
      <section className="my-12 py-8 bg-white rounded-2xl shadow-sm border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                id={`faq-${index + 1}`}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <details className="group">
                  <summary className="flex justify-between items-center w-full p-6 text-left bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <svg 
                      className="w-6 h-6 text-gray-600 transition-transform group-open:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  
                  <div className="p-6 bg-white border-t border-gray-200">
                    <div className="prose prose-emerald max-w-none">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>
          
          {/* Call-to-action for more help */}
          <div className="text-center mt-8 p-6 bg-emerald-50 rounded-xl">
            <p className="text-gray-700 mb-4">
              Still have questions about your pet's health?
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Ask Our AI Assistant
            </button>
          </div>
        </div>
      </section>
    </>
  );
}