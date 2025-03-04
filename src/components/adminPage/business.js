import axios from "axios";
import {useFormWithAddress} from "../../hooks/useForm";
import WorkingHours from "./workingHours";
import { AlertPopup, useAlert } from "../common/alert";
import { useNavigate } from "react-router-dom";
import useTeam from "./buttonState";
import { useState, useEffect, useRef } from "react";


const Business= ({data, work})=>{
  const navigate = useNavigate();
  const {alert, showAlert} = useAlert();
  const name = data[0];
  const token = localStorage.getItem("adminAuthToken")
  const{AdminExclusiveButton} = useTeam();
  const[errors , setErrors] = useState("")
  const inputRefI = useRef(null);
  const inputRefII = useRef(null);
  
  const initialValues = {
    business_name : !name ? "" : name.business_name,
    business_email :!name ? "" :  name.business_email,
    business_address_I :!name ? "" :  name.business_address_I,
    business_address_II :!name ? "" :  name.business_address_II,
    break_hours :!name ? "" :  name.break_hours,
    lateness_hours :!name ? "" :  name.lateness_hours,
    lateness_fine :!name ? "" :  name.lateness_fine,
    business_phone_number :!name ? "" :  name.business_phone_number,
    salary_date :!name ? "" :  name.salary_date,
    wages_day :!name ? "" :  name.wages_day,
    tax :!name ? "" :  name.tax,
    pension :!name ? "" :  name.pension,
  }

  const{formData, handleInputChange, setFormData} = useFormWithAddress(initialValues);

  useEffect(()=>{
    if(window.google){

      const autocompleteI = new window.google.maps.places.Autocomplete(inputRefI.current, {
        types: ["address"],
        componentRestrictions: {country: "uk"},
      });

      const autocompleteII = new window.google.maps.places.Autocomplete(inputRefII.current, {
        types: ["address"],
        componentRestrictions: {country: "uk"}
      });

      autocompleteI.addListener("place_changed", ()=>{
        const place = autocompleteI.getPlace();
        setFormData((prev)=> ({...prev, business_address_I:place.formatted_address}))
      });

      autocompleteII.addListener("place_changed", ()=>{
        const place = autocompleteII.getPlace();
        setFormData((prev)=>({...prev, business_address_II: place.formatted_address}))
      });
    }
  }, [])

  const handleSubmit = async (e)=>{
    e.preventDefault();
    let phoneError = "";

    if(formData.business_phone_number.toString().length < 10){
      phoneError = "Minimum of 10 digits required"
    }

    if(phoneError !== ""){
      setErrors(phoneError);
      return
    }
    
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/business`, formData, {
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });
      
      showAlert("Business information saved successfully!", "success");
      setErrors("");
      
      
    } catch (error) {
      console.error("Error saving business information. Please try again");
      if(error.response && error.response.status === 500){
        navigate("/server-error")
      }else{
        showAlert("Unsucessfull, Please try again", "error");
      }
    };

  };



  return(
    
    <div className="businessettings_body">

      <div className="bio_data">
        <h5>Payroll Summary</h5>

        <form role="form" className="payroll_columns" onSubmit={handleSubmit}>

          <div className="payroll_column">

            <div>
              <label htmlFor="business_name"><h4>Business name</h4></label>
              <input
                type="text" 
                placeholder="Enter business name"
                value={formData.business_name}
                name="business_name"
                onChange={handleInputChange}
                required
              />
            </div>

            <div action="business_email">
              <label htmlFor=""><h4>Business email</h4></label>
              <input
                type="email"
                placeholder="Enter business email"
                name="business_email"
                value={formData.business_email}
                onChange={handleInputChange}
                required
              />
            </div>
            
          </div>

          <div className="payroll_column">

            <div>
              <label htmlFor="business_address_I"><h4>Business address I</h4></label>
              <input 
                ref={inputRefI}
                type="text" 
                placeholder="Enter first business address" 
                name="business_address_I"
                onChange={handleInputChange}
                value={formData.business_address_I}
                required
              />
            </div>

            <div>
              <label htmlFor="business_address_II"><h4>Business address II</h4></label>
              <input 
                ref={inputRefII}
                type="text" 
                placeholder="Enter second business address"
                name="business_address_II"
                value={formData.business_address_II}
                onChange={handleInputChange} 
                required
              />
            </div>
            
          </div>

          <div className="payroll_column">

            <div>
              <label htmlFor="break_hours"><h4>Break hours</h4></label>
              <input 
                type="number" 
                placeholder="Enter break hours"
                name="break_hours"
                value={formData.break_hours}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="lateness_hours"><h4>Lateness hour</h4></label>
              <input 
                type="number" 
                placeholder="Enter phone number"
                name="lateness_hours"
                value={formData.lateness_hours}
                onChange={handleInputChange} 
                required
              />
            </div>
            
          </div>

          <div className="payroll_column">

            <div>
              <label htmlFor="lateness_fine"><h4>Lateness fine(&#8358;)</h4></label>
              <input 
                type="number" 
                placeholder="Enter fine amount"
                name="lateness_fine"
                value={formData.lateness_fine}
                onChange={handleInputChange} 
                required
              />
            </div>

            <div>
              <label htmlFor="business_phone_number"><h4>Business number</h4></label>
              <input 
                type="tel" 
                placeholder="Enter business phone number"
                name="business_phone_number"
                value={formData.business_phone_number}
                onChange={handleInputChange}
                required 
              />
              {errors && <div className="error_text">{errors}</div>}
            </div>
            
            
          </div>

          <button className={`${AdminExclusiveButton}`} type="submit"><h4>Submit</h4></button>

        </form>

      </div>

      <div className="working_hours">
        <h5>Working hours</h5>

        <WorkingHours work = {work}/>

      </div>

      <div className="payment">
        <h4>Payment Structure</h4>

        <form className="payment_columns" onSubmit={handleSubmit}>

          <div className="payment_column">

            <div>
              <label htmlFor="salary_date"><h4>Salary date</h4></label>
              <input 
                type="number" 
                placeholder="enter salary date" 
                name="salary_date"
                value={formData.salary_date}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="wages_day"><h4>Wages day</h4></label>
              <input 
                type="text" 
                placeholder="enter wages day" 
                name="wages_day"
                value={formData.wages_day}
                onChange={handleInputChange}
                required
              />
            </div>
            
          </div>

          <div className="payment_column">

            <div>
              <label htmlFor="tax"><h4>Tax(%)</h4></label>
              <input 
                type="number" 
                placeholder="enter tax percentage" 
                name="tax"
                value={formData.tax}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="pension"><h4>Pension(%)</h4></label>
              <input 
              type="number" 
              placeholder="enter percentage"
              name="pension"
              value={formData.pension}
              onChange={handleInputChange}
              required 
              />
            </div>
            
          </div>

          <button className={`${AdminExclusiveButton}`} type="submit"><h4>submit</h4></button>

        </form>

      </div>

      {alert.visible && (
        <AlertPopup 
          visible={alert.visible} 
          message={alert.message} 
          type={alert.type}
          
        />
      )}

    </div>
  )

}

export default Business;
