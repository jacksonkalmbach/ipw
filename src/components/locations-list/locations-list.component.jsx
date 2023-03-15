import React from "react";
import LocationPreview from "../location-preview/location-preview.component";

import './locations-list.styles.scss';

const LOCATION_DATA = [
  {
    title: 'Farmers Branch',
    address: '123 Main St\nFarmers Branch, TX'
  },
  {
    title: 'Dallas',
    address: '335 4th Ave\nDallas, TX'
  },
  {
    title: 'Austin',
    address: '55 Rogan Road\nAustin, TX'
  }
]

const LocationsList = () => {

  const locationsArray = [];

  for(let i = 0; i < LOCATION_DATA.length; i++) {
    const { title, address } = LOCATION_DATA[i]
    locationsArray.push(<LocationPreview key={i} title={title} address={address}></LocationPreview>)
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

export default LocationsList;