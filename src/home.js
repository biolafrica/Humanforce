import { Link } from "react-router-dom";

const Homepage=()=>{
  return(
    <div className="home_container">

      <div className="home_up">
        
        <Link to="/Login" className="clockin_container">
          <img src="icons/START SHIFT.svg" alt="" />
          <h4>Start Work</h4>
        </Link>

        <Link to="clock" className="clockout_container">
          <img src="icons/END SHIFT.svg" alt="" />
          <h4>End Work</h4>
        </Link>

      </div>

      <div className="home_down">

        <div className="payroll_container">
          <img src="icons/PAYRI.svg" alt="" />
          <h4>Payroll</h4>
        </div>

        <div className="attendance_container">
          <img src="icons/ATTENDANCE.svg" alt="" />
          <h4>Attendance</h4>
        </div>

      </div>
      
    </div>
  )
}

export default Homepage;