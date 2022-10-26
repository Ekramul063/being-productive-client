import React, { createContext } from 'react';
import{createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { createBrowserRouter } from 'react-router-dom';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const user = {name:"titu"};
    const signUp =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo ={user,signUp,signIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;