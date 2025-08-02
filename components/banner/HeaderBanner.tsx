"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import CheckOurProfile from "@/components/CheckProfile";

const HeaderBanner = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu & Locations" },
    { href: "/reservation", label: "Reservation" },
    { href: "/merchandise", label: "Merchandise" },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative min-h-[700px] lg:min-h-[940px] flex flex-col justify-center items-center">
      {/* Background Banner Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero_banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Header Navigation */}
      <nav className="absolute z-20 w-full top-4 sm:top-6 md:top-[25px] left-0 px-4 sm:px-6 md:px-[60px]">
        <div className="max-w-[1320px] h-12 sm:h-14 md:h-[50px] mx-auto flex items-center justify-between">
          {/* Brand Name */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/images/Vector.png"
                alt="Sum Dim Sum Logo"
                width={120}
                height={40}
                className="sm:w-[135px] sm:h-[45px] md:w-[148px] md:h-[50px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-6 xl:space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-white text-sm xl:text-base leading-normal transition-all duration-200 hover:text-gray-200 ${
                    pathname === link.href ? "font-bold" : "font-normal"
                  }`}
                  style={{ fontFamily: "Raleway" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Book a Table Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/reservation"
              className="w-[120px] xl:w-[138px] h-10 xl:h-[44px] flex items-center justify-center text-white text-xs xl:text-sm font-medium py-2 xl:py-[10px] px-4 xl:px-[20px] border border-transparent hover:border-white bg-[#FFFFFF1F] rounded-lg transition-all duration-300 cursor-pointer hover:bg-[#FFFFFF30]"
            >
              Book a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors duration-200 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6 sm:h-7 sm:w-7" />
              ) : (
                <HiMenu className="h-6 w-6 sm:h-7 sm:w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Side Panel */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={closeMobileMenu}
          >
            <div
              className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-black bg-opacity-95 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-40 ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button inside panel */}
              <button
                onClick={closeMobileMenu}
                className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <HiX className="h-6 w-6" />
              </button>

              {/* Mobile Navigation Links and Button */}
              <div className="flex flex-col h-full pt-16 pb-8 px-6">
                <div className="flex flex-col space-y-6 flex-grow">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`text-lg leading-normal transition-all duration-200 hover:text-gray-200 hover:bg-gray-700 hover:bg-opacity-10 py-3 px-4 rounded-md ${
                        pathname === link.href
                          ? "font-bold text-[#B31217] bg-white bg-opacity-15 border-l-4 border-[#B31217]"
                          : "font-normal text-white"
                      }`}
                      style={{ fontFamily: "Raleway" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile Book a Table Button */}
                <div className="mt-auto pt-6 border-t border-gray-600">
                  <Link
                    href="/reservation"
                    onClick={closeMobileMenu}
                    className="w-full h-12 flex items-center justify-center text-white text-base font-medium border border-[#B31217] bg-[#B31217] rounded-lg transition-all duration-300 hover:bg-[#9A0F13] hover:border-[#9A0F13] shadow-lg"
                  >
                    Book a Table
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Banner Content */}
      <div className="relative z-10 w-full text-center px-4 sm:px-6">
        <div className="max-w-[1320px] mx-auto h-auto flex flex-col items-center justify-center">
          <h1
            className="font-bold text-white text-center w-full opacity-100 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight sm:leading-[120%] md:leading-[130%] lg:leading-[136%] mb-4 sm:mb-6 lg:mb-0 lg:h-[174px]"
            style={{
              fontFamily: "Cinzel Decorative",
              letterSpacing: "0%",
            }}
          >
            Welcome to SUM DIM SUM – Where Every Bite Tells a Story
          </h1>
          <p
            className="text-white text-sm sm:text-base text-center mt-4 sm:mt-5 lg:mt-[20px] max-w-4xl mx-auto px-2"
            style={{
              fontFamily: "Raleway",
              fontWeight: 400,
              lineHeight: "150%",
              letterSpacing: "0%",
            }}
          >
            At Sum Dim Sum, we bring families and friends together over the
            timeless tradition of sharing delectable dishes. From our expertly
            crafted dim sum to our vibrant ambiance, every moment here is a
            celebration of taste and togetherness. Explore our menu, reserve
            your table, or order your favorites online today!
          </p>
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-[60px] flex items-center justify-center">
            <Link
              href="/menu"
              className="w-auto h-auto px-4 py-2 md:w-[208px] md:h-[48px] rounded-lg flex items-center justify-center text-white text-base font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl font-raleway leading-[150%] tracking-[0%] bg-[#B31217] gap-[8px]"
            >
              Explore Our Menu &rarr;
            </Link>
          </div>

          {/* Check Our Profile Component */}
          <div className="flex justify-end w-full">
            <CheckOurProfile className="mt-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBanner;
