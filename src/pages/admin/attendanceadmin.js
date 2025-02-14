import DoubleUseFetch from "../../hooks/doubleuseFetch";
import Attendances from "../../components/adminPage/attendances";
import Loading from "../../components/loading";
import PathError from "../error/pathError";


const AttendanceAdmin =()=>{
  const urlI= `${process.env.REACT_APP_API_URL}/admin/staff`;
  const urlII = `${process.env.REACT_APP_API_URL}/admin/attendances`;
  const token = localStorage.getItem("adminAuthToken")

  const{dataI, dataII, isLoading, errorMessage} = DoubleUseFetch(urlI, urlII, token);

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage)return(<PathError error={errorMessage}/>);
  if(dataI && dataII){
    
   
    return(
      <div className="attendanceadmin_cont">
        <h5>Attendance</h5>
        <Attendances users={dataI.users} attendances={dataII.updatedAttendance}/>
      </div>
    )
  }

};

export default AttendanceAdmin;