import React from 'react'
import{ Link} from 'react-scroll'
import "./Header.css"



const Header = () => {
  return (
    <div className='Header'>
      <div className='Header__left'>
        <h1>Dairy
            <span>Manger</span>
        </h1>
      </div>
      <div className='Header__right'>
        <Link to='about' smooth={true} duration={500}>
            <h4> About Us </h4>
        </Link>

        <Link to='skills' smooth={true} duration={500}>
            <h4> Carrers </h4>
        </Link>

        <Link to='projects' smooth={true} duration={500}>
            <h4> Our Products </h4>
        </Link>

        <Link to='exp' smooth={true} duration={500}>
            <h4> Support </h4>
        </Link>

        <Link to='contact' smooth={true} duration={500}>
            <h4> contact </h4> 
        </Link>

 <h4 className='header__rightbutton'> Login </h4>

      </div>
    </div>
  )
}

export default Header
