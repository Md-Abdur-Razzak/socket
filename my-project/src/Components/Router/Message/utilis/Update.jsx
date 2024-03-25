import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const Update = (reciver,counter) => {
    console.log(reciver,counter);
    const {data,refetch}=useQuery({
        queryKey:["usersdata",reciver,counter],
        queryFn :async()=>{
            const {data}= await axios.put(`http://localhost:3002/updateQuntity`,{counter :counter+1,reciver})
            return data
        }
    })
    return {data,refetch}
};

export default Update;