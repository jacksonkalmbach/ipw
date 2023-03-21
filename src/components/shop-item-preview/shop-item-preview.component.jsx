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
      <div 
        className="preview-image-container">
       
          <img className='shop-item-preview-img' src={paddle} alt='paddle'/>
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
      </div>
      <div className='item-preview-details'>
        <div className="preview-name-and-price">
          <Link 
            className="item-preview-name"
            to={`/shop/item/${id}`}
            >{name}</Link>
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