import React from "react";

export default function FeedbackControls({ currentFilter, setFilter, onOpenForm }) {
  const filters = [
    { label: "All feedbacks", value: "all" },
    { label: "Bugs only", value: "bug" },
    { label: "Feature requests", value: "feature" },
    { label: "Others only", value: "other" }, 
  ];

  return (
    <div className="px-[20px] py-[24px] md:px-[40px] 2xl:px-[60px] w-full flex flex-wrap justify-between items-center gap-4">
      <div className="flex gap-3 flex-wrap">
        {filters.map((filter) => {
          const isActive = currentFilter === filter.value;

          return (
            <button
              key={filter.value}
              onClick={() => setFilter(filter.value)}
              className={`px-2 py-[2px] rounded-[6px] w-[134px] h-[32px] text-sm font-medium border transition-colors ${
                isActive
                  ? "bg-[#EDFFFF] text-[#006D79] border-transparent"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <button
        onClick={onOpenForm}
        className="flex items-center w-[244px] h-[52px] gap-2 px-8 py-3 bg-[#006D79] text-white font-medium text-sm rounded-full hover:bg-[#1e4045] transition-colors"
      >
        <span className="text-xl leading-none">+</span> Submit new feedback
      </button>
    </div>
  );
}
