import React from "react";
import CircularSlider from "../CircularSlider";
//context provider
import { useContext } from "react";
import { circularcontextcreate } from "../Context/CircularArrayProvider";
import CircularArrayProvider from "../Context/CircularArrayProvider";
import CardsArrayProvider from "../Context/CardsArrayProvider";
import { useCardContextHook } from "../Context/CardsArrayProvider";
//importing componenets
import Cards from "../Cards";
//importing images
import img1 from "../../assets/trending/02PRSDW24V23_1_81c54ac5-acb3-4476-b731-bb8e13e61305.webp";
import img2 from "../../assets/trending/02STSDW24V21_5.webp";
import img3 from "../../assets/trending/02PRSDW24V26_2_22079a84-7985-4333-9eed-90b641d9677a.webp";
import img4 from "../../assets/trending/0STDFW24V210_2.webp";
import img5 from "../../assets/trending/2STSDW24V25W_2_199efd62-aed4-45cd-b28c-9628fc299a68.webp";
import img6 from "../../assets/trending/02STDYW24V25_1.webp";
import img7 from "../../assets/trending/2SDF24V219ST_1_fd1cbf02-3d4c-43a9-9810-064a5e4be738.webp";
import img8 from "../../assets/trending/02STSDW24V24_2.webp";
//////importing women collection images
//RTW
// import woman_rtw_1 from "../../assets/Collection-images/woman-images/ReadyToWear/2SDF24V220ST_3_3efe4b37-987c-45b0-9350-55dbaf246974.webp";
// import woman_rtw_2 from "../../assets/Collection-images/woman-images/ReadyToWear/2SDF24V218ST_4_8832bdad-4ae1-4f75-afbf-9c7b32557ec2.webp";
// //UNSTICHED
// import woman_unst_1 from "../../assets/Collection-images/woman-images/Unstitched/U3PEST24V516_5.webp";
// import woman_unst_2 from "../../assets/Collection-images/woman-images/Unstitched/U3PEST24V520_5.webp";
// //WEST
// import woman_west_1 from "../../assets/Collection-images/woman-images/West/WBTM24V40011_3.webp";
// import woman_west_2 from "../../assets/Collection-images/woman-images/West/WBTM24V40018_1.webp";
// //SLEEPWEAR
// import woman_slpw_1 from "../../assets/Collection-images/woman-images/Sleepwear/SLEPSET00526_1.webp";
// import woman_slpw_2 from "../../assets/Collection-images/woman-images/Sleepwear/SLEPSET00531_4.webp";
// //MODESTWEAR
// import woman_mdstw_1 from "../../assets/Collection-images/woman-images/ModestWear/ABBAYA24V410_1.webp";
// import woman_mdstw_2 from "../../assets/Collection-images/woman-images/ModestWear/ABBAYA24V416_3.webp";
function Woman() {
  const circularcontextuse = useContext(circularcontextcreate);
  const cardContextState = useCardContextHook();

  // let woman_data = [
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

  // let woman_data = [
  //     {
  //       img: woman_rtw_1,
  //       title: "Printed Lawn Flared Shirt",
  //       type:'rtw',
  //       collection: "Summer New Arrivals",
  //       price: 3590,
  //       catagory:'woman'
  //     },
  //     {
  //       img: woman_rtw_2,
  //       title: "Printed Lawn Shirt",
  //       type:'rtw',
  //       collection: "Summer New Arrivals",
  //       price: 3590,
  //     },
  //     {
  //       img: woman_unst_1,
  //       title: "Printed Lawn Flared Shirt",
  //       type:'unst',
  //       collection: "Summer New Arrivals",
  //       price: 3590,
  //     },
  //     {
  //       img: woman_unst_2,
  //       title: "Printed Lawn Shirt",
  //       type:'unst',
  //       collection: "Summer New Arrivals",
  //       price: 3590,
  //     },
  //     {
  //       img: woman_west_1,
  //       title: "Printed Lawn Shirt",
  //       type:'west',
  //       collection: "Summer New Arrivals",
  //       price: 3590,
  //     },
  //     {
  //       img: woman_west_2,
  //       title: "Printed Lawn Shirt",
  //       type:'west',
  //       collection: "Summer New Arrivals",
  //       price: 3590,
  //     },
  //     {
  //       img: woman_slpw_1,
  //       title: "Printed Lawn Shirt",
  //       type:'slpw',
  //       collection: "Summer New Arrivals",
  //       price: 3590,
  //     },
  //     {
  //       img: woman_slpw_2,
  //       title: "Printed Lawn Shirt",
  //       type:'slpw',
  //       collection: "Summer New Arrivals",
  //       price: 3590,

  //     },
  //     {
  //       img: woman_mdstw_1,
  //       title: "Printed Lawn Shirt",
  //       type:'mdstw',
  //       collection: "Summer New Arrivals",
  //       price: 3590,
  //     },
  //     {
  //       img: woman_mdstw_2,
  //       title: "Printed Lawn Shirt",
  //       type:'mdstw',
  //       collection: "Summer New Arrivals",
  //       price: 3590,
  //     }

  // ];

  // let woman_data=[
  //   {
  //     img: woman_rtw_1,
  //     title: "Printed Lawn Flared Shirt",
  //     collection: "Summer New Arrivals",
  //     price: 3590,
  //   },
  //   {
  //     img: woman_rtw_2,
  //     title: "Printed Lawn Shirt",
  //     collection: "Summer New Arrivals",
  //     price: 3590,
  //   },
  // ];

  return (
    <div className=" bg-[#fff] pb-14 w-full text-center flex flex-col justify-center items-center ">
      <CircularArrayProvider>
        <CircularSlider
          heading={<span className="leading-[4px]">WOMAN</span>}
          data={circularcontextuse.circularData.Woman}
        />
      </CircularArrayProvider>

      <CardsArrayProvider className="  pb-14  text-center ">
        <Cards catagory_data={cardContextState.cardsArrayData.cardsArrayData} />
      </CardsArrayProvider>
    </div>
  );
}

export default Woman;
