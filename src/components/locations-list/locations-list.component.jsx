import React from "react";

import LocationPreview from "../location-preview/location-preview.component";
import './locations-list.styles.scss';


const LocationsList = ({ locations }) => {

  return(
    <>
      <div className="locations-title-container">
        <h1 className="locations-title">LOCATIONS</h1>
      </div>
      <div className="locations-container">
        {
          locations.map((location) => <LocationPreview key={location.id} location={location}/>)
        }
      </div>
    </>
  )
};

export default LocationsList;

