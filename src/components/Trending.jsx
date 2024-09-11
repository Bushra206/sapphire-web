//Import Swiper React components
import { useEffect } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Zoom,
} from "swiper/modules";
//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
//images
import img1 from "../assets/trending/02PRSDW24V23_1_81c54ac5-acb3-4476-b731-bb8e13e61305.webp";
import img2 from "../assets/trending/02STSDW24V21_5.webp";
import img3 from "../assets/trending/02PRSDW24V26_2_22079a84-7985-4333-9eed-90b641d9677a.webp";
import img4 from "../assets/trending/0STDFW24V210_2.webp";
import img5 from "../assets/trending/2STSDW24V25W_2_199efd62-aed4-45cd-b28c-9628fc299a68.webp";
import img6 from "../assets/trending/02STDYW24V25_1.webp";
import img7 from "../assets/trending/2SDF24V219ST_1_fd1cbf02-3d4c-43a9-9810-064a5e4be738.webp";
import img8 from "../assets/trending/02STSDW24V24_2.webp";
// import AOS from "aos";
// import "aos/dist/aos.css";
//import components
import Cards from "./Cards";

let Trending = () => {
  let trending_data = [
    {
      img: img1,
      title: "Printed Lawn Flared Shirt",
      collection: "Summer New Arrivals",
      price: 3590,
    },
    {
      img: img2,
      title: "Printed Lawn Shirt",
      collection: "Summer New Arrivals",
      price: 3590,
    },
    {
      img: img3,
      title: "Embroidered Cotton Jacquard Shirt",
      collection: "Summer New Arrivals",
      price: 5990,
    },
    {
      img: img4,
      title: "Printed Arabic Lawn Shirt",
      collection: "Summer New Arrivals",
      price: 2990,
    },
    {
      img: img5,
      title: "Embroidered Jacquard Front-open Jacket",
      collection: "Summer New Arrivals",
      price: 3590,
    },
    {
      img: img6,
      title: "Solid Dobby Shirt",
      collection: "Summer New Arrivals",
      price: 4590,
    },
    {
      img: img7,
      title: "Printed Lawn Shirt",
      collection: "Summer New Arrivals",
      price: 3990,
    },
    {
      img: img8,
      title: "Printed Lawn Shirt",
      collection: "Summer New Arrivals",
      price: 3590,
    },
  ];

  useEffect(() => {
    window.addEventListener("load", () => {
      AOS.init({
        //   disable: "phone",
        offset: 70,
        duration: 700,
        delay: 100,
        //   easing: "ease-out-cubic",
      });
    });
  }, []);

  return (
    <div className=" bg-[#fff] pb-14  text-center flex flex-col justify-center items-center w-full ">
      <h3
        data-aos="fade-up"
        className=" capitalize  leading-8 font-medium tablet:font-semibold mobile:text-1xl tablet:text-2xl sm:text-[24px] min-w-[10%] mb-10 pb-[2px] border border-b-[2px] border-x-0 border-t-0 outline-none"
      >
        Trending
      </h3>

      <Swiper
      className="w-full"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom]}
      spaceBetween={6} // default space between slides
      slidesPerView="auto"
      // autoplay={{
      //   delay: 3000, // Slide will change every 3 seconds
      //   disableOnInteraction: false, // Keeps autoplay running even after user interaction
      // }}
      loop
      navigation
      zoom
      grabCursor={true}
      breakpoints={{
        md: {
          slidesPerView: 4, // show 4 slides on medium screens
          spaceBetween: 6, // keep space between slides to 6
        },
        iphone: {
          slidesPerView: 2, // show 2 slides on small screens
          spaceBetween: 6, // keep space between slides to 6
          centeredSlides: true,
        },
      }}
    >
      {trending_data.map((data, index) => {
        return (
          <SwiperSlide key={index} className="w-[49.25%] md:w-[24.5%]">
            <div className="flex flex-col gap-3" data-aos="fade-up">
              <a href="">
                <img src={data.img} alt="hyy" />
              </a>

              <div className="dress-detail flex justify-between items-center">
                <div className="dress-dcrp flex flex-col text-left w-[55%]">
                  <a href="">
                    <h5 className="text-xs font-semibold">{data.title}</h5>
                  </a>
                  <p className="text-xs">{data.collection}</p>
                  <p className="text-xs">Rs.{data.price.toLocaleString()}</p>
                </div>

                <div className="add-to-bag  w-[35%] ">
                  <div className="w-[80%] h-[30px] bg-black rounded-md flex justify-center items-center">
                    <IoBagHandleOutline className="text-white text-base text-center" />
                  </div>
                </div>
              </div>


            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>

    </div>
  );
};

export default Trending;










// <Swiper
// modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom]}
// spaceBetween={6} // default space between slides
// slidesPerView="auto"
// // autoplay={{
// //   delay: 3000, // Slide will change every 3 seconds
// //   disableOnInteraction: false, // Keeps autoplay running even after user interaction
// // }}
// loop
// navigation
// zoom
// //   hashNavigatio= {
// //     replaceState= true
// //   }

// grabCursor={true}
// breakpoints={{
//   md: {
//     slidesPerView: 4, // show 4 slides on medium screens
//     spaceBetween: 6, // keep space between slides to 6
//   },
//   iphone: {
//     slidesPerView: 2, // show 2 slides on small screens
//     spaceBetween: 6, // keep space between slides to 6
//   },
// }}
// >
// {catagory_data.map((data, index) => {
//   return (
//     <SwiperSlide key={index} className="w-1/2 md:w-1/4">
//       <div className="flex flex-col gap-3" data-aos="fade-up">
//         <a href="">
//           <img src={data.img} alt="" className="" />
//         </a>
//         <div className="dress-detail flex justify-between items-center">
//           <div className="dress-dcrp flex flex-col text-left w-[55%]">
//             <a href="">
//               <h5 className="text-xs font-semibold">{data.title}</h5>
//             </a>
//             <p className="text-xs">{data.collection}</p>
//             <p className="text-xs">Rs.{data.price.toLocaleString()}</p>
//           </div>


//           <div className="add-to-bag  w-[35%] ">
//             <div className="w-[80%] h-[30px] bg-black rounded-md flex justify-center items-center">
//               <IoBagHandleOutline className="text-white text-base text-center" />
//             </div>
//           </div>
//         </div>


//       </div>
//     </SwiperSlide>
//   );
// })}
// </Swiper>
