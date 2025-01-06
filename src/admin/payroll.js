import ContractStaffList from "../components/contractStaffList";
import FixedStaffList from "../components/fixedStaffList";
import { useState } from "react";

const Payroll =()=>{

  const [activeTab, setActiveTab] = useState("fixed");

  const handleFixedClick = ()=>{
    setActiveTab("fixed")

  }
  const handleContractClick = ()=>{
    setActiveTab("contract");
  }

  return(
    <div className="payroll_cont">

      <div className="payrollcont_head">

        <div className="staff_cont_head">

          <button className="text-btn" onClick={handleFixedClick}>
            <h5 className={`total ${activeTab === "fixed" ? "select" : ""}`}>Fixed - 20</h5> 
          </button> 

          <button className="text-btn" onClick={handleContractClick}> 
            <h5 className={`contract ${activeTab === "contract" ? "select" : ""}`}>Contract - 18</h5> 
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
        
        {activeTab === "fixed" && <FixedStaffList/>}
        {activeTab === "contract" && <ContractStaffList/>}
        
        <div className="table_footer">
          <img src="/icons/Keyboard arrow left.svg" alt="" />
          <img src="/icons/Keyboard arrow right.svg" alt="" />
        </div>

      </div>

    </div>
  )
}

export default Payroll; 