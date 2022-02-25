import React from 'react'
import CartWidget from '../CartWidget'
import './StyledNav.css'
import Logo from '../Logo'

function navbar() {
  return (
      <div className="navbar">
          <div className="navbar-menu">
              <div>
                  <Logo />
              </div>
              <ul>
                  <li><a>HOME</a></li>
                  <li><a>CATÁLOGO</a></li>
                  <li><a>ABOUT US</a></li>
                  <li><a>CONTACTO</a></li>
              </ul>
              <div>
                  <CartWidget />
              </div>
          </div>
      </div>
  )
}

export default navbar
