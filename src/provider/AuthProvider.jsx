import {useEffect, useState } from 'react';

import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase/firebase.config';


export const  AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileUser=(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo
          })
       }
    
    const logOut = () => {
        setLoading(false)
        signOut(auth)
    }

    const userInfo = {
        createUser,
        signIn,
        logOut,
        loading,
        user,
        profileUser,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,authUser =>{
            if(authUser){
                setUser(authUser)
            }else{
                setUser(null)
            }
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])
    
    return(
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;