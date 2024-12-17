import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Certificate.css";

import add from "../../assets/images/add.svg";
import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";
import img5 from "../../assets/images/ellipse-1385.svg";
import certificatePic from "../../assets/images/certificate.png";
import edit from "../../assets/images/edit.svg";

const Certificates = () => {
  const navigate = useNavigate();

  const certificateData = [
    { name: "New Certificate", isNew: true, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: false, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: false, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: true, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: true, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: true, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: true, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: true, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: true, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: false, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: false, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: true, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: true, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: true, edited: "edited 3 hours ago" },
    { name: "New Certificate", isNew: true, edited: "edited 3 hours ago" },
  ];

  const CertificateCard = ({ name, avatar, isNew, edited }) => {
    return (
      <div style={{ width: "95%", height: "165px", borderRadius: "20px", border: "1.5px solid #EAEAEA", background: "#FFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

        <div style={{ width: "85%", height: "65%", border: "1px solid  #EAEAEA", borderRadius: "15px", backgroundImage: `url(${avatar})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

        <div style={{ width: "85%", height: "25%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

          <div style={{ width: '70%', height: '80%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: "space-evenly" }}>

            <div style={{ width: "80%", height: "55%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>

              <div style={{ width: "90%", height: "100%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontWeight: "500", fontSize: "10px" }}>
                {name} |
              </div>

              <div style={{ width: "10%", height: "100%", display: "flex", alignItems: "center", color: "#FFD600", fontFamily: "Lufga", fontWeight: "500", fontSize: "10px" }}>
                {isNew ? "New" : ""}
              </div>

            </div>

            <div style={{ width: "80%", height: "25%", color: '#838A8F', fontFamily: 'Lufga', fontWeight: '400', fontSize: '8px', display: 'flex', alignItems: 'center' }}>{edited}</div>

          </div>

          <div style={{ width: '20%', height: '80%', backgroundImage: `url(${edit})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

        </div>

      </div>
    )
  }

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
              <div className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div onClick={() => navigate('/employee')} className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
                  Employee
                </div>
              </div>
              <div onClick={() => navigate('/students')} className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
                  Students
                </div>
              </div>
              <div className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
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
              <div onClick={() => navigate('/certificate')} className='element' style={{ background: "#101010", width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#FFF", fontWeight: "400" }}>
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

          <div style={{ width: "100%", height: "10%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ height: "100%", width: "20%", display: "flex", alignItems: "center", justifyContent: "center", color: "#374957", fontFamily: "Lufga", fontSize: "22px", fontWeight: "600" }}>
              Certificate
            </div>
            <div onClick={() => navigate('/certificate/new')} className='addEmployee'>
              <div className='innerAdd' >
                <div>
                  <img src={add} alt='img'></img>
                </div>
                <div className='addEmployeeButton' >
                  New Certificate
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: "90%", height: "85%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "auto" }}>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 2fr)", gap: "20px", width: "90%", height: "90%", overflow: "auto" }}>

            {certificateData.map((certificate, index) => (
                <CertificateCard
                  key={index}
                  name={certificate.name}
                  avatar={certificatePic}
                  isNew={certificate.isNew}
                  edited={certificate.edited}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Certificates
