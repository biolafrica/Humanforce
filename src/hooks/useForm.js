import { useState } from "react";

function useForm(iniialValues){
  const [formData, setFormData] = useState(iniialValues);

  const handleInputChange = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  };

  const resetForm = ()=>{
    setFormData(iniialValues);
  }

  return {formData, handleInputChange, resetForm};

}; 

export default useForm;