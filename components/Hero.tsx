"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] mt-20 bg-[var(--background)] overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_50%_-30%,rgba(231,76,60,0.15),transparent)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_50%_100%,rgba(255,107,107,0.15),transparent)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1440px] mx-auto px-6 lg:px-16 py-8 lg:py-12 min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-6 lg:space-y-8 pt-4 lg:pt-0">
          <div className="inline-flex items-center space-x-2 bg-[rgba(30,41,59,0.5)] rounded-full px-4 py-2 border border-white/10 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse"></div>
            <span className="text-sm font-medium text-[var(--text-light)]">
              Premium Car Collection
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
            Experience
            <span className="block mt-2 hero-gradient">
              Luxury Drive
            </span>
          </h1>
          
          <p className="text-base lg:text-lg text-[var(--text-light)] max-w-xl">
            Discover our exclusive collection of premium vehicles. 
            Where sophistication meets performance in every journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <CustomButton
              title="View Models"
              containerStyles="button-primary"
              handleClick={handleScroll}
            />
            <CustomButton
              title="Learn More"
              containerStyles="button-secondary"
              handleClick={() => {}}
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full mt-8 lg:mt-12 pt-8 lg:pt-12 border-t border-white/10">
            <div className="stats-card">
              <span className="stats-number">200+</span>
              <span className="text-xs sm:text-sm text-[var(--text-light)]">Premium Cars</span>
            </div>
            <div className="stats-card">
              <span className="stats-number">99%</span>
              <span className="text-xs sm:text-sm text-[var(--text-light)]">Happy Clients</span>
            </div>
            <div className="stats-card">
              <span className="stats-number">24/7</span>
              <span className="text-xs sm:text-sm text-[var(--text-light)]">Support</span>
            </div>
          </div>
        </div>

        {/* Right Content - Car Image */}
        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[600px] mt-8 lg:mt-0">
          {/* Background Blob */}
          <div className="background-blob"></div>
          
          {/* Floating Card 1 */}
          <div className="floating-card absolute top-4 sm:top-10 right-4 sm:right-10 z-20">
            <p className="text-xs sm:text-sm text-[var(--text-light)]">Starting From</p>
            <p className="text-base sm:text-lg font-bold hero-gradient">$299/day</p>
          </div>

          {/* Car Image */}
          <div className="relative w-full h-full flex items-center justify-center px-4 lg:px-8">
            <div className="relative w-full h-full max-w-[95%] max-h-[95%]">
              <Image
                src="/hero.png"
                alt="Luxury Car Rental"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain z-10 hover:scale-105 transition-transform duration-500"
                priority
                quality={90}
                style={{
                  opacity: 1,
                  filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.25))'
                }}
              />
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="floating-card absolute bottom-4 sm:bottom-10 left-4 sm:left-10 z-20">
            <p className="text-xs sm:text-sm text-[var(--text-light)]">Quick Booking</p>
            <p className="text-base sm:text-lg font-bold hero-gradient">3 Easy Steps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
