import React from 'react'
import logo from '../../netflix-logo-png-2562.png'
import {Link} from 'react-router-dom'
import {ImSearch} from 'react-icons/im' 
const Header = () => {
  return (
    <nav className='header'>
      <img src={logo} alt="logo" />
      <div>
          <Link to='/tvShows'> TV Shows</Link>
          <Link to='/movies'> Movies </Link>
          <Link to='/recent'> Recent Movies</Link>
          <Link to='/myList'> My List</Link>
      </div>
      <ImSearch />
    </nav>
  )
}

export default Header