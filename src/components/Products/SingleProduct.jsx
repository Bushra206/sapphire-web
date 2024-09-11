import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import CardsArrayProvider from "../Context/CardsArrayProvider";
import { useCardContextHook } from "../Context/CardsArrayProvider";
import { NavLink } from "react-router-dom";
import { useCartContextHook } from "../Context/CartDataProvider";
import CartReducer from "../Reducer/CartReducer";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/pagination";
// Import Swiper styles
import 'swiper/css';

function SingleProduct() {
  const {addToCart}=useCartContextHook();

  //use states
  const { cardsArrayData, dispatch, countProduct, setCountProduct } =
    useCardContextHook();
  //const [countProduct, setCountProduct] = useState(1);
  const { id } = useParams();
  console.log(id);
  const matchById = cardsArrayData.cardsArrayData.filter((elem) => {
    return elem.id === id;
  });
  const [productsize, setProductSize] = useState(matchById[0].size[0]);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [showReviewDetail, setShowReviewDetail] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);
  // console.log("addToCart",addToCart(countProduct,productsize,matchById));
  //setdeacrease function
  const setDecrease = () => {
    countProduct > 1 ? setCountProduct(countProduct - 1) : setCountProduct(1);
  };
  //setincrease function
  const setIncrease = () => {
    if (countProduct < matchById[0].stock) {
      setCountProduct(countProduct + 1);
    } else {
      setCountProduct(matchById[0].stock);
      alert(`Not enough items available. Only ${matchById[0].stock} left.`);
    }
  };

  //   console.log(matchById[0].price);
  //   console.log(matchById[0].size[0]);

  return (
    <CardsArrayProvider className="  p-14  text-center ">
      <div className="flex flex-col md:flex-row gap-6 w-[100%]">
        {/* left detail for large screens */}
        <div className="hidden single-product-left-details w-[100%] md:w-[55%] h-[100%] md:flex flex-wrap gap-3 p-8">
          {matchById[0].images.map((d) => {
            return (
              <img src={d} alt="test" className="w-[45%] singlepage-img" />
            );
          })}
        </div>
        {/* left detail for smaller screens */}
        <Swiper className="block md:hidden w-[100vw] p-0"
       modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {matchById[0].images.map((d) => {
            return (
              <SwiperSlide>
                <img src={d} alt="test" className="w-[100vw] h-[60%]]" />
              </SwiperSlide>

            );
          })}
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}

        </Swiper>
        {/* right detail */}
        <div className="single-product-right-details w-[100%] md:w-[45%] p-8">
          <p className="font-bold uppercase text-[18px] leading-7">
            {matchById[0].title}
          </p>
          <p className="font-medium text-[16px] leading-7">
            Rs.
            {matchById[0].price
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p className="font-bold text-[12px] uppercase leading-7 ">
            Size: {productsize}
          </p>
          <div className="checksize flex gap-2 leading-7 pt-2">
            {matchById[0].size &&
              matchById[0].size.map((d) => {
                return (
                  <p
                    className={`cursor-pointer font-medium text-[14px] leading-7 px-2.5 text-center border-[1px] border-black ${
                      productsize === d ? "border-[2px]" : ""
                    }`}
                    onClick={() => {
                      setProductSize(d);
                    }}
                  >
                    {d}
                  </p>
                );
              })}
          </div>
          <div className="counter-with-bag flex gap-4 pt-6 pb-8">
            <div className="counter flex gap-4 justify-center items-center">
              <AiFillMinusCircle
                className="text-[23px]"
                onClick={() => setDecrease()}
              />
              <p className="font-medium text-[16px] leading-7">
                {countProduct}
              </p>
              <AiFillPlusCircle
                className="text-[23px]"
                onClick={() => setIncrease()}
              />{" "}
            </div>

            <NavLink to="/cart" onClick={()=>addToCart(countProduct,productsize,matchById)}>
              <button className="font-medium text-[16px] leading-7 text-[#fff] bg-[#000] px-6 py-2 border rounded-xl">
                {" "}
                ADD TO BAG
              </button>

            </NavLink>
          </div>
          {/* Project detail portion */}
          <div className="product-details flex gap-4 mb-2">
            <p className="font-bold text-[14px] uppercase leading-7">
              product details
            </p>
            <div className="flex justify-center items-center">
              {!showProductDetail ? (
                <FaPlus
                  onClick={() => {
                    setShowProductDetail(!showProductDetail);
                    setShowReviewDetail(false);
                  }}
                />
              ) : (
                <FaMinus
                  onClick={() => {
                    setShowProductDetail(!showProductDetail);
                    setShowReviewDetail(false);
                  }}
                />
              )}
            </div>
          </div>
          {/*Project detail description */}
          {showProductDetail && <div>{matchById[0].detail}</div>}
          {/* leave review portion */}
          <div className="product-details flex gap-4 mb-2">
            <p className="font-bold text-[14px] uppercase leading-7">
              leave review
            </p>
            <div className="flex justify-center items-center">
              {!showReviewDetail ? (
                <FaPlus
                  onClick={() => {
                    setShowReviewDetail(!showReviewDetail);
                    setShowProductDetail(false);
                  }}
                />
              ) : (
                <FaMinus
                  onClick={() => {
                    setShowReviewDetail(!showReviewDetail);
                    setShowProductDetail(false);
                  }}
                />
              )}
            </div>
          </div>
          {/* review form */}
          {showReviewDetail && (
            <div>
              {!showWriteReview ? (
                <div className="flex justify-center items-center py-4 ">
                  <p
                    onClick={() => setShowWriteReview(!showWriteReview)}
                    className="font-bold text-[14px] cursor-pointer leading-7 text-[#fff] bg-[#000] px-6 py-1 my-3 border"
                  >
                    {" "}
                    WRITE A REVEIW
                  </p>
                </div>
              ) : (
                <div className="flex justify-center items-center py-4 ">
                  <p
                    onClick={() => setShowWriteReview(!showWriteReview)}
                    className="font-bold text-[14px] cursor-pointer leading-7 text-[#fff] bg-[#000] px-6 py-1 my-3 border"
                  >
                    {" "}
                    CANCEL REVEIW
                  </p>
                </div>
              )}

              {showWriteReview && (
                <div>
                  <p className="font-bold text-[20px] my-4">Write a review</p>
                  <form action="" className="flex flex-col gap-3">
                    <div className="rating flex flex-col gap-3">
                      <p>Rating</p>
                      <div className="starts flex gap-[1px]">
                        <FaRegStar size={25} />
                        <FaRegStar size={25} />
                        <FaRegStar size={25} />
                        <FaRegStar size={25} />
                        <FaRegStar size={25} />
                      </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                      <label htmlFor="">Review Title</label>
                      <input
                        type="text"
                        placeholder="Give your reveiw title"
                        className="p-2 border-[1px] text-[12px]"
                      />
                    </div>
                    <div className=" flex flex-col gap-2">
                      <label htmlFor="">Review</label>
                      <textarea
                        name=""
                        id=""
                        placeholder="Write your comments here"
                        className="p-2 border-[1px] text-[12px] h-[90px]"
                      ></textarea>
                    </div>
                    <div className=" flex flex-col gap-2">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name (public)"
                        className="p-2 border-[1px] text-[12px]"
                      />
                    </div>
                    <div className=" flex flex-col gap-2">
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        placeholder="Enter your email (private)"
                        className="p-2 border-[1px] text-[12px]"
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 my-2">
                      <p
                        onClick={() => setShowWriteReview(!showWriteReview)}
                        className="font-medium text-[16px]  text-[#000] bg-[#fff] px-6 py-2 border-2 border-[#000] cursor-pointer rounded-xl"
                      >
                        {" "}
                        cancel reveiw
                      </p>
                      <button className="font-medium text-[16px]  text-[#fff] bg-[#000] px-6 py-2 border rounded-xl">
                        submit reveiw
                      </button>
                    </div>
                  </form>
                </div>
              )}
              <p className="font-normal text-[14px] mt-8">
                <span className="font-semibold">Note:</span> Actual product
                color may vary slightly from the image.
              </p>
            </div>
          )}
        </div>
      </div>
    </CardsArrayProvider>
  );
}

export default SingleProduct;
