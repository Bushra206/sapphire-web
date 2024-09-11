import React from 'react'
import { useCartContextHook } from './Context/CartDataProvider'

const CartCountBadge=({size})=> {
  const {total_item}=useCartContextHook();
  return (
    <div className={`absolute bg-red-600 text-white text-[8px] tablet:text-[10px]  w-[15px] h-[15px] mobile:w-[18px] mobile:h-[18px]  -right-[5px] -top-[4px] sm:-right-[5px] sm:-top-[4px] rounded-full grid place-items-center `}
    >
     {total_item}
    </div>
  )
}

export default CartCountBadge
