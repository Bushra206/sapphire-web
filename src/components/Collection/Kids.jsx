// import React from 'react'
// import Cards from '../Cards';
// import CircularSlider from '../CircularSlider';
// //context provider
// import { useContext } from "react";
// import { contextcreate } from "../Context/CircularArrayProvider";
// import CircularArrayProvider from "../Context/CircularArrayProvider";
// //import images
// import img1 from "../../assets/trending/02PRSDW24V23_1_81c54ac5-acb3-4476-b731-bb8e13e61305.webp";
// import img2 from "../../assets/trending/02STSDW24V21_5.webp";
// import img3 from "../../assets/trending/02PRSDW24V26_2_22079a84-7985-4333-9eed-90b641d9677a.webp";
// import img4 from "../../assets/trending/0STDFW24V210_2.webp";
// import img5 from "../../assets/trending/2STSDW24V25W_2_199efd62-aed4-45cd-b28c-9628fc299a68.webp";
// import img6 from "../../assets/trending/02STDYW24V25_1.webp";
// import img7 from "../../assets/trending/2SDF24V219ST_1_fd1cbf02-3d4c-43a9-9810-064a5e4be738.webp";
// import img8 from "../../assets/trending/02STSDW24V24_2.webp";
// function Kids() {
//   const contextuse = useContext(contextcreate);
//   let kids_data = [
//     {
//       img: img1,
//       title: "Printed Lawn Flared Shirt",
//       collection: "Summer New Arrivals",
//       price: 3590,
//     },
//     {
//       img: img2,
//       title: "Printed Lawn Shirt",
//       collection: "Summer New Arrivals",
//       price: 3590,
//     },
//     {
//       img: img3,
//       title: "Embroidered Cotton Jacquard Shirt",
//       collection: "Summer New Arrivals",
//       price: 5990,
//     },
//     {
//       img: img4,
//       title: "Printed Arabic Lawn Shirt",
//       collection: "Summer New Arrivals",
//       price: 2990,
//     },
//     {
//       img: img5,
//       title: "Embroidered Jacquard Front-open Jacket",
//       collection: "Summer New Arrivals",
//       price: 3590,
//     },
//     {
//       img: img6,
//       title: "Solid Dobby Shirt",
//       collection: "Summer New Arrivals",
//       price: 4590,
//     },
//     {
//       img: img7,
//       title: "Printed Lawn Shirt",
//       collection: "Summer New Arrivals",
//       price: 3990,
//     },
//     {
//       img: img8,
//       title: "Printed Lawn Shirt",
//       collection: "Summer New Arrivals",
//       price: 3590,
//     },
//   ];
//   return (
//     <CircularArrayProvider className=" bg-[#fff] pb-14  text-center flex flex-col justify-center items-center ">
//         <CircularSlider
//           heading={<span className="leading-[4px]">KIDS</span>}
//           data={contextuse.circularData.Kids}
//         />
//         <div className=" bg-[#fff] pb-14  text-center  ">
//               <Cards catagory_data={kids_data}/>
//         </div>


//       </CircularArrayProvider>
//   )
// }

// export default Kids
