import {  useContext } from "react";
// import { AuthContext } from "../Providers/Authentication";
import { authContext } from "../Providrs/Authentication";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";



const SignUp = () => {
      const {createUser,setUser}= useContext(authContext);
  
      console.log(createUser)
      const navigate = useNavigate();

      function validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
      }
        const handleForm=(e)=>{
             e.preventDefault();
             const email= e.target.email.value;
             const password= e.target.password.value;
         const photo=e.target.image.value;
             if (!validatePassword(password)) {
              toast.error('Password must contnain 8+ characters, uppercase, lowercase, number, and special character.', {
                position: "top-center",
              });}
             createUser(email,password)
             .then((result) =>{
           
              setUser(result.user);
              updateProfile(result.user,{
                photoURL:photo
              })
           
              toast.success("Registration successful! 🎉", { position: "top-center" });
              e.target.reset();
             navigate('/');
         
             })
          .catch((error)=>{
              console.log(error.message)
              toast.error('Registration failed! ',{position:"top-center"});
             })
             
        }
     
    return (
     
     <div className="w-full p-6">
            <h1 className="font-bold text-3xl mt-3 text-center ">Register Now</h1>
            <ToastContainer />
            <div>
                
            <form className="card-body border-2 rounded-lg md:p-28 p-3" onSubmit={handleForm}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            
              name="image"
              className=" input input-bordered w-full max-w-xs"
            
              required
            />
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <h1 className="text-black font-bold">Login Now! <span className="text-red-600 "><Link to='login' state={{name}}>Login</Link></span></h1>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-1/4">Register</button>
        </div>
      </form>

            </div>
            
        </div>
   
    );
};

export default SignUp;