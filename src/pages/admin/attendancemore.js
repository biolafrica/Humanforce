import UserFetch from "../../hooks/userFetch";
import { useParams, useLocation } from "react-router-dom";
import UserAttendancelist from "../../components/userPage/userAttendanceList";
import Loading from "../../components/loading";

const AttendanceMore = ()=>{
  const {id} = useParams();
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const monthYear = searchParams.get("monthYear");

  const url = `http://localhost:4000/admin/attendance/${id}?monthYear=${encodeURIComponent(monthYear)}`;
  const token = localStorage.getItem("adminAuthToken")
  
  const {data, isLoading, errorMessage} = UserFetch(url, token);
 
  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage) return({errorMessage})
  if(data){
  
    return(
      <div className="attendancemore_cont">

        <h4 className="att_cont_head">{data.user.firstname} {data.user.lastname} {monthYear} Attendance Breakdown</h4>

        <div className="table_header">
          <h6 className="date_column">Date</h6>
          <h6 className="clockin_column">Clock in</h6>
          <h6 className="clockout_column">Clock out</h6>
          <h6 className="hours_column">Hours</h6>
          <h6 className="status_column">Status</h6>
        </div>

        <UserAttendancelist attendance = {data.attendance}/>

      </div>
    )
  }

};

export default AttendanceMore;