import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "../button/button.component";
import Calendar from '../calendar/calendar.component.jsx'

import './location-details.styles.scss';

const LocationDetails = () => {

  const [ locationDetails, setLocationDetails ] = useState({});
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
        className='back-button-locations'
        to='/locations'
        buttonType="inverted"
        >Back to Locations
      </Button>
      <div className="location-details-container">
        <h1 className="location-name">{username}</h1>
        <p>{email}</p>
        <Calendar />
      </div>
    </>
    )
};

export default LocationDetails;