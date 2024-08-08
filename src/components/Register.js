import {React, useState} from "react";
import { NavLink } from "react-router-dom"
import { GoArrowLeft, GoArrowRight } from "react-icons/go"
import logo from '../assets/images/registerlogo.png'
import {Domains} from './Domains'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
    
    const [passwordVisible, setPasswordVisible] = useState(false);

    return(
            <div id="register" className="flex justify-center">
                <div id="signintext" className="registertext">
                    <div id="signintextcontainer" style={{padding:'0px 16px 10px 16px'}}>
                        <div id="signintextheading">
                            <span id="sub-heading" className="sub-heading">Join the sprint</span>
                            <span id="heading" className="heading">Register</span>
                        </div>
                        <div>
                            <span className="text-sm">Have already registered? <NavLink to='/signin' className="font-semibold" style={{color:'#9A8DEC'}}>Log in</NavLink></span>
                        </div>
                    </div>
                    <div className="lg:hidden mt-4 mb-4">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div id="signininput">
                        <div>
                            <input
                            type="text"
                            placeholder="Full Name"
                            required
                            >
                            </input>
                        </div>
                        <div className="flex flex-wrap justify-between">
                            <div id="register-inputs-div" className="full-length full-lengthitem1">
                                <input type="email" placeholder="E - mail" 
                                required
                                ></input>
                            </div>
                            <div id="register-inputs-div" className="full-length relative">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Set a password"
                                required
                            />
                            <div 
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                                {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                            </div>
                        </div>
                        </div>
                        <div className="flex justify-between">
                            <div id="register-inputs-div">
                                <input type="number" placeholder="Registration Number" 
                                required
                                ></input>
                            </div>
                            <div id="register-inputs-div">
                                <input
                                type="number"placeholder="Phone Number" 
                                required></input>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div id="register-inputs-div">
                                <select>
                                    <option value="">Branch</option>
                                    <option value="1">Architecture</option>
                                    <option value="2">Biotechnology</option>
                                    <option value="3">Civil Engineering</option>
                                    <option value="4">CSE</option>
                                    <option value="5">CSE - AI & ML</option>
                                    <option value="6">Electrical Engineering</option>
                                    <option value="7">E&I</option>
                                    <option value="8">IT</option>
                                    <option value="9">Mechanical Engineering</option>
                                    <option value="10">Mechanical Engineering - AI & Robotics</option>
                                    <option value="11">Textile Engineering</option>
                                    <option value="12">Fashion & Apparel Technology</option>
                                    <option value="13">Planning</option>
                                    <option value="14">Integrated M.Sc</option>
                                    <option value="15">M.Tech</option>
                                </select>
                            </div>
                            <div id="register-inputs-div">
                                <select>
                                    <option value=''>Year</option>
                                    <option value='1st'>1st</option>
                                    <option value='2nd'>2nd</option>
                                    <option value='3rd'>3rd</option>
                                    <option value='4th'>4th</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div id="register-inputs-div">
                                <select name="first-domain" required>
                                    <option value="">First Domain</option>
                                    {       
                                        Domains.map((domain, idx) => (
                                            <option value={domain.name} key={`Domains-${idx}`}>{domain.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div id="register-inputs-div">
                                <select name="second-domain" required>
                                <option value="">Second Domain</option>
                                    {       
                                        Domains.map((domain, idx) => (
                                            <option value={domain.name} key={`Domains-${idx}`}>{domain.name}</option>
                                        ))
                                    }
                                <option value="none">none</option>
                            </select>
                            </div>
                        </div>
                        <div className="pl-4 pr-4 pt-1 pb-1 text-justify">**At max you can register for 2 domains. In case you want to enrol for only one domain then fill none in the second domain. And write 'N/A' in the Drive Link( for Second Domain ) mentioned below.</div>
                        <div>
                            <input
                            type="url"
                            placeholder="Drive Link (for First Domain)"
                            required
                            >
                            </input>
                        </div>
                        <div>
                            <input
                            type="url"
                            placeholder="Drive Link (for Second Domain)"
                            required
                            >
                            </input>
                        </div>
                        <div className="pl-4 pr-4 pt-1 pb-1 text-justify">**Create a folder in your google drive and share that link here. This is the place where you will submit your solutions for the given task. So keep this drive safely with you</div>
                    </div>
                    <div className="flex lg:justify-end justify-between gap-4 mt-8">
                        <NavLink to='/' className="flex items-center h-8 no-underline text-white border-white rounded border pl-4 pr-4 justify-center gap-1" style={{width:'90px',fontSize:'12px',fontWeight:'550'}}><GoArrowLeft/>Back</NavLink>
                        <NavLink className="flex items-center h-8 bg-white no-underline rounded border pt-1 pb-1 pl-4 pr-4 justify-center gap-1" style={{color:'#303030',border:'#303030',width:'145px',fontSize:'12px',fontWeight:'550'}}>Create Account<GoArrowRight/></NavLink>
                    </div>
                </div>
                <div><img src = {logo} alt='logo' id="registerlogo" /></div>
            </div>
    )
}

export default Register

