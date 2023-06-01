import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar2 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [daysBetween, setDaysBetween] = useState(0);

  const handleStartChange = (date) => {
    setStartDate(date);
    const start = {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate()
    };
    console.log(start);
    setDaysBetween(Math.round((endDate - date) / (1000 * 60 * 60 * 24)));
  };

  const handleEndChange = (date) => {
    setEndDate(date);
    const end = {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate()
    };
    console.log(end);
    setDaysBetween(Math.round((date - startDate) / (1000 * 60 * 60 * 24)));
  };

  return (
    <div>
      <div>
        <label>Start Date:</label>
        <DatePicker selected={startDate} onChange={handleStartChange} />
      </div>
      <div>
        <label>End Date:</label>
        <DatePicker selected={endDate} onChange={handleEndChange} />
      </div>
      <p>Days Between: {daysBetween}</p>
    </div>
  );
};

export default Calendar2;
