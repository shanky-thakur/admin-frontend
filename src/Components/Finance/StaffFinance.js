import React from 'react';
import { useNavigate } from 'react-router-dom';

import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";
import add from "../../assets/images/addBlack.svg";
import img5 from "../../assets/images/ellipse-1385.svg";

const StaffFinance = () => {
  const navigate = useNavigate();

  const StaffData = [
    { name: "Arunima Singh", place: "Computer Lab", amount: "₹ 12,350" },
    { name: "Arunima Singh", place: "Computer Lab", amount: "₹ 12,350" },
    { name: "Arunima Singh", place: "Computer Lab", amount: "₹ 12,350" },
    { name: "Arunima Singh", place: "Computer Lab", amount: "₹ 12,350" },
    { name: "Arunima Singh", place: "Computer Lab", amount: "₹ 12,350" },
    { name: "Arunima Singh", place: "Computer Lab", amount: "₹ 12,350" },
    { name: "Arunima Singh", place: "Computer Lab", amount: "₹ 12,350" },
    { name: "Arunima Singh", place: "Computer Lab", amount: "₹ 12,350" },
  ];

  const StaffComponent = ({ name, place, amount, avatar }) => {
    return (
      <div style={{ width: "90%", height: "150px", border: "1.5px solid #EAEAEA", background: "#FFF", borderRadius: "25px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "40%", height: "40%", backgroundImage: `url(${avatar})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
        <div style={{ width: "80%", height: "50%" }}>
          <div style={{ width: "100%", height: "50%" }}>
            <div style={{ width: "100%", height: "75%", display: "flex", alignItems: "end", justifyContent: "center", color: "#000", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400" }}>
              {name}
            </div>
            <div style={{ width: "100%", height: "25%", display: "flex", alignItems: "center", justifyContent: "center", color: "#BFBFBF", fontFamily: "Lufga", fontSize: "9px", fontWeight: "400" }}>
              {place}
            </div>
          </div>
          <div style={{ width: "100%", height: "50%" }}>
            <div style={{ width: "100%", height: "75%", display: "flex", alignItems: "end", justifyContent: "center", color: "#06D85E", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400" }}>
              {amount}
            </div>
            <div style={{ width: "100%", height: "25%", display: "flex", alignItems: "start", justifyContent: "center", color: "#BFBFBF", fontFamily: "Lufga", fontSize: "9px", fontWeight: "400" }}>
              Total Payout
            </div>
          </div>
        </div>
      </div>
    )
  }

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
              <div onClick={() => navigate('/finace')} className='element' style={{ background: "#101010", width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#FFF", fontWeight: "400" }}>
                  Finances
                </div>
              </div>
              <div onClick={() => navigate('/attendance/employee')} className='element' style={{ width: "70%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "20px", border: "none" }}>
                <div className='innerElement' style={{ fontFamily: "Lufga", fontSize: "16px", color: "#374957", fontWeight: "400" }}>
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

        <div style={{ width: "80%", height: "100%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "space-evenly" }}>



          <div style={{ width: "90%", height: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>

            <div style={{ width: "100%", height: "8%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

              <div style={{ width: "20%", height: "90%", display: "flex", alignItems: "center", color: "#000", fontFamily: "Lufga", fontSize: "22px", fontWeight: "500" }}>
                Finance
              </div>

              <div style={{ width: "35%", height: "90%" }}></div>

              <div style={{ width: "18%", height: "90%", border: "1px solid #EAEAEA", background: "#FFF", borderRadius: "25px", display: "flex", justifyContent: "space-evenly", alignItems: "center", color: "#000", fontFamily: "Lufga", fontSize: "15px", fontWeight: "400" }}>

                <div style={{ width: "25%", height: "35%", backgroundImage: `url(${add})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

                <div style={{ width: "64%", height: "80%", display: "flex", alignItems: "center", justifyContent: "start", color: "#000", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px" }}>
                  Hire Staff
                </div>

              </div>

              <div style={{ width: "18%", height: "90%", border: "1px solid #EAEAEA", background: "#F9BD24", borderRadius: "25px", display: "flex", justifyContent: "space-evenly", alignItems: "center", color: "#000", fontFamily: "Lufga", fontSize: "15px", fontWeight: "400" }}>

                <div style={{ width: "25%", height: "35%", backgroundImage: `url(${add})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

                <div style={{ width: "64%", height: "80%", display: "flex", alignItems: "center", justifyContent: "start", color: "#000", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px" }}>
                  Add Staff
                </div>

              </div>

            </div>

            <div style={{ width: "100%", height: "20%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

              <div style={{ width: "48%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>

                <div style={{ width: "100%", height: "100%", background: "#101010", borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

                  <div style={{ width: "90%", height: "30%", display: "flex", alignItems: "center", color: "#FFF", fontFamily: "Lufga", fontWeight: "500", fontSize: "16px" }}>
                    Staff Salary
                  </div>

                  <div style={{ width: "90%", height: "60%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                    <div style={{ width: "48%", height: "85%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
                      <div style={{ width: "90%", height: "25%", display: "flex", alignItems: "center", color: "#FFD600", fontFamily: "Lufga", fontSize: "10px", fontWeight: "400" }}>Total Amount</div>

                      <div style={{ width: "90%", height: "65%", display: "flex", alignItems: "center", color: "#FFF", fontFamily: "Lufga", fontSize: "20px", fontWeight: "400" }}>₹ 12,20,440</div>
                    </div>

                    <div style={{ width: "48%", height: "85%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
                      <div style={{ width: "90%", height: "25%", display: "flex", alignItems: "center", color: "#FFD600", fontFamily: "Lufga", fontSize: "10px", fontWeight: "400" }}>Average Staff Salary</div>

                      <div style={{ width: "90%", height: "65%", display: "flex", alignItems: "center", color: "#FFF", fontFamily: "Lufga", fontSize: "20px", fontWeight: "400" }}>₹ 43,440</div>
                    </div>

                  </div>

                </div>

              </div>

              <div style={{ width: "48%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>

                <div style={{ width: "100%", height: "100%", background: "#101010", borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

                  <div style={{ width: "90%", height: "30%", display: "flex", alignItems: "center", color: "#FFF", fontFamily: "Lufga", fontWeight: "500", fontSize: "16px" }}>
                    Total Staff
                  </div>

                  <div style={{ width: "90%", height: "60%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                    <div style={{ width: "30%", height: "85%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
                      <div style={{ width: "90%", height: "25%", display: "flex", alignItems: "center", color: "#FFD600", fontFamily: "Lufga", fontSize: "10px", fontWeight: "400" }}>Teachers</div>

                      <div style={{ width: "90%", height: "65%", display: "flex", alignItems: "center", color: "#FFF", fontFamily: "Lufga", fontSize: "20px", fontWeight: "400" }}>104</div>
                    </div>

                    <div style={{ width: "40%", height: "85%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
                      <div style={{ width: "90%", height: "25%", display: "flex", alignItems: "center", color: "#FFD600", fontFamily: "Lufga", fontSize: "10px", fontWeight: "400" }}>Management Staff</div>

                      <div style={{ width: "90%", height: "65%", display: "flex", alignItems: "center", color: "#FFF", fontFamily: "Lufga", fontSize: "20px", fontWeight: "400" }}>32</div>
                    </div>

                    <div style={{ width: "30%", height: "85%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
                      <div style={{ width: "90%", height: "25%", display: "flex", alignItems: "center", color: "#FFD600", fontFamily: "Lufga", fontSize: "10px", fontWeight: "400" }}>Other Staff</div>

                      <div style={{ width: "90%", height: "65%", display: "flex", alignItems: "center", color: "#FFF", fontFamily: "Lufga", fontSize: "20px", fontWeight: "400" }}>12</div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div style={{ width: "100%", height: "60%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>

              <div style={{ width: "100%", height: "25%", display: "flex", alignItems: "center", justifyContent: 'space-evenly' }}>

                <div style={{ width: "48%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>

                  <div style={{ width: "100%", height: "50%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: "28%", height: "95%", border: "1px solid #EAEAEA", background: "#FFF", borderRadius: "25px", color: "#000", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Teachers</div>
                    <div style={{ width: "40%", height: "95%", border: "1px solid #EAEAEA", background: "#000", borderRadius: "25px", color: "#FFF", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Management Staff</div>
                    <div style={{ width: "28%", height: "95%", border: "1px solid #EAEAEA", background: "#FFF", borderRadius: "25px", color: "#000", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Other Staff</div>
                  </div>

                  <div style={{ width: "100%", height: "50%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: "18%", height: "85%", border: "1px solid #EAEAEA", background: "#FFF", borderRadius: "25px", color: "#000", fontFamily: "Lufga", fontSize: "10px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Office</div>
                    <div style={{ width: "18%", height: "85%", border: "1px solid #EAEAEA", background: "#FFD600", borderRadius: "25px", color: "#000", fontFamily: "Lufga", fontSize: "10px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Labs</div>
                    <div style={{ width: "18%", height: "85%", border: "1px solid #EAEAEA", background: "#FFF", borderRadius: "25px", color: "#000", fontFamily: "Lufga", fontSize: "10px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Library</div>
                    <div style={{ width: "18%", height: "85%", border: "1px solid #EAEAEA", background: "#000", borderRadius: "25px", color: "#FFF", fontFamily: "Lufga", fontSize: "10px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Monthly</div>
                    <div style={{ width: "18%", height: "85%", border: "1px solid #EAEAEA", background: "#FFF", borderRadius: "25px", color: "#000", fontFamily: "Lufga", fontSize: "10px", fontWeight: "400", display: "flex", alignItems: "center", justifyContent: "center" }}>Yearly</div>
                  </div>

                </div>

                <div style={{ width: "48%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>

                  <div style={{ width: "100%", height: "50%", background: "#FFF", borderRadius: "25px" }}>
                    <textarea placeholder='Search Staff' style={{ border: "1px solid #EAEAEA", resize: "none", borderRadius: "25px", width: "100%", height: "100%", color: "#374957", fontWeight: "500", fontSize: "14px", fontFamily: "Lufga", alignContent: "center", paddingLeft: "10px" }}></textarea>
                  </div>

                  <div style={{ width: "100%", height: "50%" }}></div>

                </div>

              </div>

              <div style={{ width: "100%", height: "70%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "auto" }}>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 2fr)", gap: "20px", width: "90%", height: "90%", overflow: "auto" }}>

                  {StaffData.map((staff, index) => (
                    <StaffComponent name={staff.name} place={staff.place} amount={staff.amount} avatar={img5} />
                  ))}

                </div>

              </div>

            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default StaffFinance
