import React from 'react'
import CommonHeadingSubHeading from '../CommonHeadingSubHeading/CommonHeadingSubHeading';
import searchBG from '../../Assets/background - work for us.png'
import uploadIMG from '../../Assets/Icon feather-upload.png'
import person1 from '../../Assets/person 1.jpg'
import './PeopleReview.css'
import ReviewCard from './ReviewCard';
const PeopleReview = () => {
    return (
        <>
         <div className="review-container">
             <div className="review-heading">
                 <CommonHeadingSubHeading 
                  text1="TESTIMONIAL" textoange="What" text2="People Say About Us"
                  text3=""
                 />

             </div>
             <div className="review-card-container">
                 <ReviewCard src={person1} info=" unknown printer took a galley of type and scrambled it to make a type specimen book"
                 name="Angella"
                 position="CEO of Babil LTD"
                 
                 />

             </div>
             <div className="work-for-us-container">
                 <div className="background-search-img">
                 <img src={searchBG} alt="IMAGE" />

                 </div>
                 <div className="inside-search-box-container">
                     <h2> <span style={{color:"#FF7A00"}}>Want</span> to work for us ?</h2>
                     <p style={{color:"gray",fontWeight:600}}>If you are readt to join AR logistics fsmily please checkout
                     the list of current vaccancies with our regular update.A cover letter emcouraged along
                     with your CV</p>
                     <div className="input-box">
                     <input type="text" id="text1" placeholder="Jhon Deo Resume.pdf"/>
                     <img src={uploadIMG} alt="" />
                      <button>Send</button>
                       
                     </div>
                    

                 </div>
                

             </div>

         </div>
            
        </>
    )
}

export default PeopleReview;
