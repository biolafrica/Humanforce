const PayslipTemplate = ({payslipData})=>{

  return(
    <>      
      <div className="payslip_template_cont">
        <h2>Payslip</h2>
        <h5>Employee name : {payslipData.firstname} {payslipData.lastname}</h5>
        <h5>Month : {payslipData.month}</h5>
        <h5>Basic Pay : {payslipData.basic_pay}</h5>
        <h5>Bonuses : {payslipData.bonuses}</h5>
        <h5>Deductions : {payslipData.deductions}</h5>
        <h5>Net Pay : {payslipData.net_pay}</h5>
        <h5>Date Generated </h5>
      </div>

      <div className="payslip_template_container">
        <div className="payslip_template_header">

          <div className="payslip_template_header_column">
            <img src="" alt="" />
          </div>

          <div className="payslip_template_header_column">
            <div className="payslip_template_header_sub_column">
              <h6>Name</h6>
              <h5>Abiodun Biobaku</h5>
            </div>
            <div className="payslip_template_header_sub_column">
              <h6>Position</h6>
              <h5>Operations Manager</h5>
            </div>
          </div>

          <div className="payslip_template_header_column">
            <div className="payslip_template_header_sub_column">
              <h6>Staff Code</h6>
              <h5>EU123456</h5>
            </div>
            <div className="payslip_template_header_sub_column">
              <h6>Date</h6>
              <h5>November, 20025</h5>
            </div>
          </div>

          <div className="payslip_template_header_column">
            <div className="payslip_template_header_sub_column">
              <h6>Company</h6>
              <h5>Eatup Ng</h5>
            </div>
            <div className="payslip_template_header_sub_column">
              <h6>Week</h6>
              <h5>2025 - W2</h5>
            </div>
          </div>

        </div>

        <div className="payslip_template_body">

          <div className="payslip_template_payment">
            <div className="payment_head">
              <h6>Payments</h6>
              <h6>Unit</h6>
              <h6>Rate</h6>
              <h6>Amount</h6>
            </div>

            <div className="payment_cont">
              <div className="payment_cont_column">
                <h5>Basic Pay</h5>
                <h5>N2,000,000</h5>
                <h5>1</h5>
                <h5>5000</h5>
              </div>
              <div className="payment_cont_column">
                <h5>Bonuses</h5>
                <h5>N2,000,000</h5>
                <h5>1</h5>
                <h5>5000</h5>
              </div>
            </div>
          </div>

          <div className="payslip_template_deductions">
           
            <div className="deduction_cont">
              <div className="deduction_header">
                <h6>Deductions</h6>
                <h6>Amount</h6>
              </div>
              <div className="deduction_cont">
                <div className="deduction_column">
                  <h5>Tax</h5>
                  <h5>N500</h5>
                </div>

                <div className="deduction_column">
                  <h5>Pension</h5>
                  <h5>N500</h5>
                </div>

                <div className="deduction_column">
                  <h5>Lateness Fine</h5>
                  <h5>N500</h5>
                </div>

              </div>

            </div>
          </div>



        </div>

        <div className="payslip_template_footer">

          <div className="payslip_template_footer_left">
            <h5>Abiodun Biobaku</h5>
            <h5>5, Kuforiji Olubi, Adigbe, Abeokuta,Nigeria</h5>
          </div>

          <div className="payslip_template_footer_right">
            <h5>Total Payment</h5>
            <h5>Total Deduction</h5>
            <h5>Net Payment</h5>
          </div>
    
        </div>

      </div>

    </>

    

  )

}


export default PayslipTemplate;


