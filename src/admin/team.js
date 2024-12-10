import { Link } from "react-router-dom";

const Team = ()=>{
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

          <div className="column">
            <h6 className="date_column">Solomon Buchi</h6>
            <h6 className="clockin_column">Admin</h6>
            <h6 className="clockout_column">biolafrica@gmail.com</h6>
            <h6 className="hours_column">EU1234</h6>
            <h6 className="status_column">
              <img src="/icons/Edit.svg" alt="" />
              <img src="/icons/Delete.svg" alt="" />
            </h6>
          </div>

          <div className="column">
            <h6 className="date_column">Abiodun Biobaku</h6>
            <h6 className="clockin_column">Basic</h6>
            <h6 className="clockout_column">abbey@gmail.com</h6>
            <h6 className="hours_column">EU1244</h6>
            <h6 className="status_column">
              <img src="/icons/Edit.svg" alt="" />
              <img src="/icons/Delete.svg" alt="" />
            </h6>
          </div>

          <div className="column">
            <h6 className="date_column">Folaji Jamiu</h6>
            <h6 className="clockin_column">Operations</h6>
            <h6 className="clockout_column">mj@gmail.com</h6>
            <h6 className="hours_column">EU1245</h6>
            <h6 className="status_column">
              <img src="/icons/Edit.svg" alt="" />
              <img src="/icons/Delete.svg" alt="" />
            </h6>
          </div>

          <div className="column">
            <h6 className="date_column">Oletubo Oluwadamilare</h6>
            <h6 className="clockin_column">Finance</h6>
            <h6 className="clockout_column">Houseofdrey@gmail.com</h6>
            <h6 className="hours_column">EU1344</h6>
            <h6 className="status_column">
              <img src="/icons/Edit.svg" alt="" />
              <img src="/icons/Delete.svg" alt="" />
            </h6>
          </div>

        </div>

        <div className="table_footer">
          <img src="/icons/Keyboard arrow left.svg" alt="" />
          <img src="/icons/Keyboard arrow right.svg" alt="" />
        </div>

      </div>

    </div>
  )
}

export default Team;