import axios from "axios";
import { useState } from "react";


function useForm(initialValues){
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  };

  const resetForm = ()=>{
    setFormData(initialValues);
  }

  return {formData, handleInputChange, resetForm};

}; 

function useFormWithAddress (initialValues, apiKey){
  const [formData, setFormData] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async(e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});

    if(name === "address" && value.length >2 ){
      setIsLoading(true);
      try{
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json`, {
          params:{
            input: value,
            key: apiKey,
            sessiontoken: "1234567890"
          },
        });

        const predictions = response.data.predictions || [];
        setSuggestions(predictions.map((item)=>item.description));
        setIsLoading(false);

      } catch (error){
        console.error("Error fetching address suggesstions:", error)
        setSuggestions([])

      }
     
    } else if(name === "address"){
      setSuggestions([]);

    }

   
    
  };

  const handleSuggestionClick = (suggestion)=>{
    setFormData({...formData, address: suggestion})
    setSuggestions([])

  };

  const resetForm = ()=>{setFormData(initialValues)};

  return{
    formData,
    handleInputChange,
    resetForm,
    handleSuggestionClick,
    isLoading,
    suggestions
  }


}

export {useForm, useFormWithAddress}