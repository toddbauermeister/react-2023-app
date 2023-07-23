import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics'
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { logEvent } from "firebase/analytics";
// import { getAnalytics } from "firebase/analytics";

// Setup Firebase Config
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
  console.log('onAuthStateChanged')
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
