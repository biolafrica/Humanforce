import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Staff = ()=>{
  const url = "http://localhost:4000/admin/staff";
  const refresh = false;
  const {data, isLoading, errorMessage} = useFetch(url, refresh);

  const users = data?.users || [];

  const total = users ? users.length : 0;
  const contract = [];
  const fixed = [];

  users.forEach((item)=>{
    if (item.employment_type = "contract"){
      contract.push(item);

    } else if (item.employment_type = "fixed"){
      fixed.push(item)
    }

  })

  return(

    <div className="staff_cont">
      {errorMessage && <div> {errorMessage} </div>}
      {isLoading && <div>loading......</div>}
      {users && (<>
        <div className="staff_cont_head">
          <h5 className="total select">Total - {total}</h5>
          <h5 className="contract">Contract - {contract.length}</h5>
          <h5 className="fixed">Fixed - {fixed.length}</h5>
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

            <div className="table_body">
              {users.map((user)=>(

                <Link to={`/admin/staff/${user._id}`} className="column" key={user._id}>
                  <h6 className="date_column">{user.firstname} {user.lastname}</h6>
                  <h6 className="clockin_column">{user.role}</h6>
                  <h6 className="clockout_column">{user.employment_type}</h6>
                  <h6 className="hours_column">{user.salary}</h6>
                  <h6 className="status_column">{user.status}</h6>
                </Link>

              ))}

            </div>

            <div className="table_footer">
              <img src="/icons/Keyboard arrow left.svg" alt="" />
              <img src="/icons/Keyboard arrow right.svg" alt="" />
            </div>

          </div>

        </div>
      </>)}
    </div>
  );

};

export default Staff;