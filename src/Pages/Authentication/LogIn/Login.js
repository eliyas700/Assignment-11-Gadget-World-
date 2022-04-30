import React from "react";
import { GrMail } from "react-icons/gr";
import { FiLock } from "react-icons/fi";
import Sociallogin from "../SocialLogin/Sociallogin";
import { Link } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
const Login = () => {
  return (
    <section className="signup">
      <PageTitle title="Log In "></PageTitle>
      <div className="container">
        <div className="signup-content row justify-content-between">
          <div className="m-0 col-12 col-lg-6">
            <h2 className=" py-3">Log In</h2>
            <form className="register-form w-75 mx-auto" id="register-form">
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

              <p>
                Forget Password ?{" "}
                <button className="btn btn-link">Reset Password</button>
              </p>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Log In"
                />
              </div>
            </form>
            <p>
              New at Gadget World?{" "}
              <Link to="/signup" className="text-gadget btn btn-link">
                Create an Account
              </Link>
            </p>

            <div>
              <Sociallogin></Sociallogin>
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

export default Login;
