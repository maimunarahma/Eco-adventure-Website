import { useContext } from "react";
// import { AuthContext } from "../Providers/Authentication";
import { AuthContext } from "../Providrs/Authentication";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { FcGoogle } from "react-icons/fc";

const Login = () => {


  const { LoginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const [err,setErr]=useState(null)
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password)
    LoginUser(email, password)

      .then((result) => {
        console.log(result.user)
        e.target.reset();
        toast.success('Login successful! 🎉',
          {
            position: "top-center"
          }
        );
        navigate("/")


      })
      .catch((error) => {
        console.log(error)
        toast.error('Login failed! Please check your credentials. ❌', {
          position: 'top-center'
        });

      })
  }
  const provider = new GoogleAuthProvider();
  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Sign-In Success:", result.user);
        toast.success("Logged in with Google! 🎉", {
          position: "top-center",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
        toast.error("Google login failed! ", {
          position: "top-center",
        });
        navigate("/");
      });
  }


  return (
    <div className=" lg:px-[300px]  card-body">
      <h1 className="font-bold text-3xl mt-3 text-center ">Login</h1>
      <ToastContainer />
      <div>

        <form className="card-body border-2 rounded-lg md:p-12 p-3" onSubmit={handleForm}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" className="input input-bordered w-full" required />
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
              <label className=" label text-black font-bold">Not Registered?<span className="text-red-600"><Link to='/auth/register'>Register Now</Link></span></label>
            </div>

          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" >Login</button>
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