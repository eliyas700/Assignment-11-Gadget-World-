import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useItems from "../../Hooks/useItems";
import PageTitle from "../Shared/PageTitle/PageTitle";
import ItemManage from "./ItemManage";

const ManageItems = () => {
  const [items, setItems] = useItems([]);
  return (
    <div>
      <PageTitle title="Manage Item"></PageTitle>
      <h2 style={{ color: "#4834d4" }} className="my-4 f-anton">
        Manage Items
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
            <ItemManage key={item._id} item={item}></ItemManage>
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

export default ManageItems;
