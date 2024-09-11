import React, { useEffect } from "react";
import CardsArrayProvider from "../../Context/CardsArrayProvider";
import { useCardContextHook } from "../../Context/CardsArrayProvider";
import Cards from "../../Cards";

// ReadyToWear.js
function ModestWear() {
    const { cardsArrayData, dispatch } = useCardContextHook();

    useEffect(() => {
      dispatch({ type: 'mdstw', payload: 'mdstw' });
    }, []);

    return (
      <CardsArrayProvider className="  pb-14  text-center ">
      <Cards catagory_data={cardsArrayData.filteredMdstwData} />
    </CardsArrayProvider>
    );
  }

export default ModestWear;