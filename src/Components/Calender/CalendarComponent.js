import React, { useState } from "react";

import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // List of holidays (adjust the dates as needed)
  const holidays = [
    "2024-12-25", // Example holiday: Christmas
    "2024-12-31", // Example holiday: New Year's Eve
  ];

  // Function to navigate to the previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Function to navigate to the next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Get the number of days in the current month
  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  // Get the first day of the month (to calculate empty spaces)
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const firstDay = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());
  const blankDays = firstDay === 0 ? 6 : firstDay - 1;

  // Function to check if a given date is today's date
  const isToday = (year, month, day) => {
    const today = new Date();
    return (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      day === today.getDate()
    );
  };

  // Function to check if a given date is a holiday
  const isHoliday = (year, month, day) => {
    const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return holidays.includes(dateString);
  };

  const days = [];

  const dayStyle = {
    width: "14%",
    height: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#374957",
    fontSize: "14px",
    fontFamily: "Lufga",
    fontWeight: "500",
  };
  
  // Adding blank spaces for the starting days of the month
  for (let i = 0; i < blankDays; i++) {
    days.push(<div key={`blank-${i}`} style={dayStyle}></div>);
  }

  // Adding the actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const todayStyle = isToday(currentDate.getFullYear(), currentDate.getMonth(), day)
      ? { backgroundColor: "#FF7D1A", color: "#FFF", fontWeight: "600", borderRadius: "20%", border: "1px solid #EAEAEA" }
      : {};
    const holidayStyle = isHoliday(currentDate.getFullYear(), currentDate.getMonth(), day)
      ? { backgroundColor: "#FFD600", color: "#000", fontWeight: "500", borderRadius: "20%", border: "1px solid #EAEAEA" }
      : {};

    days.push(
      <div
        key={day}
        style={{ ...dayStyle, ...todayStyle, ...holidayStyle }}
      >
        {day}
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {/* Header */}
      <div
        style={{
          width: "100%",
          height: "12%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          onClick={goToPreviousMonth}
          style={{
            width: "10%",
            height: "80%",
            backgroundImage: `url(${left})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
          }}
        ></div>

        <div
          style={{
            width: "70%",
            height: "95%",
            color: "#374957",
            fontFamily: "Lufga",
            fontSize: "18px",
            fontWeight: "400",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </div>

        <div
          onClick={goToNextMonth}
          style={{
            width: "10%",
            height: "80%",
            backgroundImage: `url(${right})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
          }}
        ></div>
      </div>

      {/* Calendar */}
      <div
        style={{
          width: "100%",
          height: "86%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "15%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <div
              key={index}
              style={{
                width: "14%",
                height: "100%",
                color: "#BEC5D2",
                fontWeight: "500",
                fontSize: "14px",
                fontFamily: "Lufga",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {day}
            </div>
          ))}
        </div>

        <div
          style={{
            width: "100%",
            height: "85%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {days}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
