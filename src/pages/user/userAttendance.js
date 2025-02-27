import Attendance from "../../components/userPage/attendance";
import UseFetch from "../../hooks/userFetch";
import Loading from "../../components/common/loading";
import PathError from "../error/pathError";

const UserAttendance = ()=>{
  const token = localStorage.getItem("authToken");
  const url  = `${process.env.REACT_APP_API_URL}/attendance/`;

  const{data, isLoading, errorMessage} = UseFetch(url, token); 

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage)return(<PathError error={errorMessage}/>);
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