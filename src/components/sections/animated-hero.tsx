"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Image assets - using high-quality placeholders
const imgPlaceholderImage = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1024&h=790&fit=crop&crop=center";
const imgPlaceholderImage1 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=384&h=384&fit=crop&crop=center";
const imgPlaceholderImage2 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=384&h=576&fit=crop&crop=center";

export default function AnimatedHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants - simplified
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="bg-[#d4ebe8] box-border content-stretch flex flex-col gap-12 lg:gap-20 items-center justify-start px-5 lg:px-16 py-16 lg:py-28 relative size-full overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isLoaded && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${15 + i * 4}%`,
              top: `${25 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      <motion.div 
        className="content-stretch flex flex-col gap-12 lg:gap-20 items-center justify-start max-w-[1280px] relative shrink-0 w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Text Content */}
        <div className="content-stretch flex flex-col gap-6 lg:gap-8 items-center justify-start max-w-[768px] relative shrink-0 w-full">
          <motion.div 
            className="content-stretch flex flex-col gap-5 lg:gap-6 items-center justify-start leading-[0] relative shrink-0 text-[#0c0805] text-center w-full"
            variants={fadeInUp}
          >
            {/* Title - with individual word hover effects */}
            <div 
              className="font-medium relative shrink-0 text-[44px] lg:text-[84px] tracking-[-0.44px] lg:tracking-[-0.84px] w-full" 
              style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
            >
              <p className="leading-[1.2] lg:leading-[1.1]">
                {"Transforming Ideas into Stunning Digital Experiences".split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-3 cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      color: "#103E39",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>

            {/* Subtitle */}
            <div 
              className="not-italic relative shrink-0 text-[14px] lg:text-[20px] w-full" 
              style={{ fontFamily: "'PT Sans', sans-serif" }}
            >
              <p className="leading-[1.5]">
                At DigitalFish, we specialize in crafting intuitive UI/UX designs that elevate your brand. 
                Explore our portfolio to see how we can bring your vision to life.
              </p>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="content-stretch flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start relative shrink-0"
            variants={fadeInUp}
          >
            <motion.button 
              className="bg-[#103e39] box-border content-stretch flex gap-2 items-center justify-center px-6 py-2.5 relative shrink-0"
              style={{ borderRadius: '100px', border: '2px solid #103E39' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] lg:text-[18px] text-nowrap" 
                style={{ fontFamily: "'PT Sans', sans-serif" }}
              >
                <p className="leading-[1.5] whitespace-pre">View My Design on Figma</p>
              </div>
            </motion.button>

            <motion.button 
              className="box-border content-stretch flex gap-2 items-center justify-center px-6 py-2.5 relative shrink-0 bg-transparent"
              style={{ borderRadius: '100px', border: '2px solid #103E39' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[14px] lg:text-[18px] text-nowrap" 
                style={{ fontFamily: "'PT Sans', sans-serif" }}
              >
                <p className="leading-[1.5] whitespace-pre">Download My Resume</p>
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Image Container - Clean responsive layout */}
        <motion.div 
          className="h-[218.056px] lg:h-[854px] relative shrink-0 w-full"
          variants={fadeInUp}
        >
          {/* Main Center Image */}
          <motion.div 
            className="absolute bg-center bg-cover bg-no-repeat rounded-2xl shadow-2xl
                       h-[201.715px] left-[32.68px] right-[32.68px] top-0
                       lg:h-[790px] lg:left-32 lg:right-32 lg:top-0"
            style={{ backgroundImage: `url('${imgPlaceholderImage}')` }}
            variants={imageVariants}
            animate={{
              y: [-5, 5, -5],
              transition: {
                duration: 6,
                repeat: Infinity
              }
            }}
          />
          
          {/* Left Bottom Image */}
          <motion.div 
            className="absolute bg-center bg-cover bg-no-repeat rounded-2xl shadow-xl
                       bottom-[32.68px] left-0 size-[98.049px]
                       lg:bottom-32 lg:left-0 lg:size-96"
            style={{ backgroundImage: `url('${imgPlaceholderImage1}')` }}
            variants={imageVariants}
            animate={{
              y: [-3, 3, -3],
              transition: {
                duration: 5,
                repeat: Infinity,
                delay: 1
              }
            }}
          />
          
          {/* Right Image */}
          <motion.div 
            className="absolute bg-center bg-cover bg-no-repeat rounded-2xl shadow-xl
                       h-[147.073px] right-0 top-[70.98px] w-[98.049px]
                       lg:h-[576px] lg:right-0 lg:top-[278px] lg:w-96"
            style={{ backgroundImage: `url('${imgPlaceholderImage2}')` }}
            variants={imageVariants}
            animate={{
              y: [-3, 3, -3],
              transition: {
                duration: 5,
                repeat: Infinity,
                delay: 2
              }
            }}
          />
        </motion.div>

        {/* Bouncing Scroll Indicator */}
        <motion.div 
          className="flex flex-col items-center justify-center mt-12 cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          onClick={() => {
            const nextSection = document.querySelector('#about-section');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Text */}
          <motion.div 
            className="text-[#103E39] text-sm font-medium mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            style={{ fontFamily: "'PT Sans', sans-serif" }}
          >
            Scroll to explore
          </motion.div>
          
          {/* Animated Arrow */}
          <motion.div 
            className="relative"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
          >
            {/* Scroll indicator container */}
            <div 
              className="w-8 h-12 border-2 rounded-full flex justify-center relative overflow-hidden transition-colors duration-300"
              style={{ 
                borderColor: '#103E39', 
                opacity: 0.7 
              }}
            >
              {/* Moving dot */}
              <motion.div 
                className="w-1.5 h-1.5 bg-[#103E39] rounded-full mt-2"
                animate={{
                  y: [0, 20, 0],
                  opacity: [1, 1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              />
            </div>
          </motion.div>

          {/* Chevron Down Icon */}
          <motion.div 
            className="mt-2"
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.2
            }}
          >
            <svg 
              width="20" 
              height="12" 
              viewBox="0 0 20 12" 
              fill="none" 
              className="text-[#103E39]/70 group-hover:text-[#103E39] transition-colors duration-300"
            >
              <path 
                d="M2 2L10 10L18 2" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}