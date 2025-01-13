import UserAttendancelist from "./userAttendanceList";
import UserFetch from "../hooks/userFetch";

const UserAttendance = ()=>{
  const token = localStorage.getItem("authToken");
  const url  = "http://localhost:4000/attendance/";

  const{data, isLoading, errorMessage} = UserFetch(url, token); 

  if(isLoading) return(<div>...loading</div>)
  if(errorMessage) return({errorMessage})
  if(data){

    return(

      <div className="table_container">

        <div className="table_heading">

          <form action="" className="month_form">
            <input type="month" />
          </form>

        </div>

        <div className="table_header">
          <h6 className="date_column">Date</h6>
          <h6 className="clockin_column">Clock in</h6>
          <h6 className="clockout_column">Clock out</h6>
          <h6 className="hours_column">Hours</h6>
          <h6 className="status_column">Status</h6>
        </div>

        <UserAttendancelist attendance = {data}/>

        <div className="table_footer">
          <img src="icons/Keyboard arrow left.svg" alt="" />
          <img src="icons/Keyboard arrow right.svg" alt="" />
        </div>

      </div>
  
    )

  }


}


export default UserAttendance;