import React from 'react'

import { images } from '../../Constants'
import './Navbar.scss'

const Navbar = () => {
  return (
    
   <nav>
    <div>
      <img src={images.nomLogo2} alt="my-logo" />
    </div>
    <ul>
      {
        ['Home','About', 'Work', 'Skills','Contacts'].map((item)=>(

              <li key={`link-${item}`}>
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