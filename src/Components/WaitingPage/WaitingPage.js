import React from 'react';
import "./WaitingPage.css";
import { useNavigate } from 'react-router-dom';

import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";

const WaitingPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ height: "100vh", width: "80vw", background: "#F8F8F8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ height: "85%", width: "90%", background: "#000", borderRadius: "25px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                <div style={{ height: "10%", width: "178px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: "40px", height: "40px", backgroundImage: `url(${img3})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", display: "flex", alignItems: "center", justifyContent: "center" }}><img src={img4} alt='img'></img></div>
                    <div style={{ color: "#FFF", fontFamily: "Lufga", fontSize: "32px", fontWeight: "600" }}>Sheshya</div>
                </div>
                <div style={{ height: "25px" }}></div>
                <div style={{ color: "#F3F6FF", fontFamily: "Lufga", fontSize: "35px", fontWeight: "700" }}>Our Team will contact you in a while</div>
                <div style={{ color: "#F3F6FF", fontFamily: "Lufga", fontSize: "20px", fontWeight: "400" }}>Sit tight you are about to boost your</div>
                <div style={{ color: "#F3F6FF", fontFamily: "Lufga", fontSize: "20px", fontWeight: "400" }}>School Efficiency.</div>
                <div style={{ height: "120px" }}></div>
                <div
                    className="waitingButton"
                    onClick={() => navigate('/homepage')}
                    style={{
                        cursor: "pointer",
                        width: "450px",
                        height: "65px",
                        borderRadius: "25px",
                        background: "#FFD600",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000",
                        fontFamily: "Lufga",
                        fontSize: "24px",
                        fontWeight: "400",
                        transition: "all 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#FFC300";
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#FFD600";
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                    }}
                >
                    Back to Login
                </div>

            </div>
        </div>
    )
}

export default WaitingPage
