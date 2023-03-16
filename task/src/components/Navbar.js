import React from "react";
import textLogo from "../assets/textLogo.jpg";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="w-full h-[4rem] bg-blue-500 px-4 flex justify-between items-center ">
      <div className="ml-[135px]">
        <img
          src={textLogo}
          alt="logo"
          className="w-[9rem]  transition duration-700 hover:scale-125 hover:duration-300 cursor-pointer"
          onClick={handleClick}
        />
      </div>
      <ul className="flex mr-[100px] text-white font-bold cursor-pointer">
        <li className="px-3">Offers</li>
        <li className="px-3">Contact Us</li>
        <li className="px-3">Help</li>
        <li className="px-3" onClick={handleLogout}>
          Logout
        </li>
        <li className="" onClick={handleLogout}>
          <CiLogout
            size={25}
            className="hover:scale-150 duration-200 hover:duration-200 hover:text-red-500 rotate-180 hover:-rotate-180"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
