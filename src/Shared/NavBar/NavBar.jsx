import React from "react";
import logo from "../../assets/images/icon.png";
import { ImMenu2 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
const NavBar = () => {
  const navLink = (
    <>
      <NavLink to="/" 
      className={({isActive}) => isActive ? "text-[#72bff9]  border-[#72bff9] border-b-2 px-4" : " px-2"}
      ><li> Products</li></NavLink>

      <li>
        Item 3
      </li>
    </>
  );
  const user = false;
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-2xl text-[#72bff9]"
            >
              <ImMenu2 />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src={logo} className="w-12 md:w-14" alt="" />
            <h3 className="text-2xl md:text-3xl font-semibold">
              Furni<span className="text-[#72bff9]">Flex</span>
            </h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex lg:items-center ">
          <ul className="menu menu-horizontal text-[16px] font-semibold">{navLink}</ul>
        </div>
        <div className="navbar-end">
        <div className="indicator mr-4">
          <FaCartShopping className="text-xl"/>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
        {
            user ? 'comming' : <div className="px-4 md:px-6 bg-[#72bff9] text-white rounded-full py-2 font-semibold">
            Log In
          </div>
        }  
        </div>
      </div>
    </>
  );
};

export default NavBar;
