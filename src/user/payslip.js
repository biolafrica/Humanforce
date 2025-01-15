import PayslipForm from "../components/userPage/payslipForm";
import UserFetch from "../hooks/userFetch";

const Payslip =()=>{
  const url = "http://localhost:4000/payslip/";
  const token = localStorage.getItem('authToken');
  const{data, isLoading, errorMessage}= UserFetch(url, token);

  if(isLoading) return (<div>...isLoading</div>)
  if(errorMessage) return ({errorMessage})
  if(data){
    return (
    <div className="payslip_container">
      <PayslipForm payslips={data.formattedPayroll}/>
    </div>

  )
  }  
  
}

export default Payslip;