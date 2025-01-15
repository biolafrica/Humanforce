import AttendanceList from "./attendanceList"

const Attendance = (props) =>{
  const attendances = props.AttendanceUser.attendance;
  const user = props.AttendanceUser.user;
  return(

    <div>
      
      <h5>{user.firstname} {user.lastname} Attendance</h5>

      <div className="table_header">
        <h6 className="date_column">Date</h6>
        <h6 className="clockin_column">Clock in</h6>
        <h6 className="clockout_column">Clock out</h6>
        <h6 className="hours_column">Hours</h6>
        <h6 className="status_column">Status</h6>
      </div>

      <AttendanceList attendances={attendances}/>

      <div className="table_footer">
        <img src="/icons/Keyboard arrow left.svg" alt="" />
        <img src="/icons/Keyboard arrow right.svg" alt="" />
      </div>

    </div>
  )

}


export default Attendance