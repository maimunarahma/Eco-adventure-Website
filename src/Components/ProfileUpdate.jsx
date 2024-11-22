import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase";


const ProfileUpdate = () => {
    // const{user}= useContext(AuthContext)
    const handleSubmit=e=>{
    const name=e.target.name.value;
    const image=e.target.image.value;
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: image
      }).then(() => {
    alert("rofile updated")
      }).catch((error) => {
        // An error occurred
        alert(error.message)
        // ...
      });
    }
    return (
        <div className="my-12 px-5 w-1/2 h-[600px] mx-auto  flex flex-col justify-center items-center">
 <form onSubmit={handleSubmit}>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Username" name='name'/>
</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="image" name='image' />
</label>
<button className="btn w-1/4 bg-blue-400 text-white ">Update</button>
    
</form>    </div>
       
    );
};

export default ProfileUpdate;