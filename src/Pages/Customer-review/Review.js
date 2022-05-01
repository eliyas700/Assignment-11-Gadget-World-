import React from "react";
import "./review.css";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ review }) => {
  const { name, img, comment, rating } = review;
  return (
    <div class="rev-section col-12 col-lg-4">
      <div class="reviews">
        <div class="review">
          <div class="head-review">
            <img src={img} width="250px" />
          </div>
          <div class="body-review">
            <div class="name-review">{name}</div>
            <div class="place-review">USA</div>
            <div class="rating">
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
            <div class="desc-review">{comment.slice(0, 150) + "..."}.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
