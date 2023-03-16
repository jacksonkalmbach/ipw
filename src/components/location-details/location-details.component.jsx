import React from "react";
import { useParams } from "react-router-dom";
import Button from "../button/button.component";

import './location-details.styles.scss';

const LocationDetails = () => {

  const {location} = useParams();
  const locationName = location.replace(/-/g, ' ');


  return (
    <>
      <Button
        to='/locations'
        buttonType="inverted"
      >Back to Locations</Button>
      <h1>{locationName}</h1>
      <p>Sample data</p>
    </>
  )
};

export default LocationDetails;