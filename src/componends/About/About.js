import React from 'react'
import { Element } from 'react-scroll'
import "./About.css"

const About = () => {
  return (
 <Element className='about' id='about'>
    <h1>
      
        Welcome to ARKM Dairy 
    </h1>
    <div className='about__container'>
        <p>
        ARKM Dairy Limited is a public limited company having its registered and corporate office at Chennai of Tamilnadu State in India. The company was incorporated in the year 1995 and production commenced in 1998. Currently, Our procurement is centered in 6 states and our products are available for purchase in 11 states. We have 94 milk chilling centers.
        </p>
        <p>Our distribution and marketing operations consist of distribution of our products through 41 sales offices, 2,986 distribution agents, 1,799 milk distributors and 544 milk product distributors across 11 states in India. Additionally, as of March 31st, 2022, our milk and dairy based VAPs are also available through 563 “ARKM Retail Parlours” which commenced operations in 2016 and are spread across the states of Tamil Nadu ,Andhra Pradesh, Telangana, Delhi and Karnataka. Our product portfolio consists of Milk, Butter Milk, Ghee, Curd, Paneer, Flavoured Milk, Doodh Peda, Ice Cream and Sweets. These products are conveniently packed to suit various needs of its consumers.</p>
        
        <h2 className='about__our'>OUR PRINCIPLE</h2>
        <p>Produce range of quality milk and milk products.</p>
        <p>Adopt advanced manufacturing process.</p>
        <p>Follow ethical and transparent working style.</p>
        <p>Ensure eco-friendly operations.</p>
         <p>Provide excellent customers services.</p>
    </div>
 </Element>
  )
}

export default About
