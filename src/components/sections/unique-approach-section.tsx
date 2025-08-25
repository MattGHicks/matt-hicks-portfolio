"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView, MotionStyle } from "framer-motion";
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

  // Timeline items with relevant Matt Hicks content
  const timelineItems = [
    {
      icon: Lightbulb,
      title: "Our Methodology",
      description: "We prioritize user-centered design, ensuring every project meets client needs and expectations."
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      description: "Utilizing Figma, Next.js, and modern design tools to streamline the creative process."
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description: "We work closely with clients, ensuring transparency and communication throughout the design process."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Feedback is integral; we adapt our designs based on client insights and project developments."
    }
  ];

  return (
    <section 
      className="bg-[#103e39] px-5 py-16 md:py-24 lg:px-16 lg:py-28 relative overflow-hidden" 
      ref={ref}
    >
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

      <div className="container mx-auto max-w-[1280px] relative z-10">
        <div className="grid grid-cols-1 items-start gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60, y: 20 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -60, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div 
              className="font-bold mb-3 text-[#ffffff] text-[16px] md:mb-4" 
              style={{ fontFamily: "'PT Sans', sans-serif" }}
            >
              Design
            </div>
            <h2 
              className="mb-5 text-[44px] md:text-[60px] lg:text-[60px] font-medium leading-[1.2] text-[#ffffff] tracking-[-0.44px] md:tracking-[-0.6px] md:mb-6"
              style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
            >
              {["Our", "Unique", "Approach", "to", "Design", "and", "Collaboration"].map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + (index * 0.08)
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
            </h2>

            {/* Action Buttons */}
            <motion.div 
              className="mt-6 flex flex-col sm:flex-row flex-wrap items-center gap-4 md:mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="rounded-full px-6 py-2.5 border border-white/10 text-[#ffffff] hover:bg-white/5 transition-colors duration-300"
                style={{ fontFamily: "'PT Sans', sans-serif" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-bold text-[14px] lg:text-[18px]">Learn More</span>
              </motion.button>

              <motion.button
                className="group flex items-center gap-2 text-[#ffffff] hover:text-[#d4ebe8] transition-colors duration-200"
                style={{ fontFamily: "'PT Sans', sans-serif" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-bold text-[14px] lg:text-[18px]">Sign Up</span>
                <ChevronRight className="size-6 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 60, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatedTimeline />
            {timelineItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={index} 
                  className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10"
                  initial={{ opacity: 0, y: 40, x: 20 }}
                  animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 40, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                >
                  <div className="relative z-20 flex w-12 flex-col items-center justify-start pt-8">
                    <motion.div 
                      className="flex size-12 items-center justify-center rounded-xl border border-border-primary bg-[#d4ebe8] shadow-lg"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <IconComponent className="size-6 text-[#103E39]" />
                    </motion.div>
                  </div>
                  <motion.div 
                    className="pb-8 pt-10"
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <h6 
                      className="mb-3 text-[18px] lg:text-[26px] font-medium leading-[1.4] md:mb-4 text-[#ffffff] hover:text-[#d4ebe8] transition-colors duration-300 tracking-[-0.18px] lg:tracking-[-0.26px]"
                      style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
                    >
                      {item.title}
                    </h6>
                    <p 
                      className="text-[14px] lg:text-[18px] text-white/90 leading-[1.5]"
                      style={{ fontFamily: "'PT Sans', sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Animated timeline component based on Relume structure
const AnimatedTimeline = () => {
  const scrollSection = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollSection,
    offset: ["start 55%", "start start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  return (
    <div className="absolute left-6 top-16 -z-10 h-[calc(75%-32px)] w-0.5 bg-white/20">
      <motion.div 
        ref={scrollSection} 
        className="w-full bg-gradient-to-b from-white/40 to-white/20" 
        style={{ height } as MotionStyle} 
      />
    </div>
  );
};