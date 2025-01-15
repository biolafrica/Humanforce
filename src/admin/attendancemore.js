import UserFetch from "../hooks/userFetch";
import { useParams } from "react-router-dom";
import Attendance from "../components/attendance"

const AttendanceMore = ()=>{

  const {id} = useParams();
  console.log("attendance id", id)
  const url = `http://localhost:4000/admin/attendance/${id}`;
  const token = localStorage.getItem("adminAuthToken")
  
  const {data, isLoading, errorMessage} = UserFetch(url, token);
 
  if(isLoading) return(<div>...Loading</div>)
  if(errorMessage) return({errorMessage})
  if(data){
    return(
      <div className="attendancemore_cont">

        <Attendance AttendanceUser = {data} />

      </div>
    )
  }

};

export default AttendanceMore;