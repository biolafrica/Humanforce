import PayslipForm from "../../components/userPage/payslipForm";
import UseFetch from "../../hooks/userFetch";
import Loading from "../../components/loading";
import PathError from "../error/pathError";

const Payslip =()=>{
  const url = `${process.env.REACT_APP_API_URL}/payslip`;
  const token = localStorage.getItem('authToken');
  const{data, isLoading, errorMessage}= UseFetch(url, token);

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage)return(<PathError error={errorMessage}/>);
  if(data){
    return (
    <div className="payslip_container">
      <PayslipForm payslips={data.formattedPayroll} staff={data.staff}/>
    </div>

  )
  }  
  
}

export default Payslip;