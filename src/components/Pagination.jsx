import React from "react";

export default function Pagination({ currentPage, totalPages, onPrev, onNext }) {
  if (totalPages === 0) return null; 

  return (
    <div className="flex justify-between mb-6 items-center px-6 py-4 pt-10 text-sm text-gray-600">
      <span>Page {currentPage} of {totalPages}</span>
      <div className="space-x-2">
        <button
          onClick={onPrev}
          disabled={currentPage === 1}
          className="px-3 py-1 w-8 h-8 border rounded-full disabled:opacity-40"
        >
          {"<"}
        </button>
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 w-8 h-8 border rounded-full disabled:opacity-40"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
