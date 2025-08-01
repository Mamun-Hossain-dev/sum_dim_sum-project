import HeaderBanner from "./HeaderBanner";
import TopHeader from "./TopHeader";

const Banner = () => {
  return (
    <div className="relative h-auto min-h-[860px] lg:h-screen">
      <TopHeader />
      <HeaderBanner />
    </div>
  );
};

export default Banner;
