import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { useState } from "react";
import auth from "../Firebase/Firebase";

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

    const AuthInfo={user,createUser,signInUser}
    return (
        
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;