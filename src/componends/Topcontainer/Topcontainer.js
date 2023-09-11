import React from 'react'
import { Element } from 'react-scroll'
import Topcontent from '../Topcontent/Topcontent'
import "./Topcontainer.css";

const Topcontainer = () => {
  return (
   <Element className='topcontainer'>
    <h1>
        <Topcontent/>
    </h1>
   </Element>
  )
}

export default Topcontainer
