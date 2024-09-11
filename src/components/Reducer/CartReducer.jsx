import React, { useEffect } from "react";

function CartReducer(cartstate, action) {
  //ADD_TO_CART
  if (action.type === "ADD_TO_CART") {
    const { countProduct, productsize, matchById } = action.payload;
    let existing_product = cartstate.cart.find((currelem) => {
      return currelem.id === matchById[0].id + productsize;
    });
    console.log("existing_product", existing_product);
    if (existing_product) {
      let updatedproduct = cartstate.cart.map((currelem) => {
        if (currelem.id === matchById[0].id + productsize) {
          let newCountProduct = currelem.countProduct + countProduct;
          if (newCountProduct > currelem.max) {
            newCountProduct = currelem.max;
          }
          return {
            ...currelem,
            countProduct: newCountProduct,
          };
        } else {
          return currelem;
        }
      });
      return { ...cartstate, cart: updatedproduct };
    } else {
      let cartproduct;
      cartproduct = {
        id: matchById[0].id + productsize,
        title: matchById[0].title,
        price: matchById[0].price,
        countProduct,
        productsize,
        max: matchById[0].stock,
        image: matchById[0].images[0],
      };

      return { ...cartstate, cart: [...cartstate.cart, cartproduct] };
    }
  }
  //REMOVE_PRODUCT_FROM_CART
  if (action.type === "REMOVE_PRODUCT_FROM_CART") {
    console.log("Removing product with payload:", action.payload);
    let updatedCartAfterDeletion = cartstate.cart.filter((currelem) => {
      console.log(
        `currelem.id: ${typeof currelem.id},${
          currelem.id
        }, action.payload.productIdInCart: ${typeof action.payload
          .productIdInCart},${action.payload.productIdInCart}`
      );
      return currelem.id !== action.payload.productIdInCart;
    });
    console.log("updatedCartAfterDeletion:", updatedCartAfterDeletion);
    return {
      ...cartstate,
      cart: updatedCartAfterDeletion,
    };
  }
  //SET_DECRENMENT
  if (action.type === "SET_DECRENMENT") {
    console.log("decrese button clicked 2", action.payload.productIdInCart);
    let updatedproduct = cartstate.cart.map((currelem) => {
      if (currelem.id === action.payload.productIdInCart) {
        console.log("currelem", currelem);
        let decrementCountProduct = currelem.countProduct - 1;
        if (decrementCountProduct < 1) {
          decrementCountProduct = 1;
        }
        return {
          ...currelem,
          countProduct: decrementCountProduct,
        };
      } else {
        return currelem;
      }
      //  }
    });
    return { ...cartstate, cart: updatedproduct };
  }
  //SET_INCRENMENT
  if (action.type === "SET_INCRENMENT") {
    let updatedproduct = cartstate.cart.map((currelem) => {
      if (currelem.id === action.payload.productIdInCart) {
        let incrementCountProduct = currelem.countProduct + 1;
        if (incrementCountProduct > currelem.max) {
          incrementCountProduct = currelem.max;
        }
        return { ...currelem, countProduct: incrementCountProduct };
      } else {
        return currelem;
      }
    });
    return { ...cartstate, cart: updatedproduct };
  }
  //cart total item
  if (action.type === "CART_TOTAL_ITEM") {
    let updatedcarttotal = cartstate?.cart?.reduce((acc, currelem) => {
      acc = acc + currelem.countProduct;
      return acc;
    }, 0);
    return { ...cartstate, total_item: updatedcarttotal };
  }
  //cart total amount
  if (action.type == "CART_TOTAL_AMOUNT") {
    let updatedcartamount = cartstate?.cart?.reduce((acc, currelem) => {
      let total = currelem.price * currelem.countProduct;
      acc = acc + total;
      return acc;
    }, 0);
    return {
      ...cartstate,
      total_amount: updatedcartamount,
    };
  }
  return cartstate;
}

export default CartReducer;
