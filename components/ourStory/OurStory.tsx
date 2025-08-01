"use client";
import Image from "next/image";

const OurStorySection = () => {
  return (
    <div className="w-full max-w-[1320px] mx-auto lg:mt-[190px] mt-[120px] relative px-4 lg:px-0">
      <div className="block lg:hidden">
        {/* Story Section for Mobile */}
        <div className="w-full bg-[#F7E7E8] rounded-[20px] p-6 mb-6">
          <h2
            className="text-[28px] sm:text-[36px] font-bold leading-[136%] text-[#0C0C0C] mb-4"
            style={{ fontFamily: "Cinzel Decorative, serif" }}
          >
            OUR STORY
          </h2>

          <p
            className="text-[14px] sm:text-[16px] font-normal leading-[150%] text-[#0C0C0C] mb-6"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            At Sum Dim Sum, we are a local Singaporean brand that prepares dim
            sum dishes with wholehearted dedication and passion. Our chefs use
            traditional techniques to craft our dishes, ensuring that they are
            of the highest quality. Come and experience our fresh and flavorful
            cuisine.
          </p>

          <button
            className="w-[159px] h-[48px] bg-[#B31217] text-white rounded-[8px] flex items-center justify-center gap-[8px] px-[20px] py-[10px] hover:scale-105 hover:shadow-lg transition-all duration-300"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            <span className="text-[16px] font-semibold flex items-center gap-1">
              Learn More <span>&rarr;</span>
            </span>
          </button>
        </div>

        {/* Image Section for Mobile */}
        <div className="w-full">
          <div className="relative w-full h-[250px] sm:h-[300px]">
            <div className="absolute top-[-10px] left-[10px] w-full h-full rounded-[20px] border border-[#B31217] z-10 hidden"></div>
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

      {/* Desktop Layout (1325px and above) */}
      <div className="hidden xl:block">
        {/* Main Story Section */}
        <div className="relative w-full max-w-[1096px] h-auto lg:h-[389px] bg-[#F7E7E8] rounded-[20px] overflow-hidden z-10 mx-auto">
          {/* Background Tree Illustration */}
          <div
            className="absolute"
            style={{
              top: "82px",
              left: "358px",
              width: "474px",
              height: "286px",
              transform: "rotate(-180deg)",
              opacity: 1,
            }}
          >
            <Image
              src="/images/tree.png"
              alt="decorative tree background"
              width={474}
              height={286}
              className="object-contain w-full h-full rotate-[-180deg]"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="relative z-10">
            {/* Heading */}
            <h2
              className="absolute top-[60px] left-[60px] w-auto max-w-[664px] h-auto text-[48px] font-bold leading-[136%] text-[#0C0C0C]"
              style={{ fontFamily: "Cinzel Decorative, serif" }}
            >
              OUR STORY
            </h2>

            {/* Paragraph */}
            <p
              className="absolute top-[145px] left-[60px] w-auto max-w-[664px] h-auto text-[16px] font-normal leading-[150%] text-[#0C0C0C]"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              At Sum Dim Sum, we are a local Singaporean brand that prepares dim
              sum dishes with wholehearted dedication and passion. Our chefs use
              traditional techniques to craft our dishes, ensuring that they are
              of the highest quality. Come and experience our fresh and
              flavorful cuisine.
            </p>

            {/* CTA Button */}
            <button
              className="absolute top-[261px] left-[60px] w-auto h-auto bg-[#B31217] text-white rounded-[8px] flex items-center justify-center gap-[8px] px-[20px] py-[10px] hover:scale-105 hover:shadow-lg transition-all duration-300 mt-[20px]"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              <span className="text-[16px] font-semibold flex items-center gap-1">
                Learn More <span>&rarr;</span>
              </span>
            </button>
          </div>
        </div>

        {/* Stall Image Section (positioned absolutely to overlap) */}
        <div
          className="absolute w-full max-w-[512px] h-auto lg:h-[365px]"
          style={{
            top: "84px",
            left: "784px",
          }}
        >
          <div className="relative w-full h-full">
            {/* Border Layer Behind */}
            <div className="absolute top-[-20px] left-[20px] w-full h-full rounded-[20px] border xl:block hidden border-[#B31217] z-10"></div>

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

      {/* Tablet/Medium Desktop Layout (1024px to 1324px) */}
      <div className="hidden lg:block xl:hidden">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Story Section */}
          <div className="bg-[#F7E7E8] rounded-[20px] p-8 lg:p-12 relative overflow-hidden">
            {/* Background Tree - Smaller and repositioned */}
            <div
              className="absolute opacity-30"
              style={{
                top: "20px",
                right: "-50px",
                width: "200px",
                height: "150px",
                transform: "rotate(-180deg)",
              }}
            >
              <Image
                src="/images/tree.png"
                alt="decorative tree background"
                width={200}
                height={150}
                className="object-contain w-full h-full rotate-[-180deg]"
                priority
              />
            </div>

            <div className="relative z-10">
              <h2
                className="text-[36px] lg:text-[42px] font-bold leading-[136%] text-[#0C0C0C] mb-6"
                style={{ fontFamily: "Cinzel Decorative, serif" }}
              >
                OUR STORY
              </h2>

              <p
                className="text-[15px] lg:text-[16px] font-normal leading-[150%] text-[#0C0C0C] mb-8"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                At Sum Dim Sum, we are a local Singaporean brand that prepares
                dim sum dishes with wholehearted dedication and passion. Our
                chefs use traditional techniques to craft our dishes, ensuring
                that they are of the highest quality. Come and experience our
                fresh and flavorful cuisine.
              </p>

              <button
                className="w-[159px] h-[48px] bg-[#B31217] text-white rounded-[8px] flex items-center justify-center gap-[8px] px-[20px] py-[10px] hover:scale-105 hover:shadow-lg transition-all duration-300"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                <span className="text-[16px] font-semibold flex items-center gap-1">
                  Learn More <span>&rarr;</span>
                </span>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full h-[300px] lg:h-[389px]">
              {/* Border Layer Behind */}
              <div className="absolute top-[-20px] left-[20px] w-full h-full rounded-[20px] border hidden border-[#B31217] z-10"></div>

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
      </div>

      {/* Stats Section */}
      <div className="mt-[60px] xl:mt-[120px] grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
        {[
          {
            src: "/icons/happy.png",
            count: "6,000+",
            label: "Happy Guests",
          },
          {
            src: "/icons/dishes.png",
            count: "50+",
            label: "Unique Dishes",
          },
          {
            src: "/icons/badge.png",
            count: "20+",
            label: "Years Of Quality",
          },
          {
            src: "/icons/calender.png",
            count: "12+",
            label: "Monthly Events",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-white rounded-[12px] xl:rounded-[16px] p-4 xl:p-6 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="mb-3 xl:mb-4">
              <Image
                src={item.src}
                alt={item.label}
                width={40}
                height={40}
                className="object-contain xl:w-[48px] xl:h-[48px]"
              />
            </div>
            <h3
              className="text-[20px] sm:text-[24px] xl:text-[32px] font-bold text-[#0C0C0C] mb-1 xl:mb-2"
              style={{ fontFamily: "Cinzel Decorative, serif" }}
            >
              {item.count}
            </h3>
            <p
              className="text-[11px] sm:text-[12px] xl:text-[14px] font-medium text-[#0C0C0C]"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStorySection;
