import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from '../button/button.component'

import paddle from '../../assets/paddle-img.png'
import './shop-item-preview.styles.scss';


const ShopItemPreview = ({ itemInfo }) => {
  const { id, name, price, imageUrl } = itemInfo;

  const [ isFavorite, setIsFavorite ] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  const handleAddToCart = () => {
    console.log('add to cart')
  }

  return(
    <div className="shop-item-preview-container">
      <Link 
        className="preview-image-container"
        to={`/shop/item/${id}`}
        >
        <img className='shop-item-preview-img' src={imageUrl} alt='paddle'/>
        <div className="heart-icon-container">
          <div className="heart-icon-background">
            <span 
              className={`material-symbols-outlined ${isFavorite ? 'favorited' : ''}`}
              onClick={handleFavorite}  
            >
              favorite
            </span>
          </div>
        </div>
      </Link>

      <div className='item-preview-details'>
        <div className="preview-name-and-price">
          <h2 className="item-preview-name">{name}</h2>
          <h3 className="item-preview-price">${price}</h3>
        </div>
        <div className="item-specs-preview-container">
          <p className="item-specs-preview">These are the item details</p>
        </div>
      </div>
      <Button
        className='add-to-cart-btn'
        buttonType="inverted"
        onClick={handleAddToCart}
      >Add to Cart
      </Button>
    </div>
  )
};

export default ShopItemPreview;