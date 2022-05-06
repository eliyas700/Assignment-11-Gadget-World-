import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Reviews from "../Customer-review/Reviews";
import Items from "../Items/Items";
import Speciality from "../Speciality/Speciality";
import Team from "../Team/Team";
import "./Home.css";
const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            style={{ height: "88vh" }}
            className="d-block w-100"
            src="https://i.ibb.co/FqV1DGV/h5-s1-2048x.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>iMac-2022</h3>
            <p>Now available on Gadget World</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "88vh" }}
            className="d-block w-100"
            src="https://i.ibb.co/PYZV3tT/h5-s2-2048x.webp"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Eco Bubble</h3>
            <p>
              Washes using 30% of the energy <br /> Bubbles do the rest
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "88vh" }}
            className="d-block w-100"
            src="https://i.ibb.co/TY58rRG/h5-s3-2048x.webp"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Smart Watch Series-2</h3>
            <p>Now Available on Gadget-World</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div id="items">
        <Items></Items>
      </div>
      <div className="position-relative">
        <Reviews></Reviews>
      </div>
      <div>
        <h2 style={{ color: "#4834d4" }} className="my-4 f-anton">
          Why Us?
        </h2>
        <img
          className="w-25"
          src="https://i.ibb.co/xSJcJVY/SL-111019-24950-13-removebg-preview.png"
          alt=""
        />
        <Speciality></Speciality>
      </div>
      <div>
        <Team></Team>
      </div>
    </div>
  );
};

export default Home;
