import React, { useState } from "react";

export default function FeedbackForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-black/30">
      <div className="bg-white w-full max-w-md rounded-[16px] p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-1">What would you like to bring to our attention?</h2>
        <p className="text-sm text-gray-500 mb-4">Kindly fill the details below to submit.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-md border border-gray-300 text-sm"
              placeholder="Enter full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-md border border-gray-300 text-sm"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Feedback type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-md border border-gray-300 text-sm "
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
              className="w-full mt-1 p-3 rounded-md border border-gray-300 text-sm"
              rows={4}
              placeholder="Enter feedback message"
              required
            />
          </div>

          <div className="flex justify-between gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-3 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
            >
              Close
            </button>
            <button
              type="submit"
              className="w-1/2 py-3 rounded-full bg-[#9FDCE1] text-white font-medium hover:bg-[#00483A]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
