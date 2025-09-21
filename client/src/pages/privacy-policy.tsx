import { SEOHead } from '../components/seo-head';

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - Pet Health Assistant"
        description="Learn about our privacy practices and how we protect your information"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Privacy Commitment</h2>
                <p className="text-gray-700 mb-4">
                  We care deeply about your personal information and privacy. That's why we've designed this website to be completely signup-free. We never ask for your personal email, phone number, or any other personal details.
                </p>
                <p className="text-gray-700 mb-4">
                  Our commitment to your privacy means you can use our pet health assistant without worrying about sharing sensitive personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Don't Collect</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Personal email addresses</li>
                  <li>Phone numbers</li>
                  <li>Names or personal identifiers</li>
                  <li>Account registration information</li>
                  <li>Payment information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We May Collect</h2>
                <p className="text-gray-700 mb-4">
                  To provide you with the best possible service, we may collect:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Anonymous usage data to improve our service</li>
                  <li>Technical information such as browser type and device information</li>
                  <li>Pet health queries (anonymized and not linked to your identity)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We may use essential cookies to ensure the proper functioning of our website. These cookies do not store personal information and are necessary for basic website operations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-700 mb-4">
                  Our website may include third-party services for analytics and advertising. These services have their own privacy policies, and we encourage you to review them.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect any information we do collect. However, since we don't collect personal information, your privacy risk is minimized.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700">
                  If you have any questions about this privacy policy, you can contact us through the feedback mechanisms available on our website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}