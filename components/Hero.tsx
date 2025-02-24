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
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1440px] px-6 lg:px-16 py-12">
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold">
            Experience
            <span className="block mt-2 hero-gradient">
              Luxury Drive
            </span>
          </h1>
          
          <p className="text-lg">
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
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="stats-card">
              <span className="stats-number">200+</span>
              <span className="text-sm text-[var(--text-light)]">Premium Cars</span>
            </div>
            <div className="stats-card">
              <span className="stats-number">99%</span>
              <span className="text-sm text-[var(--text-light)]">Happy Clients</span>
            </div>
            <div className="stats-card">
              <span className="stats-number">24/7</span>
              <span className="text-sm text-[var(--text-light)]">Support</span>
            </div>
          </div>
        </div>

        {/* Right Content - Car Image */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[600px] mt-12 lg:mt-0">
          {/* Background Shape */}
          <div className="background-blob top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Floating Card 1 */}
          <div className="floating-card absolute top-10 right-10 z-20">
            <p className="text-sm text-[var(--text-light)]">Starting From</p>
            <p className="text-lg font-bold hero-gradient">$299/day</p>
          </div>

          {/* Car Image */}
          <div className="relative w-full h-full">
            <Image
              src="https://cdn.imagin.studio/getimage?customer=img&make=lamborghini&modelFamily=huracan&modelRange=huracan&modelVariant=coupe&angle=23&zoomType=fullscreen"
              alt="Luxury Car Rental"
              fill
              className="object-contain z-10 hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {/* Floating Card 2 */}
          <div className="floating-card absolute bottom-10 left-10 z-20">
            <p className="text-sm text-[var(--text-light)]">Quick Booking</p>
            <p className="text-lg font-bold hero-gradient">3 Easy Steps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
