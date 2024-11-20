import { useContext } from "react";
import logo from "../assets/vector-logo-ecotravel-tourism-camping-260nw-1626800671.jpg"
import { Link } from "react-router-dom";
import { authContext } from "../Providrs/Authentication";



const Nav = () => {
  const {user, signOutUser}=useContext(authContext);
  console.log(user)
  const handleSignOut=()=>{
    signOutUser();
  }
    return (
        <div>
                <div className="flex justify-between items-center mx-auto">
           <div className="navbar-start">
            <img src={logo} alt="" className="w-[15%]" />
            
            </div> 
            <div className="hidden md:block">
            <div className="navbar-center   list-none flex justify-center items-center gap-10">

<li><Link to=''>Home</Link></li>
<li><Link to=''>Destinations</Link></li>  
<li><Link to=''>Tour</Link></li> 
 <li className=""><Link to=''>Why Us</Link></li> 
  <li><Link to='home'>Contact</Link></li>
</div>
            </div>
           
            <div className="navbar-end flex justify-end gap-3">
            {
  user ? (
    <>
       <p>Welcome, {user.email}</p>
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
            
                    <div className="dropdown">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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