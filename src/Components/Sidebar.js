import React, { useState } from "react";
import "./css/Sidebar.css";

//packages
import Modal from "react-modal";

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
  //states
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <div className="sidebarOption">
          <img
            onClick={() => setModalOpen(true)}
            src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
            alt="plus icon"
          />

          {/* modal three props ..  */}
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            shouldCloseOnOverlayClick={false}
          >
            <div className="modal">
              <h1>Modal Div</h1>
            </div>
          </Modal>
        </div>
        <div className="sidebarIcons">
          <InboxOutlinedIcon />
        </div>
        <div className="sidebarIcons">
          <StarOutlined />
        </div>
        <div className="sidebarIcons">
          <WatchLaterIcon />
        </div>
        <div className="sidebarIcons">
          <SendIcon />
        </div>
        <div className="sidebarIcons">
          <InsertDriveFileIcon />
        </div>
        <div className="sidebarIcons">
          <LabelImportantSharpIcon />
        </div>
      </div>
      <div className="sidebarBottom">
        <div className="sidebarOptions">
          <div className="sidebarIcons">
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/meet_black_20dp.png"
              alt="meetIcon"
            />
          </div>
        </div>
        <div className="sidebarIcons">
          <VideocamIcon />
        </div>
        <div className="sidebarIcons">
          <KeyboardIcon />
        </div>
      </div>
      <div className="sidebarLast">
        <div className="sidebarOptions">
          <div className="sidebarIcons">
            <img
              src="https://www.gstatic.com/images/icons/material/system/1x/hangout_black_20dp.png"
              alt="hangoutIcon"
            />
          </div>
          <div className="sidebarOption">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
