import React, { useState } from "react";
import "./css/Login.css";

function Login() {
  //states
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState(""); // input email
  const [password, setPassword] = useState(""); //input password

  //handle ()

  const handleRegister = () => {
    alert("You Registered");
  };

  const handleLogin = () => {
    alert("You Logged In");
  };

  const handleSignIn = () => {
    alert("You signed In");
  };

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
            <div className="loginContent">
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
              <button type="submit" onClick={handleSignIn}>
                Continue Using Google
              </button>
            </div>
            <p onclick={() => setRegister(false)}>Login?</p>
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
            <div className="loginContent">
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
              />
              <button type="submit" onClick={handleLogin}>
                Login
              </button>
              <button type="submit" onClick={handleSignIn}>
                Continue Using Google
              </button>
            </div>
            <p onClick={() => setRegister(true)}>Register?</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
