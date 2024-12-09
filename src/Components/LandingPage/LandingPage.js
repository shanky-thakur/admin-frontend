import React from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from "../../assets/images/Untitled design.png";
import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center", paddingTop: "2%", paddingBottom: "2%", background: "#F8F8F8" }}>

      <div style={{ height: "100%", width: "45%" }}>

        <div style={{ width: "100%", height: "5%", display: "flex" }}>
          <div style={{ width: "32%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <div style={{ width: "20%", height: "100%", backgroundImage: `url(${img3})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={img4} alt='img4'></img>
            </div>
            <div style={{ height: "100%", width: "75%", color: "#374957", fontFamily: "Lufga", fontWeight: "600", fontSize: "32px", display: "flex", alignItems: "center" }} >Sheshya</div>
          </div>
        </div>

        <div style={{ width: "100%", height: "80%", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "20px" }}>
          <div style={{ width: "100%", height: "18%", marginTop: "2%", marginBottom: "2%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "80%", height: "80%" }}>
              <div style={{ color: "#374957", fontFamily: "Lufga", fontSize: "40px", fontWeight: "500", lineHeight: "normal" }}>
                Get Started now
              </div>
              <div style={{ color: "#838A8F", fontFamily: "Lufga", fontWeight: "400", fontSize: "24px", lineHeight: "normal", paddingTop: "5px", marginBottom: "90px" }}>
                Enter your details to access your account
              </div>
            </div>
          </div>

          <div style={{ width: "80%", height: "76%", display: "flex", flexDirection: "column", paddingTop: "40px" }}>

            <div style={{ height: "130px", width: "100%" }}>
              <div style={{ height: "29px", width: "100%", marginBottom: "10px", color: "#374957", fontFamily: "Lufga", fontSize: "22px", fontWeight: "400" }}>
                School Name
              </div>
              <div style={{ height: "60px", width: "100%", borderRadius: "25px", border: "1px solid #EAEAEA", background: "#FFF" }}>
                <textarea style={{ resize: "none", background: "transparent", border: "none", borderRadius: "25px", width: "100%", height: "100%", fontSize: "30px", fontFamily: "Lufga", fontWeight: "200", alignContent: "center" }}></textarea>
              </div>
            </div>

            <div style={{ height: "130px", width: "100%" }}>
              <div style={{ height: "29px", width: "100%", marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: "50%", height: "100%", color: "#374957", fontFamily: "Lufga", fontSize: "22px", fontWeight: "400" }}>School Code</div>
                <div style={{ width: "50%", height: "100%", color: "#374957", fontFamily: "Lufga", fontSize: "22px", fontWeight: "400" }}>Pin Code</div>
              </div>
              <div style={{ height: "60px", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: "50%", height: "100%" }}>
                  <div style={{ height: "60px", width: "90%", borderRadius: "25px", border: "1px solid #EAEAEA", background: "#FFF" }}>
                    <textarea style={{ resize: "none", background: "transparent", border: "none", borderRadius: "25px", width: "100%", height: "100%", fontSize: "30px", fontFamily: "Lufga", fontWeight: "200", alignContent: "center" }}></textarea>
                  </div>
                </div>
                <div style={{ width: "50%", height: "100%" }}>
                  <div style={{ height: "60px", width: "100%", borderRadius: "25px", border: "1px solid #EAEAEA", background: "#FFF" }}>
                    <textarea style={{ resize: "none", background: "transparent", border: "none", borderRadius: "25px", width: "100%", height: "100%", fontSize: "30px", fontFamily: "Lufga", fontWeight: "200", alignContent: "center" }}></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ height: "130px", width: "100%" }}>
              <div style={{ height: "29px", width: "100%", marginBottom: "10px", color: "#374957", fontFamily: "Lufga", fontSize: "22px", fontWeight: "400" }}>
                School Email
              </div>
              <div style={{ height: "60px", width: "100%", borderRadius: "25px", border: "1px solid #EAEAEA", background: "#FFF" }}>
                <textarea style={{ resize: "none", background: "transparent", border: "none", borderRadius: "25px", width: "100%", height: "100%", fontSize: "30px", fontFamily: "Lufga", fontWeight: "200", alignContent: "center" }}></textarea>
              </div>
            </div>

            <div style={{ height: "130px", width: "100%" }}>
              <div style={{ height: "29px", width: "100%", marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: "50%", height: "100%", color: "#374957", fontFamily: "Lufga", fontSize: "22px", fontWeight: "400" }}>State</div>
                <div style={{ width: "50%", height: "100%", color: "#374957", fontFamily: "Lufga", fontSize: "22px", fontWeight: "400" }}>City</div>
              </div>
              <div style={{ height: "60px", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ width: "50%", height: "100%" }}>
                  <div style={{ height: "60px", width: "90%", borderRadius: "25px", border: "1px solid #EAEAEA", background: "#FFF" }}>
                    <textarea style={{ resize: "none", background: "transparent", border: "none", borderRadius: "25px", width: "100%", height: "100%", fontSize: "30px", fontFamily: "Lufga", fontWeight: "200", alignContent: "center" }}></textarea>
                  </div>
                </div>
                <div style={{ width: "50%", height: "100%" }}>
                  <div style={{ height: "60px", width: "100%", borderRadius: "25px", border: "1px solid #EAEAEA", background: "#FFF" }}>
                    <textarea style={{ resize: "none", background: "transparent", border: "none", borderRadius: "25px", width: "100%", height: "100%", fontSize: "30px", fontFamily: "Lufga", fontWeight: "200", alignContent: "center" }}></textarea>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div style={{ width: "100%", height: "5%", display: "flex", justifyContent: "center" }}>
          <div style={{ width: "80%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div onClick={() => navigate('/verification')} style={{ width: "100%", height: "60px", background: "#161616", borderRadius: "25px", color: "#FFF8F8", fontFamily: "Lufga", fontSize: "24px", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center" }}>
              Register
            </div>
          </div>
        </div>

      </div>

      <div style={{ height: "90%", width: "45%", background: "#000", flexShrink: "0", borderRadius: "25px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={img1} alt='img' style={{width: "100%", height: "80%"}}></img>
      </div>

    </div>
  )
}

export default LandingPage
