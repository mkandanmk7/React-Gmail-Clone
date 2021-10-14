import React from "react";
import "./css/Mail.css";

//Check box Mui comp
import { Checkbox } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Forum,
  Inbox,
  Info,
  Keyboard,
  LocalOffer,
  MoreVert,
  PeopleAlt,
  Refresh,
} from "@material-ui/icons";

//icons

function Mail() {
  return (
    <div className="body_container">
      <div className="body_top_container">
        <div className="body_top">
          <Checkbox className="checkbox" />
          <ArrowDropDown />
          <Refresh />
          <MoreVert />
        </div>
        <div className="body_right">
          <ChevronLeft />
          <ChevronRight />
          <Keyboard />
          <ArrowDropDown />
        </div>
      </div>
      <div className="body_mid_container">
        <div className="mid_options">
          <div className="mid_option">
            <Inbox />
            <h3>Primary</h3>
          </div>
          <div className="mid_option">
            <PeopleAlt />
            <h3>Social</h3>
          </div>
          <div className="mid_option">
            <LocalOffer />
            <h3>Promotions</h3>
          </div>
          <div className="mid_option">
            <Info />
            <h3>Updates</h3>
          </div>
          <div className="mid_option">
            <Forum />
            <h3>Forums</h3>
          </div>
        </div>
      </div>

      <div className="card_container"></div>
    </div>
  );
}

export default Mail;
