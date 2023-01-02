import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./clander.css";
function SmallCalender() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar value={date} />
      </div>
    </div>
  );
}
export default SmallCalender;
