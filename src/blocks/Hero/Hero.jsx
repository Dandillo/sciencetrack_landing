import React from "react";
import Header from "./components/Header/Header";
import heroBG from "./assets/bg/heroBG.png";
import "@fontsource/rubik/500.css";

function Hero() {
  return (
    <>
      <div className="hero-block">
        <Header />
        <h1 className="hero-heading">
          <span className="blurred-text">Science Track</span>- место для <br />
          научных познаний
        </h1>
      </div>
      <div className="hero-block">
        
        <h1 className="hero-heading">
          <span className="blurred-text">Science Track</span>- место для <br />
          научных познаний
        </h1>
      </div>
    </>
  );
}

export default Hero;
