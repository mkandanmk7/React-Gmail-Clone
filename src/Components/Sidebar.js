import React, { useState } from "react";
import "./css/Sidebar.css";

//packages
import Modal from "react-modal";
import ReactQuill from "react-quill";

// M-UI componentz
import { Avatar, IconButton } from "@material-ui/core";

//icons
import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import StarOutlined from "@material-ui/icons/StarOutlined";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import LabelImportantSharpIcon from "@material-ui/icons/LabelImportantSharp";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import {
  AttachFile,
  Close,
  Delete,
  Link,
  MoreVert,
  ScreenLockRotation,
  SentimentDissatisfied,
  TextFormat,
} from "@material-ui/icons";

//quill theme
import "react-quill/dist/quill.snow.css";

function Sidebar() {
  //states
  const [modalOpen, setModalOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

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
                height: 400,
                backgroundColor: "rgba(0,0,0,0.6",
                zIndex: "1000",
                top: "50%",
                left: "35%",
                marginTop: "-100px",
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
              {/* modal_top */}
              <div className="modal_top">
                <div className="modal_head">
                  <p>New Message</p>
                  <div className="modal_head_icons">
                    <IconButton onClick={() => setModalOpen(false)}>
                      <Close />
                    </IconButton>
                  </div>
                </div>
                {/* midd modal */}
                <div onClick={() => setFocus(true)} className="modal_Recipient">
                  <p>{focus ? "To" : "Recipient"}</p>
                  <input
                    value={recipient}
                    onChange={(event) => setRecipient(event.target.value)}
                    type="text"
                  />
                </div>
                <div className="modal_Recipient">
                  <input
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div className="quill">
                  <ReactQuill
                    value={content}
                    onChange={(value) => setContent(value)}
                    placeholder="Compose Your mail..."
                  />
                </div>
              </div>
              {/* bottom modal  */}
              <div className="modal_bottom_container">
                <div className="modal_bottom">
                  {/* onClick={sendMail} */}
                  <button>Send</button>

                  <TextFormat />
                  <AttachFile />
                  <Link />
                  <SentimentDissatisfied />
                  <ScreenLockRotation />
                  <div className="modal_bottom_last">
                    <MoreVert />
                    <Delete />
                  </div>
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
