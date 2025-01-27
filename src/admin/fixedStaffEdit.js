import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import UserFetch from "../hooks/userFetch";
import { PaidStaff, UnpaidStaff } from "../components/adminPage/fixedPayrollStaff";
import Loading from "../components/loading";

const FixedStaffEdit = ()=>{

  const {id} = useParams();
  console.log("selected user id", id)
  const url = `http://localhost:4000/admin/payroll/${id}`;
  const token = localStorage.getItem("adminAuthToken")
  
  const {data, isLoading, errorMessage} = UserFetch(url,token);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [payrollMonths, setPayrollMonths] = useState([]);
  const [activeMonthData, setActiveMonthData] = useState(null);

 
  
  const formatMonthYear = (dateString) =>{
    const options = {year : "numeric", month: "long"};
    return new Date(dateString).toLocaleDateString("en-US", options)
  };

  useEffect(()=>{
    if(data && data.payroll){
     
      const months = (data.payroll).map((item) =>({
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

  if(isLoading) return(<Loading width={200} height={200}/>)
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