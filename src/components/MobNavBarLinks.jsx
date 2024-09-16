import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoStorefrontOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

function MobNavBarLinks({ showmenuicon, setShowMenuIcon }) {
  const [shownewdetail, setShowNewDetail] = useState(false);
  const [showwomandetail, setShowWomanDetail] = useState(false);
  const [showmandetail, setShowManDetail] = useState(false);
  const [showkidsdetail, setShowKidsDetail] = useState(false);
  const [showbeautydetail, setShowBeautyDetail] = useState(false);
  const [showaccessoriesdetail, setShowAccessoriesDetail] = useState(false);
  const [showhomedetail, setShowHomeDetail] = useState(false);
  const handleMenuClick = () => {
    setShowMenuIcon(!showmenuicon);
  };
  useEffect(() => {
    AOS.init({
      //   disable: "phone",
      offset: 70,
      duration: 700,
      delay: 100,
      //   easing: "ease-out-cubic",
    });
  }, []);
  return (
    <nav>
      {showmenuicon && (
        <div
          data-aos="fade-right"
          className="flex w-[94vw] absolute top-0 left-0 z-50 uppercase overflow-y-scroll  lg:hidden"
        >
          <div className="flex flex-col justify-center items-center gap-6 m-0  py-4 text-center max-auto h-[100%] z-50 bg-[#fff] w-[80vw] ">
            <div className="flex gap-3 w-[80%]">
              <div className="w-[33%] h-[80px] flex flex-col gap-1 justify-center items-center border-[1px] border-[#000] rounded-lg">
                <FaRegCircleUser size={40} />
                <p className="text-[8px] font-bold">LOGIN</p>
              </div>
              <div className="w-[33%] h-[80px] flex flex-col gap-1 justify-center items-center border-[1px] border-[#000] rounded-lg">
                <FiPhone size={40} />
                <p className="text-[8px] font-bold">CONTACT US</p>
              </div>
              <div className="w-[33%] h-[80px] flex flex-col gap-1 justify-center items-center border-[1px] border-[#000] rounded-lg">
                <IoStorefrontOutline size={40} />
                <p className="text-[8px] font-bold">STORES</p>
              </div>
            </div>
            <div className="bg-[#fff] flex flex-col justify-center items-center m-0 gap-8 text-center w-[80vw] ">
              {/* new in */}
              <div
                className={
                  shownewdetail
                    ? "bg-[#E5E5E5] w-[100%] mx-auto"
                    : "bg-[#fff] w-[100%] mx-auto"
                }
              >
                <div
                  className={
                    shownewdetail
                      ? " py-3 flex items-center justify-between w-[85%] mx-auto"
                      : "bg-[#fff] flex items-center justify-between w-[85%] mx-auto"
                  }
                >
                  <NavLink
                    to="/"
                    activeClassName="active"
                    replace
                    className="font-bold text-[12px] leading-[14px]"
                    onClick={() => setShowMenuIcon(!showmenuicon)}
                  >
                    NEW IN
                  </NavLink>
                  {!shownewdetail ? (
                    <AiOutlinePlus
                      size={18}
                      onClick={() => setShowNewDetail(!shownewdetail)}
                    />
                  ) : (
                    <AiOutlineMinus
                      size={18}
                      onClick={() => setShowNewDetail(!shownewdetail)}
                    />
                  )}
                </div>
              </div>
              {shownewdetail && (
                <div className="flex flex-col justify-center items-center m-0 gap-4 text-center w-[80vw] ">
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[1px] text-[#222222]"
                    >
                      Unstitched
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      Ready to Wear
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      Man
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      West
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      Home
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      Kids
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      Accessories
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      Modest Wear
                    </NavLink>
                  </div>
                </div>
              )}
              {/* woman */}
              <div
                className={
                  showwomandetail
                    ? "bg-[#E5E5E5] w-[100%] mx-auto"
                    : "bg-[#fff] w-[100%] mx-auto"
                }
              >
                <div
                  className={
                    showwomandetail
                      ? " py-3 flex items-center justify-between w-[85%] mx-auto"
                      : "bg-[#fff] flex items-center justify-between w-[85%] mx-auto"
                  }
                >
                  <NavLink
                    to="/Collection/woman"
                    activeClassName="active"
                    replace
                    className="font-bold text-[12px] leading-[14px]"
                    onClick={() => setShowMenuIcon(!showmenuicon)}
                  >
                    woman
                  </NavLink>
                  {!showwomandetail ? (
                    <AiOutlinePlus
                      size={18}
                      onClick={() => setShowWomanDetail(!showwomandetail)}
                    />
                  ) : (
                    <AiOutlineMinus
                      size={18}
                      onClick={() => setShowWomanDetail(!showwomandetail)}
                    />
                  )}
                </div>
              </div>
              {showwomandetail && (
                <div className="flex flex-col justify-center items-center m-0 gap-4 text-center w-[80vw] ">
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/Collection/ready-to-wear"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[1px] text-[#222222]"
                    >
                      Ready to Wear
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/Collection/unstitched"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      Unstitched
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/Collection/west"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      West
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/Collection/sleepwear"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      Sleepwear
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/Collection/modestwear"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      Modestwear
                    </NavLink>
                  </div>
                </div>
              )}
              {/* man */}
              <div
                className={
                  showwomandetail
                    ? "bg-[#E5E5E5] w-[100%] mx-auto"
                    : "bg-[#fff] w-[100%] mx-auto"
                }
              >
                <div
                  className={
                    showmandetail
                      ? " py-3 flex items-center justify-between w-[85%] mx-auto"
                      : "bg-[#fff] flex items-center justify-between w-[85%] mx-auto"
                  }
                >
                  <NavLink
                    to="/"
                    activeClassName="active"
                    replace
                    className="font-bold text-[12px] leading-[14px]"
                    onClick={() => setShowMenuIcon(!showmenuicon)}
                  >
                    man
                  </NavLink>
                  {!showmandetail ? (
                    <AiOutlinePlus
                      size={18}
                      onClick={() => setShowManDetail(!showmandetail)}
                    />
                  ) : (
                    <AiOutlineMinus
                      size={18}
                      onClick={() => setShowManDetail(!showmandetail)}
                    />
                  )}
                </div>
              </div>
              {showmandetail && (
                <div className="flex flex-col justify-center items-center m-0 gap-4 text-center w-[80vw] ">
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[1px] text-[#222222]"
                    >
                      MENS' UNSTITCHED
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      MENS' STITCHED
                    </NavLink>
                  </div>
                </div>
              )}
              {/* KIDS */}
              <div
                className={
                  showkidsdetail
                    ? "bg-[#E5E5E5] w-[100%] mx-auto"
                    : "bg-[#fff] w-[100%] mx-auto"
                }
              >
                <div
                  className={
                    showkidsdetail
                      ? " py-3 flex items-center justify-between w-[85%] mx-auto"
                      : "bg-[#fff] flex items-center justify-between w-[85%] mx-auto"
                  }
                >
                  <NavLink
                    to="/"
                    activeClassName="active"
                    replace
                    className="font-bold text-[12px] leading-[14px]"
                    onClick={() => setShowMenuIcon(!showmenuicon)}
                  >
                    kids
                  </NavLink>
                  {!showkidsdetail ? (
                    <AiOutlinePlus
                      size={18}
                      onClick={() => setShowKidsDetail(!showkidsdetail)}
                    />
                  ) : (
                    <AiOutlineMinus
                      size={18}
                      onClick={() => setShowKidsDetail(!showkidsdetail)}
                    />
                  )}
                </div>
              </div>
              {showkidsdetail && (
                <div className="flex flex-col justify-center items-center m-0 gap-4 text-center w-[80vw] ">
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[1px] text-[#222222]"
                    >
                      girls
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      boys
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      kids bedding
                    </NavLink>
                  </div>
                </div>
              )}
              {/* beauty */}
              <div
                className={
                  showbeautydetail
                    ? "bg-[#E5E5E5] w-[100%] mx-auto"
                    : "bg-[#fff] w-[100%] mx-auto"
                }
              >
                <div
                  className={
                    showbeautydetail
                      ? " py-3 flex items-center justify-between w-[85%] mx-auto"
                      : "bg-[#fff] flex items-center justify-between w-[85%] mx-auto"
                  }
                >
                  <NavLink
                    to="/"
                    activeClassName="active"
                    replace
                    className="font-bold text-[12px] leading-[14px]"
                    onClick={() => setShowMenuIcon(!showmenuicon)}
                  >
                    beauty
                  </NavLink>
                  {!showbeautydetail ? (
                    <AiOutlinePlus
                      size={18}
                      onClick={() => setShowBeautyDetail(!showbeautydetail)}
                    />
                  ) : (
                    <AiOutlineMinus
                      size={18}
                      onClick={() => setShowBeautyDetail(!showbeautydetail)}
                    />
                  )}
                </div>
              </div>
              {showbeautydetail && (
                <div className="flex flex-col justify-center items-center m-0 gap-4 text-center w-[80vw] ">
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[1px] text-[#222222]"
                    >
                      cosmetics
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      fragrances
                    </NavLink>
                  </div>
                </div>
              )}
              {/* accessories */}
              <div
                className={
                  showaccessoriesdetail
                    ? "bg-[#E5E5E5] w-[100%] mx-auto"
                    : "bg-[#fff] w-[100%] mx-auto"
                }
              >
                <div
                  className={
                    showaccessoriesdetail
                      ? " py-3 flex items-center justify-between w-[85%] mx-auto"
                      : "bg-[#fff] flex items-center justify-between w-[85%] mx-auto"
                  }
                >
                  <NavLink
                    to="/"
                    activeClassName="active"
                    replace
                    className="font-bold text-[12px] leading-[14px]"
                    onClick={() => setShowMenuIcon(!showmenuicon)}
                  >
                    accessories
                  </NavLink>
                  {!showaccessoriesdetail ? (
                    <AiOutlinePlus
                      size={18}
                      onClick={() =>
                        setShowAccessoriesDetail(!showaccessoriesdetail)
                      }
                    />
                  ) : (
                    <AiOutlineMinus
                      size={18}
                      onClick={() =>
                        setShowAccessoriesDetail(!showaccessoriesdetail)
                      }
                    />
                  )}
                </div>
              </div>
              {showaccessoriesdetail && (
                <div className="flex flex-col justify-center items-center m-0 gap-4 text-center w-[80vw] ">
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[1px] text-[#222222]"
                    >
                      women's shoes
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      women's shoes
                    </NavLink>
                  </div>
                  <div className="flex items-center justify-between w-[75%] mx-auto">
                    <NavLink
                      to="/"
                      activeClassName="active"
                      replace
                      className="font-normal text-[12px] leading-[14px] text-[#222222]"
                    >
                      women's accessories
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 items-start w-[85%] max-auto">
              <p className="text-[12px] font-bold">Get Exclusive updates:</p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="placeholder:text-[#000] text-[13px] font-normal border-[1px] border-[#000] rounded-lg py-3 pl-1  w-[67vw]"
                />
                <button className="text-[13px] font-normal bg-[#000] text-[#fff] py-2 px-3 rounded-lg absolute right-[4px] top-[4px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <p className="bg-[#000] h-[50px] w-[70px] text-[#fff] flex justify-center items-center">
            <RxCross1 size={25} onClick={handleMenuClick} />
          </p>
        </div>
      )}
    </nav>
  );
}

export default MobNavBarLinks;
