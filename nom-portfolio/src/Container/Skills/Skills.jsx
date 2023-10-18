import { Tooltip } from 'react-tooltip'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { urlFor, Client } from "../../Client";


import './Skills.scss'

const Skills = () => {

  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    Client.fetch(query)
      .then((data) => {
        setExperiences(data);
       
      })
    Client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
       
      })
      .catch((error) =>
        console.error("Error fetching data from Sanity:", error)
      );
  }, []);

  return (
    <>
    <h2 className='head-text'>
      Skills <span>&</span> Experience
    </h2>
    <div className='app__skills-container'>
      <motion.div
      className='app__skills-list'
      >
       
      </motion.div>

    </div>
    </>
  )
}

export default Skills