import { useState } from "react";
import UseFetch from "../../hooks/userFetch";
import PayrollStaffList from "../../components/adminPage/payrollStaffList";
import Loading from "../../components/common/loading";
import PathError from "../error/pathError";

const Payroll =()=>{
  const url = `${process.env.REACT_APP_API_URL}/admin/payrolls`;
  const token = localStorage.getItem("adminAuthToken")
  const {data, isLoading, errorMessage} = UseFetch(url,token);
  const [activeTab, setActiveTab] = useState("fixed");
  const [searchTerm, setSearchTerm] = useState("");

  if(isLoading) return(<Loading width={200} height={200}/>);
  if(errorMessage)return(<PathError error={errorMessage}/>);
  if(data){
   

    const fixedStaff = (data.users).filter((users)=> users.employment_type === 'fixed');
    const contractStaff = (data.users).filter((users)=> users.employment_type === "contract");

    const filteredFixedStaff = fixedStaff.filter((fixed)=>
      `${fixed.firstname} ${fixed.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredContractStaff = contractStaff.filter((contract)=>
      `${contract.firstname} ${contract.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
      <div className="payroll_cont">

        <div className="payrollcont_head">

          <div className="staff_cont_head">

            <button data-testid="fixed-btn" className="text-btn" onClick={()=>setActiveTab("fixed")}>
              <h5 className={`total ${activeTab === "fixed" ? "select" : ""}`}>Fixed - {(data.users).filter((users)=> users.employment_type === 'fixed').length}</h5> 
            </button> 

            <button data-testid="contract-btn" className="text-btn" onClick={()=>setActiveTab("contract")}> 
              <h5 className={`contract ${activeTab === "contract" ? "select" : ""}`}>Contract - {(data.users).filter((users)=> users.employment_type === 'contract').length}</h5> 
            </button>

          </div>

        </div>

        <div className="payrollcont_body">
          
          <div className="table_heading ">

            <form action="" className="month_form">
              <input 
                type="text" 
                placeholder="search staff"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)} 
              />
            </form>

          </div>

          <div className="table_header">
            <h6 className="date_column">Name</h6>
            <h6 className="clockin_column">Role</h6>
            <h6 className="clockout_column">Email</h6>
            <h6 className="hours_column">Salary</h6>
            <h6 className="status_column">Status</h6>
          </div>

          {activeTab === "fixed" &&
          <PayrollStaffList 
            user ={filteredFixedStaff} 
          />}

          {activeTab === "contract" && <PayrollStaffList 
            user ={filteredContractStaff} 
          />}
          
        </div>

      </div>
    )
  }

}

export default Payroll; 