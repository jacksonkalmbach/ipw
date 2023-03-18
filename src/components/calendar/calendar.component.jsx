import React from "react";

import Button from '../button/button.component.jsx';
import TimeSlot from "../time-slot/time-slot.component.jsx";

import './calendar.styles.scss';

const TIME_SLOTS = {
  1: '8:00 AM',
  2: '9:00 AM',
  3: '10:00 AM',
  4: '11:00 AM',
  5: '12:00 PM',
  6: '1:00 PM',
  7: '2:00 PM',
  8: '3:00 PM',
  9: '4:00 PM',
  10: '5:00 PM',
  11: '6:00 PM',
  12: '7:00 PM'
};

const Calendar = () => {

  const timeSlots = [];

  Object.keys(TIME_SLOTS).forEach(key => {
    timeSlots.push(<TimeSlot key={key} time={TIME_SLOTS[key]}/>)
  });

  return(
    <div className="calendar-container">
      <h2 className="calendar-title">Reserve</h2>
      <div className="availability-legend">
        <div className="available-legend">
          <span className="available-color" />
          <p>Available</p>
        </div> 
        <div className="unavailable-legend">
        <span className="unavailable-color" />
          <p>Unavailable</p>
        </div>
      </div>
      <div className="calendar">
        {timeSlots}
      </div>
      <Button>Reserve</Button>
    </div>
  )
};

export default Calendar;