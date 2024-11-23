import { createUserWithEmailAndPassword, onAuthStateChanged, reauthenticateWithCredential, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import { auth } from "../../firebase";
import { createContext, useEffect, useState } from "react";
import { EmailAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const Authentication = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (current) => {
            setUser(current)
        })
        return () => {
            unSubscribe()
        }
    }, [])

   
      
    const updateProfileUser = (updateInfo) =>{
        return updateProfile(auth.currentUser,updateInfo);
    }

    const signOutUser = () => {
        signOut(auth)
    }

    const authValue = {
        LoginUser,
        createUser,
        user,
        setUser,
        signOutUser,
        updateProfileUser,
       
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;