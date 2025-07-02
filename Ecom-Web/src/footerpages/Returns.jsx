import React from "react";

export default function Returns() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Cancellation & Returns Policy</h1>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">1. Order Cancellation</h2>
          <p>
            You can cancel your order before it is shipped. Once the order is shipped, it cannot be cancelled.
            To cancel, go to <strong>My Orders</strong> and click on <strong>Cancel</strong> next to the item.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2. Return Policy</h2>
          <p>
            We offer a 7-day return policy from the date of delivery. To be eligible for a return:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>The item must be unused and in original packaging.</li>
            <li>All tags, manuals, and accessories must be intact.</li>
            <li>Return request must be raised within 7 days.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3. Non-Returnable Items</h2>
          <p>The following items cannot be returned:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Personal care items (e.g. razors, cosmetics)</li>
            <li>Innerwear and lingerie</li>
            <li>Gift cards and digital products</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4. Refund Process</h2>
          <p>
            Once your return is approved and the item is picked up, the refund will be processed to your original payment method within 5–7 business days.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5. Need Help?</h2>
          <p>
            Visit our <a href="/contact-us" className="text-blue-500 underline">Contact Us</a> page or call customer support at <strong>1800-123-456</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
