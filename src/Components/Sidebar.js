import React from "react";
import "./css/Sidebar.css";

//icons
import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import StarOutlined from "@material-ui/icons/StarOutlined";
import WatchLaterIcon from "@material-ui/icons/WatchLaterIcon";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <div className="sidebarOption">
          <img
            src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
            alt="plus icon"
          />
        </div>
        <div className="sidebarTopIcons">
          <InboxOutlinedIcon />
        </div>
        <div className="sidebarTopIcons">
          <StarOutlined />
        </div>
        {/* <div className="sidebarTopIcons">
          <WatchLaterIcon />
        </div> */}
        <div className="sidebarTopIcons"></div>
        <div className="sidebarTopIcons"></div>
        <div className="sidebarTopIcons"></div>
      </div>
    </div>
  );
}

export default Sidebar;
