import React from 'react'
import { Link } from 'react-scroll'
import "./Topcontent.css" 

const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1 className='topcontent__containerrkm'>
                A R K M Dairy </h1>
                <p>Fresh Milk & Dairy Product Online </p>

               <a href='www.google'> 
                   
                    <button className='topcontent__downloadbutton'>
                        Order
                    </button>
                 </a>
                <Link to= "projects" smooth={true} duration={500}>
                    <button className='topcontent__workbutton'>Explore</button>
                </Link>
                
               
               
              

        </div>
      
    </div>
  )
}

export default Topcontent
