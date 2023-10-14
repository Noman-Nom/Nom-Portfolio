import React from 'react'

import { images } from '../../Constants'
import './Navbar.scss'

const Navbar = () => {
  return (
    
   <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.nomLogo2} alt="my-logo" />
    </div>
    <ul className='app__navbar-links'>
      {
        ['Home','About', 'Work', 'Skills','Contacts'].map((item)=>(

              <li className='app__flex p-text' key={`link-${item}`}>
                <div/>
                <a href={`#${item}`}>{item}</a>
              </li>
        ))
      }
    </ul>
   </nav>

  
  )
}

export default Navbar