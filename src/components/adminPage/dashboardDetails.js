import { useState } from "react"

const DashboardDetails = ({attendance, staff})=>{
  const attendanceKey = Object.keys(attendance)
  const [selectedOption, setSelectedOption] = useState(attendanceKey[0]);
  const [selectedAnalytics, setSelectedAnalytics] = useState(attendance.today);
  

  const handleOnChange= (e)=>{
    const chosenOption = e.target.value;
    if(chosenOption === attendanceKey[0]){
      setSelectedOption(attendanceKey[0])
      setSelectedAnalytics(attendance.today)
    }else if(chosenOption === attendanceKey[1]){
      setSelectedOption(attendanceKey[1])
      setSelectedAnalytics(attendance.thisMonth)
    }else if(chosenOption === attendanceKey[2]){
      setSelectedOption(attendanceKey[2])
      setSelectedAnalytics(attendance.thisYear)
    }
  }
  
  
  return(

    <div className="dashboard_body">
      <h4>Dashboard Analytics</h4>
      <select role="combobox" value={selectedOption} onChange={(e)=>handleOnChange(e)}>
        {Object.keys(attendance).map((attendance)=> <option value={attendance} key={attendance}>{attendance}</option>)}
      </select>

      <div className="analytics_cont">

        <div className="up_analytics">

          <div className="analyse">
            <div className="analyse_up">
              <img src="icons/Person 2.svg" alt="" />
              <h4>Attendance</h4>
            </div>

            <h4><b>{selectedAnalytics[0]}</b></h4>

          </div>

          <div className="analyse">

            <div className="analyse_up">
              <img src="icons/Person check.svg" alt="" />
              <h4>Early</h4>
            </div>

            <h4><b>{selectedAnalytics[1]}</b></h4>
          </div>

          <div className="analyse">
            <div className="analyse_up">
              <img src="icons/Person cancel.svg" alt="" />
              <h4>Late</h4>
            </div>

            <h4><b>{selectedAnalytics[2]}</b></h4>
          </div>

        </div>

        <div className="down_analytics">

          <div className="analyse">
            <div className="analyse_up">
              <img src="icons/Group.svg" alt="" />
              <h4>Staff</h4>
            </div>

            <h4><b>{staff.allStaffCount}</b></h4>
          </div>

          <div className="analyse">
            <div className="analyse_up">
              <img src="icons/Blockchain New Logo.svg" alt="" />
              <h4>Contract</h4>
            </div>

            <h4><b>{staff.contractStaffCount}</b></h4>
          </div>

          <div className="analyse">
            <div className="analyse_up">
              <img src="icons/Blockchain New Logo.svg" alt="" />
              <h4>Fixed</h4>
            </div>

            <h4><b>{staff.fixedStaffCount}</b></h4>
          </div>

        </div>

      </div>

    </div>
  )
}

export default DashboardDetails