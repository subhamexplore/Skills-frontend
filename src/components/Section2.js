import React from "react";
import discordlogo from "../assets/images/discordlogo.png";
import chatlogo from "../assets/images/chatlogo.png";
import trophylogo from "../assets/images/trophylogo.png";
import section2logo from "../assets/images/section2logo.png";

const Section2 = () => {
  return (
    <div id="section2"> 
      <div
        className="section2items sm:text-lg"
        style={{ color: "#858298", fontFamily: "Inter" }}
      >
        <span id="sub-heading" className="animate-pulse">
          What is Skills++
        </span>
        <span id="heading">PROCESS</span>
        <br />
        <br />
        <span className=" text-justify flex items-center justify-between">
          <img src={discordlogo} alt="discordlogo" className="h-9" />
          <div className="ml-3 leading-tight">
            Get <span className="text-white font-bold">registered </span>and
            join your respective domain{" "}
            <span className="text-white font-bold">discord </span>channel
            mentioned after registration
          </div>
        </span>
        <br />
        <span className="flex items-center">
          <img src={chatlogo} alt="chatlogo" className="h-9" />
          <div className="ml-3 leading-tight">
            Get one on one{" "}
            <span className="text-white font-bold">mentorship </span>from your
            members along with{" "}
            <span className="text-white font-bold">assignments </span>on start
            of each week
          </div>
        </span>
        <br />
        <span className="flex items-center">
          <img src={trophylogo} alt="trophylogo" className="h-9" />
          <div className="ml-3 leading-tight">
            Earn <span className="text-white font-bold">badges </span>on
            successful submission of assignments of 4 weeks and a{" "}
            <span className="text-white font-bold">certificate </span>at the end
            of 4th week
          </div>
        </span>
      </div>
      <div className="section2items">
        <img src={section2logo} alt="section2logo" />
      </div>
    </div>
  );
};
export default Section2;
