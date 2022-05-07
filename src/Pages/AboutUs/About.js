import React from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { FaCheck } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import "./About.css";
const About = () => {
  return (
    <div>
      <PageTitle title="About "></PageTitle>
      <div style={{ textAlign: "left" }}>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/6JKNBN8/82945168-2796311930459863-4447880986574716928-n.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0 pl-lg-5">
                <h3 className="text-gadget   text-uppercase fw-bold mb-3">
                  Learn About Us
                </h3>
                <h4 style={{ color: "#194376" }} className="mb-4 f-orelega">
                  We Are Quality Gadget Provider In Your City
                </h4>
                <h5 className="fw-bold fst-italic mb-4">
                  To provide quality products and services at great value in a
                  comfortable and friendly online shopping experience.
                </h5>
                <p className="mb-2 text-muted">
                  <strong>Gadget World </strong> is a for all your gadgets and
                  gifting needs, with thousands of products handpicked by our
                  team with one question running through their heads - “How much
                  would I love to receive this as a present?”Launched in 2012,
                  Gadget World is everything related to gadgets, gizmos, and
                  cutting-edge consumer electronics. Our aim has always been to
                  provide first class customer service with value for money
                  innovative products that completely satisfy even the most
                  demanding customer.
                </p>
                <div className="row">
                  <div className="col-sm-6 pt-3">
                    <div className="d-flex align-items-center ">
                      <span className="me-2">
                        <FaCheck />
                      </span>
                      <p className="text-gadget  fw-bold m-0 ">
                        Quality Products
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 pt-3">
                    <div className="m-0 d-flex align-items-center">
                      <span className="me-2">
                        <FaCheck />
                      </span>
                      <p className="text-gadget  fw-bold m-0 ">
                        Express Fast Delivery
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 pt-3">
                    <div className="m-0 d-flex align-items-center">
                      <span className="me-2">
                        <FaCheck />
                      </span>
                      <p className="text-gadget  fw-bold m-0 ">
                        Highly Professional Staff
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 pt-3">
                    <div className="m-0 d-flex align-items-center">
                      <span className="me-2">
                        <FaCheck />
                      </span>
                      <p className="text-gadget  fw-bold m-0 ">
                        100% Original Products
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-5">
          <div className="container">
            <h1 className="text-gadget   text-uppercase text-center fw-bold mb-3">
              Working Process
            </h1>
            <h2
              style={{ color: "#194376" }}
              className=" text-center f-orelega fw-bold mb-5"
            >
              How We Work
            </h2>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                  <div className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4 circular">
                    <h2
                      style={{ color: "#00a8ff" }}
                      className="display-2 f-anton   m-0"
                    >
                      1
                    </h2>
                  </div>
                  <h3 style={{ color: "#194376" }} className="fw-bold m-0 mt-2">
                    Order Place
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                  <div className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4 circular">
                    <h2
                      style={{ color: "#00a8ff" }}
                      className="display-2 f-anton   m-0"
                    >
                      2
                    </h2>
                  </div>
                  <h3 style={{ color: "#194376" }} className="fw-bold m-0 mt-2">
                    Recheck Quality
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                  <div className="d-inline-flex circular align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4 ">
                    <h2
                      style={{ color: "#00a8ff" }}
                      className="display-2 f-anton m-0"
                    >
                      3
                    </h2>
                  </div>
                  <h3 style={{ color: "#194376" }} className="fw-bold m-0 mt-2">
                    Pack The Gadgets
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                  <div className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4 circular">
                    <h2
                      style={{ color: "#00a8ff" }}
                      className="display-2 f-anton  m-0"
                    >
                      4
                    </h2>
                  </div>
                  <h3 style={{ color: "#194376" }} className="fw-bold m-0 mt-2">
                    Safe Delivery
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 m-0 my-lg-5 pt-0 pt-lg-5 pr-lg-5">
                <h1 className="text-gadget text-uppercase fw-bold mb-3">
                  Our Features
                </h1>
                <h2
                  style={{ color: "#194376" }}
                  className="mb-4  fw-bolder f-orelega"
                >
                  Why Choose Us
                </h2>
                <p>
                  We take your satisfaction seriously. We provide a
                  professional, dedicated service for every single customer
                  regardless of order size. Our Support Center replies to your
                  support tickets quickly, while our class-leading Live Chat and
                  24 hour telephone services offer real-time support whenever
                  you need it. If you see any Problems with the Products after
                  getting you can Return it within 7 days without any Shipment
                  Charge.
                </p>
                <div className="row count">
                  <div className="col-sm-6 mb-4">
                    <h2 className="f-anton fw-bold" data-toggle="counter-up">
                      10
                    </h2>
                    <h5 className="fw-bold">Years Expereince</h5>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <h2 className=" f-anton fw-bold" data-toggle="counter-up">
                      225
                    </h2>
                    <h5 className="fw-bold">Expert Worker</h5>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <h2 className=" f-anton" data-toggle="counter-up">
                      1050
                    </h2>
                    <h5 className="fw-bold">Happy Clients</h5>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <h2 className=" f-anton" data-toggle="counter-up">
                      150
                    </h2>
                    <h5 className="fw-bold">Gadget Items</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="d-flex flex-column align-items-center justify-content-center certification h-100 py-5 px-3">
                  <AiOutlineSafetyCertificate color="white" size={100} />
                  <h1
                    style={{ fontSize: "75px", letterSpacing: "5px" }}
                    className="display-1 f-anton text-white fw-bolder  mb-3"
                  >
                    10+
                  </h1>
                  <h1
                    style={{ fontSize: "45px", letterSpacing: "5px" }}
                    className="text-white-50 fw-bold f-anton m-0"
                  >
                    Years Experience
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
