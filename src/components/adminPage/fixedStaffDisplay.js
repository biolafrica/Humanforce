import { PaidStaff, UnpaidStaff } from "./fixedPayrollStaff";
import { useState} from "react";

const FixedStaffDisplay = ({payroll})=>{
  console.log("payroll",payroll)

  const currentMonth = new Date().toLocaleString("default", {
    month: 'long', 
    year: "numeric"
  })

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [payrollData, setPayrollData] = useState(payroll[currentMonth] || []);
  console.log("payroll data", payrollData)

    
  const handleMonthChange = (e) =>{
    const month = e.target.value;
    setPayrollData(payroll[month]);
    setSelectedMonth(month || []);
   
  }; 

  return(
    <>

      <div className="fixed_staff_date_filter">

        <div className="staff_filter_container ">
          <select 
            name=""
            value={selectedMonth}
            role="combobox"
            onChange={handleMonthChange} 
          >
            {Object.keys(payroll).includes(currentMonth)? "":<option value={currentMonth}>{currentMonth}</option>}
            {
              Object.keys(payroll)
              .map((month) => <option value={month} key={month}>{month}</option>)
            }
          
          </select>
        </div>

      </div>


      {
        selectedMonth === currentMonth || selectedMonth.length === 0 ? (
          <UnpaidStaff payroll={payrollData}/>
        ):(
          <PaidStaff paidPayroll={payrollData}/>
        )
      }
    </>
  )

}

export default FixedStaffDisplay;