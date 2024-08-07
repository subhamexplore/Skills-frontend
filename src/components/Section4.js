import React from "react";
import badge1 from '../assets/images/badge1.png'
import badge2 from '../assets/images/badge2.png'
import badge3 from '../assets/images/badge3.png'
import badge4 from '../assets/images/badge4.png'

const Section4 = () => {
    return(
        <div id="section4">
            <div id="section4text">
                <span id="sub-heading" className="animate-pulse">Badges and Certificate</span>
                <span id="heading">PERKS</span>
                <span className="lg:text-lg">Level up and earn a new badge each week,and collect all four to recieve a certificate of completion after your fourth successful submission, marking your mastery of the program</span>
            </div>
            <div id="section4imgcontainer" className="w-full">
                <div><img src={badge1} alt="badge1" className="max-h-[315px]" id="badge1"></img></div>
                <div><img src={badge2} alt="badge2" className="max-h-[340px]"></img></div>
                <div><img src={badge3} alt="badge3" className="max-h-[340px]"></img></div>
                <div><img src={badge4} alt="badge4" className="max-h-[340px]"></img></div>                
            </div>
        </div>
    )
} 
export default Section4