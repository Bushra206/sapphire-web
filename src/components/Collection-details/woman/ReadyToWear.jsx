import React, { useEffect } from "react";
import CardsArrayProvider from "../../Context/CardsArrayProvider";
import { useCardContextHook } from "../../Context/CardsArrayProvider";
import Cards from "../../Cards";

// ReadyToWear.js
function ReadyToWear() {
    const { cardsArrayData, dispatch } = useCardContextHook();

    useEffect(() => {
      dispatch({ type: 'rtw', payload: 'rtw' });
    }, []);

    return (
      <CardsArrayProvider className="  pb-14  text-center ">
      <Cards catagory_data={cardsArrayData.filteredRwtData} />
    </CardsArrayProvider>
    );
  }

export default ReadyToWear;