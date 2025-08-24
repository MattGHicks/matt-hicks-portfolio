"use client";

import React from "react";

const imgPlaceholderImage = "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=790&fit=crop&crop=center";
const imgPlaceholderImage1 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=384&h=384&fit=crop&crop=center";
const imgPlaceholderImage2 = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=384&h=576&fit=crop&crop=center";

export function Header136() {
  return (
    <div className="bg-[#d4ebe8] box-border content-stretch flex flex-col gap-20 items-center justify-start overflow-clip px-16 py-28 relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-20 items-center justify-start max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-8 items-center justify-start max-w-[768px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-6 items-center justify-start leading-[0] relative shrink-0 text-[#0c0805] text-center w-full">
            <div className="font-['Anybody'] font-medium relative shrink-0 text-[84px] tracking-[-0.84px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[1.1]">Transforming Ideas into Stunning Digital Experiences</p>
            </div>
            <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[20px] w-full">
              <p className="leading-[1.5]">At DigitalFish, we specialize in crafting intuitive UI/UX designs that elevate your brand. Explore our portfolio to see how we can bring your vision to life.</p>
            </div>
          </div>
          <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0">
            <div className="bg-[#103E39] box-border content-stretch flex gap-2 items-center justify-center px-6 py-2.5 relative rounded-[100px] shrink-0">
              <div aria-hidden="true" className="absolute border border-[#103E39] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
              <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap">
                <p className="leading-[1.5] whitespace-pre">Learn More</p>
              </div>
            </div>
            <div className="box-border content-stretch flex gap-2 items-center justify-center px-6 py-2.5 relative rounded-[100px] shrink-0">
              <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
              <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                <p className="leading-[1.5] whitespace-pre">Sign Up</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[854px] relative shrink-0 w-full">
          <div className="absolute bg-center bg-cover bg-no-repeat h-[790px] left-32 right-32 rounded-2xl top-0" style={{ backgroundImage: `url('${imgPlaceholderImage}')` }} />
          <div className="absolute bg-center bg-cover bg-no-repeat bottom-32 left-0 rounded-2xl size-96" style={{ backgroundImage: `url('${imgPlaceholderImage1}')` }} />
          <div className="absolute bg-center bg-cover bg-no-repeat h-[576px] right-0 rounded-2xl top-[278px] w-96" style={{ backgroundImage: `url('${imgPlaceholderImage2}')` }} />
        </div>
      </div>
    </div>
  );
}