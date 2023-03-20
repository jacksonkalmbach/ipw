import React from "react";
import ShopItemPreview from "../shop-item-preview/shop-item-preview.component";

import './shop-directory.styles.scss';

const ShopDirectory = () => {

  const dummyItems = [];

  for (let i = 0; i < 20; i++) {
    dummyItems.push(<ShopItemPreview key={i}/>)
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