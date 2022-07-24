import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../backend/StateProvider";

function Header() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </NavLink>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign in</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>

      <NavLink to="/checkout">
        <div className="header_optionCart">
          <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }} />
          <span className="header_optionLineTwo header_cartCount">
            {cart?.length}
          </span>
        </div>
      </NavLink>
    </div>
  );
}

export default Header;
