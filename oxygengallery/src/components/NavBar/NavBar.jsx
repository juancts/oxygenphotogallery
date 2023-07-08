import React from 'react'

import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <h1>NavBar</h1>
      <NavLink to="/home">HOME</NavLink>
      <NavLink to="/favorites">FAVORITES</NavLink>
      <NavLink to="/about">ABOUT</NavLink>

    </div>
  )
}

export default NavBar