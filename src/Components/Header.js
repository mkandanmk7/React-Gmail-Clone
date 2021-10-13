import React from "react";
import "./css/Header.css";

import { Avatar } from "@material-ui/core";

//icons
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import DialpadOutlined from "@material-ui/icons/DialpadOutlined";

function Header() {
  return (
    <div className="Header">
      <div className="header_left">
        <MenuIcon />
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"
          alt="gmailLogo"
        />
      </div>
      <div className="header_center">
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="search Mail" />
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="header_right">
        <div className="header_right_icons">
          <HelpOutlinedIcon />
          <SettingsOutlinedIcon />
          <DialpadOutlined />
        </div>
        <div className="header_avatar" style={{ cursor: "pointer" }}>
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
