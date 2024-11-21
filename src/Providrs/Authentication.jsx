import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from "../../firebase";
import { createContext, useEffect, useState } from "react";

  export const authContext= createContext(null);
// eslint-disable-next-line react/prop-types
const Authentication = ({children}) => {

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
       
    }
     const LoginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
     const [user, setUser]= useState(null);
     useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(current)=>{
              setUser(current)
        })
          return()=>{
            unSubscribe()
          }
        },[])
                
     const signOutUser=()=>{
        signOut(auth)
     }
     
     const authValue={
        LoginUser,
        createUser,
        user,
        setUser,
       signOutUser
     }

    return (
        <authContext.Provider value={authValue}>
               {children }
        </authContext.Provider>
    );
};

export default Authentication;