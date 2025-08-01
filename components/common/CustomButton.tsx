import Link from "next/link";

interface CustomButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ href, children, className }) => {
  const baseClasses = "w-auto h-auto px-4 py-2 md:w-[208px] md:h-[48px] rounded-lg flex items-center justify-center text-white text-base font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl font-raleway leading-[150%] tracking-[0%] bg-[#B31217] gap-[8px]";
  const finalClassName = className || baseClasses;

  return (
    <Link
      href={href}
      className={finalClassName}
    >
      {children}
    </Link>
  );
};

export default CustomButton;
