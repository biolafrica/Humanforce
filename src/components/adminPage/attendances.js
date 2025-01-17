import AttendancesList from "./attendancesList";
import { useState, useEffect} from "react";

const Attendances = ({users, attendances})=>{
  const currentMonth = new Date().toLocaleString('default',{month: 'long', year:'numeric'})
  console.log("attendances", attendances);
  
  const [selectedMonth, setSelectedMonth] = useState(currentMonth)
  const [attendanceData, setAttendanceData] = useState(attendances[currentMonth] || [])

  useEffect(()=>{
    setAttendanceData(attendances[selectedMonth] || [])

  },[selectedMonth, attendances])
  
  const handleMonthChange = (e)=>{
    setSelectedMonth(e.target.value)
  }

  return(
    
    <div>

      <div className="attendance_filter">
        <select name="" value={selectedMonth} onChange={handleMonthChange}>
          {Object.keys(attendances).map((month)=>(<option value={month} key={month}>{month}</option>))}
        </select>
      </div>

      <div className="table_header">
        <h6 className="date_column">Name</h6>
        <h6 className="clockin_column">Role</h6>
        <h6 className="clockout_column">Hours</h6>
        <h6 className="hours_column">Penalty</h6>
        <h6 className="status_column">Status</h6>
      </div>

      <AttendancesList users={users} attendances={attendanceData}/>
  
    </div>


  )
}


export default Attendances