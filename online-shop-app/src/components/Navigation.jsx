import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/navigation.css'
import { clearUserData, getUserData } from '../helper'

function Navigation() {
  const [user,setUser] = useState(false)
  useEffect(()=>{
    const isUser = getUserData('token')
    if(isUser){
      setUser(true)
    } 
  },[])
  return (
    <>
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
              {user ?<Link to='/login' onClick={clearUserData} className='nav-link'>logout</Link> :<Link className="nav-link" to="/login">Login</Link>}
            </li>
          </ul>
        </nav>
      </div>
      </>
  )
}

export default Navigation