import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AutContext } from '../Router';

import { Link, Outlet } from 'react-router-dom';
import useupdateMessage from './useUpdate';
import useUpdate from './useUpdate';


const MessagePages = () => {
 
  const {refetch}=useUpdate()
    const [userData,setUserData]=useState([])
    const [speiEmil,setSpcifiEmail]=useState('')
    const {user,lengthMessage}=useContext(AutContext)
    useEffect(()=>{
        axios.get("http://localhost:3002/registrationUser")
        .then((res)=>{
              refetch()
     
            const allUserData = res?.data
            const findData = allUserData?.filter(updateUser=>updateUser?.email != user?.email)
            
            setUserData(findData);

         
        
        })
    },[user,refetch()])
    useEffect(()=>{
        lengthMessage?.map(useEmail=>setSpcifiEmail(useEmail?.sender))
        
    },[lengthMessage])
  
  
    return (
        <>
        <div className='flex'>
          <div className='border-4 p-5'>
        
               <div className='p-3 rounded-md flex gap-3 bg-green-300'>
                <img className='w-[50px] h-[50px] rounded-full' src={user?.photoURL} alt="" />
                {user?.displayName}
                <p>{lengthMessage?.length}</p>
                </div> 
          <div className='mt-5'>
          {userData?.map((item,ind)=>
                <div key={ind}>
                    
                <Link className='flex gap-5 items-center' to={`/users/user/${item?._id}`} key={ind}>
                    <img className='w-[50px] h-[50px] rounded-full' src={item?.img} alt="" />
                    <p>{item?.name}</p>
                    <p className='p-1 rounded-full bg-green-400'>{item?.count}</p>
                </Link>
         
                

                </div>
              
               
            )}
          </div>

          </div>
          {/* ----------------message box----------------- */}
          <div className='w-full h-[100vh] '>
           <Outlet></Outlet>
          </div>
       

             
        </div>
        
        </>
    );
};

export default MessagePages;