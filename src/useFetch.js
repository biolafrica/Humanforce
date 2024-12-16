import { useEffect, useState } from "react";

function useFetch(url){
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
    fetch(url)
    .then(response =>{
      if(!response.ok){
        throw new Error('Error fetching data')
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data, data.users)
      setData(data.users);
      setIsLoading(false);
      setErrorMessage(null)
    })
    .catch(err =>{
      setErrorMessage(err.message);
      setIsLoading(false);
    })
  }, [url]);

  return {data, isLoading, errorMessage}

}

export default useFetch;