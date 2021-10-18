import initializeFirebase from '../Firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeFirebase()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () =>
{
    // All states
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    // Login with google
    const loginWithGoogle = () =>
    {
        signInWithPopup(auth, googleProvider)
            .then(result =>
            {
                setUser(result.user);
            }).catch(error =>
            {
                setError(error.message);
            });
    };


    useEffect(() =>
    {
        // Update user state every change
        onAuthStateChanged(auth, user =>
        {
            if (user) {
                setUser(user);
            }
        })
    },[])
    

    // Return necessary functions && states
    return {
        loginWithGoogle,
        user,
        error
    }
}

// Export default
export default useFirebase;