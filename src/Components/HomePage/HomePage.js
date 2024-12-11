import React from 'react';
import "./HomePage.css";
import { useNavigate } from 'react-router-dom';

import Attendance from "./Attendance";
import DataCard from "./DataCards";
import Calender from "./Calender";
import RevenueGraph from "./RevenueGraph";

import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";
import img5 from "../../assets/images/ellipse-1385.svg";
import dashboard from "../../assets/images/dashboardPic.svg";
import bellCover from "../../assets/images/bellCover.svg";
import bell from '../../assets/images/notification.jpg';

const HomePage = () => {
    const navigate = useNavigate();

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
                    <div className='element' style={{ background: "#101010", width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                        <div style={{ height: "70%", width: "20%", display: "flex", alignItems: "center" }}>
                            <img src={dashboard} alt='dashboard' style={{ height: "90%" }}></img>
                        </div>
                        <div onClick={() => navigate('/homepage')} className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#FFF", fontWeight: "400" }}>
                            Dashboard
                        </div>
                    </div>
                    <div className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                        <div onClick={() => navigate('/employee')} className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }} >
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
            <div style={{ width: "80%", height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                <div style={{ width: "100%", height: "10%" }}>
                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ width: "20%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", color: "#374957", fontSize: "25px", fontFamily: "Lufga", fontWeight: "600" }}>
                            Dashboard
                        </div>
                        <div style={{ width: "30%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ width: "5%" }}></div>
                            <div style={{ width: "15%", height: "80%", backgroundImage: `url(${bellCover})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={bell} alt='bell'></img>
                            </div>
                            <div className='newAdmission' style={{ width: "70%", height: "80%", background: "#FFD600", borderRadius: "25px", color: "#FFF", fontSize: "16px", fontFamily: "Lufga", fontWeight: "400", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                New Admission
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "100%", height: "85%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "68%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ width: "95%", height: "40%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div style={{ width: "35%", height: "100%", background: "#FFF", borderRadius: "29px", border: "1px solid #EAEAEA", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <DataCard />
                            </div>
                            <div style={{ width: "62%", height: "100%", background: "#FFF", borderRadius: "29px", border: "1px solid #EAEAEA", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Attendance />
                            </div>
                        </div>
                        <div style={{ width: "95%", height: "54%", background: "#FFF", borderRadius: "29px", border: "1px solid #EAEAEA", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <RevenueGraph/>
                        </div>
                        <div style={{ width: "95%", height: "1%" }}></div>
                    </div>
                    <div style={{width: "35%", height: "100%" }}>
                        <div style={{ width: "100%", height: "65%", borderRadius: "29px", border: "1px solid #EAEAEA", background: "#FFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Calender/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
