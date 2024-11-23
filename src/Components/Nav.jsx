import { useContext } from "react";
import logo from "../assets/greenwhite-e1616273832133.webp"
import { Link} from "react-router-dom";
import { AuthContext } from "../Providrs/Authentication";



const Nav = () => {
  const {user, signOutUser}=useContext(AuthContext);
  console.log(user)
  
  const handleSignOut=()=>{
    signOutUser();
  }
    return (
//      
<div className="w-full mx-auto px-0 mt-3  ">
  <div className="flex justify-between items-center">
    {/* Logo */}
    <div className="w-[20%]">
      <img src={logo} alt="logo" className=" md:w-1/5 w-1/2 ml-3" />
    </div>

    {/* Navigation Links */}
    <div className="hidden lg:block w-[60%]">
      <ul className="list-none flex justify-center items-center gap-10 text-2xl font-semibold">
        <li className="text-2xl font-semibold ">
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>

        {user && (
          <li>
            <Link to="myProfile">My Profile</Link>
          </li>
        )}

        <li>
          <Link to="experience">Experience</Link>
        </li>
      </ul>
    </div>

    {/* User Actions */}
    <div className="w-[20%] flex justify-end items-center gap-3">
      {user ? (
        <>
          {/* <p>Welcome, {user.email}</p> */}
          <img
            src={user?.photoURL}
            alt="profile"
            className="rounded-full w-10 h-10"
          />
          <button
            className="btn bg-[#2E7D32] text-white"
            onClick={handleSignOut}>
            Sign Out
          </button>
        </>
      ) : (
        <Link to="/auth/login" className="btn bg-[#2E7D32] text-white">
          <p>Login</p>
        </Link>
      )
    }

      {/* Mobile Dropdown */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm text-xl font-semibold dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          {user && (
            <li>
              <Link to="myProfile">My Profile</Link>
            </li>
          )}
          <li>
            <Link to="experience">Experience</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

    
    );
};

export default Nav;