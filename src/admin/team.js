const Team = ()=>{
  return (
    <div className="team_cont">

      <div className="team_heading">

        <div className="team_heading_left">
          <h3>Team</h3>
          <h4>View and manage Team</h4>
        </div>

        <div className="team_heading_right">
          <button className="filled-btn">
            <h4>Add Team</h4>
            <img src="icons/Person add" alt="" />

          </button>
        </div>
      </div>

      <div className="team_body">

        <div className="table_header">
          <h4 className="date_column">Name</h4>
          <h4 className="clockin_column">Role</h4>
          <h4 className="clockout_column">Email</h4>
          <h4 className="hours_column">User ID</h4>
          <h4 className="status_column">Status</h4>
        </div>

        <div className="table_body">

          <div className="column">
            <h4 className="date_column">Solomon Buchi</h4>
            <h4 className="clockin_column">Admin</h4>
            <h4 className="clockout_column">biolafrica@gmail.com</h4>
            <h4 className="hours_column">EU1234</h4>
            <h4 className="status_column">
              <img src="icons/Edit.svg" alt="" />
              <img src="icons/Delete.svg" alt="" />
            </h4>
          </div>

          <div className="column">
            <h4 className="date_column">Abiodun Biobaku</h4>
            <h4 className="clockin_column">Basic</h4>
            <h4 className="clockout_column">abbey@gmail.com</h4>
            <h4 className="hours_column">EU1244</h4>
            <h4 className="status_column">
              <img src="icons/Edit.svg" alt="" />
              <img src="icons/Delete.svg" alt="" />
            </h4>
          </div>

          <div className="column">
            <h4 className="date_column">Folaji Jamiu</h4>
            <h4 className="clockin_column">Operations</h4>
            <h4 className="clockout_column">mj@gmail.com</h4>
            <h4 className="hours_column">EU1245</h4>
            <h4 className="status_column">
              <img src="icons/Edit.svg" alt="" />
              <img src="icons/Delete.svg" alt="" />
            </h4>
          </div>

          <div className="column">
            <h4 className="date_column">Oletubo Oluwadamilare</h4>
            <h4 className="clockin_column">Finance</h4>
            <h4 className="clockout_column">Houseofdrey@gmail.com</h4>
            <h4 className="hours_column">EU1344</h4>
            <h4 className="status_column">
              <img src="icons/Edit.svg" alt="" />
              <img src="icons/Delete.svg" alt="" />
            </h4>
          </div>

        </div>

        <div className="table_footer">
          <img src="icons/Keyboard arrow left.svg" alt="" />
          <img src="icons/Keyboard arrow right.svg" alt="" />
        </div>

      </div>

    </div>
  )
}

export default Team;