import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const footerLinks = [
    {
      title: "About",
      links: [
        "Contact Us",
        "About Us",
        "Careers",
        "Opencart Stories",
        "Press",
        "Corporate Information",
      ],
    },
    {
      title: "Help",
      links: [
        "Payments",
        "Shipping",
        "Cancellation & Returns",
        "FAQ",
        "Report Infringement",
      ],
    },
    {
      title: "Consumer Policy",
      links: [
        "Return Policy",
        "Terms Of Use",
        "Security",
        "Privacy",
        "Sitemap",
        "Grievance Redressal",
      ],
    },
    {
      title: "Social",
      links: ["Facebook", "Twitter", "YouTube", "Instagram"],
    },
  ];

  // Helper to convert link text to route paths
  const generatePath = (linkText) => {
  const overrides = {
    "Cancellation & Returns": "/cancellation-&-returns",
    "Return Policy": "/return-policy", 
    "About Us": "/about-us",
    "Contact Us": "/contact-us",
    "Terms Of Use": "/terms-of-use",
    "Corporate Information": "/corporate-information",
    "Report Infringement": "/report-infringement",
    "Opencart Stories": "/opencart-stories",
  };

  return overrides[linkText] || "/" + linkText.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");
};


  return (
    <footer className="bg-[#1e1e1e] text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Link Columns */}
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-[#facc15] font-semibold mb-3 text-sm uppercase">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={generatePath(link)}
                      className="text-gray-300 hover:text-white text-sm transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Address Info */}
        <div className="md:col-span-2 flex flex-col gap-6 text-sm">
          <div>
            <h3 className="text-[#facc15] font-semibold mb-2">Mail Us:</h3>
            <address className="not-italic leading-relaxed text-gray-300">
              Flipkart Internet Private Limited, <br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village, <br />
              Outer Ring Road, Devarabeesanahalli Village, <br />
              Bengaluru, 560103, Karnataka, India
            </address>
          </div>

          <div>
            <h3 className="text-[#facc15] font-semibold mb-2">
              Registered Office Address:
            </h3>
            <address className="not-italic leading-relaxed text-gray-300">
              Flipkart Internet Private Limited, <br />
              CIN: U51109KA2012PTC066107 <br />
              Telephone:{" "}
              <a href="tel:044-45614700" className="text-blue-400">
                044-45614700
              </a>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
