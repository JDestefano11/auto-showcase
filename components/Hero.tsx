import Image from "next/image";
import { FaStar, FaCar } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] mt-20 overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#1E3A5F' }}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(45deg, rgba(41,182,246,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'radial-gradient(circle 1200px at 50% -20%, rgba(41,182,246,0.15), transparent)' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-full" style={{ background: 'radial-gradient(circle 800px at 50% 120%, rgba(41,182,246,0.1), transparent)' }}></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1400px] mx-auto px-6 lg:px-16 py-12">
        {/* Left Side - Hero Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-8">
          {/* Badge */}
          <div className="relative">
            <span className="inline-flex items-center space-x-2 bg-[rgba(30,58,95,0.7)] rounded-full px-6 py-2.5 border border-[#29B6F6]/20 backdrop-blur-md shadow-xl">
              <div className="h-2.5 w-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#29B6F6' }}></div>
              <span className="text-sm font-medium" style={{ color: '#B0BEC5' }}>Premium Collection</span>
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]" style={{ color: '#FFFFFF' }}>
              Experience
              <br />
              <span className="hero-gradient">Luxury & Power</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg max-w-lg" style={{ color: '#B0BEC5' }}>
            Discover our curated collection of prestigious vehicles where luxury meets performance. Every drive becomes an unforgettable experience.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 py-6 border-y border-[#29B6F6]/20">
            <div className="flex items-center space-x-2">
              <FaCar className="text-2xl" style={{ color: '#29B6F6' }} />
              <div>
                <p className="text-2xl font-bold text-white">350+</p>
                <p className="text-sm" style={{ color: '#B0BEC5' }}>Luxury Cars</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaStar className="text-xl" style={{ color: '#29B6F6' }} />
              <div>
                <p className="text-2xl font-bold text-white">4.9</p>
                <p className="text-sm" style={{ color: '#B0BEC5' }}>User Rating</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
          </div>
        </div>

        {/* Right Side - Car Image */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center mt-16 lg:mt-0">
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 bg-[rgba(30,58,95,0.7)] backdrop-blur-md rounded-xl p-4 border border-[#29B6F6]/20 shadow-xl z-20">
            <p className="text-sm" style={{ color: '#B0BEC5' }}>Starting from</p>
            <p className="text-xl font-bold" style={{ color: '#29B6F6' }}>$299/day</p>
          </div>

          {/* Background Shape */}
          <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[90%] h-[20%]">
            <div className="w-full h-full" style={{ backgroundColor: '#29B6F6', opacity: '0.2', borderRadius: '100%', filter: 'blur(2xl)' }}></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[8px]" style={{ backgroundColor: '#29B6F6', borderRadius: 'full', filter: 'blur-md' }}></div>
          </div>

          {/* Car Image */}
          <div className="relative w-full max-w-[700px] h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              src="/hero.png"
              alt="Luxury Car"
              fill
              className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
