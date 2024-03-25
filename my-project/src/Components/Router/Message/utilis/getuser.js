
import { useQuery } from "@tanstack/react-query"
import axios from "axios"



const export default getAllUsers = async()=>{
   
       const  respons= await  axios.get("http://localhost:3002/registrationUser")
       const allusers = await respons.data
        

   return { allusers}
}








