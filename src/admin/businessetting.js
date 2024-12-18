import axios from "axios";
import { useEffect, useState } from "react";

const Businessetting =()=>{
  const [formData, setFormData] = useState({
    business_name : "",
    business_email: "",
    business_address_I: "",
    business_address_II: "",
    break_hours: "",
    lateness_hours: "",
    lateness_fine: "",
    business_phone_number: "",
    salary_date: "",
    wages_day: "",
    tax: "",
    pension: ""

  })

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(()=>{
    const fetchBusinessData = async () =>{
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:4000/admin/business");
        const businessData = response.data.business;

        setFormData((prev)=>({
          ...prev,
          ...businessData,

        }));

        setErrorMessage(null);

        
      } catch (error) {
        setErrorMessage("failed to load business data. please try again")
        
      } finally{
        setIsLoading(false)
      }
    };

    fetchBusinessData();

  },[]);

  const handleInputChange = (e)=>{
    const {name, value} = e.target;
    setFormData((prev) =>({
      ...prev,
      [name] : value,
    }));
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:4000/admin/business", formData);
      alert("Business information saved successfully!");
      
    } catch (error) {
      console.error("Error saving business information. Please try again");
      
    };

  };



  if(errorMessage) return(<div> {errorMessage}</div>); 
  if(isLoading) return(<div>....isLoading</div>);
  return(
    <div className="businesseting_cont">
      
      <div className="businessettings_head">
        <div className="staff_cont_head">
          <h5 className="total select">Business</h5>
          <h5 className="contract">Personal</h5>
          <h5 className="fixed">Password</h5>
        </div>
      </div>
        
      <div className="settings_cont">

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

            <div className="working_hours_colums">

              <div className="working_hours_column">
                <h4 className="week_day">Sunday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""><h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close:</h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <div className="working_hours_column">
                <h4 className="week_day">Monday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""><h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close:</h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <div className="working_hours_column">
                <h4 className="week_day">Tuesday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""> <h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close:</h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <div className="working_hours_column">
                <h4 className="week_day">Wednesday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""><h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close:</h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <div className="working_hours_column">
                <h4 className="week_day">Thursday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""><h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close:</h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <div className="working_hours_column">
                <h4 className="week_day">Friday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""><h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close: </h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <div className="working_hours_column">
                <h4 className="week_day">Saturday</h4>
                <div className="work_hours">
                  <form action="">
                    <label htmlFor=""><h4>Open:</h4></label>
                    <input type="time" />
                  </form>

                  <form action="">
                    <label htmlFor=""><h4>Close:</h4></label>
                    <input type="time" />
                  </form>
                </div>
              </div>

              <button className="filled-btn"><h4>Submit</h4></button>

            </div>

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

        <div className="personal_body">

          <h4>Personal Settings</h4>

            <div className="payment_columns">

              <div className="payment_column">

                <form action="">
                  <label htmlFor=""><h4>First name</h4></label>
                  <input type="text" placeholder="enter full name" />
                </form>

                <form action="">
                  <label htmlFor=""><h4>Last name</h4></label>
                  <input type="text" placeholder="enter name" />
                </form>
                
              </div>

              <div className="payment_column">

                <form action="">
                  <label htmlFor=""><h4>Email</h4></label>
                  <input type="email" placeholder="enter email" />
                </form>

                <form action="">
                  <label htmlFor=""><h4>Role</h4></label>
                  <input type="text" placeholder="enter role" />
                </form>
                
              </div>

              <button className="filled-btn"><h4>submit</h4></button>

            </div>

        </div>

        <div className="password_body">
          <h5>change Password</h5>

          <div className="password_column">

            <form action="">
              <label htmlFor=""><h4>Old Password</h4></label>
              <input type="password" placeholder="enter password" />
            </form>

            <form action="">
              <label htmlFor=""><h4>New password</h4></label>
              <input type="text" placeholder="enter password" />
            </form>

            <form action="">
              <label htmlFor=""><h4>Confirm password </h4></label>
              <input type="text" placeholder="enter password" />
            </form>

            <button className="filled-btn"><h4>Submit</h4></button>
            
          </div>

        </div>
      </div>
      
    </div>
  );

}

export default Businessetting;


