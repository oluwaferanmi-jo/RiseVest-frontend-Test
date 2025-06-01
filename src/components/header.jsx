import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function Header({ onSearchChange }) {
  const [query, setQuery] = useState("");
  const [showMobileInput, setShowMobileInput] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearchChange(value);
  };

  const handleClear = () => {
    setQuery("");
    onSearchChange("");
  };

  const handleBlur = () => {
    if (!query.trim()) {
      setShowMobileInput(false);
    }
  };

  return (
    <header className="w-full flex items-center justify-between px-[20px] md:px-[40px] 2xl:px-[60px] py-[16px] md:py-[24px] h-[60px] md:h-[100px] bg-white border-b border-gray-200">

      <img
        src="/Logo.svg"
        alt="Rise Logo"
        className="h-[24px] md:h-[32px] w-auto"
      />

      
      <div className="hidden sm:block relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search feedback..."
          className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none w-[220px] pr-8"
        />
        {query && (
          <FiX
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            size={16}
          />
        )}
      </div>

      
      <div className="sm:hidden relative">
        {showMobileInput ? (
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Search feedbacks..."
              autoFocus
              className="border border-gray-300 rounded-full px-3 py-1 pr-8 text-[16px] focus:outline-none transition-all duration-200"
            />
            {query && (
              <FiX
                onClick={handleClear}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                size={16}
              />
            )}
          </div>
        ) : (
          <button
            onClick={() => setShowMobileInput(true)}
            className="p-2 border border-gray-300 rounded-full text-gray-600"
          >
            <FiSearch size={18} />
          </button>
        )}
      </div>
    </header>
  );
}
