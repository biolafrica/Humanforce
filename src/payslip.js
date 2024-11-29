const Payslip =()=>{
  return (
    <div className="payslip_container">
      
      <form action="" className="payslip_form">

        <h4 className="payslip_head">My Payslip</h4>

        <label htmlFor="year"><h4>Year:</h4></label>
        <input type="text" placeholder="2024" />
        <div className="error_message"></div>

        <label htmlFor="payslip"><h4>Payslip:</h4></label>
        <select name="" >
          <option value="November">November, 2024 Payslip</option>
          <option value="December">December, 2024 Payslip</option>
        </select>
        <div className="error_message"></div>

        <button className="filled-btn"><h4>View Payslip</h4></button>

      </form>

    </div>

  )
}

export default Payslip;