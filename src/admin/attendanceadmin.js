import DoubleUseFetch from "../hooks/doubleuseFetch";
import Attendances from "../components/adminPage/attendances";


const AttendanceAdmin =()=>{
  const urlI= 'http://localhost:4000/admin/staff';
  const urlII = 'http://localhost:4000/admin/attendances';
  const token = localStorage.getItem("adminAuthToken")

  const{dataI, dataII, isLoading, errorMessage} = DoubleUseFetch(urlI, urlII, token);

  if(isLoading) return(<div>...Loading</div>)
  if(errorMessage) return({errorMessage})
  if(dataI && dataII){
    console.log("attendances", dataII)
    console.log("users", dataI)
    return(
      <div className="attendanceadmin_cont">
        <h5>Attendance</h5>
        <Attendances users={dataI.users} attendances={dataII.updatedAttendance}/>
      </div>
    )
  }

};

export default AttendanceAdmin;