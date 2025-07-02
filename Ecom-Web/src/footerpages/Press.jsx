import React from "react";

export default function Press() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Press & Media</h1>
      <p className="mb-4">
        Welcome to the Opencart Press page. Here you’ll find our latest press releases,
        media coverage, and resources for journalists.
      </p>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Press Releases</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Opencart launches seller dashboard – July 2025</li>
            <li>Partnership with XYZ Logistics – May 2025</li>
            <li>Reached 1 million users milestone – March 2025</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Media Contact</h2>
          <p>
            For press inquiries, please contact us at{" "}
            <a href="mailto:press@opencart.com" className="text-blue-500 underline">
              press@opencart.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
