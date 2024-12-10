import { Link } from "react-router-dom";

const Staff = ()=>{

  return(

    <div className="staff_cont">

      <div className="staff_cont_head">
        <h5 className="total select">Total - 20</h5>
        <h5 className="contract">Contract - 18</h5>
        <h5 className="fixed">Fixed - 2</h5>
      </div>

      <div className="staff_cont_body">

        <div className="staff_table_container">

          <div className="table_heading ">

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

            <div className="column">
              <h6 className="date_column">Abiodun Biobaku</h6>
              <h6 className="clockin_column">Rider</h6>
              <h6 className="clockout_column">Contract</h6>
              <h6 className="hours_column">N10,000:00</h6>
              <h6 className="status_column">Active</h6>
            </div>

            <div className="column">
              <h6 className="date_column">Adegoke Emmanuel</h6>
              <h6 className="clockin_column">Graphics Designer</h6>
              <h6 className="clockout_column">Fixed</h6>
              <h6 className="hours_column">N200,000:00</h6>
              <h6 className="status_column">Sacked</h6>
            </div>

            <div className="column">
              <h6 className="date_column">Oletubo Oluwadamilare</h6>
              <h6 className="clockin_column">Operations Manager</h6>
              <h6 className="clockout_column">Fixed</h6>
              <h6 className="hours_column">N100,000:00</h6>
              <h6 className="status_column">Resigned</h6>
            </div>

          </div>

          <div className="table_footer">
            <img src="/icons/Keyboard arrow left.svg" alt="" />
            <img src="/icons/Keyboard arrow right.svg" alt="" />
          </div>

        </div>

      </div>

    </div>
  );

};

export default Staff;