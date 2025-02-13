import React from 'react'
import { NavLink } from 'react-router';
import './template.css'
import Tem1 from '../Images/tem1.png'
import Tem2 from '../Images/tem2.png'

function tempelate() {
  return (
    <>
<div className="tem">
  <div className="conti">
    <h1>
      Choose Your Template 
    </h1><br /><br />
    <h2>Create and customize in a very convenient and efficient manner, providing a seamless and enjoyable user experience. </h2><br /><hr /><hr /><hr /><br />
    <h2>Welcome to the login-Free website.. Enjoy the most easy website for making Resume's on internet.. </h2>
    <br /><br />
  </div>
          <NavLink to="/tempelate1" exact activeClassName="active">
          <img src={Tem1} alt="" />
          </NavLink>
          <NavLink to="/tempelate2" activeClassName="active">
          <img src={Tem2} alt="" />
          </NavLink>
          </div>
</>
  )
}

export default tempelate