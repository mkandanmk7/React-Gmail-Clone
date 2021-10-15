import React from "react";

// accordion comp

import Accordion from "@material-ui/core/Accordion"; // give smooth expand content
import AccordionSummary from "@material-ui/core/AccordionSummary"; //shows only before expend content
import AccordionDetails from "@material-ui/core/AccordionDetails"; // it will show expend content
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//style comp
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";

import "./css/MailCard.css";

//m_ui icons
import { Star } from "@material-ui/icons";

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
              <Typography className={classes.heading}>TimeStamp</Typography>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function MailCard() {
  return (
    <div className="mailCards">
      <SimpleAccordion />
    </div>
  );
}

export default MailCard;
