import React from "react";

export default function Security() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Security</h1>

      <section className="space-y-6 text-md leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Your Information Is Safe</h2>
          <p>
            At <strong>Opencart</strong>, we prioritize the safety of your personal and financial data. We use industry-standard encryption protocols and secure servers to protect your information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Secure Payments</h2>
          <p>
            All transactions on our platform are processed through trusted and secure payment gateways. We do not store your credit/debit card details on our servers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Account Protection</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Use a strong, unique password for your account.</li>
            <li>Never share your login credentials with anyone.</li>
            <li>Always log out from public/shared devices after use.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Fraud Prevention</h2>
          <p>
            We actively monitor for suspicious activity and may temporarily block access or request verification to ensure the safety of your account.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Reporting a Security Issue</h2>
          <p>
            If you notice any unusual activity or suspect a security issue, please contact us immediately via our{" "}
            <a href="/contact-us" className="text-blue-500 underline">Contact Us</a> page.
          </p>
        </div>
      </section>
    </div>
  );
}
