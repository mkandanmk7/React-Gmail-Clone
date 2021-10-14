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
import { Avatar, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

function Sidebar() {
  //states
  const [modalOpen, setModalOpen] = useState(false);
  const [focus, setFocus] = useState(false);

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
            style={{
              overlay: {
                width: 500,
                height: "auto",
                backgroundColor: "rgba(0,0,0,0.6",
                zIndex: "1000",
                top: "50%",
                left: "35%",
                marginTop: "0px",
                marginLeft: "-100px",
              },
              content: {
                margin: 0,
                padding: 0,
                border: "none",
              },
            }}
          >
            <div className="modal_container">
              <div className="modal_top">
                <div className="modal_head">
                  <p>New Message</p>
                  <div className="modal_head_icons">
                    {/* onClick={closeModal} */}
                    <IconButton onClick={() => setModalOpen(false)}>
                      <Close />
                    </IconButton>
                  </div>
                </div>
                <div onClick={() => setFocus(true)} className="modal_Recipient">
                  <p>{focus ? "To" : "Recipient"}</p>
                </div>
              </div>
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
