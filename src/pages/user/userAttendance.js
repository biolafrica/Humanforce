import Attendance from "../../components/userPage/attendance";
import UserFetch from "../../hooks/userFetch";
import Loading from "../../components/loading";

const UserAttendance = ()=>{
  const token = localStorage.getItem("authToken");
  const url  = `${process.env.REACT_APP_API_URL}/attendance/`;

  const{data, isLoading, errorMessage} = UserFetch(url, token); 

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage) return({errorMessage})
  if(data){
    console.log(data)
    
    return(

      <div className="attendance_cont">
        <Attendance attendance={data.updatedAttendance}/>
      </div>

    )

  }
}


export default UserAttendance;