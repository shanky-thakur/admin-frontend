import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../../assets/images/Untitled design.png";
import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";

const LandingPage2 = () => {
    const navigate = useNavigate();

    return (
        <div style={{ height: "100vh", width: "80vw", background: "#F8F8F8", display: "flex", justifyContent: "space-around", alignItems: "center" }}>


            <div style={{ height: "80%", width: "45%", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>

                <div style={{ width: "100%", height: "10%" }}>
                    <div style={{ width: "50%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                        <div style={{ width: "22%", height: "80%", backgroundImage: `url(${img3})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={img4} alt='img4'></img>
                        </div>
                        <div style={{ height: "100%", width: "75%", color: "#374957", fontFamily: "Lufga", fontWeight: "600", fontSize: "25px", display: "flex", alignItems: "center" }} >Sheshya</div>
                    </div>
                </div>

                <div style={{ width: "100%", height: "10%" }}>
                    <div style={{ color: "#374957", fontFamily: "Lufga", fontSize: "21px", fontWeight: "500", marginBottom: "-3%" }}>
                        Get Started now
                    </div>
                    <p style={{ color: "#838A8F", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400" }}>Enter your details to access your account</p>
                </div>

                <div style={{ width: "100%", height: "50%", background: "transparent", display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "center" }}>

                    <div style={{ borderRadius: "20px", width: "100%", height: "20%", background: "#FFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", border: "1px solid #EAEAEA" }}>

                        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <textarea placeholder='School Name' style={{ height: "90%", width: "100%", resize: "none", background: "transparent", alignContent: "center", paddingLeft: "20px", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px", borderRadius: "20px", border: "1px solid #EAEAEA" }}></textarea>
                        </div>

                    </div>

                    <div style={{ borderRadius: "20px", width: "100%", height: "20%", display: "flex", alignItems: "center" }}>

                        <div style={{ background: "#FFF", borderRadius: "20px", width: "45%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10%" }}>
                            <textarea placeholder='School Code' style={{ height: "90%", width: "100%", resize: "none", background: "transparent", alignContent: "center", paddingLeft: "20px", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px", borderRadius: "20px", border: "1px solid #EAEAEA" }}></textarea>
                        </div>

                        <div style={{ background: "#FFF", borderRadius: "20px", width: "45%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <textarea placeholder='Pin Code' style={{ height: "90%", width: "100%", resize: "none", background: "transparent", alignContent: "center", paddingLeft: "20px", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px", borderRadius: "20px", border: "1px solid #EAEAEA" }}></textarea>
                        </div>

                    </div>

                    <div style={{ borderRadius: "20px", width: "100%", height: "20%", background: "#FFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", border: "1px solid #EAEAEA" }}>

                        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <textarea placeholder='School Email' style={{ height: "90%", width: "100%", resize: "none", background: "transparent", alignContent: "center", paddingLeft: "20px", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px", borderRadius: "20px", border: "1px solid #EAEAEA" }}></textarea>
                        </div>

                    </div>

                    <div style={{ borderRadius: "20px", width: "100%", height: "20%", display: "flex", alignItems: "center" }}>

                        <div style={{ background: "#FFF", borderRadius: "20px", width: "45%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "10%" }}>
                            <textarea placeholder='State' style={{ height: "90%", width: "100%", resize: "none", background: "transparent", alignContent: "center", paddingLeft: "20px", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px", borderRadius: "20px", border: "1px solid #EAEAEA" }}></textarea>
                        </div>

                        <div style={{ background: "#FFF", borderRadius: "20px", width: "45%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <textarea placeholder='City' style={{ height: "90%", width: "100%", resize: "none", background: "transparent", alignContent: "center", paddingLeft: "20px", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px", borderRadius: "20px", border: "1px solid #EAEAEA" }}></textarea>
                        </div>

                    </div>

                </div>

                <div onClick={() => navigate('/verification')} style={{ width: "100%", height: "10%", background: "#161616", borderRadius: "25px", fontFamily: "Lufga", fontSize: "20px", fontWeight: "500", color: "#FFF8F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    Register
                </div>

            </div>

            <div style={{ height: "80%", width: "45%", background: "#000", borderRadius: "25px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={img} alt='img' style={{ width: "80%", height: "70%" }}></img>
            </div>

        </div>
    )
}

export default LandingPage2

