import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
        <h1>TechStar.</h1>
        <main>
            <Link to={"/"} element>Home</Link>
            <Link to={"/contact"} element>Contact</Link>
            <Link to={"/#about"} element>About</Link>
            <Link to={"/#brands"} element>Brands</Link>
            <Link to={"/services"} element>Services</Link>
            
        </main>
    </nav>
  )
}

export default Header;