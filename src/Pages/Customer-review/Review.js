import React from "react";
import "./review.css";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ review }) => {
  const { name, img, comment, rating } = review;
  return (
    <div className="rev-section col-12 col-lg-4">
      <div className="reviews">
        <div className="review">
          <div className="head-review">
            <img src={img} width="250px" />
          </div>
          <div className="body-review">
            <div className="name-review">{name}</div>
            <div className="place-review">USA</div>
            <div className="rating">
              <Rating
                initialRating={rating}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={
                  <FontAwesomeIcon
                    style={{ color: "goldenrod" }}
                    icon={faStar}
                  />
                }
                readonly
              ></Rating>
            </div>
            <div className="desc-review">{comment.slice(0, 150) + "..."}.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
