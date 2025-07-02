import React from "react";

export default function Privacy() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At Opencart, we value the trust you place in us. This Privacy Policy outlines how we collect, use, and protect your personal information.
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Personal details like name, email, phone number, address</li>
            <li>Payment and billing information</li>
            <li>Browsing behavior and device information</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside ml-4">
            <li>To process orders and deliver products</li>
            <li>To improve our website and customer service</li>
            <li>To send promotional offers and updates (with your consent)</li>
            <li>To prevent fraud and ensure security</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3. Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share it with trusted partners for order fulfillment, payment processing, and delivery services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4. Data Security</h2>
          <p>
            We implement strict security measures to protect your data from unauthorized access or misuse.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5. Your Choices</h2>
          <p>
            You may access, update, or delete your personal information from your account settings. You may also opt out of marketing emails at any time.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">6. Policy Updates</h2>
          <p>
            This policy may be updated periodically. Please review this page regularly for changes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p>
            For any questions regarding this policy, please visit our{" "}
            <a href="/contact-us" className="text-blue-500 underline">
              Contact Us
            </a>{" "}
            page.
          </p>
        </div>
      </section>
    </div>
  );
}
