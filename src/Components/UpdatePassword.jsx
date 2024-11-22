import { useContext } from "react";
import { AuthContext } from "../Providrs/Authentication";


const UpdatePassword = () => {
    const { setUser, createUser, LoginUser}=useContext(AuthContext);
    const update=(e)=>{
        e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
 createUser(email,password)
LoginUser(email,password)
 console.log(email,password)
  .then(res=>{
     setUser(res.user)
    
  })
  .catch(err=>{
    console.log(err)
  })

    }
    return (
        <div>
              <form className="card-body" onSubmit={update}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Update Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        </div>
    );
};

export default UpdatePassword;