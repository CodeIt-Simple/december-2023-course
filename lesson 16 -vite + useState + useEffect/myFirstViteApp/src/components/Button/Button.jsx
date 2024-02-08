import React from 'react'
import "./Button.css"
import { MY_DATA } from '../../constants/data.js';


const Button = () => {
  return (
    <>{MY_DATA.map(number => <button>{number}</button>)}</>
  )
}

export default Button