import initializeFirebase from '../Firebase/firebase.init'
import { getAuth, signInWithPopup,GithubAuthProvider ,signOut ,signInWithEmailAndPassword ,createUserWithEmailAndPassword , GoogleAuthProvider,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeFirebase()
const googleProvider = new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider();
const auth = getAuth();

const useFirebase = () =>
{
    // All states
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    // Get Email from input box
    const getEmail = (e) =>
    {
        setEmail(e.target.value);
    }



    // Get Password from input box
    const getPassword = (e) =>
    {
        setPassword(e.target.value);
    }


    // Register with email and password
    const registerWithEmailAndPassword=() =>
    {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential =>
            {
                setUser(userCredential.user)
            }).catch(error =>
            {
                setError(error.message);
            })
    }


    // Login with email and password
    const loginWithEmailAndPassword = () =>
    {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential =>
            {
                setUser(userCredential.user);
            }).catch(error =>
            {
                setError(error.message);
            })
    }



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


    // Login with github
    const loginWithGithub = () =>
    {
        signInWithPopup(auth, githubProvider)
            .then(result =>
            {
                setUser(result.user);
            }).catch(error =>
            {
                setError(error.message);
            })
    }


    // Log out
    const logOut = () =>
    {
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
                setError(error.message)
          });
    }


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
    
    console.log(user);
    // Return necessary functions && states
    return {
        registerWithEmailAndPassword,
        loginWithEmailAndPassword,
        loginWithGoogle,
        getEmail,
        logOut,
        loginWithGithub,
        getPassword,
        user,
        error
    }
}

// Export default
export default useFirebase;