import React from 'react'
import services1 from './../../Assets/services - image.svg'
import services2 from './../../Assets/Measurment - image.svg'
import services3 from './../../Assets/services - image.svg'
import services4 from './../../Assets/industrial - image.svg'
import ServiceCard from './ServiceCard';

import './ServiceComponent.css'
import CommonHeadingSubHeading from '../CommonHeadingSubHeading/CommonHeadingSubHeading'
const ServiceComponent = () => {
    return (
        <>
        <div className="service-section-container">
            {/* heading */}
            <div className="service-section-heading-container">
                {/* <p style={{ color: "#FF7A00",fontSize:12,fontWeight:600 }}>OUR SERVICES</p>
                <h1 style={{color:"#080133"}}><span style={{ color: "#FF7A00" }}>Best</span> Solution For You</h1>
                <p style={{color:"gray",marginTop:"30px"}}>Lorem, ipsum dolor lo sit amet  adipisicing elit. Facilis, saepe ex? Error, neque voluptate nobis eveniet, ali veniam, repellat iste Error, neque voluptate nobis eveniet, ali veniam, repellat ist!</p> */}
                <CommonHeadingSubHeading 
                    text1="OUR SERVICES" textoange="Best" text2="Solution For You"
                    text3="Lorem, ipsum dolor lo sit amet  adipisicing elit. Facilis, saepe ex? Error, neque voluptate nobis eveniet, ali veniam, repellat iste Error, neque voluptate nobis eveniet, ali veniam, repellat ist!"
                />
            </div>
            {/* card */}
            <div className="service-section-card-container">
                <ServiceCard src={services1} heading="AR Logistics Well Services"
                subhead=" ipsum dolor lo sit amet  adipisicing elit. Facilis, saepe ex? Error, neque voluptate nobis eveniet,"
                />
                <ServiceCard src={services2} heading="AR Logistics Well Services"
                subhead=" ipsum dolor lo sit amet  adipisicing elit. Facilis, saepe ex? Error, neque voluptate nobis eveniet,"
                />
                <ServiceCard src={services3} heading="AR Logistics Well Services"
                subhead=" ipsum dolor lo sit amet  adipisicing elit. Facilis, saepe ex? Error, neque voluptate nobis eveniet,"
                />
                <ServiceCard src={services4} heading="AR Logistics Well Services"
                subhead=" ipsum dolor lo sit amet  adipisicing elit. Facilis, saepe ex? Error, neque voluptate nobis eveniet,"
                />
               
            </div>
            {/* button */}
            <div>
                <button>Learn More</button>

            </div>
            
            
        </div>
        </>
    )
}

export default ServiceComponent;
