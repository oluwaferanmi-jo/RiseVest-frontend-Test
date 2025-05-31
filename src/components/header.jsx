import React from "react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-[40px] py-[24px] h-[100px] bg-white border-b border-gray-200">
      
      <img
        src="/Logo.svg"
        alt="Rise Logo"
        className="h-[32px] w-auto"
      />

    </header>
  );
}
