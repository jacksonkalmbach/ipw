import React from "react";

import './location-preview.styles.scss';

const LocationPreview = ({ title }) => {
  return (
    <div className="locations-preview-container">
      <h2 className="location-preview-name">{title}</h2>
      <p>Address</p>
    </div>
  )
};

export default LocationPreview;