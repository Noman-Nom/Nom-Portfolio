import React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { urlFor, Client } from "../../Client";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [work, setWork] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    Client.fetch(query)
      .then((data) => {
        setWork(data);
        setFilterWork(data);
      })
      .catch((error) =>
        console.error("Error fetching data from Sanity:", error)
      );
  }, []);
  const handleWorkFilter = (item) => {};
  return (
    <>
      <h2 className="head-text">
        My <span>Full Stack</span> Web Development <br /> <span>Portfolio</span>{" "}
        Section{" "}
      </h2>

      <div className="app__work-filter">
        {["web App", "React js", "Backend", "HTML/CSS", "ALL"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div 
              whileHover={{ opacity: [0, 1] }}
              transition={{duration:0.25, ease:'easeInOut'}}
              >

              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Work;
