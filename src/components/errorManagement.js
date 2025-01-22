import { Navigate, useNavigate } from "react-router-dom";

const ErrorManagement = ({err, setErrorMessage})=>{
  const navigate = useNavigate();

  if(err.status === 500){
    return navigate("/server-error")
    
  }else if (err.message === "Unauthorized Admin"){

    localStorage.removeItem("adminAuthToken")
    localStorage.removeItem("team")
    return navigate("/admin/login")

  } else if(err.message === "Unauthorized User"){

    localStorage.removeItem("authToken")
    localStorage.removeItem("user")
    return navigate("/login")

  }else{
    return setErrorMessage(err.message || "An error occured");
  }

}


export default ErrorManagement