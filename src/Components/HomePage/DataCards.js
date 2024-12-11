import React from 'react';
import up from "../../assets/images/up-arrow.svg";

const DataCards = () => {
  return (
    <div style={{ width: "100%", height: "100%", background: "transparent", borderRadius: "25px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ width: "100%", height: "24%", display:"flex", alignItems: "center", justifyContent: "space-evenly" }}>
        <div style={{ width: "80%", height: "60%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ color: "#374957", fontFamily: "Lufga", fontSize: "18px", fontWeight: "500" }}>Data</div>
          <div style={{ height: "100%", width: "20%", backgroundImage: `url(${up})`, backgroundSize: "contain", backgroundPosition: "center",backgroundRepeat: "no-repeat" }}></div>
        </div>
      </div>
      <div style={{ width: "100%", height: "76%", background: "#101011", borderRadius: "25px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ width: "100%", height: "32%" }}></div>
        <div style={{ width: "100%", height: "68%", background: "#FFD600", borderRadius: "25px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ width: "100%", height: "45%" }}></div>
          <div style={{ width: "100%", height: "55%", background: "#FFF", borderRadius: "25px" }}></div>
        </div>
      </div>
    </div>
  )
}

export default DataCards
