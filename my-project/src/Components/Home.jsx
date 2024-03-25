import { Link, NavLink } from "react-router-dom";


const Home = () => {
   
     

    return (
      <div className='bg-yellow-300  flex justify-center items-center h-[100vh]'>
          <Link to="/Login" className="btn" >Message Now</Link>
      </div>
    );
};

export default Home;