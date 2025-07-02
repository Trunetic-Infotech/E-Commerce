import React from "react";

export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Terms of Use</h1>

      <section className="space-y-6 text-md leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to <strong>Opencart</strong>. By using our platform, you agree to comply with and be bound by these Terms of Use. Please read them carefully before accessing or using the website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
          <p>
            You must be at least 18 years old to use our services. By using the platform, you confirm that you are legally eligible to enter into a binding contract.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and password. Any activity under your account is your responsibility.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Prohibited Activities</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Using the platform for illegal purposes</li>
            <li>Violating intellectual property rights</li>
            <li>Sending harmful or deceptive content</li>
            <li>Attempting to breach our security measures</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Product Information</h2>
          <p>
            While we strive for accuracy, we do not guarantee that all product descriptions, pricing, and availability are error-free or current.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Termination</h2>
          <p>
            We may suspend or terminate your access to the platform at any time, without notice, if we suspect a violation of these terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms of Use at any time. Continued use of the platform after changes constitutes your agreement to the new terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p>
            If you have any questions about these terms, please{" "}
            <a href="/contact-us" className="text-blue-500 underline">
              contact us
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
