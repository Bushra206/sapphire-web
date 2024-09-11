import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CircularArrayProvider from "./components/Context/CircularArrayProvider.jsx";
import CardsArrayProvider from "./components/Context/CardsArrayProvider.jsx";
import CartDataProvider from "./components/Context/CartDataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CircularArrayProvider>
      <CardsArrayProvider>
        <CartDataProvider>
          <App />
        </CartDataProvider>
      </CardsArrayProvider>
    </CircularArrayProvider>
  </>
);
