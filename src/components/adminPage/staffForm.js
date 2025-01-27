import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { AlertPopup, useAlert } from "../alert";
import { useNavigate } from "react-router-dom";
import { AdminExclusiveButton } from "./buttonState";

const StaffForm = ({initialValues, url})=>{
  const {alert, showAlert} = useAlert();
  const {formData, handleInputChange, resetForm} = useForm(initialValues);
  const token = localStorage.getItem("adminAuthToken");
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(url, formData, {
        headers:{
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      showAlert("staff added successfully!", "success");
      navigate("/admin/staff")
      resetForm();
      
    } catch (error) {
      console.log("Error adding staff", error);
      if(error.response && error.response.status === 500){
        navigate("/server-error")
      }else{
        showAlert("Unsuccessfull, please try again", "error");
      }
      
    }
  }


  return(
    <>
      <form className="form_column" onSubmit={handleSubmit}>

        <div className="newstaff_column">

          <div>
            <label htmlFor="firstname"><h4>First name</h4></label>
            <input
              type="text"
              placeholder="Enter first name"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="lastname"><h4>Last name</h4></label>
            <input
              type="text"
              placeholder="Enter last name"
              name="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              required   
            />
          </div>
          
        </div>

        <div className="newstaff_column">

          <div>
            <label htmlFor="status"><h4>Status</h4></label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              required
            >
              <option value="">Select type</option>
              <option value="active">Active</option>
              <option value="sacked">Sacked</option>
              <option value="resigned">Resigned</option>
            </select>
          </div>

          <div>
            <label htmlFor="role"><h4>Role</h4></label>
            <input 
              type="text" 
              placeholder="Enter assigned role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
            />
          </div>
          
        </div>

        <div className="newstaff_column">

          <div>
            <label htmlFor="employment_type"><h4>Employement type</h4></label>
            <select
              name="employment_type"
              value={formData.employment_type}
              onChange={handleInputChange}
              required
            >
              <option value="">Select type</option>
              <option value="contract">Contract</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>

          <div>
            <label htmlFor="salary"><h4>Salary</h4></label>
            <input 
              type="text" 
              placeholder="Enter salary"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              required
            />
          </div>
          
        </div>

        <div className="newstaff_column">

          <div>
            <label htmlFor="date_of_birth"><h4>Date of Birth</h4></label>
            <input 
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email_address"><h4>Email Address</h4></label>
            <input 
              type="email"
              name="email_address"
              placeholder="Enter email address"
              value={formData.email_address}
              onChange={handleInputChange}
              required
            />
          </div>
          
        </div>

        <div className="newstaff_column">

          <div>
            <label htmlFor="phone_number"><h4>Phone Number</h4></label>
            <input
              type="number" 
              name="phone_number"
              placeholder="Enter Phone number"
              value={formData.phone_number}
              onChange={handleInputChange}
              required 
            />
          </div>

          <div>
            <label htmlFor="address"><h4>Address</h4></label>
            <input
              type="text" 
              placeholder="Enter home address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required 
            />
          </div>
          
        </div>

        <div className="newstaff_column">

          <div>
            <label htmlFor="next_of_kin_name"><h4>Name of Next Kin</h4></label>
            <input 
              type="text" 
              placeholder="Enter next of kin name"
              name="next_of_kin_name"
              value={formData.next_of_kin_name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="next_of_kin_phone_number"><h4>Next of Kin Number</h4> </label>
            <input
              type="number" 
              placeholder="Enter phone number"
              name="next_of_kin_phone_number"
              value={formData.next_of_kin_phone_number}
              onChange={handleInputChange}
              required 
            />
          </div>
          
        </div>

        <button className="filled-btn" type="submit"><h4>Submit</h4></button>

      </form>
      
      {alert.visible && (
        <AlertPopup 
          visible={alert.visible} 
          message={alert.message} 
          type={alert.type}
          
        />
      )}
    </>

  )

}

export default StaffForm