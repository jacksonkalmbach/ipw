import React from "react";

import './location-preview.styles.scss';
import Button from '../button/button.component.jsx'

const LocationPreview = ({ title, address }) => {

  const addressLines = address.split('\n');

  return (
    <div className="locations-preview-container">
      <div className="location-preview-details">
        <h2 className="location-preview-name">{title}</h2>
        <img
          className="location-preview-photo"
          src="https://theasphaltpro.com/wp-content/uploads/2020/05/Pickleball-Courts-Anaheim-Tennis-Pickleball-Center-1536x1153.jpg"
          alt="location preview"
        />
        {
          addressLines.map((line, idx) => (
            <p key={idx} className='location-preview-address'>{line}</p>
          ))
        }
      </div>
      <Button
        className="location-preview-button"
        to={`/locations/${title.replace(/\s+/g, '-')}`}
      >Explore {title}
      </Button>
    </div>
  );
};

export default LocationPreview;