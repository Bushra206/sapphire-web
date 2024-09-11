import React, { useEffect } from "react";
import { useCartContextHook } from "./Context/CartDataProvider";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

function Cart() {
  const { total_amount,cart, removeProductFromCart,setDecrease,setIncrease } = useCartContextHook();
  useEffect(() => {
    console.log("Cart re-rendered");
  }, [cart]);
  console.log("cart after deletion", cart);
  return (
    <div className="px-[10px]">
      <h3 className="text-[20px] font-bold uppercase text-center bg-[#FBFBFB] py-2 w-[100%]">
        Shopping cart
      </h3>
      <form action="">
        <div className="flex justify-end py-3">
          <div className="bg-[#FFFFFF] flex flex-col gap-">
            <p className="text-[18px] font-semibold">SUBTOTAL:</p>
            <p className="text-[18px] font-semibold">Rs.{total_amount.toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            <button className="font-medium text-[16px] leading-7 text-[#fff] bg-[#000] px-20 py-2 border rounded-xl">
              {" "}
              CHECKOUT
            </button>
          </div>
        </div>
        <div className="grid grid-cols-5 border-b-[2px] pb-1 pt-4 border-b-[#FBFBFB] ">
          <p className="text-[14px] font-semibold uppercase col-span-2 ">
            Product
          </p>
          <p className="text-[14px] font-semibold uppercase text-center">
            Price
          </p>
          <p className="text-[14px] font-semibold uppercase text-center">
            Quantity
          </p>
          <p className="text-[14px] font-semibold uppercase text-right mr-2">
            total
          </p>
        </div>
        {console.log("cart", cart)}


         { cart.map((currproduct, currproduct_index) => {
            //  let productIdInCart=currproduct.id;
            return (
              <div
                key={currproduct.id}
                className="grid grid-cols-5 border-b-[2px]  border-b-[#FBFBFB] py-[20px]  "
              >
                <div className="flex gap-3 col-span-2">
                  <img
                    src={currproduct.image}
                    alt=""
                    className="w-[80px] h-[90px]"
                  />
                  <div className="flex flex-col justify-center gap-2">
                    <p className="text-[12x] font-bold">{currproduct.title}</p>
                    <p className="text-[13x] font-normal">
                      Size:
                      <span className="text-[13x] font-semibold">
                        {currproduct.productsize}
                      </span>{" "}
                    </p>
                    <div className="flex gap-2">
                      <FaRegEdit size={19} />
                      <RiDeleteBinLine
                        size={19}
                        className="text-[#1f1f1f]"
                        onClick={() => removeProductFromCart(currproduct.id)}
                      />

                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <p>Rs.{currproduct.price.toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div>
                <div className="counter flex gap-4 justify-center items-center">
                  <AiFillMinusCircle className="text-[23px]" onClick={()=>{setDecrease(currproduct.id)
                    console.log("decrese buttonclicked1");

                   }
                  }/>
                  <p className="font-medium text-[16px] leading-7">
                    {currproduct.countProduct}
                  </p>
                  <AiFillPlusCircle className="text-[23px]" onClick={()=>setIncrease(currproduct.id)}/>{" "}
                </div>
                <div className="flex items-center justify-end">
                  <p className="text-[14px] font-medium">
                    Rs.{(currproduct.price * currproduct.countProduct ).toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>

                {/* {currproduct_index==1 &&
                 <div>
                  Rs.<p>{currproduct.price}</p>
                 </div>
                 } */}
              </div>
            );
          })}
        <div className="flex justify-between py-3 ">
          <div className="flex flex-col gap-4">
            <p>Add Order Note</p>
            <textarea
              name=""
              id=""
              placeholder="How can we help you?"
              className="h-20 w-[40vw] border-[1px]"
            ></textarea>
          </div>

          <div>
            <div className="flex flex-col gap-4 w-[27vw]">
              <div className="flex gap-3">
                <p className="text-[18px] font-semibold">SUBTOTAL:</p>
                <p className="text-[18px] font-semibold">Rs.{total_amount.toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              </div>
              <p className="text-[14px] font-normal">
                Taxes and shipping calculated at checkout
              </p>
              <button className="font-medium text-[16px] leading-7 text-[#fff] bg-[#000] px-20 py-2 border rounded-xl">
                {" "}
                CHECKOUT
              </button>
              <img
                src="src\assets\cart-images\logogs_e7746cec-3176-43bd-9add-0d2829203427 (1).jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cart;
