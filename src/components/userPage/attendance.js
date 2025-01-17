import { useState, useEffect } from "react"
import UserAttendancelist from "./userAttendanceList"

const Attendance = ({attendance})=>{
  console.log(attendance)

  const currentMonth = new Date().toLocaleString('default',{month: 'long', year:'numeric'})
  const [selectedMonth, setSelectedMonth] = useState(currentMonth)
  const [attendanceData, setAttendanceData] = useState(attendance[currentMonth] || [])

  useEffect(()=>{
    setAttendanceData(attendance[selectedMonth] || [])

  },[selectedMonth, attendance])

  const handleMonthChange = (e)=>{
    setSelectedMonth(e.target.value)
  }

  return(

    <div className="table_container">

      <div className="attendance_filter">

        <select name="" value={selectedMonth} onChange={handleMonthChange}>
          {Object.keys(attendance).map((month)=>(<option value={month} key={month}>{month}</option>))}
        </select>

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