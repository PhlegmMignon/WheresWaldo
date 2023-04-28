import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Start from "./components/Start";
import Image from "./components/Image";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/shop" exact element={<Shop />} />
        <Route path="/cart" exact element={<Cart />} /> */}
        <Route path="/" element={<Start />} />
        <Route path="/image" element={<Image />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
