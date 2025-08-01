"use client";

import Image from "next/image";
import CustomButton from "./common/CustomButton";
import { IoIosArrowDown } from "react-icons/io";

const BookingSection = () => {
  return (
    <section className="w-full max-w-[1320px] mx-auto lg:mt-[120px] mt-[90px] mb-[50px] px-4 lg:px-0 lg:h-[548px] flex items-center justify-between">
      <div className="relative w-full lg:max-w-[1096px] rounded-[20px] z-10 mx-auto opacity-100 lg:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between h-full lg:gap-[62px]">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[524px] max-h-[514px] h-auto mt-[20px]">
              <div className="relative w-full h-full">
                {/* Border Layer Behind */}
                <div className="absolute top-[-24px] left-[-23px] w-full h-full rounded-[20px] border block border-[#B31217] z-10"></div>

                {/* Main Image Layer */}
                <div className="relative z-20 w-full h-full">
                  <Image
                    src="/images/stall_image.jpg"
                    alt="Sum Dim Sum stall"
                    width={512}
                    height={365}
                    className="rounded-[20px] object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content and Form */}
          <div className="w-full lg:w-1/2 text-center lg:text-left pb-8 lg:pb-0 lg:max-w-[700px]">
            <h2
              className="font-cinzel-decorative font-bold text-3xl leading-tight tracking-normal text-[#0C0C0C] mb-4"
              style={{
                fontFamily: "Cinzel Decorative",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "136%",
              }}
            >
              Reserve Your Table for an Authentic Sum Dim Sum Experience
            </h2>
            <p
              className="font-raleway text-base leading-relaxed tracking-normal text-[#0C0C0C] mb-8"
              style={{
                fontFamily: "Raleway",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "150%",
              }}
            >
              Don’t miss the chance to savor the finest flavors of authentic dim
              sum in a warm and inviting atmosphere. Whether it’s a special
              occasion, a family gathering, or a cozy dinner for two, our
              handcrafted dishes and impeccable service make every moment
              memorable. Reserve your table now and let us take you on a
              culinary journey filled with tradition, passion, and the joy of
              exceptional food. Your unforgettable dining experience awaits!
            </p>

            {/* Form Section */}
            <form className="w-full max-w-[700px] mx-auto lg:mx-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[80px] mb-6 justify-between">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-[24px] p-0 border-b-[0.5px] border-gray-300 focus:outline-none focus:border-b-[#B31217]"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "150%",
                    color: "#0C0C0C",
                  }}
                />
                <div className="relative w-full h-[24px]">
                  <input
                    type="text"
                    placeholder="1 Person"
                    className="w-full h-full p-0 border-b-[0.5px] border-gray-300 focus:outline-none focus:border-b-[#B31217] pr-8"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "150%",
                      color: "#0C0C0C",
                    }}
                  />
                  <IoIosArrowDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0C0C0C] pointer-events-none" />
                </div>
                <div className="relative w-full h-[24px]">
                  <input
                    type="date"
                    defaultValue="2025-07-21"
                    className="w-full h-full p-0 border-b-[0.5px] border-gray-300 focus:outline-none focus:border-b-[#B31217] pr-8"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "150%",
                      color: "#0C0C0C",
                    }}
                  />
                  <IoIosArrowDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0C0C0C] pointer-events-none" />
                </div>
                <div className="relative w-full h-[24px]">
                  <input
                    type="time"
                    defaultValue="21:00"
                    className="w-full h-full p-0 border-b-[0.5px] border-gray-300 focus:outline-none focus:border-b-[#B31217] pr-8"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "150%",
                      color: "#0C0C0C",
                    }}
                  />
                  <IoIosArrowDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0C0C0C] pointer-events-none" />
                </div>
              </div>
              <div className="mt-[35px] lg:mt-[55px] flex justify-center">
                <CustomButton
                  onClick={() => {}}
                  className="w-full max-w-[208px]"
                >
                  Book Now
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
