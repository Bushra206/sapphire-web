import React from "react";

// CollectionReducer.js
function CollectionReducer(state, action) {
  switch (action.type) {
    case "rtw":
      return {
        ...state,
        filteredRwtData: state.cardsArrayData.filter(
          (item) => item.type === action.payload
        ),
      };
    case "unst":
      return {
        ...state,
        filteredUnstData: state.cardsArrayData.filter(
          (item) => item.type === action.payload
        ),
      };
    case "west":
      return {
        ...state,
        filteredWestData: state.cardsArrayData.filter(
          (item) => item.type === action.payload
        ),
      };
    case "slpw":
      return {
        ...state,
        filteredSlpwData: state.cardsArrayData.filter(
          (item) => item.type === action.payload
        ),
      };
    case "mdstw":
      return {
        ...state,
        filteredMdstwData: state.cardsArrayData.filter(
          (item) => item.type === action.payload
        ),
      };
    default:
      return state;
  }
}
export default CollectionReducer;
