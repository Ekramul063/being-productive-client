import React, { createContext,useState,useEffect } from 'react';
import{createUserWithEmailAndPassword, getAuth,updateProfile , onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { createBrowserRouter } from 'react-router-dom';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
    const signUp =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signINWithGoole =(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const signINWithGit=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);

        }
        const updateProfile = (name,photo) =>{
            return updateProfile (auth.currentUser,{
                displayName:name,
                PhotoURL:photo,
            })
        }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
                setUser(currentUser);
                setLoading(false);
        })
        return ()=> unSubscribe;
    },[])
    const authInfo ={user,loading,updateProfile,signUp,signIn,signINWithGoole,signINWithGit,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;