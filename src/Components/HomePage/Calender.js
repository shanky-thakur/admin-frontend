import React, { useState, useEffect } from "react";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";

const Calender = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const today = new Date(); // Get today's date

  const getMonday = (date) => {
    const day = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const diff = (day === 0 ? -6 : 1) - day; // Adjust for Sunday
    return new Date(date.setDate(date.getDate() + diff));
  };

  const getWeekDates = (startDate) => {
    const dates = [];
    let current = new Date(startDate);
    for (let i = 0; i < 7; i++) {
      // Get only the day of the month as a two-digit string
      dates.push(String(current.getDate()).padStart(2, '0')); // Pads single digits with leading zero
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const getMonthYear = (date) => {
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleString('en-US', options); // This will give you "January 2025"
  };

  useEffect(() => {
    setWeekStartDate(getMonday(new Date())); // Set to current week's Monday
  }, []);

  const handleNextWeek = () => {
    const nextWeek = new Date(weekStartDate);
    nextWeek.setDate(weekStartDate.getDate() + 7);
    setWeekStartDate(getMonday(nextWeek));
  };

  const handlePreviousWeek = () => {
    const prevWeek = new Date(weekStartDate);
    prevWeek.setDate(weekStartDate.getDate() - 7);
    setWeekStartDate(getMonday(prevWeek));
  };

  const weekDates = getWeekDates(weekStartDate);

  const colours = ["#FDF6D8", "#F1F0FF", "#EDF9FD"];

  const currentDayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;

  const notices = [
    {
      title: "Staff Meeting",
      info: "Venue - Meeting Hall",
      time: "7:30 - 8:30 AM"
    },
    {
      title: "Staff Meeting",
      info: "Venue - Meeting Hall",
      time: "7:30 - 8:30 AM"
    },
    {
      title: "Staff Meeting",
      info: "Venue - Meeting Hall",
      time: "7:30 - 8:30 AM"
    },
    {
      title: "Staff Meeting",
      info: "Venue - Meeting Hall",
      time: "7:30 - 8:30 AM"
    },
    {
      title: "Staff Meeting",
      info: "Venue - Meeting Hall",
      time: "7:30 - 8:30 AM"
    },
  ];

  const NoticeCard = ({ title, info, time, background }) => {
    return (
      <div style={{ width: "95%", height: "40px", border: "1px solid #EAEAEA", borderRadius: "23px", gap: "2%", display: "flex", alignItems: "center", justifyContent: "space-between", background: `${background}`, marginBottom: "5px" }}>

        <div style={{ width: "2%", height: "90%" }}></div>

        <div style={{ width: "55%", height: "90%", display: 'flex', flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>

          <div style={{ width: "100%", height: "60%", display: "flex", justifyContent: "center", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontSize: "12px", fontWeight: "500" }}>
            {title}
          </div>
          <div style={{ width: "100%", height: "30%", display: "flex", justifyContent: "center", color: "#838A8F", fontFamily: "Lufga", fontSize: "9px", fontWeight: "300" }}>
            {info}
          </div>

        </div>

        <div style={{ width: "40%", height: "100%", display: 'flex', flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ width: "100%", height: "65%", display: "flex", justifyContent: "center", alignItems: "center", color: "#FF7D1A", fontFamily: "Lufga", fontWeight: "400", fontSize: "8px" }}>
            {time}
          </div>
          <div style={{ width: "100%", height: "30%" }}></div>
        </div>
      </div>
    );
  }

  const DateCard = ({ date }) => {
    const isToday = new Date(today).getDate() === parseInt(date, 10) && new Date(today).getMonth() === weekStartDate.getMonth() && new Date(today).getFullYear() === weekStartDate.getFullYear();
    return (
      <div style={{ width: "12%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", color: isToday ? "#FFF" : "#BFBFBF", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px", borderRadius: "0 0 12px 12px", background: isToday ? "#FFD600" : "transparent" }}>{date}</div>
    );
  }

  return (
    <div style={{ height: "100%", width: "85%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'space-between' }}>

      <div style={{ width: "100%", height: "5%" }}></div>

      <div style={{ height: "10%", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ width: "15%", height: "90%", backgroundImage: `url(${left})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} onClick={handlePreviousWeek}></div>
        <div style={{ width: "50%", height: "90%", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px", display: "flex", justifyContent: "center", alignItems: "center" }}>{getMonthYear(weekStartDate)}</div>
        <div style={{ width: "15%", height: "90%", backgroundImage: `url(${right})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} onClick={handleNextWeek}></div>
      </div>

      <div style={{ height: "20%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

        <div style={{ width: "99%", height: "40%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <div key={index} style={{
              width: "12%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "12px 12px 0 0",
              color: index === currentDayIndex ? "#FFF" : "#BFBFBF", fontFamily: "Lufga", fontWeight: "600", fontSize: "14px", background: index ===currentDayIndex ? "#FFD600" : "transparent"
            }}>
              {day}
            </div>
          ))}

        </div>

        <div style={{ width: "100%", height: "40%", display: "flex", justifyContent: "space-around" }}>

          {weekDates.map((date, index) => (
            <DateCard key={index} date={date} />
          ))}

        </div>

      </div>

      <div style={{ height: "55%", width: "100%", overflow: "auto", display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "5px" }}>

        {notices.map((notice, index) => (
          <NoticeCard
            key={index}
            title={notice.title}
            info={notice.info}
            time={notice.time}
            background={colours[index % 3]}
          />
        ))}

      </div>

    </div>
  )
}

export default Calender
