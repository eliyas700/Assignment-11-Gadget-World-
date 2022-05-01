import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { AiOutlineDoubleRight } from "react-icons/ai";
const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
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
      <button className="item-btn  my-4">
        See More Products <AiOutlineDoubleRight />
      </button>
    </div>
  );
};

export default Items;
