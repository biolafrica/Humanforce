import { Link } from "react-router-dom";
import UserFetch from "../../hooks/userFetch";
import TeamDetails from "../../components/adminPage/teamDetails";
import Loading from "../../components/loading";
import { useState } from "react";
import useTeam from "../../components/adminPage/buttonState";

const Team = ()=>{
  const url = "http://localhost:4000/admin/team";
  const token = localStorage.getItem("adminAuthToken")
  const {data, isLoading, errorMessage} = UserFetch(url,token);
  const [searchTerm, setSearchTerm] = useState("");
  const{AdminExclusiveButton} = useTeam()


  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage) return({errorMessage})
  if(data){

    const filteredTeam = (data.teams).filter(team=>
      `${team.team_role}`.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return(
      <div className="team_cont">

        <div className="team_heading">

          <div className="team_heading_left">
            <h4>Team</h4>
            <h6 className="sec">View and manage Team</h6>
          </div>

          <div className="team_heading_right">

            <Link to="/admin/team/new" className={`${AdminExclusiveButton}`}>
              <h4>Add Team</h4>
              <img src="/icons/Person add.svg" alt="" />
            </Link>

          </div>

        </div>

        <div className="team_body">

          <form action="team" className="month_form">
            <input 
              type="text" 
              name="team"
              value={searchTerm}
              placeholder="search role"
              onChange={(e)=>setSearchTerm(e.target.value)}
            />
          </form>

          <TeamDetails users={data.users} teams={filteredTeam}/>

        </div>

      </div>
    )

  }

}

export default Team;