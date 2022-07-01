import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Search from './Search';
import '../assets/css/navbar.css'

const NavBar = () => {

  const [nav, setNav] = useState(false)

  return (
    <div className="navbar-content">
      <div>
        <h1 className="navbar-title">Movies</h1>
      </div>
      <ul className="navbar-ul">
        <li className="navbar-li" ><Link to='/'>Home</Link> </li>
        <li className="navbar-li"><Link to='/favorites'>Favorites</Link> </li>
      </ul>
      <Search />

      <div onClick={() => setNav(!nav)} className="navbar-icon">
        {
          nav ? <FaTimes size={25} /> : <FaBars size={25} />
        }
      </div>
      {
        nav && (
          <ul className="navbar-ul-col">
            <li className="navbar-li-col" ><Link onClick={() => setNav(!nav)} to='/' >Home</Link> </li>
            <li className="navbar-li-col" ><Link onClick={() => setNav(!nav)} to='/favorites'>Favorites</Link> </li>
          </ul>
        )
      }
    </div>
  )
}

export default NavBar