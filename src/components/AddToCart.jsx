import React from 'react'
import CardsArrayProvider from "../../Context/CardsArrayProvider";
import { useCardContextHook } from "../../Context/CardsArrayProvider";

function AddToCart({product}) {
    const { cardsArrayData, dispatch } = useCardContextHook();
  return (
    <CardsArrayProvider className="  pb-14  text-center ">
     
    </CardsArrayProvider>
  )
}

export default AddToCart
