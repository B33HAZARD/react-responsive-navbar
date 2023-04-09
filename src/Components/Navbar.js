import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Assets/css/navbar.css";

const Navbar = ({ selectedNav }) => {
  // States
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const selectedStyling = {
    backgroundColor: "skyblue"
  }

  const defaultStyling = {
    backgroundColor: "white"
  }

  const selectedStyle = {
    home: selectedNav === "home" ? selectedStyling : defaultStyling,
    about: selectedNav === "about" ? selectedStyling : defaultStyling,
    contact: selectedNav === "contact" ? selectedStyling : defaultStyling,
  }


  // Jsx
  return (
    <nav className='navigation'>
      <Link to='/' className='brand-name'>
        Sample
      </Link>
      <button className="hamburger" onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
      }>
        <ul>
          <li style={selectedStyle.home}>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li style={selectedStyle.about}>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
          <li style={selectedStyle.contact}>
            <Link to='/contact' className='nav-link'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar