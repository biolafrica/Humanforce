import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import useFetch from "../hooks/useFetch";
import {useForm} from "../hooks/useForm";
import axios from "axios";

const NewTeam =()=>{
  const url = "http://localhost:4000/admin/staff";
  const refresh = false;
  const {data, isLoading, errorMessage} = useFetch(url, refresh);
  console.log(data);
  const users = data?.users || [];

  const initialValues = {
    staff_code: "",
    team_role: ""
  }
  const{formData,handleInputChange,resetForm} = useForm(initialValues)

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/admin/team", formData);
      alert("team added succesfully");
      resetForm();
      
    } catch (error) {
      console.log("Fail to add team member:", error);
      alert("failed to add team member, please try again");
      
    }


  }
  

  return(
    <div className="newteam_cont">

      <div className="newteam_header">
        <h4>Add Team</h4>
        <h6 className="sec">Kindly enter the details of the team member you want to add.</h6>
      </div>

      <div className="newteam_body">

        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="staff_code"><h4>Name</h4></label>
          <select
            name="staff_code"
            value={FormData.staff_code}
            onChange={handleInputChange}
            required
            >
            {users.map((item)=>(
              <option value={item.staff_code} key={item._id}>{item.firstname} {item.lastname}</option>
            ))}
            
          </select>
          <div className="error_message"></div>


          <label htmlFor="team_role"><h4>Role</h4></label>
          <select 
            name="team_role"
            value={formData.team_role}
            onChange={handleInputChange}
            required
            >
            <option value="finance">Finance</option>
            <option value="operation">Operations</option>
            <option value="basic">Basic</option>
            <option value="admin">Admin</option>
          </select>
          <div className="error_message"></div>

          <button className="filled-btn" type="submit"><h4>Submit</h4></button>
          
        </form>

      </div>

      

    </div>
  );
};

export default NewTeam;