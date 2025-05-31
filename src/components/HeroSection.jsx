import React from "react";

export default function HeroSection() {
  return (
    <section className="px-[20px] pt-[40px] md:px-[40px] flex flex-col lg:flex-row  items-start lg:items-center gap-6">
     
      <div>
        <h2 className="text-[28px] font-semibold text-black leading-tight">
          Got a complaint or feedback?
        </h2>

        <div className="flex items-center mt-3">
          
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/thumb/lego/${i}.jpg`}
                alt="avatar"
                className="w-7 h-7 rounded-full border-[2px] border-white"
              />
            ))}
          </div>

          
          <p className="text-sm text-gray-500 ml-3">
            Our support team is ready to listen and resolve.
          </p>
        </div>
      </div>

      
     
    </section>
  );
}
