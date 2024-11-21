import { useContext, useState } from "react";
// import { AuthContext } from "../Providers/Authentication";
import { authContext } from "../Providrs/Authentication";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
const Login = () => {

    const {LoginUser}=useContext(authContext);
    const navigate = useNavigate();
  const [err,setErr]=useState(null)
    const handleForm=(e)=>{
        e.preventDefault();
        const email= e.target.email.value;
        const password= e.target.password.value;
        console.log(email, password)
        LoginUser(email,password)
    
.then((result) =>{
   console.log(result)
   navigate('/')
   
  
})
.catch((error)=>{
    console.log(error)
    setErr(error)
    // toast.error('Login failed! Please check your credentials. ❌');
})
    }
    const provider=new GoogleAuthProvider();
    const handleGoogleSignUp=()=>{
          signInWithPopup(auth,provider)
    }

 const toster=()=>{
  if(err===null){
    toast.success('Login successful! 🎉',
      {
        position:"top-center"
      }
    );
  }else {
    toast.error('Login failed! Please check your credentials. ❌',{
      position:'top-center'
    });
  }
}
   
    return (
        <div className="w-1/2 mx-auto p-6 card-body">
        <h1 className="font-bold text-3xl mt-3 text-center ">Login</h1>
        <ToastContainer />
        <div>
            
        <form className="card-body" onSubmit={handleForm}>
        <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="name" name='name' className="input input-bordered w-full" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Phone</span>
      </label>
      <input type="number" placeholder="Phone Number" name='phone' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" name='email' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name='password' className="input input-bordered" required />
   <div className="flex justify-between">
   <label className="label">
        <Link to='/updatePassword'>Forgot password?</Link>
      </label>
      <label className=" label text-black font-bold">Not Registered?<span className="text-red-600"><Link to='register'>Register Now</Link></span></label>
   </div>
    
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary" onClick={toster}>Login</button>
    </div>
  </form>
 
  <div className="flex flex-col justify-center items-center">
  <h1>OR</h1>
  <button onClick={handleGoogleSignUp} className="btn"><FcGoogle /> Login With Google</button>
  </div>
 

        </div>
        
    </div>
    );
};

export default Login;