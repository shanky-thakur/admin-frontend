import React from 'react';
import { useNavigate } from 'react-router-dom';

import avatar from "../../assets/images/avatar.png";
import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";
import img5 from "../../assets/images/ellipse-1385.svg";
import down from "../../assets/images/vector-down-black.svg";

const EmployeeAttendance = () => {
  const navigate = useNavigate();

  const studentData = [
    { name: "arav anand", section: "10th", class: "classTeacher" },
    { name: "arav anand", section: "10th", class: "classTeacher" },
    { name: "arav anand", section: "10th", class: "classTeacher" },
    { name: "arav anand", section: "10th", class: "classTeacher" }, 
    { name: "arav anand", section: "10th", class: "classTeacher" },
    { name: "arav anand", section: "10th", class: "classTeacher" },
    { name: "arav anand", section: "10th", class: "classTeacher" },
  ];

  const EmployeeCard = ({ name, avatar, section, className }) => {
    return (
      <div style={{ width: "90%", height: "100px", border: "1px solid #EAEAEA", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
        <div style={{ width: "30%", height: "40%", backgroundImage: `url(${avatar})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
        <div style={{ width: "90%", height: "30%", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
          <div style={{ width: "90%", height: "60%",display: "flex", alignItems: "center", justifyContent: "center", color: "#010101", fontWeight: "500", fontFamily: "Lufga", fontSize: "10px" }}>
            {name}
          </div>
          <div style={{ width: "90%", height: "35%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <div style={{ width: "65%", height: "100%", display: "flex", alignItems: "center", justifyContent: "end", color: " #838A8F", fontWeight: "400", fontFamily: "Lufga", fontSize: "8px" }}>
              {className}
            </div>
            <div style={{ width: "30%", height: "100%", display: "flex", alignItems: "center", justifyContent: "start", color: " #838A8F", fontWeight: "400", fontFamily: "Lufga", fontSize: "8px" }}>
              {section}
            </div>
          </div>
        </div>
      </div>
    );
  };

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
              <div onClick={() => navigate('/finace')} className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
                  Finances
                </div>
              </div>
              <div onClick={() => navigate('/attendance/employee')} className='element' style={{ background: "#101010", width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#FFF", fontWeight: "400" }}>
                  Attendance
                </div>
              </div>
              <div onClick={() => navigate('/calender')} className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
                  Calender
                </div>
              </div>
              <div onClick={() => navigate('/certificate')} className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
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

          <div style={{ width: "90%", height: '8%', color: "#374957", fontFamily: "Lufga", fontWeight: "600", fontSize: "22px", display: "flex", alignItems: "center" }}>
            Attendance
          </div>

          <div style={{ width: "90%", height: '78%', display: "flex", alignItems: "center", justifyContent: "space-between" }}>

            <div style={{ width: "20%", height: "100%", border: "2px solid #EAEAEA", borderRadius: "25px", background: "#FFF", flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "space-around" }}>

              <div style={{ width: "90%", height: "30%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

                <div onClick={() => navigate('/attendance/employee')} style={{ width: "90%", height: "45%", color: "#374957", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Attendance</div>

                <div style={{ width: "90%", height: "35%", borderRadius: "18px", background: "#101010", color: '#FFF', fontFamily: "Lufga", fontWeight: "400", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Absent
                </div>

              </div>

              <div style={{ width: "90%", height: "55%", display: "flex", alignItems: "center", justifyContent: "center" }}></div>

              <div style={{ width: "80%", height: "10%", display: "flex", alignItems: "center", justifyContent: "center", color: "#F00", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400" }}></div>

            </div>

            <div style={{ width: "78%", height: "100%", border: "2px solid #EAEAEA", borderRadius: "25px", background: "#FFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>

              <div style={{ width: "90%", height: "2%" }}></div>

              <div style={{ width: "90%", height: "20%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                <div style={{ width: "55%", height: "50%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                  <div style={{ width: "45%", height: "90%", background: "#FFD600", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "1px solid #EAEAEA", color: "#000", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px" }}>Employee</div>

                  <div onClick={() => navigate('/attendance/student')} style={{ width: "45%", height: "90%", background: "#FFF", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "1px solid #EAEAEA", color: "#000", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px" }}>Student</div>

                </div>

                <div style={{ width: "40%", height: "90%" }}></div>

              </div>

              <div style={{ width: "85%", height: "68%", border: "1px solid #EAEAEA", borderRadius: "25px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>

                <div style={{ width: "95%", height: "15%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                  <div style={{ width: "40%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <div style={{ width: "100%", height: "90%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
                      <div style={{ width: "90%", height: "70%", color: "#374957", fontFamily: "Lufga", fontSize: "15px", fontWeight: "400", display: "flex", alignItems: "end", justifyContent: "center" }}>Absent Teachers</div>
                    </div>
                  </div>

                  <div style={{ width: "10%", height: "80%" }}></div>

                  <div style={{ width: "50%", height: "80%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                    <div style={{ width: "45%", height: "90%", border: "1px solid #EAEAEA", borderRadius: "18px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                      <div style={{ width: "10%" }}></div>

                      <div style={{ width: "70%", height: "70%", display: "flex", justifyContent: "center", alignItems: "center", color: "#000", fontSize: "14px", fontFamily: "Lufga", fontWeight: "400" }}>
                        Teachers
                      </div>

                      <div style={{ width: "15%", height: "20%", backgroundImage: `url(${down})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

                      <div style={{ width: "10%" }}></div>
                    </div>

                    <div style={{ width: "35%", height: "90%", border: "1px solid #EAEAEA", borderRadius: "18px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                      <div style={{ width: "10%" }}></div>

                      <div style={{ width: "50%", height: "70%", display: "flex", justifyContent: "center", alignItems: "center", color: "#000", fontSize: "14px", fontFamily: "Lufga", fontWeight: "400" }}>
                        Today
                      </div>
                      <div style={{ width: "10%" }}></div>

                      <div style={{ width: "10%", height: "30%", backgroundImage: `url(${down})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

                      <div style={{ width: "10%" }}></div>
                    </div>

                  </div>

                </div>

                <div style={{ width: "95%", height: "75%", display: "flex", justifyContent: "center", alignItems: "center" }}>

                  <div style={{ width: "100%", height: "70%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div onClick={() => navigate('/employee/profile')} className="employee-cards-container" style={{ display: "grid", gridTemplateColumns: "repeat(2, 45%)", gap: "20px", width: "90%", height: "90%", overflowX: "auto" }}>
                      {studentData.map((student, index) => (
                        <EmployeeCard
                          key={index}
                          name={student.name}
                          avatar={avatar}
                          className={student.class}
                          section={student.section}
                        />
                      ))}
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

export default EmployeeAttendance
