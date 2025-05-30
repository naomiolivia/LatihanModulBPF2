import { MdFastfood } from "react-icons/md"; 
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";
import { MdError } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;

  return (
    <div id="sidebar-menu" className="mt-10 space-y-6">
      {/* Menu Utama */}
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink to="/" className={menuClass}>
            <MdDashboard className="mr-4 text-xl" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Orders" className={menuClass}>
            <BsFillCartPlusFill className="mr-4 text-xl" />
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Customers" className={menuClass}>
            <BsFillPeopleFill className="mr-4 text-xl" />
            <span>Customers</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/naomi" className={menuClass}>
            <AiOutlineOrderedList className="mr-4 text-xl" />
            <span>Order List</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/User" className={menuClass}>
            <AiOutlineUserAdd className="mr-4 text-xl" />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/error/400" className={menuClass}>
            <MdError className="mr-4 text-xl text-red-500" />
            <span>Error 400</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/error/401" className={menuClass}>
            <MdError className="mr-4 text-xl text-red-500" />
            <span>Error 401</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/error/403" className={menuClass}>
            <MdError className="mr-4 text-xl text-red-500" />
            <span>Error 403</span>
          </NavLink>
        </li>
        <li>
        <NavLink id="menu-4" to="/products" className={menuClass}>
          <MdFastfood className="mr-4 text-xl" />
          Products
        </NavLink>
      </li>
      </ul>
      
      {/* Menu Error
            <div className="pt-6 border-t border-gray-200">
                <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-2">Error Pages</h2>
                <ul className="space-y-3">
                    
                </ul>
            </div> */}
    </div>
  );
}
