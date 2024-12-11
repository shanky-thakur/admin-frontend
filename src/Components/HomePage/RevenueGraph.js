import React from 'react';

import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";
import up from "../../assets/images/up-arrow.svg";
import down from '../../assets/images/black-vector.svg';

const RevenueGraph = () => {
  return (
    <div style={{ height: "95%", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }} >

      <div style={{ height: "100%", width: "10%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={left} alt='left' style={{ width: "50%" }}></img>
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

        <div style={{ width: "100%", height: "80%", border: "1px solid black" }}>

        </div>

      </div>

      <div style={{ width: "10%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={right} alt='right' style={{ width: "50%" }}></img>
      </div>
       
    </div>
  )
}

export default RevenueGraph
