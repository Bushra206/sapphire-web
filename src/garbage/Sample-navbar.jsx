import React from "react";
import CartCountBadge from "./CartCountBadge";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

function SampleNavbar() {
  return (
    <div className="sticky top-0 bg-white  z-10 w-full">
      <div className="w-full block p-0 ">
        <div className="flex justify-between items-center m-0 xl:px-[50px] xl:py-[30px]  lg:p-8 md:px-6 md:py-3 sm:px-5 sm:py-3 tablet:px-4 tablet:py-3 iphone:px-4 iphone:py-3">
          {/* logo */}
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl tablet:text-2xl font-medium">
            Logo
          </h1>
          {/* search bar */}
          <div className="relative w-full max-w-[500px] md:w-[400px] sm:w-[300px] tablet:w-[250px] mobile:w-[190px] iphone:w-[160px]">
          {/* px-6 py-3   */}
            <input
              className="input-search bg-[#f2f3f5] border-none outline-none iphone:px-2 iphone:py-1 mobile:px-4 mobile:py-1.5 tablet:px-6 tablet:py-2 sm:px-6 sm:py-3 rounded-[30px] w-full"
              type="text"
              placeholder="Search Products"
            />
            <IoIosSearch
              className="absolute top-0 right-0  sm:mt-3 sm:mr-3 mobile:mt-2 mobile:mr-3 iphone:mt-1.5 iphone:mr-2 text-gray-500 w-5 h-5 iphone:w-4 iphone:h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8   "
              //   size={20}
            />
          </div>
          {/* cart */}
          <div className="flex lg:gap-4 md:gap-2  mobile:gap-1 iphone:gap-0">
            <div className="icon_wrapper">
              <CiUser className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </div>
            <div className="icon_wrapper relative">
              <FaCartShopping className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
              <CartCountBadge size="w-[25px] h-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleNavbar;
