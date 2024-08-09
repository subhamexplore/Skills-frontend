import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import logo from "../assets/images/registerlogo.png";
import { Domains } from "./Domains";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    regNo: "",
    phNo: "",
    branch: "",
    year: "",
    password: "",
    domain1: {
      description: "",
      drive: "",
    },
    domain2: {
      description: "",
      drive: "",
    },
  });

  const [selectedFirstDomain, setSelectedFirstDomain] = useState("");
  const [selectedSecondDomain, setSelectedSecondDomain] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDomainChange = (e, domain) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [domain]: {
        ...formData[domain],
        [name]: value,
      },
    });
  };

  const handleFirstDomainChange = (e) => {
    const selectedDomainName = e.target.value;
    setSelectedFirstDomain(selectedDomainName);
    setFormData({
      ...formData,
      domain1: {
        ...formData.domain1,
        description: selectedDomainName,
      },
    });

    if (selectedSecondDomain === selectedDomainName) {
      setSelectedSecondDomain("");
      setFormData({
        ...formData,
        domain2: {
          ...formData.domain2,
          description: "",
        },
      });
    }
  };

  const handleSecondDomainChange = (e) => {
    const selectedDomainName = e.target.value;
    setSelectedSecondDomain(selectedDomainName);
    setFormData({
      ...formData,
      domain2: {
        ...formData.domain2,
        description: selectedDomainName,
      },
    });
  };

  const handleRegister = async () => {
    try {
      const response = await fetch(
        "https://skills-backend-r5yi.onrender.com/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.message === "User already exists") {
        alert(data.message);
        window.location.reload();
      } else {
        alert(data.message);
        nav("/signin");
      }
    } catch (error) {
      alert("Failed! Try again.");
    }
  };

  return (
    <div id="register" className="flex justify-center">
      <div id="signintext" className="registertext">
        <div id="signintextcontainer" style={{ padding: "0px 16px 10px 16px" }}>
          <div id="signintextheading">
            <span id="sub-heading" className="sub-heading">
              Join the sprint
            </span>
            <span id="heading" className="heading">
              Register
            </span>
          </div>
          <div>
            <span className="text-sm">
              Have already registered?{" "}
              <NavLink
                to="/signin"
                className="font-semibold"
                style={{ color: "#9A8DEC" }}
              >
                Log in
              </NavLink>
            </span>
          </div>
        </div>
        <div className="lg:hidden mt-4 mb-4">
          <img src={logo} alt="logo" />
        </div>
        <div id="signininput">
          <div>
            <input
              name="username"
              type="text"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex flex-wrap justify-between">
            <div
              id="register-inputs-div"
              className="full-length full-lengthitem1"
            >
              <input
                name="email"
                type="email"
                placeholder="E - mail"
                value={formData.email}
                onChange={handleChange}
              ></input>
            </div>
            <div id="register-inputs-div" className="full-length relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Set a password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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
              <input
                type="number"
                placeholder="Registration Number"
                name="regNo"
                value={formData.regNo}
                onChange={handleChange}
              ></input>
            </div>
            <div id="register-inputs-div">
              <input
                name="phNo"
                type="number"
                placeholder="Phone Number"
                value={formData.phNo}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="flex justify-between">
            <div id="register-inputs-div">
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
              >
                <option value="">Branch</option>
                <option value="Architecture">Architecture</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="CSE">CSE</option>
                <option value="CSE - AI & ML">CSE - AI & ML</option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="E&I">E&I</option>
                <option value="IT">IT</option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Mechanical Engineering - AI & Robotics">
                  Mechanical Engineering - AI & Robotics
                </option>
                <option value="Textile Engineering">Textile Engineering</option>
                <option value="Fashion & Apparel Technology">
                  Fashion & Apparel Technology
                </option>
                <option value="Planning">Planning</option>
                <option value="Integrated M.Sc">Integrated M.Sc</option>
                <option value="M.Tech">M.Tech</option>
              </select>
            </div>
            <div id="register-inputs-div">
              <select name="year" value={formData.year} onChange={handleChange}>
                <option value="">Year</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between">
            <div id="register-inputs-div">
              <select
                name="description"
                value={formData.domain1.description}
                onChange={handleFirstDomainChange}
              >
                <option value="">First Domain</option>
                {Domains.map((domain, idx) => (
                  <option value={domain.name} key={`Domains-${idx}`}>
                    {domain.name}
                  </option>
                ))}
              </select>
            </div>
            <div id="register-inputs-div">
              <select
                name="description"
                value={formData.domain2.description}
                onChange={handleSecondDomainChange}
              >
                <option value="">Second Domain</option>
                {Domains.filter((domain) => domain.name !== selectedFirstDomain)
                  .map((domain, idx) => (
                    <option value={domain.name} key={`AvailableDomains-${idx}`}>
                      {domain.name}
                    </option>
                  ))}
                <option value="none">none</option>
              </select>
            </div>
          </div>
          <div className="pl-4 pr-4 pt-1 pb-1 text-justify">
            **At max you can register for 2 domains. In case you want to enroll
            for only one domain then fill none in the second domain. And write
            'N/A' in the Drive Link( for Second Domain ) mentioned below.
          </div>
          <div>
            <input
              type="url"
              name="drive"
              placeholder="Drive Link (for First Domain)"
              value={formData.domain1.drive}
              onChange={(e) => handleDomainChange(e, "domain1")}
            ></input>
          </div>
          <div>
            <input
              type="url"
              name="drive"
              placeholder="Drive Link (for Second Domain)"
              value={formData.domain2.drive}
              onChange={(e) => handleDomainChange(e, "domain2")}
            ></input>
          </div>
          <div className="flex justify-between mb-4 mt-4">
            <div>
              <button className="form-back-btn">
                <GoArrowLeft
                  size="20"
                  style={{ marginTop: "1.5px", marginRight: "5px" }}
                />
                Back
              </button>
            </div>
            <div>
              <button className="form-next-btn" onClick={handleRegister}>
                Create Account
                <GoArrowRight
                  size="20"
                  style={{ marginTop: "1.5px", marginLeft: "5px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="registerimagediv">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Register;
