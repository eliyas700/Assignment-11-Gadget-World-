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
      <div className="team-container row justify-content-center">
        <div class="card col-12 col-lg-4">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img src="https://i.ibb.co/wJ9kxpM/images-6.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
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
        <div class="card col-12 col-lg-4">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img src="https://i.ibb.co/nnqnqT0/images-5.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
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
        <div class="card col-12 col-lg-4">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img src="https://i.ibb.co/RvFHkxV/images-7.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
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