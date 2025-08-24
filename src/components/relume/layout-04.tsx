"use client";

import React from "react";

const imgPlaceholderImage = "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=640&fit=crop&crop=center";
const img = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='m9 18 6-6-6-6'/%3E%3C/svg%3E";

function ChevronRight() {
  return (
    <div className="overflow-clip relative shrink-0 size-6">
      <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]">
        <img alt="Chevron Right" className="block max-w-none size-full" src={img} />
      </div>
    </div>
  );
}

export function Layout4() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-20 items-center justify-start overflow-clip px-16 py-28 relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-20 items-start justify-start max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-20 items-center justify-start relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-start relative shrink-0">
                  <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Innovate</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-6 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full">
                  <div className="font-['Anybody'] font-medium relative shrink-0 text-[60px] tracking-[-0.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.2]">Crafting Experiences Through Design and Creativity</p>
                  </div>
                  <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[20px] w-full">
                    <p className="leading-[1.5]">Matt Hicks combines his passion for design with a commitment to user experience. His dual-brand approach allows him to deliver tailored solutions for both professional and personal projects.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-6 items-start justify-start px-0 py-2 relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#0c0805]">
                    <div className="font-['Anybody'] font-medium relative shrink-0 text-[26px] tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.4]">Dual Brand</p>
                    </div>
                    <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[18px] w-full">
                      <p className="leading-[1.5]">DigitalFish offers professional design services that elevate your brand&apos;s digital presence.</p>
                    </div>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#0c0805]">
                    <div className="font-['Anybody'] font-medium relative shrink-0 text-[26px] tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.4]">Core Values</p>
                    </div>
                    <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[18px] w-full">
                      <p className="leading-[1.5]">We prioritize creativity, collaboration, and client satisfaction in every project we undertake.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0">
              <div className="relative rounded-[100px] shrink-0">
                <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-6 py-2.5 relative">
                  <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Learn More</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
              </div>
              <div className="content-stretch flex gap-2 items-center justify-center overflow-clip relative rounded-[100px] shrink-0">
                <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                  <p className="leading-[1.5] whitespace-pre">Sign Up</p>
                </div>
                <ChevronRight />
              </div>
            </div>
          </div>
          <div className="aspect-[600/640] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px rounded-2xl shrink-0" style={{ backgroundImage: `url('${imgPlaceholderImage}')` }} />
        </div>
      </div>
    </div>
  );
}