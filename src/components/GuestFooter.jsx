import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

import partner1 from "../assets/partner1.jpg";
import partner2 from "../assets/partner2.jpg";
import partner3 from "../assets/partner3.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#2d2d2d] text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 font-abril tracking-wide">
            <span className="text-green-500">Miz'</span>Cake
          </h2>
          <p className="text-sm leading-6 text-gray-300">
            Atiam rhoncus sit amet adip scing sed ipsum. Lorem ipsum dolor sit amet adipiscing sem neque.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>📞 666 888 0000</li>
            <li>📧 info@company.com</li>
            <li>📍 66 top broklyn street. New York</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-white">Top Sellers</a></li>
            <li><a href="#" className="hover:text-white">Shopping</a></li>
            <li><a href="#" className="hover:text-white">About Store</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Help</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-white">New Products</a></li>
            <li><a href="#" className="hover:text-white">My Account</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">News Letter</h3>
          <h3 className="text-lg font-semibold mb-4">Email Address</h3>
          <input
            type="email"
            className="w-full mb-2 p-2 rounded text-black"
          />
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        {/* Social Media */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="bg-black p-2 rounded-full hover:bg-gray-800">
            <FaTwitter />
          </a>
          <a href="#" className="bg-black p-2 rounded-full hover:bg-gray-800">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-black p-2 rounded-full hover:bg-gray-800">
            <FaInstagram />
          </a>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center items-center gap-6 mb-6">
          <img src={partner1} alt="Partner 1" className="h-10 object-contain" />
          <img src={partner2} alt="Partner 2" className="h-10 object-contain" />
          <img src={partner3} alt="Partner 3" className="h-10 object-contain" />
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; Copyright 2025 by Company.com
        </p>
      </div>
    </footer>
  );
}
