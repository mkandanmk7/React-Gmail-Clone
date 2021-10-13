import React from "react";

//components
import Header from "./Header";
import Sidebar from "./Sidebar";

//styling
import "./css/Gmail.css";

function Gmail() {
  return (
    <div className="gmail">
      <Header />
      <div className="gmailBody">
        <Sidebar />
      </div>
    </div>
  );
}

export default Gmail;
