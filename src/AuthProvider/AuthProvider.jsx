import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { useState } from "react";
import auth from "../Firebase/Firebase"
import { useEffect } from "react";

export const AuthContext= createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    // creating a user
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // user login
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // observer the current user
    useEffect(()=>{
           const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
                console.log('observe the current user',currentUser)
            })
            return ()=>{
                unsubscribe()
            }
    },[])

    const AuthInfo={user,createUser,signInUser}
    return (
        
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;