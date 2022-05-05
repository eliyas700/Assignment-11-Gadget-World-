import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import PageTitle from "../Shared/PageTitle/PageTitle";

const MyItems = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  // const myItems = items.filter((item) => item.user === user.email);
  useEffect(() => {
    const getMyItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/myitem?user=${email}`;
      const { data } = await axios.get(url);
      console.log(data);
      setItems(data);
    };
    getMyItems();
  }, [user]);

  const handleProductUpdate = (id) => {
    navigate(`/item/${id}`);
  };
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://infinite-ridge-60614.herokuapp.com/items/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // const remaining = items.filter((item) => item._id !== id);
          // setItems(remaining);
        });
    }
  };

  return (
    <div>
      <PageTitle title="My Item"></PageTitle>
      <h2 style={{ color: "#4834d4" }} className="my-4 f-anton">
        My Items:{items.length}
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Title</th>
            <th>Price $</th>
            <th>Quantity</th>
            <th>Sale</th>
            <th>Brand</th>
            <th>User</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  className="border border-3"
                  style={{ borderRadius: "50%" }}
                  height={40}
                  width={40}
                  src={item.img}
                  alt=""
                />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.sale}</td>
              <td>{item.brand}</td>
              <td>{item.user}</td>
              <td>
                <div className="d-flex">
                  <button
                    className="btn-primary me-2"
                    onClick={() => handleProductUpdate(item._id)}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn-danger "
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Link
        to="/additems"
        className="item-btn w-25 mx-auto text-decoration-none d-block my-4"
      >
        Add New Item
      </Link>
    </div>
  );
};

export default MyItems;