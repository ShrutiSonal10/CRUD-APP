import firebase from 'firebase/compat/app'
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqEhawwDhkTk_XQ9XNm-hrQoEZeYp140k",
  authDomain: "student-management-syste-45a02.firebaseapp.com",
  databaseURL: "https://student-management-syste-45a02-default-rtdb.firebaseio.com",
  projectId: "student-management-syste-45a02",
  storageBucket: "student-management-syste-45a02.appspot.com",
  messagingSenderId: "476317871020",
  appId: "1:476317871020:web:439b0b8d7d8a1528246809",
  measurementId: "G-4E1NDD7ZZQ"
};

// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();