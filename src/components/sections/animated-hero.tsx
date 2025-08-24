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

  // Deterministic positions for particles to avoid hydration mismatch
  const particlePositions = [
    { left: 15, top: 25 }, { left: 85, top: 60 }, { left: 30, top: 80 }, { left: 70, top: 20 },
    { left: 50, top: 90 }, { left: 10, top: 45 }, { left: 90, top: 35 }, { left: 25, top: 65 },
    { left: 75, top: 15 }, { left: 40, top: 75 }, { left: 60, top: 40 }, { left: 5, top: 85 },
    { left: 95, top: 55 }, { left: 35, top: 10 }, { left: 65, top: 85 }, { left: 20, top: 50 },
    { left: 80, top: 30 }, { left: 45, top: 70 }, { left: 55, top: 5 }, { left: 12, top: 95 }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    },
    hover: {
      scale: 1.05
    },
    tap: {
      scale: 0.95
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1
    }
  };

  const titleWords = "Transforming Ideas into Stunning Digital Experiences".split(" ");

  return (
    <div className="bg-[#d4ebe8] box-border content-stretch flex flex-col gap-20 items-center justify-start px-16 py-28 relative w-full overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isLoaded && particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
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
        className="content-stretch flex flex-col gap-20 items-center justify-start max-w-[1280px] relative shrink-0 w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Text Content */}
        <div className="content-stretch flex flex-col gap-8 items-center justify-start max-w-[768px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-6 items-center justify-start leading-[0] relative shrink-0 text-[#0c0805] text-center w-full">
            
            {/* Animated Title */}
            <div className="font-medium relative shrink-0 text-[84px] tracking-[-0.84px] w-full" style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[1.1]">
                {titleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-6"
                    variants={{
                      hidden: { 
                        opacity: 0, 
                        y: 50,
                        rotateX: -90
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0
                      }
                    }}
                    whileHover={{
                      scale: 1.05,
                      color: "#103E39"
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>

            {/* Animated Subtitle */}
            <motion.div 
              className="not-italic relative shrink-0 text-[20px] w-full" 
              style={{ fontFamily: "'PT Sans', sans-serif" }}
              variants={textVariants}
            >
              <p className="leading-[1.5]">
                At DigitalFish, we specialize in crafting intuitive UI/UX designs that elevate your brand. 
                Explore our portfolio to see how we can bring your vision to life.
              </p>
            </motion.div>
          </div>

          {/* Animated Buttons */}
          <motion.div 
            className="content-stretch flex gap-4 items-center justify-start relative shrink-0"
            variants={buttonVariants}
          >
            <motion.button 
              className="bg-[#103e39] box-border content-stretch flex gap-2 items-center justify-center px-6 py-2.5 relative rounded-[100px] shrink-0"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div aria-hidden="true" className="absolute border-2 border-[#103e39] border-solid inset-[-2px] pointer-events-none rounded-[102px]" />
              <div 
                className="font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap" 
                style={{ fontFamily: "'PT Sans', sans-serif" }}
              >
                <p className="leading-[1.5] whitespace-pre">View My Design on Figma</p>
              </div>
            </motion.button>

            <motion.button 
              className="box-border content-stretch flex gap-2 items-center justify-center px-6 py-2.5 relative rounded-[100px] shrink-0 hover:bg-[rgba(16,62,57,0.1)] transition-colors duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <div aria-hidden="true" className="absolute border-2 border-[#103e39] border-solid inset-[-2px] pointer-events-none rounded-[102px]" />
              <div 
                className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap" 
                style={{ fontFamily: "'PT Sans', sans-serif" }}
              >
                <p className="leading-[1.5] whitespace-pre">Download My Resume</p>
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Animated Image Container */}
        <div className="h-[854px] relative shrink-0 w-full">
          {/* Main Center Image */}
          <motion.div 
            className="absolute aspect-[1024/790] bg-center bg-cover bg-no-repeat left-32 right-32 rounded-2xl top-0 shadow-2xl"
            style={{ backgroundImage: `url('${imgPlaceholderImage}')` }}
            variants={imageVariants}
            animate={{
              y: [-10, 10, -10],
              transition: {
                duration: 6,
                repeat: Infinity
              }
            }}
            whileHover={{
              scale: 1.02,
              rotateY: 5
            }}
          />
          
          {/* Left Bottom Image */}
          <motion.div 
            className="absolute bg-center bg-cover bg-no-repeat bottom-32 left-0 rounded-2xl size-96 shadow-xl"
            style={{ backgroundImage: `url('${imgPlaceholderImage1}')` }}
            variants={imageVariants}
            animate={{
              y: [-10, 10, -10],
              transition: {
                duration: 6,
                repeat: Infinity,
                delay: 1
              }
            }}
            whileHover={{
              scale: 1.05,
              rotateZ: 2
            }}
          />
          
          {/* Right Image */}
          <motion.div 
            className="absolute bg-center bg-cover bg-no-repeat h-[576px] right-0 rounded-2xl top-[278px] w-96 shadow-xl"
            style={{ backgroundImage: `url('${imgPlaceholderImage2}')` }}
            variants={imageVariants}
            animate={{
              y: [-10, 10, -10],
              transition: {
                duration: 6,
                repeat: Infinity,
                delay: 2
              }
            }}
            whileHover={{
              scale: 1.05,
              rotateZ: -2
            }}
          />

        </div>

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