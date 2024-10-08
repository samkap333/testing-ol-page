import React from "react";
import { GrNext } from "react-icons/gr";

function ServiceDescription() {
  const servicesData = [
    {
      title: "Customized Smart Contracts",
      description:
        "Offering customized smart contracts as a service enhances business efficiency through automated, secure, and transparent processes. This brings cost savings, accuracy, and global accessibility.",
    },
    {
      title: "Wallet Development",
      description:
        "Decentralized wallets enable instant, global, and cost-effective transactions, fostering international business expansion. By minimizing delays and facilitating large transactions in seconds, they revolutionize cross-border trade with unparalleled efficiency.",
    },
    {
      title: "DeFi 2.0 Development",
      description:
        "Embrace DeFi for token swapping, liquidity provision, and exchanges—experience heightened financial inclusivity, lower transaction costs, increased liquidity, transparent automation, 24/7 accessibility, and reduced dependence on traditional banking.",
    },
    {
      title: "Metaverse Development",
      description:
        "Unlock new dimensions in commerce, communication, and recreation through Metaverse development. Users can seamlessly explore and connect in virtual realms, transforming shopping, meetings, and gaming into immersive, next-level experiences.",
    },
    {
      title: "NFT Marketplace Development",
      description:
        "Harness the power of NFTs for business growth-enabling real-time asset trading, automating royalty distribution, establishes digital asset authenticity, fostering innovation, and cultivating a thriving ecosystem of creators and collectors.",
    },
    {
      title: "Dapp Development",
      description:
        "Transforming your ideas into reality, our dApp developers seamlessly integrate decentralized solutions into your existing infrastructure. Optimize resources, delivering cost-effective solutions tailored to your business requirements.",
    },
    // {
    //   title: "Coin and Token Development",
    //   description:
    //     "Developing tokens through Initial Coin Offerings (ICOs) or Security Token Offerings (STOs) can open new avenues for fundraising, empowering businesses to secure capital from a diverse range of investors, fostering financial inclusivity.",
    // },
  ];

  const ServiceComponent = ({ title, description }) => (
    <div className="service-description-box-item">
      <div className="service-description-box-item-text">
        <h3 className="service-description-box-head">{title}</h3>
        <h6 className="service-description-box-para">{description}</h6>
      </div>
      <p className="service-description-icon-box">
        <GrNext className="service-description-icon" />
      </p>
    </div>
  );

  return (
    <div className="service-description-container">
      <div className="service-description-box">
        {servicesData.map((service, index) => (
          <ServiceComponent key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default ServiceDescription;
