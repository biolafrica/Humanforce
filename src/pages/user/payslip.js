import PayslipForm from "../../components/userPage/payslipForm";
import UserFetch from "../../hooks/userFetch";
import Loading from "../../components/loading";

const Payslip =()=>{
  const url = "http://localhost:4000/payslip/";
  const token = localStorage.getItem('authToken');
  const{data, isLoading, errorMessage}= UserFetch(url, token);

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage) return ({errorMessage})
  if(data){
    return (
    <div className="payslip_container">
      <PayslipForm payslips={data.formattedPayroll} staff={data.staff}/>
    </div>

  )
  }  
  
}

export default Payslip;