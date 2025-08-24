"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Code, Users, Zap, ChevronRight } from "lucide-react";

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Deterministic positions for particles to avoid hydration mismatch
  const particlePositions = [
    { left: 20, top: 30 }, { left: 75, top: 60 }, { left: 45, top: 15 }, { left: 85, top: 45 },
    { left: 15, top: 75 }, { left: 60, top: 25 }, { left: 90, top: 80 }, { left: 35, top: 55 },
    { left: 70, top: 10 }, { left: 25, top: 85 }, { left: 80, top: 35 }, { left: 10, top: 50 },
    { left: 95, top: 65 }, { left: 50, top: 5 }, { left: 5, top: 90 }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.4 + (index * 0.1),
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  // Features data with relevant content
  const features = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Creating cohesive visual identities that capture your brand's essence and connect with your target audience.",
      buttonText: "View Work",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Code,
      title: "UI/UX Development",
      description: "Building intuitive interfaces with clean code, focusing on user experience and modern web standards.",
      buttonText: "See Projects",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description: "Working closely with clients to understand their vision and deliver solutions that exceed expectations.",
      buttonText: "Get Started",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Fast iteration cycles from concept to working prototype, bringing your ideas to life quickly and efficiently.",
      buttonText: "Learn More",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="bg-[#103e39] box-border content-stretch flex flex-col gap-20 items-center justify-start px-16 py-28 relative w-full overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [-10, -50, -10],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="content-stretch flex flex-col gap-20 items-center justify-start max-w-[1280px] relative shrink-0 w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Title */}
        <motion.h3 
          className="font-medium leading-[0] max-w-[768px] relative shrink-0 text-[#ffffff] text-[48px] text-center tracking-[-0.48px] w-full" 
          style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
          variants={titleVariants}
        >
          <span className="leading-[1.2] block">
            {"Comprehensive Design Solutions for Modern Businesses".split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + (index * 0.08),
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h3>

        {/* Features Grid */}
        <div className="content-stretch flex flex-col gap-16 items-start justify-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-8 items-start justify-center relative shrink-0 w-full">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={index}
                  className="basis-0 content-stretch flex flex-col gap-8 grow items-center justify-start min-h-px min-w-px relative shrink-0 group"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0 w-full">
                    {/* Animated Icon */}
                    <motion.div 
                      className="overflow-clip relative shrink-0 size-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-[#d4ebe8] rounded-2xl shadow-lg" />
                      <IconComponent className="size-8 text-[#103E39] relative z-10" />
                    </motion.div>

                    <div className="content-stretch flex flex-col gap-4 items-center justify-start leading-[0] relative shrink-0 text-[#ffffff] text-center w-full">
                      {/* Title */}
                      <h6 
                        className="font-medium relative shrink-0 text-[26px] tracking-[-0.26px] w-full group-hover:text-white transition-colors duration-300 leading-[1.4]" 
                        style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
                      >
                        {feature.title}
                      </h6>

                      {/* Description */}
                      <div 
                        className="not-italic relative shrink-0 text-[18px] w-full text-white/80 group-hover:text-white/90 transition-colors duration-300" 
                        style={{ fontFamily: "'PT Sans', sans-serif" }}
                      >
                        <p className="leading-[1.5]">{feature.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0 w-full">
                    <motion.button 
                      className="content-stretch flex gap-2 items-center justify-center overflow-clip relative rounded-[100px] shrink-0 group/btn hover:gap-3 transition-all duration-200 px-6 py-3 hover:bg-white/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div 
                        className="font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap group-hover/btn:text-white transition-colors duration-200" 
                        style={{ fontFamily: "'PT Sans', sans-serif" }}
                      >
                        <p className="leading-[1.5] whitespace-pre">{feature.buttonText}</p>
                      </div>
                      <ChevronRight className="size-6 text-white group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}