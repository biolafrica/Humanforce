import { Link } from "react-router-dom";

const ContractStaffList =()=>{
  return(

    <div className="table_body contract_staff_table">
      <Link to="/admin/payroll/edit/contract" className="column">
        <h6 className="date_column">Folaji Jamiu</h6>
        <h6 className="clockin_column">Operation Manager</h6>
        <h6 className="clockout_column">11-12-2025</h6>
        <h6 className="hours_column">N100,000:00</h6>
        <h6 className="status_column">Active</h6>
      </Link>
    </div>

  )
}

export default ContractStaffList;