"use client";

import React from "react";

const imgLogoWide2 = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop&crop=center";
const imgChevronDown = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E";

function CompanyLogo({ alternate = "False" }: { alternate?: "False" | "True" }) {
  return (
    <div className="relative size-full">
      <div className="absolute h-9 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[70px]" style={{ left: "calc(50% - 0.333px)" }}>
        <img alt="Company Logo" className="block max-w-none size-full" src={imgLogoWide2} />
      </div>
    </div>
  );
}

export function Navbar11() {
  return (
    <div className="bg-[#d4ebe8] content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
      <div className="box-border content-stretch flex h-[72px] items-center justify-between px-16 py-0 relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0">
            <div className="h-9 overflow-clip relative shrink-0 w-[84px]">
              <CompanyLogo />
            </div>
          </div>
          <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0">
            <div className="content-stretch flex gap-8 items-center justify-start relative shrink-0">
              <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                <p className="leading-[1.5] whitespace-pre">Home Design</p>
              </div>
              <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                <p className="leading-[1.5] whitespace-pre">About Us</p>
              </div>
              <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                <p className="leading-[1.5] whitespace-pre">Projects</p>
              </div>
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[94px]">
                <div className="content-stretch flex gap-1 items-center justify-center relative shrink-0 w-full">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">More Links</p>
                  </div>
                  <div className="relative shrink-0 size-6">
                    <img alt="Chevron Down" className="block max-w-none size-full" src={imgChevronDown} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0">
              <div className="box-border content-stretch flex gap-2 items-center justify-center px-5 py-2 relative rounded-[100px] shrink-0">
                <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
                <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                  <p className="leading-[1.5] whitespace-pre">Join</p>
                </div>
              </div>
              <div className="bg-[#103E39] box-border content-stretch flex gap-2 items-center justify-center px-5 py-2 relative rounded-[100px] shrink-0">
                <div aria-hidden="true" className="absolute border border-[#103E39] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
                <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap">
                  <p className="leading-[1.5] whitespace-pre">Start</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}