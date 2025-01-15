import AttendancesList from "./attendancesList"

const Attendances = (props)=>{
  return(
    
    <div>

      <div className="table_heading ">
        <form action="" className="month_form">
          <input type="month"  />
        </form>
      </div>

      <div className="table_header">
        <h6 className="date_column">Name</h6>
        <h6 className="clockin_column">Role</h6>
        <h6 className="clockout_column">Hours</h6>
        <h6 className="hours_column">Penalty</h6>
        <h6 className="status_column">Status</h6>
      </div>

      <AttendancesList data ={props}/>

      <div className="table_footer">
        <img src="/icons/Keyboard arrow left.svg" alt="" />
        <img src="/icons/Keyboard arrow right.svg" alt="" />
      </div>

    </div>


  )
}


export default Attendances