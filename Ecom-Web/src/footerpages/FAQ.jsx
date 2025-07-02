import React from "react";

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Frequently Asked Questions (FAQ)</h1>

      <div className="space-y-6 text-gray-800">
        <div>
          <h2 className="font-semibold text-lg">1. How can I track my order?</h2>
          <p>
            Once your order is shipped, you will receive a tracking number via email or SMS. You can use that tracking number on our courier partner's website or in your order history under your account.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">2. What is the return policy?</h2>
          <p>
            You can return most items within 7 days of delivery. The product must be in its original condition and packaging. Please refer to our{" "}
            <a href="/cancellation-&-returns" className="text-blue-500 underline">Return Policy</a> for more details.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">3. How do I cancel my order?</h2>
          <p>
            You can cancel your order from the "My Orders" section before it is shipped. If the order is already shipped, you can request a return once it is delivered.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">4. What payment methods are accepted?</h2>
          <p>
            We accept Credit/Debit cards, Net Banking, UPI, Wallets, and Cash on Delivery (COD) where available.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">5. How do I contact customer support?</h2>
          <p>
            You can reach our support team via the <a href="/contact-us" className="text-blue-500 underline">Contact Us</a> page or by calling our toll-free number 1800-123-456.
          </p>
        </div>
      </div>
    </div>
  );
}
