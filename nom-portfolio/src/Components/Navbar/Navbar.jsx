import React from 'react'
import { useState } from 'react'

import {BsFillMenuButtonWideFill} from 'react-icons/bs'
import {motion} from 'framer-motion'

import { images } from '../../Constants'

import './Navbar.scss'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  return (
    
   <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.nomLogo2} alt="my-logo" />
    </div>
    <ul className='app__navbar-links'>
      {
        ['Home','About', 'Work', 'Skills','Contacts'].map((item)=>(

              <li className='app__flex p-text' key={`link-${item}`}>
                <a href={`#${item}`}>{item}</a>
                <div/>
              </li>
        ))
      }
    </ul>
    <div className="app__navbar-menu">
      <BsFillMenuButtonWideFill onClick={()=>setToggle(true)}/>
      {
        toggle && ( 
          <motion.div
          
          >


          </motion.div>

        )
      }

    </div>
   </nav>

  
  )
}

export default Navbar