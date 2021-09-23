import React from 'react'
import arlogo from './../../Assets/AR - logo.svg'
import './Header.css'
const Header = () => {
    return (
        <header className="header-container">
            <div className="logo-container">
               <img src={arlogo} alt="logo" className="logo" />
            </div>
            <div className="nav-item-container">
                  <span style={{color:"#FF7A00"}}>Home</span>
                  <span>About us</span>
                  <span>Services</span>
                  <span>QHSE</span>
                  <span>News</span>
                  <span>Career</span>
                  <span>Contact us</span>
            </div>
            
        </header>
    )
}

export default Header
