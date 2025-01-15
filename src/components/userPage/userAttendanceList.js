import { formattedDate, formattedFullTime } from "../formatmtime";

const UserAttendancelist = (props) =>{
  const attendances = props.attendance.attendance;
  console.log("attendances",attendances)

  return(
    
     
    <div className="table_body">
      {attendances.map((attendance)=>{

        const date = formattedDate(attendance.createdAt);
        const clockIn = formattedFullTime(attendance.clock_in);
        const clockOut = formattedFullTime(attendance.clock_out);

        return(
          <div className="column">
            <h6 className="date_column">{date}</h6>
            <h6 className="clockin_column"> <b className="small">Clock in: </b>{clockIn}</h6>
            <h6 className="clockout_column"><b className="small" >Clock out: </b> {clockOut}</h6>
            <h6 className="hours_column">{attendance.hours}<span className="small" >hours</span></h6>
            <h6 className="status_column">{attendance.status}</h6>
          </div>
        )

      })}

      
      
    </div>

    
  
    
  )

}

export default UserAttendancelist;