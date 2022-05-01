import React from "react";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="container">
      <section
        id="content"
        class="page-content my-4 page-not-found row align-items-center"
      >
        <div class="content-404 col-lg-6 col-md-6 col-xs-12 text-center">
          <div class="image">
            <img
              class="img-fluid"
              src="https://i.ibb.co/PGHqPvm/404-error-1-1920x.webp"
              alt="404"
            />
          </div>
          <p class="h4">We're sorry — something has gone wrong on our end.</p>
          <div class="info">
            <p>
              If difficulties persist, please contact the System Administrator
              of this site and report the error below.
            </p>
          </div>
          <Link to="/" class="btn btn-default my-3">
            <span class="ml-15 item-btn">
              <FcHome /> Back to Home
            </span>
          </Link>
        </div>
        <div class="content-right-404 col-lg-6 col-md-6 d-sm-block">
          <a href="/">
            <img
              class="img-fluid"
              src="https://i.ibb.co/WnhHMGt/404-error-2-1920x.webp"
              alt=" 404 right"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
