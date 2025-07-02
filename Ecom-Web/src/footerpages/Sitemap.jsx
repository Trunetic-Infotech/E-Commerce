import React from "react";
import { Link } from "react-router-dom";

export default function Sitemap() {
  const siteLinks = [
    {
      category: "Home",
      links: [{ label: "Home", path: "/" }],
    },
    {
      category: "User",
      links: [
        { label: "Login", path: "/login" },
        { label: "Signup", path: "/signup" },
        { label: "Forgot Password", path: "/forgot-password" },
        { label: "Become a Seller", path: "/seller-register" },
      ],
    },
    {
      category: "Products",
      links: [
        { label: "Clothes", path: "/clothes" },
        { label: "Headphones", path: "/headphone" },
        { label: "Men Footwear", path: "/men-footwear" },
      ],
    },
    {
      category: "Help & Policies",
      links: [
        { label: "FAQ", path: "/faq" },
        { label: "Payments", path: "/payments" },
        { label: "Shipping", path: "/shipping" },
        { label: "Cancellation & Returns", path: "/cancellation-&-returns" },
        { label: "Return Policy", path: "/return-policy" },
        { label: "Privacy", path: "/privacy" },
        { label: "Terms of Use", path: "/terms-of-use" },
        { label: "Security", path: "/security" },
        { label: "Sitemap", path: "/sitemap" },
        { label: "Report Infringement", path: "/report-infringement" },
        { label: "Grievance Redressal", path: "/grievance-redressal" },
      ],
    },
    {
      category: "Company",
      links: [
        { label: "About Us", path: "/about-us" },
        { label: "Contact Us", path: "/contact-us" },
        { label: "Careers", path: "/careers" },
        { label: "Opencart Stories", path: "/opencart-stories" },
        { label: "Press", path: "#" }, // optional placeholder
        { label: "Corporate Information", path: "/corporate-information" },
      ],
    },
    
    {
      category: "Social",
      links: [
        { label: "Facebook", path: "/facebook" },
        { label: "Twitter", path: "/twitter" },
        { label: "YouTube", path: "/youtube" },
        { label: "Instagram", path: "/instagram" },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Sitemap</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteLinks.map((section, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold mb-2 text-gray-900">
              {section.category}
            </h2>
            <ul className="space-y-1 text-sm">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-blue-600 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
