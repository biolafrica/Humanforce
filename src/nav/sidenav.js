const SideNav=()=>{
  return(
    <div className="sidebar-cont">

      <div className="side-logo">
        <img src="icons/Group work.svg" alt="" />
      </div>

      <div className="side-nav">

        <div className="dashboard">
          <img src="icons/Dashboard.svg" alt="" />
          <h4>Dashboard</h4>
        </div>

        <div className="staff">
          <img src="icons/Group.svg" alt="" />
          <h4>Staff</h4>
        </div>

        <div className="team">
          <img src="icons/Groups.svg" alt="" />
          <h4>Team</h4>
        </div>

        <div className="payroll">
          <img src="icons/Matthew Accounting.svg" alt="" />
          <h4>Payroll</h4>
        </div>

        <div className="attendance">
          <img src="icons/Date range.svg" alt="" />
          <h4>Attendance</h4>
        </div>

        <div className="settings">
          <img src="icons/Settings.svg" alt="" />
          <h4>Settings</h4>
        </div>

      </div>
    </div>
  )

}

export default SideNav;