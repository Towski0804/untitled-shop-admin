import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";

const Navbar = () => {
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
      <img
        src={navProfile}
        alt=""
        className="nav-profile w-[75px]
      max-md:w-[60px]"
      />
    </div>
  );
};

export default Navbar;
