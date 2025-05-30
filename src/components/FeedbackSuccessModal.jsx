import React from "react";

export default function FeedbackSuccessModal({ onClose }) {
  console.log("FeedbackSuccessModal is rendering"); 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-black/30">
      <div className="bg-white w-full max-w-md rounded-[16px] p-8 shadow-lg text-center">
        
        <div className="text-4xl mb-4">😊</div>

        
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Thank you for your feedback
        </h2>

        
        <p className="text-sm text-gray-500 mb-6">
          We have received your feedback! Our team will attend to it.
        </p>

        
        <button
          onClick={onClose}
          className="px-6 py-3 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
