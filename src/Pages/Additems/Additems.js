import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import "./AddItems.css";
import { toast } from "react-toastify";
const Additems = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const [sendEmailVerification, sending, verificationerror] =
    useSendEmailVerification(auth);
  console.log(user);
  const { emailVerified } = user;
  const onSubmit = (data, event) => {
    console.log(data);
    const url = `https://infinite-ridge-60614.herokuapp.com/items`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    toast("New Item Added Successfully");
    event.target.reset();
  };
  return (
    <div>
      <PageTitle title="Add Items"></PageTitle>
      <h2
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        style={{ color: "#4834d4" }}
        className="my-4 f-anton"
      >
        Add a Product
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
      {emailVerified ? (
        <div className=" mx-auto add-product">
          <img
            className="d-block mx-auto my-3 "
            width={120}
            src="https://i.ibb.co/GsB0jkt/logo.png"
            alt=""
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Product Name"
              {...register("title", { required: true })}
            />
            <input
              type="text"
              placeholder="User"
              value={user?.email}
              {...register("user", { required: true })}
            />
            <input
              type="number"
              placeholder="Product Price"
              {...register("price", { required: true })}
            />
            <input
              type="number"
              placeholder="Product Quantity"
              {...register("quantity", { required: true })}
            />
            <input
              type="number"
              value="0"
              placeholder="Product Sale"
              {...register("sale", { required: true })}
            />

            <input
              type="text"
              placeholder="Product Manufacturer"
              {...register("brand", { required: true })}
            />
            <input
              type="text"
              placeholder="Product Photo URL"
              {...register("img", { required: true })}
            />
            <textarea
              className="mb-2"
              placeholder="Description"
              cols="62"
              rows="5"
              {...register("description", { required: true })}
            />

            <input
              data-aos="zoom-in-up"
              data-aos-offset="200"
              data-aos-delay="70"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              type="submit"
              className="item-btn"
              value="Add Now"
            />
          </form>
        </div>
      ) : (
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
            data-aos="zoom-in-up"
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
      )}
    </div>
  );
};

export default Additems;
