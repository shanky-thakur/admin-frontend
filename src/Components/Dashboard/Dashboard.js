import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";

import avatar from "../../assets/images/avatar.png";
import expand from "../../assets/images/vector.svg";
import right from "../../assets/images/vector-right.svg";
import add from "../../assets/images/add.svg";
import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";
import img5 from "../../assets/images/ellipse-1385.svg";

const Dashboard = () => {
  const navigate = useNavigate();

  const studentData = [
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
    { name: "arav anand", rollNumber: "010", regNumber: "89461334684" },
  ];

  const EmployeeCard = ({ name, avatar, roll, reg }) => {
    return (
      <div
        style={{
          padding: "2% 3%",
          display: "flex",
          alignItems: "center",
          gap: "5%",
          borderRadius: "15px",
          border: "0.5% solid #EAEAEA",
          background: "#FFF",
          margin: "2% 0",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "20%",
            height: "100%",
            flexShrink: "0",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={avatar}
            alt="avatar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "70%",
          }}
        >
          <h3 style={{ margin: "0", fontSize: "0.8rem", color: "#374957", fontFamily: "Lufga", fontWeight: "500" }}>{name}</h3>
          <p style={{ margin: "1% 0", fontSize: "0.6rem", color: "#838A8F", fontFamily: "Lufga", fontWeight: '400' }}>
            Roll Number: {roll}
          </p>
          <p style={{ margin: "0", fontSize: "0.5rem", color: "#BFBFBF", fontFamily: "Lufga", fontWeight: "400" }}>
            Reg Number: {reg}
          </p>
        </div>
        <div>
          <img src={right} alt='right'style={{ opacity: "0.89" }}></img>
        </div>
      </div>
    );
  };


  return (
    <div style={{ width: "80vw", height: "100vh", display: "flex" }}>

      <div style={{ height: "100%", width: "20%", background: "#FFF" }}>

        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "80%", height: "80%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "20%", height: "70%", backgroundImage: `url(${img3})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={img4} alt='img4'></img>
            </div>
            <div style={{ height: "100%", width: "75%", color: "#374957", fontFamily: "Lufga", fontWeight: "600", fontSize: "22px", display: "flex", alignItems: "center", marginLeft: "5%" }} >Sheshya</div>
          </div>
        </div>

        <div style={{ width: "100%", height: "60%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
          <div className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
            <div onClick={() => navigate('/homepage')} className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
              Dashboard
            </div>
          </div>
          <div className='element' style={{ background: "#101010", width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
            <div onClick={() => navigate('/employee')} className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#FFF", fontWeight: "400" }}>
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

        <div style={{ width: "80%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={img5} alt='img' style={{ height: "70%", width: "40%" }}></img>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
            <div style={{ color: "#374957", fontFamily: "Lufga", fontSize: "14px", fontWeight: "500" }}>RPS School</div>
            <div style={{ color: "#838A8F", fontFamily: "Lufga", fontSize: "10px", fontWeight: "300" }}>Edit Your Profile</div>
          </div>
        </div>

      </div>

      <div style={{ width: "80%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>

        <div style={{ width: "100%", height: "10%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ height: "100%", width: "20%", display: "flex", alignItems: "center", justifyContent: "center", color: "#374957", fontFamily: "Lufga", fontSize: "22px", fontWeight: "600" }}>
            Employee
          </div>
          <div className='addEmployee' style={{ width: "35%", height: "100%", borderRadius: "25px", border: "1px solid #EAEAEA", background: "#FFD600", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <div style={{ height: "100%", width: "70%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
              <div>
                <img src={add} alt='img'></img>
              </div>
              <div style={{ color: "#FFF", fontFamily: "Lufga", fontWeight: "400", fontSize: "19px" }}>
                Add Employee
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ width: "25%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <div style={{ height: "80%", width: "70%", background: "#FFF", borderRadius: "25px", border: "1px solid #EAEAEA", display: "flex", alignItems: "center", justifyContent: "space-evenly", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "15px" }}>
              Employee
              <div>
                <img className='expand' style={{ width: "80%", height: "80%" }} src={expand} alt='expand'></img>
              </div>
            </div>
          </div>
          <div style={{ width: "45%", height: "80%", borderRadius: "25px", border: "1px solid #EAEAEA", background: "#FFF", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <textarea placeholder='Search Staff' style={{ border: "none", background: "transparent", resize: "none", fontFamily: "Lufga", fontSize: "15px", fontWeight: "400", alignContent: "center", width: "100%", borderRadius: "25px", paddingLeft: "10px" }}></textarea>
            </div>
          </div>
        </div>

        <div style={{ width: "100%", height: "70%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "auto",  }}>
          <div className="employee-cards-container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 2fr)", gap: "20px" }}>
            {studentData.map((student, index) => (
              <EmployeeCard
                key={index}
                name={student.name}
                avatar={avatar}
                roll={student.rollNumber}
                reg={student.regNumber}
              />
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard
