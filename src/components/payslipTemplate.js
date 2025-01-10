const PayslipTemplate = ({payslipData})=>{

  return(
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

  )

}

export default PayslipTemplate;
