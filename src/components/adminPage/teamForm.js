import {useForm} from "../../hooks/useForm";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import { AlertPopup, useAlert } from "../alert";


const TeamForm = ({url, initialValues, users, edit})=>{
  const token = localStorage.getItem("adminAuthToken")
  const navigate = useNavigate();
  const {alert, showAlert} = useAlert();
  const{formData,handleInputChange,resetForm} = useForm(initialValues)
  const isEditable = edit === true ? true : false;

  const handleSubmit=async(e)=>{
    e.preventDefault();

    try {
      const res = await axios.post(url, formData,{
        headers:{
          Authorization : `Bearer ${token}`,
          "Content-Type" : "application/json"
        }
      } );
      showAlert("Team added succesfully", "success");
      navigate("/admin/team");
      resetForm();
      
    } catch (error) {
      console.log("Fail to add team member:", error);

      if(error.response && error.response.status === 500){
        navigate("/server-error")
      }else if(error.response && error.response.status === 402){
        showAlert("Team member already exist", "error");
      }else{
        showAlert("Unsuccessfull, please try again", "error");
      }
      
    }
  }

  return(
    <>
      <div className="newteam_body">

        <form action="" onSubmit={handleSubmit} role="form">
          
          <label htmlFor="staff_id"><h4>Name</h4></label>
          <select
            name="staff_id"
            value={formData.staff_id}
            onChange={handleInputChange}
            required
            role="combobox"
            disabled={isEditable}
            
          >
            {edit === true ? (
              <option value={users.staff_code} key={users.staff_code}>
                {users.firstname} {users.lastname}
              </option>
            ) : (
            
              users.map((item) => (
                <option value={item._id} key={item._id}>
                  {item.firstname} {item.lastname}
                </option>
              ))
            )}
          
          </select>
          <div className="error_message"></div>

          <label htmlFor="team_role"><h4>Role</h4></label>
          <select 
            name="team_role"
            value={formData.team_role}
            onChange={handleInputChange}
            role="combobox"
            required
            >
              <option value="">Select role</option>
              <option value="Finance">Finance</option>
              <option value="Operation">Operations</option>
              <option value="Basic">Basic</option>
              <option value="Admin">Admin</option>
          </select>
          <div className="error_message"></div>


          <button className="filled-btn" type="submit"><h4>Submit</h4></button>
          
        </form>

      </div>

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

export default TeamForm