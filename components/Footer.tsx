import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-0 text-[#0C0C0C]">
      {/* Top Border */}
      <div className="w-full border-t-[0.5px] border-[#B31217]"></div>

      {/* Main Footer Content */}
      <div className="py-[64px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16">
          {/* Contact Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3
              className="font-bold text-2xl leading-[150%] mb-6"
              style={{ fontFamily: "Cinzel Decorative" }}
            >
              CONTACT
            </h3>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center justify-center lg:justify-start">
                <IoCallOutline
                  className="w-[19.5px] h-[19.5px] mr-3"
                  style={{ color: "#000000" }}
                />
                <p
                  className="font-light text-base leading-[150%]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  +1234567890
                </p>
              </div>

              {/* Address */}
              <div className="flex items-center justify-center lg:justify-start">
                <CiLocationOn
                  className="w-[19.5px] h-[19.5px] mr-3"
                  style={{ color: "#000000" }}
                />
                <p
                  className="font-light text-base leading-[150%]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Your Address Here
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center lg:justify-start">
                <CiMail
                  className="w-[19.5px] h-[19.5px] mr-3"
                  style={{ color: "#000000" }}
                />
                <p
                  className="font-normal text-base leading-[150%]"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  example@example.com
                </p>
              </div>
            </div>
          </div>

          {/* Center Section - Logo and Social Icons */}
          <div className="flex flex-col items-center pt-4">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/images/footer_vector.png"
                alt="Footer Vector"
                width={256}
                height={100}
                className="object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:opacity-70 transition-opacity duration-200"
              >
                <FaFacebookF
                  className="w-[19.5px] h-[19.5px]"
                  style={{ color: "#000000" }}
                />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:opacity-70 transition-opacity duration-200"
              >
                <FaInstagram
                  className="w-[19.5px] h-[19.5px]"
                  style={{ color: "#000000" }}
                />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:opacity-70 transition-opacity duration-200"
              >
                <FaLinkedinIn
                  className="w-[19.5px] h-[19.5px]"
                  style={{ color: "#000000" }}
                />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:opacity-70 transition-opacity duration-200"
              >
                <FaXTwitter
                  className="w-[19.5px] h-[19.5px]"
                  style={{ color: "#000000" }}
                />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center lg:items-end space-y-3">
            <p
              className="font-normal text-lg leading-[150%] text-center lg:text-right cursor-pointer hover:opacity-70 transition-opacity"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Home
            </p>
            <p
              className="font-normal text-lg leading-[150%] text-center lg:text-right cursor-pointer hover:opacity-70 transition-opacity"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              About Us
            </p>
            <p
              className="font-normal text-lg leading-[150%] text-center lg:text-right cursor-pointer hover:opacity-70 transition-opacity"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Privacy Policy
            </p>
            <p
              className="font-normal text-lg leading-[150%] text-center lg:text-right cursor-pointer hover:opacity-70 transition-opacity"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="w-full border-t-[0.5px] border-[#B31217]"></div>

      {/* Copyright */}
      <div className="py-4">
        <p
          className="font-normal text-xs leading-[150%] text-center"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Copyright 2024 &copy; SumDimSum
        </p>
      </div>
    </footer>
  );
};

export default Footer;
