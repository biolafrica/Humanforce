import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Team = ()=>{
  const url = "http://localhost:4000/admin/team";
  const refresh = false;
  const {data, isLoading, errorMessage} = useFetch(url,refresh);

  const users = data?.users || [];
  const teams = data?.teams || [];
  const displayTeams = [];

  return (
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

      <div className="team_body">

        <div className="table_header">
          <h6 className="date_column">Name</h6>
          <h6 className="clockin_column">Role</h6>
          <h6 className="clockout_column">Email</h6>
          <h6 className="hours_column">User ID</h6>
          <h6 className="status_column">Status</h6>
        </div>

        <div className="table_body">

          {teams.map((team)=>{
            let matchingUser;
            users.forEach((user)=>{
              if(team.staff_code === user.staff_code){
                matchingUser = user
              }
            })
            console.log(matchingUser);

            return(
              <div className="column" key={team._id}>
                <h6 className="date_column">{matchingUser.firstname}          {matchingUser.lastname}</h6>
                <h6 className="clockin_column">{team.team_role}</h6>
                <h6 className="clockout_column">{matchingUser.email_address}</h6>
                <h6 className="hours_column">{team.staff_code}</h6>
                <h6 className="status_column">
                  <img src="/icons/Edit.svg" alt="" />
                  <img src="/icons/Delete.svg" alt="" />
                </h6>
              </div>
            )}
          )}

        </div>

        <div className="table_footer">
          <img src="/icons/Keyboard arrow left.svg" alt="" />
          <img src="/icons/Keyboard arrow right.svg" alt="" />
        </div>

      </div>

      <div className="update_team">

        <form action="">

          <label htmlFor=""><h4>Name</h4></label>
          <input type="text" />
          <div className="error_message"></div>

          <label htmlFor=""><h4>Role</h4></label>
          <select name="" >
            <option value="November">Basic</option>
            <option value="December">Admin</option>
            <option value="December">Operation</option>
            <option value="December">Finace</option>
          </select>
          <div className="error_message"></div>

          <button className="filled-btn" type="submit"><h4>Update</h4></button>

        </form>
        
      </div>

    </div>
  )
}

export default Team;