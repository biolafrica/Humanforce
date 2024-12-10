const PayrollEdit = ()=>{
  return(
    <div className="payrolleditcont">

      <div className="fixed_staff">

        <h4>Payroll Summary</h4>

        <div className="newstaff_column">

          <form action="">
            <label htmlFor=""><h4>Basic Pay</h4></label>
            <input type="text" placeholder="Enter amount" />
          </form>

          <form action="">
            <label htmlFor=""><h4>Loan</h4></label>
            <input type="text" placeholder="Enter amount" />
          </form>

        </div>

        <div className="newstaff_column">

          <form action="">
            <label htmlFor=""><h4>Lateness</h4></label>
            <input type="text" placeholder="Enter amount" />
          </form>

          <form action="">
            <label htmlFor=""><h4>Pension</h4></label>
            <input type="text" placeholder="Enter amount" />
          </form>

        </div>

        <div className="newstaff_column">

          <form action="">
            <label htmlFor=""><h4>Payee Tax</h4></label>
            <input type="text" placeholder="Enter payee tax" />
          </form>

          <form action="">
            <label htmlFor=""><h4>Net Pay</h4></label>
            <input type="text" placeholder="Enter net pay" />
          </form>

        </div>

        <button className="filled-btn"><h4>Submit</h4></button>

      </div>

      <div className="contract_staff">

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

        <div className="table_footer">
          <img src="/icons/Keyboard arrow left.svg" alt="" />
          <img src="/icons/Keyboard arrow right.svg" alt="" />
        </div>

      </div>

    </div>
  )

}

export default PayrollEdit