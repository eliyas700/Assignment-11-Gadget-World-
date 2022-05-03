import React from "react";
import { FaFacebook, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./Team.css";
const Team = () => {
  return (
    <div>
      <h2 style={{ color: "#4834d4" }} className="my-4 f-anton">
        Our Team Members
      </h2>
      <div className=" mb-3 team-container row justify-content-center">
        <div className="card mx-2 col-12 col-lg-4">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <img src="https://i.ibb.co/wJ9kxpM/images-6.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>Adam Milne</h3>
              <p>
                <small className="text-muted">Senior Sell Manager</small>
              </p>
              <ul>
                <li>
                  <a href="/">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FcGoogle />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaPinterest />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card mx-2 p-0 col-12 col-lg-4">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <img src="https://i.ibb.co/nnqnqT0/images-5.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>Bill Gates</h3>
              <p>
                <small className="text-muted">Head Manager</small>
              </p>
              <ul>
                <li>
                  <a href="/">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FcGoogle />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaPinterest />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card mx-2 p-0 col-12 col-lg-4">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <img src="https://i.ibb.co/RvFHkxV/images-7.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>Calude Fergueson</h3>
              <p>
                <small className="text-muted">Sales Manager</small>
              </p>
              <ul>
                <li>
                  <a href="/">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FcGoogle />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaPinterest />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
