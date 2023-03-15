import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LocationDetails from '../../components/location-details/location-details.component';
import LocationsList from '../../components/locations-list/locations-list.component';


const Locations = () => {
  console.log('Render Locations Component')
  return(
    <Routes>
      <Route path="/" index element={<LocationsList/>} />
      <Route path=":location" element={<LocationDetails/>} />
    </Routes>
  )
}

export default Locations;
