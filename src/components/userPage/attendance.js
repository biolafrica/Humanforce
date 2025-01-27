import { useState, useEffect } from "react"
import UserAttendancelist from "./userAttendanceList"
import performance from "../../utils/performance"

const Attendance = ({attendance})=>{
  const currentMonth = new Date().toLocaleString('default',{month: 'long', year:'numeric'});
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [attendanceData, setAttendanceData] = useState(attendance[currentMonth] || []);

  useEffect(()=>{
    setAttendanceData(attendance[selectedMonth] || [])

  },[selectedMonth, attendance])

  const handleMonthChange = (e)=>{
    setSelectedMonth(e.target.value)
  }


  return(

    <div className="table_container att">

      <div className="attendance_sub_container">

        <div className="att_filter">
          <select name="" value={selectedMonth} onChange={handleMonthChange}>
            {Object.keys(attendance).map((month)=>(<option value={month} key={month}>{month}</option>))}
          </select>
        </div>

        <div className="performance-cont">
          <img src={`icons/${performance(attendanceData)}.svg`} alt="" />
          <h4>{performance(attendanceData)}</h4>
        </div>

      </div>

     
      <div className="table_header">
        <h6 className="date_column">Date</h6>
        <h6 className="clockin_column">Clock in</h6>
        <h6 className="clockout_column">Clock out</h6>
        <h6 className="hours_column">Hours</h6>
        <h6 className="status_column">Status</h6>
      </div>

      <UserAttendancelist attendance = {attendanceData}/>

    </div>
   
  )

}

export default Attendance;