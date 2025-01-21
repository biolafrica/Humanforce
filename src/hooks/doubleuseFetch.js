import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";



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

      if(err.status === 500){
        navigate("/server-error")
      }else{
        setErrorMessage(err.message || "An error occur fetching data");
      }

    })
    

  }, [urlI, urlII]);

  return{dataI, dataII, isLoading, errorMessage}

}

export default DoubleUseFetch;