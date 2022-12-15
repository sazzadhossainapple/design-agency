import React from "react";
import "./Banner.css";
import IMG from "../../../assert/Images/Banner/bannerBg.png";
const Banner = () => {
  return (
    <section className="banner__container">
      <div className="banner__container-text">
        <div className="banner__text">
          <h2>INNOVATION DIGITAL TECHNOLOGY</h2>
          <p>everything we do is the consumer, imagination and you.</p>
        </div>
        <div className="banner-images">
          <img src={IMG} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
