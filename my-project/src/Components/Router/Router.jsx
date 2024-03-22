import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { Children } from 'react';
import { auth } from '../firebase.config';
export const AutContext = createContext(null)
const Router = ({children}) => {
    const [user,setUser]=useState(null)
    const singIn = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const currentUser = onAuthStateChanged(auth,(users)=>{
            setUser(users)
        })
        return ()=>{
            currentUser()
        }
    })

    const data = {
        singIn,
        user
    }
    return (
       <AutContext.Provider value={data}>
        {children}
       </AutContext.Provider>
    );
};

export default Router;