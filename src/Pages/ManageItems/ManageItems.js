import React from "react";
import { Table } from "react-bootstrap";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useItems from "../../Hooks/useItems";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./ManageItems.css";

const ManageItems = () => {
  const [items, setItems] = useItems([]);
  const [user] = useAuthState(auth);
  const { emailVerified } = user;
  const navigate = useNavigate();
  const [sendEmailVerification, sending, verificationerror] =
    useSendEmailVerification(auth);
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
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <div style={{ width: "100vw" }}>
      <PageTitle title="Manage Item"></PageTitle>
      <h2
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        style={{ color: "#4834d4" }}
        className="my-4 f-anton"
      >
        Manage Items
      </h2>
      <img
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="w-25 mb-3"
        src="https://i.ibb.co/xSJcJVY/SL-111019-24950-13-removebg-preview.png"
        alt=""
      />
      {emailVerified ? (
        <div className="container-fluid">
          <div className="big-screen">
            <Table
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              striped
              bordered
              hover
            >
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
                        className="border  border-3"
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
              className="item-btn w-25 mx-auto text-decoration-none d-inline-block my-4"
            >
              Add New Item
            </Link>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="small-screen row "
          >
            {items.map((item) => (
              <div key={item._id} className="col-12 border border-2 mb-4 mx-2">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-4 d-flex align-items-center">
                      <img
                        src={item.img}
                        className="img-fluid  rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body border-start ">
                        <h5 className="card-title">{item.title}</h5>
                        <p style={{ textAlign: "left" }} className="card-text">
                          {item.description.slice(0, 60) + "..."}
                          <div className="d-flex mt-3 justify-content-between">
                            <small>Price:{item.price}</small>
                            <small>Quantity:{item.quantity}</small>
                            <small>Sale:{item.sale}</small>
                          </div>
                        </p>
                        <p style={{ textAlign: "left" }} className="card-text">
                          <small className="text-muted">
                            User: {item.user}
                          </small>
                        </p>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/additems"
              className="item-btn w-50 d-inline-block mx-auto text-decoration-none  my-4"
            >
              Add New Item
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h4
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-danger"
            >
              Sorry ! You Need To Verify Your Email to Access this Feature{" "}
            </h4>
            <button
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              onClick={async () => {
                await sendEmailVerification();
                toast("Verification Mail sent! ");
              }}
              className="btn btn-link text-decoration-none"
            >
              Resend Email Verification?
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageItems;
