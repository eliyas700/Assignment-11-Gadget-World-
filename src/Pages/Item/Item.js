import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";
const Item = ({ item }) => {
  const { _id, title, img, description, price, brand, quantity, sale } = item;
  const navigate = useNavigate();
  const handleProductUpdate = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <div className=" item col-12 col-lg-4 col-md-6">
      <div className="card">
        <div className="image">
          <img width={120} height={260} src={img} alt="" />
        </div>
        <div className="title f-orelega my-2">
          <h1>{title}</h1>
        </div>
        <h5 className="fw-bold"> $ {price}</h5>
        <div className="des">
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
          <button onClick={() => handleProductUpdate(_id)} className="px-4 ">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
