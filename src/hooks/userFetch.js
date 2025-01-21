import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function UserFetch(url, token){
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
        throw new Error('Error fetching data')
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data)
      setData(data);
      setIsLoading(false);
      setErrorMessage(null)
    })
    .catch((err) =>{
      setIsLoading(false);

      if(err.status === 500){
        navigate("/server-error")
      }else{
        setErrorMessage(err.message || "An error occured");
      }
      
    })

  }, [url, token]);

  return {data, isLoading, errorMessage}

}

export default UserFetch;