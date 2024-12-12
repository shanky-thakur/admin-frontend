import React from 'react';
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";

const Calender = () => {
  const colours = ["#FDF6D8", "#F1F0FF", "#EDF9FD"];

  const notices = [
    {
      title: "Republic Day Celebration",
      
    },
    {

    },
    {

    },
    {

    },
  ];

  return (
    <div style={{ height: "100%", width: "85%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'space-between' }}>

      <div style={{ width: "100%", height: "5%" }}></div>

      <div style={{ height: "10%", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid black" }}>
        <div style={{ width: "15%", height: "90%", backgroundImage: `url(${left})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
        <div style={{ width: "50%", height: "90%", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}>January 2025</div>
        <div style={{ width: "15%", height: "90%", backgroundImage: `url(${right})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
      </div>

      <div style={{ height: "20%", width: "100%", border: "1px solid black" }}>

      </div>

      <div style={{ height: "60%", width: "100%", border: "1px solid black" }}>

      </div>

    </div>
  )
}

export default Calender
