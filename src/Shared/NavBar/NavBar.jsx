import React, { useContext } from "react";
import logo from "../../assets/images/icon.png";
import { ImMenu2 } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import image from "../../assets/images/me.jpg";
const NavBar = () => {
  const { user , logOut } = useContext(AuthContext);
  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#72bff9] mr-2  border-[#72bff9] border-b-2 px-4"
            : " px-2 mr-2"
        }
      >
        <li> Products</li>
      </NavLink>

      <li>Item 3</li>
    </>
  );

  const handlelogOut= () => {
    logOut()
  }
  const navForAuthentication = (
    <>
                  <Link 
                  to='login'
                    className="px-4 text-center mx-auto md:px-6 text-[#ffffff] font-bold bg-[#72bff9] border-2 w-3/4 py-2 "
                  >
                    Sign In
                  </Link>
                  <Link 
                  to='signup'
                    className="px-4 text-center mx-auto md:px-6 text-[#ffffff] font-bold bg-[#72bff9] border-2 w-3/4 py-2 "
                  >
                    Sign Up
                  </Link>
    </>
  );
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
          <ul className="menu menu-horizontal text-[16px] font-semibold">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="indicator mr-4">
            <FaCartShopping className="text-xl" />
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        
          {!user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className=" m-1 px-8 py-2 bg-[#72bff9] text-[#ffffff]"
              >
                Join Us
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
              >
                {navForAuthentication}
              </ul>
            </div>
          )}

          {user && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar">
                <div className="w-12 rounded-full">
                  <img src={image} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-5 flex justify-center items-center "
              >
                {
                  <button
                  onClick={handlelogOut}
                    className="px-4 md:px-6 text-[#ffffff] font-bold bg-[#72bff9] border-2 w-3/4 py-2 "
                  >
                    logout
                  </button>
                }
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
