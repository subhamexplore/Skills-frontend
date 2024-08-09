import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import logo from "../assets/images/signinlogo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const SignIn = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://skills-backend-r5yi.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      setLoading(false);
      if (data.message === "Logged in successfully") {
        toast.success(data.message);
        window.location.href = "/profile";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <>
    {loading && <Loader/>}
    <div id="signin" className={loading ? 'content blurred flex justify-center' : 'content flex justify-center'} >
      <div id="signintext">
        <div id="signintextcontainer" style={{ padding: "0px 16px 10px 16px" }}>
          <div id="signintextheading">
            <span id="sub-heading" className="sub-heading">
              Welcome back!!
            </span>
            <span id="heading" className="heading">
              LOG IN
            </span>
          </div>
          <div>
            <span className="text-sm">
              Haven't registered yet?{" "}
              <Link
                to="/register"
                className="font-semibold"
                style={{ color: "#9A8DEC" }}
              >
                Register
              </Link>
            </span>
          </div>
        </div>
        <div className="lg:hidden">
          <img src={logo} alt="logo" />
        </div>
        <div id="signininput">
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="E - mail"
              required
            ></input>
          </div>
          <div>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              required
            ></input>
          </div>
          <div id="forgotpassworddiv" className="text-right">
            <Link to="#" className="cursor-help" style={{ color: "#9A8DEC" }}>
              Forgot Password ?
            </Link>
          </div>
          <div className="text-right text-white font-semibold" id="help">
            Kindly visit Zairza
          </div>
        </div>
        <div className="flex lg:justify-end justify-between gap-4 mt-8">
          <Link
            to="/"
            className="flex items-center h-7 no-underline text-white border-white rounded border pl-4 pr-4 justify-center gap-1"
            style={{ width: "90px", fontSize: "12px", fontWeight: "550" }}
          >
            <GoArrowLeft />
            Back
          </Link>
          <Link
            className="flex items-center h-7 bg-white no-underline rounded border pt-1 pb-1 pl-4 pr-4 justify-center gap-1"
            style={{
              color: "#303030",
              border: "#303030",
              width: "90px",
              fontSize: "12px",
              fontWeight: "550",
            }}
            onClick={handleLogin}
          >
            Log In
            <GoArrowRight />
          </Link>
        </div>
      </div>
      <div>
        <img src={logo} alt="logo" id="signinlogo" />
      </div>
    </div>
    </>
  );
};

export default SignIn;
