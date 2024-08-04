import React from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import logo from '../assets/images/registerlogo.png';
import { Domains } from './Domains';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <div id="register" className="flex justify-center">
            <div id="signintext" className="registertext">
                <div id="signintextcontainer" style={{ padding: '0px 16px 10px 16px' }}>
                    <div id="signintextheading">
                        <span id="sub-heading" className="sub-heading">Join the sprint</span>
                        <span id="heading" className="heading">Register</span>
                    </div>
                    <div>
                        <span className="text-sm">Have already registered? <Link to='/signin' className="font-semibold" style={{ color: '#9A8DEC' }}>Log in</Link></span>
                    </div>
                </div>
                <div className="lg:hidden mt-4 mb-4">
                    <img src={logo} alt="logo" />
                </div>
                <div id="signininput">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <div id="register-inputs-div" className="full-length full-lengthitem1 relative">
                            <input type="email" placeholder="E - mail" required />
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
                            <input type="number" placeholder="Registration Number" required />
                        </div>
                        <div id="register-inputs-div">
                            <input type="number" placeholder="Phone Number" required />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div id="register-inputs-div" className="relative">
                            <input list="branch" name="branch" placeholder="Branch" required />
                            <datalist id="branch">
                                <option value="Architecture" />
                                <option value="Biotechnology" />
                                <option value="Civil Engineering" />
                                <option value="CSE" />
                                <option value="CSE-AI & ML" />
                                <option value="Electrical Engineering" />
                                <option value="E&I" />
                                <option value="ECE" />
                                <option value="IT" />
                                <option value="ME" />
                                <option value="ME-AI & Robotics" />
                                <option value="Textile Engineering" />
                                <option value="Planning" />
                            </datalist>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <FaChevronDown style={{ width: '16px', height: '16px', padding: '0px 4px', opacity: '1' }} />
                            </div>
                        </div>
                        <div id="register-inputs-div" className="relative">
                            <input list="year" name="year" placeholder="Year" required />
                            <datalist id="year">
                                <option value="1st" />
                                <option value="2nd" />
                                <option value="3rd" />
                                <option value="4th" />
                            </datalist>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <FaChevronDown style={{ width: '16px', height: '16px', padding: '0px 4px', opacity: '1' }} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div id="register-inputs-div" className="relative">
                            <input list="first-domain" name="first-domain" placeholder="First Domain" required />
                            <datalist id="first-domain">
                                {Domains.map((domain, idx) => (
                                    <option value={domain.name} key={`Domains-${idx}`} />
                                ))}
                            </datalist>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <FaChevronDown style={{ width: '16px', height: '16px', padding: '0px 4px', opacity: '1' }} />
                            </div>
                        </div>
                        <div id="register-inputs-div" className="relative">
                            <input list="second-domain" name="second-domain" placeholder="Second Domain" required />
                            <datalist id="second-domain">
                                {Domains.map((domain, idx) => (
                                    <option value={domain.name} key={`Domains-${idx}`} />
                                ))}
                                <option value="none" />
                            </datalist>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <FaChevronDown style={{ width: '16px', height: '16px', padding: '0px 4px', opacity: '1' }} />
                            </div>
                        </div>
                    </div>
                    <div className="pl-4 pr-4 pt-1 pb-1 text-justify">
                        **At max you can register for 2 domains. In case you want to enroll for only one domain then fill none in the second domain. And write 'N/A' in the Drive Link (for Second Domain) mentioned below.
                    </div>
                    <div>
                        <input type="url" placeholder="Drive Link (for First Domain)" required />
                    </div>
                    <div>
                        <input type="url" placeholder="Drive Link (for Second Domain)" required />
                    </div>
                    <div className="pl-4 pr-4 pt-1 pb-1 text-justify">
                        **Create a folder in your google drive and share that link here. This is the place where you will submit your solutions for the given task. So keep this drive safely with you.
                    </div>
                </div>
                <div className="flex lg:justify-end justify-between gap-4 mt-8">
                    <Link
                        to='/'
                        className="flex items-center no-underline rounded justify-center"
                        style={{
                            width: '90px',
                            height: '28px',
                            padding: 'var(--p-space-150) var(--p-space-300)',
                            gap: 'var(--p-space-050)',
                            borderRadius: 'var(--p-border-radius-button)',
                            border: '1px solid #FFFFFF',
                            opacity: 1, 
                            fontSize: '12px',
                            fontWeight: 550,
                            color: 'white',
                            background: 'transparent'
                        }}
                    >
                        <GoArrowLeft />Back
                    </Link>
                    <Link
                        className="flex items-center no-underline rounded justify-center"
                        style={{
                            width: '133px',
                            height: '28px',
                            padding: 'var(--p-space-150) var(--p-space-300)',
                            gap: 'var(--p-space-050)',
                            borderRadius: 'var(--p-border-radius-button)',
                            opacity: 1, 
                            fontSize: '12px',
                            fontWeight: 550,
                            color: '#303030',
                            background: '#FFFFFF',
                            boxShadow: '0px 1px 0px 0px #E3E3E3 inset, 1px 0px 0px 0px #E3E3E3 inset, -1px 0px 0px 0px #E3E3E3 inset, 0px -1px 0px 0px #B5B5B5 inset',
                        }}
                    >
                        Create Account<GoArrowRight />
                    </Link>
                </div>
            </div>
            <div><img src={logo} alt="logo" id="registerlogo" /></div>
        </div>
    );
};

export default Register;
