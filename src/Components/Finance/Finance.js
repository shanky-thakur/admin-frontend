import React from 'react';
import { useNavigate } from 'react-router-dom';

import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";
import add from "../../assets/images/addBlack.svg";
import expand from "../../assets/images/vector-down-black.svg"
import img5 from "../../assets/images/ellipse-1385.svg";
import right from "../../assets/images/right-white.svg";
import pie from "../../assets/images/pie-sections.svg";

const Finance = () => {
  const navigate = useNavigate();

  let greyWidth = "40%";
  let greenWidth = "85%";

  const data = [
    { data: "" },
    { data: "" },
    { data: "" },
    { data: "" },
    { data: "" },
    { data: "" },
  ];

  const RecentActivity = [
    { title: "Fee Payment", name: "Arav Anand", Amount: "+₹12,330", date: "12th Nov 2024" },
    { title: "Fee Payment", name: "Arav Anand", Amount: "+₹12,330", date: "12th Nov 2024" },
    { title: "Fee Payment", name: "Arav Anand", Amount: "+₹12,330", date: "12th Nov 2024" },
    { title: "Fee Payment", name: "Arav Anand", Amount: "+₹12,330", date: "12th Nov 2024" },
    { title: "Fee Payment", name: "Arav Anand", Amount: "+₹12,330", date: "12th Nov 2024" },
    { title: "Fee Payment", name: "Arav Anand", Amount: "+₹12,330", date: "12th Nov 2024" },
    { title: "Fee Payment", name: "Arav Anand", Amount: "+₹12,330", date: "12th Nov 2024" },
    { title: "Fee Payment", name: "Arav Anand", Amount: "+₹12,330", date: "12th Nov 2024" },
  ];

  const RecentActivities = ({ title, name, amount, date }) => {
    return (
      <div style={{ width: "98%", height: "40px", background: "#FFF", borderRadius: "20px", border: "1px solid #EAEAEA", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "85%", height: "85%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ width: "55%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ width: "100%", height: "60%", color: "#000", fontFamily: "Lufga", fontSize: "13px", display: "flex", alignItems: "end", fontWeight: "400" }}>{title}</div>
            <div style={{ width: "100%", height: "40%", color: "#909090", fontFamily: "Lufga", fontSize: "10px", display: "flex", alignItems: "start", fontWeight: "400" }}>{name}</div>
          </div>
          <div style={{ width: "40%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ width: "100%", height: "60%", color: "#06D85E", fontFamily: "Lufga", fontSize: "13px", display: "flex", alignItems: "end", fontWeight: "400", justifyContent: "end" }}>{amount}</div>
            <div style={{ width: "100%", height: "40%", color: "#909090", fontFamily: "Lufga", fontSize: "10px", display: "flex", alignItems: "start", fontWeight: "400", justifyContent: "end" }}>{date}</div>
          </div>
        </div>
      </div>
    )
  }

  const RecentExpenses = () => {
    return (
      <div style={{ width: "98%", height: "40px", background: "#FFF", borderRadius: "25px", border: "1px solid #EAEAEA" }}></div>
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

          <div style={{ width: "90%", height: "8%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

            <div style={{ width: "20%", height: "90%", display: "flex", alignItems: "center", color: "#000", fontFamily: "Lufga", fontSize: "22px", fontWeight: "500" }}>
              Finance
            </div>

            <div style={{ width: "15%", height: "90%" }}></div>

            <div style={{ width: "18%", height: "90%", border: "1px solid #EAEAEA", background: "#FFF", borderRadius: "25px", display: "flex", justifyContent: "space-evenly", alignItems: "center", color: "#000", fontFamily: "Lufga", fontSize: "15px", fontWeight: "400" }}>

              <div style={{ width: "12%", height: "35%", backgroundImage: `url(${add})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

              <div style={{ width: "64%", height: "80%", display: "flex", alignItems: "center", justifyContent: "start", color: "#000", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px" }}>
                Online Fees
              </div>

            </div>

            <div style={{ width: "18%", height: "90%", border: "1px solid #EAEAEA", background: "#FFF", borderRadius: "25px", display: "flex", justifyContent: "space-evenly", alignItems: "center", color: "#000", fontFamily: "Lufga", fontSize: "15px", fontWeight: "400" }}>

              <div style={{ width: "64%", height: "80%", display: "flex", alignItems: "center", justifyContent: "end", color: "#000", fontFamily: "Lufga", fontWeight: "400", fontSize: "14px" }}>
                September
              </div>

              <div style={{ width: "9%", height: "50%", backgroundImage: `url(${expand})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>

            </div>

            <div onClick={() => navigate("/finance/staff")} style={{ width: "18%", height: "90%", border: "1px solid #EAEAEA", background: "#F9BD24", borderRadius: "25px", display: "flex", justifyContent: "center", alignItems: "center", color: "#000", fontFamily: "Lufga", fontSize: "15px", fontWeight: "400", cursor: "pointer" }}>
              Expenses
            </div>

          </div>

          <div style={{ width: "90%", height: "63%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>

            <div style={{ width: "48%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>

              <div style={{ width: "100%", height: "1%" }}></div>

              <div style={{ width: "100%", height: "28%", background: "#101010", borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

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

              <div style={{ width: "100%", height: "66%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

                <div style={{ width: "95%", height: "15%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

                  <div style={{ width: "50%", height: "90%", display: "flex", alignItems: "center", color: "#000", fontFamily: "Lufga", fontWeight: "500", fontSize: "16px" }}>Recent Activity</div>

                  <div style={{ width: "30%", height: "90%", background: "#FFF", borderRadius: "20px", border: "1px solid #EAEAEA", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <div style={{ width: "60%", height: "80%", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400" }}>Today</div>
                    <div style={{ width: "12%", height: "70%", backgroundImage: `url(${expand})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
                  </div>

                </div>

                <div style={{ width: "95%", height: "78%", background: "#FFF", borderRadius: "20px", border: "1px solid #EAEAEA", display: "flex", justifyContent: "center", alignItems: "center" }}>

                  <div style={{ width: "95%", height: "85%", overflow: "auto", display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "5px" }}>

                    {RecentActivity.map((data, index) => (
                      <RecentActivities title={data.title} name={data.name} amount={data.Amount} date={data.date} />
                    ))}

                  </div>

                </div>

              </div>

            </div>

            <div style={{ width: "48%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>

              <div style={{ width: "100%", height: "1%" }}></div>

              <div style={{ width: "100%", height: "28%", background: "#101010", borderRadius: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

                <div style={{ width: "90%", height: "30%", display: "flex", alignItems: "center", color: "#FFF", fontFamily: "Lufga", fontWeight: "500", fontSize: "16px" }}>
                  Fee Collection
                </div>

                <div style={{ width: "90%", height: "30%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: `${greenWidth}`, height: "50%", background: "#06D85E", borderRadius: "20px", display: "flex", justifyContent: "end", alignItems: "center" }}>
                    <div style={{ width: "11%", height: "220%", background: "#FFF", marginRight: "-10px", marginTop: "-2px",  zIndex: "2", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#101010", fontWeight: "400", fontFamily: "Lufga", fontSize: "10px" }}>72%</div>
                    <div style={{ width: `${greyWidth}`, height: "100%", borderRadius: "20px", background: "#7F7F7F" }}></div>
                  </div>
                </div>

                <div style={{ width: "90%", height: "38%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                  <div style={{ width: "48%", height: "85%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
                    <div style={{ width: "90%", height: "25%", display: "flex", alignItems: "center", color: "#FFD600", fontFamily: "Lufga", fontSize: "10px", fontWeight: "400" }}>Total Amount</div>

                    <div style={{ width: "90%", height: "65%", display: "flex", alignItems: "center", color: "#FFF", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400" }}>₹ 12,20,440</div>
                  </div>

                  <div style={{ width: "48%", height: "85%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
                    <div style={{ width: "90%", height: "25%", display: "flex", alignItems: "center", color: "#FFD600", fontFamily: "Lufga", fontSize: "10px", fontWeight: "400" }}>Collected  Amount</div>

                    <div style={{ width: "90%", height: "65%", display: "flex", alignItems: "center", color: "#FFF", fontFamily: "Lufga", fontSize: "14px", fontWeight: "400" }}>₹ 23,43,440</div>
                  </div>

                </div>

              </div>

              <div style={{ width: "100%", height: "66%", background: "#101011", borderRadius: "25px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

                <div style={{ width: "85%", height: "15%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ width: "50%", height: "85%", display: "flex", alignItems: "center", color: "#FFF", fontWeight: "400", fontSize: "16px", fontFamily: "Lufga" }}>
                    Collected Fees
                  </div>

                  <div style={{ width: "8%", height: "75%", backgroundImage: `url(${right})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
                </div>

                <div style={{ width: "85%", height: "70%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                  <div style={{ width: "50%", height: "95%", backgroundImage: `url(${pie})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: "40%", height: "40%" }}>
                      <div style={{ width: "100%", height: "60%", display: "flex", alignItems: "end", justifyContent: "center", color: "#FFF", fontFamily: 'Lufga', fontWeight: "700", fontSize: '18px' }}> 72% </div>
                      <div style={{ width: "100%", height: "40%", display: "flex", alignItems: "start", justifyContent: "center", color: "#FFF", fontFamily: 'Lufga', fontWeight: "400", fontSize: '12px' }}> Collected </div>
                    </div>
                  </div>

                  <div style={{ width: "45%", height: "90%", display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>

                    <div style={{ width: '100%', height: '70%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>

                      <div style={{ width: "100%", height: "35%", display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>

                        <div style={{ width: "15%", height: "70%", borderRadius: "50%", background: "#FFF" }}></div>

                        <div style={{ width: "45%", height: "60%", color: "#FFF", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400", display: "flex", alignItems: "end", justifyContent: 'center' }}>Fee Paid</div>

                        <div style={{ width: "35%", height: "60%", color: "#FFF", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400", display: "flex", alignItems: "end", justifyContent: 'center' }}>3302</div>

                      </div>

                      <div style={{ width: '100%', height: '0.5%', border: "1px solid #FFF" }}></div>

                      <div style={{ width: "100%", height: "35%", display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>

                        <div style={{ width: "15%", height: "70%", borderRadius: "50%", background: "#FF7D1A" }}></div>

                        <div style={{ width: "45%", height: "60%", color: "#FFF", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400", display: "flex", alignItems: "end", justifyContent: 'center' }}>Pending</div>

                        <div style={{ width: "35%", height: "60%", color: "#FFF", fontFamily: "Lufga", fontSize: "12px", fontWeight: "400", display: "flex", alignItems: "end", justifyContent: 'center' }}>30</div>

                      </div>

                    </div>

                    <div style={{ width: '80%', height: '10%' }}></div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          <div style={{ width: "90%", height: "25%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "space-evenly" }}>

            <div style={{ width: "100%", height: "25%", color: "#000", fontSize: "18px", fontFamily: "Lufga", fontWeight: "400", display: "flex", alignItems: "center" }}>
              Recent Expenses
            </div>

            <div style={{ width: "100%", height: "70%", overflow: "auto", display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "5px" }}>
              {data.map((data, index) => (
                <RecentExpenses data={data} key={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Finance
