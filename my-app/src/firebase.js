import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseSettings = {
  apiKey: "AIzaSyCfsvXKJguArR_axE1-806BgdPhfyW1c90",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


let app = !firebase.apps.length
  ? firebase.initializeApp(firebaseSettings)
  : firebase.app();

const firestore = app.firestore();

export const database = {
  exercises: firestore.collection("exercises"),
  workouts: firestore.collection("workouts"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default app;



// import { initializeApp } from 'firebase/app';
// import "firebase/auth";

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);