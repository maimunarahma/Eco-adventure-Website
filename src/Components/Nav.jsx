import { useContext } from "react";
import logo from "../assets/vector-logo-ecotravel-tourism-camping-260nw-1626800671.jpg"
import { Link, useLocation } from "react-router-dom";
import { authContext } from "../Providrs/Authentication";



const Nav = () => {
  const {user, signOutUser}=useContext(authContext);
  console.log(user)
  const location = useLocation(); // Get current location
  const currentUrl = location.pathname;
  console.log(currentUrl)
  const handleSignOut=()=>{
    signOutUser();
  }
    return (
        <div className="w-full  mx-auto px-0">
                <div className="flex justify-between items-center">
           <div className="w-[20%]">
            <img src={logo} alt="" className="md:w-[15%] w-[30%]" />
            
            </div> 
            <div className="hidden md:block">
            <div className=" w-[60%]   list-none flex justify-center items-center gap-10">

<li><Link to=''>Home</Link></li>
<li><Link to=''>Destinations</Link></li>  
<li><Link to=''>Tour</Link></li> 

 {
  user && <>
  <li><Link to='myProfile'>My profile</Link></li> 
  </>
 }
  <li><Link to='home'>Contact</Link></li>
</div>
            </div>
           
            <div className=" w-[20%] flex justify-end gap-3">
            {
  user ? (
    <>
       {/* <p>Welcome, {user.email}</p> */}
<img src={user.photoURL} alt=""  className="rounded-full w-10 h-10"/>
      <button
        className="btn bg-[#2E7D32] text-white"
        onClick={handleSignOut}>
        Sign Out
      </button>
    </>
  ) : (
    <button className="btn bg-[#2E7D32] text-white">
      <Link to="login">Login</Link>
    </button>
  )
}
               
            
                <button className="btn text-[#03A9F4] hidden md:block"><Link>Explore more</Link></button>
            
                    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
      </div>
   

            </div>
        </div>
 
        </div>
    
    );
};

export default Nav;