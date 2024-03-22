import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './chat.css'
const socket = io('http://localhost:3002'); // Point to your Node.js server

function Socket() {
  const [message, setMessage] = useState('');
  const [useName, SetUserName] = useState('');
  const [id, setId] = useState('');
  const [groupMessage, serGroupMessage] = useState([]);
  const [user, setUser] = useState([]);



 const handelclick = ()=>{
  const data = {id,useName}
  socket.emit("Room",data)
 
 
 }
 const handelSendBtn = async ()=>{
  const sendMessageData = {id,useName,message}
 await socket.emit("send_message",sendMessageData)
 socket.on("message",(msg)=>{
  serGroupMessage(list=>[...list,msg])
 setMessage(" ")
})

  
 }

 useEffect(() => {
  socket.on("message",(msg)=>{
    serGroupMessage(list=>[...list,msg])

  })
}, [socket]);


  return (
    <div>
      <h1>Socket.IO Example</h1>
      <input className='border-4' type="text" onChange={(e)=>SetUserName(e.target.value)} placeholder='User Name'/>
      <input className='border-4'  type="text" onChange={(e)=>setId(e.target.value)} placeholder='Coode'/>
    <button onClick={handelclick} className='btn btn-success mt-8'>Join Room</button>
     
    <div className='mt-8'>
      {user?.map((newUser)=><div key={newUser.user}>
          <div className='w-[150px] bg-red-300 h-[150px]'></div>
          <h1>{newUser?.useName}</h1>

      </div>)}
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body overflow-auto">
      
          {groupMessage.map((messageContent) => {
            return (
              <div
              key={useName}
                className="message"
                id={useName === messageContent.useName ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                 
                    <p id="author">{messageContent.useName}</p>
                  </div>
                </div>
              </div>
            );
          })}

      </div>
     
    </div>
    <input className='border-4' type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='messages...'/>
      <button onClick={handelSendBtn} className='btn btn-secondary'>send</button>
    </div>


    </div>
  );
}

export default Socket;

