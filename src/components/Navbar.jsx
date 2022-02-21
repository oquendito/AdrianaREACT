import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
      <>
    <NavMenu>
    <h2>FeliFelinos</h2>
    <div>
        <a href="/">Inicio</a>
        <a href="/">Catalogo</a>
        <a href="/">About</a>
        <a href="/">Contacto</a>
    </div>
    </NavMenu>
    </>
  )
}

export default Navbar

const NavMenu = styled.nav`
h2{
    color; black;
    font-weight: 400;
}
padding: .4rem;
background-color: #333;
display: flex;
align-items: center;
justify-content: space-between;
a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
`