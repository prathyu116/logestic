import React from 'react';

import './ServiceComponent.css';

const ServiceCard = (props) => {
    return (
        <div className="service-card">
            <div className="service-img" style={{height:40}}>
                <img src={props.src} alt="" style={{height:"100%"}}/>

            </div>
            <div className="service-Heading">
                 <h3>{props.heading}</h3>
                 <p style={{color:"gray"}}>{props.subhead}</p>
            </div>
            
        </div>
    )
}

export default ServiceCard
