import React, { useState } from "react";
import { FaTruck, FaRupeeSign, FaUserTie, FaUndo, FaCalculator, FaHeadphones, FaMoneyCheckAlt, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SellerRegister = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    storeName: "",
    businessType: "",
    gstNumber: "",
    panNumber: "",
    address: "",
    state: "",
    pincode: "",
    accountHolder: "",
    bankAccount: "",
    ifsc: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [showTerms, setShowTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (key !== "agree" && !value.trim()) {
        newErrors[key] = "This field is required";
      }
    });

    if (!form.agree) {
      newErrors.agree = "You must accept the terms";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", form);
      alert("Seller Registered Successfully!");
    }
  };

  const renderInput = (name, placeholder, type = "text") => (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={form[name]}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors[name] && (
        <p className="text-red-600 text-sm mt-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Seller Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {renderInput("fullName", "Full Name")}
            {renderInput("email", "Email", "email")}
            {renderInput("mobile", "Mobile")}
            {renderInput("password", "Password", "password")}
            {renderInput("confirmPassword", "Confirm Password", "password")}
            {renderInput("storeName", "Store Name")}
            {renderInput("businessType", "Business Type")}
            {renderInput("gstNumber", "GST Number")}
            {renderInput("panNumber", "PAN Number")}
            {renderInput("address", "Address")}
            {renderInput("state", "State")}
            {renderInput("pincode", "Pincode")}
            {renderInput("accountHolder", "Account Holder Name")}
            {renderInput("bankAccount", "Bank Account Number")}
            {renderInput("ifsc", "IFSC Code")}
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <span className="text-sm text-gray-700">
              I agree to the{" "}
              <span
                onClick={() => setShowTerms(true)}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Terms and Conditions
              </span>
            </span>
          </div>
          {errors.agree && (
            <p className="text-red-600 text-sm mt-1">{errors.agree}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
          <p className="text-center mt-4 text-sm text-gray-700">
            Already a Seller?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>

          </p>

        </form>
      </div>

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl relative">
            <h3 className="text-lg font-bold mb-2">Terms and Conditions</h3>
            <p className="text-sm text-gray-600 mb-4">
              By registering as a seller, you agree to provide valid business
              information, ensure timely product delivery, maintain product
              quality and customer service, follow platform rules, and accept
              the consequences of violations, including account suspension or
              termination.
            </p>
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
              onClick={() => setShowTerms(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* WHY SELL SECTION */}
      <div className="bg-blue-50 py-10 px-5 mt-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Why Sell on Our Platform?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Sell Across India",
              desc: "Reach over 50 crore+ customers across 27000+ pincodes",
              icon:  <FaTruck className="text-blue-700 text-3xl" />,
            },
            {
              title: "Higher Profits",
              desc: "With 0% commission*, you take 100% profits with you",
              icon: <FaRupeeSign className="text-green-600 text-3xl" />,
            },
            {
              title: "Account Management",
              desc: "Our dedicated managers will help your business grow",
              icon: <FaUserTie className="text-yellow-600 text-3xl" />,
            },
            {
              title: "Lower Return Charges",
              desc: "With flat and low return charges, ship products stress-free",
              icon: <FaUndo className="text-red-600 text-3xl" />,
            },
            {
              title: "Simple Pricing Calculator",
              desc: "Decide the best and most competitive selling price",
              icon: <FaCalculator className="text-purple-600 text-3xl" />,
            },
            {
              title: "24×7 Seller Support",
              desc: "Get all your questions answered by our team",
              icon:  <FaHeadphones className="text-pink-600 text-3xl" />,
            },
            {
              title: "Fast & Regular Payments",
              desc: "Get paid as fast as 7–10 days from dispatch",
              icon: <FaMoneyCheckAlt className="text-indigo-600 text-3xl" />,
            },
            {
              title: "Business on the Go",
              desc: "Manage your store anytime using our seller app",
              icon: <FaMobileAlt className="text-cyan-600 text-3xl" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-xl"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerRegister;
