import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FiLock } from "react-icons/fi";
import { toast } from "react-toastify";
import "./SignUp.css";
import Sociallogin from "../SocialLogin/Sociallogin";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [errorMsg, setErrorMsg] = useState("");
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const location = useLocation();
  const [sendEmailVerification, sending, verificationerror] =
    useSendEmailVerification(auth);

  let from = location.state?.from?.pathname || "/";
  let errorMessage;
  if (error) {
    errorMessage = error.message;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.pass.value;
    const confirmPass = event.target.re_pass.value;
    if (password.length < 6) {
      return setErrorMsg("Password should Have At least 6 Characters");
    }
    if (password === confirmPass && !error) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      toast("Creating User ");
      await sendEmailVerification();
      toast("Verification Email Sent");
    } else {
      return setErrorMsg("Sorry! Password Didn't Match.");
    }
  };
  return (
    <section className="signup">
      <PageTitle title="Sign Up "></PageTitle>
      <div className="container">
        <div className="signup-content row justify-content-between">
          <div className="m-0 col-12 col-lg-6">
            <h2 className=" py-3">Create Account</h2>
            <form
              onSubmit={handleSubmit}
              className="register-form w-75 mx-auto"
              id="register-form"
            >
              <div className="form-group d-flex align-items-center">
                <label className="me-2 " htmlFor="name">
                  <FaUserAlt />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group aliign d-flex">
                <label htmlFor="email">
                  <GrMail />
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group d-flex align-items-center">
                <label htmlFor="pass">
                  <FiLock />
                </label>
                <input
                  type="password"
                  name="pass"
                  required
                  id="pass"
                  placeholder="Password"
                />
              </div>
              <div className="form-group d-flex align-items-center">
                <label htmlFor="re-pass">
                  <FaLock />
                </label>
                <input
                  type="password"
                  name="re_pass"
                  required
                  id="re_pass"
                  placeholder="Repeat your password"
                />
              </div>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onClick={() => setChecked(!checked)}
                    id="gridCheck"
                  />
                  <label
                    className={!checked ? "text-danger" : "text-success"}
                    htmlFor="gridCheck"
                  >
                    I accept the terms and Conditions of <b>Gadget-World</b>
                  </label>
                </div>
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  disabled={!checked}
                  className="form-submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="text-danger my-2">{errorMsg || errorMessage}</p>
            <Link to="/login" className="text-gadget text-start ">
              Already have an account?
            </Link>
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

export default Signup;
