import React from "react";

export default function Shipping() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Shipping Information</h1>

      <section className="space-y-6 text-md leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">Delivery Coverage</h2>
          <p>
            We deliver across India to over 20,000+ pin codes. You can check if your area is serviceable by entering your PIN code on the product page.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Estimated Delivery Time</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Metro cities: 2–4 business days</li>
            <li>Tier 2 & Tier 3 cities: 4–7 business days</li>
            <li>Remote/rural areas: up to 10 business days</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Shipping Charges</h2>
          <p>
            Shipping is free for most products. A minimal fee may apply for:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Cash on Delivery (COD) orders</li>
            <li>Orders below ₹500 in value</li>
            <li>Heavy or oversized items</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Order Tracking</h2>
          <p>
            Once your order is shipped, you will receive an email and SMS with the tracking ID.
            You can track your order under{" "}
            <strong>My Orders &gt; Track Shipment</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Delayed or Lost Orders</h2>
          <p>
            If your order is delayed or hasn’t arrived within the estimated delivery time:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Check your tracking status for updates</li>
            <li>Contact our support team with your order ID</li>
            <li>If not delivered within 14 days, we will initiate a refund or re-shipment</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
          <p>
            Visit our{" "}
            <a href="/contact-us" className="text-blue-500 underline">
              Contact Us
            </a>{" "}
            page or call <strong>1800-123-456</strong> for any shipping-related assistance.
          </p>
        </div>
      </section>
    </div>
  );
}
