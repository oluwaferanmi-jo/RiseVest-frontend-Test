import React, { useState, useEffect } from "react";

export default function FeedbackForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { name, email, type, message } = formData;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = name && emailPattern.test(email) && type && message;
    setIsValid(valid);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-black/30 px-4">
      <div
        className="bg-white w-full rounded-[16px] shadow-lg 
                   p-5 sm:p-6 lg:p-4 2xl:p-8 
                   max-w-sm sm:max-w-md md:max-w-md lg:max-w-xl 2xl:max-w-2xl 
                   h-auto lg:h-fit"
      >
        <h2 className="text-base sm:text-lg 2xl:text-xl font-semibold mb-1">
          What would you like to bring to our attention?
        </h2>
        <p className="text-sm 2xl:text-lg text-gray-500 mb-4">
          Kindly fill the details below to submit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 2xl:p-4 rounded-md border border-gray-300 text-base lg:text-sm 2xl:text-lg focus:outline-none"
              placeholder="Enter full name"
              required
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium">Email</label>
            <div className="relative mt-1">
              <img
                src="/message.svg"
                alt="Email Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-70"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10  p-3 2xl:pl-10 rounded-md border border-gray-300 text-base lg:text-sm 2xl:text-lg focus:outline-none"
                placeholder="Enter email"
                required
              />
            </div>
          </div>

          
          <div>
            <label className="block text-sm font-medium">Feedback type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full mt-1 p-3 2xl:p-4 rounded-md border border-gray-300 text-base lg:text-sm 2xl:text-lg focus:outline-none"
              required
            >
              <option value="">Select feedback type</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature request</option>
              <option value="other">Other</option>
            </select>
          </div>

          
          <div>
            <label className="block text-sm font-medium">Feedback message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 2xl:p-4 rounded-md border border-gray-300 text-base lg:text-sm 2xl:text-lg focus:outline-none"
              rows={4}
              placeholder="Enter feedback message"
              required
            />
          </div>

          
          <div className="flex justify-between gap-4 pt-0">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-3 2xl:py-4 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 focus:outline-none"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className={`w-1/2 py-3 2xl:py-4 rounded-full font-medium text-white focus:outline-none ${
                isValid ? "bg-[#006D79]" : "bg-[#9FDCE1] cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
