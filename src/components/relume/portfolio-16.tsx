"use client";

import React from "react";
import { ChevronRight as ChevronRightIcon } from "lucide-react";

const imgPlaceholderImage3 = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=450&fit=crop&crop=center";
const imgPlaceholderImage4 = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop&crop=center";
const imgPlaceholderImage5 = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=450&fit=crop&crop=center";

function ChevronRight() {
  return (
    <ChevronRightIcon className="size-6 text-current" />
  );
}

export function Portfolio16() {
  return (
    <div className="bg-[#d4ebe8] box-border content-stretch flex flex-col gap-20 items-center justify-start overflow-clip px-16 py-28 relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-20 items-start justify-start max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-4 items-start justify-start max-w-[768px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
            <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap">
              <p className="leading-[1.5] whitespace-pre">Portfolio</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-6 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full">
            <div className="font-['Anybody'] font-medium relative shrink-0 text-[60px] tracking-[-0.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[1.2]">Explore Our Creative Works</p>
            </div>
            <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[20px] w-full">
              <p className="leading-[1.5]">A collection of our finest design projects.</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-16 items-center justify-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start px-0 py-12 relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex gap-20 items-start justify-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0">
                  <div className="aspect-[600/450] bg-center bg-cover bg-no-repeat rounded-2xl shrink-0 w-full" style={{ backgroundImage: `url('${imgPlaceholderImage3}')` }} />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0">
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full">
                      <div className="font-['Anybody'] font-medium min-w-full relative shrink-0 text-[40px] tracking-[-0.4px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[1.3]">Modern Family Home</p>
                      </div>
                      <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[18px] w-[560px]">
                        <p className="leading-[1.5]">A contemporary residence designed for comfort and style.</p>
                      </div>
                    </div>
                    <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full">
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0">
                        <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                        <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap">
                          <p className="leading-[1.5] whitespace-pre">Residential Design</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0">
                        <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                        <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap">
                          <p className="leading-[1.5] whitespace-pre">Home Renovation</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0">
                        <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                        <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap">
                          <p className="leading-[1.5] whitespace-pre">Sustainable Living</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-2 items-center justify-center relative rounded-[100px] shrink-0">
                      <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                        <p className="leading-[1.5] whitespace-pre">View project</p>
                      </div>
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start px-0 py-12 relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex gap-20 items-start justify-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0">
                  <div className="aspect-[600/450] bg-center bg-cover bg-no-repeat rounded-2xl shrink-0 w-full" style={{ backgroundImage: `url('${imgPlaceholderImage4}')` }} />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0">
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full">
                      <div className="font-['Anybody'] font-medium min-w-full relative shrink-0 text-[40px] tracking-[-0.4px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[1.3]">Urban Community Center</p>
                      </div>
                      <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[18px] w-[560px]">
                        <p className="leading-[1.5]">A vibrant space for community gatherings and events.</p>
                      </div>
                    </div>
                    <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full">
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0">
                        <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                        <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap">
                          <p className="leading-[1.5] whitespace-pre">Community Space</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0">
                        <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                        <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap">
                          <p className="leading-[1.5] whitespace-pre">Public Art</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0">
                        <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                        <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap">
                          <p className="leading-[1.5] whitespace-pre">Inclusive Design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-2 items-center justify-center relative rounded-[100px] shrink-0">
                      <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                        <p className="leading-[1.5] whitespace-pre">View project</p>
                      </div>
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start px-0 py-12 relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex gap-20 items-start justify-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0">
                  <div className="aspect-[600/450] bg-center bg-cover bg-no-repeat rounded-2xl shrink-0 w-full" style={{ backgroundImage: `url('${imgPlaceholderImage5}')` }} />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0">
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full">
                      <div className="font-['Anybody'] font-medium min-w-full relative shrink-0 text-[40px] tracking-[-0.4px]" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[1.3]">Chic Office Space</p>
                      </div>
                      <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[18px] w-[560px]">
                        <p className="leading-[1.5]">A stylish office designed for productivity and collaboration.</p>
                      </div>
                    </div>
                    <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full">
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0">
                        <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                        <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap">
                          <p className="leading-[1.5] whitespace-pre">Commercial Design</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0">
                        <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                        <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap">
                          <p className="leading-[1.5] whitespace-pre">Workplace Innovation</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0">
                        <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
                        <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap">
                          <p className="leading-[1.5] whitespace-pre">Modern Aesthetics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-2 items-center justify-center relative rounded-[100px] shrink-0">
                      <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                        <p className="leading-[1.5] whitespace-pre">View project</p>
                      </div>
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0">
            <div className="box-border content-stretch flex gap-2 items-center justify-center px-6 py-2.5 relative rounded-[100px] shrink-0">
              <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
              <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                <p className="leading-[1.5] whitespace-pre">View all</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}