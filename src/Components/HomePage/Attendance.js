import React from 'react';
import down from "../../assets/images/down-vector.svg";
import pie from "../../assets/images/pie-sections.svg";

const Attendance = () => {
  return (
    <div style={{ height: "90%", width: "90%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ height: "20%", width: "100%", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>

        <div style={{ height: "80%", width: "35%", color: "#FFF", fontFamily: "Lufga", fontSize: "15px", fontWeight: "500", display: "flex", justifyContent: "center", alignItems: "center" }}>Attendance</div>

        <div style={{ height: "100%", width: "45%", border: "1px solid #EAEAEA", borderRadius: "25px", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
          <div style={{ width: "50%", height: "90%", color: "#FFF", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            Employee
          </div>
          <div style={{ width: "10%", height: "70%", display: "flex", justifyContent: "center", alignItems: 'center' }}>
            <img src={down} alt='down' style={{ width: "80%" }}></img>
          </div>
        </div>

      </div>

      <div style={{ height: "75%", width: "100%", display: "flex" }}>

        <div style={{ width: "40%", height: "100%", backgroundImage: `url(${pie})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "40%", height: "40%" }}>
            <div style={{ width: "100%", height: "10%" }}></div>
            <div style={{ width: "100%", height: "50%", color: "#FFF", fontFamily: "Lufga", fontSize: "18px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>58</div>
            <div style={{ width: "100%", height: "20%", color: "#FFF", fontFamily: "Lufga", fontSize: "8px", fontWeight: "400", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>Employees</div>
          </div>
        </div>

        <div style={{ width: "60%", height: "100%", display: 'flex', alignItems: "center", justifyContent: "end" }}>
          <div style={{ width: "90%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ width: "80%", height: "33%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ width: "70%", height: "90%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: "20%", height: "50%", borderRadius: "5px", background: "#FFF" }}></div>
                <div style={{ width: "65%", height: "70%", color: "#FFF", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400", display: "flex", justifyContent: 'center', alignItems: "center" }}>
                  Present
                </div>
              </div>
              <div style={{ width: "30%", height: "90%", color: "#FFF", fontFamily: "Lufga", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                52
              </div>
            </div>
            <div style={{ width: "80%", height: "0.5%", border: "0.25px solid #EAEAEA" }}></div>
            <div style={{ width: "80%", height: "33%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ width: "70%", height: "90%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: "20%", height: "50%", borderRadius: "5px", background: "#FF7D1A" }}></div>
                <div style={{ width: "65%", height: "70%", color: "#FFF", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400", display: "flex", justifyContent: 'center', alignItems: "center" }}>
                  Absent
                </div>
              </div>
              <div style={{ width: "30%", height: "90%", color: "#FFF", fontFamily: "Lufga", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                01
              </div>
            </div>
            <div style={{ width: "80%", height: "0.5%", border: "0.25px solid #EAEAEA" }}></div>
            <div style={{ width: "80%", height: "33%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ width: "70%", height: "90%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: "20%", height: "50%", borderRadius: "5px", background: "#FFD600" }}></div>
                <div style={{ width: "65%", height: "100%", color: "#FFF", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400", display: "flex", justifyContent: 'center', alignItems: "center" }}>
                  On Leave
                </div>
              </div>
              <div style={{ width: "30%", height: "90%", color: "#FFF", fontFamily: "Lufga", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                05
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Attendance
