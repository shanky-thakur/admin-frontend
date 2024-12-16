import React, { useState, useEffect } from "react";
import './Calender.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Keeps track of displayed month/year
  const [holidays, setHolidays] = useState([
    // Example holidays; replace these with real data as needed
    { date: "2024-12-14", name: "Flag Day" },
    { date: "2024-06-19", name: "Juneteenth" },
    { date: "2024-07-04", name: "Independence Day" },
  ]);

  const today = new Date();

  // Get first day and total days of the current month
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const totalDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  // Generate the dates for display
  const generateDays = () => {
    const days = [];
    const firstDay = firstDayOfMonth.getDay(); // 0 (Sun) - 6 (Sat)

    // Add blank cells for days before the 1st
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Add cells for each day in the month
    for (let day = 1; day <= totalDaysInMonth; day++) {
      const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const isToday =
        today.getDate() === day &&
        today.getMonth() === currentDate.getMonth() &&
        today.getFullYear() === currentDate.getFullYear();
      const isHoliday = holidays.some((holiday) => holiday.date === dateStr);

      days.push(
        <div
          key={day}
          className={`calendar-day ${isToday ? "today" : ""} ${isHoliday ? "holiday" : ""}`}
        >
          {day}
          {isHoliday && <div className="holiday-name">{holidays.find((h) => h.date === dateStr).name}</div>}
        </div>
      );
    }

    return days;
  };

  // Handle navigation to next and previous months
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>← Previous</button>
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </h2>
        <button onClick={goToNextMonth}>Next →</button>
      </div>
      <div className="calendar-grid">
        <div className="calendar-day header">Sun</div>
        <div className="calendar-day header">Mon</div>
        <div className="calendar-day header">Tue</div>
        <div className="calendar-day header">Wed</div>
        <div className="calendar-day header">Thu</div>
        <div className="calendar-day header">Fri</div>
        <div className="calendar-day header">Sat</div>
        {generateDays()}
      </div>
    </div>
  );
};

export default Calendar;