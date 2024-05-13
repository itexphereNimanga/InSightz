// Schedule.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Schedule.css';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="schedule-container">
      <h1>Schedule</h1>
      
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="calendar" // Added class for green calendar
        />
      </div>

      <div className="event">
        <div className="event-info">
          <h2>Content Post</h2>
          <p>Schedule your next content post on {selectedDate.toDateString()}</p>
        </div>
        <div className="event-actions">
          <button>Edit</button>
          <button className='delete'>Delete</button>
        </div>
      </div>

      <div className="event">
        <div className="event-info">
          <h2>Analytics Report</h2>
          <p>Review analytics for the past week on {selectedDate.toDateString()}</p>
        </div>
        <div className="event-actions">
          <button>Edit</button>
          <button className='delete'>Delete</button>
        </div>
      </div>

      {/* Add more events as needed */}
    </div>
  );
};

export default Schedule;
