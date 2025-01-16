import { Link } from "react-router-dom";
import UserFetch from "../hooks/userFetch";
import { useState } from "react";
import StaffList from "../components/adminPage/staffList";

const Staff = ()=>{
  const url = "http://localhost:4000/admin/staff";
  const token = localStorage.getItem("adminAuthToken")
  const {data, isLoading, errorMessage} = UserFetch(url, token);
  const [activeTab, setActiveTab] = useState("all")

  const handleContractClick =()=>{
    setActiveTab('contract')
  }
  const handleFixedClick =()=>{
    setActiveTab("fixed")
  }
  const handleAllClick =()=>{
    setActiveTab("all")
  }

  if(isLoading)return(<div>...Loading</div>)
  if(errorMessage)return({errorMessage})
  if(data){

    const users = data.users || [];

    const total = users.length || 0;
    const contract = [];
    const fixed = [];

    users.forEach((item)=>{
      if (item.employment_type === "contract"){
        contract.push(item);

      } else if (item.employment_type === "fixed"){
        fixed.push(item)
      }

    })

    return(

      <div className="staff_cont">
      
        <div className="staff_cont_head">

          <div className="text-btn" onClick={handleAllClick}>
            <h5 className={`total ${activeTab === "all" ? "select" : ""}`}>Total - {total}</h5>
          </div>

          <div className="text-btn" onClick={handleContractClick}>
            <h5 className={`contract ${activeTab === "contract" ? "select" : ""}`}>Contract - {contract.length}</h5>
          </div>

          <div className="text-btn" onClick={handleFixedClick}>
            <h5 className={`fixed ${activeTab === "fixed" ? "select" : ""}`}>Fixed - {fixed.length}</h5>
          </div>

        </div>

        <div className="staff_cont_body">

          <div className="staff_table_container">

            <div className="table_heading">

              <form action="" className="month_form">
                <input type="text" placeholder="search " />
              </form>

              <Link to="/admin/staff/new" className="filled-btn">
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

            {activeTab === "all" && <StaffList users= {users}/>}
            {activeTab === "contract" && <StaffList users ={contract}/>}
            {activeTab === "fixed" &&  <StaffList users={fixed}/>}

          </div>

        </div>
        
      </div>
    );

  }

};

export default Staff;