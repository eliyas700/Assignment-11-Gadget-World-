import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { TiArrowLeftThick } from "react-icons/ti";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsCartDashFill } from "react-icons/bs";
import "./ItemDetail.css";
const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { title, img, description, price, quantity, brand, sale } = product;
  const [error, setError] = useState("");
  useEffect(() => {
    const url = `http://localhost:5000/items/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [product]);
  const handleDelivered = (event) => {
    event.preventDefault();
    const newQuantity = parseInt(quantity) - 1;
    const newSale = parseInt(sale) + 1;
    console.log(newQuantity, newSale);
    const Quantity = newQuantity;
    const Sale = newSale;
    const user = { Quantity, Sale };
    //Send Data to the Server Site
    const url = `http://localhost:5000/items/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log("Success", data));
    alert("information Added Successfully");
  };
  const handleRestock = (event) => {
    event.preventDefault();
    const restock = event.target.restock.value;
    console.log(restock);
    if (restock > 0) {
      console.log("i am here");
      const newQuantity = parseInt(quantity) + parseInt(restock);
      const newSale = parseInt(sale) + 0;
      console.log(newQuantity, newSale);
      const Quantity = newQuantity;
      const Sale = newSale;
      const user = { Quantity, Sale };
      //Send Data to the Server Site
      const url = `http://localhost:5000/items/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => console.log("Success", data));
      alert("information Added Successfully");
      event.target.reset();
    } else {
      setError("You Should Export a Positive Number");
    }
  };
  return (
    <div>
      <div className="cards mt-2">
        <div className="card-area">
          <div className="card__title  ">
            <Link
              to="/item"
              style={{ textAlign: "left" }}
              className="icon w-50"
            >
              <Link to="/item">
                <TiArrowLeftThick size={45} />
              </Link>
            </Link>
            <h3>All Products</h3>
          </div>
          <div className="card__body ">
            <div className="half ">
              <div className="image">
                <img className="w-75" src={img} alt={title} />
              </div>
            </div>
            <div className="half ">
              <div className="description">
                <div className="featured_text">
                  <h1>{title}</h1>
                  <p className="price my-3">$ {price}</p>
                </div>
                <p>{description}</p>
              </div>
              <span className="stock">
                <MdProductionQuantityLimits /> In stock: {quantity}
              </span>
              <p className="text-danger my-3 fw-bold">
                <BsCartDashFill />
                Total Sell: {sale}
              </p>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="recommend">
            <p>Supplied by</p>
            <h3>{brand}</h3>
          </div>
          <div>
            <form onSubmit={handleRestock}>
              <label htmlFor="restock">
                Restock <span className="fw-bold">{title}</span>
              </label>
              <input
                type="number"
                className="w-25"
                name="restock"
                id="restock"
              />
              <button className="item-btn-2 ms-2" type="submit">
                Restock
              </button>
            </form>
            <p className="text-danger">{error}</p>
          </div>
          <div>
            <button
              className="item-btn-2"
              onClick={handleDelivered}
              type="button"
            >
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
