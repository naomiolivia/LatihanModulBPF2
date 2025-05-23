import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout(){
    return (
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
                        
                        <Outlet/>
                </div>
          </div>
    )
}