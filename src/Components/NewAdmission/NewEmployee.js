import React from 'react';
import { useNavigate } from 'react-router-dom';

import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";
import img5 from "../../assets/images/ellipse-1385.svg";

const NewEmployee = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "80vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

      <div style={{ height: "90%", width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>

        <div style={{ width: "20%", height: "100%", border: "1px solid #EAEAEA", background: "#FFF", borderRadius: "25px" }}>

          <div style={{ height: "100%", width: "100%" }}>

            <div style={{ width: "100%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: "80%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "100%", height: "80%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "20%", height: "70%", backgroundImage: `url(${img3})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={img4} alt='img4' style={{ width: "30%", height: "50%" }}></img>
                  </div>
                  <div style={{ height: "100%", width: "50%", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "18px", display: "flex", alignItems: "center", marginLeft: "5%" }} >Sheshya</div>
                </div>
              </div>
            </div>

            <div style={{ width: "100%", height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
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
              <div onClick={() => navigate('/students')} className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
                  Students
                </div>
              </div>
              <div onClick={() => navigate('/finace')} className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
                  Finances
                </div>
              </div>
              <div onClick={() => navigate('/attendance/employee')} className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
                  Attendance
                </div>
              </div>
              <div onClick={() => navigate('/calender')} className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
                  Calender
                </div>
              </div>
              <div onClick={() => navigate('/certificate')} className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
                  Certificate
                </div>
              </div>
              <div onClick={() => navigate('/notice')} className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
                  Notice
                </div>
              </div>
            </div>

            <div style={{ width: "100%", height: "10%" }}></div>

            <div style={{ width: "80%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={img5} alt='img' style={{ height: "70%", width: "40%" }}></img>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
                <div style={{ color: "#374957", fontFamily: "Lufga", fontSize: "14px", fontWeight: "500" }}>RPS School</div>
                <div style={{ color: "#838A8F", fontFamily: "Lufga", fontSize: "10px", fontWeight: "300" }}>Edit Your Profile</div>
              </div>
            </div>

          </div>

        </div>

        <div style={{ width: "80%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>

          <div style={{ width: "95%", height: "10%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontSize: "20px", fontWeight: "600" }}>
            New Admission
          </div>

          <div style={{ width: "85%", height: "12%", display: "flex", alignItems: "center" }}>

            <div style={{ fontFamily: "Lufga", width: "20%", height: "65%", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFD600", color: "#000", border: "1px solid #EAEAEA", borderRadius: "25px", fontSize: "15px", fontWeight: "400" }}>Employee</div>

            <div style={{ width: "2%", height: "75%" }}></div>

            <div onClick={() => navigate('/add/student')} style={{ width: "20%", height: "65%", border: "1px solid #EAEAEA", color: "#374957", fontFamily: "Lufga", fontSize: "15px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "25px" }}>Students</div>

          </div>

          <div style={{ width: "75%", height: "73%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

            <div style={{ width: "100%", height: "83%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

              <div style={{ width: "100%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <textarea placeholder='Applicant Name' style={{ width: "100%", height: "100%", resize: "none", border: "1px solid #EAEAEA", borderRadius: "25px", alignContent: "center", color: "#374957", fontFamily: "Lufga", fontSize: "14px", paddingLeft: "15px" }}></textarea>
              </div>

              <div style={{ width: "100%", height: "9%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: "48%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <textarea placeholder='Father Name' style={{ width: "100%", height: "100%", resize: "none", border: "1px solid #EAEAEA", borderRadius: "25px", alignContent: "center", color: "#374957", fontFamily: "Lufga", fontSize: "14px", paddingLeft: "15px" }}></textarea>
                </div>
                <div style={{ width: "49%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <textarea placeholder='Mother Name' style={{ width: "100%", height: "100%", resize: "none", border: "1px solid #EAEAEA", borderRadius: "25px", alignContent: "center", color: "#374957", fontFamily: "Lufga", fontSize: "14px", paddingLeft: "15px" }}></textarea>
                </div>
              </div>

              <div style={{ width: "100%", height: "9%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: "48%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <textarea placeholder='Contact' style={{ width: "100%", height: "100%", resize: "none", border: "1px solid #EAEAEA", borderRadius: "25px", alignContent: "center", color: "#374957", fontFamily: "Lufga", fontSize: "14px", paddingLeft: "15px" }}></textarea>
                </div>
                <div style={{ width: "49%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <textarea placeholder='Email Id' style={{ width: "100%", height: "100%", resize: "none", border: "1px solid #EAEAEA", borderRadius: "25px", alignContent: "center", color: "#374957", fontFamily: "Lufga", fontSize: "14px", paddingLeft: "15px" }}></textarea>
                </div>
              </div>

              <div style={{ width: "100%", height: "9%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: "48%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <textarea placeholder='Academic Session' style={{ width: "100%", height: "100%", resize: "none", border: "1px solid #EAEAEA", borderRadius: "25px", alignContent: "center", color: "#374957", fontFamily: "Lufga", fontSize: "14px", paddingLeft: "15px" }}></textarea>
                </div>
                <div style={{ width: "49%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <textarea placeholder='Standard' style={{ width: "100%", height: "100%", resize: "none", border: "1px solid #EAEAEA", borderRadius: "25px", alignContent: "center", color: "#374957", fontFamily: "Lufga", fontSize: "14px", paddingLeft: "15px" }}></textarea>
                </div>
              </div>

              <div style={{ width: "100%", height: "9%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: "48%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <textarea placeholder='Date of Birth' style={{ width: "100%", height: "100%", resize: "none", border: "1px solid #EAEAEA", borderRadius: "25px", alignContent: "center", color: "#374957", fontFamily: "Lufga", fontSize: "14px", paddingLeft: "15px" }}></textarea>
                </div>
                <div style={{ width: "49%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <textarea placeholder='City' style={{ width: "100%", height: "100%", resize: "none", border: "1px solid #EAEAEA", borderRadius: "25px", alignContent: "center", color: "#374957", fontFamily: "Lufga", fontSize: "14px", paddingLeft: "15px" }}></textarea>
                </div>
              </div>

              <div style={{ width: "100%", height: "23%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <textarea placeholder='Address' style={{ width: "100%", height: "100%", resize: "none", border: "1px solid #EAEAEA", borderRadius: "25px", color: "#374957", fontFamily: "Lufga", fontSize: "14px", paddingLeft: "15px", paddingTop: "8px", overflow: "auto" }}></textarea>
              </div>

            </div>

            <div style={{ width: "100%", height: "1%" }}></div>

            <div onClick={() => navigate('/employee')} style={{ width: "100%", height: "12%", background: "#000", borderRadius: "25px", display: "flex", alignItems: "center", justifyContent: "center", color: "#F3F6FF", fontFamily: "Lufga", fontWeight: "500", fontSize: "16px", cursor: "pointer" }}>Register</div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default NewEmployee
