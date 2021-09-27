import React from 'react';
import star from './../../Assets/Icon awesome-star.png'
import './PeopleReview.css';

const ReviewCard = (props) => {
    return (
        <div className="review-card">
            <div className="top">
                <img src={props.src} alt="image" srcset="" />

            </div>
            <div className="info-review">
                <p style={{textAlign:"left",fontSize:15,color:"gray"}}>{props.info}</p>
                
               
               <hr style={{marginTop:20}}/>
           
            </div>
           
            <div className="reviw-footer">
                <div className="name-position">
                    <h4 style={{textAlign:"left"}}>{props.name}</h4>
                    <p>{props.position}</p>

                </div>
                <div className="rating-star">
                        <img src={star} alt="star image" />
                        <img src={star} alt="star image" />
                        <img src={star} alt="star image" />
                        <img src={star} alt="star image" />
                        <img src={star} alt="star image" />
                </div>
                
            </div>
            
        </div>
    )
}

export default ReviewCard

