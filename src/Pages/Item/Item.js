import React from "react";

const Item = ({ item }) => {
  const { title, img } = item;
  return (
    <div className="col-12 col-lg-4 col-md-6">
      <img src={img} alt="" />
      <h4>{title}</h4>
    </div>
  );
};

export default Item;
