import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDETd5Uq-qxSjh_I4Zyn9BpLcMIh_XOkGA",
  authDomain: "react-clone-66a15.firebaseapp.com",
  projectId: "react-clone-66a15",
  storageBucket: "react-clone-66a15.appspot.com",
  messagingSenderId: "141326512480",
  appId: "1:141326512480:web:c683ddc611bae02cf1ee05",
  measurementId: "G-1SBHRQ7WZE",
};

// intialize
const firebaseApp = firebase.initializeApp(firebaseConfig);

// db store
const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
