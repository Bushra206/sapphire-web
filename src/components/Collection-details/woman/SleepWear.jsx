import React, { useEffect } from "react";
import CardsArrayProvider from "../../Context/CardsArrayProvider";
import { useCardContextHook } from "../../Context/CardsArrayProvider";
import Cards from "../../Cards";

// ReadyToWear.js
function Sleepwear() {
    const { cardsArrayData, dispatch } = useCardContextHook();

    useEffect(() => {
      dispatch({ type: 'slpw', payload: 'slpw' });
    }, []);

    return (
      <CardsArrayProvider className="  pb-14  text-center ">
      <Cards catagory_data={cardsArrayData.filteredSlpwData} />
    </CardsArrayProvider>
    );
  }

export default Sleepwear;