import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { Children } from 'react';
import { auth } from '../firebase.config';
import {io} from 'socket.io-client';
export const AutContext = createContext(null)
const Router = ({children}) => {
    const socket =io('http://localhost:3002'); 
    const [user,setUser]=useState(null)
    const [lengthMessage,setMessageLength]=useState([])
    const singIn = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const Login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
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
        user,
      socket,
        Login,
        setMessageLength,
        lengthMessage
    
    }
    return (
       <AutContext.Provider value={data}>
        {children}
       </AutContext.Provider>
    );
};

export default Router;