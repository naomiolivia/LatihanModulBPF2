import React, { useState } from 'react';

export default function AddCustomer() {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    loyalty: 'Bronze',
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
      customerName: '',
      email: '',
      phone: '',
      loyalty: 'Bronze',
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        />
        <select
          name="loyalty"
          value={formData.loyalty}
          onChange={handleChange}
          className="border p-2 mb-4 w-full"
        >
          <option value="Bronze">Bronze</option>
          <option value="Silver">Silver</option>
          <option value="Gold">Gold</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Customer
        </button>
      </form>
    </div>
  );
}
