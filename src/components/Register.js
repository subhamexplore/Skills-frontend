import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import logo from "../assets/images/registerlogo.png";
import { Domains } from "./Domains";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const nav = useNavigate();
  const [parDomain, setParDomain] = useState(Domains)
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

  const handleRegister = async () => {
    if(
      !formData.username ||
      !formData.email ||
      !formData.regNo ||
      !formData.phNo ||
      !formData.branch ||
      !formData.year ||
      !formData.password ||
      !formData.domain1.description ||
      !formData.domain1.drive

    ){
      toast.error("Fill all the details");
      return;
    }
    if(formData.domain2.description && !formData.domain2.drive){
      toast.error("Fill all the details");
      return;
    }

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
      console.log("data " + data);

      if (data.message === "Signed up successfully") {
        toast.success(data.message);
        nav("/signin");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDomain = (e) => {
    handleDomainChange(e,"domain1");
    const p = Domains.filter((elem)=>{
      return elem.name!==e.target.value
    })
    setParDomain(p);
  }

  console.log(formData);

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
        <form id="signininput">
          <div>
            <input
              name="username"
              type="text"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              required
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
                required
              ></input>
            </div>
            <div id="register-inputs-div" className="full-length relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Set a password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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
              <input
                type="number"
                placeholder="Registration Number"
                name="regNo"
                value={formData.regNo}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div id="register-inputs-div">
              <input
                name="phNo"
                type="number"
                placeholder="Phone Number"
                value={formData.phNo}
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div className="flex justify-between">
            <div id="register-inputs-div">
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
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
              <select name="year" value={formData.year} onChange={handleChange} required>
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
                onChange={(e)=>{handleDomain(e)}}
                required
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
                onChange={(e) => handleDomainChange(e, "domain2")}
              >
                <option value="">Second Domain</option>
                {parDomain.map((domain, idx) => (
                  <option value={domain.name} key={`Domains-${idx}`}>
                    {domain.name}
                  </option>
                ))}
                <option value="none">none</option>
              </select>
            </div>
          </div>
          <div className="pl-4 pr-4 pt-1 pb-1 text-justify">
            **At max you can register for 2 domains. In case you want to enrol
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
              required
            ></input>
          </div>
          <div>
            {formData.domain2.description === ""? "" : (
              <input
              type="url"
              placeholder="Drive Link (for Second Domain)"
              name="drive"
              value={formData.domain2.drive}
              onChange={(e) => handleDomainChange(e, "domain2")}
            ></input>
            )}
          </div>
          <div className="pl-4 pr-4 pt-1 pb-1 text-justify">
            **Create a folder in your google drive and share that link here.
            This is the place where you will submit your solutions for the given
            task. So keep this drive safely with you
          </div>
        </form>
        <div className="flex lg:justify-end justify-between gap-4 mt-8">
          <NavLink
            to="/"
            className="flex items-center h-8 no-underline text-white border-white rounded border pl-4 pr-4 justify-center gap-1"
            style={{ width: "90px", fontSize: "12px", fontWeight: "550" }}
          >
            <GoArrowLeft />
            Back
          </NavLink>
          <NavLink
            className="flex items-center h-8 bg-white no-underline rounded border pt-1 pb-1 pl-4 pr-4 justify-center gap-1"
            style={{
              color: "#303030",
              border: "#303030",
              width: "145px",
              fontSize: "12px",
              fontWeight: "550",
            }}
            onClick={handleRegister}
          >
            Create Account
            <GoArrowRight />
          </NavLink>
        </div>
      </div>
      <div>
        <img src={logo} alt="logo" id="registerlogo" />
      </div>
    </div>
  );
};

export default Register;
