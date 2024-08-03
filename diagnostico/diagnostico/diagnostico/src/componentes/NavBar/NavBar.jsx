import { NavLink } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
  return (
   <nav className="navbar">

<NavLink to="/" className="brand">

Trabalho  <span>React</span>

</NavLink>

<ul>

<li>
    <NavLink to="/">
        Home
    </NavLink>
    
</li>

<li>
    <NavLink to="/listagem">
        Lista
    </NavLink>
</li>


<li>
    <NavLink to="/cadastro">
        Cadastro
    </NavLink>
</li>

</ul>


   </nav>
  )
}

export default NavBar
