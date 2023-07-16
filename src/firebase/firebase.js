// Import the functions you need from the SDKs you need
import { firebase } from "firebase";
import { getAnalytics } from "firebase/analytics";
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
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Analytics and get a reference to the service
const analytics = getAnalytics(app);

// Create a Database Variable (Firestore) and get a reference to the service
export const database = firebase.firestore();

export default firebase;
