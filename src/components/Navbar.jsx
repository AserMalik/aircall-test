import React from 'react';
import { NavLink } from "react-router-dom";

import '../css/w3.css'

const Navbar= () =>{
  
  return (
    <div className='w3-bar'>
      <nav>
        <ul>
          <li class="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-green">
            <NavLink to="/" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
              Inbox
              </NavLink>
          </li>
          <li class="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-green">  
            <NavLink to="/allcalls" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }>
              All calls
              </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;