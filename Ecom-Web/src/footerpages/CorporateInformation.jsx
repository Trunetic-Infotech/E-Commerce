import React from "react";

export default function CorporateInformation() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Corporate Information
      </h1>

      <section className="space-y-6 text-md leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">Company Name</h2>
          <p>Opencart Internet Private Limited</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Corporate Identity Number (CIN)</h2>
          <p>U51109KA2012PTC066107</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Registered Office Address</h2>
          <address className="not-italic text-gray-700">
            Buildings Alyssa, Begonia & Clove Embassy Tech Village, <br />
            Outer Ring Road, Devarabeesanahalli Village, <br />
            Bengaluru, 560103, Karnataka, India
          </address>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Customer Care</h2>
          <p>
            Telephone:{" "}
            <a href="tel:044-45614700" className="text-blue-500 underline">
              044-45614700
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:support@opencart.com" className="text-blue-500 underline">
              support@opencart.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Legal Disclaimer</h2>
          <p>
            All corporate information displayed here is for general informational purposes only. For any legal concerns or inquiries, please contact us directly.
          </p>
        </div>
      </section>
    </div>
  );
}
