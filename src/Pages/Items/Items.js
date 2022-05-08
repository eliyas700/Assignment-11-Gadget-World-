import React, { useEffect } from "react";
import Item from "../Item/Item";
import { AiOutlineDoubleRight } from "react-icons/ai";
import useItems from "../../Hooks/useItems";
import { Link } from "react-router-dom";
import AOS from "aos";
const Items = () => {
  const [items, setItems, isLoading] = useItems([]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h2
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        style={{ color: "#4834d4" }}
        className="my-4 f-anton"
      >
        Products Available
      </h2>
      <img
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="w-25"
        src="https://i.ibb.co/xSJcJVY/SL-111019-24950-13-removebg-preview.png"
        alt=""
      />
      <div className="row container-fluid mx-auto justify-content-between">
        {items.slice(0, 6).map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
      <div>
        <Link
          data-aos="flip-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          to="/manageitems"
          className="item-btn d-inline-block text-decoration-none my-5"
        >
          Manage Inventories
        </Link>
      </div>

      <Link
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
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
