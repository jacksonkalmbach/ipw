import React from "react";
import LocationPreview from "../../components/location-preview/location-preview.component";

import './locations.styles.scss';

const Locations = () => {

  const locationsArray = [];

  for(let i = 0; i < 10; i++) {
    locationsArray.push(<LocationPreview title='Farmers Branch'></LocationPreview>)
  }

  return(
    <>
      <div className="locations-title-container">
        <h1 className="locations-title">LOCATIONS</h1>
      </div>
      <div className="locations-container">
        {locationsArray}
      </div>
    </>
  )
};

export default Locations;