import React from 'react';
import { useNavigate } from 'react-router-dom';

import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";
import img5 from "../../assets/images/ellipse-1385.svg";

import CalendarComponent from "./CalendarComponent";

const Calender = () => {
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
                            <div onClick={() => navigate('/calender')} className='element' style={{ background: "#101010", width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#FFF", fontWeight: "400" }}>
                                    Calender
                                </div>
                            </div>
                            <div className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
                                    Certificate
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

                    <div style={{ width: "90%", height: '8%', color: "#374957", fontFamily: "Lufga", fontWeight: "600", fontSize: "22px", display: "flex", alignItems: "center" }}>
                        Calendar
                    </div>

                    <div style={{ width: "95%", height: '85%', display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                        <div style={{ width: "100%", height: "98%", borderRadius: "25px", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                            <div style={{ width: "48%", height: "95%", display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column" }}>

                                <div style={{ width: "95%", height: "75%", display: "flex", justifyContent: "center", alignItems: "center", background: "#FFF", borderRadius: "20px" }}>

                                    <CalendarComponent/>

                                </div>

                                <div style={{ width: "95%", height: "15%", border: "1px solid #EAEAEA", borderRadius: "35px", background: "#FFF", display: "flex", alignItems: "center", justifyContent: "center" }}>

                                    <div style={{ width: "90%", height: "90%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                                        <div style={{ width: "40%", height: "85%", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            25 September 2025
                                        </div>

                                        <div style={{ width: "58%", height: "85%", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>

                                            <div style={{ width: "90%", height: "50%", display: "flex", alignItems: "end", justifyContent: "center", color: "#374957", fontFamily: "Lufga", fontWeight: "500", fontSize: "12px" }}>
                                                Republic day Celebration
                                            </div>

                                            <div style={{ width: "90%", height: "40%",  display: "flex", alignItems: "start", justifyContent: "center", color: "#838A8F", fontFamily: "Lufga", fontWeight: "300", fontSize: "10px" }}>
                                                Venue - Lodhi Garden
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div style={{ width: "48%", height: "95%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

                                <div style={{ width: "95%", height: "80%", borderRadius: "20px", border: "2px solid #EAEAEA", background: "#FFF", display: "flex", justifyContent: "space-evenly", flexDirection: "column", alignItems: "center" }}>

                                    <div style={{ width: "90%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontSize: "15px", fontWeight: "400" }}>
                                        25 January 2025
                                    </div>

                                    <div style={{ width: "90%", height: "12%", border: "1px solid #EAEAEA", borderRadius: "25px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <textarea placeholder='add heading' style={{ width: "100%", height: "100%", border: "none", background: "transparent", resize: "none", borderRadius: "25px", color: "#374957", fontFamily: "Lufga", fontSize: "10px", fontWeight: "500", alignContent: "center", paddingLeft: "10px" }}></textarea>
                                    </div>

                                    <div style={{ width: "90%", height: "68%", border: "1px solid #EAEAEA", borderRadius: "25px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <textarea placeholder='add description' style={{ width: "100%", height: "100%", border: "none", background: "transparent", resize: "none", borderRadius: "25px", color: "#374957", fontFamily: "Lufga", fontSize: "10px", fontWeight: "500", paddingTop: "25px", paddingLeft: "10px" }}></textarea>
                                    </div>

                                </div>

                                <div style={{ width: "95%", height: "10%", borderRadius: "20px", background: "#101011", display: "flex", justifyContent: "center", alignItems: "center", color: "#FFF", fontFamily: "Lufga", fontWeight: "400", fontSize: "16px", cursor: "pointer" }}>
                                    Add Event
                                </div>

                            </div>

                        </div>

                    </div>

                    <div style={{ width: "90%", height: '2%' }}></div>

                </div>

            </div>

        </div>
    )
}

export default Calender
