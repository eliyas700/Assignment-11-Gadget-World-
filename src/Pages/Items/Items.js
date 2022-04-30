import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="row justify-content-between">
      {items.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  );
};

export default Items;
