import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/navigation.css'
function Navigation() {
  return (
    <div>
        <nav className="navbar">   
         <p className='title'>ONLINE SHOP</p>       
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Navigation