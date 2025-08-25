"use client";

import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#d4ebe8] box-border content-stretch flex flex-col gap-20 items-center justify-start px-5 lg:px-16 py-20 relative size-full">
      <div className="content-stretch flex flex-col gap-20 items-center justify-start max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-8 items-center justify-start relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
            <div className="flex items-center justify-center w-full">
              <div 
                className="font-medium text-[#0c0805] text-center"
                style={{ 
                  fontFamily: "'Anybody', sans-serif", 
                  fontSize: 'clamp(48px, 8vw, 120px)',
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: 'clamp(-0.5px, -0.02em, -1.2px)'
                }}
              >
                Matt Hicks
              </div>
            </div>
          </div>
          <div className="content-start flex flex-wrap font-bold gap-8 items-start justify-center leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap w-full" style={{ fontFamily: "'PT Sans', sans-serif" }}>
            <div className="relative shrink-0 cursor-pointer hover:text-[#103e39] transition-colors duration-200">
              <p className="leading-[1.5] text-nowrap whitespace-pre">About Me</p>
            </div>
            <div className="relative shrink-0 cursor-pointer hover:text-[#103e39] transition-colors duration-200">
              <p className="leading-[1.5] text-nowrap whitespace-pre">Projects</p>
            </div>
            <div className="relative shrink-0 cursor-pointer hover:text-[#103e39] transition-colors duration-200">
              <p className="leading-[1.5] text-nowrap whitespace-pre">Services</p>
            </div>
            <div className="relative shrink-0 cursor-pointer hover:text-[#103e39] transition-colors duration-200">
              <p className="leading-[1.5] text-nowrap whitespace-pre">Contact</p>
            </div>
            <div className="relative shrink-0 cursor-pointer hover:text-[#103e39] transition-colors duration-200">
              <p className="leading-[1.5] text-nowrap whitespace-pre">Blog</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-8 items-center justify-start relative shrink-0 w-full">
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px] border-t-2" style={{ borderColor: '#103e39' }} />
          </div>
          <div className="content-stretch flex flex-col lg:flex-row gap-6 items-center justify-center lg:justify-between relative shrink-0 w-full">
            <div className="leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
              <p className="leading-[1.5] whitespace-pre">© 2025 Matt Hicks. All rights reserved.</p>
            </div>
            <div className="content-stretch flex flex-col lg:flex-row gap-6 items-center justify-center leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" style={{ fontFamily: "'PT Sans', sans-serif" }}>
              <div className="relative shrink-0 cursor-pointer hover:text-[#103e39] transition-colors duration-200">
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline whitespace-pre">Privacy Policy</p>
              </div>
              <div className="relative shrink-0 cursor-pointer hover:text-[#103e39] transition-colors duration-200">
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline whitespace-pre">Terms of Service</p>
              </div>
              <div className="relative shrink-0 cursor-pointer hover:text-[#103e39] transition-colors duration-200">
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline whitespace-pre">Cookies Settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}