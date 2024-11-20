import { useContext } from "react";
// import { AuthContext } from "../Providers/Authentication";
import { authContext } from "../Providrs/Authentication";
import { Link } from "react-router-dom";
const Login = () => {

    const {LoginUser}=useContext(authContext);

    const handleForm=(e)=>{
        e.preventDefault();
        const email= e.target.email.value;
        const password= e.target.password.value;
        console.log(email, password)
        LoginUser(email,password)
   }
    return (
        <div className="w-1/2 mx-auto p-6 card-body">
        <h1 className="font-bold text-3xl mt-3 text-center ">Login</h1>
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
      <h3 className="text-black font-bold">Not Registered?<span className="text-red-600"><Link to='register'>Register Now</Link></span></h3>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
  </form>

        </div>
        
    </div>
    );
};

export default Login;