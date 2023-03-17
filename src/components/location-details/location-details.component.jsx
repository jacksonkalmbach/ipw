import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../button/button.component";

import './location-details.styles.scss';

const LocationDetails = () => {

  const [ locationDetails, setLocationDetails ] = useState({});
  console.log(locationDetails);

  const { location } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${location}`)
      .then(response => response.json())
      .then(data => setLocationDetails(data))
  }, [location])

  const { username, email} = locationDetails;

    
  return (
    <>
      <Button
        to='/locations'
        buttonType="inverted"
      >Back to Locations</Button>
      <h1>{username}</h1>
      <p>{email}</p>
    </>
  )
};

export default LocationDetails;