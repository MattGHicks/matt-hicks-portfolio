"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Lightbulb, Wrench, Users, TrendingUp } from "lucide-react";

export default function UniqueApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Deterministic positions for particles
  const particlePositions = [
    { left: 25, top: 40 }, { left: 70, top: 20 }, { left: 15, top: 70 }, { left: 85, top: 55 },
    { left: 45, top: 85 }, { left: 90, top: 25 }, { left: 10, top: 15 }, { left: 60, top: 75 },
    { left: 35, top: 35 }, { left: 80, top: 65 }, { left: 55, top: 10 }, { left: 5, top: 80 }
  ];

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
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const timelineVariants = {
    hidden: { 
      opacity: 0, 
      x: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const timelineItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      x: 20
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.4 + (index * 0.15),
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Timeline items with relevant Matt Hicks content
  const timelineItems = [
    {
      icon: Lightbulb,
      title: "Our Methodology",
      description: "We prioritize user-centered design, ensuring every project meets client needs and exceeds expectations.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      description: "Utilizing Figma, Next.js, and modern design tools to streamline the creative process and deliver excellence.",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description: "We work closely with clients, ensuring transparency and communication throughout the design process.",
      gradient: "from-green-400 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Feedback is integral; we adapt our designs based on client insights and project developments.",
      gradient: "from-pink-400 to-red-500"
    }
  ];

  return (
    <div className="bg-[#103e39] box-border content-stretch flex flex-col gap-20 items-center justify-start px-16 py-28 relative w-full overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/5 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [-15, -60, -15],
              opacity: [0, 0.3, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="content-stretch flex flex-col gap-20 items-start justify-start max-w-[1280px] relative shrink-0 w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="content-stretch flex gap-20 items-start justify-start relative shrink-0 w-full">
          {/* Left Content */}
          <motion.div 
            className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px relative shrink-0"
            variants={slideInFromLeft}
          >
            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-start relative shrink-0">
                <div 
                  className="font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-nowrap" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5] whitespace-pre">Design</p>
                </div>
              </div>
              <div 
                className="font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[60px] tracking-[-0.6px] w-full" 
                style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
              >
                <p className="leading-[1.2]">
                  {["Our", "Unique", "Approach", "to", "Design", "and", "Collaboration"].map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.1 + (index * 0.08),
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      whileHover={{
                        scale: 1.02,
                        color: "#d4ebe8",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <motion.div 
              className="content-stretch flex gap-6 items-center justify-start relative shrink-0"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button 
                className="relative rounded-[100px] shrink-0 border border-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-6 py-2.5 relative">
                  <div 
                    className="font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap" 
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
                  className="font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap group-hover:text-[#d4ebe8] transition-colors duration-200" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5] whitespace-pre">Sign Up</p>
                </div>
                <ChevronRight className="size-6 text-[#ffffff] group-hover:text-[#d4ebe8] group-hover:translate-x-1 transition-all duration-200" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div 
            className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px relative shrink-0"
            variants={timelineVariants}
          >
            {timelineItems.map((item, index) => {
              const IconComponent = item.icon;
              const isLast = index === timelineItems.length - 1;
              
              return (
                <motion.div 
                  key={index}
                  className="content-stretch flex gap-10 items-start justify-start relative shrink-0 w-full"
                  variants={timelineItemVariants}
                  custom={index}
                >
                  {/* Icon and Divider Column */}
                  <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0">
                    {/* Animated Icon */}
                    <motion.div 
                      className="overflow-clip relative shrink-0 size-16 flex items-center justify-center group"
                      variants={iconVariants}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="absolute inset-0 bg-[#d4ebe8] rounded-2xl shadow-lg" />
                      <IconComponent className="size-8 text-[#103E39] relative z-10" />
                    </motion.div>

                    {/* Timeline Divider */}
                    {!isLast && (
                      <motion.div 
                        className="flex h-[100px] items-center justify-center relative shrink-0 w-[0px]"
                        initial={{ height: 0, opacity: 0 }}
                        animate={isInView ? { height: 100, opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 + (index * 0.1) }}
                      >
                        <div className="w-px h-full bg-gradient-to-b from-white/20 to-white/5" />
                      </motion.div>
                    )}
                  </div>

                  {/* Content */}
                  <motion.div 
                    className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff]"
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div 
                      className="font-medium relative shrink-0 text-[26px] tracking-[-0.26px] w-full hover:text-[#d4ebe8] transition-colors duration-300" 
                      style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
                    >
                      <p className="leading-[1.4]">{item.title}</p>
                    </div>
                    <div 
                      className="not-italic relative shrink-0 text-[18px] w-full text-white/90" 
                      style={{ fontFamily: "'PT Sans', sans-serif" }}
                    >
                      <p className="leading-[1.5]">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}