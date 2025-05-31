import React from "react";

export default function FeedbackSuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-black/30 px-4">
      <div className="w-full max-w-md rounded-[16px] overflow-hidden shadow-lg">
        
        
        <div className="bg-gray-100 px-6 pt-8 pb-4 text-center">
          <img
            src="/Smiley.svg"
            alt="Success"
            className="mx-auto mb-4 w-10 h-10"
          />

          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Thank you for your feedback
          </h2>

          <p className="text-sm text-gray-500">
            We have received your feedback! Our team will attend to it.
          </p>
        </div>

        
        <div className=" bg-white px-6 py-4 text-center shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
          <button
            onClick={onClose}
            className="w-[270px] h-[52px] md:w-[346px] md:h-[52px] lg:w-[346px] lg:h-[52px] py-3 rounded-full bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
