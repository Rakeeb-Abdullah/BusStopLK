import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-G8-IDVciIelZHGl7WMkD0M4uv-v8ksw",
  authDomain: "db-test-77bfb.firebaseapp.com",
  databaseURL: "https://db-test-77bfb-default-rtdb.firebaseio.com",
  projectId: "db-test-77bfb",
  storageBucket: "db-test-77bfb.appspot.com",
  messagingSenderId: "309939105506",
  appId: "1:309939105506:web:739d5a6d1a67430e9178bb",
  measurementId: "G-0J481XSYPP",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// const busRef = firestore.collection("buses");

// const [buses] = useCollectionData(busRef);

export default db;
