import { images } from "../../Constants";
import { Client } from "../../Client";
import { React, useState } from "react";
import { AppWrap, MotionWrap } from "../../Wrapper";

import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <h2 className="head-text">Contact With Me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:noman5456318@gmail.com" className="p-text">Contact Me via Email</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:+92-3045456318" className="p-text">Contact Me via Phone no</a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
