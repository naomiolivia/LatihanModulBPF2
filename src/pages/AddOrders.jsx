import React, { useState } from 'react';

export default function AddOrder() {
  const [formData, setFormData] = useState({
    orderID: '',
    customerName: '',
    status: 'Pending',
    totalPrice: '',
    orderDate: '',
  });

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Menampilkan data yang diinput (untuk sekarang, bisa disimpan di state atau kirim ke backend)
    console.log(formData);
    // Reset form setelah submit
    setFormData({
      orderID: '',
      customerName: '',
      status: 'Pending',
      totalPrice: '',
      orderDate: '',
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Add Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="orderID"
          placeholder="Order ID"
          value={formData.orderID}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input
          type="number"
          name="totalPrice"
          placeholder="Total Price"
          value={formData.totalPrice}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="date"
          name="orderDate"
          value={formData.orderDate}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Order
        </button>
      </form>
    </div>
  );
}
