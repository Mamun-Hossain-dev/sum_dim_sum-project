"use client";
import Image from "next/image";
import CustomButton from "./common/CustomButton";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="w-full max-w-[1320px] mx-auto py-[60px] sm:py-[80px] lg:py-[120px] px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden min-h-[600px] sm:min-h-[650px] lg:h-[746px] shadow-lg">
        {/* Left Column */}
        <div
          className="relative w-full lg:w-[826px] bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-[60px] order-1 lg:order-1"
          style={{ backgroundImage: "url('/images/contact_left.png')" }}
        >
          {/* Backdrop blur overlay */}
          <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>

          <div className="relative z-10 text-white w-full max-w-[500px] mx-auto lg:mx-0">
            {/* Header */}
            <div className="text-center lg:text-left mb-6 sm:mb-8 lg:mb-10">
              <h2 className="font-raleway font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl leading-[120%] sm:leading-[130%] lg:leading-[150%] mb-2 sm:mb-3">
                Just Say Hi !
              </h2>
              <p className="font-raleway font-normal text-sm sm:text-base lg:text-lg leading-[140%] sm:leading-[150%] opacity-90">
                Tell us more about you and we&apos;ll contact you soon.
              </p>
            </div>

            {/* Form */}
            <form className="w-full space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b-[0.5px] border-white/50 focus:outline-none focus:border-white transition-colors duration-300 pb-2 sm:pb-3 font-raleway font-medium text-sm sm:text-base text-[#E6F6FC] placeholder-[#E6F6FC]/80"
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[24px]">
                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-transparent border-b-[0.5px] border-white/50 focus:outline-none focus:border-white transition-colors duration-300 pb-2 sm:pb-3 font-raleway font-medium text-sm sm:text-base text-[#E6F6FC] placeholder-[#E6F6FC]/80"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-transparent border-b-[0.5px] border-white/50 focus:outline-none focus:border-white transition-colors duration-300 pb-2 sm:pb-3 font-raleway font-medium text-sm sm:text-base text-[#E6F6FC] placeholder-[#E6F6FC]/80"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    placeholder="Type your message here..."
                    rows={1}
                    className="w-full bg-transparent border-b-[0.5px] border-white/50 focus:outline-none focus:border-white transition-colors duration-300 pt-0 pb-2 sm:pb-3 font-raleway font-normal text-sm sm:text-base text-[#E6F6FC] placeholder-[#E6F6FC]/80 resize-none min-h-[40px]"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center lg:justify-end pt-4 sm:pt-6">
                <CustomButton
                  onClick={() => {}}
                  className="w-full sm:w-auto min-w-[200px] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105"
                >
                  Submit <span className="ml-2">&rarr;</span>
                </CustomButton>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative w-full lg:w-[494px] bg-gradient-to-br from-[#F7E7E8] to-[#F0D6D8] p-4 sm:p-6 md:p-8 lg:p-10 flex items-center justify-center order-2 lg:order-2 min-h-[300px] sm:min-h-[400px] lg:min-h-full">
          {/* Tree background image - moved down */}
          <Image
            src="/icons/Group.png"
            alt="Cherry Blossom Tree Background"
            layout="fill"
            objectFit="contain"
            className="absolute inset-0 z-0 opacity-50 translate-y-8"
          />

          <div className="relative z-10 flex flex-col justify-start h-full w-full text-[#0C0C0C] pt-[180px] pb-[229px] px-[60px]">
            <div className="text-left">
              <h3
                className="font-semibold text-2xl mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Contact Information
              </h3>
              <div
                className="space-y-2 text-base"
                style={{ fontFamily: "Open Sans, sans-serif" }}
              >
                <p>Maui, Hawaii, USA</p>
                <p>Call us: +1234567890</p>
                <p>Whatsapp: +1234567890</p>
              </div>
            </div>

            <div className="text-left mt-[60px]">
              <h3
                className="font-semibold text-2xl mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Follow Us
              </h3>
              <div className="flex justify-start space-x-4">
                <FaFacebookF className="w-5 h-5" />
                <FaInstagram className="w-5 h-5" />
                <FaTwitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Contact us image - moved up */}
          <div className="absolute bottom-[40px] right-[60px]">
            <Image
              src="/icons/contact_us.png"
              alt="Contact Us"
              width={193}
              height={51}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
