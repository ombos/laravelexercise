import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>MBE Group</Link>
      <Link to='/about'>O nas</Link>
      <Link to='/contact'>Kontakt</Link>
    </div>
  </nav>
)

export default Header
