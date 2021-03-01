import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getAllOrders } from "./helper/adminapicall";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  const { user, token } = isAuthenticated();

  const preload = () => {
    getAllOrders().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOrders(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  

  return (
    <Base title="Welcome admin" description="Manage orders here">
      <h2 className="mb-4">All orders:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">Orders:</h2>
          {orders.map((order, index) => {
            return (
              <div key={index} className="row text-center mb-2 ">
                <div className="col-3">
                  <span className="text-white text-left">Order placed by:-{order.user.name}</span>
                </div>
                <div className="col-4">Product:<span>{order.products[0].name}</span></div>
                <div className="col-3">Status:<span className="badge badge-danger">{order.status}</span></div>
                <div className="col-2">
                  <Link
                    className="btn btn-success"
                    to={`/admin/order/update/status/${user._id}`}
                  >
                    <span className="">Update Status</span>
                  </Link>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default ManageOrders;