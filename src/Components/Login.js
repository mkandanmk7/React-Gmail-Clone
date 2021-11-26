import React, { useState } from "react";
import "./css/Login.css";
import { auth, provider } from "../firebase";

function Login() {
  //states
  const [email, setEmail] = useState(""); // input email
  const [password, setPassword] = useState(""); //input password

  //handle ( )

  //Register Auth
  const handleRegister = (event) => {
    event.preventDefault();
    //createUser with data
    if (email && password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          alert("Registered Successfully");
        })
        .catch((err) => alert(err.message));
    } else {
      alert("Please fill correctly");
    }
  };

  //Login auth
  const handleLogin = (event) => {
    event.preventDefault();

    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          alert("Signed in Successfully");
        })
        .catch((err) => alert(err.message));
    } else {
      alert("Email Id or password incorrect");
    }
  };

  // using google acc auth
  const handleSignIn = (event) => {
    event.preventDefault();

    auth
      .signInWithPopup(provider)
      .then((auth) => alert("Signed successfully"))
      .catch((err) => alert(err.message));
  };

  // Form page will render based on register (true or false);
  const [register, setRegister] = useState(false);

  return (
    <div className="login">
      {register ? (
        <>
          {/* Register div */}

          <div className="loginContainer">
            <div className="logo">
              <img
                src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
                alt="logo"
              />
              <h3>Register</h3>
              <p>Create Account to continue with Gmail</p>
            </div>
            <form className="loginContent">
              <input
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email"
              />
              <input
                required={true}
                placeholder="password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" onClick={handleRegister}>
                Register
              </button>
              <button onClick={handleSignIn}>Continue Using Google</button>
            </form>
            <p onClick={() => setRegister(false)}>Login?</p>
          </div>
        </>
      ) : (
        <>
          {/* login Div */}
          <div className="loginContainer">
            <div className="logo">
              <img
                src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png"
                alt="logo"
              />
              <h3>Sign in</h3>
              <p>to continue to Gmail</p>
            </div>
            <form className="loginContent">
              <input
                value={email}
                required={true}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                required={true}
              />

              <button type="submit" onClick={handleLogin}>
                Login
              </button>
              <button onClick={handleSignIn}>Continue using Google</button>
            </form>
            <p onClick={() => setRegister(true)}>Register?</p>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <h3>Use This Credentials for test Purpose</h3>
              <div style={{ color: "white" }}>
                <p>
                  <b>email</b> : test@gmail.com
                </p>
                <p>
                  {" "}
                  <b>Password</b> : test123
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
