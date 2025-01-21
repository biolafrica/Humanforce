import UserFetch from "../hooks/userFetch";
import TeamForm from "../components/adminPage/teamForm";
import Loading from "../components/loading";

const NewTeam =()=>{
  const url = "http://localhost:4000/admin/staff";
  const urlI = "http://localhost:4000/admin/team";
  const token = localStorage.getItem("adminAuthToken")
  const {data, isLoading, errorMessage} = UserFetch(url,token);
  const edit = false;
  

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage) return({errorMessage})
  if(data){
    const initialValues = {
      staff_code: "",
      team_role: ""
    }

    return(
      <div className="newteam_cont">

        <div className="newteam_header">
          <h4>Add Team</h4>
          <h6 className="sec">Kindly enter the details of the team member you want to add.</h6>
        </div>

        <TeamForm url={urlI} initialValues={initialValues} users={data.users} edit={edit} />

      </div>
    );

  }
 


};

export default NewTeam;