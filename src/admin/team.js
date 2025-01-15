import { Link } from "react-router-dom";
import UserFetch from "../hooks/userFetch";
import TeamDetails from "../components/adminPage/teamDetails";

const Team = ()=>{
  const url = "http://localhost:4000/admin/team";
  const token = localStorage.getItem("adminAuthToken")
  const {data, isLoading, errorMessage} = UserFetch(url,token);


  if(isLoading) return(<div>....loading</div>)
  if(errorMessage) return({errorMessage})
  if(data){

    return(
      <div className="team_cont">

        <div className="team_heading">

          <div className="team_heading_left">
            <h4>Team</h4>
            <h6 className="sec">View and manage Team</h6>
          </div>

          <div className="team_heading_right">

            <Link to="/admin/team/new" className="filled-btn">
              <h4>Add Team</h4>
              <img src="/icons/Person add.svg" alt="" />
            </Link>

          </div>

        </div>

       <TeamDetails users={data.users} teams={data.teams}/>

      </div>
    )

  }

}

export default Team;