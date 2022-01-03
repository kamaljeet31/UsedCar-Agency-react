import React, { useState } from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

  return (
    <>
      <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
        <a href='/' className='navbar-brand'>
          <img src='/img/gearLogo.png' alt='logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          // data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          // aria-expanded='false'
          // aria-label='Toggle navigation'
          // aria-expanded={isNavCollapsed ? true : false}
          aria-label='Toggle navigation'
          onClick={handleNavCollapse}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        {/* <div className='collapse navbar-collapse' id='navbarSupportedContent'> */}
        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id='navbarSupportedContent'
        >
          <ul
            className='navbar-nav mx-auto align-items-center'
            onClick={handleNavCollapse}
          >
            <li className='nav-item active'>
              <a href='#skills' className='nav-link'>
                shopping tools
              </a>
            </li>
            <li className='nav-item'>
              <a href='#inventory' className='nav-link'>
                inventory
              </a>
            </li>
            <li className='nav-item'>
              <a href='#featured' className='nav-link'>
                featured Cars
              </a>
            </li>
            <li className='nav-item '>
              <a href='#gallery' className='nav-link'>
                Gallery
              </a>
            </li>
          </ul>
          {/* <!-- social icons --> */}
          <div className='nav-icons d-none d-lg-block ml-2'>
            <a href='/' className='nav-icon'>
              <i className='fab fa-facebook'>
                <FaFacebook />
              </i>
            </a>
            <a href='/' className='nav-icon'>
              <i className='fab fa-twitter'>
                <FaTwitter />
              </i>
            </a>
            <a href='/' className='nav-icon'>
              <i className='fab fa-instagram'>
                <FaInstagram />
              </i>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
