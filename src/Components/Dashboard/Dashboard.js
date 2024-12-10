import React from 'react';
import img3 from "../../assets/images/ellipse-69.png";
import img4 from "../../assets/images/group-1.png";

const Dashboard = () => {
  return (
    <div style={{ width: "80vw", height: "100vh" }}>

      <div style={{ height: "100vh", width: "20%" }}>

        <div style={{ width: "100%", height: "10%" }}>
          <div style={{ width: "80%", height: "80%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <div style={{ width: "20%", height: "70%", backgroundImage: `url(${img3})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={img4} alt='img4'></img>
            </div>
            <div style={{ height: "100%", width: "75%", color: "#374957", fontFamily: "Lufga", fontWeight: "600", fontSize: "20px", display: "flex", alignItems: "center", marginLeft: "5%" }} >Sheshya</div>
          </div>
        </div>

        <div style={{ width: "100%", height: "60%", background: "blue" }}>

        </div>

        <div style={{ width: "100%", height: "20%" }}>

        </div>

        <div style={{ width: "100%", height: "10%", background: "blue" }}>

        </div>

      </div>

      <div></div>

    </div>
  )
}

export default Dashboard
