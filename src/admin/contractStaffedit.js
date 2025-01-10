import { useParams } from "react-router-dom";
import { PayrollTable, PayrollEditPopup } from "../components/contractPayrollStaff";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";


const ContractStaffEdit = ()=>{
  const {id} = useParams();
  const [payrollData, setPayrollData] = useState({});
  const [selectedMonth, setSelectedMonth] = useState("");
  const [weeks, setWeeks] = useState([]);
  const [isEditVisible, setIsEditVisible] = useState(false); 
  const url = `http://localhost:4000/admin/payroll/${id}`;
  console.log("URL being called:", url)


  console.log("before setting state",payrollData, selectedMonth, weeks);


  useEffect(()=>{
    const fetchPayroll =async()=>{
      try {
        const {data} = await axios.get(url);
        console.log("data", data)
        setPayrollData(data);
        const currentMonth = new Date().toLocaleString("default", {
          month: 'long', 
          year: "numeric"
        });
        setSelectedMonth(currentMonth);
        const dataWeek = data.payroll;
        setWeeks(dataWeek[currentMonth] || []);

        console.log("after setting state",payrollData, selectedMonth, weeks)
     
      } catch (error) {
        console.error("Error fetching payroll data:", error)
      }
    };

    fetchPayroll();
  },[url]);

  console.log("after the useeffect",payrollData, selectedMonth, weeks);


  const handleMonthChange = (e)=>{
    const month = e.target.value;
    setSelectedMonth(month)
    setWeeks((payrollData.payroll)[month] || [])
    setIsEditVisible(month === new Date().toLocaleString('default', {month: "long", year:'numeric'}));
  }
  
  return(
    <div className="payrolleditcont">

      <div className="contract_staff">

        <h4>Abiodun Biobaku Payslip</h4>

        <div className="contract_staff_date_filter">
          <div className="staff_filter_container ">

            <select 
              name="month"
              value={selectedMonth}
              onChange={handleMonthChange} 
            >
              {Object.keys(payrollData.payroll).map((month)=>(
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
          <img src="/icons/Edit.svg" alt="Edit" onClick={()=>setIsEditVisible(true)} />}
        </div>

        <div className="table_header">
          <h6 className="date_column"></h6>
          <h6 className="clockin_column">Basic Pay</h6>
          <h6 className="clockout_column">Deductions</h6>
          <h6 className="hours_column">Bonuses</h6>
          <h6 className="status_column">Net Pay</h6>
        </div>

        <PayrollTable weeks={weeks}/>
        {isEditVisible &&  <PayrollEditPopup weeks={weeks}/>}

      </div>
    </div>
  )

}

export default ContractStaffEdit;