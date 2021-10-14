import React from "react";
import "./css/Sidebar.css";

//icons
import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import StarOutlined from "@material-ui/icons/StarOutlined";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import LabelImportantSharpIcon from "@material-ui/icons/LabelImportantSharp";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import { Avatar } from "@material-ui/core";

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
        <div className="sidebarTopIcons">
          <WatchLaterIcon />
        </div>
        <div className="sidebarTopIcons">
          <SendIcon />
        </div>
        <div className="sidebarTopIcons">
          <InsertDriveFileIcon />
        </div>
        <div className="sidebarTopIcons">
          <LabelImportantSharpIcon />
        </div>
      </div>
      <div className="sidebarBottom">
        <div className="sidebarOption">
          <img
            src="https://www.gstatic.com/images/icons/material/system/1x/meet_black_20dp.png"
            alt="meetIcon"
          />
        </div>
        <div className="sidebarOption">
          <VideocamIcon />
        </div>
        <div className="sidebarOption">
          <KeyboardIcon />
        </div>
      </div>
      <div className="sidebarLast">
        <div className="sidebarLastOption">
          <div className="sidebarOption">
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/hangout_black_20dp.png"
              alt="hangoutIcon"
            />
          </div>
          <div className="sidebarAvatar">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
