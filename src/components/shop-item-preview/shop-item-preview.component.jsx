import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from 'react-icons/fa';
import Button from '../button/button.component'
import paddle from '../../assets/paddle-img.png'
import './shop-item-preview.styles.scss';

const ShopItemPreview = ({ itemInfo }) => {
  const { id, name, price, rating, numRatings } = itemInfo;

  const getFilledStarCount = () => {
    return Math.round(rating);
  };

  const getEmptyStarCount = () => {
    return 5 - getFilledStarCount();
  };

  return(
    <div className="shop-item-preview-container">
      <div 
        className="preview-image-container">
        <img className='shop-item-preview-img' src={paddle} alt='paddle'/>
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
          <div className="rating shop-item-rating">
            {Array(getFilledStarCount()).fill(
              <FaStar className="filled" />
            )}
            {Array(getEmptyStarCount()).fill(
              <FaRegStar />
            )}
          <span>({numRatings})</span>
          </div>
        </div>
      </div>
      <Button
        className='add-to-cart-btn'
        buttonType="inverted"
        onClick={() => console.log('add to cart')}
      >Add to Cart
      </Button>
    </div>
  )
};

export default ShopItemPreview;
