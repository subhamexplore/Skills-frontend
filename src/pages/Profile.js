import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/profileimg.png";
import badge1logo from "../assets/images/rogue.png";
import kiddo from "../assets/images/badge1.png";
import rogue from "../assets/images/badge2.png";
import pilot from "../assets/images/badge3.png";
import astro from "../assets/images/badge4.png";
import nobadgelogo from "../assets/images/nobadge.png";
import taskslogo from "../assets/images/taskslogo.png";
import submitlogo from "../assets/images/submitlogo.png";
import usernamelogo from "../assets/images/user.png";
import emaillogo from "../assets/images/mail.png";

const Profile = ({setName}) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://skills-backend-r5yi.onrender.com/users/dashboard",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setUser(result.userData);
        setName(user.username);
        console.log(user);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [localStorage.getItem("authToken")]);
  const getBadge1 = () => {
    if (user) {
      if (user.domain1.week3.isCompleted) {
        return astro;
      } else if (user.domain1.week2.isCompleted) {
        return pilot;
      } else if (user.domain1.week1.isCompleted) {
        return rogue;
      } else if (user.domain1.week0.isCompleted) {
        return kiddo;
      } else {
        return nobadgelogo;
      }
    } else {
      return nobadgelogo;
    }
  };
  const getBadge2 = () => {
    if (user) {
      if (user.domain2.week3.isCompleted) {
        return astro;
      } else if (user.domain2.week2.isCompleted) {
        return pilot;
      } else if (user.domain2.week1.isCompleted) {
        return rogue;
      } else if (user.domain2.week0.isCompleted) {
        return kiddo;
      } else {
        return nobadgelogo;
      }
    } else {
      return nobadgelogo;
    }
  };
  const username = user ? user.username : "name";
  const email = user ? user.email : "email";
  const domain1name = user ? user.domain1.description : "Domain";
  const domain2name = user ? user.domain2.description : "Domain";

  setName(user?user.username.split(" ")[0]:"");
  localStorage.setItem("userName", user?user.username.split(" ")[0]:"")

  return (
    <div id="profile" className="flex max-w-[1084px] min-h-[591px]">
      <div className="flex items-end">
        <img
          src={img}
          alt="profileimg"
          className="w-[464px] h-[486px] mb-5"
          id="profilelogo"
        />
      </div>
      <div>
        <div id="profileheading" className="mb-3">
          <span id="sub-heading">Your Records</span>
          <span id="heading">My Profile</span>
        </div>
        <div className="lg:hidden max-w-[538px] max-h-[786px]">
          <img src={img} alt="profilelogo" className="m-auto p-4 w-auto mb-4" />
        </div>
        <div className="mb-5">
          <div className="mb-3" id="profiletext">
            <div id="userdetails">
              <div className="flex items-center gap-1 mb-1">
                <img
                  src={usernamelogo}
                  alt="usernamelogo"
                  className="h-4 w-4"
                />
                {username}
              </div>
              <div className="flex items-center gap-1 mb-1">
                <img src={emaillogo} alt="emaillogo" className="h-4 w-4" />
                {email}
              </div>
            </div>
            <div
              id="suggestion-box"
              className="min-h-[58px] rounded-lg"
              style={{ background: "#121B3C", padding: "10px 16px 10px 16px" }}
            >
              **Check your mail on every Thursday to claim the badges or
              certificates you have earned.
            </div>
          </div>
          <div className="flex max-w-[538px] flex-wrap justify-center items-center gap-[20px]">
            <div
              id="domaincards"
              className="min-h-[347px] rounded-2xl"
              style={{
                background: "#1A1635",
              }}
            >
              <div className="flex justify-around h-[220px]">
                <img
                  src={getBadge1()}
                  style={{ minHeight: "208px", padding: "16px 0px 16px 0px" }}
                />
              </div>
              <div
                className="p-3 flex flex-col gap-[10px] rounded-b-2xl"
                style={{ background: "#362D6D" }}
              >
                <h1 className="text-xl font-semibold text-white">
                  {domain1name}
                </h1>
                <div className="flex flex-col gap-3">
                  <Link
                    to="#"
                    className="flex items-center gap-1 text-xs font-medium"
                    style={{ color: "#C3C1CE" }}
                  >
                    <img
                      src={taskslogo}
                      alt="taskslogo"
                      className="h-4 w-4"
                    ></img>
                    Tasks
                  </Link>
                  <Link
                    to={user ? user.domain1.drive : ""}
                    target="_blank"
                    className="flex items-center gap-1 text-xs
                                    font-medium"
                    style={{ color: "#C3C1CE" }}
                  >
                    <img
                      src={submitlogo}
                      alt="submitlogo"
                      className="h-4 w-4"
                    ></img>
                    Submit task submissions here
                  </Link>
                </div>
              </div>
            </div>
            <div
              id="domaincards"
              className="min-h-[347px] rounded-2xl"
              style={{
                background: "#1A1635",
              }}
            >
              <div className="flex justify-around h-[220px]">
                <img
                  src={getBadge2()}
                  style={{
                    width: "111.77px",
                    minHeight: "208px",
                    padding: "16px 0px 16px 0px",
                  }}
                />
              </div>
              <div
                className="p-3 flex flex-col gap-[10px] rounded-b-2xl"
                style={{ background: "#362D6D" }}
              >
                <h1 className="text-xl font-semibold text-white">
                  {domain2name}
                </h1>
                <div className="flex flex-col gap-3">
                  <Link
                    to="#"
                    className="flex items-center gap-1 text-xs font-medium"
                    style={{ color: "#C3C1CE" }}
                  >
                    <img
                      src={taskslogo}
                      alt="taskslogo"
                      className="h-4 w-4"
                    ></img>
                    Tasks
                  </Link>
                  <Link
                    to={user ? user.domain2.drive : ""}
                    target="_blank"
                    className="flex items-center gap-1 text-xs
                                    font-medium"
                    style={{ color: "#C3C1CE" }}
                  >
                    <img
                      src={submitlogo}
                      alt="submitlogo"
                      className="h-4 w-4"
                    ></img>
                    Submit task submissions here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
