import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Attendance from "../components/attendance"

const AttendanceMore = ()=>{

  const {id} = useParams();
  console.log("attendance id", id)
  const url = `http://localhost:4000/admin/attendance/${id}`;
  const refresh = false ;
  const {data, isLoading, errorMessage} = useFetch(url, refresh);

  if(data){
    console.log('data:', data)
  }
 
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