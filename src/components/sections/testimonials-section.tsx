"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Image assets from Figma MCP
const imgAvatarImage = "http://localhost:3845/assets/18bbfa4664bcb24b05669df5a48cd5e977f16e99.png";
const imgAvatarImage1 = "http://localhost:3845/assets/3372e61d1f4cb3d40c6947a3bf98847123f63c4d.png";
const imgAvatarImage2 = "http://localhost:3845/assets/5fad10995360d1516b564c9bd2bf6a534129717d.png";
const imgVector = "http://localhost:3845/assets/2536b7be9782c5e1554319ed77d44ed07bf64ebd.svg";
const imgVector1 = "http://localhost:3845/assets/393b1beab392067fd23c65f43a26413ad8650569.svg";
const imgVector2 = "http://localhost:3845/assets/542de1831d0936acd161b0197b34fe52136cc659.svg";
const img = "http://localhost:3845/assets/91bfd37087374e026977fa8676c925da49b97127.svg";
const img1 = "http://localhost:3845/assets/3b0aa770de5608f42a8f54b029c61dd72aa099a7.svg";
const imgDot = "http://localhost:3845/assets/75bb8f04eb060af11c3e341a54d0e5969a6de187.svg";
const imgDot1 = "http://localhost:3845/assets/19ff6b591f5ab51880de05cd596b95797be9881d.svg";

// Custom icon components from MCP
function ChevronRight() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[25.72%_36.66%_25.88%_35.46%]">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
    </div>
  );
}

function ArrowBack() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[17.44%_16.02%_17.46%_17.44%]">
        <img alt="" className="block max-w-none size-full" src={imgVector1} />
      </div>
    </div>
  );
}

function ArrowForward() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[17.46%_17.44%_17.44%_16.04%]">
        <img alt="" className="block max-w-none size-full" src={imgVector2} />
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: () => ({
      opacity: 1,
      y: 0,
      scale: 1
    })
  };

  // Testimonials data with exact MCP content
  const testimonials = [
    {
      quote: "Working with Matt was a game-changer for our project.",
      name: "Sarah Johnson",
      title: "Project Manager, TechCorp",
      avatar: imgAvatarImage,
      logo: img
    },
    {
      quote: "The attention to detail was remarkable and inspiring.",
      name: "Michael Lee",
      title: "Director, Creative Agency",
      avatar: imgAvatarImage1,
      logo: img1
    },
    {
      quote: "Matt's vision brought our ideas to life beautifully.",
      name: "Emily Carter",
      title: "Founder, Design Co.",
      avatar: imgAvatarImage2,
      logo: img
    }
  ];

  const totalSlides = testimonials.length; // For mobile carousel

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="bg-[#d4ebe8] box-border content-stretch flex flex-col gap-12 lg:gap-20 items-center justify-start px-5 lg:px-16 py-16 lg:py-28 relative size-full" ref={ref}>
      <motion.div 
        className="content-stretch flex flex-col gap-12 lg:gap-20 items-center justify-start max-w-[1280px] relative shrink-0 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div 
          className="content-stretch flex flex-col gap-5 lg:gap-6 items-center justify-start leading-[0] max-w-[768px] relative shrink-0 text-[#0c0805] text-center w-full"
          variants={titleVariants}
        >
          <div 
            className="font-medium relative shrink-0 text-[44px] lg:text-[60px] tracking-[-0.44px] lg:tracking-[-0.6px] w-full lg:w-[560px]" 
            style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[1.2]">
              {["Customer", "Testimonials"].map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + (index * 0.1)
                  }}
                  whileHover={{
                    scale: 1.02,
                    color: "#103E39",
                    transition: { duration: 0.2 }
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>
          <motion.div 
            className="not-italic relative shrink-0 text-[14px] lg:text-[20px] w-full lg:w-[560px]" 
            style={{ fontFamily: "'PT Sans', sans-serif" }}
            variants={titleVariants}
          >
            <p className="leading-[1.5]">Transformative design that exceeded our expectations!</p>
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="content-stretch flex flex-col gap-5 lg:gap-12 items-center justify-start relative shrink-0 w-full">
          {/* Mobile Single Card View */}
          <div className="lg:hidden relative w-full">
            <motion.div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${testimonials.length * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-[#e9f5f3] box-border content-stretch flex flex-col gap-6 items-start justify-start p-6 relative rounded-2xl w-full"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-2xl" />
                  <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
                    {/* Company Logo */}
                    <div className="h-12 overflow-clip relative shrink-0 w-[120px]">
                      <div className="absolute h-[19.286px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[115.698px]" style={{ left: "calc(50% - 0.009px)" }}>
                        <img alt="" className="block max-w-none size-full" src={testimonial.logo} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="content-stretch flex flex-col gap-5 items-start justify-start relative shrink-0 w-full">
                      <div 
                        className="leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[14px] w-full" 
                        style={{ fontFamily: "'PT Sans', sans-serif" }}
                      >
                        <p className="leading-[1.5]">&ldquo;{testimonial.quote}&rdquo;</p>
                      </div>
                      <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                        <div className="relative shrink-0 size-12">
                          <img alt="" className="block max-w-none size-full" height="48" src={testimonial.avatar} width="48" />
                        </div>
                        <div className="content-stretch flex flex-col items-start justify-start leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[14px] w-full">
                          <div 
                            className="relative shrink-0 w-full font-bold" 
                            style={{ fontFamily: "'PT Sans', sans-serif" }}
                          >
                            <p className="leading-[1.5]">{testimonial.name}</p>
                          </div>
                          <div 
                            className="relative shrink-0 w-full" 
                            style={{ fontFamily: "'PT Sans', sans-serif" }}
                          >
                            <p className="leading-[1.5]">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0">
                    <motion.div 
                      className="content-stretch flex gap-2 items-center justify-center relative rounded-[100px] shrink-0 cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div 
                        className="leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[14px] text-nowrap group-hover:text-[#103E39] transition-colors duration-200" 
                        style={{ fontFamily: "'PT Sans', sans-serif" }}
                      >
                        <p className="leading-[1.5] whitespace-pre">Read Case Study</p>
                      </div>
                      <div className="overflow-clip relative shrink-0 size-6">
                        <ChevronRight />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Cards */}
          <div className="hidden lg:flex content-stretch gap-8 items-start justify-start relative shrink-0 w-full">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="basis-0 bg-[#e9f5f3] box-border content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px p-[32px] relative rounded-2xl shrink-0"
                variants={cardVariants}
                custom={index}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-2xl" />
                <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full">
                  {/* Company Logo */}
                  <div className="h-12 overflow-clip relative shrink-0 w-[120px]">
                    <div className="absolute h-[19.286px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[115.698px]" style={{ left: "calc(50% - 0.009px)" }}>
                      <img alt="" className="block max-w-none size-full" src={testimonial.logo} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
                    <div 
                      className="leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[20px] w-full" 
                      style={{ fontFamily: "'PT Sans', sans-serif" }}
                    >
                      <p className="leading-[1.5]">&ldquo;{testimonial.quote}&rdquo;</p>
                    </div>
                    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full">
                      <div className="relative shrink-0 size-12">
                        <img alt="" className="block max-w-none size-full" height="48" src={testimonial.avatar} width="48" />
                      </div>
                      <div className="basis-0 content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0c0805] text-[18px]">
                        <div 
                          className="relative shrink-0 w-full font-bold" 
                          style={{ fontFamily: "'PT Sans', sans-serif" }}
                        >
                          <p className="leading-[1.5]">{testimonial.name}</p>
                        </div>
                        <div 
                          className="relative shrink-0 w-full" 
                          style={{ fontFamily: "'PT Sans', sans-serif" }}
                        >
                          <p className="leading-[1.5]">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Button */}
                <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0">
                  <motion.div 
                    className="content-stretch flex gap-2 items-center justify-center relative rounded-[100px] shrink-0 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div 
                      className="leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap group-hover:text-[#103E39] transition-colors duration-200" 
                      style={{ fontFamily: "'PT Sans', sans-serif" }}
                    >
                      <p className="leading-[1.5] whitespace-pre">Read Case Study</p>
                    </div>
                    <div className="overflow-clip relative shrink-0 size-6">
                      <ChevronRight />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Slider Dots */}
          <div className="content-stretch flex gap-2 h-7 items-center justify-center relative shrink-0 w-full">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className="relative shrink-0 size-2 cursor-pointer"
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <img 
                  alt="" 
                  className="block max-w-none size-full" 
                  src={index === currentSlide ? imgDot : imgDot1} 
                />
              </motion.button>
            ))}
          </div>
          
          {/* Navigation Arrows - Hidden on mobile */}
          <motion.div 
            className="absolute bg-[#e9f5f3] box-border content-stretch hidden lg:flex gap-2 items-center justify-center left-[-28px] p-[12px] rounded-[100px] translate-y-[-50%] cursor-pointer"
            style={{ top: "calc(50% - 37.389px)" }}
            onClick={prevSlide}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <div className="overflow-clip relative shrink-0 size-6">
              <ArrowBack />
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute bg-[#e9f5f3] box-border content-stretch hidden lg:flex gap-2 items-center justify-center p-[12px] right-[-28px] rounded-[100px] translate-y-[-50%] cursor-pointer"
            style={{ top: "calc(50% - 37.389px)" }}
            onClick={nextSlide}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(12,8,5,0.02)] border-solid inset-0 pointer-events-none rounded-[100px]" />
            <div className="overflow-clip relative shrink-0 size-6">
              <ArrowForward />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}