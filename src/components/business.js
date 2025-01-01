import axios from "axios";
import useForm from "../hooks/useForm";
import WorkingHours from "./workingHours";

const Business= (props)=>{
  const data = props.data;
  const name = data[0];

  const initialValues = {
    business_name : name.business_name,
    business_email : name.business_email,
    business_address_I : name.business_address_I,
    business_address_II : name.business_address_I,
    break_hours : name.break_hours,
    lateness_hours : name.lateness_hours,
    lateness_fine : name.lateness_fine,
    business_phone_number : name.business_phone_number,
    salary_date : name.salary_date,
    wages_day : name.wages_day,
    tax : name.tax,
    pension : name.pension,
  }

  const {formData, handleInputChange, resetForm} = useForm(initialValues);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/admin/business", formData);
      alert("Business information saved successfully!");
      
    } catch (error) {
      console.error("Error saving business information. Please try again");
      
    };

  };


  return(
    
    <div className="businessettings_body">

      <div className="bio_data">
        <h5>Payroll Summary</h5>

        <form className="payroll_columns" onSubmit={handleSubmit}>

          <div className="payroll_column">

            <div action="">
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

            <div action="">
              <label htmlFor="business_address_I"><h4>Business address I</h4></label>
              <input 
                type="text" 
                placeholder="Enter first business address" 
                name="business_address_I"
                onChange={handleInputChange}
                value={formData.business_address_I}
                required
              />
            </div>

            <div action="">
              <label htmlFor="business_address_II"><h4>Business address II</h4></label>
              <input 
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

            <div action="">
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

            <div action="">
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

            <div action="">
              <label htmlFor="lateness_fine"><h4>Lateness fine</h4></label>
              <input 
                type="number" 
                placeholder="Enter fine amount"
                name="lateness_fine"
                value={formData.lateness_fine}
                onChange={handleInputChange} 
                required
              />
            </div>

            <div action="">
              <label htmlFor="business_phone_number"><h4>Business number</h4></label>
              <input 
              type="number" 
              placeholder="Enter business phone number"
              name="business_phone_number"
              value={formData.business_phone_number}
              onChange={handleInputChange}
              required 
              />
            </div>
            
          </div>

          <button className="filled-btn" type="submit"><h4>Submit</h4></button>

        </form>

      </div>

      <div className="working_hours">
        <h5>Working hours</h5>

        <WorkingHours data = {props.work}/>

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
              <label htmlFor="tax"><h4>Tax</h4></label>
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
              <label htmlFor="pension"><h4>Pension</h4></label>
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

          <button className="filled-btn" type="submit"><h4>submit</h4></button>

        </form>

      </div>

    </div>
  )

}


export default Business;
