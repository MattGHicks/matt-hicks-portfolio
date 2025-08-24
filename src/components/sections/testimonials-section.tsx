"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, ChevronLeft, Building2, Palette, Star } from "lucide-react";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Deterministic positions for particles
  const particlePositions = [
    { left: 30, top: 20 }, { left: 65, top: 50 }, { left: 15, top: 80 }, { left: 85, top: 30 },
    { left: 50, top: 70 }, { left: 20, top: 45 }, { left: 90, top: 65 }, { left: 40, top: 15 },
    { left: 75, top: 85 }, { left: 10, top: 35 }
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
        delay: 0.3 + (index * 0.1),
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  // Testimonials data with Matt Hicks relevant content
  const testimonials = [
    {
      quote: "Working with Matt was a game-changer for our project.",
      name: "Sarah Johnson",
      title: "Project Manager, TechCorp",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=96&h=96&fit=crop&crop=face",
      logo: Building2,
      rating: 5
    },
    {
      quote: "The attention to detail was remarkable and inspiring.",
      name: "Michael Lee",
      title: "Director, Creative Agency",
      company: "Creative Studio",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
      logo: Palette,
      rating: 5
    },
    {
      quote: "Matt's vision brought our ideas to life beautifully.",
      name: "Emily Carter",
      title: "Founder, Design Co.",
      company: "Design Co.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face",
      logo: Building2,
      rating: 5
    },
    {
      quote: "A true professional who listens and delivers results.",
      name: "David Smith",
      title: "CEO, Startup Inc.",
      company: "Startup Inc.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face",
      logo: Palette,
      rating: 5
    },
    {
      quote: "Innovative solutions that perfectly matched our needs.",
      name: "Laura White",
      title: "Marketing Head, BrandX",
      company: "BrandX",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=face",
      logo: Building2,
      rating: 5
    },
    {
      quote: "A seamless experience from start to finish!",
      name: "Chris Brown",
      title: "Owner, Boutique Shop",
      company: "Boutique Shop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
      logo: Palette,
      rating: 5
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentTestimonials = () => {
    const start = currentSlide * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  return (
    <div className="bg-[#d4ebe8] box-border content-stretch flex flex-col gap-20 items-center justify-start px-16 py-28 relative w-full overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#0c0805]/5 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [-10, -40, -10],
              opacity: [0, 0.4, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
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
        {/* Section Title */}
        <motion.div 
          className="content-stretch flex flex-col gap-6 items-center justify-start leading-[0] max-w-[768px] relative shrink-0 text-[#0c0805] text-center w-full"
          variants={titleVariants}
        >
          <div 
            className="font-medium relative shrink-0 text-[60px] tracking-[-0.6px] w-full" 
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
                    delay: 0.2 + (index * 0.1),
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
            <p className="leading-[1.5]">Transformative design that exceeded our expectations!</p>
          </motion.div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="content-stretch flex flex-col gap-12 items-center justify-start relative shrink-0 w-full">
          {/* Testimonial Cards */}
          <div className="relative w-full">
            <motion.div 
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slideTestimonials = testimonials.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide);
                return (
                  <div key={slideIndex} className="flex gap-8 w-full px-4">
                    {slideTestimonials.map((testimonial, cardIndex) => (
                      <motion.div 
                        key={`${slideIndex}-${cardIndex}`}
                        className="bg-[#e9f5f3] box-border flex flex-col gap-8 items-start justify-start p-8 relative rounded-2xl border border-[rgba(12,8,5,0.02)] group transition-all duration-300"
                        style={{ 
                          width: `calc(${100 / itemsPerSlide}% - ${32 / itemsPerSlide}px)`,
                          minHeight: '400px'
                        }}
                        variants={cardVariants}
                        custom={cardIndex}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 20px 40px rgba(12, 8, 5, 0.1)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {/* Company Logo */}
                        <div className="content-stretch flex flex-col gap-12 items-start justify-start relative shrink-0 w-full">
                          <motion.div 
                            className="h-12 overflow-clip relative shrink-0 w-[120px] flex items-center"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-[#0c0805]/5 rounded-lg group-hover:bg-[#0c0805]/10 transition-colors duration-300">
                                <testimonial.logo className="w-6 h-6 text-[#0c0805]" />
                              </div>
                              <span 
                                className="font-medium text-[#0c0805] text-lg"
                                style={{ fontFamily: "'Anybody', sans-serif" }}
                              >
                                {testimonial.company}
                              </span>
                            </div>
                          </motion.div>

                          {/* Testimonial Content */}
                          <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                                >
                                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                </motion.div>
                              ))}
                            </div>

                            <div 
                              className="leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[20px] w-full" 
                              style={{ fontFamily: "'PT Sans', sans-serif" }}
                            >
                              <p className="leading-[1.5]">"{testimonial.quote}"</p>
                            </div>

                            {/* Avatar and Info */}
                            <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full">
                              <motion.div 
                                className="relative shrink-0 size-12 rounded-full overflow-hidden shadow-md"
                                whileHover={{ scale: 1.1 }}
                              >
                                <img 
                                  alt={testimonial.name}
                                  className="block size-full object-cover" 
                                  src={testimonial.avatar} 
                                />
                              </motion.div>
                              <div className="basis-0 content-stretch flex flex-col grow items-start justify-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0c0805] text-[18px]">
                                <div 
                                  className="font-bold relative shrink-0 w-full" 
                                  style={{ fontFamily: "'PT Sans', sans-serif" }}
                                >
                                  <p className="leading-[1.5]">{testimonial.name}</p>
                                </div>
                                <div 
                                  className="relative shrink-0 w-full text-[#0c0805]/70" 
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
                          <motion.button 
                            className="content-stretch flex gap-2 items-center justify-center relative rounded-[100px] shrink-0 group/btn hover:gap-3 transition-all duration-200"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div 
                              className="leading-[0] not-italic relative shrink-0 text-[#0c0805] text-[18px] text-nowrap group-hover/btn:text-[#103E39] transition-colors duration-200" 
                              style={{ fontFamily: "'PT Sans', sans-serif" }}
                            >
                              <p className="leading-[1.5] whitespace-pre">Read Case Study</p>
                            </div>
                            <ChevronRight className="size-6 text-[#0c0805] group-hover/btn:text-[#103E39] group-hover/btn:translate-x-1 transition-all duration-200" />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-8 justify-center w-full">
            {/* Slider Dots */}
            <div className="flex gap-2 items-center justify-center">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  className={`size-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-[#0c0805]" : "bg-[#0c0805]/20"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <motion.button 
            className="absolute bg-[#e9f5f3] box-border flex gap-2 items-center justify-center left-[-60px] p-3 rounded-full border border-[rgba(12,8,5,0.02)] hover:bg-white hover:shadow-lg transition-all duration-300 z-10"
            style={{ top: "calc(50% - 80px)" }}
            onClick={prevSlide}
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.8 }}
          >
            <ChevronLeft className="size-6 text-[#0c0805]" />
          </motion.button>

          <motion.button 
            className="absolute bg-[#e9f5f3] box-border flex gap-2 items-center justify-center p-3 right-[-60px] rounded-full border border-[rgba(12,8,5,0.02)] hover:bg-white hover:shadow-lg transition-all duration-300 z-10"
            style={{ top: "calc(50% - 80px)" }}
            onClick={nextSlide}
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.8 }}
          >
            <ChevronRight className="size-6 text-[#0c0805]" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}