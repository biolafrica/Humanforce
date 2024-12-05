const Payroll =()=>{
  return(
    <div className="payroll_cont">

      <div className="payrollcont_head">

        <div className="staff_cont_head">
          <h5 className="total select">Fixed - 20</h5>
          <h5 className="contract">Contract - 18</h5>
        </div>

      </div>

      <div className="payrollcont_body">
        
        <div className="table_heading ">

          <form action="" className="month_form">
            <input type="text" placeholder="search payroll" />
          </form>

        </div>

        <div className="table_header">
          <h6 className="date_column">Name</h6>
          <h6 className="clockin_column">Role</h6>
          <h6 className="clockout_column">Date</h6>
          <h6 className="hours_column">Salary</h6>
          <h6 className="status_column">Status</h6>
        </div>

        <div className="table_body">

          <div className="column">
            <h6 className="date_column">Abiodun Biobaku</h6>
            <h6 className="clockin_column">Rider</h6>
            <h6 className="clockout_column">11-12-2024</h6>
            <h6 className="hours_column">N10,000:00</h6>
            <h6 className="status_column">Active</h6>
          </div>

          <div className="column">
            <h6 className="date_column">Adegoke Emmanuel</h6>
            <h6 className="clockin_column">Graphics Designer</h6>
            <h6 className="clockout_column">12-12-2024</h6>
            <h6 className="hours_column">N200,000:00</h6>
            <h6 className="status_column">Sacked</h6>
          </div>

          <div className="column">
            <h6 className="date_column">Oletubo Oluwadamilare</h6>
            <h6 className="clockin_column">Operations Manager</h6>
            <h6 className="clockout_column">13-13-2024</h6>
            <h6 className="hours_column">N100,000:00</h6>
            <h6 className="status_column">Resigned</h6>
          </div>

        </div>

        <div className="table_footer">
          <img src="icons/Keyboard arrow left.svg" alt="" />
          <img src="icons/Keyboard arrow right.svg" alt="" />
        </div>

        
      </div>

    </div>
  )
}

export default Payroll; 