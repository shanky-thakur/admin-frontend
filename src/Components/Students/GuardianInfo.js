import React from 'react';
import { useNavigate } from 'react-router-dom';

import imagePic from "../../assets/images/profileImage.svg";
import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";
import img5 from "../../assets/images/ellipse-1385.svg";
import edit from "../../assets/images/edit.svg";
import down from "../../assets/images/vector-down-black.svg";

const GuardianInfo = () => {
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
                            <div onClick={() => navigate('/students')} className='element' style={{ background: "#101010", width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#FFF", fontWeight: "400" }}>
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
                            <div onClick={() => navigate('/calender')} className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
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
                        Profile
                    </div>

                    <div style={{ width: "90%", height: '78%', display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                        <div style={{ width: "20%", height: "100%", border: "2px solid #EAEAEA", borderRadius: "25px", background: "#FFF", flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "space-around" }}>

                            <div style={{ width: "90%", height: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>

                                <div style={{ width: "90%", height: "20%", borderRadius: "18px", background: "#101010", color: '#FFF', fontFamily: "Lufga", fontWeight: "400", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    Student Detail
                                </div>

                                <div style={{ width: "90%", height: "20%", color: "#374957", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Performance</div>
                                <div onClick={() => navigate('/student/attendance')} style={{ width: "90%", height: "20%", color: "#374957", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Attendance</div>
                                <div onClick={() => navigate('/student/feePayment')} style={{ width: "90%", height: "20%", color: "#374957", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Fees & Payment</div>
                                <div onClick={() => navigate('/student/extraCurricular/clubs')} style={{ width: "90%", height: "20%", color: "#374957", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Extra Curricular</div>

                            </div>

                            <div style={{ width: "90%", height: "30%", display: "flex", alignItems: "center", justifyContent: "center" }}></div>

                            <div onClick={() => navigate('/student/remove')} style={{ width: "80%", height: "10%", display: "flex", alignItems: "center", justifyContent: "center", color: "#F00", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400" }}>
                                Remove Student
                            </div>

                        </div>

                        <div style={{ width: "78%", height: "100%", border: "2px solid #EAEAEA", borderRadius: "25px", background: "#FFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>

                            <div style={{ width: "90%", height: "2%" }}></div>

                            <div style={{ width: "90%", height: "20%", display: "flex", alignItems: "center", justifyContent: "center" }}>

                                <div style={{ width: "15%", height: "90%", backgroundImage: `url(${imagePic})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

                                <div style={{ width: "85%", height: "90%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div style={{ width: "5%", height: "70%" }}></div>

                                    <div style={{ width: "95%", height: "70%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                                        <div style={{ width: "80%", height: "58%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontSize: "19px", fontWeight: "500" }}>
                                            Arav Anand
                                        </div>

                                        <div style={{ width: "80%", height: "42%", display: "flex", alignItems: "center", color: "#838A8F", fontSize: "14px", fontWeight: "400" }}>
                                            AravAnand@gmail.com
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div style={{ width: "85%", height: "68%", border: "1px solid #EAEAEA", borderRadius: "25px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>

                                <div style={{ width: "95%", height: "15%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                                    <div style={{ width: "40%", height: "80%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontSize: "15px", fontWeight: "400" }}>
                                        Personal Information
                                    </div>

                                    <div style={{ width: "10%", height: "80%" }}></div>

                                    <div style={{ width: "50%", height: "80%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                                        <div style={{ width: "35%", height: "90%", border: "1px solid #EAEAEA", borderRadius: "18px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                            <div style={{ width: "10%" }}></div>

                                            <div style={{ width: "40%", height: "70%", display: "flex", justifyContent: "center", alignItems: "center", color: "#000", fontSize: "14px", fontFamily: "Lufga", fontWeight: "400" }}>
                                                Edit
                                            </div>

                                            <div style={{ width: "15%", height: "30%", backgroundImage: `url(${edit})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

                                            <div style={{ width: "10%" }}></div>
                                        </div>

                                        <div style={{ width: "45%", height: "90%", border: "1px solid #EAEAEA", borderRadius: "18px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                            <div style={{ width: "10%" }}></div>

                                            <div onClick={() => navigate('/student/profile')} style={{ width: "50%", height: "70%", display: "flex", justifyContent: "center", alignItems: "center", color: "#000", fontSize: "14px", fontFamily: "Lufga", fontWeight: "400" }}>
                                                Guardian
                                            </div>
                                            <div style={{ width: "10%" }}></div>

                                            <div style={{ width: "10%", height: "30%", backgroundImage: `url(${down})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

                                            <div style={{ width: "10%" }}></div>
                                        </div>

                                    </div>

                                </div>

                                <div style={{ width: "95%", height: "70%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div style={{ width: "5%", height: "95%" }}></div>

                                    <div style={{ width: "45%", height: "95%" }}>

                                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", color: "#838A8F", fontFamily: "Lufga", fontWeight: "400", fontSize: "13px" }}>
                                            Guardian Name
                                        </div>
                                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "15px" }}>
                                            Daddy Wayne
                                        </div>

                                        <div style={{ width: "100%", height: "15%" }}></div>

                                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", color: "#838A8F", fontFamily: "Lufga", fontWeight: "400", fontSize: "13px" }}>
                                            Email
                                        </div>
                                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "15px" }}>
                                            pitajiwayne@gmail.com
                                        </div>

                                        <div style={{ width: "100%", height: "15%" }}></div>

                                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", color: "#838A8F", fontFamily: "Lufga", fontWeight: "400", fontSize: "13px" }}>
                                            Occupation
                                        </div>
                                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "15px" }}>
                                            Vasuli
                                        </div>

                                    </div>

                                    <div style={{ width: "50%", height: "95%" }}>

                                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", color: "#838A8F", fontFamily: "Lufga", fontWeight: "400", fontSize: "13px" }}>
                                            Phone Number
                                        </div>
                                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "15px" }}>
                                            +91 81034 14654
                                        </div>

                                        <div style={{ width: "100%", height: "15%" }}></div>

                                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", color: "#838A8F", fontFamily: "Lufga", fontWeight: "400", fontSize: "13px" }}>
                                            Emergency Contact
                                        </div>
                                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "15px" }}>
                                            +91 81034 14654
                                        </div>

                                        <div style={{ width: "100%", height: "15%" }}></div>

                                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", color: "#838A8F", fontFamily: "Lufga", fontWeight: "400", fontSize: "13px" }}>
                                            Address
                                        </div>
                                        <div style={{ width: "100%", height: "10%", display: "flex", alignItems: "center", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "13px" }}>
                                            A-302, Kamal Vihar, Noida, 43212
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div style={{ width: "90%", height: "3%" }}></div>

                        </div>

                    </div>

                    <div style={{ width: "90%", height: '3%' }}></div>

                </div>

            </div>

        </div>
    )
}

export default GuardianInfo
