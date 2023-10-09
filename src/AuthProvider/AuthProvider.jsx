import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext } from "react";
import { useState } from "react";
import auth from "../Firebase/Firebase"
import { useEffect } from "react";


export const AuthContext= createContext(null)
const googleProvider=new GoogleAuthProvider()
const gitHubProvider=new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    // creating a user
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // user login
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    // google login
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // github login
    const gitHubLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider)
    }
   

    // observer the current user
    useEffect(()=>{
           const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
                console.log('observe the current user',currentUser)
                setLoading(false)
            })
            return ()=>{
                unsubscribe()
            }
    },[])

    const AuthInfo={user,createUser,signInUser,googleLogin,gitHubLogin,logOut,setLoading,loading}
    return (
        
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;