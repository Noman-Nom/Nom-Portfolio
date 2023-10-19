import React from 'react'
import  './Testimonials.scss'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill} from 'react-icons/bs'
import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, Client } from "../../Client";

const Testimonials = () => {

  const [brands, setBrands] = useState([])
  const [testimonials, setTestimonials] = useState([])

  const [currentIndex, setCurrentIndex] = useState(0)


  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const skillsQuery = '*[_type == "brands"]';

    Client.fetch(query).then((data) => {
      console.log(data);
      setTestimonials(data);
    });
    Client.fetch(skillsQuery)
      .then((data) => {
      setBrands(data);
      })
      .catch((error) =>
        console.error("Error fetching data from Sanity:", error)
      );
  }, []);

  return (
        <>
        {testimonials.length &&(
          <>
          <div className="app__testimonials-item app__flex">
        
          <img src={urlFor(testimonials[currentIndex].imageurl)}  />
          </div>
          </>
        )}
        </>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'),
   'testimonial',
   "app__primarybg"

   );

  