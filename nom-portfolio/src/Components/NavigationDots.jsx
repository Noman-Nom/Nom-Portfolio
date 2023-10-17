import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        
        {["Home", "About", "Work","Testimonials",  "Skills", "Contacts"].map((item) => (
       
            <a 
            key={item+index}
            href={`#${item}`}
            className='app__navigation-dots'
            style={active=== item ? {backgroundColor:' rgb(14 165 233)'} : { }}
            />
            
           
          
        ))}

    </div>
  )
}

export default NavigationDots