import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { PayrollHeader } from "../components/contractPayrollStaff";



const ContractStaffEdit = () =>{
  const {id} = useParams();
  const url = `http://localhost:4000/admin/payroll/${id}`;
  const [payrollData, setPayrollData] = useState({});
  const [weeks, setWeeks] = useState([]);
  const [isEditVisible, setIsEditVisible] = useState(true);

   const currentMonth = new Date().toLocaleString("default", {
      month: 'long', 
      year: "numeric"
    });

  console.log("before setting state",payrollData, weeks)
  
  useEffect(()=>{
    const fetchPayroll = async()=>{
      try {
        const {data} = await axios.get(url);
        setPayrollData(data);
        const dataWeek = data.payroll;
        setWeeks(dataWeek[currentMonth] || []);

        
      } catch (error) {
        console.error("Error fetching payroll data", error)
        
      }

    };

    fetchPayroll();

  }, [url]);

  console.log("after setting state",payrollData, weeks)


  return(
    <div className="payrolleditcont">
      <div className="contract_staff">
        <h4>{payrollData.name.firstname} {payrollData.name.lastname} Payslip</h4>
        <PayrollHeader setWeeks={setWeeks} setIsEditVisible={setIsEditVisible} payrollData={payrollData.payroll} isEditVisible={isEditVisible}/>

      </div>

    </div>

  )

}



export default ContractStaffEdit