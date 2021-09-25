import React from 'react';
import CommonHeadingSubHeading from '../CommonHeadingSubHeading/CommonHeadingSubHeading';

import map from './../../Assets/map - image.png'
import locationimg from './../../Assets/location - icon.svg'
import './Location.css'
const Location = () => {
    return (
        <>
            <div className="location-container">
                <div className="location-heading">
                    <CommonHeadingSubHeading
                        text1="OUR LOCATION" textoange="Building" text2="That Have Stood"
                        text3=""
                    />

                </div>
                <div className="location-img-container">
                    <div className="location-img">
                        <img src={map} alt="image" />
                    </div>
                    <div className="location-icon1">
                        <img src={locationimg} alt="locationIMG" />

                    </div>
                    <div className="location-icon2">
                        <img src={locationimg} alt="locationIMG" />
                        <div className="location-icon-heading1">
                            <p style={{ fontSize: 10, color: "#FF7A00", fontWeight: 500 }}>Africa</p>
                            <p style={{ fontSize: 9, color: "gray" }}>25 Building</p>
                        </div>

                    </div>
                    <div className="location-icon3">
                        <img src={locationimg} alt="locationIMG" />

                    </div>
                    <div className="location-icon4">
                        <img src={locationimg} alt="locationIMG" />
                        <div className="location-icon-heading2">
                            <p style={{ fontSize: 10, color: "#FF7A00", fontWeight: 500 }}>Swedan</p>
                            <p style={{ fontSize: 9, color: "gray" }}>25 Building</p>
                        </div>

                    </div>
                    <div className="location-icon5">
                        <img src={locationimg} alt="locationIMG" />

                    </div>
                    <div className="location-icon6">
                        <img src={locationimg} alt="locationIMG" />

                    </div>
                    <div className="location-icon7">
                        <img src={locationimg} alt="locationIMG" />
                        <div className="location-icon-heading3">
                            <p style={{ fontSize: 10, color: "#FF7A00", fontWeight: 500 }}>Kerala</p>
                            <p style={{ fontSize: 9, color: "gray" }}>25 Building</p>
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}

export default Location
