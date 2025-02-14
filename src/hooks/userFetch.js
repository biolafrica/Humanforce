import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";

function UseFetch(url, token, refresh = false){
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const  navigate = useNavigate();

  
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        setIsLoading(true);
        setErrorMessage(null);

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if(!response.ok){
          const errorText = await response.text();
          let errorMessage = `Error: ${response.status}`;

          if(response.status === 401){
            errorMessage = "Unauthorized Admin";
          }else if(response.status === 403){
            errorMessage = "Unauthorized User";
          }else if (response.status === 500){
            errorMessage = "Server Error. Please try again later."
          }

          throw new Error(errorMessage || errorText)
        }

        const result = await response.json();
        setIsLoading(false)
        setData(result)
      } catch (error) {
        handleError(error.message,navigate, setErrorMessage)
      }
    };

    fetchData();

  }, [url, token, navigate, refresh])

  return {data, isLoading, errorMessage}
}

const handleError = (errorMessage,navigate,setErrorMessage)=>{

  const errorObj = typeof errorMessage === "string"
  ? { status: "500", message: errorMessage }
  : errorMessage;
  
  if(errorMessage.includes("Unauthorized Admin")){
    localStorage.removeItem("adminAuthToken");
    localStorage.removeItem("team");
    navigate("/admin/login");
  }else if (errorMessage.includes('Unauthorized User')){
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login")
  }else if(errorMessage.includes("Server Error")){
    navigate("/server-error");
  } else{
    setErrorMessage(errorObj)
  }
};

export default UseFetch;