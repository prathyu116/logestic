import React from 'react'

const CommonHeadingSubHeading = (props) => {
    return (
        <div>
             <p style={{ color: "#FF7A00",fontSize:12,fontWeight:600 }}>{props.text1}</p>
                <h1 style={{color:"#080133"}}><span style={{ color: "#FF7A00" }}>{props.textoange}</span> {props.text2}</h1>
                <p style={{color:"gray",marginTop:"30px"}}>{props.text3}</p>
        </div>
    )
}

export default CommonHeadingSubHeading
