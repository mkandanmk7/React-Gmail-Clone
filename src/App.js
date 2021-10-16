import React from "react";
import "./App.css";
import { useSelector } from "react-redux";

//imported components
import { selectUser } from "./features/userSlice";
import Gmail from "./Components/Gmail";
import Login from "./Components/Login";

function App() {
  const user = useSelector(selectUser);

  return <div className="App">{user ? <Gmail /> : <Login />}</div>;
}

export default App;
