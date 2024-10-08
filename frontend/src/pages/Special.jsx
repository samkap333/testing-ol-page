import React from "react";
import { SiDatabricks } from "react-icons/si";
import { RiVipDiamondFill } from "react-icons/ri";
import { BsBox2Fill } from "react-icons/bs";
import { PiHouseLineFill } from "react-icons/pi";


function Special() {
  const specialDataArray = [
    {
      icon: <SiDatabricks className="special-icon" />,
      head: "Smart Contracts",
      para: "Smart contract eliminate intermediaries, cut costs, and enhance efficiency.",
      count: "01",
    },
    {
      icon: <RiVipDiamondFill className="special-icon" />,
      head: "DApps",
      para: "Decentralized apps enhance security, minimize breaches, and broaden global customer reach.",
      count: "02",
    },
    {
      icon: <BsBox2Fill className="special-icon" />,
      head: "NFT Marketplace",
      para: "Boost engagement withinteractive NFTS for customer interaction and participation.",
      count: "03",
    },
    {
      icon: <PiHouseLineFill className="special-icon" />,
      head: "Metaverse",
      para: "Elevate user experience to new heights with groundbreaking metaverse interactions.",
      count: "04",
    },
  ];

  return (
    <div className="special-container">
      <h5 className="special-container-label">Our Speciality</h5>
      <h1 className="special-container-head">
        Complete Solution for Decentralized Business Growth
      </h1>
      <p className="special-container-para">
        Incorporate decenralization for your business-where trust is build,
        efficiency is maximized, and innovation unfolds at a pace that ensures
        constant growth.
      </p>

      <div className="icon-section">
        {specialDataArray.map((item) => (
          <div className="icon-container">
            {item.icon}
            <h4>{item.head}</h4>
            <p>{item.para}</p>
            <h2>{item.count}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Special;
