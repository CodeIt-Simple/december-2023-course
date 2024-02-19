import React from 'react'
import { useNavigate } from "react-router-dom";

const NavigationButtons = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) =>{
      navigate(path)
    }
  
  return (
    <div>
      <button onClick={()=>{handleNavigate("/")}}>HOME</button>
      <button onClick={()=>{handleNavigate("/cart")}}>CART</button>
      <button onClick={()=>{handleNavigate("/about")}}>ABOUT</button>
    </div>
  )
}

export default NavigationButtons