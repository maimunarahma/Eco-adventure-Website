import { useContext } from "react";
import { authContext } from "../Providrs/Authentication";
import { Link } from "react-router-dom";


const MyProfile = () => {
    const {user}=useContext(authContext)
  
    return (
        <div className="my-5 h-[1050px]">
            {/* <div className="h-[60px] bg-blue-600"></div> */}
            <div className="flex flex-col justify-center items-center text-center card-body">
            {/* <img src={user.photoURL} alt="" className="rounded-full w-20 h-20 border-2"/> */}
            <h1 className="text-3xl font-bold">Welcome!</h1>
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
            <button className="btn w-1/3 bg-blue-400 text-white">
                <Link to='update'>
                Update Profile
                </Link>
                </button>
            </div>
          
        </div>
    );
};

export default MyProfile;