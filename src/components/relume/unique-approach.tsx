"use client";

import React from "react";
import { ArrowRight, Palette, Code, Users, Zap } from "lucide-react";

// Service icons - we'll use different ones for variety
const serviceIcons = [Palette, Code, Users, Zap];

export function UniqueApproach() {
  return (
    <div className="bg-[#103e39] box-border content-stretch flex flex-col gap-20 items-center justify-start overflow-clip px-16 py-28 relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-20 items-start justify-start max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-20 items-start justify-start relative shrink-0 w-full">
          <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-start relative shrink-0">
                <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-nowrap">
                  <p className="leading-[1.5] whitespace-pre">Design</p>
                </div>
              </div>
              <div className="font-['Anybody'] font-medium leading-[0] min-w-full relative shrink-0 text-[#ffffff] text-[60px] tracking-[-0.6px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.2]">Our Unique Approach to Design and Collaboration</p>
              </div>
            </div>
            <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0">
              <div className="relative rounded-[100px] shrink-0">
                <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-6 py-2.5 relative">
                  <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Learn More</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.04)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
              </div>
              <div className="content-stretch flex gap-2 items-center justify-center overflow-clip relative rounded-[100px] shrink-0">
                <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap">
                  <p className="leading-[1.5] whitespace-pre">Sign Up</p>
                </div>
                <ArrowRight className="size-6 text-white" />
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px relative shrink-0">
            <div className="content-stretch flex gap-10 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-12 flex items-center justify-center">
                  <Palette className="size-8 text-white" />
                </div>
                <div className="flex h-[100px] items-center justify-center relative shrink-0 w-[0px]">
                  <div className="flex-none rotate-[90deg]">
                    <div className="h-0.5 relative w-[100px] bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff]">
                <div className="font-['Anybody'] font-medium relative shrink-0 text-[26px] tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[1.4]">Our Methodology</p>
                </div>
                <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[18px] w-full">
                  <p className="leading-[1.5]">We prioritize user-centered design, ensuring every project meets client needs and expectations.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-10 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-12 flex items-center justify-center">
                  <Code className="size-8 text-white" />
                </div>
                <div className="flex h-[100px] items-center justify-center relative shrink-0 w-[0px]">
                  <div className="flex-none rotate-[90deg]">
                    <div className="h-0.5 relative w-[100px] bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff]">
                <div className="font-['Anybody'] font-medium relative shrink-0 text-[26px] tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[1.4]">Tools & Technologies</p>
                </div>
                <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[18px] w-full">
                  <p className="leading-[1.5]">Utilizing Figma, Next.js, and modern design tools to streamline the creative process.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-10 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-12 flex items-center justify-center">
                  <Users className="size-8 text-white" />
                </div>
                <div className="flex h-[100px] items-center justify-center relative shrink-0 w-[0px]">
                  <div className="flex-none rotate-[90deg]">
                    <div className="h-0.5 relative w-[100px] bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff]">
                <div className="font-['Anybody'] font-medium relative shrink-0 text-[26px] tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[1.4]">Client Collaboration</p>
                </div>
                <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[18px] w-full">
                  <p className="leading-[1.5]">We work closely with clients, ensuring transparency and communication throughout the design process.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-10 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-12 flex items-center justify-center">
                  <Zap className="size-8 text-white" />
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff]">
                <div className="font-['Anybody'] font-medium relative shrink-0 text-[26px] tracking-[-0.26px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[1.4]">Continuous Improvement</p>
                </div>
                <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[18px] w-full">
                  <p className="leading-[1.5]">Feedback is integral; we adapt our designs based on client insights and project developments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}