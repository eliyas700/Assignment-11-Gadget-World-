import React, { useRef } from "react";
import { GrMail } from "react-icons/gr";
import { FiLock } from "react-icons/fi";
import Sociallogin from "../SocialLogin/Sociallogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import axios from "axios";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import Spinner from "../../Spinner/Spinner";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [sendPasswordResetEmail, sending, Reseterror] =
    useSendPasswordResetEmail(auth);
  let from = location.state?.from?.pathname || "/";
  const emailRef = useRef("");
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.pass.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post("http://localhost:5000/login", { email });
    console.log(data);
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    email ? toast("Check Your Email to Reset") : toast("Sorry!Type Your Email");
    await sendPasswordResetEmail(email);
  };
  return (
    <section className="signup">
      <PageTitle title="Log In "></PageTitle>
      <div className="container">
        <div className="signup-content row justify-content-between">
          <div className="m-0 col-12 col-lg-6">
            <h2 className=" py-3">Log In</h2>
            <form
              onSubmit={handleLogin}
              className="register-form w-75 mx-auto"
              id="register-form"
            >
              <div className="form-group aliign d-flex">
                <label htmlFor="email">
                  <GrMail />
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  name="email"
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
                  id="pass"
                  placeholder="Password"
                />
              </div>

              <p>
                Forget Password ?{" "}
                <button onClick={resetPassword} className="btn btn-link">
                  Reset Password
                </button>
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
