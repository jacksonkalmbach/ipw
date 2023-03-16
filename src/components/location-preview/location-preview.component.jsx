import React from "react";

import './location-preview.styles.scss';
import Button from '../button/button.component.jsx'

const LocationPreview = ({ location }) => {

  const { username, address } = location;
  const { street, city, zipcode } = address;
  const fullAddress = street + ', ' + city + ', ' + zipcode;

  return (
    <div className="locations-preview-container">
      <div className="location-preview-details">
        <h2 className="location-preview-name">{username}</h2>
        <img
          className="location-preview-photo"
          src="https://theasphaltpro.com/wp-content/uploads/2020/05/Pickleball-Courts-Anaheim-Tennis-Pickleball-Center-1536x1153.jpg"
          alt="location preview"
        />
        <p>{fullAddress}</p>
      </div>
      <Button
        className="location-preview-button"
        // to={`/locations/${username.replace(/\s+/g, '-')}`}
        to={`/locations/${username}`}
      >Explore {username}
      </Button>
    </div>
  );
};

export default LocationPreview;