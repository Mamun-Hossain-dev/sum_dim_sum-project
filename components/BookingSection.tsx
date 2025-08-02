"use client";

import Image from "next/image";
import CustomButton from "./common/CustomButton";
import { IoIosArrowDown } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  name: string;
  numberOfGuests: string;
  reservationDate: string;
  reservationTime: string;
};

const BookingSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const transformedData = {
      name: data.name,
      numberOfGuests: parseInt(data.numberOfGuests.split(' ')[0]),
      reservationDate: data.reservationDate,
      reservationTime: data.reservationTime
    };

    try {
      await axios.post(
        "https://landingpage-backend-fovb.onrender.com/api/v1/reservation",
        transformedData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      toast.success("Your table has been reserved successfully!");
      reset();
    } catch {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section className="w-full max-w-[1320px] mx-auto py-[80px] lg:py-[120px] px-4 lg:px-0 lg:h-auto flex items-center justify-between">
      <Toaster />
      <div className="relative w-full lg:max-w-[1096px] rounded-[20px] z-10 mx-auto opacity-100 lg:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between h-full lg:gap-[62px]">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[524px] max-h-[514px] h-auto mt-[20px]">
              <div className="relative w-full h-full">
                {/* Border Layer Behind */}
                <div className="absolute top-[-24px] left-[-23px] w-full h-full rounded-[20px] border block border-[#B31217] z-10"></div>

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

          {/* Right Side - Content and Form */}
          <div className="w-full lg:w-1/2 text-center lg:text-left pb-8 lg:pb-0 lg:max-w-[700px]">
            <h2
              className="font-cinzel-decorative font-bold text-3xl leading-tight tracking-normal text-[#0C0C0C] mb-4"
              style={{
                fontFamily: "Cinzel Decorative",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "136%",
              }}
            >
              Reserve Your Table for an Authentic Sum Dim Sum Experience
            </h2>
            <p
              className="font-raleway text-base leading-relaxed tracking-normal text-[#0C0C0C] mb-8"
              style={{
                fontFamily: "Raleway",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "150%",
              }}
            >
              Don’t miss the chance to savor the finest flavors of authentic dim
              sum in a warm and inviting atmosphere. Whether it’s a special
              occasion, a family gathering, or a cozy dinner for two, our
              handcrafted dishes and impeccable service make every moment
              memorable. Reserve your table now and let us take you on a
              culinary journey filled with tradition, passion, and the joy of
              exceptional food. Your unforgettable dining experience awaits!
            </p>

            {/* Form Section */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-[700px] mx-auto lg:mx-0"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-6 justify-between">
                {/* Name */}
                <div>
                  <input
                    {...register("name", { required: true, minLength: 2 })}
                    type="text"
                    placeholder="Your Name"
                    className="w-full h-[24px] p-0 border-b-[0.5px] border-gray-300 focus:outline-none focus:border-b-[#B31217]"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "150%",
                      color: "#0C0C0C",
                    }}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      Name is required (min. 2 chars).
                    </p>
                  )}
                </div>

                {/* Number of Guests Select */}
                <div>
                  <div className="relative w-full h-[24px]">
                    <select
                      {...register("numberOfGuests", { required: true })}
                      className="w-full h-full p-0 border-b-[0.5px] border-gray-300 focus:outline-none focus:border-b-[#B31217] pr-8"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "150%",
                        color: "#0C0C0C",
                        backgroundColor: "transparent",
                      }}
                    >
                      <option value="">Select Guests</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5+ People</option>
                    </select>
                    <IoIosArrowDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0C0C0C] pointer-events-none" />
                  </div>
                  {errors.numberOfGuests && (
                    <p className="text-red-500 text-xs mt-1">
                      Please select the number of people.
                    </p>
                  )}
                </div>

                {/* Date */}
                <div>
                  <div className="relative w-full h-[24px]">
                    <input
                      {...register("reservationDate", { required: true })}
                      type="date"
                      defaultValue="2025-07-21"
                      className="w-full h-full p-0 border-b-[0.5px] border-gray-300 focus:outline-none focus:border-b-[#B31217] pr-8"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "150%",
                        color: "#0C0C0C",
                      }}
                    />
                    <IoIosArrowDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0C0C0C] pointer-events-none" />
                  </div>
                  {errors.reservationDate && (
                    <p className="text-red-500 text-xs mt-1">
                      Date is required.
                    </p>
                  )}
                </div>

                {/* Time Select */}
                <div>
                  <div className="relative w-full h-[24px]">
                    <select
                      {...register("reservationTime", { required: true })}
                      className="w-full h-full p-0 border-b-[0.5px] border-gray-300 focus:outline-none focus:border-b-[#B31217] pr-8"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "150%",
                        color: "#0C0C0C",
                        backgroundColor: "transparent",
                      }}
                    >
                      <option value="">Select a time</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="12:30 PM">12:30 PM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="01:30 PM">01:30 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="02:30 PM">02:30 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="03:30 PM">03:30 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="04:30 PM">04:30 PM</option>
                      <option value="05:00 PM">05:00 PM</option>
                      <option value="05:30 PM">05:30 PM</option>
                      <option value="06:00 PM">06:00 PM</option>
                      <option value="06:30 PM">06:30 PM</option>
                      <option value="07:00 PM">07:00 PM</option>
                      <option value="07:30 PM">07:30 PM</option>
                      <option value="08:00 PM">08:00 PM</option>
                      <option value="08:30 PM">08:30 PM</option>
                      <option value="09:00 PM">09:00 PM</option>
                    </select>
                    <IoIosArrowDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0C0C0C] pointer-events-none" />
                  </div>
                  {errors.reservationTime && (
                    <p className="text-red-500 text-xs mt-1">
                      Please select a time.
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-[35px] lg:mt-[55px] flex justify-center">
                <CustomButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full max-w-[208px] disabled:opacity-50 hover:opacity-80 transition-all hover:scale-103 cursor-pointer duration-300 "
                >
                  {isSubmitting ? "Booking..." : "Book Now"}
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;