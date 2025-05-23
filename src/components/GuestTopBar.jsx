import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function TopBar() {
  return (
    <div className="bg-white py-8 px-9 border-b">
      <div className="max-w-10xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Socials + Email */}
        <div className="flex items-center gap-6 text-gray-600 text-large">
          <div className="flex gap-3 text-lg">
            <FaTwitter className="cursor-pointer hover:text-black" />
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
          </div>
          <div className="hidden md:flex items-center gap-2 border-l pl-4">
            <MdEmail className="text-green-500" />
            <span>info@organik.com</span>
          </div>
        </div>

        {/* Middle: Logo */}
        <div className="text-5xl font-bold font-abril tracking-wide">
          <span className="text-green-500">MIZ'</span>Cake
        </div>

        {/* Right: Phone + Icons */}
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <div className="hidden md:flex items-center gap-2 border-r pr-4">
            <MdPhone className="text-green-500" />
            <span>92 666 888 0000</span>
          </div>
          <FaSearch className="text-lg cursor-pointer hover:text-black" />
          <FaShoppingCart className="text-lg cursor-pointer hover:text-black" />
        </div>
      </div>
    </div>
  );
}
