"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function FigmaNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 lg:px-20 py-3 relative size-full">
        <div 
          className="content-stretch flex flex-col items-center justify-start px-0 py-3 lg:py-3 relative rounded-[48px] shrink-0 w-full h-auto lg:h-auto transition-all duration-500"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px) saturate(150%)',
            WebkitBackdropFilter: 'blur(20px) saturate(150%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          }}
        >
          <div className="box-border content-stretch flex items-center justify-between px-5 lg:px-8 py-0 relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
              
              {/* Logo/Brand */}
              <div className="content-stretch flex gap-[19.704px] lg:gap-[25.229px] items-center justify-start relative shrink-0">
                <Link href="/" className="group">
                  <div className="box-border content-stretch flex gap-2.5 h-full items-center justify-center pb-0 pt-0.5 px-0 relative shrink-0 group-hover:opacity-80 transition-all duration-300">
                    <div className="flex flex-col font-semibold justify-end leading-[0] relative shrink-0 text-[#0c0805] text-[24px] lg:text-[32px] text-center text-nowrap tracking-[-0.24px] lg:tracking-[-0.32px]" style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[1.1] whitespace-pre">MATT HICKS</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="content-stretch hidden lg:flex gap-4 items-center justify-center relative shrink-0">
                <div className="content-stretch flex gap-8 items-center justify-start leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap font-bold" style={{ fontFamily: "'PT Sans', sans-serif" }}>
                  <Link href="/about" className="relative shrink-0 hover:text-[#103E39] transition-all duration-300 hover:scale-105">
                    <p className="leading-[1.5] text-nowrap whitespace-pre">About Me</p>
                  </Link>
                  <Link href="/projects" className="relative shrink-0 hover:text-[#103E39] transition-all duration-300 hover:scale-105">
                    <p className="leading-[1.5] text-nowrap whitespace-pre">Projects</p>
                  </Link>
                </div>
                
                {/* Contact Button */}
                <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0">
                  <Link 
                    href="/contact" 
                    className="bg-[#103e39] box-border content-stretch flex gap-2 items-center justify-center px-5 py-2 relative rounded-[100px] shrink-0 hover:bg-[#0d332f] hover:scale-105 transition-all duration-300"
                  >
                    <div 
                      className="font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap" 
                      style={{ fontFamily: "'PT Sans', sans-serif" }}
                    >
                      <p className="leading-[1.5] whitespace-pre">Contact Me</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 rounded-lg hover:bg-[rgba(12,8,5,0.1)] transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#0c0805]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#0c0805]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-3 mt-2">
          <div 
            className="w-full rounded-[32px] px-6 py-4 space-y-4"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px) saturate(150%)',
              WebkitBackdropFilter: 'blur(20px) saturate(150%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            }}
          >
            <Link 
              href="/about" 
              className="block text-[#0c0805] hover:text-[#103E39] transition-all duration-300 font-bold py-2 text-[16px] hover:scale-105"
              style={{ fontFamily: "'PT Sans', sans-serif" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Me
            </Link>
            <Link 
              href="/projects" 
              className="block text-[#0c0805] hover:text-[#103E39] transition-all duration-300 font-bold py-2 text-[16px] hover:scale-105"
              style={{ fontFamily: "'PT Sans', sans-serif" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="block text-center bg-[#103e39] text-white px-6 py-2.5 rounded-[100px] hover:bg-[#0d332f] hover:scale-105 transition-all duration-300 font-bold text-[18px]"
                style={{ 
                  fontFamily: "'PT Sans', sans-serif",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}