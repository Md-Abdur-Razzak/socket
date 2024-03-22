import React, { createContext, useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import io from 'socket.io-client';
import { AutContext } from '../Router';
const socket = io('http://localhost:3002'); 
const SpicifcUser = () => {
    const data = useLoaderData()
   
    const {user}=useContext(AutContext)
   useEffect(()=>{
        socket.on("connect",()=>{
            console.log("connect");
        })
   },[])


const handelSubmit = (e)=>{
    e.preventDefault()
    const message = e.target.message.value
    socket.emit("sendMessage",message,data?.email)
    

}

socket.on("neser@gmail.com",(msg)=>{
    console.log(msg);
  })

    return (
        <div >
           <div className='h-[300px] border-4'>
            hi
           </div>

           <div>
          <form onSubmit={handelSubmit}>
          <input className='border-4' name='message' type="text" />
            <button className='btn btn-success'>send  messages</button>
          </form>
           </div>
        </div>
    );
};

export default SpicifcUser;