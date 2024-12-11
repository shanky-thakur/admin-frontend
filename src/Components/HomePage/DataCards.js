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
        <div style={{ width: "100%", height: "30%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "80%", height: "80%", display: "flex", alignItems: "center", justifyContent: "space-between" }} >
            <div style={{ width: "60%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: "100%", height: "65%", color: "#FFF", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400", display: "flex", alignItems: "center" }}>Pending Fees</div>
              <div style={{ width: "100%", height: "20%", color: "#FFF", fontFamily: "Lufga", fontSize: "8px", fontWeight: "400", display: "flex", justifyContent: "space-evenly" }}>Out of <div style={{ width: "20%", height: "100%", color: "#FFD600" }} >5632</div> Students </div>
              <div style={{ width: "100%", height: "15%" }}></div>
            </div>
            <div style={{ width: "30%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Lufga", fontWeight: "600", color: "#FFF", fontSize: "14px" }}>650</div>
          </div>
        </div>
        <div style={{ width: "100%", height: "68%", background: "#FFD600", borderRadius: "25px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ width: "100%", height: "45%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "80%", height: "80%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ width: "60%", height: "100%", color: "#FFF", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Total Students</div>
              <div style={{ width: "30%", height: "100%", color: "#FFF", fontFamily: "Lufga", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>5432</div>
            </div>
          </div>
          <div style={{ width: "100%", height: "55%", background: "#FFF", borderRadius: "25px", display: "flex", alignItems: "center", justifyContent: 'center' }}>
            <div style={{ width: "80%", height: "80%", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
              <div style={{ width: "60%", height: "80%", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>Total Teachers</div>
              <div style={{ width: "30%", height: "80%", color: "#374957", fontFamily: "Lufga", fontWeight: "600", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>132</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataCards
