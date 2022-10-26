import React, { createContext,useState,useEffect } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { createBrowserRouter } from 'react-router-dom';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const signUp =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signINWithGoole =(provider)=>{
        return signInWithPopup(auth,provider);
    }
    const logOut = ()=>{
        return signOut(auth);

        }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
                setUser(currentUser);
        })
        return ()=> unSubscribe;
    },[])
    const authInfo ={user,signUp,signIn,signINWithGoole,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;