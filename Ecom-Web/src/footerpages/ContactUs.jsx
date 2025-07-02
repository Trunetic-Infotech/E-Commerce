import React from "react";

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-10 rounded-lg">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        We'd love to hear from you! Whether you have a question about your order,
        our products, or just want to say hello — feel free to reach out.
      </p>

      <form className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="How can we help you?"
            className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
