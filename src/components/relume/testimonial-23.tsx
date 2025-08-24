"use client";

import React from "react";
import { ChevronRight as ChevronRightIcon, ChevronLeft as ChevronLeftIcon } from "lucide-react";

const img3 = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=48&fit=crop&crop=center";
const img4 = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=48&fit=crop&crop=center";
const imgAvatarImage = "https://images.unsplash.com/photo-1494790108755-2616b612b7c5?w=48&h=48&fit=crop&crop=face";
const imgAvatarImage1 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face";
const imgAvatarImage2 = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face";
const imgAvatarImage3 = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face";
const imgAvatarImage4 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face";
const imgAvatarImage5 = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=48&h=48&fit=crop&crop=face";
const imgDot = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' fill='%23103E39'%3E%3Ccircle cx='4' cy='4' r='4'/%3E%3C/svg%3E";
const imgDot1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' fill='%23cccccc'%3E%3Ccircle cx='4' cy='4' r='4'/%3E%3C/svg%3E";

function ChevronRight() {
  return (
    <ChevronRightIcon className="size-6 text-current" />
  );
}

function ArrowBack() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[17.44%_16.02%_17.46%_17.44%]">
        <ChevronLeftIcon className="size-full text-current" />
      </div>
    </div>
  );
}

function ArrowForward() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[17.46%_17.44%_17.44%_16.04%]">
        <ChevronRightIcon className="size-full text-current" />
      </div>
    </div>
  );
}

export function Testimonial23() {
  return (
    <div className="bg-[#d4ebe8] box-border content-stretch flex flex-col gap-20 items-center justify-start overflow-clip px-16 py-28 relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-20 items-center justify-start max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-6 items-center justify-start leading-[0] max-w-[768px] relative shrink-0 text-[#0c0805] text-center w-full">
          <div className="font-['Anybody'] font-medium relative shrink-0 text-[60px] tracking-[-0.6px] w-[560px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">Customer Testimonials</p>
          </div>
          <div className="font-['PT_Sans'] not-italic relative shrink-0 text-[20px] w-[560px]">
            <p className="leading-[1.5]">Transformative design that exceeded our expectations!</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-12 items-center justify-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-8 items-start justify-start relative shrink-0 w-full">
            <div className="bg-[#e9f5f3] box-border content-stretch flex flex-col gap-8 items-start justify-start p-[32px] relative rounded-2xl shrink-0 w-[405px]">
              <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-2xl" />
              <div className="content-stretch flex flex-col gap-12 items-start justify-start relative shrink-0 w-full">
                <div className="h-12 overflow-clip relative shrink-0 w-[120px]">
                  <div className="absolute h-[19.286px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[115.698px]" style={{ left: "calc(50% - 0.009px)" }}>
                    <img alt="" className="block max-w-none size-full" src={img3} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[20px] w-full">
                    <p className="leading-[1.5]">"Working with Matt was a game-changer for our project."</p>
                  </div>
                  <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full">
                    <div className="relative shrink-0 size-12">
                      <img alt="" className="block max-w-none size-full" height="48" src={imgAvatarImage} width="48" />
                    </div>
                    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0c0805] text-[18px]">
                      <div className="font-['PT_Sans'] font-bold relative shrink-0 w-full">
                        <p className="leading-[1.5]">Sarah Johnson</p>
                      </div>
                      <div className="font-['PT_Sans'] relative shrink-0 w-full">
                        <p className="leading-[1.5]">Project Manager, TechCorp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0">
                <div className="content-stretch flex gap-2 items-center justify-center relative rounded-[100px] shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Read Case Study</p>
                  </div>
                  <ChevronRight />
                </div>
              </div>
            </div>
            <div className="bg-[#e9f5f3] box-border content-stretch flex flex-col gap-8 items-start justify-start p-[32px] relative rounded-2xl shrink-0 w-[405px]">
              <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-2xl" />
              <div className="content-stretch flex flex-col gap-12 items-start justify-start relative shrink-0 w-full">
                <div className="h-12 overflow-clip relative shrink-0 w-[120px]">
                  <div className="absolute h-[30.75px] translate-x-[-50%] translate-y-[-50%] w-[113.585px]" style={{ top: "calc(50% + 0.375px)", left: "calc(50% + 0.221px)" }}>
                    <img alt="" className="block max-w-none size-full" src={img4} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[20px] w-full">
                    <p className="leading-[1.5]">"The attention to detail was remarkable and inspiring."</p>
                  </div>
                  <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full">
                    <div className="relative shrink-0 size-12">
                      <img alt="" className="block max-w-none size-full" height="48" src={imgAvatarImage1} width="48" />
                    </div>
                    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0c0805] text-[18px]">
                      <div className="font-['PT_Sans'] font-bold relative shrink-0 w-full">
                        <p className="leading-[1.5]">Michael Lee</p>
                      </div>
                      <div className="font-['PT_Sans'] relative shrink-0 w-full">
                        <p className="leading-[1.5]">Director, Creative Agency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0">
                <div className="content-stretch flex gap-2 items-center justify-center relative rounded-[100px] shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Read Case Study</p>
                  </div>
                  <ChevronRight />
                </div>
              </div>
            </div>
            <div className="bg-[#e9f5f3] box-border content-stretch flex flex-col gap-8 items-start justify-start p-[32px] relative rounded-2xl shrink-0 w-[405px]">
              <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-2xl" />
              <div className="content-stretch flex flex-col gap-12 items-start justify-start relative shrink-0 w-full">
                <div className="h-12 overflow-clip relative shrink-0 w-[120px]">
                  <div className="absolute h-[19.286px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[115.698px]" style={{ left: "calc(50% - 0.009px)" }}>
                    <img alt="" className="block max-w-none size-full" src={img3} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[20px] w-full">
                    <p className="leading-[1.5]">"Matt's vision brought our ideas to life beautifully."</p>
                  </div>
                  <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full">
                    <div className="relative shrink-0 size-12">
                      <img alt="" className="block max-w-none size-full" height="48" src={imgAvatarImage2} width="48" />
                    </div>
                    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0c0805] text-[18px]">
                      <div className="font-['PT_Sans'] font-bold relative shrink-0 w-full">
                        <p className="leading-[1.5]">Emily Carter</p>
                      </div>
                      <div className="font-['PT_Sans'] relative shrink-0 w-full">
                        <p className="leading-[1.5]">Founder, Design Co.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0">
                <div className="content-stretch flex gap-2 items-center justify-center relative rounded-[100px] shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Read Case Study</p>
                  </div>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-2 h-7 items-center justify-center relative shrink-0 w-full">
            <div className="relative shrink-0 size-2">
              <img alt="" className="block max-w-none size-full" src={imgDot} />
            </div>
            <div className="relative shrink-0 size-2">
              <img alt="" className="block max-w-none size-full" src={imgDot1} />
            </div>
            <div className="relative shrink-0 size-2">
              <img alt="" className="block max-w-none size-full" src={imgDot1} />
            </div>
            <div className="relative shrink-0 size-2">
              <img alt="" className="block max-w-none size-full" src={imgDot1} />
            </div>
            <div className="relative shrink-0 size-2">
              <img alt="" className="block max-w-none size-full" src={imgDot1} />
            </div>
            <div className="relative shrink-0 size-2">
              <img alt="" className="block max-w-none size-full" src={imgDot1} />
            </div>
          </div>
          <div className="absolute bg-[#e9f5f3] box-border content-stretch flex gap-2 items-center justify-center left-[-28px] p-[12px] rounded-[100px] translate-y-[-50%]" style={{ top: "calc(50% - 37.389px)" }}>
            <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <div className="overflow-clip relative shrink-0 size-6">
              <ArrowBack />
            </div>
          </div>
          <div className="absolute bg-[#e9f5f3] box-border content-stretch flex gap-2 items-center justify-center p-[12px] right-[-28px] rounded-[100px] translate-y-[-50%]" style={{ top: "calc(50% - 37.389px)" }}>
            <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <div className="overflow-clip relative shrink-0 size-6">
              <ArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}