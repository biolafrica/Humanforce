import { Link } from "react-router-dom";

const FixedStaffList = ()=>{

  return(

    <div className="table_body fixed_staff_table">
      <Link to="/admin/payroll/edit/fixed" className="column">
        <h6 className="date_column">Abiodun Biobaku</h6>
        <h6 className="clockin_column">Rider</h6>
        <h6 className="clockout_column">11-12-2024</h6>
        <h6 className="hours_column">N10,000:00</h6>
        <h6 className="status_column">Active</h6>
      </Link>
    </div>

  )


}

export default FixedStaffList;