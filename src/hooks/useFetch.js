import { useEffect, useState } from "react";

function useFetch(url, refresh = false){
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
    setIsLoading(true);
    fetch(url)
    .then(response =>{
      if(!response.ok){
        throw new Error('Error fetching data')
      }
      return response.json();
    })
    .then((data)=>{
      setData(data);
      setIsLoading(false);
      setErrorMessage(null)
    })
    .catch(err =>{
      setErrorMessage(err.message);
      setIsLoading(false);
    })
  }, [url, refresh]);

  return {data, isLoading, errorMessage}

}

export default useFetch;