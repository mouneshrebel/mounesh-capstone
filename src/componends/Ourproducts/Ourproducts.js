import React from 'react'
import { Element } from 'react-scroll'
import "./Ourproducts.css"

const Ourproducts = () => {
  return (
   <Element className='ourproduct' id='ourproduct'>
    <h1> Our Products </h1>
    <div className='ourpoduct__container'>
        <p> ARKM offers a wide range of products in both liquid milk and by-product categories.</p>
        <p>The liquid milk comprises of 5 types of variants and the by-product comprises of 14 types of variants.</p>
        <p2> ARKM offers a wide range of milk products comprising</p2>
        <p>Fresh Milk,Butter, Ghee, Paneer, Curd, </p>
        <p> Flavoured Milk, Doodh Peda, Ice Cream and Skimmed Milk Powder</p>
    </div>
   </Element>
  )
}

export default Ourproducts
