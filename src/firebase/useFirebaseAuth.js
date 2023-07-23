import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth, analytics } from '../firebase/firebase' 
import { logEvent } from "firebase/analytics";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUserAndStore } from '../store/UserSlice'

const useFirebaseAuth = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    
    const signupEmail = async (email, password, displayName) => {
        try {
            setIsLoading(true);

            // Create Firebase User
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const { user } = result;

            // Set Display Name on Firebase User
            await updateProfile(auth.currentUser, { displayName });
            
            dispatch(setUser(user));
        } catch (error) {
            logEvent(analytics, 'error on firebaseSignup', error);
        } finally {
            setIsLoading(false);
        }
      }  

      return { isLoading, signupEmail };
}

export default useFirebaseAuth;