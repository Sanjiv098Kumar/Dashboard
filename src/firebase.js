// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr3HNIZN689OUes-_dLBt2x1KrBkQTcz0",
  authDomain: "react-interview-d3203.firebaseapp.com",
  projectId: "react-interview-d3203",
  storageBucket: "react-interview-d3203.appspot.com",
  messagingSenderId: "942024761302",
  appId: "1:942024761302:web:c8cc30ddae93f975b24e77"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth