import React from "react";
import { NavLink } from "react-router-dom";

function NavbarLinks() {
  return (
    <nav>
      <div className="sticky w-full hidden lg:block">

        <div className="sticky flex justify-center items-center gap-8 m-0 px-12 py-4 border-t-[1px] border-slate-300 text-center max-auto">


               <NavLink to="/" activeClassName="active" exact replace className="font-medium text-[12px] leading-[14px]">
              NEW IN
            </NavLink>
            <NavLink to="/Collection/woman" activeClassName="active" className="font-medium text-[12px] leading-[14px]">
              WOMAN
            </NavLink>
            <NavLink to="/Collection/man" activeClassName="active" replace className="font-medium text-[12px] leading-[14px]">
              MAN
            </NavLink>
            <NavLink to="/Collection/kids" activeClassName="active" replace className="font-medium text-[12px] leading-[14px]">
              KIDS
            </NavLink>
            <NavLink to="/Collection/beauty" activeClassName="active" replace className="font-medium text-[12px] leading-[14px]">
              BEAUTY
            </NavLink>
            <NavLink to="/Collection/home" activeClassName="active" replace className="font-medium text-[12px] leading-[14px]">
              HOME
            </NavLink>
            <NavLink to="/Collection/accessories" activeClassName="active" replace className="font-medium text-[12px] leading-[14px]">
              ACCESSORIES
            </NavLink>
            <NavLink to="/theedit" activeClassName="active" replace className="font-medium text-[12px] leading-[14px]">
              THE EDIT
            </NavLink>

        </div>

      </div>
    {/* </div> */}
    </nav>
  );
}

export default NavbarLinks;
