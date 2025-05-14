import React from 'react'
import logo from "../../images/logo.png"

export default function Header() {
  return (
    <div className='py-2 pl-2'style={{borderBottom:"1px solid black"}}>
      <img src={logo} alt="" style={{heigt:"35px",verticalAlign:"top",width:"50 px"}}/>
      
    </div>
  )
}
