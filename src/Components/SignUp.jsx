import {  useContext } from "react";
// import { AuthContext } from "../Providers/Authentication";
import { authContext } from "../Providrs/Authentication";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";


const SignUp = () => {
      const {createUser,setUser,user}= useContext(authContext);
  
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
             console.log(email, password)
             const img= e.target.image.value;
             user.photoURL=img;
             console.log(img)
             if (!validatePassword(password)) {
              toast.error('Password must contain 8+ characters, uppercase, lowercase, number, and special character.', {
                position: "top-center",
              });}
             createUser(email,password)
             .then((result) =>{
           
              updateProfile(result.user, {
                photoURL: img,
              })
              setUser({ ...result.user, photoURL: img });
             navigate('/');
             toast.success('Registration successful! 🎉',
              {
                position:"top-center"
              }
            );
             })
          .catch((error)=>{
              console.log(error)
              toast.error('Registration failed! ',
                {
                  position:"top-center"
                }
              );
             })
             
        }
     
    return (
     
     <div className="w-full p-6">
            <h1 className="font-bold text-3xl mt-3 text-center ">Register Now</h1>
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
            <span className="label-text">Photo URL</span>
          </label>
          <input
              type="file"
              name="image"
              className="file-input file-input-bordered w-full max-w-xs"
              accept="image/*" 
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

            </div>
            
        </div>
   
    );
};

export default SignUp;