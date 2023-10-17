import React from "react";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import "./About.scss";

const abouts = [
  {
    title: "Full Stack Web Development",
    description: "Building from Pixels to Databases, We Do It All",
    imgUrl: " ",
  },
  {
    title: "Front-End Development",
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

      <div className="app__profiles">
      {
        abouts.map((about,index)=>(
          <motion.div
          whileInView={{opacity:1}}

          whileHover={{scale:1.1}}
          transition={{duration:.5 , type:'tween'}}
          className="app__profile-item"
          key={about.title + index}
          >
                <img src={about.imgUrl} alt={about.title} />
                <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
                <p className="p-text" style={{marginTop:10}}>{about.description}</p>
                 
          </motion.div>
        ))
      }

      </div>

    </>
  );
};

export default About;
