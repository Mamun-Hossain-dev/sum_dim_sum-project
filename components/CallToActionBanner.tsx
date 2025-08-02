import Link from "next/link";

const CallToActionBanner = () => {
  return (
    <section
      className="relative py-[80px] lg:py-[120px] w-full bg-cover bg-center"
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
        <Link
          href="/menu"
          className="w-auto h-auto px-4 py-2 md:w-[208px] md:h-[48px] rounded-lg flex items-center justify-center text-white text-base font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl font-raleway leading-[150%] tracking-[0%] bg-[#B31217] gap-[8px]"
        >
          Explore More &rarr;
        </Link>
      </div>
    </section>
  );
};

export default CallToActionBanner;
