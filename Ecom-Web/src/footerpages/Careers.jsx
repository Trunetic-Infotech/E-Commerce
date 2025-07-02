import React from "react";

export default function Careers() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Careers at Opencart</h1>

      <p className="text-gray-700 text-lg mb-8">
        We’re building the future of e-commerce — and we want you to be part of it. At Opencart, we believe in innovation, collaboration, and growth. If you're passionate, driven, and eager to make an impact, explore our open positions and join our team.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Work With Us?</h2>
      <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
        <li>Work with a passionate, creative, and supportive team</li>
        <li>Flexible and hybrid work opportunities</li>
        <li>Opportunities for learning and growth</li>
        <li>Employee-first policies and a people-driven culture</li>
        <li>Competitive compensation and benefits</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Open Positions</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Frontend Developer</h3>
          <p className="text-gray-700 mb-2">Experience: 1-3 years | Location: Remote</p>
          <p className="text-gray-600 text-sm mb-4">We’re looking for a skilled React developer with experience in building responsive and performant UIs.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Apply Now
          </button>
        </div>

        <div className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Graphic Designer</h3>
          <p className="text-gray-700 mb-2">Experience: 0-2 years | Location: Bengaluru</p>
          <p className="text-gray-600 text-sm mb-4">Creative designer needed to work on product visuals, marketing banners, and social media content.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Apply Now
          </button>
        </div>

        {/* Add more positions similarly */}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">Don’t See a Role for You?</h2>
      <p className="text-gray-700 mb-2">
        We’re always looking for talented people! If you don’t see a position that matches your profile, send us your resume at{" "}
        <a href="mailto:careers@opencart.com" className="text-blue-500 underline">careers@opencart.com</a>
      </p>
    </div>
  );
}
