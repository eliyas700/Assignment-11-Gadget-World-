import React from "react";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="container">
      <section
        id="content"
        className="page-content my-4 page-not-found row align-items-center"
      >
        <div className="content-404 col-lg-6 col-md-6 col-xs-12 text-center">
          <div className="image">
            <img
              className="img-fluid"
              src="https://i.ibb.co/PGHqPvm/404-error-1-1920x.webp"
              alt="404"
            />
          </div>
          <p className="h4">
            We're sorry — something has gone wrong on our end.
          </p>
          <div className="info">
            <p>
              If difficulties persist, please contact the System Administrator
              of this site and report the error below.
            </p>
          </div>
          <Link to="/" className="btn btn-default my-3">
            <span className="ml-15 item-btn">
              <FcHome /> Back to Home
            </span>
          </Link>
        </div>
        <div className="content-right-404 col-lg-6 col-md-6 d-sm-block">
          <a href="/">
            <img
              className="img-fluid"
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
