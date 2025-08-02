"use client";
import Image from "next/image";
import CustomButton from "./common/CustomButton";

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
              <div className="flex justify-center lg:justify-start pt-4 sm:pt-6">
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
        <div className="w-full lg:w-[494px] bg-gradient-to-br from-[#F7E7E8] to-[#F0D6D8] p-4 sm:p-6 md:p-8 lg:p-10 flex items-center justify-center order-2 lg:order-2 min-h-[300px] sm:min-h-[400px] lg:min-h-full">
          <div className="text-center max-w-[400px] mx-auto">
            {/* You can replace this placeholder with actual content */}
            <div className="space-y-4 sm:space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/50 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-raleway font-semibold text-lg sm:text-xl text-gray-800 mb-2">
                  Get in Touch
                </h3>
                <p className="font-raleway text-sm sm:text-base text-gray-600 leading-relaxed">
                  We&apos;d love to hear from you. Send us a message and
                  we&apos;ll respond as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
