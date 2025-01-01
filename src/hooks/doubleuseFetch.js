import { useEffect, useState } from "react";
import axios from "axios";



function DoubleUseFetch(urlI, urlII){
  const [dataI, setDataI] = useState(null);
  const [dataII, setDataII] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
    setIsLoading(true);

    Promise.all([
      axios.get(urlI),
      axios.get(urlII)
    ])
    .then(([responseI, responseII])=>{
      setDataI(responseI.data)
      setDataII(responseII.data)
      setIsLoading(false)
      setErrorMessage(null);
    })
    .catch((error)=>{
      setErrorMessage(error.message || "An error occur fetching data");
      setIsLoading(false);
    })
    

  }, [urlI, urlII]);

  return{dataI, dataII, isLoading, errorMessage}

}

export default DoubleUseFetch;