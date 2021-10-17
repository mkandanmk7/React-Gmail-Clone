import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

//imported components
import { login, selectUser } from "./features/userSlice";
import Gmail from "./Components/Gmail";
import Login from "./Components/Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(dispatch);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch(login({}));
      }
    });
  }, [dispatch]);

  return <div className="App">{user ? <Gmail /> : <Login />}</div>;
}

export default App;
