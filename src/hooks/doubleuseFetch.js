import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DoubleUseFetch(urlI, urlII,token){
  const [dataI, setDataI] = useState(null);
  const [dataII, setDataII] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    setIsLoading(true);

    Promise.all([
      axios.get(urlI, {
        headers:{
          Authorization : `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      }),

      axios.get(urlII, {
        headers:{
          Authorization : `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      })

    ])
    .then(([responseI, responseII])=>{
      setDataI(responseI.data)
      setDataII(responseII.data)
      setIsLoading(false)
      setErrorMessage(null);
    })

    .catch((err)=>{
      setIsLoading(false);

      const errorObj = typeof err.message === "string"
      ? { status: err.status, message: err.message }
      : err.message;

      if(err.status === 500){
        navigate("/server-error")
        
      }else if (err.status === 401){

        localStorage.removeItem("adminAuthToken")
        localStorage.removeItem("team")
        navigate("/admin/login")
      }else if(err.status === 403){
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        navigate("/login")
      }else{
        setErrorMessage(errorObj);
      }

    })
    

  }, [urlI, urlII]);

  return{dataI, dataII, isLoading, errorMessage}

}

export default DoubleUseFetch;