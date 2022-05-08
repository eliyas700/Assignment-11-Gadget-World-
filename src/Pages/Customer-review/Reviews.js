import React, { useEffect, useState } from "react";
import Review from "./Review";
import AOS from "aos";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://infinite-ridge-60614.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h2
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        style={{ color: "#4834d4" }}
        className="my-4 fw-bold f-anton "
      >
        Customer Reviews
      </h2>
      <img
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="w-25"
        src="https://i.ibb.co/xSJcJVY/SL-111019-24950-13-removebg-preview.png"
        alt=""
      />
      <div
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="row justify-content-around align-item-center"
      >
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
