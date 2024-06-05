import React from 'react'
import {Link} from 'react-router-dom'
import RegisterPage from '../../Pages/RegisterPage'
import '../../styles/mainHeader.css'


const PrincipalHeader = () => {
  return (
    <header className='header-app'>
        <h1><Link to='/'>Hotels App</Link></h1>
        <nav>
      <ul>
        <li><Link to='/reservations'>Reservation</Link></li>
        <li><Link to='/register' >Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
        </ul>
        </nav>
    </header>
  )
}

export default PrincipalHeader