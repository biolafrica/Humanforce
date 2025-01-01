import {useForm} from "../hooks/useForm";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { stringify } from "postcss";

const Login = ()=>{
  const navigate = useNavigate()

  const initialValue = ({
    staff_code: ""
  })

  const{formData, handleInputChange, resetForm} = useForm(initialValue)

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", formData);
      const data = response.data;
      const {token,user} = response.data;

      localStorage.setItem("authToken", token);
      localStorage.setItem('user', JSON.stringify(user));
      console.log(token, user);

      if(data){
        navigate("/");
      }
      alert("Logged in succesfully");
      resetForm();
      
    } catch (error) {
      console.log("Login failed;", error);
      alert("Invalid login credentials");
      
    }
  }

  return(
    <div className="login_container">
      <h2>Sign In</h2>

      <form action="" onSubmit={handleSubmit}>

        <label htmlFor="staff_code"><h4>Staff Code:</h4></label>
        <input 
          type="text" 
          placeholder="Enter your staff number"
          name="staff_code"
          value={formData.staff_code}
          onChange={handleInputChange}
        />
        <div className="error_message"></div>

        <button className="filled-btn" type="submit"><h4>Sign In</h4></button>

      </form>

    
    </div>
  )
 
}


export default Login