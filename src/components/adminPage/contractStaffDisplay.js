import { PayrollTable, PayrollEditPopup } from "./contractPayrollStaff";
import { useState } from "react";
import useTeam from "./buttonState";
import { AlertPopup, useAlert} from "../alert";

const ContractStaffDisplay = ({payroll})=>{
  const currentMonth = new Date().toLocaleString("default", {
    month: 'long', 
    year: "numeric"
  });

  const {team} = useTeam();
  const {alert, showAlert} = useAlert();

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

  const canOpenPopup = ()=>{
    return ["Admin", "Operations", "Finance"].includes(team.role)
  }

  return(
    <>
      <>
        { isPopupVisible &&  <PayrollEditPopup weeks={weeks} cancel={()=>setIsPopupVisible(false)}/>}
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
                    onClick={(e)=>{if(["Admin", "Operations", "Finance"].includes(team.role)){
                      setIsPopupVisible(true);
                    }else{
                      e.preventDefault();
                      showAlert("You can't edit amount", "info");
                    }}} 
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

      {alert.visible && (
        <AlertPopup 
          visible={alert.visible} 
          message={alert.message} 
          type={alert.type}
          
        />
      )}
    </>
  )

}

export default ContractStaffDisplay