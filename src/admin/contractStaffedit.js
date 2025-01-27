import { useParams } from "react-router-dom";
import UserFetch from "../hooks/userFetch"
import ContractStaffDisplay from "../components/adminPage/contractStaffDisplay";
import Loading from "../components/loading";


const ContractStaffEdit = ()=>{
  const {id} = useParams();
  const url = `http://localhost:4000/admin/payroll/${id}`;
  const token = localStorage.getItem("adminAuthToken");
  const {data, isLoading, errorMessage}= UserFetch(url, token);

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage) return({errorMessage})
  if(data.payroll && data.name){
    const name = data.name;
    return(
      <div className="payrolleditcont">
        <div className="contract_staff">

          <h4>{name.firstname || ""} {name.lastname || ""} Payslip</h4>
          <ContractStaffDisplay payroll={data.payroll} />
      
        </div>
      </div>
    )

  }



}

export default ContractStaffEdit;