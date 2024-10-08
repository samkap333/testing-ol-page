import React from "react";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import { NavLink } from "react-router-dom";

function Innovation() {
  return (
    <div className="innovation-container">
      <div className="innovation-left-container">
        <div className="big-box-innovation"></div>
        <div className="big-box-2-innovation">
          <img src={img3} className="innovation-box-img" alt="" />
        </div>

        <div className=" corner-box1">
          <img
            src={img4}
            className="innovation-box-corner-img innovation-box-corner-img-ani-1"
            alt=""
          />
        </div>
        <div className=" corner-box2">
          <img
            src={img5}
            className="innovation-box-corner-img innovation-box-corner-img-ani-2"
            alt=""
          />
        </div>
        <div className=" center-box-sm">
          <img
            src={img2}
            className="innovation-box-corner-img-sm innovation-box-corner-img-ani"
            alt=""
          />
        </div>
      </div>
      {/*  */}
      <div className="innovation-right-container">
        <p className="innovation-right-about-us">About us</p>
        <h1 className="innovation-right-head">Dive into innovation</h1>
        <p className="innovation-right-para">Ocena is a pioneering blockchain service provider at the forefront of innovation, offering smart contract solutions and a dynamic NFT marketplace.. Our name, inspired by "ocean," reflects our commitment to transparency and boundless opportunities in the digital realm. Just as the ocean is vast and diverse, Ocena empowers creators, investors, and enthusiasts to ride the waves of blockchain technology, ensuring transparency and unlocking limitless potential through smart contracts and NFTs.</p>
        <div className="innovation-right-more-about-us-container">
        <NavLink to="/about" className="innovation-right-more-about-us">
  More about us
</NavLink>

        </div>
      </div>
    </div>
  );
}

export default Innovation;
