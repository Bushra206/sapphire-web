import React, { useEffect } from "react";
import CardsArrayProvider from "../../Context/CardsArrayProvider";
import { useCardContextHook } from "../../Context/CardsArrayProvider";
import Cards from "../../Cards";

// ReadyToWear.js
function Unstitched() {
    const { cardsArrayData, dispatch } = useCardContextHook();

    useEffect(() => {
      dispatch({ type: 'unst', payload: 'unst' });
    }, []);

    return (
      <CardsArrayProvider className="  pb-14  text-center ">
      <Cards catagory_data={cardsArrayData.filteredUnstData} />
    </CardsArrayProvider>
    );
  }

export default Unstitched;