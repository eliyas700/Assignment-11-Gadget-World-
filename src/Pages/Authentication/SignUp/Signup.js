import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaGithub,
  FaUserAlt,
  FaLock,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FiLock } from "react-icons/fi";
import "./SignUp.css";
const Signup = () => {
  return (
    <section className="signup">
      <div className="container">
        <div className="signup-content row justify-content-between">
          <div className="m-0 col-12 col-lg-6">
            <h2 className=" py-3">Create Account</h2>
            <form className="register-form w-75 mx-auto" id="register-form">
              <div className="form-group d-flex align-items-center">
                <label className="me-2 " for="name">
                  <FaUserAlt />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group aliign d-flex">
                <label for="email">
                  <GrMail />
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group d-flex align-items-center">
                <label for="pass">
                  <FiLock />
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Password"
                />
              </div>
              <div className="form-group d-flex align-items-center">
                <label for="re-pass">
                  <FaLock />
                </label>
                <input
                  type="password"
                  name="re_pass"
                  id="re_pass"
                  placeholder="Repeat your password"
                />
              </div>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck">
                    I accept the terms and Conditions of <b>Gadget-World</b>
                  </label>
                </div>
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                />
              </div>
            </form>
            <button className="text-gadget btn btn-link">
              Already have an account?
            </button>
            <div class="d-flex justify-content-center my-4">
              <p class="social-label">Or login with</p>
              <ul class="socials d-flex ">
                <li>
                  <FaFacebookSquare color="#4867AA" size={30} />
                </li>
                <li>
                  <FaTwitter color="#1DA1F2" size={30} />
                </li>
                <li>
                  <FaGithub color="#1B1F23" size={30} />
                </li>
              </ul>
            </div>
          </div>
          <div className="signup-image col-12 col-lg-6">
            <figure>
              <img
                src="https://i.ibb.co/Bq58st5/create-account-illustration-vector-removebg-preview.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
