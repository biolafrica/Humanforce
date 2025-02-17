import { Link } from "react-router-dom";
import UseFetch from "../../hooks/userFetch";
import TeamDetails from "../../components/adminPage/teamDetails";
import Loading from "../../components/loading";
import { useState } from "react";
import useTeam from "../../components/adminPage/buttonState";
import PathError from "../error/pathError";

const Team = ()=>{
  const url = `${process.env.REACT_APP_API_URL}/admin/team`;
  const token = localStorage.getItem("adminAuthToken")
  const {data, isLoading, errorMessage} = UseFetch(url,token);
  const [searchTerm, setSearchTerm] = useState("");
  const{AdminExclusiveButton} = useTeam()


  if(isLoading) return(<Loading width={200} height={200}/>);
  if(errorMessage)return(<PathError error={errorMessage}/>);
  if(data){
    console.log(data);

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
              <img src="/icons/Group add.svg" alt="" />
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