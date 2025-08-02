import React from "react";

type CustomButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"button">;

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className,
  ...props
}) => {
  const baseClasses =
    "w-auto h-auto px-4 py-2 md:w-[208px] md:h-[48px] rounded-lg flex items-center justify-center text-white text-base font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl font-raleway leading-[150%] tracking-[0%] bg-[#B31217] gap-[8px]";
  const finalClassName = `${baseClasses} ${className || ""}`.trim();

  return (
    <button {...props} className={finalClassName}>
      {children}
    </button>
  );
};

export default CustomButton;
