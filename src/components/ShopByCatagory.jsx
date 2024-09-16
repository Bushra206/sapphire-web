// Import Swiper React components
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Zoom,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
//images
import img1 from "../../public/assets/shop-by-catagory/sbc-unstitched_0449fee1-5de7-4538-ab7d-b7f283abab1d.webp";
import img2 from "../../public/assets/shop-by-catagory/sbc-RTW_37f6bfef-e209-48e2-ad23-917c57a1f031.webp";
import img3 from "../../public/assets/shop-by-catagory/sbc-menswear.webp";
import img4 from "../../public/assets/shop-by-catagory/sbc-west_aae3beb4-5de7-4708-94a0-b590dbc1f04d.webp";
import img5 from "../../public/assets/shop-by-catagory/sbc-kids_fe3a6287-800c-4e7a-acbf-e2c08776791b.webp";
import img6 from "../../public/assets/shop-by-catagory/sbc-fragrance.webp";
import img7 from "../../public/assets/shop-by-catagory/sbc-modest-wear_b036d0ea-9609-44bb-a2f8-f1c79aa1ed33.webp";
import img8 from "../../public/assets/shop-by-catagory/sbc-home_8532312c-cad4-4121-a657-3206a4af4eae.webp";
import img9 from "../../public/assets/shop-by-catagory/sbc-accessories_7ae208fe-1be3-4922-add6-3b7956108ce1.webp";
import AOS from "aos";
import "aos/dist/aos.css";

let ShopByCatagory = () => {
  let catagory_data = [
    {
      img: img1,
      title: "UNSTITCHED",
    },
    {
      img: img2,
      title: "READY TO WEAR",
    },
    {
      img: img3,
      title: "MAN",
    },
    {
      img: img4,
      title: "WEST",
    },
    {
      img: img5,
      title: "KIDS",
    },
    {
      img: img6,
      title: "BEAUTY",
    },
    {
      img: img7,
      title: "MODEST WEAR",
    },
    {
      img: img8,
      title: "HOME",
    },
    {
      img: img9,
      title: "ACCESSORIES",
    },
  ];

  useEffect(() => {
    AOS.init({
      //   disable: "phone",
      offset: 70,
      duration: 700,
      delay: 100,
      //   easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className=" bg-[#fff] pb-14  text-center flex flex-col justify-center items-center w-full ">
      <h3
        data-aos="fade-up"
        className=" capitalize  leading-8 font-medium tablet:font-semibold mobile:text-1xl tablet:text-2xl sm:text-[24px] min-w-[25%] mb-10 pb-[2px] border border-b-[2px] border-x-0 border-t-0 outline-none"
      >
        SHOP BY CATEGORY
      </h3>
      <Swiper
        className="w-full"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom]}
        spaceBetween={6} // default space between slides
        slidesPerView="auto"
        // autoplay={{
        //   delay:3000, // Slide will change every 3 seconds
        //   disableOnInteraction: false, // Keeps autoplay running even after user interaction
        // }}
        loop
        navigation
        zoom
        //   hashNavigatio= {
        //     replaceState= true
        //   }

        grabCursor={true}
        breakpoints={{
          md: {
            slidesPerView: 4, // show 4 slides on medium screens
            spaceBetween: 6, // keep space between slides to 6
          },
          iphone: {
            slidesPerView: 2, // show 2 slides on small screens
            spaceBetween: 6, // keep space between slides to 6
          },
        }}
      >
        {catagory_data.map((data, index) => {
          return (
            <SwiperSlide key={index} className="w-1/2 md:w-1/4">
              <div className="flex flex-col gap-3" data-aos="fade-up">
                <a href="">
                  <img src={data.img} alt="" className="" />
                </a>
                <a
                  href=""
                  className=" text-[#222] text-center text-[14px] font-semibold leading-[16px]"
                >
                  {data.title}
                </a>
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
       <SwiperSlide key={index} className="max-w-[379px] max-h-[422px] md:max-w-[495px] md:max-h-[538px]">
            <div className="flex flex-col gap-3">
              <a href="">
                <img src={data.img} alt="" className="max-w-[379px] max-h-[379px] md:max-w-[495px] md:max-h-[495px]" />
              </a>
              <a href="" className="max-w-[379px] max-h-[43px] md:max-w-[495px] md:max-h-[43px] text-[#222] text-center text-[16px] font-semibold leading-[16px]">
                {data.title}
              </a>
            </div>
            //{" "}
          </SwiperSlide>*/}
      </Swiper>
    </div>
  );
};

export default ShopByCatagory;
