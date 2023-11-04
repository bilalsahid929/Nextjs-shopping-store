import React from "react";
import hero from "@/public/hero.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
const Banner = () => {
  return (
    <div
      className="w-full hero"
      //   className="w-full h-fit "
      //   style={{
      //     backgroundImage: "url(hero.png)",
      //     backgroundSize: "cover",
      //     backgroundRepeat: "no-repeat",
      //   }}
    >
      <Image
        src={hero}
        width={2000}
        height={2000}
        alt="logo"
        className="w-full py-5 px-5"
      />

      {/* <div className="hero-overlay bg-opacity-0 "></div> */}

      <div className=" top-1/2  translate-x-1/3 translate-y-full py-5 ">
        <button className="btn btn-primary  px-16 rounded-md">
          <FaArrowRightLong size={20} /> See more
        </button>
      </div>
    </div>
  );
};

export default Banner;
