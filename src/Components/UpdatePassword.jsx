import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdatePassword = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(
        "Password reset email sent! Please check your inbox.",
        { position: "top-center" }
      );
    } catch (error) {
      console.error("Error sending reset email:", error.message);
      toast.error(`Failed to send reset email: ${error.message}`, {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Reset Your Password</h1>
      <form className="card-body" onSubmit={handlePasswordReset}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send Reset Email</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdatePassword;
