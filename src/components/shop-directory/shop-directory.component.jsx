import React from "react";
import ShopItemPreview from "../shop-item-preview/shop-item-preview.component";

import './shop-directory.styles.scss';

import SHOP_DATA from '../../shop-data.json'

const ShopDirectory = () => {

  console.log(SHOP_DATA);

  const dummyItems = [];

  for (let i = 0; i < SHOP_DATA.length; i++) {
    dummyItems.push(<ShopItemPreview key={i} itemInfo={SHOP_DATA[i]}/>)
  }

  return(
    <>
      <h2>Shop Pickleball</h2>
      <div className="shop-preview-container">
        {dummyItems}
      </div>
    </>
  )
};

export default ShopDirectory;