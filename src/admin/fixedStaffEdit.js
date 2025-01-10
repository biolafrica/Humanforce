import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { PaidStaff, UnpaidStaff } from "../components/fixedPayrollStaff";

const FixedStaffEdit = ()=>{

  const {id} = useParams();
  console.log("selected user id", id)
  const url = `http://localhost:4000/admin/payroll/${id}`;
  const refresh = false ;

  const {data, isLoading, errorMessage} = useFetch(url, refresh);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [payrollMonths, setPayrollMonths] = useState([]);
  const [activeMonthData, setActiveMonthData] = useState(null);

 
  
  const formatMonthYear = (dateString) =>{
    const options = {year : "numeric", month: "long"};
    return new Date(dateString).toLocaleDateString("en-US", options)
  };

  useEffect(()=>{
    if(data && data.payroll){

      const months = data.payroll.map((item) =>({
        label: formatMonthYear(item.createdAt),
        value: item.createdAt
      }))

      setPayrollMonths(months);

      const currentMonth = months[0]?.value;
      setSelectedMonth(currentMonth);

      const currentMonthData = data.payroll.find(
        (item) => item.createdAt === currentMonth
      );

      setActiveMonthData(currentMonthData);
    }
  }, [data]);

  const handleMonthChange = (e) =>{
    const selected = e.target.value;
    setSelectedMonth(selected);

    const selectedData = data.payroll.find(
    (item) => item.createdAt === selected);
    setActiveMonthData(selectedData);
  };

  if(isLoading) return (<div>....Loading</div>)
  if(errorMessage) return (<div>{errorMessage}</div>)


  return(
    <div className="payrolleditcont">

      <div className="fixed_staff">

        <h4>{data.name.firstname} {data.name.lastname} Payslip</h4>

        <div className="fixed_staff_date_filter">

          <div className="staff_filter_container ">
            <select 
              name=""
              value={selectedMonth}
              onChange={handleMonthChange} 
            >
              {payrollMonths.map((month) =>(
                <option 
                  value={month.value}
                  key={month.value}
                >
                  {month.label}
                </option>
              ))}
            
            </select>
          </div>

          <img src="/icons/Edit.svg" alt="" />

        </div>
        
        <div>

          {selectedMonth === payrollMonths[0]?.value ? (
            <UnpaidStaff data={activeMonthData}/>
          ):(
            <PaidStaff data={activeMonthData} />
          )}
          
          
        </div>
        
      </div>

    </div>
  )

}

export default FixedStaffEdit