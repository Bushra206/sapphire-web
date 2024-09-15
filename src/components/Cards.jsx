// Import React components
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
//images
import img1 from "../../public/assets/trending/02PRSDW24V23_1_81c54ac5-acb3-4476-b731-bb8e13e61305.webp";
import img2 from "../../public/assets/trending/02STSDW24V21_5.webp";
import img3 from "../../public/assets/trending/02PRSDW24V26_2_22079a84-7985-4333-9eed-90b641d9677a.webp";
import img4 from "../../public/assets/trending/0STDFW24V210_2.webp";
import img5 from "../../public/assets/trending/2STSDW24V25W_2_199efd62-aed4-45cd-b28c-9628fc299a68.webp";
import img6 from "../../public/assets/trending/02STDYW24V25_1.webp";
import img7 from "../../public/assets/trending/2SDF24V219ST_1_fd1cbf02-3d4c-43a9-9810-064a5e4be738.webp";
import img8 from "../../public/assets/trending/02STSDW24V24_2.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

let Cards = ({ catagory_data }) => {
  // let catagory_data = [
  //   {
  //     img: img1,
  //     title: "Printed Lawn Flared Shirt",
  //     collection: "Summer New Arrivals",
  //     price: 3590,
  //   },
  //   {
  //     img: img2,
  //     title: "Printed Lawn Shirt",
  //     collection: "Summer New Arrivals",
  //     price: 3590,
  //   },
  //   {
  //     img: img3,
  //     title: "Embroidered Cotton Jacquard Shirt",
  //     collection: "Summer New Arrivals",
  //     price: 5990,
  //   },
  //   {
  //     img: img4,
  //     title: "Printed Arabic Lawn Shirt",
  //     collection: "Summer New Arrivals",
  //     price: 2990,
  //   },
  //   {
  //     img: img5,
  //     title: "Embroidered Jacquard Front-open Jacket",
  //     collection: "Summer New Arrivals",
  //     price: 3590,
  //   },
  //   {
  //     img: img6,
  //     title: "Solid Dobby Shirt",
  //     collection: "Summer New Arrivals",
  //     price: 4590,
  //   },
  //   {
  //     img: img7,
  //     title: "Printed Lawn Shirt",
  //     collection: "Summer New Arrivals",
  //     price: 3990,
  //   },
  //   {
  //     img: img8,
  //     title: "Printed Lawn Shirt",
  //     collection: "Summer New Arrivals",
  //     price: 3590,
  //   },
  // ];

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
  const location = useLocation();

  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2">
      {catagory_data.map((data, index) => {
        return (
          <div key={data.id} className="md:w-[96%]">
            <div className="flex flex-col gap-3 w-[100%]" data-aos="fade-up">
              <a
                // href={`${location.pathname}/singleproduct/${data.id}`}
                href={`/singleproduct/${data.id}`}
                className="w-[100%]"
              >
                <img src={data.images[0]} alt="hyy" />
              </a>

              <div className="dress-detail flex justify-between items-center">
                <div className="dress-dcrp flex flex-col text-left w-[55%]">
                  <a  href={`/singleproduct/${data.id}`}>
                    <h5 className="text-xs font-semibold">{data.title}</h5>
                  </a>
                  <p className="text-[9px] mobile:text-[10px] tablet:text-[12px]">{data.collection}</p>
                  <p className="text-xs">
                    Rs.
                    {data.price
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>

                <div className="add-to-bag  w-[35%] ">
                  <div className="w-[80%] h-[30px] bg-none lg:bg-black rounded-md flex justify-end lg:justify-center items-center">
                    <IoBagHandleOutline className="text-[#000] lg:text-white text-[20px] lg:text-[16px] text-right lg:text-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>


  );
};

export default Cards;

// <div className="dress-detail flex justify-between items-center">
//   <div className="dress-dcrp flex flex-col text-left w-[55%]">
//     <a href="">
//       <h5 className="text-xs font-semibold">{data.title}</h5>
//     </a>
//     <p className="text-xs">{data.collection}</p>
//     <p className="text-xs">Rs.{data.price.toLocaleString()}</p>
//   </div>

//   <div className="add-to-bag  w-[35%] ">
//     <div className="w-[80%] h-[30px] bg-black rounded-md flex justify-center items-center">
//       <IoBagHandleOutline className="text-white text-base text-center" />
//     </div>
//   </div>
// </div>;
