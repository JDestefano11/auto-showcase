import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Image
              src="/logo.svg"
              alt="AutoVista Logo"
              width={118}
              height={18}
              className="object-contain"
            />
            <p className="text-gray-600 max-w-xs">
              Experience luxury and performance with our premium car collection. Your journey to extraordinary begins here.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#1A202C]">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-[#3563E9] transition-colors">About Us</Link></li>
              <li><Link href="/cars" className="text-gray-600 hover:text-[#3563E9] transition-colors">Our Cars</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-[#3563E9] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[#3563E9] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#1A202C]">Contact Us</h4>
            <div className="space-y-2 text-gray-600">
              <p>123 Luxury Drive</p>
              <p>New York, NY 10001</p>
              <p>+1 (555) 123-4567</p>
              <p>info@autovista.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} AutoVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
