import React from 'react';
import logoGif from "../../assets/images/logo gif.gif";

const LoadingPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#F8F8F8" }}>
      <img src={logoGif} alt='gif' style={{ width: "150px", height: "150px" }} ></img>
    </div>
  )
}

export default LoadingPage
