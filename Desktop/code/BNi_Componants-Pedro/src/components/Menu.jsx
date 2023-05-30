import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/Md";
import { RiBillLine } from "react-icons/Ri";
import { TbUsers } from "react-icons/Tb";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";





const Menu = (props) => {


  return (
    <section className="sticky top-0 left-0 hidden bg-white p-4 md:flex md:flex-col w-1/5 h-screen">
      <div className=" md:block w-40 h-40 mt-10">
        <img src="../images/BNI.webp"></img>
      </div>

      <Link to="/Menu">
      <button onClick={props.handleVisibility}></button></Link>
                       

      <div className="flex flex-col h-full justify-between text-xl mb-68">
        <div className="hidden md:block mt-5">
          <div className="mb-4">
          <NavLink

            to="/Members"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "p-5 flex bg-red text-white md:max-w-sm  items-center shadow-md shadow-neutral-400 h-5 rounded-xl"
                : "p-5 flex bg-white text-black md:max-w-sm items-center h-5 rounded-xl hover:border hover:border-red"
            }
          >
            <TbUsers size={20} className="mr-4"/>
            Members
          </NavLink>
          </div>

            <div>
            <NavLink  
            to="/Bill"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "p-5 max-w-sm flex bg-red text-white items-center shadow-md shadow-neutral-400 h-5 rounded-xl"
                : "p-5 max-w-sm flex bg-white text-black  items-center h-5 rounded-xl hover:border hover:border-red"
            }
           
          >
            <RiBillLine size={20} className="mr-4" />
            Bill
          </NavLink>
        </div>
        </div>



{/* Menu inferieur */}
        <div className= " hidden md:block mb-16 max-w-">
          <div className="mb-4">
          <NavLink  
            to="/Settings"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "p-5 max-w-sm flex bg-red text-white items-center shadow-md shadow-neutral-400 h-5 rounded-xl"
                : "p-5 max-w-sm flex bg-white text-black  items-center h-5 rounded-xl hover:border hover:border-red"
            }
      
          >
            <AiFillSetting size={20} className="mr-4"/>
            Settings
            
          </NavLink>
          </div>

          <NavLink  
            to="/Logout"
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "p-5 max-w-sm flex bg-red text-white items-center shadow-md shadow-neutral-400 h-5 rounded-xl"
                : "p-5 max-w-sm flex bg-white text-black  items-center h-5 rounded-xl hover:border hover:border-red"
            }
          >
            <MdLogout size={20} className="mr-4"/> Logout
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Menu;

