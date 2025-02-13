import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './nav.css'; // Import our CSS styles
import $ from 'jquery'; // Ensure jQuery is available
import logo from '../Images/logo.png'


const App = () => {
  // State to manage menu active status
  const [isMenuActive, setMenuActive] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  // Apply jQuery logic once the component mounts
  useEffect(() => {
    $(".menu-btn").click(function () {
      $(".menu-btn").toggleClass("active");
      $(".overlay").toggleClass("active");
      $(".menu-container").toggleClass("active");
    });

    $(".overlay").click(function () {
      $(".menu-btn").removeClass("active");
      $(".overlay").removeClass("active");
      $(".menu-container").removeClass("active");
    });

    // Reset navigation after clicking on NavLink
    $(".menu-wrapper li a").click(function () {
      $(".menu-btn").removeClass("active");
      $(".overlay").removeClass("active");
      $(".menu-container").removeClass("active");
      setMenuActive(false); // Ensure React state is also updated
    });
  }, []); // Empty dependency array ensures this runs once

  return (
    <section className="landing-page">
    <div> <NavLink to="/" exact activeClassName="active"> <img src={logo} alt="" /></NavLink></div>

      <div className="menu-btn" onClick={toggleMenu}></div>
      <div className={`overlay ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
      <div className={`menu-container ${isMenuActive ? 'active' : ''}`}>
        <ul className="menu-wrapper">
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/tempelate" activeClassName="active">Templates</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
        <div className="menu-underlay"></div>
      </div>
    </section>
  );
};

export default App;
