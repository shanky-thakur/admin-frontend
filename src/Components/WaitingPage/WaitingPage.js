import React from 'react';
import { useNavigate } from 'react-router-dom';

import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";

const WaitingPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ height: "100vh", width: "100%", background: "#F8F8F8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ height: "85%", width: "90%", background: "#000", borderRadius: "25px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                <div style={{ height: "42px", width: "180px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: "45px", height: "45px", backgroundImage: `url(${img3})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", display: "flex", alignItems: "center", justifyContent: "center" }}><img src={img4} alt='img'></img></div>
                    <div style={{ color: "#FFF", fontFamily: "Lufga", fontSize: "32px", fontWeight: "600" }}>Sheshya</div>
                </div>
                <div style={{ height: "39px" }}></div>
                <div style={{ color: "#F3F6FF", fontFamily: "Lufga", fontSize: "48px", fontWeight: "700" }}>Our Team will contact you in a while</div>
                <div style={{ color: "#F3F6FF", fontFamily: "Lufga", fontSize: "32px", fontWeight: "400" }}>Sit tight you are about to boost your</div>
                <div style={{ color: "#F3F6FF", fontFamily: "Lufga", fontSize: "32px", fontWeight: "400" }}>School Efficiency.</div>
                <div style={{ height: "54px" }}></div>
                <div onClick={() => navigate('/dashboard')} style={{ width: "508px", height: "81px", borderRadius: "25px", background: "#FFD600", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontFamily: "Lufga", fontSize: "24px", fontWeight: "400" }}>Back to Login</div>

            </div>
        </div>
    )
}

export default WaitingPage
