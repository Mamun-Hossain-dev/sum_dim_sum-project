import Image from "next/image";
import CustomButton from "./common/CustomButton";

const CallToActionBanner = () => {
  return (
    <section
      className="relative mt-[120px] mb-[50px] w-full bg-cover bg-center py-20 md:py-32 lg:py-40"
      style={{ backgroundImage: "url('/images/bg_image.png')" }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
      <div className="relative z-10 max-w-[994px] mx-auto px-4 text-center flex flex-col items-center justify-center">
        <h2
          className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[136%] text-[#F8F8FF] mb-5"
          style={{ fontFamily: "Cinzel Decorative, serif" }}
        >
          Dive Into the World of Sumptuous Sum Dim Sum
        </h2>
        <p
          className="text-sm sm:text-base font-normal leading-[150%] text-[#E6F6FC] mb-10"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          Embark on a culinary journey where every bite tells a story of
          tradition and passion. At Sum Dim Sum, we bring you an authentic Asian
          dining experience with handcrafted dishes, vibrant flavors, and the
          warmth of our culture. From delicate dumplings to savory bites, our
          menu is a celebration of taste and artistry. Come, savor the joy of
          good food, and let every dish transport you to the heart of dim sum
          perfection.
        </p>
        <CustomButton href="/menu">Explore More &rarr;</CustomButton>
      </div>
    </section>
  );
};

export default CallToActionBanner;
