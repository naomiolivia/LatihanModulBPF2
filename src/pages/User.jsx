import React, { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);  // Cek struktur data yang diterima
        setUsers(data.users);  // Mengambil data users dari API
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-white min-h-screen py-6 px-4">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4">Users</h2>

      <table className="table-auto w-full mt-4 border-collapse border border-pink-200 rounded-lg overflow-hidden">
        <thead className="bg-pink-100 text-pink-800">
          <tr>
            <th className="border px-4 py-2">User ID</th>
            <th className="border px-4 py-2">User Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Gender</th> 
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="hover:bg-pink-50">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{`${user.firstName} ${user.lastName}`}</td> 
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2">{user.age}</td>
                <td className="border px-4 py-2">{user.gender}</td> 
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="border px-4 py-2 text-center">
                No users available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
