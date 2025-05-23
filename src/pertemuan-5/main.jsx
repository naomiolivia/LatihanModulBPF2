import { BsFillEmojiHeartEyesFill } from "react-icons/bs"; 
import { AiFillApple } from "react-icons/ai"; 
import { createRoot } from "react-dom/client";
import './assets/tailwind.css';
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import PageHeader from "./components/PageHeader.jsx";
import Dashboard from "./pages/Dashboard.jsx";

createRoot (document.getElementById("root"))
.render(
    <div id="layout-wrapper" className="flex flex-row flex-1">
        {/* <BsFillEmojiHeartEyesFill />
        <div className=" flex flex-col ">
            <span className="font-poppins font-[1000] text-[48px]">Sedap<b className="text-green-500">.</b></span>
            <span className="text-gray-400 font-semibold font-barlow">Modern Admin Dashboard</span>
        </div>
        <AiFillApple /> */}
        
        <Sidebar/>
            <div id="main-content" className="flex-1 p-4">
                  <Header />
                  <Dashboard />
          </div>
    </div>
)