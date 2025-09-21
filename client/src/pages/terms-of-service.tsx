import { SEOHead } from '../components/seo-head';

export default function TermsOfService() {
  return (
    <>
      <SEOHead 
        title="Terms of Service - Pet Health Assistant"
        description="Terms and conditions for using our pet health assistant service"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using this pet health assistant website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily access the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
                <p className="text-gray-700 mb-4">
                  Our website provides an AI-powered pet health assistant designed to help pet owners understand common symptoms and conditions. The service is provided free of charge and does not require user registration.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  When using our service, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide accurate information about your pet's symptoms</li>
                  <li>Use the service for informational purposes only</li>
                  <li>Not misuse or abuse the service</li>
                  <li>Respect the intellectual property rights of the service</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations</h2>
                <p className="text-gray-700 mb-4">
                  In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accuracy of Materials</h2>
                <p className="text-gray-700 mb-4">
                  The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
                <p className="text-gray-700 mb-4">
                  We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the service operates.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700">
                  We reserve the right to terminate access to our service for users who violate these terms of service or engage in behavior that we deem inappropriate or harmful.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}