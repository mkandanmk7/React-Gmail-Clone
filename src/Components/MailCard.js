import React, { useEffect, useState } from "react";

//packages
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import ReactHtmlParser from "react-html-parser";

//file comp:
import { selectUser } from "../features/userSlice";
import { selectMailId, setMailId } from "../features/mailSlice";

// accordion comp
import Accordion from "@material-ui/core/Accordion"; // give smooth expand content
import AccordionSummary from "@material-ui/core/AccordionSummary"; //shows only before expend content
import AccordionDetails from "@material-ui/core/AccordionDetails"; // it will show expend content
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//style comp
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Checkbox, IconButton } from "@material-ui/core";

import "./css/MailCard.css";

// modal comp and icons
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

//m_ui icons
import {
  Forward,
  Launch,
  Print,
  Replay,
  Reply,
  Star,
} from "@material-ui/icons";
import db from "../firebase";

// accordion styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    marginLeft: "5px",
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

//accodidion func comp
function SimpleAccordion({ key, Id, mail }) {
  console.log(mail);
  const classes = useStyles();

  const user = useSelector(selectUser);
  const mailId = useSelector(selectMailId);
  const dispatch = useDispatch();
  console.log(dispatch);

  //states
  const [modalOpen, setModalOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const [forward, setForward] = useState(false);

  //handle functions

  const handleReply = () => {
    setModalOpen(true);
    setForward(false); //while reply dont open forward;
  };

  const handleForward = () => {
    setModalOpen(true);
    setForward(true);
  };

  //send Mail ()
  const sendMail = (e, id) => {
    forward ? addForward(id) : addReply(id);
  };

  const addForward = () => {
    alert("Hello from forward");
  };
  const addReply = () => {
    alert("hello from Reply");
  };

  return (
    <div>
      <Accordion
        key={key}
        onClick={() =>
          dispatch(
            setMailId({
              mailId: Id, // unique id gen by firebase
            })
          )
        }
      >
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
              <Typography className={classes.heading}>
                {
                  //check user mail and db mail name
                  mail.user.email === user.email
                    ? "me"
                    : mail.from.toString().split("@")[0].trim()
                }
              </Typography>
            </div>
            <div className="accord_mid_center">
              <Typography className={classes.heading}>
                {mail.subject}
              </Typography>
              <p className={classes.heading}>Click here to see Mail content</p>
            </div>
            <div className="accord_mid_date">
              <Typography className={classes.heading}>
                {new Date(mail.timestamp?.toDate()).toLocaleString()}
              </Typography>
            </div>
          </div>
        </AccordionSummary>
        {/* Expended details */}
        <AccordionDetails>
          <div className="accord_details">
            <div className="accord_details_top">
              <p>{mail.subject}</p>
              <div className="accord_details_topright">
                <Print />
                <Launch />
              </div>
            </div>
            <div className="accord_info">
              <Avatar src={mail.user.photo} />
              <div className="sender_info">
                <h4>
                  {mail.user.displayName}
                  <small> {mail.from}</small>
                </h4>
                <small>{`To ${mail.to === user.email ? "me" : mail.to}`}</small>
              </div>
              <div className="sender_info_date">
                <div className="sender_date_option">
                  <small>
                    {new Date(mail.timestamp?.toDate()).toLocaleTimeString()}
                  </small>
                  <Star />
                  <Reply />
                  <MoreVert />
                </div>
              </div>
            </div>
            <div className="mail_content">
              <div class="mail_content_Accord">
                {ReactHtmlParser(mail.content)}
              </div>
              {/* components ours */}
              <ReplyMails />
              <ForwardMails />

              {/* modal for reply and forward */}
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
                      <p>{forward ? "Forward" : "Reply"}</p>
                      <div className="modal_head_icons">
                        <IconButton onClick={() => setModalOpen(false)}>
                          <Close />
                        </IconButton>
                      </div>
                    </div>
                    {/* midd modal */}
                    <div
                      onClick={() => setFocus(true)}
                      className="modal_Recipient"
                    >
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
                        placeholder={
                          forward
                            ? "Add content then forward mail..."
                            : "Add reply to this mail..."
                        }
                      />
                    </div>
                  </div>
                  {/* bottom modal  */}
                  <div className="modal_bottom_container">
                    <div className="modal_bottom">
                      {/* onClick={sendMail} */}
                      <button onClick={(e) => sendMail(mailId)}>
                        {forward ? "Forward" : "Reply"}
                      </button>

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

              <div className="mail_reply_links">
                <div onClick={handleReply} className="mail_reply_link">
                  <Replay />
                  <a href="#">Reply</a>
                </div>
                <div onClick={handleForward} className="mail_reply_link">
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

// mailCard component

function MailCard() {
  const [mails, setMails] = useState([]); // empty array initaily
  const [userMails, setUserMails] = useState([]);
  const [show, setShow] = useState(false); // initially false for not show
  const user = useSelector(selectUser);

  useEffect(() => {
    //get mails from fStore
    db.collection("sentMails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMails(
          snapshot.docs.map((doc) => ({
            id: doc.id, // unique Id
            mail: doc.data(), // contails mail details
          }))
        )
      );
  }, []);

  //
  useEffect(() => {
    if (mails.length !== 0) {
      console.log(mails);
      mails.map(({ id, mail }) => {
        if (user.email === mail.to || user.email === mail.from) {
          // update show state
          setShow(true);
          setUserMails(mail);
        }
      });
    }
  }, [mails, user.email]);

  return (
    <div className="mailCards">
      {show &&
        mails.map(({ id, mail }) => {
          if (user.email === mail.to || user.email === mail.from) {
            return (
              <>
                <SimpleAccordion key={id} Id={id} mail={mail} />
              </>
            );
          }
        })}
    </div>
  );
}

export default MailCard;
