import React from "react";
import "./Item.css";
const Item = ({ item }) => {
  const { title, img, description, price, brand, quantity, sale } = item;
  return (
    <div className="col-12 col-lg-4 col-md-6">
      <div class="card">
        <div class="image">
          <img width={120} height={260} src={img} alt="" />
        </div>
        <div class="title f-orelega my-2">
          <h1>{title}</h1>
        </div>
        <h5 className="fw-bold"> $ {price}</h5>
        <div class="des">
          <p
            title={description}
            className="px-2 "
            style={{ textAlign: "left" }}
          >
            {description.slice(0, 75) + "..."}
          </p>
          <div className="info d-flex justify-content-between px-2 py-3">
            <p className="text-muted">
              Supplier:
              <span className="fw-bold text-warning">{brand}</span>
            </p>
            <p className="text-muted">
              Available: <span className="text-success">{quantity}</span>
            </p>
            <p className="text-muted">
              Sold: <span className="text-danger">{sale}</span>
            </p>
          </div>
          <button className="px-4 item-btn">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
