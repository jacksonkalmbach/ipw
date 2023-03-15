import React from "react";

import './location-details.styles.scss';

const LocationDetails = ({ location }) => {

  console.log('render details...')

  return (
    <>
      <h1>{location}</h1>
      <p>Sample data</p>
    </>
  )
};

export default LocationDetails;