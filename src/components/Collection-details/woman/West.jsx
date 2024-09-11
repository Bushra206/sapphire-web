import React, { useEffect } from "react";
import CardsArrayProvider from "../../Context/CardsArrayProvider";
import { useCardContextHook } from "../../Context/CardsArrayProvider";
import Cards from "../../Cards";

// ReadyToWear.js
function West() {
    const { cardsArrayData, dispatch } = useCardContextHook();

    useEffect(() => {
      dispatch({ type: 'west', payload: 'west' });
    }, []);

    return (
      <CardsArrayProvider className="  pb-14  text-center ">
      <Cards catagory_data={cardsArrayData.filteredWestData} />
    </CardsArrayProvider>
    );
  }

export default West;