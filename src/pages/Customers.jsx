import React, { useState, useEffect } from "react";
import customersData from "../data/customersData.json"; // Mengimpor data JSON
import { Link } from "react-router-dom";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(customersData); // Mengambil data dari JSON
  }, []);

  return (
    <div className="bg-white min-h-screen py-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-pink-600">Customers</h2>
        <Link to="/add-customer">
          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition duration-300">
            Add Customer
          </button>
        </Link>
      </div>

      <table className="table-auto w-full mt-4 border-collapse border border-pink-200 rounded-lg overflow-hidden">
        <thead className="bg-pink-100 text-pink-800">
          <tr>
            <th className="border px-4 py-2">Customer ID</th>
            <th className="border px-4 py-2">Customer Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Loyalty</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customer_id} className="hover:bg-pink-50">
              <td className="border px-4 py-2">{customer.customer_id}</td>
              <td className="border px-4 py-2">{customer.customer_name}</td>
              <td className="border px-4 py-2">{customer.email}</td>
              <td className="border px-4 py-2">{customer.phone}</td>
              <td className="border px-4 py-2">{customer.loyalty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
