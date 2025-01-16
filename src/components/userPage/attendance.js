import AttendanceList from "./attendanceList"

const Attendance = ({attendances, user}) =>{
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

    </div>
  )

}


export default Attendance