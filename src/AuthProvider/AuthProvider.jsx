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
    // creating a user
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // user login
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout
    const logOut=()=>{
        return signOut(auth)
    }
    // google login
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    // github login
    const gitHubLogin=()=>{
        return signInWithPopup(auth,gitHubProvider)
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

    const AuthInfo={user,createUser,signInUser,googleLogin,gitHubLogin,logOut}
    return (
        
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;