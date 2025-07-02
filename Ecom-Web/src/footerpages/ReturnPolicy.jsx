import React from "react";

export default function ReturnPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Return Policy</h1>

      <section className="space-y-6 text-md leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">Easy Returns</h2>
          <p>
            We offer a simple and hassle-free return policy. If you're not fully satisfied with your purchase, you can return most items within <strong>7 days of delivery</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Return Eligibility</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Items must be in unused and original condition</li>
            <li>Include all original packaging, tags, and accessories</li>
            <li>Return must be requested within the allowed window</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Non-Returnable Products</h2>
          <p>The following cannot be returned:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Personal hygiene products</li>
            <li>Customized or made-to-order items</li>
            <li>Gift cards and digital downloads</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">How to Initiate a Return</h2>
          <p>
            Go to <strong>My Orders</strong>, select the item you wish to return, and click on <strong>"Return"</strong>. Follow the on-screen instructions to schedule a pickup or drop-off.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Refund Process</h2>
          <p>
            Once your return is received and inspected, we will initiate a refund to your original payment method within 5–7 business days.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
          <p>
            Visit our{" "}
            <a href="/contact-us" className="text-blue-500 underline">
              Contact Us
            </a>{" "}
            page or call <strong>1800-123-456</strong> for support.
          </p>
        </div>
      </section>
    </div>
  );
}
