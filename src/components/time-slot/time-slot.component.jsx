import React, { useState } from "react";

import './time-slot.styles.scss';

const TimeSlot = ({ time }) => {

  const [ isSelected, setIsSelected ] = useState(false);

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  }

  return(
    <div className={`time-slot-container ${isSelected}`} onClick={toggleSelected}>
      {`${time}:00`}
    </div>
  )
};

export default TimeSlot;