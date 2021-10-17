// import firebase from "firebase";
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEMb2OQWjYEIT4t0SFeeYCZrZxwYzc6Bg",
  authDomain: "clone-01-58cee.firebaseapp.com",
  projectId: "clone-01-58cee",
  storageBucket: "clone-01-58cee.appspot.com",
  messagingSenderId: "464031529311",
  appId: "1:464031529311:web:630a3b94a1599f1aef5eea",
  measurementId: "G-JJ7GTK77TC",
};

// intialize
const firebaseApp = firebase.initializeApp(firebaseConfig);

// db store
const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
