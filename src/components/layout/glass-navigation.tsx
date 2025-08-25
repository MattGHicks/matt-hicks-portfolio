"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function GlassNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-2xl bg-white/20 shadow-lg' 
          : 'backdrop-blur-lg bg-white/10'
      }`}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00D4FF] to-[#0066CC] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">MH</span>
            </div>
            <div className="flex flex-col">
              <span 
                className="text-[#0c0805] font-medium text-lg leading-tight group-hover:text-[#0066CC] transition-colors duration-200" 
                style={{ fontFamily: "'Anybody', sans-serif" }}
              >
                Matt Hicks
              </span>
              <span 
                className="text-[#0c0805]/60 text-sm leading-tight" 
                style={{ fontFamily: "'PT Sans', sans-serif" }}
              >
                DigitalFish
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-[#0c0805] hover:text-[#0066CC] transition-colors duration-200 font-medium"
              style={{ fontFamily: "'PT Sans', sans-serif" }}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-[#0c0805] hover:text-[#0066CC] transition-colors duration-200 font-medium"
              style={{ fontFamily: "'PT Sans', sans-serif" }}
            >
              About
            </Link>
            <Link 
              href="/portfolio" 
              className="text-[#0c0805] hover:text-[#0066CC] transition-colors duration-200 font-medium"
              style={{ fontFamily: "'PT Sans', sans-serif" }}
            >
              Portfolio
            </Link>
            <Link 
              href="/services" 
              className="text-[#0c0805] hover:text-[#0066CC] transition-colors duration-200 font-medium"
              style={{ fontFamily: "'PT Sans', sans-serif" }}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-[#00D4FF] to-[#0066CC] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 font-bold"
              style={{ fontFamily: "'PT Sans', sans-serif" }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0c0805]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0c0805]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-white/10 backdrop-blur-xl">
            <div className="px-8 py-6 space-y-4">
              <Link 
                href="/" 
                className="block text-[#0c0805] hover:text-[#0066CC] transition-colors duration-200 font-medium py-2"
                style={{ fontFamily: "'PT Sans', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block text-[#0c0805] hover:text-[#0066CC] transition-colors duration-200 font-medium py-2"
                style={{ fontFamily: "'PT Sans', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/portfolio" 
                className="block text-[#0c0805] hover:text-[#0066CC] transition-colors duration-200 font-medium py-2"
                style={{ fontFamily: "'PT Sans', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/services" 
                className="block text-[#0c0805] hover:text-[#0066CC] transition-colors duration-200 font-medium py-2"
                style={{ fontFamily: "'PT Sans', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="block bg-gradient-to-r from-[#00D4FF] to-[#0066CC] text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 font-bold text-center mt-4"
                style={{ fontFamily: "'PT Sans', sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}