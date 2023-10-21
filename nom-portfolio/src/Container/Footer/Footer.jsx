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


      <div className="app__footer-form app__flex">

        <div className="app__flex">

          <input className="p-text" type="text" placeholder="Your Name"  name="name" value={name} onChange={handleChangeInput}  />

        </div>
        <div className="app__flex">

          <input className="p-text" type="text" placeholder="Your Email"  name="email" value={email} onChange={handleChangeInput}  />

        </div>
        <div>
          <textarea className="p-text" placeholder="Your Message" 
          value={message}
          name="message"
          
          onChange={handleChangeInput}/>
        </div>
        <button type="button" className="p-text" onClick={handleChangeInput}>

        </button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
