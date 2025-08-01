"use client";
import Image from "next/image";

const foodItems = [
  {
    id: 1,
    title: "Wolfberry with Mushroom Siew Mai 枸杞子烧卖",
    description:
      "A traditional dim sum favorite featuring steamed dumplings filled with succulent pork, mushrooms, and topped with wolfberries for a hint of sweetness.",
    image: "/images/food_item1.png",
    widthClass: "lg:max-w-[848px]",
    width: 848,
  },
  {
    id: 2,
    title: "Steamed Crystal Shrimp Dumplings 虾饺",
    description:
      "Delicate, translucent dumplings filled with juicy shrimp, a classic dim sum staple.",
    image: "/images/food_item2.jpg",
    widthClass: "lg:max-w-[448px]",
    width: 448,
  },
  {
    id: 3,
    title: "Pan-Fried Radish Cake 萝卜糕",
    description:
      "Savory cubes of radish and rice flour, pan-fried to a crispy golden brown.",
    image: "/images/food_item3.jpg",
    widthClass: "lg:max-w-[448px]",
    width: 448,
  },
  {
    id: 4,
    title: "Steamed BBQ Pork Buns 叉烧包",
    description:
      "Fluffy steamed buns with a savory-sweet filling of Cantonese barbecue pork.",
    image: "/images/food_item4.jpg",
    widthClass: "lg:max-w-[848px]",
    width: 848,
  },
];

const Tradition = () => {
  return (
    <section className="w-full max-w-[1320px] mx-auto mt-[120px] mb-[50px] px-4 lg:px-0">
      <div className="text-center">
        <h1
          className="text-[48px] font-bold leading-[136%] text-[#0C0C0C]"
          style={{ fontFamily: "Cinzel Decorative, serif" }}
        >
          Taste the Tradition
        </h1>
        <div className="flex justify-center mt-4">
          <Image
            src="/icons/objects.png"
            alt="decorative object"
            width={100}
            height={50}
          />
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-6">
        {[
          [foodItems[0], foodItems[1]],
          [foodItems[2], foodItems[3]],
        ].map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col lg:flex-row gap-6">
            {row.map((item) => (
              <div
                key={item.id}
                className={`group relative w-full ${item.widthClass} h-[410px] rounded-[20px] overflow-hidden`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={410}
                  className="object-cover w-full h-full"
                />
                <div className="hidden lg:block absolute bottom-0 left-0 w-full h-[151px] p-5 bg-black/40 backdrop-blur-lg rounded-b-[20px] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <div className="flex justify-between items-center h-full">
                    <div className="text-[#F8F8FF] max-w-[calc(100%-186px)]">
                      <h3
                        className="text-lg font-semibold leading-tight"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm font-normal mt-2"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                      >
                        {item.description}
                      </p>
                    </div>
                    <button
                      className="w-[166px] h-12 border border-white/80 rounded-lg text-[#F8F8FF] px-5 py-2.5 flex-shrink-0 cursor-pointer hover:bg-white/20 transition-colors duration-300"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      View Details &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Image
          src="/icons/frame.png"
          alt="decorative frame"
          width={132}
          height={28}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Tradition;
