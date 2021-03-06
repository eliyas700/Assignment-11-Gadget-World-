import React, { useRef } from "react";
import { GrMail } from "react-icons/gr";
import { FiLock } from "react-icons/fi";
import Sociallogin from "../SocialLogin/Sociallogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
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

  let errorMessage;
  if (error) {
    errorMessage = <p>{error.message}</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    // event.stopPropagation();
    const email = event.target.email.value;
    const password = event.target.pass.value;
    await signInWithEmailAndPassword(email, password);
    const url = "https://infinite-ridge-60614.herokuapp.com/login";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        navigate(from, { replace: true });
        event.target.reset();
      });
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    email
      ? toast("Check Your Email to Reset Password")
      : toast("Sorry!Type Your Email");
    await sendPasswordResetEmail(email);
  };
  return (
    <section className="signup">
      <PageTitle title="Log In "></PageTitle>
      <div className="container">
        <div className="signup-content row justify-content-between">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="m-0 col-12 col-lg-6"
          >
            <h2
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className=" py-3"
            >
              Log In
            </h2>
            <form
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-delay="70"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              onSubmit={handleLogin}
              className="register-form w-75 mx-auto"
              id="register-form"
            >
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="form-group aliign d-flex"
              >
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
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="form-group d-flex align-items-center"
              >
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

              <p
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Forget Password ?{" "}
                <button onClick={resetPassword} className="btn btn-link">
                  Reset Password
                </button>
              </p>
              <div
                data-aos="zoom-in-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="form-group form-button"
              >
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Log In"
                />
              </div>
              <p className="text-danger">{errorMessage}</p>
            </form>
            <p
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              New at Gadget World?{" "}
              <Link to="/signup" className="text-gadget btn btn-link">
                Create an Account
              </Link>
            </p>

            <div
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-delay="70"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Sociallogin></Sociallogin>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="signup-image col-12 col-lg-6"
          >
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
