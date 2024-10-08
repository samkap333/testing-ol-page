import React, { useEffect } from "react";
import "../home.css";
import { useState } from "react";
import banner from "../assets/banner.png";


function About() {
  const keywords = [
    "NFTs",
    "D-Apps",
    "Smart Contracts",
    "Tokens",
    "Wallets",
    "Metaverse",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="about-container">
      <div className="about-left">
        <h2 className="about-left-header-text">
          Transforming the market landscape with{" "}
          <span className="animateSpan">{keywords[index]}</span>
        </h2>
      </div>
      <div className="about-right">
        <div className="box-container">
          <div className="box box-1" style={{ transform: "rotate(-20deg)" }}>
            Box 1
          </div>
          <div className="box box-2" style={{ transform: "rotate(-12deg)" }}>
            Box 2
          </div>
          <div className="box box-3" style={{ transform: "rotate(0deg)" }}>
            <img src={banner} className="banner-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
