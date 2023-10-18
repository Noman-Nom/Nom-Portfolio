import { Tooltip } from 'react-tooltip'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { urlFor, Client } from "../../Client";


import './Skills.scss'

const Skills = () => {
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