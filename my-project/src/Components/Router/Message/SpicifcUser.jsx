import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {io} from 'socket.io-client';
import { AutContext } from '../Router';

const SpicifcUser = () => {
  const socket =io('http://localhost:3002'); 
    const data = useLoaderData()
    const [ricivemessage,setMessage]=useState([])
    const [meMessage,setMeMessage]=useState([])

    const {user}=useContext(AutContext)
   useEffect(()=>{
    socket.on("connect",()=>{
            console.log("connect");
        })
   },[])


const handelSubmit =async (e)=>{
    e.preventDefault()
    const message = e.target.message.value
    setMeMessage([...meMessage,message])
   await socket.emit("sendMessage",message,data?.email)
    

}
useEffect(()=>{
  
socket.on(user?.email,(msg)=>{
   setMessage([...ricivemessage,msg]);

    console.log(msg);
  })

},[user?.email,ricivemessage])
    return (
        <div >
           <div className='h-[300px] border-4 '>
          {
            ricivemessage?.map((item,ind)=><div className='bg-red-300' key={ind}>{item}</div>)
          }
         <div className='h-[300px] border-4'>
         {
            meMessage?.map((item,ind)=><div className='bg-green-300' key={ind}>{item}</div>)
          }
         </div>
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