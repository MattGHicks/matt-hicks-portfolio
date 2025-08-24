"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false
  });

  // Deterministic positions for particles
  const particlePositions = [
    { left: 40, top: 25 }, { left: 75, top: 60 }, { left: 20, top: 80 }, { left: 85, top: 35 },
    { left: 55, top: 15 }, { left: 15, top: 50 }, { left: 90, top: 75 }, { left: 35, top: 90 }
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

  const slideInFromRight = {
    hidden: { 
      opacity: 0, 
      x: 60,
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

  const formVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4 + (index * 0.1),
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      acceptTerms: e.target.checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

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
              y: [-20, -80, -20],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.5,
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
          {/* Left Image */}
          <motion.div 
            className="basis-0 bg-center bg-cover bg-no-repeat grow h-[734px] min-h-px min-w-px rounded-2xl shrink-0 shadow-2xl overflow-hidden relative"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=734&fit=crop&crop=center')` }}
            variants={slideInFromLeft}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Floating badge */}
            <motion.div
              className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Let&apos;s Connect!
            </motion.div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div 
            className="basis-0 content-stretch flex flex-col gap-8 grow items-start justify-start min-h-px min-w-px relative shrink-0"
            variants={slideInFromRight}
          >
            {/* Section Title */}
            <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-start relative shrink-0 w-full">
                <div 
                  className="font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-nowrap" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5] whitespace-pre">Connect</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-6 items-start justify-start leading-[0] relative shrink-0 text-[#ffffff] w-full">
                <div 
                  className="font-medium relative shrink-0 text-[60px] tracking-[-0.6px] w-full" 
                  style={{ fontFamily: "'Anybody', sans-serif", fontVariationSettings: "'wdth' 100" }}
                >
                  <p className="leading-[1.2]">
                    {["Get", "in", "Touch"].map((word, index) => (
                      <motion.span
                        key={index}
                        className="inline-block mr-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.2 + (index * 0.1),
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
                <motion.div 
                  className="not-italic relative shrink-0 text-[20px] w-full" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                  variants={formVariants}
                  custom={0}
                >
                  <p className="leading-[1.5]">We&apos;d love to hear from you!</p>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form 
              className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full"
              onSubmit={handleSubmit}
              variants={formVariants}
              custom={1}
            >
              {/* Name Input */}
              <motion.div 
                className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full"
                variants={formVariants}
                custom={2}
              >
                <div 
                  className="leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] w-full" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5]">Name</p>
                </div>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.04)] text-white placeholder-white/60 px-3 py-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-200"
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                  whileFocus={{ scale: 1.01 }}
                  required
                />
              </motion.div>

              {/* Email Input */}
              <motion.div 
                className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full"
                variants={formVariants}
                custom={3}
              >
                <div 
                  className="leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] w-full" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5]">Email</p>
                </div>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.04)] text-white placeholder-white/60 px-3 py-2 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-200"
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                  whileFocus={{ scale: 1.01 }}
                  required
                />
              </motion.div>

              {/* Message Input */}
              <motion.div 
                className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full"
                variants={formVariants}
                custom={4}
              >
                <div 
                  className="leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[18px] w-full" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5]">Message</p>
                </div>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  rows={6}
                  className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.04)] text-white placeholder-white/60 p-3 rounded-xl w-full resize-none focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-200"
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                  whileFocus={{ scale: 1.01 }}
                  required
                />
              </motion.div>

              {/* Checkbox */}
              <motion.div 
                className="box-border content-stretch flex gap-3 items-start justify-start pb-4 pt-0 px-0 relative shrink-0"
                variants={formVariants}
                custom={5}
              >
                <motion.input
                  type="checkbox"
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleCheckboxChange}
                  className="mt-1 w-[18px] h-[18px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.04)] rounded accent-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  required
                />
                <label 
                  htmlFor="acceptTerms"
                  className="text-[#ffffff] text-[16px] cursor-pointer"
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5]">I accept the Terms</p>
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.button 
                type="submit"
                className="bg-[#ffffff] box-border content-stretch flex gap-2 items-center justify-center px-6 py-2.5 relative rounded-[100px] shrink-0 border border-[#ffffff] hover:bg-[#f0f0f0] transition-colors duration-300"
                variants={formVariants}
                custom={6}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!formData.acceptTerms}
              >
                <div 
                  className="font-bold leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5] whitespace-pre">Submit</p>
                </div>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}