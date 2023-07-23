import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUserAndStore } from '../store/UserSlice'

const useFirebaseAuth = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    
    const firebaseSignup = async (email, password) => {
        try {
            setIsLoading(true);

            const result = await createUserWithEmailAndPassword(auth, email, password);
            const { user } = result;
      
            dispatch(setUser(user));
        } catch (error) {
            logEvent(analytics, 'error on firebaseSignup', error);
        } finally {
            setIsLoading(false);
        }
      }  
}

export default useFirebaseAuth;