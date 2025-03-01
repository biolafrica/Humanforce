import { useParams } from "react-router-dom";
import UseFetch from "../../hooks/userFetch"
import ContractStaffDisplay from "../../components/adminPage/contractStaffDisplay";
import Loading from "../../components/common/loading";
import PathError from "../error/pathError";


const ContractStaffEdit = ()=>{
  const {id} = useParams();
  const url = `${process.env.REACT_APP_API_URL}/admin/payroll/${id}`;
  const token = localStorage.getItem("adminAuthToken");
  const {data, isLoading, errorMessage}= UseFetch(url, token);

  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage)return(<PathError error={errorMessage}/>);
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