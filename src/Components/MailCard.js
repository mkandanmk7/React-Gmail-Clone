import React from "react";

// accordion comp

import Accordion from "@material-ui/core/Accordion"; // give smooth expand content
import AccordionSummary from "@material-ui/core/AccordionSummary"; //shows only before expend content
import AccordionDetails from "@material-ui/core/AccordionDetails"; // it will show expend content
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//style comp
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Checkbox } from "@material-ui/core";

import "./css/MailCard.css";

//m_ui icons
import {
  Forward,
  Launch,
  MoreVert,
  Print,
  Replay,
  Reply,
  Star,
} from "@material-ui/icons";

// accordion styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

//accodidion func comp
function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* content will shown in head accordion */}
          <div className="accord_mid">
            <div className="accord_left">
              <Checkbox />
              <Star />
              <Typography className={classes.heading}>UserName</Typography>
            </div>
            <div className="accord_mid_center">
              <Typography className={classes.heading}>Subject</Typography>
              <p className={classes.heading}>Click here to see Mail content</p>
            </div>
            <div className="accord_mid_date">
              <Typography className={classes.heading}>12.00 AM</Typography>
            </div>
          </div>
        </AccordionSummary>
        {/* Expended details */}
        <AccordionDetails>
          <div className="accord_details">
            <div className="accord_details_top">
              <p>Subject</p>
              <div className="accord_details_topright">
                <Print />
                <Launch />
              </div>
            </div>
            <div className="accord_info">
              <Avatar />
              <div className="sender_info">
                <h4>
                  Sender Name<small>Email</small>
                </h4>
                <small>To whom</small>
              </div>
              <div className="sender_info_date">
                <div className="sender_date_option">
                  <small>6.45 PM</small>
                  <Star />
                  <Reply />
                  <MoreVert />
                </div>
              </div>
            </div>
            <div className="mail_content">
              <div class="mail_content_Accord">content</div>
              {/* components ours */}
              <ReplyMails />
              <ForwardMails />

              <div className="mail_reply_links">
                <div className="mail_reply_link">
                  <Replay />
                  <a href="#">Reply</a>
                </div>
                <div className="mail_reply_link">
                  <Forward />
                  <a href="#">Forward</a>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

// reply mail component
const ReplyMails = () => {
  return <h2>Replied To...</h2>;
};

// forward Mail component
const ForwardMails = () => {
  return <h2>Forwarded to ..</h2>;
};

function MailCard() {
  return (
    <div className="mailCards">
      <SimpleAccordion />
    </div>
  );
}

export default MailCard;
