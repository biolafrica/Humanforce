import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorManagement from "../components/errorManagement";


function useFetch(url, refresh = false){
  const token = localStorage.getItem("authToken");
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    setIsLoading(true);
    fetch(url, {
      method : "GET",
      headers : {
        'Content-Type' : "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
    .then(response =>{
      if(!response.ok){

        if(response.status === 401){
          throw new Error ("Unauthorized Admin")
        } else if(response.status === 403){
          throw new Error ("Unauthorized User")
        }else{
          throw new Error('Error fetching data')
        }
      }

      return response.json();
    })
    .then((data)=>{
      console.log(data)
      setData(data);
      setIsLoading(false);
      setErrorMessage(null)
    })
    .catch(err =>{
      setIsLoading(false);
      <ErrorManagement err={err} setErrorMessage={setErrorMessage}/>

    })

  }, [url, refresh]);

  return {data, isLoading, errorMessage}

}


export default useFetch;