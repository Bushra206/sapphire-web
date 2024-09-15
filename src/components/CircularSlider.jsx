import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
//whatsnew images
import WhatsNewImage1 from "../../public/assets/Cicular-images/whats-new-images/what_s-new-_-botanical-bliss.jpg";
import WhatsNewImage2 from "../../public/assets/Cicular-images/whats-new-images/unstitched-what_s-new_adf1450e-e5a8-4898-b145-1fb4f8768a80.avif";
import WhatsNewImage3 from "../../public/assets/Cicular-images/whats-new-images/what_s-new-_-mommy-_-me.avif";
import WhatsNewImage4 from "../../public/assets/Cicular-images/whats-new-images/what_s-new-_-the-resort-edit.avif";
import WhatsNewImage5 from "../../public/assets/Cicular-images/whats-new-images/what_s-new-_-classic-chikankari.avif";
import WhatsNewImage6 from "../../public/assets/Cicular-images/whats-new-images/man-what_s-new.jpg";
import WhatsNewImage7 from "../../public/assets/Cicular-images/whats-new-images/fragrance-what_s-new.avif";
import WhatsNewImage8 from "../../public/assets/Cicular-images/whats-new-images/whats_new___home_d9857c45-a5ad-4e38-918d-e480d1306f26.avif";
import AOS from "aos";
import "aos/dist/aos.css";

function CircularSlider({ heading, data, gapbtw }) {
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

  // let CircularData={
  //   WhatsNew:[
  //     {
  //       img:WhatsNewImage1,
  //       title_html:"Botanical Bliss <br /> Ready to Wear"
  //     },
  //     {
  //       img:WhatsNewImage2,
  //       title_html:"Signature <br/> Unstitched"
  //     },
  //     {
  //       img:WhatsNewImage3,
  //       title_html:" Mommy &amp; Me"
  //     },
  //     {
  //       img:WhatsNewImage4,
  //       title_html:"The Resort Edit <br /> WEST"
  //     },
  //     {
  //       img:WhatsNewImage5,
  //       title_html:"Chikankari <br /> Ready to Wear"
  //     },
  //     {
  //       img:WhatsNewImage6,
  //       title_html:"Men's Stitched <br />  Summer New Arrivals"
  //     },
  //     {
  //       img:WhatsNewImage7,
  //       title_html:"Fragrances"
  //     },
  //     {img:WhatsNewImage8,
  //       title_html:"Home"
  //     },

  //   ]
  // }

  //min-w-[30%]

  return (
    <div className="w-[100vw]">
      <div
        className={`whats-new bg-[#fff] py-10 w-[80vw] mx-auto  flex justify-center items-center gap:6 mobile:gap-8 `}
      >
        <h1
          data-aos="fade-up"
          className=" capitalize tracking-wide leading-none font-semibold mobile:text-[12px] tablet:text-[19px] sm:text-[22px]  text-left mt-[-50px]"
        >
          {heading}
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
            className="mySwiper ml-10"
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide className="circular-slider-slide w-[80px] h-[96px] sm:w-[100px] sm:h-[132px]">
                  <div className="whats-new-slide flex flex-col justify-center items-center gap-3 ">
                    <a href={item.href_link}>
                      <img
                        className="circular-slider-image border-2 rounded-full w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
                        src={item.img}
                        alt=""
                        data-aos="fade-up"
                      />
                    </a>
                    <a href={item.href_link}>
                      <p
                        className="cstm-title-whats-new m-0 p-0 text-[12px] text-[#000] leading-5 w-[80px] h-[16px] sm:w-[100px] sm:h-[22px]"
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
    </div>
  );
}

export default CircularSlider;


