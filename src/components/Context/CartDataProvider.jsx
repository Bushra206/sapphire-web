import React, { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "../Reducer/CartReducer";
const cartcontextcreate = createContext();
export const useCartContextHook = () => {
  const cartcontextuse = useContext(cartcontextcreate);
  return cartcontextuse;
};
// function getLocalCartData() {
//   let localcartdata = localStorage.getItem("sapphireCart");
//   if (localcartdata?.length === 0) {
//     return [];
//   } else {
//     return JSON.parse(localcartdata);
//   }

// }
function CartDataProvider(props) {
  let initialstate = {
    cart: [],
    total_item: 0,
    total_amount: 0,
    shipping_fee: 5000,
  };
  const [cartstate, dispatch] = useReducer(CartReducer, initialstate);
  //add to cart function
  const addToCart = (countProduct, productsize, matchById) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: { countProduct, productsize, matchById },
    });
  //remove from cart
  const removeProductFromCart = (productIdInCart) => {
    dispatch({
      type: "REMOVE_PRODUCT_FROM_CART",
      payload: { productIdInCart },
    });
  };
  //increment in cart
  const setDecrease = (productIdInCart) => {
    dispatch({ type: "SET_DECRENMENT", payload: { productIdInCart } });
  };
  //decrement in cart
  const setIncrease = (productIdInCart) => {
    dispatch({ type: "SET_INCRENMENT", payload: { productIdInCart } });
  };
  //storing cart dsata in local storage
  useEffect(() => {
   // localStorage.setItem("sapphireCart", JSON.stringify(cartstate.cart));
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_AMOUNT" });
  }, [cartstate.cart]);

  return (
    <cartcontextcreate.Provider
      value={{
        ...cartstate,
        addToCart,
        removeProductFromCart,
        setDecrease,
        setIncrease,
      }}
    >
      {props.children}
    </cartcontextcreate.Provider>
  );
}

export default CartDataProvider;
