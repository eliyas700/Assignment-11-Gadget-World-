import React from "react";
import { useNavigate } from "react-router-dom";

const ItemManage = ({ item }) => {
  const { _id, title, img, price, quantity, sale, brand, user } = item;
  const navigate = useNavigate();
  const handleProductUpdate = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <tr>
      <td>
        <img
          className="border border-3"
          style={{ borderRadius: "50%" }}
          height={40}
          width={40}
          src={img}
          alt=""
        />
      </td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{sale}</td>
      <td>{brand}</td>
      <td>{user}</td>
      <td>
        <div className="d-flex">
          <button
            className="btn-primary me-2"
            onClick={() => handleProductUpdate(_id)}
          >
            Details
          </button>
          <button className="btn-danger">Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default ItemManage;
