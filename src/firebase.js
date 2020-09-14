import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkmK1mv0xP0SJR2JhcMycNlyO-P0neFIc",
  authDomain: "v2-a5875.firebaseapp.com",
  databaseURL: "https://v2-a5875.firebaseio.com",
  projectId: "v2-a5875",
  storageBucket: "v2-a5875.appspot.com",
  messagingSenderId: "833123557659",
  appId: "1:833123557659:web:fa929319adea6be558f3be",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
