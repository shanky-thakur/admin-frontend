import React from 'react';
import { useNavigate } from 'react-router-dom';

import cut from "../../assets/images/cut.svg";
import yes from "../../assets/images/yes.svg";
import no from "../../assets/images/no.svg";

const RemoveStudent = () => {
    const navigate = useNavigate();

    return (
        <div style={{ width: "80vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <div style={{ width: "50%", height: "55%", background: "#FFF", borderRadius: "25px", border: "2px solid #EAEAEA", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

                <div style={{ width: "85%", height: "15%", display: "flex", alignItems: "center", justifyContent: 'space-between' }}>

                    <div style={{ width: "40%", height: "80%", color: "#374957", fontFamily: "Lufga", fontWeight: "400", fontSize: "16px", display: "flex", alignItems: "center" }}>

                        Remove Student

                    </div>

                    <div onClick={() => navigate('/student/profile')} style={{ width: "5%", height: "70%", backgroundImage: `url(${cut})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

                </div>

                <div style={{ width: "85%", height: "75%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>

                    <div style={{ width: "80%", height: "65%", display: "flex", alignItems: "center", justifyContent: "center" }}>

                        <div style={{ width: "70%", height: "25%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                            <div style={{ width: "35%", height: "90%", border: "1px solid #EAEAEA", borderRadius: "20px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                <div style={{ width: "5%", height: "90%" }}></div>

                                <div onClick={() => navigate('/student/profile')} style={{ width: "55%", height: "90%", color: "#374957", fontFamily: "Lufga", fontWeight: "300", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    Yes
                                </div>

                                <div style={{ width: "20%", height: "60%", backgroundImage: `url(${yes})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

                                <div style={{ width: "10%", height: "90%" }}></div>
                            </div>

                            <div style={{ width: "35%", height: "90%", border: "1px solid #EAEAEA", borderRadius: "20px", display: "flex", justifyContent: "space-evenly", alignItems: "center", background: "#000" }}>
                                <div style={{ width: "5%", height: "90%" }}></div>

                                <div onClick={() => navigate('/student/profile')} style={{ width: "55%", height: "90%", color: "#FFF", fontFamily: "Lufga", fontWeight: "300", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    No
                                </div>

                                <div style={{ width: "20%", height: "60%", backgroundImage: `url(${no})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

                                <div style={{ width: "10%", height: "90%" }}></div>
                            </div>

                        </div>

                    </div>

                    <div style={{ width: "80%", height: "35%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                        <div style={{ width: "55%", height: "45%", display: "flex", alignItems: "end", justifyContent: "center", color: "#374957", fontFamily: "Lufga", fontWeight: "500", fontSize: "15px" }}>
                            Are you sure,
                        </div>

                        <div style={{ width: "85%", height: "45%", display: "flex", alignItems: "start", justifyContent: "center", color: "#374957", fontFamily: "Lufga", fontWeight: "500", fontSize: "15px" }}>
                            You want to <div style={{ marginLeft: "1.5%", marginRight: "1.5%", color: "#F00", fontFamily: "Lufga", fontWeight: "500", fontSize: "15px" }}>REMOVE</div> this Student?
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default RemoveStudent;
