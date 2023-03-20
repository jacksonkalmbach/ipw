import React from "react";
import { Routes, Route } from "react-router-dom";

import ShopDirectory from "../../components/shop-container/shop-directory.component";
import ShopItemPreview from "../../components/shop-item-preview/shop-item-preview.component";


const Shop = () => {
  return(
    <Routes>
      <Route path="/" index element={<ShopDirectory />} />
      <Route path=":item" element={<ShopItemPreview/>} />
    </Routes>
  )
};

export default Shop;