import React from 'react'
import arlogo from './../../Assets/AR - logo.svg'
import fb from './../../Assets/Icon awesome-facebook-f.png'
import twitter from './../../Assets/Icon awesome-twitter.svg'
import youtube from './../../Assets/Icon awesome-youtube.svg'

import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer className="footer-section">

                <div className="row">
                    <div className="footer-col">
                        <div className="logo-container">
                            <img src={arlogo} alt="logo" className="logo" />
                        </div>
                        <p style={{ color: "gray", marginTop: 24, fontSize: 14, lineHeight: 2.3 }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.   atque provident vel quisquam exercitationem,?</p>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">QHSE</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Contact US</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Team</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Service Center</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Resource</h4>
                        <div className="social-links">
                            <p style={{ color: "gray", fontSize: 14, lineHeight: 2.3 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            <div className="icons">
                                <a href="#"><img src={fb} alt="facebook icon" /></a>
                                <a href="#"><img src={twitter} alt="twitter icon" /></a>
                                <a href="#"><img src={youtube} alt="youtube" /></a>
                            </div>
                        </div>

                    </div>


                </div>
                <hr style={{width:"85%",margin:"auto"}}/>
                <div className="copy-right-part" >
              
                    <p>©️2021 AR LOGISTICS.All right reserved.Designed by <span style={{ color: "#FF7A00" }}>www.arshal.in</span></p>
                </div>

            </footer>

        </>
    )
}

export default Footer
