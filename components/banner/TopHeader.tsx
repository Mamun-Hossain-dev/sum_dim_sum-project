import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="w-full h-auto md:h-10 bg-[#0C0C0C] text-gray-300 backdrop-blur-[20px] px-4 md:px-[60px] py-2 md:py-[10px]">
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between h-full gap-y-3 md:gap-y-0">
        {/* Left Side: Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-6 md:gap-x-10 w-full md:w-auto">
          <div
            className="flex items-center text-xs font-normal leading-[1.5] whitespace-nowrap"
            style={{ fontFamily: "Raleway" }}
          >
            <FaMapMarkerAlt size={16} className="flex-shrink-0 text-gray-400" />
            <span className="ml-2">Your Address Here</span>
          </div>
          <div
            className="flex items-center text-xs font-normal leading-[1.5] whitespace-nowrap"
            style={{ fontFamily: "Raleway" }}
          >
            <FaPhoneAlt size={16} className="flex-shrink-0 text-gray-400" />
            <span className="ml-2 font-mono tracking-wide">+1234567890</span>
          </div>
          <div
            className="flex items-center text-xs font-normal leading-[1.5] whitespace-nowrap"
            style={{ fontFamily: "Raleway" }}
          >
            <FaEnvelope size={16} className="flex-shrink-0 text-gray-400" />
            <span className="ml-2">example@example.com</span>
          </div>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex items-center gap-x-4 md:gap-x-5">
          <Link
            href="#"
            aria-label="Facebook"
            className="hover:text-white transition-colors duration-200"
          >
            <FaFacebookF size={16} className="text-[#F8F8FF]" />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="hover:text-white transition-colors duration-200"
          >
            <FaInstagram size={16} className="text-[#F8F8FF]" />
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors duration-200"
          >
            <FaLinkedinIn size={16} className="text-[#F8F8FF]" />
          </Link>
          <Link
            href="#"
            aria-label="Twitter"
            className="hover:text-white transition-colors duration-200"
          >
            <FaXTwitter size={14} className="text-[#F8F8FF]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
