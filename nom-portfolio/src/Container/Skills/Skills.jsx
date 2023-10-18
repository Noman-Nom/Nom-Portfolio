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
       {skills.map((skill)=>(
          <motion.div
          whileInView={{opacity:[0,1]}}
          transition={{duration:0.5}}
          className='app__skills-item app__flex'

          key={skill.name}
          
          >
              <div className='app__flex' style={{backgroundColor:skill.bgColor}} >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
          </motion.div>
       ))}
      </motion.div>

    </div>
    </>
  )
}

export default Skills