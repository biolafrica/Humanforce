const ContractStaffEdit = ()=>{
  return(
    <div className="payrolleditcont">

      <div className="contract_staff">

        <h4>Abiodun Biobaku Payslip</h4>

        <div className="contract_staff_date_filter">
          <div className="staff_filter_container ">

            <select name="" >
              <option value="November">November, 2024</option>
              <option value="December">December, 2024</option>
            </select>

          </div>

          <img src="/icons/Edit.svg" alt="" />
        </div>

        <div className="table_header">
          <h6 className="date_column"></h6>
          <h6 className="clockin_column">Basic Pay</h6>
          <h6 className="clockout_column">Loan</h6>
          <h6 className="hours_column">Lateness</h6>
          <h6 className="status_column">Net Pay</h6>
        </div>

        <div className="table_body">

          <div className="column">
            <h6 className="date_column">Week 1</h6>
            <h6 className="clockin_column">N2,000:00</h6>
            <h6 className="clockout_column">N0.00</h6>
            <h6 className="hours_column">N0:00</h6>
            <h6 className="status_column">N2,000:00</h6>
          </div>

          <div className="column">
            <h6 className="date_column">Week 2</h6>
            <h6 className="clockin_column">N4,000:00</h6>
            <h6 className="clockout_column">N1,000:00</h6>
            <h6 className="hours_column">N0:00</h6>
            <h6 className="status_column">N3,000:00</h6>
          </div>

          <div className="column">
            <h6 className="date_column">Week 3</h6>
            <h6 className="clockin_column">N5,000:00</h6>
            <h6 className="clockout_column">N0,000:00</h6>
            <h6 className="hours_column">N500:00</h6>
            <h6 className="status_column">N4,500:00</h6>
          </div>

          <div className="column">
            <h6 className="date_column">Week 4</h6>
            <h6 className="clockin_column">N6,000:00</h6>
            <h6 className="clockout_column">N0:00</h6>
            <h6 className="hours_column">N0:00</h6>
            <h6 className="status_column">N6,000:00</h6>
          </div>

          <div className="column">
            <h6 className="date_column">Total</h6>
            <h6 className="clockin_column">N17,000:00</h6>
            <h6 className="clockout_column">N1,000:00</h6>
            <h6 className="hours_column">N500:00</h6>
            <h6 className="status_column">N15,500:00</h6>
          </div>

        </div>

      </div>

    </div>
  )

}

export default ContractStaffEdit;