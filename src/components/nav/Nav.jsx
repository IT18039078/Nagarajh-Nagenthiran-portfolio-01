import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNave] = useState('#')

  return (
    <nav>
       <a href='' onClick={()=> setActiveNave('#')} 
       className={activeNav === "#" ? 'active' : ''}>
        <AiOutlineHome/></a>
       <a href='#about' onClick={()=> setActiveNave('#about')} 
       className={activeNav === "#about" ? 'active' : ''}>
        <AiOutlineUser/></a>
       <a href='#experience' onClick={()=> setActiveNave('#experience')} 
       className={activeNav === "#experience" ? 'active' : ''}>
        <BiBook/></a>
       <a href='#services' onClick={()=> setActiveNave('#services')} 
       className={activeNav === "#services" ? 'active' : ''}>
        <RiServiceLine/></a>
       <a href='#contact' onClick={()=> setActiveNave('#t')} 
       className={activeNav === "#t" ? 'active' : ''}>
        <BiMessageRoundedDetail
       /></a>
    </nav>
  )
}

export default Nav