import React from 'react';
import { useNavigate } from 'react-router-dom';

import close from "../../assets/images/cut.svg";

const DisplayNotice = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{ width: "80vw", height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '60%', height: '70%', background: '#FFF', borderRadius: '25px', border: '1.5px solid #EAEAEA', display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: 'space-evenly' }}>

        <div style={{ width: "85%", height: '15%', display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ width: '60%', height: "60%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontSize: "18px", fontWeight: '500' }}>
            Notice
          </div>
          <div onClick={() => navigate('/notice/all')} style={{ width: "5%", height: "50%", backgroundImage: `url(${close})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", cursor: "pointer" }}></div>
        </div>

        <div style={{ width: "85%", height: '10%', border: '1.5px solid #EAEAEA', borderRadius: '25px', color: '#374957', fontFamily: 'Lufga', fontSize: "15px", fontWeight: '500', display: 'flex', alignItems: 'center', paddingLeft: '18px' }}>
          Examination Information
        </div>

        <div style={{ width: "85%", height: '70%', border: '1.5px solid #EAEAEA', borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: "center", overflow: "auto", paddingLeft: "18px" }}>
          <div style={{ width: "99%", height: "90%",color: "#374957", fontFamily: "Lufga", fontSize: "15px", fontWeight: "500", lineHeight: "normal" }}>
            Info about examination 
          </div>
        </div>

      </div>
    </div>
  )
}

export default DisplayNotice
