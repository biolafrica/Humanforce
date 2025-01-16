import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

const SideNav=({changeHeader})=>{
  const [activeTab, setActiveTab] = useState("Dashboard")

  useEffect(()=>{
    changeHeader(activeTab)

  },[setActiveTab, activeTab])
  
  const handleDashboardClick =()=>{
    setActiveTab("Dashboard")
  }
  const handleStaffClick =()=>{
    setActiveTab("Staff")
  }
  const handleTeamClick =()=>{
    setActiveTab("Team")
  }
  const handleAttendanceClick =()=>{
    setActiveTab("Attendance")
  }
  const handlePayrollClick =()=>{
    setActiveTab("Payroll")
  }
  const handleSettingsClick =()=>{
    setActiveTab("Settings")
  }

  return(
    <div className="sidebar-cont">

      <div className="side-logo">
        <img src="/icons/Group work.svg" alt="" />
      </div>

      <div className="side-nav">

        <Link 
          to="/admin" 
          className={`dashboard ${activeTab === "Dashboard" ? "active" : ""}`} 
          onClick={handleDashboardClick}
        >
          <img src="icons/Dashboard.svg" alt="" />
          <h4>Dashboard</h4>
        </Link>

        <Link 
          to="/admin/staff" 
          className={`staff ${activeTab === "Staff" ? "active" : ""}`}  
          onClick={handleStaffClick}
        >
          <img src="icons/Group.svg" alt="" />
          <h4>Staff</h4>
        </Link>

        <Link 
          to="/admin/team" 
          className={`team ${activeTab === "Team" ? "active" : ""}`} 
          onClick={handleTeamClick}
        >
          <img src="icons/Groups.svg" alt="" />
          <h4>Team</h4>
        </Link>

        <Link 
          to="/admin/attendance" 
          className={`attendance ${activeTab === "Attendance" ? "active" : ""}`} 
          onClick={handleAttendanceClick}
        >
          <img src="icons/Date range.svg" alt="" />
          <h4>Attendance</h4>
        </Link>

        <Link 
          to="/admin/payroll" 
          className={`payroll ${activeTab === "Payroll" ? "active" : ""}`} 
          onClick={handlePayrollClick}
        >
          <img src="icons/Matthew Accounting.svg" alt="" />
          <h4>Payroll</h4>
        </Link>

       
        <Link 
          to="/admin/settings" 
          className={`settings ${activeTab === "Settings" ? "active" : ""}`} 
          onClick={handleSettingsClick}
        >
          <img src="icons/Settings.svg" alt="" />
          <h4>Settings</h4>
        </Link>

      </div>

    </div>
  )

}

export default SideNav;