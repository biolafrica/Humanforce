import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AlertPopup, useAlert } from "../../components/common/alert";



const AdminLogin = () =>{
  const navigate = useNavigate();
  const {alert, showAlert} = useAlert();

  const initialValue = ({
    staff_code: ""
  })

  const{formData, handleInputChange, resetForm} = useForm(initialValue);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/login`, formData);
      const data = response.data;
      const {token,team} = response.data;

      localStorage.setItem("adminAuthToken", token);
      localStorage.setItem('team', JSON.stringify(team));

      if(data){
        showAlert("Logged in successfully", "success");
        navigate("/admin");
      }
      resetForm();
      
    } catch (error) {
      console.log("Login failed;", error);

      if(error.response && error.response.status === 500){
        navigate("/server-error")
      }else{
        showAlert("Invalid Credentials", "error");
      }
      
    }

  }

  return(
    <div className="login_container">
      <h3>Team Sign In</h3>

      <form action="" onSubmit={handleSubmit} >

        <label htmlFor="staff_code"><h4>Staff Code:</h4></label>
        <input 
          type="text" 
          placeholder="Enter your staff number"
          name="staff_code"
          value={formData.staff_code}
          onChange={handleInputChange}
          required
        />
        <div className="error_message"></div>

        <button className="filled-btn" type="submit"><h4>Sign In</h4></button>

      </form>

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

export default AdminLogin;