import { Link } from "react-router-dom";
import UserFetch from "../hooks/userFetch";
import { useState } from "react";
import StaffList from "../components/adminPage/staffList";
import Loading from "../components/loading";
import useTeam from "../components/adminPage/buttonState";

const Staff = ()=>{
  const url = "http://localhost:4000/admin/staff";
  const token = localStorage.getItem("adminAuthToken")
  const {data, isLoading, errorMessage} = UserFetch(url, token);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const {AdminExclusiveButton} = useTeam()

 
  if(isLoading) return(<Loading width={200} height={200}/>)
  if(errorMessage)return({errorMessage})
  if(data){

    const users = data.users || [];
    const total = users.length || 0;
  
    const contract = users.filter(user=>user.employment_type == "contract");
    const fixed = users.filter(user=>user.employment_type == "fixed");

    const filteredUsers = users.filter(user=>
      `${user.firstname} ${user.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredContract = contract.filter(user =>
      `${user.firstname} ${user.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const filteredFixed = fixed.filter(user =>
      `${user.firstname} ${user.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return(

      <div className="staff_cont">
      
        <div className="staff_cont_head">

          <div className="text-btn" onClick={()=> setActiveTab("all")}>
            <h5 className={`total ${activeTab === "all" ? "select" : ""}`}>Total - {total}</h5>
          </div>

          <div className="text-btn" onClick={()=> setActiveTab("contract")}>
            <h5 className={`contract ${activeTab === "contract" ? "select" : ""}`}>Contract - {contract.length}</h5>
          </div>

          <div className="text-btn" onClick={()=> setActiveTab("fixed")}>
            <h5 className={`fixed ${activeTab === "fixed" ? "select" : ""}`}>Fixed - {fixed.length}</h5>
          </div>

        </div>

        <div className="staff_cont_body">

          <div className="staff_table_container">

            <div className="table_heading">

              <form action="staff" className="month_form">
                <input 
                  type="text" 
                  placeholder="search staff"
                  value={searchTerm}
                  name="staff"
                  onChange={(e)=>setSearchTerm(e.target.value)} 
                />
              </form>

              <Link to="/admin/staff/new" className={`${AdminExclusiveButton}`}>
                <img src="/icons/Add.svg" alt="" />
                <h4>Add Staff</h4>
              </Link>

            </div>

            <div className="table_header">
              <h6 className="date_column">Name</h6>
              <h6 className="clockin_column">Role</h6>
              <h6 className="clockout_column">Type</h6>
              <h6 className="hours_column">Salary</h6>
              <h6 className="status_column">Status</h6>
            </div>

            {activeTab === "all" && <StaffList users= {filteredUsers}/>}
            {activeTab === "contract" && <StaffList users ={filteredContract}/>}
            {activeTab === "fixed" &&  <StaffList users={filteredFixed}/>}

          </div>

        </div>
        
      </div>
    );

  }

};

export default Staff;