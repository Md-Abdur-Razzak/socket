import { createBrowserRouter } from "react-router-dom";
import Maincontiner from "../Maincontiner";
import Home from "../Home";
import MessagePages from "./Message/MessagePages";
import SpicifcUser from "./Message/SpicifcUser";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Maincontiner/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/users",
                element:<MessagePages/>,
                children:[{
                    path:"/users/user/:id",
                    element:<SpicifcUser/>,
                    loader:({params})=>fetch(`http://localhost:3002/registrationUser/${params.id}`)
                    
                    
                }]
            }
        ]
    }
])