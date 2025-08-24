"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const imgCompanyLogoImage = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=120&fit=crop&crop=center";

export function Footer16() {
  return (
    <footer className="bg-[#103e39] box-border content-stretch flex flex-col gap-12 items-center justify-start overflow-clip px-16 py-12 relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-16 items-start justify-start max-w-[1280px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-20 items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-[384px]">
            <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
              <div className="h-12 overflow-clip relative shrink-0 w-[120px]">
                <img alt="Company logo" className="block max-w-none size-full" src={imgCompanyLogoImage} />
              </div>
              <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] w-full">
                <p className="leading-[1.5]">Join our newsletter to stay informed about our latest projects and updates.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0 w-full">
                <div className="bg-[rgba(255,255,255,0.1)] basis-0 box-border content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px px-3 py-2.5 relative rounded-xl shrink-0">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.04)] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
                  <div className="basis-0 font-['PT_Sans'] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.6)]">
                    <p className="leading-[1.5]">Enter your email</p>
                  </div>
                </div>
                <div className="bg-[#ffffff] box-border content-stretch flex gap-2 items-center justify-center px-6 py-2.5 relative rounded-[100px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#ffffff] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
                  <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Subscribe</p>
                  </div>
                </div>
              </div>
              <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.6)] text-[12px] w-full">
                <p className="leading-[1.5]">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-8 items-start justify-start relative shrink-0">
            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-[232px]">
              <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap w-full">
                <p className="leading-[1.5]">Quick Links</p>
              </div>
              <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">About Us</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Our Work</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Services</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Contact Us</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Blog Posts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-[232px]">
              <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap w-full">
                <p className="leading-[1.5]">Resources</p>
              </div>
              <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Case Studies</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">FAQs</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Testimonials</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Careers</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Events</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-[232px]">
              <div className="font-['PT_Sans'] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap w-full">
                <p className="leading-[1.5]">Follow us</p>
              </div>
              <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-6 flex items-center justify-center">
                    <Facebook className="size-5 text-white/80" />
                  </div>
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Facebook</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-6 flex items-center justify-center">
                    <Instagram className="size-5 text-white/80" />
                  </div>
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Instagram</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-6 flex items-center justify-center">
                    <Twitter className="size-5 text-white/80" />
                  </div>
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">X</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-6 flex items-center justify-center">
                    <Linkedin className="size-5 text-white/80" />
                  </div>
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">LinkedIn</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-6 flex items-center justify-center">
                    <Youtube className="size-5 text-white/80" />
                  </div>
                  <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[16px] text-nowrap">
                    <p className="leading-[1.5] whitespace-pre">Youtube</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-12 overflow-clip relative shrink-0 w-[341px]">
          <img alt="Company name" className="block max-w-none size-full" src={imgCompanyLogoImage} />
        </div>
      </div>
      <div className="h-px w-full bg-white/20" />
      <div className="content-stretch flex gap-8 items-start justify-between max-w-[1280px] relative shrink-0 w-full">
        <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[14px] text-nowrap">
          <p className="leading-[1.5] whitespace-pre">© 2024 Relume. All rights reserved.</p>
        </div>
        <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0">
          <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[14px] text-nowrap underline">
            <p className="leading-[1.5] whitespace-pre">Privacy Policy</p>
          </div>
          <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[14px] text-nowrap underline">
            <p className="leading-[1.5] whitespace-pre">Terms of Service</p>
          </div>
          <div className="font-['PT_Sans'] leading-[0] not-italic relative shrink-0 text-[rgba(255,255,255,0.8)] text-[14px] text-nowrap underline">
            <p className="leading-[1.5] whitespace-pre">Cookies Settings</p>
          </div>
        </div>
      </div>
    </footer>
  );
}