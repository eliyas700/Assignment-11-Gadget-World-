import React from "react";
import "./Speciality.css";
const Speciality = () => {
  return (
    <div>
      <div className="special-container m-0 row justify-content-center align-items-center">
        <div className="card mx-3 col-12 col-lg-4">
          <div className="face face1">
            <div className="content">
              <img src="https://i.ibb.co/xg2mMq9/p-1-72x.webp" />
              <h3>Free Delivery From $470</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                We provide you Quick and Safe Delivery Service and You will get
                Free Delivery From $470
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
        <div className="card mx-3 col-12 col-lg-4">
          <div className="face face1">
            <div className="content">
              <img src="https://i.ibb.co/P1Yf5nF/p-2-72x.webp" />
              <h3>Money Back Guarantee</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                We have Strong Money Back Policy .Got a problem with the
                product? Don't worry, we have a 30 day money back guarantee.
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
        <div className="card mx-3 col-12 col-lg-4">
          <div className="face face1">
            <div className="content">
              <img src="https://i.ibb.co/KVLjCyd/p-3-72x.webp" alt="" />
              <h3>Authenticity & World Wide Delivery </h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                We work with the biggest delivery networks. It doesn't matter
                where in the world you are.
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
