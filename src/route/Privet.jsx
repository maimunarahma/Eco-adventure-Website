import { useContext } from "react";
import { authContext } from "../Providrs/Authentication";
import { Navigate } from "react-router-dom";


const Privet = ({children}) => {
    const {user}=useContext(authContext);
 console.log(user)

    if(user){
        return children;
    }
    return (
  
            <Navigate to='login'></Navigate>
    
    );
};

export default Privet;