import React from 'react'
import  './Testimonials.scss'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill} from 'react-icons/bs'
import { AppWrap, MotionWrap } from "../../Wrapper";
import { urlFor, Client } from "../../Client";

const Testimonials = () => {

  const [brands, setBrands] = useState([])
  const [testimonails, setTestimonails] = useState([])

  const [currentIndex, setCurrentIndex] = useState([])


  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const skillsQuery = '*[_type == "brands"]';

    Client.fetch(query).then((data) => {
      // console.log(data);
      setTestimonails(data);
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
    <div>Testimonials</div>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonials'),
   'skill',
   "app__primarybg"

   );

  