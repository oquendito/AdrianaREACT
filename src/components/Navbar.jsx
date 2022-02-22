import React from 'react'
import './StyledNav.css'

const Navbar = () => {

  return (
      <>
    <header>
      <nav>
        <h1 id="main-logo" >
          <span>FeliFelinos</span>
        </h1>
        <ul id="main-menu">
          <li>Inicio</li>
          <li>Catálogo</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Navbar
