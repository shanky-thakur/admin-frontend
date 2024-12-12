import React, { useState } from "react";
import "./HomePage.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from "recharts";

import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";
import up from "../../assets/images/up-arrow.svg";
import down from '../../assets/images/black-vector.svg';

const data = [
  { month: "Jan", value: 30 },
  { month: "Feb", value: 45 },
  { month: "Mar", value: 60 },
  { month: "Apr", value: 50 },
  { month: "May", value: null }, // 'NA'
  { month: "June", value: null }, // 'NA'
  { month: "July", value: 70 },
  { month: "Aug", value: 55 },
  { month: "Sep", value: 80 },
  { month: "Oct", value: 65 },
  { month: "Nov", value: 75 },
  { month: "Dec", value: 85 },
];

const RevenueGraph = () => {

  const [startIndex, setStartIndex] = useState(0); // Controls sliding window
  const monthsToShow = 6;

  const currentData = data.slice(startIndex, startIndex + monthsToShow);

  const handlePrevious = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + monthsToShow < data.length) setStartIndex(startIndex + 1);
  };

  const highestValue = Math.max(...currentData.map(entry => entry.value || 0));

  return (
    <div style={{ height: "95%", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }} >

      <div style={{ height: "100%", width: "10%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img onClick={handlePrevious} disabled={startIndex === 0} src={left} alt='left' style={{ width: "50%" }}></img>
      </div>

      <div style={{ width: "80%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>

        <div style={{ width: "100%", height: "15%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ width: "40%", height: "90%", color: "#374957", fontFamily: "Lufga", fontWeight: "500", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}> Revenue | Finances</div>
          <div style={{ width: "35%", height: "90%", display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
            <div style={{ width: "60%", height: "90%", borderRadius: "25px", border: "1px solid #EAEAEA", background: "#FFF", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
              <div style={{ width: "30%", height: "100%", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px", display: "flex", justifyContent: "center", alignItems: "center" }}>2025</div>
              <div style={{ width: "20%", height: "30%", backgroundImage: `url(${down})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
            </div>
            <div style={{ width: "25%", height: "90%", backgroundImage: `url(${up})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
          </div>
        </div>

        <div style={{ width: "100%", height: "80%", display: "flex", alignItems: "center", justifyContent: "left" }}>


          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "left" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={currentData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="month" />
                <Tooltip formatter={(value) => (value === null ? "NA" : `${value} Lakhs`)} contentStyle={{ borderRadius: "20px" }} />
                <Bar dataKey="value" radius={[15, 15, 0, 0]} barSize={35}>
                  {currentData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.value === highestValue ? "#FFD600" : "#FFF7CC"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>

      <div style={{ width: "10%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img onClick={handleNext} disabled={startIndex + monthsToShow >= data.length} src={right} alt='right' style={{ width: "50%" }}></img>
      </div>

    </div>
  )
}

export default RevenueGraph
