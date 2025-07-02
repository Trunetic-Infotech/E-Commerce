import React from "react";

export default function GrievanceRedressal() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Grievance Redressal
      </h1>

      <section className="space-y-6 text-md leading-relaxed">
        <p>
          At <strong>Opencart</strong>, we are committed to providing a
          seamless shopping experience and addressing any concerns or issues
          that may arise. If you have a grievance or complaint, we have
          established a transparent and efficient redressal mechanism.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. How to Raise a Grievance
          </h2>
          <p>You can raise a grievance through any of the following ways:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Email us at:{" "}
              <a href="mailto:grievance@opencart.com" className="text-blue-600 underline">
                grievance@opencart.com
              </a>
            </li>
            <li>
              Call our Grievance Officer:{" "}
              <a href="tel:+911800123456" className="text-blue-600 underline">
                1800-123-456
              </a>
            </li>
            <li>Submit a ticket through the Help section in your account.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. Grievance Officer Contact Details
          </h2>
          <p>
            <strong>Mr. </strong> <br />
            Grievance Officer, Opencart Internet Pvt. Ltd. <br />
            Embassy Tech Village, Outer Ring Road, <br />
            Bengaluru, Karnataka - 560103, India <br />
            Email:{" "}
            <a href="mailto:grievance@opencart.com" className="text-blue-600 underline">
              grievance@opencart.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. Response Time
          </h2>
          <p>
            We aim to acknowledge your grievance within 48 hours and resolve it
            within 7 working days, depending on the complexity of the issue.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Escalation</h2>
          <p>
            If you are not satisfied with the resolution, you may escalate your
            grievance to our senior management by replying to the email thread
            or mentioning it during the call with our officer.
          </p>
        </div>

        <div>
          <p className="mt-4">
            We value your feedback and take all complaints seriously. Thank you
            for helping us improve.
          </p>
        </div>
      </section>
    </div>
  );
}
