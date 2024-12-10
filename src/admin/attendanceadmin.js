import { Link } from "react-router-dom";
const AttendanceAdmin =()=>{
  return(
    <div className="attendanceadmin_cont">
      <h3>Attendance</h3>

      <div className="table_heading ">

        <form action="" className="month_form">
          <input type="month"  />
        </form>

      </div>

      <div className="table_header">
        <h6 className="date_column">Name</h6>
        <h6 className="clockin_column">Role</h6>
        <h6 className="clockout_column">Hours</h6>
        <h6 className="hours_column">Penalty</h6>
        <h6 className="status_column">Status</h6>
      </div>

      <div className="table_body">

        <Link to="/admin/attendance/more" className="column">
          <h6 className="date_column">Abiodun Biobaku</h6>
          <h6 className="clockin_column">Rider</h6>
          <h6 className="clockout_column">100</h6>
          <h6 className="hours_column">N10,000:00</h6>
          <h6 className="status_column">82%</h6>
        </Link>

        <Link to="/admin/attendance/more" className="column">
          <h6 className="date_column">Adegoke Emmanuel</h6>
          <h6 className="clockin_column">Graphics Designer</h6>
          <h6 className="clockout_column">200</h6>
          <h6 className="hours_column">N2,000:00</h6>
          <h6 className="status_column">90%</h6>
        </Link>

        <Link to="/admin/attendance/more" className="column">
          <h6 className="date_column">Oletubo Oluwadamilare</h6>
          <h6 className="clockin_column">Operations Manager</h6>
          <h6 className="clockout_column">200</h6>
          <h6 className="hours_column">N1,000:00</h6>
          <h6 className="status_column">70%</h6>
        </Link>

      </div>

      <div className="table_footer">
        <img src="icons/Keyboard arrow left.svg" alt="" />
        <img src="icons/Keyboard arrow right.svg" alt="" />
      </div>

    </div>
  )
};

export default AttendanceAdmin;