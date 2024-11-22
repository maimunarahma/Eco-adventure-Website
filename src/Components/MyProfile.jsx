import { useContext } from "react";
import { AuthContext } from "../Providrs/Authentication";
import { Link } from "react-router-dom";


const MyProfile = () => {
    const {user}=useContext(AuthContext)
  
    return (
        <div className="my-5 h-[1050px] ">
            {/* <div className="h-[60px] bg-blue-600"></div> */}
            <div className="flex flex-col justify-center rounded mx-auto items-center lg:p-5 border-2 lg:w-1/2 bg-gray-200 text-center card-body">
            <img src={user.photoURL} alt="" className="rounded-full w-20 h-20 border-4 border-violet-600"/>
            <h1 className="text-3xl font-bold">Welcome!</h1>
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
            <button className="btn lg:w-1/4 bg-violet-600 text-white">
                <Link to='update'>
                Update Profile
                </Link>
                </button>
            </div>
          
        </div>
    );
};

export default MyProfile;