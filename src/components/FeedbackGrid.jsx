import React from "react";
import FeedbackCard from "./FeedbackCard";

export default function FeedbackGrid({ feedbackList, currentFilter }) {
  const filtered = feedbackList.filter(item => {
    if (currentFilter === "all") return true;
    return item.type === currentFilter;
  });

  return (
<div className="px-[16px] sm:px-[24px] md:px-[40px] lg:px-[46px] pb-[32px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {filtered.map((feedback, index) => (
        <FeedbackCard key={index} data={feedback} />
      ))}
    </div>
  );
}
