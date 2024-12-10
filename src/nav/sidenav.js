import { Link } from "react-router-dom";

const SideNav=()=>{
  return(
    <div className="sidebar-cont">

      <div className="side-logo">
        <img src="/icons/Group work.svg" alt="" />
      </div>

      <div className="side-nav">

        <Link to="/admin" className="dashboard active">
          <img src="icons/Dashboard.svg" alt="" />
          <h4>Dashboard</h4>
        </Link>

        <Link to="/admin/staff" className="staff">
          <img src="icons/Group.svg" alt="" />
          <h4>Staff</h4>
        </Link>

        <Link to="/admin/team" className="team">
          <img src="icons/Groups.svg" alt="" />
          <h4>Team</h4>
        </Link>

        <Link to="/admin/payroll" className="payroll">
          <img src="icons/Matthew Accounting.svg" alt="" />
          <h4>Payroll</h4>
        </Link>

        <Link to="/admin/attendance" className="attendance">
          <img src="icons/Date range.svg" alt="" />
          <h4>Attendance</h4>
        </Link>

        <Link to="/admin/settings" className="settings">
          <img src="icons/Settings.svg" alt="" />
          <h4>Settings</h4>
        </Link>

      </div>

    </div>
  )

}

export default SideNav;