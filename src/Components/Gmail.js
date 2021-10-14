import React from "react";

//components
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";

//styling
import "./css/Gmail.css";
import Widget from "./Widget";

function Gmail() {
  return (
    <div className="gmail">
      <Header />
      <div className="gmailBody">
        <Sidebar />
        <Mail />
        <Widget />
      </div>
    </div>
  );
}

export default Gmail;
