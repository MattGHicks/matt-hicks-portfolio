"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

function ChevronRightIcon() {
  return <ChevronRight className="size-6 text-[#0c0805]" />;
}

export default function PortfolioShowcase() {
  return (
    <div className="bg-[#d4ebe8] box-border content-stretch flex flex-col gap-20 items-center justify-start px-16 py-28 relative w-full">
      <div className="content-stretch flex flex-col gap-20 items-start justify-start max-w-[1280px] relative shrink-0 w-full">
        {/* Section Title */}
        <div className="content-stretch flex flex-col gap-4 items-start justify-start max-w-[768px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
            <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
              <p className="leading-[1.5] whitespace-pre">Portfolio</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-6 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full">
            <div 
              className="font-medium relative shrink-0 text-[60px] tracking-[-0.6px] w-full" 
              style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
            >
              <p className="leading-[1.2]">Explore Our Creative Works</p>
            </div>
            <div className="not-italic relative shrink-0 text-[20px] w-full" style={{ fontFamily: "'PT Sans', sans-serif" }}>
              <p className="leading-[1.5]">A collection of our finest design projects.</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="content-stretch flex flex-col gap-16 items-center justify-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
            
            {/* Project 1: Modern Family Home */}
            <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start px-0 py-12 relative shrink-0 w-full border-t border-[rgba(12,8,5,0.02)]">
              <div className="content-stretch flex gap-20 items-start justify-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0">
                  <div className="aspect-[600/450] bg-gradient-to-br from-[#4ECDC4] via-[#FF6B6B] to-[#FFE66D] rounded-2xl shrink-0 w-full relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-lg font-semibold mb-2 opacity-90">Modern Family Home</div>
                        <div className="text-sm opacity-70">3D Architectural Rendering</div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project
                    </div>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0">
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full">
                      <div 
                        className="font-medium min-w-full relative shrink-0 text-[40px] tracking-[-0.4px]" 
                        style={{ width: "min-content", fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
                      >
                        <p className="leading-[1.3]">Modern Family Home</p>
                      </div>
                      <div className="not-italic relative shrink-0 text-[18px] w-[560px]" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                        <p className="leading-[1.5]">A contemporary residence designed for comfort and style.</p>
                      </div>
                    </div>
                    <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full">
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0 border border-[rgba(12,8,5,0.02)]">
                        <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                          <p className="leading-[1.5] whitespace-pre">Residential Design</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0 border border-[rgba(12,8,5,0.02)]">
                        <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                          <p className="leading-[1.5] whitespace-pre">Home Renovation</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0 border border-[rgba(12,8,5,0.02)]">
                        <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                          <p className="leading-[1.5] whitespace-pre">Sustainable Living</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                    <button className="content-stretch flex gap-2 items-center justify-start relative rounded-[100px] shrink-0 group hover:gap-3 transition-all duration-200">
                      <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap group-hover:underline" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                        <p className="leading-[1.5] whitespace-pre">View project</p>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-6 group-hover:translate-x-1 transition-transform duration-200">
                        <ChevronRightIcon />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Urban Community Center */}
            <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start px-0 py-12 relative shrink-0 w-full border-t border-[rgba(12,8,5,0.02)]">
              <div className="content-stretch flex gap-20 items-start justify-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0">
                  <div className="aspect-[600/450] bg-gradient-to-br from-[#FF9A8B] via-[#F6CEEC] to-[#D299C2] rounded-2xl shrink-0 w-full relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-lg font-semibold mb-2 opacity-90">Urban Community Center</div>
                        <div className="text-sm opacity-70">3D Architectural Rendering</div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project
                    </div>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0">
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full">
                      <div 
                        className="font-medium min-w-full relative shrink-0 text-[40px] tracking-[-0.4px]" 
                        style={{ width: "min-content", fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
                      >
                        <p className="leading-[1.3]">Urban Community Center</p>
                      </div>
                      <div className="not-italic relative shrink-0 text-[18px] w-[560px]" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                        <p className="leading-[1.5]">A vibrant space for community gatherings and events.</p>
                      </div>
                    </div>
                    <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full">
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0 border border-[rgba(12,8,5,0.02)]">
                        <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                          <p className="leading-[1.5] whitespace-pre">Community Space</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0 border border-[rgba(12,8,5,0.02)]">
                        <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                          <p className="leading-[1.5] whitespace-pre">Public Art</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0 border border-[rgba(12,8,5,0.02)]">
                        <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                          <p className="leading-[1.5] whitespace-pre">Inclusive Design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                    <button className="content-stretch flex gap-2 items-center justify-start relative rounded-[100px] shrink-0 group hover:gap-3 transition-all duration-200">
                      <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap group-hover:underline" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                        <p className="leading-[1.5] whitespace-pre">View project</p>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-6 group-hover:translate-x-1 transition-transform duration-200">
                        <ChevronRightIcon />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Chic Office Space */}
            <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start px-0 py-12 relative shrink-0 w-full border-t border-[rgba(12,8,5,0.02)]">
              <div className="content-stretch flex gap-20 items-start justify-start relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0">
                  <div className="aspect-[600/450] bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#667eea] rounded-2xl shrink-0 w-full relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-lg font-semibold mb-2 opacity-90">Chic Office Space</div>
                        <div className="text-sm opacity-70">3D Architectural Rendering</div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project
                    </div>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0">
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full">
                      <div 
                        className="font-medium min-w-full relative shrink-0 text-[40px] tracking-[-0.4px]" 
                        style={{ width: "min-content", fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
                      >
                        <p className="leading-[1.3]">Chic Office Space</p>
                      </div>
                      <div className="not-italic relative shrink-0 text-[18px] w-[560px]" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                        <p className="leading-[1.5]">A stylish office designed for productivity and collaboration.</p>
                      </div>
                    </div>
                    <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full">
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0 border border-[rgba(12,8,5,0.02)]">
                        <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                          <p className="leading-[1.5] whitespace-pre">Commercial Design</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0 border border-[rgba(12,8,5,0.02)]">
                        <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                          <p className="leading-[1.5] whitespace-pre">Workplace Innovation</p>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0 border border-[rgba(12,8,5,0.02)]">
                        <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                          <p className="leading-[1.5] whitespace-pre">Modern Aesthetics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                    <button className="content-stretch flex gap-2 items-center justify-start relative rounded-[100px] shrink-0 group hover:gap-3 transition-all duration-200">
                      <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap group-hover:underline" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                        <p className="leading-[1.5] whitespace-pre">View project</p>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-6 group-hover:translate-x-1 transition-transform duration-200">
                        <ChevronRightIcon />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* View All Button */}
          <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0">
            <button className="box-border content-stretch flex gap-2 items-center justify-center px-6 py-2.5 relative rounded-[100px] shrink-0 border border-[rgba(12,8,5,0.02)] hover:bg-[rgba(12,8,5,0.05)] transition-colors duration-200">
              <div className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                <p className="leading-[1.5] whitespace-pre">View all</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}