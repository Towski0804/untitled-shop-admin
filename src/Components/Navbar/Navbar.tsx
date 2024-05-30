import { useState } from "react";
import navlogo from "../../assets/nav-logo.svg";
import navUser from "../../assets/nav-user.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div
      className="navbar flex items-center justify-between p-[15px_60px] shadow-md mb-1 bg-white
    max-md:px-8"
    >
      <img
        src={navlogo}
        alt=""
        className="nav-logo w-[200px]
      max-md:w-[150px]"
      />
      <div className="cursor-pointer" onClick={toggleVisible}>
        <img
          src={navUser}
          alt=""
          className="nav-profile w-[40px]
      max-md:w-[30px]"
        />
        <ul
          className={`absolute right-2 mt-2 py-2 bg-white shadow-md rounded-md  ${
            visible ? "dropdown-enter" : "dropdown-exit"
          }`}
        >
          <li className="hover:bg-gray-200 px-4 py-2">To be</li>
          <li className="hover:bg-gray-200 px-4 py-2">Implemented</li>
          <li className="hover:bg-gray-200 px-4 py-2">...</li>
          <li className="hover:bg-gray-200 px-4 py-2">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
