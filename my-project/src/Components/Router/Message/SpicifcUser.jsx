import { useContext, useEffect, useReducer, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AutContext } from "../Router";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import Update from "./utilis/Update";
import useUpdate from "./useUpdate";

const SpicifcUser = () => {
  const { user, socket ,setMessageLength,lengthMessage} = useContext(AutContext);
  const data = useLoaderData();
  const [messages, setMessage] = useState([]);
  let [counter,setCounter]=useState(0)

  useEffect(()=>{
    axios.get("http://localhost:3002/registrationUser")
    .then((res)=>{
      const allUserData = res?.data
        const findData = allUserData?.find(updateUser=>updateUser?.email == user?.email)
        
        setCounter(findData?.count-1);

     
    
    })
},[user?.email])
    useUpdate(user?.email,counter)




    // eslint-disable-next-line react-hooks/rules-of-hooks



useEffect(()=>{
  setMessageLength([]);
},[data])
useEffect(()=>{
  socket.on("connect",()=>{
  })

  if (data) {
    axios.get(`http://localhost:3002/userGetMessages?sender=${user?.email}&reciver=${data?.email}`)
 
      .then((res)=>{
        setMessage(res?.data);
    
       
      })
  }
},[data?.email,user?.email])

  // hrodoy receiver
  socket.on(user?.email, (msgInfo) => {

    if (data?.email === msgInfo?.sender){
      setMessage([...messages, msgInfo]);
      
      setMessageLength([...lengthMessage,msgInfo]);
    }
      
  
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    setCounter(counter+1)
    const newMessage = e.target.message.value;
    const sederOnject = {
      sender: user?.email,
      text: newMessage,
      img:user?.photoURL,
      name:user?. displayName,
      reciver: data?.email,
    };

  
    await socket.emit("sendMessage", sederOnject, data?.email);
    setMessage([...messages, sederOnject]);

    // axios.put(`http://localhost:3002/updateQuntity`,{counter :counter+1,reciver:data?.email})
  


  };



  return (
    <div className=" ">
      <div className="h-[100vh] border-4 ">
        <div className="flex w-full py-2 pl-2 gap-3 bg-green-300 items-center">
          <img
            className="w-[50px] border-2 rounded-full h-[50px]"
            src={data?.img}
            alt=""
          />
          <p>{data?.name} </p>
        </div>
        <div className="overflow-auto h-[70vh]">
          {messages?.map((item, ind) => (
            <div className="mt-3 " key={ind}>
              {user?.email == item?.sender ? (
                <div className="chat chat-end">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="Tailwind CSS chat bubble component" src={item?.img} />
                    </div>
                  </div>
                  <div className="chat-header ">
                  {item?.name}
                    <time className="text-xs opacity-50">12:46</time>
                  </div>
                  <div className="chat-bubble chat-bubble-info">I {item?.text}</div>
                  <div className="chat-footer opacity-50">
                    Seen at 12:46
                  </div>
                </div>

              ) : (
                <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={item?.img} />
                  </div>
                </div>
                <div className="chat-header">
                {item?.name}
                  <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble !bg-green-300 text-black">{item?.text}</div>
                <div className="chat-footer opacity-50">
                  Delivered
                </div>
              </div>
              )}
            </div>
          ))}
        </div>
        <div className="py-3   bg-green-300">
          <form onSubmit={handelSubmit}>
            <div className="flex justify-center">
              <input className='border-2 w-[80%] p-2' name='message' type="text" />
              <button className='btn block btn-success'>send  messages</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default SpicifcUser;
