// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { logEvent } from "firebase/analytics";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8FyOMzpm8gzT8gaZj3lf8pHYxYwnYUVw",
  authDomain: "react-2023-app-dev.firebaseapp.com",
  projectId: "react-2023-app-dev",
  storageBucket: "react-2023-app-dev.appspot.com",
  messagingSenderId: "266862212297",
  appId: "1:266862212297:web:e8828d93cbfdf79a720918",
  measurementId: "G-1XL417H18P"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = firebase.auth(firebaseApp);

// Initialize Firebase Analytics and get a reference to the service
export const analytics = firebase.analytics(firebaseApp);

// Create a Database Variable (Firestore) and get a reference to the service
export const database = firebaseApp.firestore();

export const firebaseSignup = async (email, password) => {
  try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      return user;
  } catch (error) {
      logEvent(analytics, 'error on firebaseSignup', error);
  }
}  

export const firebaseLogin = async (email, password) => {
  try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user

      return user;
  } catch (error) {
      logEvent(analytics, 'error on firebaseLogin', error);
  }
} 

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
