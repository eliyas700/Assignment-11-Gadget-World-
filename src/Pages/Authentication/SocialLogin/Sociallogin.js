import React from "react";
import { FaFacebookSquare, FaTwitter, FaGithub } from "react-icons/fa";
const Sociallogin = () => {
  return (
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
  );
};

export default Sociallogin;
