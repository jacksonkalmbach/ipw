import React from "react";

import Button from '../button/button.component.jsx';
import TimeSlot from "../time-slot/time-slot.component.jsx";

import './calendar.styles.scss';

const Calendar = () => {

  const timeSlots = [];

  for (let i = 0; i < 12; i++) {
    timeSlots.push(<TimeSlot time={i}/>)
  }

  return(
    <div className="calendar-container">
      <h2>Reserve</h2>
      <div className="calendar">
        {timeSlots}
      </div>
      <Button>Reserve</Button>
    </div>
  )
};

export default Calendar;