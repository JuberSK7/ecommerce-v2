import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./navbarStyle.css";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className="header">
          <img
            className="header-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />

          <div className="header-search">
            <input type="text" className="header-searchInp" />
            <SearchIcon className="header-searchIcon" />
          </div>

          <div className="header-nav">
            <div className="header-link">
              <div className="header-option">
                <span className="header-optionLineOne">Hello User</span>
                <span className="header-optionLineTwo">Login</span>
              </div>
            </div>

            <div className="header-link">
              <div className="header-option">
                <span className="header-optionLineOne">Returns</span>
                <span className="header-optionLineTwo">& Orders</span>
              </div>
            </div>

            <div className="header-link">
              <div className="header-option">
                <span className="header-optionLineOne"></span>
                <span className="header-optionLineTwo"></span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
