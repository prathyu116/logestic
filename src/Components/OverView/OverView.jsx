import React from 'react';
import CommonHeadingSubHeading from '../CommonHeadingSubHeading/CommonHeadingSubHeading';
import bground from './../../Assets/background - thoran.svg';
import leadershipest from './../../Assets/leadershipest - image.png';
import './OverView.css';


const OverView = () => {
    return (
        <>

            <div className="overview-container">
                <div className="overview-left">
                    <CommonHeadingSubHeading
                        text1="OVERVIEW" textoange="AR logistic's" text2="QHSE Leadershipest Solution"
                        text3=" Lorem ipsum dolor sit it amet consectetur adipisicing elit. Eveniet mollitia error, fugiat eius veniam eaque nesciunt ipsum? Maximeimus."
                    />
                    <button>Learn More</button>
                </div>
                <div className="overview-right">


                    <div className="overview-leadership-img">
                        <img src={leadershipest} alt="image" />
                    </div>

                </div>

                <div className="overview-bg-img-container">
                    <img src={bground} alt="image" />

                </div>
            </div>
            


        </>
    )
}

export default OverView
