import React from "react";
import folder1logo from '../assets/images/folder1.png'
import folder2logo from '../assets/images/folder2.png'
import folder3logo from '../assets/images/folder3.png'
import dropdownlogo from '../assets/images/dropdown.png'
const Section5 = () => {
    return(
        <div id="section5">
            <span id="sub-heading" className="animate-bounce">Uncover the Dimensions</span>
            <span id="heading">EXPLORE DOMAINS</span>
            <br/>
            <br/>
            <div id="section5item1" className="sm:text-xl">
                <div>Navigate the Future</div>
                <div>
                    <select id="dropdown-menu">
                        <option value="">All Domains</option>
                        <option value="software">Software Domain</option>
                        <option value="hardware">Hardware Domain</option>
                        <option value="graphics">Graphics Domain</option>
                    </select>
                </div>
            </div>
            <div id="section5item2">
                <div className="sm:text-lg" id="section5foldercontainer">
                    <div id="section5folders"><figure><img src={folder1logo} alt="folder1logo"></img><figcaption>Web Dev-Frontend & Backend</figcaption></figure></div>
                    <div id="section5folders"><figure><img src={folder2logo} alt="folder2logo"></img><figcaption>UI / UX</figcaption></figure></div>
                    <div id="section5folders"><figure><img src={folder1logo} alt="folder1logo"></img><figcaption>App Dev</figcaption></figure></div>
                    <div id="section5folders"><figure><img src={folder3logo} alt="folder3logo"></img><figcaption>Internet of Things</figcaption></figure></div>
                    <div id="section5folders"><figure><img src={folder1logo} alt="folder1logo"></img><figcaption>Competitive Programming</figcaption></figure></div>
                    <div id="section5folders"><figure><img src={folder3logo} alt="folder3logo"></img><figcaption>Robot Operating System</figcaption></figure></div>
                    <div id="section5folders"><figure><img src={folder1logo} alt="folder1logo"></img><figcaption>AI / ML</figcaption></figure></div>
                    <div id="section5folders"><figure><img src={folder3logo} alt="folder3logo"></img><figcaption>Microcontroller & Embedded Systems</figcaption></figure></div>
                    <div id="section5folders"><figure><img src={folder1logo} alt="folder1logo"></img><figcaption>Blockchain</figcaption></figure></div>
                    <div id="section5folders"><figure><img src={folder2logo} alt="folder2logo"></img><figcaption>Video Editing</figcaption></figure></div>
                    <div id="section5folders"><figure><img src={folder1logo} alt="folder1logo"></img><figcaption>DevOps</figcaption></figure></div>
                    <div id="section5folders"><figure><img src={folder2logo} alt="folder2logo"></img><figcaption>Graphic Designing</figcaption></figure></div>                
                </div>
            </div>
        </div>
    )
}

export default Section5