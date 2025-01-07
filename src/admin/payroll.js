import ContractStaffList from "../components/contractStaffList";
import FixedStaffList from "../components/fixedStaffList";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Payroll =()=>{
  const url = "http://localhost:4000/admin/payrolls";
  const refresh = false;
  const {data, isLoading, errorMessage} = useFetch(url, refresh);
  const [activeTab, setActiveTab] = useState("fixed");

  const handleFixedClick = ()=>{
    setActiveTab("fixed")
  }
  const handleContractClick = ()=>{
    setActiveTab("contract");
  }

  if(isLoading)return(<div>....Loading</div>)
  if(errorMessage)return({errorMessage})
  if(data){

    return(
      <div className="payroll_cont">

        <div className="payrollcont_head">

          <div className="staff_cont_head">

            <button className="text-btn" onClick={handleFixedClick}>
              <h5 className={`total ${activeTab === "fixed" ? "select" : ""}`}>Fixed - {(data.users).filter((users)=> users.employment_type === 'fixed').length}</h5> 
            </button> 

            <button className="text-btn" onClick={handleContractClick}> 
              <h5 className={`contract ${activeTab === "contract" ? "select" : ""}`}>Contract - {(data.users).filter((users)=> users.employment_type === 'contract').length}</h5> 
            </button>

          </div>

        </div>

        <div className="payrollcont_body">
          
          <div className="table_heading ">

            <form action="" className="month_form">
              <input type="text" placeholder="search staff" />
            </form>

          </div>

          <div className="table_header">
            <h6 className="date_column">Name</h6>
            <h6 className="clockin_column">Role</h6>
            <h6 className="clockout_column">Date</h6>
            <h6 className="hours_column">Salary</h6>
            <h6 className="status_column">Status</h6>
          </div>

          {activeTab === "fixed" &&
          <FixedStaffList 
            data = {data.fixed_staff} 
            user ={(data.users).filter((users)=> users.employment_type === 'fixed')} 
          />}

          {activeTab === "contract" && <ContractStaffList 
            data = {data.contract_staff} 
            user ={(data.users).filter((users)=> users.employment_type === 'contract')} 
          />}
          
          <div className="table_footer">
            <img src="/icons/Keyboard arrow left.svg" alt="" />
            <img src="/icons/Keyboard arrow right.svg" alt="" />
          </div>

        </div>

      </div>
    )
  }

}

export default Payroll; 