import React from 'react';
import "./header.css";
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
  
      
        <div className='nav_bar'>
          <div><img src='https://learningtechcoding.github.io/Ecommerece-Page-html/logo.png' alt='' height="100px" width="250px" /></div>
          
          <div className='nav'>
          <NavLink  className='link' to="/"> HOME </NavLink>
          <NavLink className='link' to="/post"> POST  </NavLink>
          <NavLink className='link' to="/photos"> PHOTOS </NavLink>
          <NavLink  className='link' to="/users"> USERS </NavLink>
          
          </div>
      </div>
  
  )
}

export default Header;