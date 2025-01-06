const FixedStaffEdit = ()=>{
  return(
    <div className="payrolleditcont">

      <div className="fixed_staff">

        <h4>Abiodun Biobaku Payslip</h4>

        <div className="fixed_staff_date_filter">
          <div className="staff_filter_container ">
            <select name="" >
              <option value="November">November, 2024</option>
              <option value="December">December, 2024</option>
            </select>
          </div>
          <img src="/icons/Edit.svg" alt="" />
        </div>
        
        <form>

          <div className="unpaid_staff">

            <div className="newstaff_column">

              <div>
                <label htmlFor=""><h4>Basic Pay</h4></label>
                <input type="text" placeholder="Enter amount" />
              </div>

              <div>
                <label htmlFor=""><h4>Loan</h4></label>
                <input type="text" placeholder="Enter amount" />
              </div>

            </div>

            <div className="newstaff_column">

              <div>
                <label htmlFor=""><h4>Lateness</h4></label>
                <input type="text" placeholder="Enter amount" />
              </div>

              <div>
                <label htmlFor=""><h4>Pension</h4></label>
                <input type="text" placeholder="Enter amount" />
              </div>

            </div>

            <div className="newstaff_column">

              <div>
                <label htmlFor=""><h4>Deduction</h4></label>
                <input type="text" placeholder="Enter amount" />
              </div>

              <div>
                <label htmlFor=""><h4>Bonuses</h4></label>
                <input type="text" placeholder="Enter amount" />
              </div>

            </div>

            <div className="newstaff_column">

              <div>
                <label htmlFor=""><h4>Payee Tax</h4></label>
                <input type="text" placeholder="Enter payee tax" />
              </div>

              <div>
                <label htmlFor=""><h4>Net Pay</h4></label>
                <input type="text" placeholder="Enter net pay" />
              </div>

            </div>

          </div>

          <div className="paid_staff">

            <div className="staff_row">
              <h4>Basic Pay</h4>
              <h4>N400,000:00</h4>
            </div>

            <div className="staff_row">
              <h4>Bonuses</h4>
              <h4>N2,000:00</h4>
            </div>

            <div className="staff_row">
              <h4>Loan</h4>
              <h4>N10,000:00</h4>
            </div>

            <div className="staff_row">
              <h4>Late Fine</h4>
              <h4>N5,000:00</h4>
            </div>

            <div className="staff_row">
              <h4>Pension </h4>
              <h4>N2,000:00</h4>
            </div>

            <div className="staff_row">
              <h4>Deduction</h4>
              <h4>N0:00</h4>
            </div>

            <div className="staff_row">
              <h4>Tax</h4>
              <h4>N50,000:00</h4>
            </div>

            <div className="staff_row">
              <h4>Net Pay</h4>
              <h4>N335,000:00</h4>
            </div>

          </div>

         <button className="filled-btn"><h4>Submit</h4></button>

        </form>
        

       

      </div>

    </div>
  )

}

export default FixedStaffEdit