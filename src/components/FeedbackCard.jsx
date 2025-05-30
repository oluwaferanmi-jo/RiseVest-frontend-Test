import React from "react";

export default function FeedbackCard({ data }) {
  const { name, email, phone, message, type } = data;
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const typeLabel = {
    bug: "Bugs",
    feature: "Features",
    other: "Others",
  };

  const badgeColors = {
    bug: "bg-red-100 text-red-500",
    feature: "bg-yellow-100 text-yellow-500",
    other: "bg-gray-100 text-gray-500",
  };

  const tagColor = badgeColors[type] || "bg-gray-100 text-gray-500";

  return (
    <div className="border border-gray-200 p-4 rounded-[12px] bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${tagColor}`}>
            {initials}
          </div>
          <div className="text-sm font-semibold text-gray-800">{name}</div>
        </div>

        <div className="mt-3 text-sm text-gray-600">{email}

        </div>
        <div className="text-sm text-gray-600">{phone}

        </div>

        <div className="mt-4 text-sm font-semibold text-gray-800">{typeLabel[type]}
          
        </div>
        <p className="text-sm text-gray-700 mt-1">{message}</p>
      </div>
  );
}
