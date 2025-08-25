"use client";

import React from "react";

// Image assets - using high-quality placeholder
const imgPlaceholderImage = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=640&fit=crop&crop=center";
const img = "http://localhost:3845/assets/e4511a196e681bc4727fa4d4bbe49e8189598849.svg";

export default function AboutSection() {
  return (
    <div id="about-section" className="bg-[#ffffff] box-border content-stretch flex flex-col gap-12 lg:gap-20 items-center justify-start px-5 lg:px-16 py-16 lg:py-28 relative size-full">
      <div className="content-stretch flex flex-col gap-12 lg:gap-20 items-start justify-start max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-start relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-start relative">
            <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-start relative shrink-0">
                  <div className="leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap font-bold" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                    <p className="leading-[1.5] whitespace-pre">Innovate</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-6 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full">
                  <div 
                    className="font-medium relative shrink-0 text-[44px] lg:text-[60px] tracking-[-0.44px] lg:tracking-[-0.6px] w-full" 
                    style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[1.2]">
                      {"Crafting Experiences Through Design and Creativity".split(" ").map((word, index) => (
                        <span
                          key={index}
                          className="inline-block mr-3 cursor-pointer transition-all duration-200 hover:text-[#103E39] hover:scale-105"
                        >
                          {word}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div className="not-italic relative shrink-0 text-[14px] lg:text-[20px] w-full" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                    <p className="leading-[1.5]">Matt Hicks combines his passion for design with a commitment to user experience. His dual-brand approach allows him to deliver tailored solutions for both professional and personal projects.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col lg:flex-row gap-6 items-start justify-start px-0 py-2 relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] relative text-[#0c0805] p-4 rounded-2xl hover:bg-[#d4ebe8] transition-colors duration-300 cursor-pointer">
                    <div className="font-medium relative shrink-0 text-[18px] lg:text-[26px] tracking-[-0.18px] lg:tracking-[-0.26px] w-full" style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.4]">Dual Brand</p>
                    </div>
                    <div className="not-italic relative shrink-0 text-[14px] lg:text-[18px] w-full" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                      <p className="leading-[1.5]">DigitalFish offers professional design services that elevate your brand's digital presence.</p>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] relative text-[#0c0805] p-4 rounded-2xl hover:bg-[#d4ebe8] transition-colors duration-300 cursor-pointer">
                    <div className="font-medium relative shrink-0 text-[18px] lg:text-[26px] tracking-[-0.18px] lg:tracking-[-0.26px] w-full" style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.4]">Core Values</p>
                    </div>
                    <div className="not-italic relative shrink-0 text-[14px] lg:text-[18px] w-full" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                      <p className="leading-[1.5]">We prioritize creativity, collaboration, and client satisfaction in every project we undertake.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0">
              <div className="relative rounded-[100px] shrink-0">
                <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-6 py-2.5 relative">
                  <div className="leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap font-bold" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                    <p className="leading-[1.5] whitespace-pre">Learn More</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
              </div>
              <div className="content-stretch flex gap-2 items-center justify-center overflow-clip relative rounded-[100px] shrink-0">
                <div className="font-['PT_Sans:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                  <p className="leading-[1.5] whitespace-pre">Sign Up</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-6">
                  <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]">
                    <img alt="" className="block max-w-none size-full" src={img} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-[335/348] lg:aspect-[600/640] basis-0 bg-center bg-cover bg-no-repeat grow rounded-2xl w-full lg:w-auto" style={{ backgroundImage: `url('${imgPlaceholderImage}')` }} />
        </div>
      </div>
    </div>
  );
}