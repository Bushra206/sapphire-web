import React from "react";
import hero1 from "../assets/hero-section-images/hero1.webp";
import hero2 from "../assets/hero-section-images/hero2.webp";
import hero3 from "../assets/hero-section-images/hero3.webp";
import hero4 from "../assets/hero-section-images/hero4.webp";
import hero5 from "../assets/hero-section-images/hero1-mobile.webp";
import hero6 from "../assets/hero-section-images/hero2-mobile.webp";
import hero7 from "../assets/hero-section-images/hero3-mobile.webp";
import hero8 from "../assets/hero-section-images/hero4-mobile.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/autoplay";
import { EffectFade } from "swiper/modules";

function Hero() {
  return (
    <Swiper
      className="custom-swiper w-full"
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      effect="fade"
      // autoplay={{
      //   delay: 3000, // Slide will change every 3 seconds
      //   disableOnInteraction: false, // Keeps autoplay running even after user interaction
      // }}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: false }}
    >
      <SwiperSlide>
        <div
          className=" flex flex-col w-[100%] h-[70vh] hidden md:block"
          style={{
            backgroundImage: `url(${hero1})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
          }}
        >
          <h1></h1>
        </div>
        <div
          className=" flex flex-col w-[100vw] h-[400px] mobile:h-[500px]  sm:h-[630px] md:hidden"
          style={{
            backgroundImage: `url(${hero5})`,
            backgroundSize: "100% 100%",
             minHeight: 400,
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
          }}
        >
          <h1></h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="flex flex-col w-[100%] h-[70vh] hidden md:block"
          style={{
            backgroundImage: `url(${hero2})`,
            backgroundSize: "100% 100% ",
            backgroundRepeat: "no-repeat",
            // objectFit: "cover",
            // maxWidth: "2000px",
            // maxHeight: "100vh ",
          }}
        >
          <div className="relative flex flex-col justify-center items-center w-[50vw] h-[100%]">
            <p className="text-[30px] lg:text-[50px] font-bold m-0 p-0 ">
              UNSTITCHED
            </p>
            <p className="text-[25px] font-medium ">INTERMIX</p>
            <a className="bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000] p-2 text-center rounded-lg w-[130px] mt-1 cursor-pointer ">
              SHOP NOW
            </a>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-end w-[100vw] h-[400px] mobile:h-[500px]  sm:h-[630px] md:hidden"
          style={{
            backgroundImage: `url(${hero6})`,
            backgroundSize: "100% 100%",
             minHeight: 400,
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
          }}
        >
          <div className="relative flex flex-col items-center z-10">
            <p className="text-[20px] mobile:text-[25px]  font-bold m-0 p-0 text-[#fff] ">
              UNSTITCHED
            </p>
            <p className="text-[16px] mobile:text-[20px] font-medium text-[#fff] ">INTERMIX</p>
            <a className="bg-[#000] text-[11px] mobile:text-[14px] text-[#fff] hover:bg-[#fff] hover:text-[#000] p-1 text-center rounded-lg w-[100px] mt-1 mb-6 cursor-pointer ">
              SHOP NOW
            </a>
          </div>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="flex flex-col  w-[100%] h-[70vh] hidden md:block"
          style={{
            backgroundImage: `url(${hero3})`,
            backgroundSize: "100% 100% ",
            backgroundRepeat: "no-repeat",
            // objectFit: "cover",
            // maxWidth: "2000px",
            // maxHeight: "100vh ",
          }}
        >
          <div
            className="absolute right-0 flex flex-col justify-center items-center w-[60vw] h-[100%]"
            // style={{
            //   top: "50%",
            //   left: "50%",
            //   transform: "translate(-50%, -50%)",
            // }}
          >
            <p className="text-[30px] lg:text-[50px] font-bold m-0 p-0 text-[#fff] ">
              MODEST WEAR
            </p>
            <p className="text-[25px] font-medium text-[#fff]">NEW ARRIVAL</p>
            <a className="bg-[#fff] text-[#000] hover:bg-[#000] hover:text-[#fff] p-2 text-center w-[130px] mt-1 rounded-lg cursor-pointer">
              SHOP NOW
            </a>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-end w-[100vw] h-[400px] mobile:h-[500px]  sm:h-[630px] md:hidden"
          style={{
            backgroundImage: `url(${hero7})`,
            backgroundSize: "100% 100%",
             minHeight: 400,
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
          }}
        >
          <div className="relative flex flex-col items-center z-10">
            <p className="text-[20px] mobile:text-[25px]  font-bold m-0 p-0 text-[#fff] ">
            MODEST WEAR
            </p>
            <p className="text-[16px] mobile:text-[20px] font-medium text-[#fff] ">NEW ARRIVAL</p>
            <a className="bg-[#000] text-[11px] mobile:text-[14px] text-[#fff] hover:bg-[#fff] hover:text-[#000] p-1 text-center rounded-lg w-[100px] mt-1 mb-6 cursor-pointer ">
              SHOP NOW
            </a>
          </div>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="flex flex-col  w-[100%] h-[70vh] hidden md:block"
          style={{
            backgroundImage: `url(${hero4})`,
            backgroundSize: "100% 100% ",
            backgroundRepeat: "no-repeat",
            // objectFit: "cover",
            // maxWidth: "2000px",
            // maxHeight: "100vh ",
          }}
        >
          <div
            className="absolute right-0 flex flex-col justify-center items-center w-[60vw] h-[100%]"
            // style={{
            //   top: "50%",
            //   left: "50%",
            //   transform: "translate(-50%, -50%)",
            // }}
          >
            <p className="text-[30px] lg:text-[50px] font-bold m-0 p-0 text-[#000] ">
              MAN
            </p>
            <p className="text-[25px] font-medium text-[#000]">INTERMIX</p>
            <div className="flex gap-2">
              <a className="text-[14px] font-semibold bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000] p-2  text-center w-[160px] mt-1 rounded-lg cursor-pointer">
                SHOP STITCHED
              </a>
              <a className="text-[14px] font-semibold bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000] p-2 px-4 text-center w-[180px] mt-1 rounded-lg cursor-pointer">
                SHOP UNSTITCHED
              </a>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-end w-[100vw] h-[400px] mobile:h-[500px]  sm:h-[630px] md:hidden"
          style={{
            backgroundImage: `url(${hero8})`,
            backgroundSize: "100% 100%",
             minHeight: 400,
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
          }}
        >
          <div className="relative flex flex-col items-center z-10">
            <p className="text-[20px] mobile:text-[25px]  font-bold m-0 p-0 text-[#fff] ">
            MAN
            </p>
            <p className="text-[16px] mobile:text-[20px] font-medium text-[#fff] ">INTERMIX</p>
            <div className="flex gap-2 mb-6">
              <a className="text-[11px] mobile:text-[13px] font-semibold bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000] p-2  text-center w-[130px] mobile:w-[150px] mt-1 rounded-lg cursor-pointer">
                SHOP STITCHED
              </a>
              <a className="text-[11px] mobile:text-[13px] font-semibold bg-[#000] text-[#fff] hover:bg-[#fff] hover:text-[#000] p-2 px-4 text-center w-[150px] mobile:w-[170px] mt-1 rounded-lg cursor-pointer">
                SHOP UNSTITCHED
              </a>
            </div>
          </div>

        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;
