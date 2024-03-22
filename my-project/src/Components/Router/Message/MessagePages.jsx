import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AutContext } from '../Router';

import { Link, Outlet } from 'react-router-dom';

const MessagePages = () => {
    const [userData,setUserData]=useState()
    const {user}=useContext(AutContext)
    useEffect(()=>{
        axios.get("http://localhost:3002/registrationUser")
        .then((res)=>{
            setUserData(res.data);
        })
    },[])
  
   console.log(userData);
    return (
        <>
        
        <div className='flex gap-8 justify-center'>
          
            {userData?.map((item,ind)=>
                <Link to={`/users/user/${item?._id}`} key={ind}>
                    <img className='w-[100px] h-[100px]' src={item?.img} alt="" />
                    <p>{item?.name}</p>
                </Link>
            )}
        </div>
        <div>
             <div className='w-[150px] bg-rose-500'>{user?.email}</div>       

                    <div>
                        <Outlet></Outlet>
                    </div>

             
        </div>
        
        </>
    );
};

export default MessagePages;