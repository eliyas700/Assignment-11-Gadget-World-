import React from "react";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useLocation } from "react-router-dom";
const Sociallogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    const url = "https://infinite-ridge-60614.herokuapp.com/login";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: user.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("accessToken", data.accessToken);
        navigate(from, { replace: true });
      });
  }
  let errorMsg;
  if (error) {
    errorMsg = <p className="text-danger">{error?.message}</p>;
  }
  return (
    <div>
      <p>{errorMsg}</p>
      <div className="d-flex justify-content-center my-4">
        <p className="social-label">Or login with</p>
        <ul className="socials d-flex ">
          <li>
            <FaFacebookSquare color="#4867AA" size={30} />
          </li>
          <li onClick={() => signInWithGoogle()}>
            <FcGoogle size={30} />
          </li>
          <li>
            <FaGithub color="#1B1F23" size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sociallogin;
