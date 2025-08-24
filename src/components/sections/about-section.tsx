"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Image assets - using high-quality placeholder
const imgPlaceholderImage = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=640&fit=crop&crop=center";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const slideInFromLeft = {
    hidden: { 
      opacity: 0, 
      x: -60,
      y: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0
    }
  };

  const slideInFromRight = {
    hidden: { 
      opacity: 0, 
      x: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1
    }
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <div id="about-section" className="bg-[#ffffff] box-border content-stretch flex flex-col gap-20 items-center justify-start px-16 py-28 relative w-full" ref={ref}>
      <motion.div 
        className="content-stretch flex flex-col gap-20 items-start justify-start max-w-[1280px] relative shrink-0 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="content-stretch flex gap-20 items-center justify-start relative shrink-0 w-full">
          {/* Left Content */}
          <motion.div 
            className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px relative shrink-0"
            variants={slideInFromLeft}
          >
            <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                
                {/* Tagline */}
                <motion.div 
                  className="content-stretch flex items-center justify-start relative shrink-0"
                  variants={fadeInUp}
                >
                  <div 
                    className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" 
                    style={{ fontFamily: "'PT Sans', sans-serif" }}
                  >
                    <p className="leading-[1.5] whitespace-pre">Innovate</p>
                  </div>
                </motion.div>

                {/* Main Content */}
                <motion.div 
                  className="content-stretch flex flex-col gap-6 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full"
                  variants={fadeInUp}
                >
                  {/* Title with word animation */}
                  <div 
                    className="font-medium relative shrink-0 text-[60px] tracking-[-0.6px] w-full" 
                    style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
                  >
                    <p className="leading-[1.2]">
                      {"Crafting Experiences Through Design and Creativity".split(" ").map((word, index) => (
                        <motion.span
                          key={index}
                          className="inline-block mr-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + (index * 0.05),
                            ease: "easeOut"
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

                  {/* Description */}
                  <motion.div 
                    className="not-italic relative shrink-0 text-[20px] w-full" 
                    style={{ fontFamily: "'PT Sans', sans-serif" }}
                    variants={fadeInUp}
                  >
                    <p className="leading-[1.5]">
                      Matt Hicks combines his passion for design with a commitment to user experience. 
                      His dual-brand approach allows him to deliver tailored solutions for both professional and personal projects.
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Feature Cards */}
              <motion.div 
                className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full"
                variants={fadeInUp}
              >
                <div className="box-border content-stretch flex gap-6 items-start justify-start px-0 py-2 relative shrink-0 w-full">
                  
                  {/* Dual Brand Card */}
                  <motion.div 
                    className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#0c0805] p-6 rounded-2xl hover:bg-[rgba(12,8,5,0.02)] transition-colors duration-300"
                    variants={cardVariants}
                    custom={0}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div 
                      className="font-medium relative shrink-0 text-[26px] tracking-[-0.26px] w-full" 
                      style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
                    >
                      <p className="leading-[1.4]">Dual Brand</p>
                    </div>
                    <div 
                      className="not-italic relative shrink-0 text-[18px] w-full" 
                      style={{ fontFamily: "'PT Sans', sans-serif" }}
                    >
                      <p className="leading-[1.5]">
                        DigitalFish offers professional design services that elevate your brand&apos;s digital presence.
                      </p>
                    </div>
                  </motion.div>

                  {/* Core Values Card */}
                  <motion.div 
                    className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#0c0805] p-6 rounded-2xl hover:bg-[rgba(12,8,5,0.02)] transition-colors duration-300"
                    variants={cardVariants}
                    custom={1}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div 
                      className="font-medium relative shrink-0 text-[26px] tracking-[-0.26px] w-full" 
                      style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
                    >
                      <p className="leading-[1.4]">Core Values</p>
                    </div>
                    <div 
                      className="not-italic relative shrink-0 text-[18px] w-full" 
                      style={{ fontFamily: "'PT Sans', sans-serif" }}
                    >
                      <p className="leading-[1.5]">
                        We prioritize creativity, collaboration, and client satisfaction in every project we undertake.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div 
              className="content-stretch flex gap-6 items-center justify-start relative shrink-0"
              variants={fadeInUp}
            >
              <motion.button 
                className="relative rounded-[100px] shrink-0 border border-[rgba(12,8,5,0.02)] hover:bg-[rgba(12,8,5,0.05)] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-6 py-2.5 relative">
                  <div 
                    className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap" 
                    style={{ fontFamily: "'PT Sans', sans-serif" }}
                  >
                    <p className="leading-[1.5] whitespace-pre">Learn More</p>
                  </div>
                </div>
              </motion.button>

              <motion.button 
                className="content-stretch flex gap-2 items-center justify-center overflow-clip relative rounded-[100px] shrink-0 group hover:gap-3 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div 
                  className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap group-hover:text-[#103E39] transition-colors duration-200" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5] whitespace-pre">Sign Up</p>
                </div>
                <ChevronRight className="size-6 text-[#0c0805] group-hover:text-[#103E39] group-hover:translate-x-1 transition-all duration-200" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="aspect-[600/640] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px rounded-2xl shrink-0 relative overflow-hidden shadow-xl"
            style={{ backgroundImage: `url('${imgPlaceholderImage}')` }}
            variants={slideInFromRight}
            whileHover={{
              scale: 1.03,
              rotate: 1,
              transition: { duration: 0.4 }
            }}
          >
            {/* Overlay on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating badge */}
            <motion.div
              className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-[#0c0805] shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              DigitalFish
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}