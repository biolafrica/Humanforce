import { useParams } from "react-router-dom";
import UserFetch from "../../hooks/userFetch";
import Loading from "../../components/loading";
import FixedStaffDisplay from "../../components/adminPage/fixedStaffDisplay";

const FixedStaffEdit = ()=>{
  const {id} = useParams();
  const url = `${process.env.REACT_APP_API_URL}/admin/payroll/${id}`;
  const token = localStorage.getItem("adminAuthToken")
  const {data, isLoading, errorMessage} = UserFetch(url,token);



  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage) return (<div>{errorMessage}</div>)
  if(data){
    console.log(data);
    const {name, payroll} = data;

    return(
      <div className="payrolleditcont">

        <div className="fixed_staff">

          <h4>{name.firstname} {name.lastname} Payslip</h4>
          <FixedStaffDisplay payroll={payroll}/>
          
        </div>

      </div>
    )

  }
}

export default FixedStaffEdit