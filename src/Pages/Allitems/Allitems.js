import React from "react";
import useItems from "../../Hooks/useItems";
import Item from "../Item/Item";

const Allitems = () => {
  const [items, setItem] = useItems([]);
  return (
    <div>
      <h2 style={{ color: "#4834d4" }} className="my-4 f-anton">
        Available Products
      </h2>
      <div className="row justify-content-between container-fluid ">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Allitems;
