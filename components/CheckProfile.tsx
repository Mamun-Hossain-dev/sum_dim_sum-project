"use client";

import Image from "next/image";

const CheckOurProfile = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 ">
        {/* Rotating text circle */}
        <div className="absolute inset-0 animate-spin-slow">
          <svg
            className="w-full h-full"
            viewBox="0 0 144 144"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="circle-path"
                d="M 72, 72 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
            </defs>
            <text className="fill-white text-[10px] sm:text-[11px] md:text-[12px] lg:text-[16px] font-medium tracking-wider">
              <textPath href="#circle-path" startOffset="0%">
                Authentic Recipes. Crafted With Love.
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center button with image */}
        <div className="absolute inset-3 sm:inset-4 md:inset-4 lg:inset-5">
          <button
            className="w-full h-full  bg-opacity-20 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-white hover:bg-opacity-30 transition-all duration-300 shadow-lg  border-opacity-20 group overflow-hidden"
            onClick={() => {
              // Add your Instagram profile link here
              window.open("https://instagram.com/sumdimsum", "_blank");
            }}
          >
            {/* Profile Image */}
            <div className="w-full h-full relative rounded-full overflow-hidden cursor-pointer">
              <Image
                src="/images/check_profile.png"
                alt="Check Our Profile"
                width={144}
                height={144}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </button>
        </div>

        {/* Custom CSS for slow rotation animation */}
        <style jsx>{`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CheckOurProfile;
