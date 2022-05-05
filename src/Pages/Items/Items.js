import React from "react";
import Item from "../Item/Item";
import { AiOutlineDoubleRight } from "react-icons/ai";
import useItems from "../../Hooks/useItems";
import { Link } from "react-router-dom";
const Items = () => {
  const [items, setItems] = useItems([]);
  return (
    <div>
      <h2 style={{ color: "#4834d4" }} className="my-4 f-anton">
        Products Available
      </h2>
      <div className="row container-fluid mx-auto justify-content-between">
        {items.slice(0, 6).map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
      <Link
        to="/manageitems"
        className="item-btn d-inline-block text-decoration-none my-5"
      >
        Manage Inventories
      </Link>
      <Link
        to="/item"
        style={{ textAlign: "right" }}
        className="btn  btn-link fs-4 text-decoration-none d-block my-4 ms-auto"
      >
        See More Products <AiOutlineDoubleRight />
      </Link>
    </div>
  );
};

export default Items;
