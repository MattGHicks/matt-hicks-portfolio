"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [email, setEmail] = useState("");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * index,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const quickLinks = [
    "About Us", "Our Work", "Services", "Contact Us", "Blog Posts"
  ];

  const resources = [
    "Case Studies", "FAQs", "Testimonials", "Careers", "Events"
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "X" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Youtube, label: "Youtube" }
  ];


  return (
    <div className="bg-[#103e39] box-border content-stretch flex flex-col gap-12 items-center justify-start px-16 py-20 relative w-full overflow-hidden" ref={ref}>
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/5 rounded-full"
            style={{
              left: `${10 + i * 6}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-10, -30, -10],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 1, 0.5],
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
        className="content-stretch flex flex-col gap-20 items-start justify-start max-w-[1280px] relative shrink-0 w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Main Footer Content */}
        <div className="content-stretch flex flex-col gap-12 items-start justify-start relative shrink-0 w-full">
          {/* Top Section */}
          <div className="content-stretch flex gap-[120px] items-start justify-start relative shrink-0 w-full">
            {/* Newsletter Section */}
            <motion.div 
              className="basis-0 content-stretch flex flex-col gap-6 grow items-start justify-start max-w-[560px] min-h-px min-w-px relative shrink-0"
              variants={itemVariants}
            >
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-3 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#00D4FF] to-[#0066CC] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "'Anybody', sans-serif" }}>MH</span>
                </div>
                <div className="flex flex-col">
                  <span 
                    className="text-white font-medium text-lg leading-tight" 
                    style={{ fontFamily: "'Anybody', sans-serif" }}
                  >
                    Matt Hicks
                  </span>
                  <span 
                    className="text-white/60 text-xs leading-tight font-medium" 
                    style={{ fontFamily: "'PT Sans', sans-serif" }}
                  >
                    DigitalFish
                  </span>
                </div>
              </motion.div>

              <div 
                className="text-white text-[18px] max-w-full" 
                style={{ fontFamily: "'PT Sans', sans-serif" }}
              >
                <p className="leading-[1.5]">Join our newsletter to stay informed about our latest projects and updates.</p>
              </div>

              {/* Newsletter Form */}
              <motion.form 
                className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full"
                onSubmit={handleSubmit}
                variants={itemVariants}
              >
                <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0 w-full">
                  <motion.input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="basis-0 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.04)] text-white placeholder-white/60 px-3 py-2 rounded-xl grow min-h-px min-w-px focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all duration-200"
                    style={{ fontFamily: "'PT Sans', sans-serif" }}
                    whileFocus={{ scale: 1.01 }}
                    required
                  />
                  <motion.button 
                    type="submit"
                    className="box-border flex gap-2 items-center justify-center px-6 py-2.5 relative rounded-[100px] shrink-0 border border-[rgba(255,255,255,0.04)] text-white hover:bg-white/10 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div 
                      className="text-[18px] text-nowrap" 
                      style={{ fontFamily: "'PT Sans', sans-serif" }}
                    >
                      <p className="leading-[1.5] whitespace-pre">Subscribe</p>
                    </div>
                  </motion.button>
                </div>
                <div 
                  className="text-white text-[12px] w-full" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5]">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
                </div>
              </motion.form>
            </motion.div>

            {/* Links Section */}
            <div className="basis-0 content-stretch flex gap-8 grow items-start justify-start min-h-px min-w-px relative shrink-0">
              {/* Quick Links */}
              <motion.div 
                className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0"
                variants={itemVariants}
              >
                <div 
                  className="font-bold text-white text-[18px] w-full" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5]">Quick Links</p>
                </div>
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  {quickLinks.map((link, index) => (
                    <motion.div 
                      key={index}
                      className="box-border content-stretch flex items-start justify-start px-0 py-2 relative shrink-0 w-full cursor-pointer group"
                      variants={linkVariants}
                      custom={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div 
                        className="text-white text-[16px] group-hover:text-[#d4ebe8] transition-colors duration-200" 
                        style={{ fontFamily: "'PT Sans', sans-serif" }}
                      >
                        <p className="leading-[1.5]">{link}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Resources */}
              <motion.div 
                className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0"
                variants={itemVariants}
              >
                <div 
                  className="font-bold text-white text-[18px] w-full" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5]">Resources</p>
                </div>
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  {resources.map((resource, index) => (
                    <motion.div 
                      key={index}
                      className="box-border content-stretch flex items-start justify-start px-0 py-2 relative shrink-0 w-full cursor-pointer group"
                      variants={linkVariants}
                      custom={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div 
                        className="text-white text-[16px] group-hover:text-[#d4ebe8] transition-colors duration-200" 
                        style={{ fontFamily: "'PT Sans', sans-serif" }}
                      >
                        <p className="leading-[1.5]">{resource}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px relative shrink-0"
                variants={itemVariants}
              >
                <div 
                  className="font-bold text-white text-[18px] w-full" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                >
                  <p className="leading-[1.5]">Follow Us</p>
                </div>
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.div 
                        key={index}
                        className="box-border content-stretch flex gap-3 items-center justify-start px-0 py-2 relative shrink-0 w-full cursor-pointer group"
                        variants={linkVariants}
                        custom={index}
                        whileHover={{ scale: 1.05, x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-6 h-6 text-white group-hover:text-[#d4ebe8] transition-colors duration-200" />
                        <div 
                          className="text-white text-[16px] text-nowrap group-hover:text-[#d4ebe8] transition-colors duration-200" 
                          style={{ fontFamily: "'PT Sans', sans-serif" }}
                        >
                          <p className="leading-[1.5] whitespace-pre">{social.label}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="content-stretch flex flex-col gap-12 items-start justify-start relative shrink-0 w-full"
            variants={itemVariants}
          >
            <motion.div 
              className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-full"
              variants={itemVariants}
            >
              {/* Divider */}
              <div className="h-px relative shrink-0 w-full bg-white/20" />

              {/* Copyright and Links */}
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <motion.div 
                  className="text-white text-[16px] text-nowrap" 
                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="leading-[1.5] whitespace-pre">© 2024 Matt Hicks. All rights reserved.</p>
                </motion.div>
                <div className="content-stretch flex gap-6 items-start justify-start text-white text-[16px] text-nowrap">
                  {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((link, index) => (
                    <motion.div 
                      key={index}
                      className="relative shrink-0 cursor-pointer group"
                      style={{ fontFamily: "'PT Sans', sans-serif" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="underline leading-[1.5] text-nowrap whitespace-pre group-hover:text-[#d4ebe8] transition-colors duration-200">
                        {link}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}