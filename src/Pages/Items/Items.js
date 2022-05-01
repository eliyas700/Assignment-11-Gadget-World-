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
        to="/item"
        className="item-btn text-decoration-none d-inline-block my-4"
      >
        See More Products <AiOutlineDoubleRight />
      </Link>
    </div>
  );
};

export default Items;
