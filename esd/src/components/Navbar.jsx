import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/login">login</NavLink>
      </li>
      
      <li class="nav-item">
        <NavLink className="nav-link" to ="/register">Register</NavLink>
      </li>

      <li class="nav-item">
        <NavLink className="nav-link" to ="/application">Application</NavLink>
      </li>
    </ul>
    <button className="btn">login</button>
    <button className="btn">register</button>
  </div>
</nav>
    </>
  )
}

export default Navbar
