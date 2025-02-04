import TeamForm from "../../components/adminPage/teamForm";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading";
import UseFetch from "../../hooks/userFetch";

const RegisteredTeam = ()=>{
  const {id} = useParams();
  const url = `http://localhost:4000/admin/team/${id}`;
  const urlI = `http://localhost:4000/admin/team-edit/${id}`;
  const token = localStorage.getItem("adminAuthToken");
  const edit = true;
  const {data, isLoading, errorMessage} = UseFetch(url, token);

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage) return ({errorMessage})
  if(data){
    console.log(data);
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