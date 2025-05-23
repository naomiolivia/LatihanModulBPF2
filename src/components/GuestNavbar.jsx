import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-50 py-3 px-6 shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-large text-gray-700">
        {/* Left: Login/Register */}
        <div className="flex items-center gap-2 text-green-600 hover:underline cursor-pointer">
          <FaUserCircle />
          <Link to="/login">Login / Register</Link>
        </div>

        {/* Center: Navigation */}
        <ul className="flex gap-10 font-medium">
          <li><a href="#home" className="hover:text-green-600">Home</a></li>
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#produk" className="hover:text-green-600">Product</a></li>
          <li><a href="#testi" className="hover:text-green-600">Testimoni</a></li>
          <li><a href="#member" className="hover:text-green-600">Member</a></li>
        </ul>

        {/* Right: Language */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="https://flagcdn.com/w40/gb.png" alt="UK Flag" className="w-5 h-5 object-cover rounded" />
          <span>Indonesia</span>
        </div>
      </div>
    </nav>
  );
}
