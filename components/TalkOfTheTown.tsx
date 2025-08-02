import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const TalkOfTheTown = () => {
  return (
    <section className="w-full py-[80px] lg:py-[120px]">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-0">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="text-[24px] sm:text-[32px] lg:text-[48px] font-bold leading-[136%] text-[#0C0C0C] capitalize px-4"
            style={{ fontFamily: "Cinzel Decorative, serif" }}
          >
            The Talk of the Town
          </h2>
          <div className="flex justify-center mt-2 sm:mt-3 lg:mt-4">
            <Image
              src="/icons/objects.png"
              alt="decorative object"
              width={100}
              height={50}
              className="object-contain w-[60px] sm:w-[80px] lg:w-[100px]"
            />
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div
        className="relative w-full mt-6 sm:mt-8 lg:mt-12 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg_image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "520px",
        }}
      >
        {/* Inner Layout Container */}
        <div className="relative w-full h-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quote Icon - Mobile */}
          <div className="absolute top-[20px] left-[20px] flex lg:hidden z-10">
            <FaQuoteLeft className="text-[40px] text-[#F8F8FF66]" />
          </div>
          {/* Quote Icon - Desktop */}
          <div className="hidden lg:flex absolute top-[60px] left-[60px] z-10">
            <FaQuoteLeft className="text-[60px] text-[#F8F8FF66]" />
          </div>

          {/* Right Arrow - Mobile */}
          <div className="absolute right-[20px] top-1/2 -translate-y-1/2 z-10 lg:hidden">
            <MdKeyboardArrowRight className="text-[40px] text-white sm:text-[50px]" />
          </div>
          {/* Right Arrow - Desktop */}
          <div className="hidden lg:block absolute top-[230px] right-[20px] z-10">
            <MdKeyboardArrowRight className="text-[60px] text-white" />
          </div>

          {/* Name Image - Mobile */}
          <div className="absolute bottom-[20px] right-[20px] lg:hidden z-10">
            <Image
              src="/images/Name.png"
              alt="name"
              width={200}
              height={60}
              className="sm:w-[250px] sm:h-[75px]"
            />
          </div>
          {/* Name Image - Desktop */}
          <div
            className="hidden lg:block absolute z-10"
            style={{ top: "351px", left: "1014px" }}
          >
            <Image src="/images/Name.png" alt="name" width={366} height={109} />
          </div>

          {/* Centered Content (Profile, Text, Stars, and Frame) */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
            {/* Profile Image */}
            <div className="w-[80px] sm:w-[90px] lg:w-[100px] h-[80px] sm:h-[90px] lg:h-[100px] rounded-full overflow-hidden mb-4 sm:mb-5 lg:mb-6">
              <Image
                src="/images/user.jpg"
                alt="User"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Testimonial Text */}
            <p
              className="text-white text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[150%] max-w-[280px] sm:max-w-[500px] lg:max-w-[994px] mb-4 sm:mb-5 lg:mb-6"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Sum Dim Sum is more than just a restaurant—it&apos;s an experience
              that transports you to the heart of Asian culinary tradition. Each
              bite is a harmonious blend of flavor, texture, and passion,
              crafted meticulously to reflect the essence of dim sum culture.
              The moment you step in, you&apos;re greeted by the comforting
              aroma of freshly steamed dumplings, the vibrant energy of a
              bustling kitchen, and the warm smiles of a team dedicated to
              delivering perfection on every plate.
            </p>

            {/* Stars */}
            <div className="flex gap-[10px] mb-[40px] sm:mb-[50px] lg:mb-[62px]">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/icons/vector.png"
                  alt="star"
                  width={35}
                  height={34}
                  className="w-[25px] sm:w-[30px] lg:w-[35px] h-auto"
                />
              ))}
            </div>

            {/* Decorative Frame - Mobile (now part of flow) */}
            <div className="mt-[62px] lg:hidden">
              <Image
                src="/icons/frame_two.png"
                alt="decorative frame"
                width={132}
                height={28}
                className="w-[80px] sm:w-[100px] lg:w-[132px] h-auto"
              />
            </div>
          </div>

          {/* Decorative Frame - Desktop (absolute positioning) */}
          <div
            className="hidden lg:block absolute z-10 left-1/2 -translate-x-1/2"
            style={{
              top: "432px",
              width: "132px",
              height: "28px",
              opacity: 1,
            }}
          >
            <Image
              src="/icons/frame_two.png"
              alt="decorative frame"
              width={132}
              height={28}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkOfTheTown;
