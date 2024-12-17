import React from 'react';
import { useNavigate } from 'react-router-dom';

import cut from "../../assets/images/cut.svg";
import upload from "../../assets/images/upload.svg";

const AddCertificate = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "80vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

      <div style={{ width: "50%", height: "60%", border: "1.5px solid #EAEAEA", background: "#FFF", borderRadius: "25px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

        <div style={{ width: "85%", height: "55%", display: "flex", alignItems: 'center', justifyContent: "space-evenly", flexDirection: "column" }}>

          <div style={{ width: "95%", height: "20%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

            <div style={{ width: "70%", height: "80%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontWeight: "500", fontSize: "18px" }}> Upload Document</div>

            <div onClick={() => navigate('/certificate')} style={{ width: "6%", height: "60%", backgroundImage: `url(${cut})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

          </div>

          <div style={{ width: "95%", height: "75%", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <div style={{ cursor: "pointer", width: "40%", height: "35%", border: "1.5px solid rgba(211, 214, 220, 0.50)", borderRadius: "20px", display: "flex", justifyContent: "space-evenly", alignItems: 'center' }}>

              <div style={{ width: "15%", height: "45%", backgroundImage: `url(${upload})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

              <div style={{ width: "65%", height: "70%", display: "flex", alignItems: "center", color: "#838A8F", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400" }}>Upload Your Files</div>

            </div>

          </div>

        </div>

        <div style={{ width: "100%", height: "40%", borderTop: "1.5px solid #EAEAEA", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>

          <div style={{ width: "80%", height: "25%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontWeight: "500", fontSize: "16px" }}>Certificate Name</div>

          <div style={{ width: "80%", height: "25%", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <textarea placeholder='Name' style={{ width: "100%", height: "99%", borderRadius: "20px", resize: "none", alignContent: "center", fontFamily: "Lufga", fontWeight: "400", color: "#374957", border: "2px solid #EAEAEA", fontSize: "15px", paddingLeft: "10px" }}></textarea>
          </div>

          <div onClick={() => navigate('/certificate')} style={{ width: "80%", height: "25%", background: "#2C87FF", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", color: '#FFFFFF', fontFamily: "Lufga", fontWeight: "400", fontSize: "12px" }}>Add Document</div>

        </div>

      </div>

    </div>
  )
}

export default AddCertificate
