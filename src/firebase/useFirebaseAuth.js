import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth, analytics,  } from '../firebase/firebase'
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

            // Set the User in Redux
            dispatch(setUser(user));
        } catch (error) {
            logEvent(analytics, 'error on firebaseSignup', error);
        } finally {
            setIsLoading(false);
        }
    }

    const signinEmail = async (email, password) => {
        try {
            setIsLoading(true);

            // Log the Firebase User In
            const result = await signInWithEmailAndPassword(auth, email, password);
            const { user } = result; 

            // Set the User in Redux
            dispatch(setUser(user));
        } catch (error) {
            logEvent(analytics, 'error on firebaseLogin', error);
        } finally {
            setIsLoading(false);
        }
    }

    const signoutUser = async (email, password) => {
        try {
            setIsLoading(true);

            // Sign the Firebase User Out
            auth.signOut()

            // Set the User in Redux
            dispatch(clearUserAndStore());
        } catch (error) {
            logEvent(analytics, 'error on firebaseLogin', error);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, signupEmail, signinEmail, signoutUser };
}

export default useFirebaseAuth;