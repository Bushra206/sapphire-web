import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NavbarLinks from "./components/NavbarLinks";
import MobNavBar from "./components/MobNavBar";
import Hero from "./components/Hero";
// import WhatsNew from "./components/WhatsNew";
import CircularSlider from "./components/CircularSlider";
import LazyComponent from "./garbage/LazyComponent";
import ShopByCatagory from "./components/ShopByCatagory";
import Trending from "./components/Trending";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Woman from "./components/Collection/Woman";
import ReadyToWear from "./components/Collection-details/woman/ReadyToWear";
import West from "./components/Collection-details/woman/West";
import SleepWear from "./components/Collection-details/woman/SleepWear";
import ModestWear from "./components/Collection-details/woman/ModestWear";
import SingleProduct from "./components/Products/SingleProduct";
import Cart from "./components/Cart";
import MobNavBarLinks from "./components/MobNavBarLinks";
import Example from "./components/Products/random";

// import Man from "./components/Collection/Man";
// import Kids from "./components/Collection/Kids";
// import Beauty from "./components/Collection/Beauty";
// import Accessories from "./components/Collection/Accessories";
// import Home from "./components/Collection/Home";
// import Cards from "./components/Cards";
import WhatsNew from "./components/WhatsNew";
//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { GlobalStyle } from "./components/GlobalStyle";

//context
import { useContext } from "react";
import { circularcontextcreate } from "./components/Context/CircularArrayProvider";
import CircularArrayProvider from "./components/Context/CircularArrayProvider";
import Unstitched from "./components/Collection-details/woman/Unstitched";

const App = () => {
  const [showmenuicon, setShowMenuIcon] = useState(false);
  const handleMenuClick = () => {
    console.log("handleMenuClick called");
    setShowMenuIcon(!showmenuicon);
    console.log("showmenuicon (after handleMenuClick):", showmenuicon);
  };

  // return (
  //   <main>
  //     <BrowserRouter BrowserRouter>
  //       <main>
  //         <Navbar />
  //         <NavbarLinks />
  //         <MobNavBar />

  //         <Routes>
  //           <Route
  //             path="/"
  //             element={
  //               <>
  //                 <Hero />
  //                 <CircularArrayProvider>
  //                 <CircularSlider
  //                   heading="WHAT'S <br /> NEW "
  //                   data={contextuse.circularData.WhatsNew}
  //                 />
  //                 </CircularArrayProvider>
  //                 <ShopByCatagory />
  //                 <Trending />
  //               </>
  //             }
  //           />
  //           <Route path="/women" element={<Women />} />
  //           <Route path="/cart" element={<Cart />} />
  //           <Route path="*" element={<ErrorPage />} />
  //         </Routes>

  //         <Footer />
  //       </main>
  //     </BrowserRouter>

  //     {/* <Routes>
  //       <Route path="/womenproducts" element={<WomenProducts/>} />
  //      <Route path="/cart" element={<Cart/>} />
  //      <Route path="*" element={<ErrorPage/>} />
  //    </Routes>
  // </BrowserRouter>

  //     <Navbar />
  //     <NavbarLinks />
  //     <MobNavBar />
  //     <Hero />
  //     <WhatsNew />
  //     <ShopByCatagory/>
  //     <Trending/>
  //     <Footer/> */}
  //   </main>
  // );

  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <MobNavBarLinks
          showmenuicon={showmenuicon}
          setShowMenuIcon={setShowMenuIcon}
        />
        <MobNavBar
          showmenuicon={showmenuicon}
          setShowMenuIcon={setShowMenuIcon}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className={showmenuicon && "fixed"}>
                <Hero />
                <WhatsNew />
                <ShopByCatagory />
                <Trending />
              </div>
            }
          />
          {/* <Route path="/Collection/woman" element={<Woman />} />
          <Route path="/rtw" element={<ReadyToWear />} />
          <Route path="/unst" element={<Unstitched />} />
          <Route path="/west" element={<West/>} />
          <Route path="/slpw" element={<SleepWear/>} />
          <Route path="/mdstw" element={<ModestWear/>} /> */}
          <Route path="/Collection">
            <Route path="woman" element={<Woman />} />
            <Route path="ready-to-wear" element={<ReadyToWear />} />
            <Route path="unstitched" element={<Unstitched />} />
            <Route path="west" element={<West />} />
            <Route path="sleepwear" element={<SleepWear />} />
            <Route path="modestwear" element={<ModestWear />} />
          </Route>
          <Route path="singleproduct/:id" element={<SingleProduct />} />
          {/* <Route path="/Collection/man" element={<Man/>} />
          <Route path="/Collection/kids" element={<Kids />} />
          <Route path="/Collection/beauty" element={<Beauty />} />
          <Route path="/Collection/accessories" element={<Accessories />} />
          <Route path="/Collection/home" element={<Home />} /> */}
          <Route path="/random" element={<Example />} />
          <Route path="/cart" element={<Cart />} />
          /* <Route path="*" element={<ErrorPage />} /> */
        </Routes>

        {/* <Footer /> */}
      </main>
    </BrowserRouter>
  );
};

export default App;
