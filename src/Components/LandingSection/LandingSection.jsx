import React from 'react';
import "./LandingSection.css";
import spot from './../../Assets/spot - vector.svg';
import spotman from './../../Assets/spotlight - image - 01.png';
import moreusimg from './../../Assets/more - us - image.png';
import bgyellow from './../../Assets/background - thoran.svg';
export const LandingSection = () => {
    return (
        <>
            <div className="Landing-section">
                <div className="landing-row1">
                    <div className="landing-heading-container">
                        <h1 className="landing-heading">Welcome to <span style={{ color: "#FF7A00" }}>AR logistics</span> </h1>
                        <p className="landing-para">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Maiores atque sint commodi eveniet, voluptas quod odit</p>
                        <button>Learn more</button>
                    </div>
                    <div className="landing-image-container">
                        <div className="spot-image-container">
                            <img src={spot} alt="spot-image" className="spot-image" />
                        </div>
                        <div className="spot-man-container">
                            <img src={spotman} alt="Image" className="spot-man-image" />

                        </div>
                    </div>

                </div>
                {/* Row2 */}
                <div className="landing-row2">
                    <div className="landing-row2-img-container">

                        <div className="landing-vector">
                            <img src={bgyellow} alt="vectorimg" className="vector-img"/>
                        </div>
                        <div className="landing-moreus-img">
                            <img src={moreusimg} alt="Image" className="moreus-img"/>

                        </div>

                    </div>
                    <div className="landing-row2-about us-container">
                        <p style={{ color: "#FF7A00" }}> ABOUT US</p>
                        <h3><span style={{ color: "#FF7A00" }}>Know</span> More Us</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur <span style={{ color: "#FF7A00" }}>AR World</span> adipisicing elit. Eveniet mollitia error, fugiat eius veniam eaque nesciunt ipsum? Maximeimus.</p>
                        <button>Learn More</button>
                    </div>

                </div>
            </div>
        </>
    )
}
