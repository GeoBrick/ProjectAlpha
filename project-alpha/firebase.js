// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp4_WJgf52GMpAOvDthG6wtuvpk-pJPco",
  authDomain: "project-alpha-cbbdd.firebaseapp.com",
  projectId: "project-alpha-cbbdd",
  storageBucket: "project-alpha-cbbdd.appspot.com",
  messagingSenderId: "1016343385208",
  appId: "1:1016343385208:web:99fedc0e70f4f21999898d",
  measurementId: "G-RYPWR746TZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);