import React from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./AddItems.css";
const Additems = () => {
  return (
    <div>
      <PageTitle title="Add Items"></PageTitle>
      <h2 style={{ color: "#4834d4" }} className="my-4 f-anton">
        Add a Product
      </h2>
      <div className=" mx-auto add-product">
        <img
          className="d-block mx-auto my-3 "
          width={120}
          src="https://i.ibb.co/GsB0jkt/logo.png"
          alt=""
        />
        <form>
          <input
            type="text"
            placeholder="Product Name"
            required
            id="name"
            name="name"
          />

          <input
            type="number"
            placeholder="Product Price"
            required
            id="price"
            name="price"
          />

          <input
            type="number"
            placeholder="Product Quantity"
            required
            id="quantity"
            name="quantity"
          />

          <input
            type="text"
            placeholder="Product Seller"
            required
            id="seller"
            name="seller"
          />

          <input
            type="text"
            placeholder="Product photo URL"
            required
            id="photo"
            name="photo"
          />
          <textarea
            name="description"
            placeholder="Product Description"
            id=""
            cols="55"
            rows="5"
          ></textarea>
          <input className="item-btn" type="submit" value="Add Now" />
        </form>
      </div>
    </div>
  );
};

export default Additems;
