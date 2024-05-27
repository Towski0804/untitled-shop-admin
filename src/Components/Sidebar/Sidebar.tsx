import add_product_icon from "../../assets/Product_Cart.svg";
import list_product_icon from "../../assets/Product_list_icon.svg";
import "./Sidebar.scss";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="sidebar flex flex-col pt-8 gap-5 w-full max-w-[250px] h-[100vh] bg-white
    max-md:py-8 max-md:flex-row max-md:max-w-none max-md:h-auto max-md:justify-center"
    >
      <Link to={"/addproduct"} className="">
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" className="w-8" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} className="">
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" className="w-8" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
