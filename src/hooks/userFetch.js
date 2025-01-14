import { useEffect, useState } from "react";

function UserFetch(url, token){
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
      setErrorMessage(err.message);
      setIsLoading(false);
    })

  }, [url, token]);

  return {data, isLoading, errorMessage}

}

export default UserFetch;