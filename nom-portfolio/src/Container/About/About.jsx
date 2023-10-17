import React from "react";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description: "I'm a Full Stack Web Developer",
    imgUrl: " ",
  },
  {
    title: "Front-End",
    description: "Front-End Magic: Turning Designs into Reality",
    imgUrl: " ",
  },
  {
    title: "Back-End Development",
    description: "Reliability, Scalability, Security: Our Back-End Promise",
    imgUrl: " ",
  },
  {
    title: "DataBase",
    description: "Empowering Business Decisions with Data Management",
    imgUrl: " ",
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        {" "}
        "Where <span>Good Design</span>
        <br />
        Meets Great <span>Business Outcomes</span>"
      </h2>
    </>
  );
};

export default About;
