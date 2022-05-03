import React from "react";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const Sociallogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/");
    alert("Log in");
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
