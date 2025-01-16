import UserFetch from "../hooks/userFetch";
import { useParams, useLocation } from "react-router-dom";
import Attendance from "../components/userPage/attendance"

const AttendanceMore = ()=>{

  const {id} = useParams();
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search);
  const monthYear = searchParams.get("monthYear");

  console.log("attendance id", id)
  const url = `http://localhost:4000/admin/attendance/${id}?monthYear=${encodeURIComponent(monthYear)}`;
  const token = localStorage.getItem("adminAuthToken")
  
  const {data, isLoading, errorMessage} = UserFetch(url, token);
 
  if(isLoading) return(<div>...Loading</div>)
  if(errorMessage) return({errorMessage})
  if(data){
    console.log("att data", data)
    return(
      <div className="attendancemore_cont">

        <Attendance attendances = {data.attendance} user ={data.user}/>

      </div>
    )
  }

};

export default AttendanceMore;