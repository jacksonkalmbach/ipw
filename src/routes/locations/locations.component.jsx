import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import LocationDetails from '../../components/location-details/location-details.component';
import LocationsList from '../../components/locations-list/locations-list.component';


const Locations = () => {

  const [ locations, setLocations ] = useState([]);

  useEffect(() => {fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setLocations(data))
  }, []) 

  return(
    <Routes>
      <Route path="/" index element={<LocationsList locations={locations}/>} />
      <Route path=":location" element={<LocationDetails/>} />
    </Routes>
  )
}

export default Locations;
