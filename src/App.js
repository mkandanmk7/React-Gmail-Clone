import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

//imported components
import { login, logout, selectUser } from "./features/userSlice";
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
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL
              ? authUser.photoURL
              : "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
            displayName: authUser.displayName
              ? authUser.displayName
              : authUser.email,
            email: authUser.email,
            emailVerified: authUser.emailVerified,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return <div className="App">{user ? <Gmail /> : <Login />}</div>;
}

export default App;
