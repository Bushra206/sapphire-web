import React from "react";
import CartCountBadge from "./CartCountBadge";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TfiTruck } from "react-icons/tfi";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  return (
    <div className="sticky top-0 bg-white  z-10 w-full">
      <div className="w-full hidden lg:block ">
        <div className="flex justify-between items-center m-0 px-14 py-5 ">
          {/* logo */}
          <h1 className="text-4xl font-bold uppercase tracking-wider">Sapphire</h1>
          {/* search bar */}
          <div className="relative w-full max-w-[500px]">
            <input
              className="bg-[#f2f3f5] border-slate-300 border-[1px]  px-6 py-3 rounded-[6px] w-full capitalize font-medium text-[12px] leading-[14px] placeholder:text-black tracking-wide"
              type="text"
              placeholder="Find your favourites"
            />
            <IoIosSearch
              className="absolute top-0 right-0 mt-4 mr-3 text-gray-500"
              size={20}
            />
          </div>
          {/* cart */}
          <div className="flex gap-2">
             <div className="icon_wrapper">
             <TfiTruck size={26} />
            </div>
            <div className="icon_wrapper">
              <a href="/cart"><FaRegUser /></a>
            </div>
            <a href="/cart" className="icon_wrapper relative">
              <MdOutlineShoppingBag size={30} />
              <CartCountBadge size="w-[20px] h-[20px]" />
            </a>
          </div>
        </div>
      </div>
      <NavbarLinks/>
    </div>
  );
}

export default Navbar;
