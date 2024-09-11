import React,{useState} from "react";
import CartCountBadge from "./CartCountBadge";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TfiTruck } from "react-icons/tfi";
import { RiMenu2Fill } from "react-icons/ri";
import MobNavBarLinks from "./MobNavBarLinks";

function MobNavBar({ showmenuicon, setShowMenuIcon }) {
  // const [showmenuicon,setShowMenuIcon]=useState(false);
  // const handleMenuClick = () => {
  //   console.log('handleMenuClick called');
  //   setShowMenuIcon(!showmenuicon);
  //   console.log('showmenuicon (after handleMenuClick):', showmenuicon);
  // };
  return (
    <>
    {/* <MobNavBarLinks showmenuicon={showmenuicon} setShowMenuIcon={setShowMenuIcon}/> */}
    <div className="sticky top-0 z-10 flex flex-col justify-center items-center w-full iphone:block lg:hidden bg-[#fff] pb-4">
      {/* upper navbar */}
      <div className=" bg-white  w-full">
        <div className="w-full ">
          <div className="flex justify-between items-center m-0 px-[11px] tablet:px-[18px] sm:px-[35px] py-2 ">
            {/* logo */}

            <div className="text-center flex justify-between items-center gap-1 sm:gap-3">
              <RiMenu2Fill className="w-[30px] h-[30px] text-[10px]" onClick={()=>setShowMenuIcon(!showmenuicon)}/>
              <h1 className="text-2xl mobile:text-3xl tablet:text-4xl font-bold uppercase tracking-widest">
                Sapphire
              </h1>
            </div>

            {/* cart */}
            <div className="flex gap-1 mobile:gap-0">
              <div className="icon_wrapper">
                <IoIosSearch />
              </div>
              <div className="icon_wrapper">
                <TfiTruck />
              </div>
              <div className="icon_wrapper relative">
                <MdOutlineShoppingBag />
                <CartCountBadge />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lower  navbar */}
      {/* search bar */}
      <div className="relative w-[90%]  mx-auto ">
        <input
          className="placeholder:text-[#000] bg-[#fff] border-[0.5px] border-[#000] rounded  px-6 py-3 w-full  "
          type="text"
          placeholder="Find your Favourites"
        />
        <IoIosSearch
          className="absolute top-0 right-0 mt-4 mr-3 text-gray-500"
          size={20}
        />
      </div>
    </div>
    </>
  );
}

export default MobNavBar;
