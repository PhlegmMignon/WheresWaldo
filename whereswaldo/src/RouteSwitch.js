import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/shop" exact element={<Shop />} />
        <Route path="/cart" exact element={<Cart />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
