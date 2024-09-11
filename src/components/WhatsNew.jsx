import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
//whatsnew images
import WhatsNewImage1 from "../assets/Cicular-images/whats-new-images/what_s-new-_-botanical-bliss.jpg";
import WhatsNewImage2 from "../assets/Cicular-images/whats-new-images/unstitched-what_s-new_adf1450e-e5a8-4898-b145-1fb4f8768a80.avif";
import WhatsNewImage3 from "../assets/Cicular-images/whats-new-images/what_s-new-_-mommy-_-me.avif";
import WhatsNewImage4 from "../assets/Cicular-images/whats-new-images/what_s-new-_-the-resort-edit.avif";
import WhatsNewImage5 from "../assets/Cicular-images/whats-new-images/what_s-new-_-classic-chikankari.avif";
import WhatsNewImage6 from "../assets/Cicular-images/whats-new-images/man-what_s-new.jpg";
import WhatsNewImage7 from "../assets/Cicular-images/whats-new-images/fragrance-what_s-new.avif";
import WhatsNewImage8 from "../assets/Cicular-images/whats-new-images/whats_new___home_d9857c45-a5ad-4e38-918d-e480d1306f26.avif";
import AOS from "aos";
import "aos/dist/aos.css";

function WhatsNew() {
  useEffect(() => {
    window.addEventListener("load", () => {
      AOS.init({
        //   disable: "phone",
        offset: 70,
        duration: 500,
        delay: 100,
        //   easing: "ease-out-cubic",
      });
    });
  }, []);

  let WhatsNew_data = [
    {
      img: WhatsNewImage1,
      title_html: (
        <div>
          Botanical Bliss <br /> Ready to Wear
        </div>
      ),
    },
    {
      img: WhatsNewImage2,
      title_html: (
        <div>
          Signature <br /> Unstitched
        </div>
      ),
    },
    {
      img: WhatsNewImage3,
      title_html: <div>Mommy &amp; Me</div>,
    },
    {
      img: WhatsNewImage4,
      title_html: (
        <div>
          The Resort Edit <br /> WEST
        </div>
      ),
    },
    {
      img: WhatsNewImage5,
      title_html: (
        <div>
          Chikankari <br /> Ready to Wear
        </div>
      ),
    },
    {
      img: WhatsNewImage6,
      title_html: (
        <div>
          Men's Stitched <br /> Summer New Arrivals
        </div>
      ),
    },
    {
      img: WhatsNewImage7,
      title_html: <div>Fragrances</div>,
    },
    { img: WhatsNewImage8, title_html: <div>Home</div> },
  ];

  return (
    <>
      <div className="whats-new bg-[#fff] px-8 py-14 text-center flex justify-center items-center gap-10 w-full ">
        <h1
          data-aos="fade-up"
          className=" capitalize tracking-wide leading-tight font-medium tablet:font-normal mobile:text-1xl tablet:text-2xl sm:text-3xl  text-left"
        >
          WHAT'S <br /> NEW
        </h1>

        <Swiper
          slidesPerView="auto"
          centeredSlides={false}
          spaceBetween={8}
          grabCursor={true}
          //   pagination={{
          //     clickable: true,
          //   }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {WhatsNew_data.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="circular-slider-slide w-[92px] h-[145px] sm:w-[120px] sm:h-[190px]"
              >
                <div className="whats-new-slide flex flex-col justify-center items-center gap-3 ">
                  <a href="">
                    <img
                      className="circular-slider-image border-2 rounded-full w-[92px] h-[92px] sm:w-[120px] sm:h-[120px]"
                      src={item.img}
                      alt=""
                      data-aos="fade-up"
                    />
                  </a>
                  <a href="">
                    <p
                      className="cstm-title-whats-new m-0 p-0 text-[12px] text-[#000] leading-5 w-[92px] h-[43px] sm:w-[120px] sm:h-[32px]"
                      data-aos="fade-up"
                    >
                      {item.title_html}
                      {/* {WhatsNew[0].title_html}{{ __html: WhatsNew[0].title_html }} */}
                    </p>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default WhatsNew;

// return (
//   <SwiperSlide className={`w-[92px] h-[135px] sm:w-[120px] sm:h-[190px]`}>
//   <div className="whats-new-slide flex flex-col justify-center items-center gap-3 ">
//     <a href="">
//       <img
//         className="border border-2 rounded-full w-[92px] h-[92px] sm:w-[120px] sm:h-[120px]"
//         src={item.img}
//         alt=""
//         data-aos="fade-up"
//       />
//     </a>
//     <a href="">
//       <p
//         class="cstm-title-whats-new m-0 p-0 text-[12px] text-[#000] leading-5 w-[92px] h-[43px] sm:w-[120px] sm:h-[32px]"
//         data-aos="fade-up"

//       >
//         { item.title_html }
//         {/* {WhatsNew[0].title_html}{{ __html: WhatsNew[0].title_html }} */}
//       </p>
//     </a>
//   </div>
// </SwiperSlide>
// );

{
  /* <SwiperSlide className={`w-[${container.width}px] h-[${container.height}px] sm:w-[${container.smWidth}px] sm:h-[${container.smHeight}px]`}>
          <div className="whats-new-slide flex flex-col justify-center items-center gap-3 ">
            <a href="">
              <img
                className={`border border-2 rounded-full w-[${box.width}px] h-[${box.height}px] sm:w-[${box.smwidth}px] sm:h-[${box.smheight}px]`}
                src={item.img}
                alt=""
                data-aos="fade-up"
              />
            </a>
            <a href="">
              <p
                class={`cstm-title-whats-new m-0 p-0 text-[12px] text-[#000] leading-5 w-[${h3.width}px] h-[${h3.height}px] sm:w-[${h3.smwidth}px] sm:h-[${h3.smheight}px]`}
                data-aos="fade-up"

              >
                { item.title_html }

              </p>
            </a>
          </div>
        </SwiperSlide> */
}

//  <SwiperSlide className="w-[92px] h-[135px] sm:w-40 sm:h-60">
// <div className="whats-new-slide flex flex-col justify-center items-center gap-2 ">
//   <a href="">
//     <img
//       className="border border-2 rounded-full w-[92px] h-[92px] sm:w-40 sm:h-40"
//       src="src\assets\whats-new-images\what_s-new-_-botanical-bliss.jpg"
//       alt=""
//       data-aos="fade-up"
//     />
//   </a>
//   <a href="">
//     <h3
//       class="cstm-title-whats-new m-0 p-0 text-black-500 w-[92px] h-[43px] sm:w-40 sm:h-20"
//       data-aos="fade-up"
//       dangerouslySetInnerHTML={{ __html: WhatsNew[0].title_html}}
//     >
//        Botanical Bliss <br /> Ready to Wear{" "}
//        {WhatsNew[0].title_html}{{ __html: WhatsNew[0].title_html }}
//     </h3>
//   </a>
// </div>
// </SwiperSlide>
// <SwiperSlide className="w-[92px] h-[135px] sm:w-40 sm:h-60">
// <div className="whats-new-slide flex flex-col justify-center items-center gap-2">
//   <a href="">
//     <img
//       className="border border-2 rounded-full w-[92px] h-[92px] sm:w-40 sm:h-40"
//       src="src\assets\whats-new-images\unstitched-what_s-new_adf1450e-e5a8-4898-b145-1fb4f8768a80.avif"
//       alt=""
//       data-aos="fade-up"
//     />
//   </a>
//   <a href="">
//     <h3
//       class="cstm-title-whats-new m-0 p-0 w-[92px] h-[43px] sm:w-40 sm:h-20"
//       data-aos="fade-up"
//     >
//       Signature <br />
//       Unstitched{" "}
//     </h3>
//   </a>
// </div>
// </SwiperSlide>
// <SwiperSlide
// className="w-[92px] h-[135px] sm:w-40 sm:h-60"

// >
// <div className="whats-new-slide flex flex-col justify-center items-center gap-2">
//   <a href="">
//     <img
//       className="border border-2 rounded-full w-[92px] h-[92px] sm:w-40 sm:h-40"
//       src="src\assets\whats-new-images\what_s-new-_-mommy-_-me.avif"
//       alt=""
//       data-aos="fade-up"

//     />
//   </a>
//   <a href="">
//     <h3 className="cstm-title-whats-new w-[92px] h-[43px] sm:w-40 sm:h-20" data-aos="fade-up">
//       Mommy &amp; Me
//     </h3>
//   </a>
// </div>
// </SwiperSlide>
// <SwiperSlide
// className="w-[92px] h-[135px] sm:w-40 sm:h-60"
// data-aos="zoom-in"
// >
// <div className="whats-new-slide flex flex-col justify-center items-center gap-2">
//   <a href="">
//     <img
//       className="border border-2 rounded-full w-[92px] h-[92px] sm:w-40 sm:h-40"
//       src="src\assets\whats-new-images\what_s-new-_-the-resort-edit.avif"
//       alt=""
//       data-aos="fade-up"
//     />
//   </a>
//   <a href="">
//     <h3 className="cstm-title-whats-new w-[92px] h-[43px] sm:w-40 sm:h-20" data-aos="fade-up">
//       The Resort Edit <br /> WEST
//     </h3>
//   </a>
// </div>
// </SwiperSlide>
// <SwiperSlide className="w-[92px] h-[135px] sm:w-40 sm:h-60">
// <div className="whats-new-slide flex flex-col justify-center items-center gap-2">
//   <a href="">
//     <img
//       className="border border-2 rounded-full w-[92px] h-[92px] sm:w-40 sm:h-40"
//       src="src\assets\whats-new-images\what_s-new-_-classic-chikankari.avif"
//       alt=""
//       data-aos="fade-up"
//     />
//   </a>
//   <a href="">
//     <h3 className="cstm-title-whats-new w-[92px] h-[43px] sm:w-40 sm:h-20" data-aos="fade-up">
//       Chikankari <br /> Ready to Wear
//     </h3>
//   </a>
// </div>
// </SwiperSlide>
// <SwiperSlide className="w-[92px] h-[135px] sm:w-40 sm:h-60">
// <div className="whats-new-slide flex flex-col justify-center items-center gap-2">
//   <a href="">
//     <img
//       className="border border-2 rounded-full w-[92px] h-[92px] sm:w-40 sm:h-40"
//       src="src\assets\whats-new-images\man-what_s-new.jpg"
//       alt=""
//       data-aos="fade-up"
//     />
//   </a>
//   <a href="">
//     <h3 className="cstm-title-whats-new w-[92px] h-[43px] sm:w-40 sm:h-20" data-aos="fade-up">
//       Men's Stitched
//       <br />
//       Summer New Arrivals
//     </h3>
//   </a>
// </div>
// </SwiperSlide>
// <SwiperSlide className="w-[92px] h-[135px] sm:w-40 sm:h-60">
// <div className="whats-new-slide flex flex-col justify-center items-center gap-2">
//   <a href="">
//     <img
//       className="border border-2 rounded-full w-[92px] h-[92px] sm:w-40 sm:h-40"
//       src="src\assets\whats-new-images\fragrance-what_s-new.avif"
//       alt=""
//       data-aos="fade-up"
//     />
//   </a>
//   <a href="">
//     <h3 className="cstm-title-whats-new w-[92px] h-[43px] sm:w-40 sm:h-20" data-aos="fade-up">
//       Fragrances
//     </h3>
//   </a>
// </div>
// </SwiperSlide>
// <SwiperSlide className="w-[92px] h-[135px] sm:w-40 sm:h-60">
// <div className="whats-new-slide flex flex-col justify-center items-center gap-2">
//   <a href="">
//     <img
//       className="border border-2 rounded-full w-[92px] h-[92px] sm:w-40 sm:h-40"
//       src="src\assets\whats-new-images\whats_new___home_d9857c45-a5ad-4e38-918d-e480d1306f26.avif"
//       alt=""
//       data-aos="fade-up"
//     />
//   </a>
//   <a href="">
//     <h3 className="cstm-title-whats-new w-[92px] h-[43px] sm:w-40 sm:h-20" data-aos="fade-up">
//       Home
//     </h3>
//   </a>
// </div>
// </SwiperSlide>
// </Swiper>
