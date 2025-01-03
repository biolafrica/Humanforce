import DoubleUseFetch from "../hooks/doubleuseFetch";
import Attendances from "../components/attendances";


const AttendanceAdmin =()=>{
  const urlI= 'http://localhost:4000/admin/staff';
  const urlII = 'http://localhost:4000/admin/attendances';

  const{dataI, dataII, isLoading, errorMessage} = DoubleUseFetch(urlI, urlII);

  if(isLoading) return(<div>...Loading</div>)
  if(errorMessage) return({errorMessage})
  if(dataI && dataII){
    return(
      <div className="attendanceadmin_cont">
        <h5>Attendance</h5>
        <Attendances users={dataI} attendances={dataII}/>
      </div>
    )
  }

};

export default AttendanceAdmin;