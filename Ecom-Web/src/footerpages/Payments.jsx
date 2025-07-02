import React from "react";

export default function Payments() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Payments</h1>

      <section className="space-y-6 text-md leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">Accepted Payment Methods</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Credit Cards: Visa, MasterCard, American Express</li>
            <li>Debit Cards: All major banks</li>
            <li>Net Banking</li>
            <li>UPI (Google Pay, PhonePe, Paytm, BHIM, etc.)</li>
            <li>Wallets: Paytm, PhonePe, Amazon Pay</li>
            <li>Cash on Delivery (COD) – Available for select pin codes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Secure Transactions</h2>
          <p>
            Your payment security is our top priority. All transactions are processed through
            encrypted and secure gateways. We do not store your card or payment information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Payment Issues?</h2>
          <p>
            If your transaction failed or payment was deducted but not confirmed, please:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Wait 10–15 minutes and check your order history.</li>
            <li>Check with your bank or payment provider.</li>
            <li>Contact our support team with the transaction ID.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Refunds</h2>
          <p>
            Refunds for cancelled or returned orders are processed within 5–7 business days to your
            original payment method.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Need Assistance?</h2>
          <p>
            For any queries related to payments, please visit our{" "}
            <a href="/contact-us" className="text-blue-500 underline">
              Contact Us
            </a>{" "}
            page or call our helpline at <strong>1800-123-456</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
