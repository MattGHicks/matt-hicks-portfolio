"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
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

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3 + (index * 0.15),
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: 15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Portfolio projects with Matt Hicks relevant content
  const portfolioProjects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with intuitive UI/UX design and seamless user experience.",
      tags: ["Web Development", "UI/UX Design", "E-Commerce"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=450&fit=crop&crop=center"
    },
    {
      title: "Brand Identity System",
      description: "Complete brand identity design including logo, color palette, and visual guidelines.",
      tags: ["Branding", "Logo Design", "Visual Identity"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=450&fit=crop&crop=center"
    },
    {
      title: "Mobile App Interface",
      description: "Clean and modern mobile application design focused on user engagement and accessibility.",
      tags: ["Mobile Design", "App Development", "User Experience"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=450&fit=crop&crop=center"
    }
  ];

  return (
    <div className="bg-[#d4ebe8] box-border content-stretch flex flex-col gap-20 items-center justify-start px-16 py-28 relative w-full" ref={ref}>
      <motion.div 
        className="content-stretch flex flex-col gap-20 items-start justify-start max-w-[1280px] relative shrink-0 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div 
          className="content-stretch flex flex-col gap-4 items-start justify-start max-w-[768px] relative shrink-0 w-full"
          variants={titleVariants}
        >
          <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
            <div 
              className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" 
              style={{ fontFamily: "'PT Sans', sans-serif" }}
            >
              <p className="leading-[1.5] whitespace-pre">Portfolio</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-6 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full">
            <div 
              className="font-medium relative shrink-0 text-[60px] tracking-[-0.6px] w-full" 
              style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
            >
              <p className="leading-[1.2]">
                {["Explore", "Our", "Creative", "Works"].map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + (index * 0.08),
                      ease: [0.25, 0.1, 0.25, 1]
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
              className="not-italic relative shrink-0 text-[20px] w-full" 
              style={{ fontFamily: "'PT Sans', sans-serif" }}
              variants={titleVariants}
            >
              <p className="leading-[1.5]">A showcase of our finest design projects and digital solutions.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Portfolio Content */}
        <div className="content-stretch flex flex-col gap-16 items-center justify-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
            
            {portfolioProjects.map((project, index) => (
              <motion.div 
                key={index}
                className="box-border content-stretch flex flex-col gap-12 items-start justify-start px-0 py-12 relative shrink-0 w-full group"
                variants={projectVariants}
                custom={index}
              >
                {/* Divider line */}
                <div className="absolute border-t border-[rgba(12,8,5,0.02)] inset-x-0 top-0 pointer-events-none" />
                
                <div className="content-stretch flex gap-20 items-start justify-start relative shrink-0 w-full">
                  {/* Project Image */}
                  <motion.div 
                    className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0"
                    variants={imageVariants}
                    whileHover={{
                      scale: 1.02,
                      rotateY: -2,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div 
                      className="aspect-[600/450] bg-center bg-cover bg-no-repeat rounded-2xl shrink-0 w-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    >
                      {/* Overlay on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 rounded-2xl"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  {/* Project Content */}
                  <div className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0">
                    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-2 items-start justify-start leading-[0] relative shrink-0 text-[#0c0805] w-full">
                        <motion.div 
                          className="font-medium relative shrink-0 text-[40px] tracking-[-0.4px] w-full group-hover:text-[#103E39] transition-colors duration-300" 
                          style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
                          whileHover={{ scale: 1.01 }}
                        >
                          <p className="leading-[1.3]">{project.title}</p>
                        </motion.div>
                        <div 
                          className="not-italic relative shrink-0 text-[18px] w-full max-w-[560px]" 
                          style={{ fontFamily: "'PT Sans', sans-serif" }}
                        >
                          <p className="leading-[1.5]">{project.description}</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="content-start flex flex-wrap gap-2 items-start justify-start relative shrink-0 w-full">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.div 
                            key={tagIndex}
                            className="bg-[rgba(12,8,5,0.05)] box-border content-stretch flex items-start justify-start px-2.5 py-1 relative rounded-[100px] shrink-0 border border-[rgba(12,8,5,0.02)] hover:bg-[rgba(12,8,5,0.1)] transition-colors duration-200"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div 
                              className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[16px] text-nowrap" 
                              style={{ fontFamily: "'PT Sans', sans-serif" }}
                            >
                              <p className="leading-[1.5] whitespace-pre">{tag}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
                      <motion.button 
                        className="content-stretch flex gap-2 items-center justify-center relative rounded-[100px] shrink-0 group/btn hover:gap-3 transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div 
                          className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap group-hover/btn:text-[#103E39] transition-colors duration-200" 
                          style={{ fontFamily: "'PT Sans', sans-serif" }}
                        >
                          <p className="leading-[1.5] whitespace-pre">View project</p>
                        </div>
                        <ChevronRight className="size-6 text-[#0c0805] group-hover/btn:text-[#103E39] group-hover/btn:translate-x-1 transition-all duration-200" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div 
            className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              className="bg-[#103E39] box-border content-stretch flex gap-2 items-center justify-center px-6 py-2.5 relative rounded-[100px] shrink-0 hover:bg-[#0d332f] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] text-nowrap" 
                style={{ fontFamily: "'PT Sans', sans-serif" }}
              >
                <p className="leading-[1.5] whitespace-pre">View all</p>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}