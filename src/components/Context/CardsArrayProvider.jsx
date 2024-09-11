import React, { useContext, useReducer } from "react";
import { createContext, useState } from "react";
export const contextcreate = createContext();
import CollectionReducer from "../Reducer/CollectionReducer";
export const useCardContextHook = () => {
  const cardContextState = useContext(contextcreate);
  return cardContextState;
};
//////importing women collection images
//RTW
import woman_rtw_1a from "../../assets/Collection-images/woman-images/ReadyToWear/woman_rtw_1/woman_rtw_1a.webp";
import woman_rtw_1b from "../../assets/Collection-images/woman-images/ReadyToWear/woman_rtw_1/woman_rtw_1b.webp";
import woman_rtw_1c from "../../assets/Collection-images/woman-images/ReadyToWear/woman_rtw_1/woman_rtw_1c.webp";
import woman_rtw_1d from "../../assets/Collection-images/woman-images/ReadyToWear/woman_rtw_1/woman_rtw_1d.webp";
import woman_rtw_1e from "../../assets/Collection-images/woman-images/ReadyToWear/woman_rtw_1/woman_rtw_1d.webp";
import woman_rtw_1f from "../../assets/Collection-images/woman-images/ReadyToWear/woman_rtw_1/woman_rtw_1d.webp";
import woman_rtw_2a from "../../assets/Collection-images/woman-images/ReadyToWear/woman_rtw_2/woman_rtw_2a.webp";
import woman_rtw_2b from "../../assets/Collection-images/woman-images/ReadyToWear/woman_rtw_2/woman_rtw_2b.webp";
import woman_rtw_2c from "../../assets/Collection-images/woman-images/ReadyToWear/woman_rtw_2/woman_rtw_2c.webp";
import woman_rtw_2d from "../../assets/Collection-images/woman-images/ReadyToWear/woman_rtw_2/woman_rtw_2d.webp";
//UNSTICHED
import woman_unst_1a from "../../assets/Collection-images/woman-images/Unstitched/woman_unst_1/woman_unst_1a.webp";
import woman_unst_1b from "../../assets/Collection-images/woman-images/Unstitched/woman_unst_1/woman_unst_1b.webp";
import woman_unst_1c from "../../assets/Collection-images/woman-images/Unstitched/woman_unst_1/woman_unst_1c.webp";
import woman_unst_1d from "../../assets/Collection-images/woman-images/Unstitched/woman_unst_1/woman_unst_1d.webp";
import woman_unst_2a from "../../assets/Collection-images/woman-images/Unstitched/woman_unst_2/woman_unst_2a.webp";
import woman_unst_2b from "../../assets/Collection-images/woman-images/Unstitched/woman_unst_2/woman_unst_2b.webp";
import woman_unst_2c from "../../assets/Collection-images/woman-images/Unstitched/woman_unst_2/woman_unst_2c.webp";
import woman_unst_2d from "../../assets/Collection-images/woman-images/Unstitched/woman_unst_2/woman_unst_2d.webp";
//WEST
import woman_west_1a from "../../assets/Collection-images/woman-images/West/woman_west_1/woman_west_1a.webp";
import woman_west_1b from "../../assets/Collection-images/woman-images/West/woman_west_1/woman_west_1b.webp";
import woman_west_1c from "../../assets/Collection-images/woman-images/West/woman_west_1/woman_west_1c.webp";
import woman_west_1d from "../../assets/Collection-images/woman-images/West/woman_west_1/woman_west_1d.webp";
import woman_west_2a from "../../assets/Collection-images/woman-images/West/woman_west_2/woman_west_2a.webp";
import woman_west_2b from "../../assets/Collection-images/woman-images/West/woman_west_2/woman_west_2b.webp";
import woman_west_2c from "../../assets/Collection-images/woman-images/West/woman_west_2/woman_west_2c.webp";
import woman_west_2d from "../../assets/Collection-images/woman-images/West/woman_west_2/woman_west_2d.webp";
//SLEEPWEAR
import woman_slpw_1a from "../../assets/Collection-images/woman-images/Sleepwear/woman_slpw_1/woman_slpw_1a.webp";
import woman_slpw_1b from "../../assets/Collection-images/woman-images/Sleepwear/woman_slpw_1/woman_slpw_1b.webp";
import woman_slpw_1c from "../../assets/Collection-images/woman-images/Sleepwear/woman_slpw_1/woman_slpw_1c.webp";
import woman_slpw_1d from "../../assets/Collection-images/woman-images/Sleepwear/woman_slpw_1/woman_slpw_1d.webp";
import woman_slpw_2a from "../../assets/Collection-images/woman-images/Sleepwear/woman_slpw_2/woman_slpw_2a.webp";
import woman_slpw_2b from "../../assets/Collection-images/woman-images/Sleepwear/woman_slpw_2/woman_slpw_2b.webp";
import woman_slpw_2c from "../../assets/Collection-images/woman-images/Sleepwear/woman_slpw_2/woman_slpw_2c.webp";
import woman_slpw_2d from "../../assets/Collection-images/woman-images/Sleepwear/woman_slpw_2/woman_slpw_2d.webp";
//MODESTWEAR
import woman_mdstw_1a from "../../assets/Collection-images/woman-images/ModestWear/woman_mdstw_1/woman_mdstw_1a.webp";
import woman_mdstw_1b from "../../assets/Collection-images/woman-images/ModestWear/woman_mdstw_1/woman_mdstw_1b.webp";
import woman_mdstw_1c from "../../assets/Collection-images/woman-images/ModestWear/woman_mdstw_1/woman_mdstw_1c.webp";
import woman_mdstw_1d from "../../assets/Collection-images/woman-images/ModestWear/woman_mdstw_1/woman_mdstw_1d.webp";
import woman_mdstw_2a from "../../assets/Collection-images/woman-images/ModestWear/woman_mdstw_2/woman_mdstw_2a.webp";
import woman_mdstw_2b from "../../assets/Collection-images/woman-images/ModestWear/woman_mdstw_2/woman_mdstw_2b.webp";
import woman_mdstw_2c from "../../assets/Collection-images/woman-images/ModestWear/woman_mdstw_2/woman_mdstw_2c.webp";
import woman_mdstw_2d from "../../assets/Collection-images/woman-images/ModestWear/woman_mdstw_2/woman_mdstw_2d.webp";

function CardsArrayProvider(props) {
  // console.log("CircularArrayProvider component rendered"); // Add this line
  let cards_initial_data = [
    {
      id: "woman_rtw_1",
      // img: woman_rtw_1,
      images: [woman_rtw_1a, woman_rtw_1b, woman_rtw_1c, woman_rtw_1d],
      title: "Printed Lawn Shirt",
      type: "rtw",
      collection: "Summer New Arrivals",
      price: 3590,
      stock: 3,
      size: ["S", "M", "L", "XL"],
      // size: [1,2,3,4],
      catagory: "woman",
      detail: (
        <div className="product-full-detail">
          <div className="flex flex-col gap-8 pb-4">
            <p className="text-[12px] font-bold">A-Line Shirt</p>
            <p className="font-normal text-[12px]">
              Create a regal look this season in our pink, embroidered
              three-piece featuring an embroidered extra weft jacquard shirt and
              dupatta with cambric trousers.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h2 class="text-[12px] font-bold mb-2">Details:</h2>
              <div class=" mb-4">
                <p class="mb-1 font-normal text-[12px]">
                  Printed Front with Lace, Printed Back, Full Sleeves, Round
                  Neckline with a slit & tassels
                </p>
                <p class="mb-1 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Fabric:</span>Lawn
                </p>
                <p class="mb-2 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Colour:</span> Pink On
                  Yellow
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 class="text-[12px] font-bold mb-2">SIZE & FIT</h2>
              <div class=" mb-4">
                <p class="mb-1 font-normal text-[12px]">
                  Model height: 5 Feet 5 Inches
                </p>
                <p class="mb-1 font-normal text-[12px]">Model Wears: S</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "woman_rtw_2",
      images: [woman_rtw_2a, woman_rtw_2b, woman_rtw_2c, woman_rtw_2d],
      title: "Printed Lawn Shirt",
      type: "rtw",
      collection: "Summer New Arrivals",
      price: 3590,
      stock: 5,
      size: ["S", "M", "L", "XL"],
      catagory: "woman",
      detail: (
        <div className="product-full-detail">
          <div className="flex flex-col gap-8 pb-4">
            <p className="text-[12px] font-bold">A-Line Shirt</p>
            <p className="font-normal text-[12px]">
              Make a striking statement with our printed A-line shirt featuring
              a Y-neckline with lace detailing.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h2 class="text-[12px] font-bold mb-2">Details:</h2>
              <div class=" mb-4">
                <p class="mb-1 font-normal text-[12px]">
                  Printed Front, Printed Back, Full Sleeves, Y Neckline with
                  lace
                </p>
                <p class="mb-1 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Fabric:</span>Lawn
                </p>
                <p class="mb-2 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Colour:</span> Dark Grey
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 class="text-[12px] font-bold mb-2">SIZE & FIT</h2>
              <div class=" mb-4">
                <p class="mb-1 font-normal text-[12px]">
                  Model height: 5 Feet 5 Inches
                </p>
                <p class="mb-1 font-normal text-[12px]">Model Wears: S</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "woman_unst_1",
      images: [woman_unst_1a, woman_unst_1b, woman_unst_1c, woman_unst_1d],
      title: "3 Piece - Embroidered Jacquard Suit",
      type: "unst",
      collection: "Intermix '24",
      price: 7590,
      stock: 2,
      catagory: "woman",
      detail: (
        <div className="product-full-detail">
          <div className="flex flex-col gap-8 pb-4">
            <p className="font-normal text-[12px]">
              Create a regal look this season in our pink, embroidered
              three-piece featuring an embroidered extra weft jacquard shirt and
              dupatta with cambric trousers.
            </p>
            <p>
              <u>Unstitched 3-Piece</u>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h2 class="text-[12px] font-bold mb-2">Shirt:</h2>
              <div class=" mb-4">
                <p class="mb-1 font-normal text-[12px]">
                  Dyed Extra Weft Jacquard Shirt 3.35M
                </p>
                <p class="mb-1 font-normal text-[12px]">
                  Embroidered Neckline Hem & Sleeves Border 3PC
                </p>
                <p class="mb-1 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Fabric:</span> Extra Weft
                  Jacquard
                </p>
                <p class="mb-2 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Colour:</span> Pink
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 class="text-[12px] font-bold mb-2">Dupatta:</h2>
              <div class=" mb-4">
                <p class="mb-1 font-normal text-[12px]">
                  Dyed Extra Weft Jacquard Dupatta 2.5M
                </p>
                <p class="mb-1 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Fabric:</span> Extra Weft
                  Jacquard
                </p>
                <p class="mb-2 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Colour:</span> Pink
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 class="text-[12px] font-bold mb-2">Trousers:</h2>
              <div class=" mb-4">
                <p class="mb-1 font-normal text-[12px]">
                  Dyed Embroidered Cambric Trouser 2PC
                </p>
                <p class="mb-1 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Fabric:</span> Cambric
                </p>
                <p class="mb-2 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Colour:</span> Pink
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "woman_unst_2",
      images: [woman_unst_2a, woman_unst_2b, woman_unst_2c, woman_unst_2d],
      title: "3 Piece - Embroidered Jacquard Suit",
      type: "unst",
      collection: "Intermix '24",
      price: 6590,
      stock: 6,
      catagory: "woman",
      detail: (
        <div className="product-full-detail">
          <div className="flex flex-col gap-8 pb-4">
            <p className="font-normal text-[12px]">
              Create a regal look this season in our teal blue, three-piece
              featuring an embroidered extra weft jacquard shirt, dyed extra
              weft jacquard trousers, and embroidered voile dupatta.
            </p>
            <p>
              <u>Unstitched 3-Piece</u>
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h2 class="text-[12px] font-bold mb-2">Shirt:</h2>
              <div class=" mb-4">
                <p class="mb-1 font-normal text-[12px]">
                  Dyed Extra Weft Jacquard Shirt 3.35M
                </p>
                <p class="mb-1 font-normal text-[12px]">
                  Embroidered Neckline Hem & Sleeves Border 3PC
                </p>
                <p class="mb-1 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Fabric:</span> Extra Weft
                  Jacquard
                </p>
                <p class="mb-2 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Colour:</span> Teal Blue
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 class="text-[12px] font-bold mb-2">Dupatta:</h2>
              <div class=" mb-4">
                <p class="mb-1 font-normal text-[12px]">
                  Dyed Extra Weft Jacquard Dupatta 2.5M
                </p>
                <p class="mb-1 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Fabric:</span> Extra Weft
                  Jacquard
                </p>
                <p class="mb-2 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Colour:</span> Teal Blue
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 class="text-[12px] font-bold mb-2">Trousers:</h2>
              <div class=" mb-4">
                <p class="mb-1 font-normal text-[12px]">
                  Dyed Embroidered Cambric Trouser 2PC
                </p>
                <p class="mb-1 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Fabric:</span> Cambric
                </p>
                <p class="mb-2 font-normal text-[12px]">
                  <span class="text-[12px] font-bold">Colour:</span> Teal Blue
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "woman_west_1",
      images: [woman_west_1a, woman_west_1b, woman_west_1c, woman_west_1d],
      title: "Gingham Full-Circle Skirt",
      type: "west",
      collection: "Summer New Arrivals",
      price: 4990,
      stock: 4,
      size: ["S", "M", "L", "XL"],
      catagory: "woman",
    },
    {
      id: "woman_west_2",
      images: [woman_west_2a, woman_west_2b, woman_west_2c, woman_west_2d],
      title: "Drapey Trousers with Belt",
      type: "west",
      collection: "Summer New Arrivals",
      price: 3490,
      stock: 7,
      size: ["S", "M", "L", "XL"],
      catagory: "woman",
    },
    {
      id: "woman_slpw_1",
      images: [woman_slpw_1a, woman_slpw_1b, woman_slpw_1c, woman_slpw_1d],
      title: "Printed Cotton PJ set",
      type: "slpw",
      // collection: "Summer New Arrivals",
      price: 4490,
      stock: 1,
      size: ["S", "M", "L", "XL"],
      catagory: "woman",
    },
    {
      id: "woman_slpw_2",
      images: [woman_slpw_2a, woman_slpw_2b, woman_slpw_2c, woman_slpw_2d],
      title: "Striped Viscose PJ Set",
      type: "slpw",
      // collection: "Summer New Arrivals",
      price: 5590,
      stock: 3,
      size: ["S", "M", "L", "XL"],
      catagory: "woman",
    },
    {
      id: "woman_mdstw_1",
      images: [woman_mdstw_1a, woman_mdstw_1b, woman_mdstw_1c, woman_mdstw_1d],
      title: "Crew Neck Button Through Abaya Set",
      type: "mdstw",
      // collection: "Summer New Arrivals",
      price: 7990,
      stock: 5,
      size: ["S", "M", "L", "XL"],
      catagory: "woman",
    },
    {
      id: "woman_mdstw_2",
      images: [woman_mdstw_2a, woman_mdstw_2b, woman_mdstw_2c, woman_mdstw_2d],
      title: "Hand Embellished Kaftan Abaya Set",
      type: "mdstw",
      // collection: "Summer New Arrivals",
      price: 16990,
      stock: 5,
      size: ["S", "M", "L", "XL"],
      catagory: "woman",
    },
  ];

  const [cardsArrayData, dispatch] = useReducer(CollectionReducer, {
    cardsArrayData: cards_initial_data,
    filteredRwtData: [],
    filteredUnstData: [],
    filteredWestData: [],
    filteredSlpwData: [],
    filteredMdstwData: [],
  });
  const [countProduct, setCountProduct] = useState(1);
  // console.log("CircularData:", cardsArrayData); // Add this line
  // dispatch({type:'rtw', payload:cards_initial_data});

  return (
    <div>
      <contextcreate.Provider
        value={{ cardsArrayData, dispatch, countProduct, setCountProduct }}
      >
        {props.children}
      </contextcreate.Provider>
    </div>
  );
}

export default CardsArrayProvider;
