// AboutUs.js

import React from "react";
import ReactPlayer from "react-player";
import aboutBackgroundVideo from "./assets/about-vvv.mp4";

function AboutUs() {
  return (
    <div className="video-background">
      <ReactPlayer
        url={aboutBackgroundVideo}
        playing={true} 
        loop={true}
        controls={false}
        muted={true}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />

      <div className="content">
        <p className="about-us-heading">About us</p>
        <h4 className="about-us-content">
          Founded in 2023, Ocena is your partner in blockchain evolution.
          Offering custom smart contracts, Dapps, DeFi strategies, NFT platforms,
          and secure wallets, we redefine industries with decentralized
          brilliance. Embrace a future where trust and transparency drive
          business success.
        </h4>
        <br></br>
        <p className="about-us-heading">Our mission</p>
        <h5 className="about-us-mission-para">
          Ocena is at the forefront of the blockchain evolution, dedicated to
          reshaping industries and simplifying daily life through innovative
          blockchain solutions. Our mission is clear: to empower businesses with
          custom smart contracts, decentralized applications (Dapps), DeFi
          strategies, NFT platforms, and secure wallets. We believe in the
          transformative power of blockchain, where trust and transparency drive
          business success.
        </h5>
       
        <h5 className="about-us-mission-para">
          At Ocena, we are architects of decentralized brilliance, committed to
          fostering a future where traditional barriers are dismantled. By
          integrating blockchain solutions, we enable business growth, enhance
          operational efficiency, and create an ecosystem where trust is
          paramount. Beyond technological innovation, our mission extends to
          making people's lives easier by providing user-friendly interfaces,
          secure platforms, and seamless experiences for the adoption of
          blockchain technology into everyday life.
        </h5>
        <h5 className="about-us-mission-para">
          In our pursuit, we envision a world where blockchain empowers
          individuals and businesses, transcending boundaries and unlocking
          unprecedented opportunities. Ocena is your steadfast partner on this
          journey, pioneering solutions that redefine industries, foster growth,
          and shape a future where trust and transparency drive unparalleled
          success.
        </h5>
      </div>
    </div>
  );
}

export default AboutUs;
