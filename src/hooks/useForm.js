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

function useFormWithAddress (initialValues){
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  };

  const resetForm = ()=>{
    setFormData(initialValues);
  }

  return {formData, handleInputChange, resetForm, setFormData};

}

export {useForm, useFormWithAddress}