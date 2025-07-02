import React from "react";

export default function ReportInfringement() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Report Infringement
      </h1>

      <section className="space-y-6 text-md leading-relaxed">
        <div>
          <p>
            We at <strong>Opencart</strong> are committed to protecting intellectual property rights. If you believe your copyrighted work or trademark has been infringed upon by content or a product on our platform, please report it to us using the procedure below.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            How to Report a Violation
          </h2>
          <p>
            To report a product, listing, or content that you believe violates your intellectual property rights, please email us at{" "}
            <a href="mailto:legal@opencart.com" className="text-blue-500 underline">
              legal@opencart.com
            </a>{" "}
            with the following details:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Your full name and contact information</li>
            <li>The name and description of the infringed item</li>
            <li>URL(s) of the infringing content or product</li>
            <li>Proof of ownership or legal rights</li>
            <li>A declaration stating your complaint is true and made in good faith</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Important Notes</h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              Submitting false claims of infringement may result in legal consequences.
            </li>
            <li>
              We respond only to genuine complaints backed with valid legal documents or proof.
            </li>
            <li>
              Our team will investigate and take appropriate action, including removing the content or suspending the seller.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            Legal Department – Opencart Internet Pvt. Ltd.
            <br />
            Email:{" "}
            <a href="mailto:legal@opencart.com" className="text-blue-500 underline">
              legal@opencart.com
            </a>
            <br />
            Phone: <strong>1800-987-654</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
