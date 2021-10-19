/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

//packages
import Modal from "react-modal";
import firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import ReactHtmlParser from "react-html-parser";

//file comp:
import { selectUser } from "../features/userSlice";
import { selectMailId, setMailId } from "../features/mailSlice";
import db from "../firebase";

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

// accordion styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    marginLeft: "5px",
    fontWeight: "bold",
    // fontWeight: theme.typography.fontWeightRegular,
  },
}));

//accodidion func comp
function SimpleAccordion({ Id, mail }) {
  console.log(Id);

  // console.log(mail); // mail details
  const classes = useStyles();

  const user = useSelector(selectUser);
  // console.log(user); //user details
  const mailId = useSelector(selectMailId); //unique mail id
  console.log(mailId);
  const dispatch = useDispatch();
  // console.log(dispatch);

  //states
  const [modalOpen, setModalOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [recipient, setRecipient] = useState(mail.to);
  const [subject, setSubject] = useState(mail.subject);
  const [content, setContent] = useState("");

  const [forward, setForward] = useState(false);
  const [repliedMails, setRepliedMails] = useState([]);
  const [forwardedMails, setForwardedMails] = useState([]);

  const [replied, setReplied] = useState(false);
  const [forwarded, setForwarded] = useState(false);
  //handle functions

  //send Mail ()
  const sendMail = (id) => {
    forward ? addForward(id) : addReply(id);
  };

  //forward mails()
  useEffect(() => {
    if (mailId?.mailId) {
      db.collection("sentMails")
        .doc(mailId.mailId)
        .collection("forwardedMails")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setForwardedMails(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              fwdMail: doc.data(),
            }))
          )
        );

      setForwarded(true);
    }
  }, [mailId]);

  //render the reply using useeffect
  useEffect(() => {
    console.log("mouted");
    console.log(mailId);
    if (mailId) {
      console.log("mounted In");
      db.collection("sentMails")
        .doc(mailId.mailId)
        .collection("repliedMails")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setRepliedMails(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              reMail: doc.data(),
            }))
          )
        );
      console.log(repliedMails);
      setReplied(true);
    }
  }, [mailId]);

  // forward ()
  const addForward = (id) => {
    if (id.mailId) {
      console.log(id.mailId);
      db.collection("sentMails")
        .doc(id.mailId)
        .collection("forwardedMails")
        .add({
          from: user.email,
          to: recipient,
          subject: `fwd<${subject}>`,
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
          content: content,
          forwarded: true,
          id: id,
          user: user,
        });
      alert("Mail forwarded Successfully");
      setModalOpen(false);
      setContent("");
    }
  };

  //reply ()
  const addReply = (id) => {
    console.log(id); //unique Id
    if (id.mailId) {
      // console.log(id.mailId);
      db.collection("sentMails")
        .doc(id.mailId)
        .collection("repliedMails")
        .add({
          from: user.email,
          to: recipient,
          subject: `re<${subject}>`,
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
          content: content,
          replied: true,
          id: id,
          user: user,
        });
      alert("Replied Successfully");
      setModalOpen(false);
      setContent("");
    }
  };
  const handleReply = () => {
    setModalOpen(true);
    console.log(replied);
    setForward(false); //while reply dont open forward;
  };

  const handleForward = () => {
    setModalOpen(true);
    setForward(true);
  };

  return (
    <div>
      <Accordion
        key={Id}
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
          <div className="accord_details" key={Id}>
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
              <div className="mail_content_Accord">
                {ReactHtmlParser(mail.content)}
              </div>
              {/* components ours */}
              {/* <ReplyMails />
              <ForwardMails /> */}

              {/* modal for reply and forward */}
              <Modal
                isOpen={modalOpen}
                ariaHideApp={false}
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
                      <button onClick={() => sendMail(mailId)}>
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

              {/* reply mails and forward mails mapping */}
              {replied &&
                repliedMails.map(({ id, reMail }) => (
                  <ReplyMails key={id} id={id} mail={reMail} />
                ))}
              {forwarded &&
                forwardedMails.map(({ id, fwdMail }) => (
                  <ForwardMails key={id} id={id} mail={fwdMail} />
                ))}
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
const ReplyMails = ({ key, id, mail }) => {
  console.log(key);
  console.log("Replied IN");
  //getUser datails
  console.log(mail);
  console.log(id);
  const user = useSelector(selectUser);

  return (
    <>
      <div className="repliedMail">
        <div className="repliedMailContainer" key={key}>
          <div className="repliedMailTop">
            <h5>{`<replied mail>`}</h5>
          </div>

          <div className="repliedMailMid">
            <p
              style={{
                margin: "0px 10px",
                paddingBottom: "10px",
                fontWeight: "500",
              }}
            >
              {mail.subject}
            </p>
            <div className="accordDetailsInfo">
              <Avatar src={mail.user.photo} />
              <div className="sendersInfo">
                <h5>
                  {mail.user.displayName}
                  <small>{mail.from}</small>
                </h5>
                <small>{`To ${mail.to === user.email ? "me" : mail.to}`}</small>
              </div>
              <div className="sendersInfoDate">
                <div className="sendersInfoDateOption">
                  <small>
                    {new Date(mail.timestamp?.toDate()).toLocaleString()}
                  </small>
                  <Star />
                  <Reply />
                  <MoreVert />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mailContent">
          <div className="mailContentAccord">
            {ReactHtmlParser(mail.content)}
          </div>
        </div>
      </div>
    </>
  );
};

// forward Mail component
const ForwardMails = ({ key, id, mail }) => {
  console.log(id);
  const user = useSelector(selectUser);
  // console.log(user); // Logged iN user details
  return (
    <>
      <div className="repliedMail">
        <div className="repliedMailContainer" key={key}>
          <div className="repliedMailTop">
            <h5>{`<forwarded mail>`}</h5>
          </div>
          <div className="repliedMailMid">
            <div className="accordDetailsInfo">
              <Avatar src={mail.user.photo} />
              <div className="sendersInfo">
                <h4>
                  {mail.user.displayName}
                  <small>{mail.from}</small>
                </h4>
                <small>{`To ${mail.to === user.email ? "me" : mail.to}`}</small>
              </div>
              <div className="sendersInfoDate">
                <div className="sendersInfoDateOption">
                  <small>
                    {new Date(mail.timestamp?.toDate()).toLocaleString()}
                  </small>
                  <Star />
                  <Reply />
                  <MoreVert />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mailContent">
          <div className="mailContentAccord">
            {ReactHtmlParser(mail.content)}
          </div>
        </div>
      </div>
    </>
  );
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
      // console.log(mails); // all the mails details  array[]
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
        // eslint-disable-next-line array-callback-return
        mails.map(({ id, mail }) => {
          console.log(id);
          if (user.email === mail.to || user.email === mail.from) {
            return <SimpleAccordion key={id} Id={id} mail={mail} />;
          }
        })}
    </div>
  );
}

export default MailCard;
