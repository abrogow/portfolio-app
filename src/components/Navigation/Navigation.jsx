import React, { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { RiTimeLine } from "react-icons/ri";
import {BsPatchCheckFill} from 'react-icons/bs'
import { MdComputer } from "react-icons/md";

import './Navigation.css'

const Navigation = () => {
  const [current, setCurrent] = useState('#home')
  return (
    <nav>
      <a href="#home" onClick={() => setCurrent('#home')} className={current === '#home' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#about" onClick={() => setCurrent('#about')} className={current === '#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#skills" onClick={() => setCurrent('#skills')} className={current === '#skills' ? 'active' : ''}><BsPatchCheckFill/></a>
    <a href="#experience" onClick={() => setCurrent('#experience')} className={current === '#experience' ? 'active' : ''}><RiTimeLine/></a>
    <a href="#portfolio" onClick={() => setCurrent('#portfolio')} className={current === '#portfolio' ? 'active' : ''}><MdComputer/></a>
    <a href="#contact" onClick={() => setCurrent('#contact')} className={current === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
  </nav>
  )
}

export default Navigation