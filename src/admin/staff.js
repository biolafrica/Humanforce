import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Staff = ()=>{
  const url = "http://localhost:4000/admin/staff";
  const {data, isLoading, errorMessage} = useFetch(url);

  const total = data ? data.length : 0;
  const contract = [];
  const fixed = [];

  data.forEach((item)=>{
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
      {data && (<>
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
              {data.map((data)=>(

                <Link className="column" key={data._id}>
                  <h6 className="date_column">{data.firstname} {data.lastname}</h6>
                  <h6 className="clockin_column">{data.role}</h6>
                  <h6 className="clockout_column">{data.employment_type}</h6>
                  <h6 className="hours_column">{data.salary}</h6>
                  <h6 className="status_column">{data.status}</h6>
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