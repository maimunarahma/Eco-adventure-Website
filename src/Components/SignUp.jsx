import { useContext } from "react";
// import { AuthContext } from "../Providers/Authentication";
import { authContext } from "../Providrs/Authentication";
import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";

const SignUp = () => {
      const {createUser,setUser}= useContext(authContext);
      console.log(createUser)
      const navigate = useNavigate();
        const handleForm=(e)=>{
             e.preventDefault();
             const email= e.target.email.value;
             const password= e.target.password.value;
             console.log(email, password)
             createUser(email,password)
             .then((result) =>{
             setUser(result.user);
             navigate('/');
             })
          .catch((error)=>{
              console.log(error)
             })
             
        }
    return (
        <div className="w-full p-6">
            <h1 className="font-bold text-3xl mt-3 text-center ">Register Now</h1>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <h1 className="text-black font-bold">Login Now! <span className="text-red-600 "><Link to='login/register/login'>Login</Link></span></h1>
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