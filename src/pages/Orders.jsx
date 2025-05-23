import React, { useState, useEffect } from "react";
import ordersData from "../data/ordersData.json"; // Mengimpor data JSON
import { Link } from "react-router-dom";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(ordersData); // Mengambil data dari JSON
  }, []);

  return (
    <div className="bg-white min-h-screen py-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-pink-600">Orders</h2>
        <Link to="/add-order">
          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition duration-300">
            Add Order
          </button>
        </Link>
      </div>

      <table className="table-auto w-full mt-4 border-collapse border border-pink-200 rounded-lg overflow-hidden">
        <thead className="bg-pink-100 text-pink-800">
          <tr>
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">Customer Name</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Total Price</th>
            <th className="border px-4 py-2">Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id} className="hover:bg-pink-50">
              <td className="border px-4 py-2">{order.order_id}</td>
              <td className="border px-4 py-2">{order.customer_name}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">${order.total_price}</td>
              <td className="border px-4 py-2">{order.order_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
