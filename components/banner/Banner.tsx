import HeaderBanner from "./HeaderBanner";
import TopHeader from "./TopHeader";

const Banner = () => {
  return (
    <div className="relative h-auto pb-[80px] lg:pb-[120px]">
      <TopHeader />
      <HeaderBanner />
    </div>
  );
};

export default Banner;
