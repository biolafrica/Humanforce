import TeamForm from "../components/adminPage/teamForm";
import { useParams } from "react-router-dom";
import UserFetch from "../hooks/userFetch";

const RegisteredTeam = ()=>{
  const {id} = useParams();
  const url = `http://localhost:4000/admin/team/${id}`;
  const urlI = `http://localhost:4000/admin/team-edit/${id}`;
  const token = localStorage.getItem("adminAuthToken");
  const edit = true;
  const {data, isLoading, errorMessage} = UserFetch(url, token);

  if(isLoading) return (<div>.....Loading</div>)
  if(errorMessage) return ({errorMessage})
  if(data){
    const initialValues = {
      staff_code: data.staff_code,
      team_role: data.role,
    }

    return(

      <div className="newteam_cont">

        <div className="newteam_header">
          <h4>Edit Team</h4>
          <h6 className="sec">Kindly edit the team member detail.</h6>
        </div>

        <TeamForm 
          url={urlI} 
          initialValues={initialValues} 
          users={data} 
          edit={edit} 
        />

      </div>
    );

  }


}

export default RegisteredTeam