import React from 'react';
import "./Dashboard.css";
import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";
import img5 from "../../assets/images/ellipse-1385.svg";

const Dashboard = () => {
  return (
    <div style={{ width: "80vw", height: "100vh", display: "flex" }}>

      <div style={{ height: "100%", width: "20%", background: "#FFF" }}>

        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "80%", height: "80%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <div style={{ width: "20%", height: "70%", backgroundImage: `url(${img3})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={img4} alt='img4'></img>
            </div>
            <div style={{ height: "100%", width: "75%", color: "#374957", fontFamily: "Lufga", fontWeight: "600", fontSize: "20px", display: "flex", alignItems: "center", marginLeft: "5%" }} >Sheshya</div>
          </div>
        </div>

        <div style={{ width: "100%", height: "60%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
          <div className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
            <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
              Dashboard
            </div>
          </div>
          <div className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
            <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
              Employee
            </div>
          </div>
          <div className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
            <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
              Students
            </div>
          </div>
          <div className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
            <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
              Finances
            </div>
          </div>
          <div className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
            <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
              Attendance
            </div>
          </div>
          <div className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
            <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
              Calender
            </div>
          </div>
          <div className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
            <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
              Certificate
            </div>
          </div>
        </div>

        <div style={{ width: "100%", height: "20%" }}></div>

        <div style={{ width: "80%", height: "10%", display: "flex", justifyContent: "center", alignItems: "space-around" }}>
          <img src={img5} alt='img' style={{ height: "70%", width: "40%" }}></img>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
            <div style={{ color: "#374957", fontFamily: "Lufga", fontSize: "14px", fontWeight: "500" }}>RPS School</div>
            <div style={{ color: "#838A8F", fontFamily: "Lufga", fontSize: "10px", fontWeight: "300" }}>Edit Your Profile</div>
          </div>
        </div>

      </div>

      <div style={{ width: "80%", height: "100%", background: "blue" }}></div>

    </div>
  )
}

export default Dashboard
