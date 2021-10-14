import React from "react";
import "./css/Widget.css";

function Widget() {
  return (
    <div className="widget">
      <div className="widget_options">
        <img
          src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
          alt="calender"
        />
      </div>

      <div className="widget_options">
        <img
          src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
          alt="tipsicon"
        />
      </div>
      <div className="widget_options">
        <img
          src="https://www.gstatic.com/companion/icon_assets/contacts_2x.png"
          alt="contact"
        />
      </div>
      <div className="widget_options">
        <img
          src="https://www.gstatic.com/companion/icon_assets/tasks2_2x.png"
          alt="tasks"
        />
      </div>

      <div className="widget_options">
        <img
          src="https://www.gstatic.com/images/icons/material/system/1x/add_black_24dp.png"
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Widget;
