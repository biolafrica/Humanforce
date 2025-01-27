import { PayrollTable, PayrollEditPopup } from "./contractPayrollStaff";
import { useState } from "react";

const ContractStaffDisplay = ({payroll})=>{
 

  const currentMonth = new Date().toLocaleString("default", {
    month: 'long', 
    year: "numeric"
  });

  const [payrollData, setPayrollData] = useState(payroll);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [weeks, setWeeks] = useState(payroll[currentMonth]);
  const [isEditVisible, setIsEditVisible] = useState(true); 
  const [isPopupVisible, setIsPopupVisible] = useState(false); 


  const handleMonthChange = (e)=>{
    const month = e.target.value;
    setSelectedMonth(month)
    setWeeks(payrollData[month] || [])
    month === currentMonth ? setIsEditVisible(true) : setIsEditVisible(false);
  }

  const restrictSetPopup =()=>{
    const team = localStorage.getItem("team");
    if(team && (team.role === "Admin" || team.role === "Finance" ||team.role === "Operations")){
      setIsPopupVisible(true)
    }
  }

  const changePopup =()=>{
    setIsPopupVisible(false)
  }

  return(
    <>
      <>
        { isPopupVisible &&  <PayrollEditPopup weeks={weeks} cancel={changePopup}/>}
      </>

      <>
        { !isPopupVisible &&

          (
            <>
              <div className="contract_staff_date_filter">
                <div className="staff_filter_container ">

                  <select 
                    name="month"
                    value={selectedMonth}
                    onChange={()=> handleMonthChange} 
                  >
                    {Object.keys(payrollData).map((month)=>(
                      <option 
                        value={month}
                        key={month}
                      >
                        {month}
                      </option>

                    ))}
                    
                  </select>

                </div>

                {isEditVisible && 
                  <img 
                    src="/icons/Edit.svg" 
                    alt="Edit" 
                    onClick={()=>setIsPopupVisible(true)} 
                    style={{ cursor: "pointer" }}
                  />
                }

              </div>

              <div className="table_header">
                <h6 className="date_column"></h6>
                <h6 className="clockin_column">Basic Pay</h6>
                <h6 className="clockout_column">Deductions</h6>
                <h6 className="hours_column">Bonuses</h6>
                <h6 className="status_column">Net Pay</h6>
              </div>

              <PayrollTable weeks={weeks}/>
            </>
          )
        
        }

   
      </>
    </>
  )

}

export default ContractStaffDisplay