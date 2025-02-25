"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="AutoVista Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/cars" className="text-gray-600 hover:text-[#3563E9] transition-colors">
            Cars
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-[#3563E9] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-[#3563E9] transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex gap-4">
          <Link 
            href="/signin"
            className="px-6 py-2 text-[#3563E9] border border-[#3563E9] rounded-lg hover:bg-[#3563E9]/5 transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/register"
            className="px-6 py-2 bg-[#3563E9] text-white rounded-lg hover:bg-[#2851D8] transition-colors"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
