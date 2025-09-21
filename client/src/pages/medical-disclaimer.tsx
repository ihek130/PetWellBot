import { SEOHead } from '../components/seo-head';

export default function MedicalDisclaimer() {
  return (
    <>
      <SEOHead 
        title="Medical Disclaimer - Pet Health Assistant"
        description="Important medical disclaimer about our pet health information service"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Medical Disclaimer</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Important Medical Disclaimer
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>This information is for knowledge purposes only and does not replace actual veterinary advice.</p>
                    </div>
                  </div>
                </div>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Purpose of Information</h2>
                <p className="text-gray-700 mb-4">
                  The information provided on this website is for educational and knowledge purposes only. It is designed to help pet owners better understand common symptoms and conditions that may affect their pets.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>This service does NOT replace professional veterinary advice, diagnosis, or treatment.</strong>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Veterinary Relationship</h2>
                <p className="text-gray-700 mb-4">
                  Using this website does not create a veterinarian-client-patient relationship. The information provided should not be considered as professional veterinary advice for your specific pet's condition.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Emergency Situations</h2>
                <p className="text-gray-700 mb-4">
                  If your pet is experiencing a medical emergency, contact your veterinarian or emergency animal hospital immediately. Do not rely on this website for emergency medical guidance.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Consultation Required</h2>
                <p className="text-gray-700 mb-4">
                  Always consult with a qualified veterinarian before:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Making any treatment decisions for your pet</li>
                  <li>Administering any medications or treatments</li>
                  <li>Changing your pet's diet or care routine</li>
                  <li>Interpreting symptoms or test results</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  <strong>We are not responsible if you take this information as veterinary advice and implement those recommendations without professional consultation.</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  By using this website, you acknowledge that:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>The information is general in nature and may not apply to your pet's specific situation</li>
                  <li>You understand the importance of professional veterinary care</li>
                  <li>You will not rely solely on this information for making medical decisions about your pet</li>
                  <li>You assume full responsibility for any actions taken based on this information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accuracy of Information</h2>
                <p className="text-gray-700 mb-4">
                  While we strive to provide accurate and up-to-date information, we make no warranties or representations about the completeness, accuracy, or reliability of the information provided.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Individual Pet Variations</h2>
                <p className="text-gray-700 mb-4">
                  Every pet is unique, and symptoms can vary greatly between individual animals. What may be normal for one pet could indicate a serious condition in another. Only a qualified veterinarian can properly assess your pet's specific situation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Seek Veterinary Care</h2>
                <p className="text-gray-700 mb-4">
                  Always seek immediate veterinary attention if your pet shows signs of:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Difficulty breathing or choking</li>
                  <li>Severe bleeding or trauma</li>
                  <li>Loss of consciousness or collapse</li>
                  <li>Severe vomiting or diarrhea</li>
                  <li>Signs of extreme pain or distress</li>
                  <li>Inability to urinate or defecate</li>
                  <li>Suspected poisoning</li>
                </ul>
              </section>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Remember
                    </h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>Your veterinarian is your best resource for your pet's health. This website is a supplementary tool for education, not a replacement for professional care.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}