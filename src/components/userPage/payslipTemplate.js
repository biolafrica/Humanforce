import { formattedDate } from "../formatmtime";
import formatNaira from "../../utils/formatNaira";


const PayslipTemplate = ({payslipData, staff})=>{
  const totalPayment = payslipData.basic_pay + payslipData.bonuses;
  const totalDeduction = payslipData.loan + payslipData.tax + payslipData.lateness_fine;
  const netPay = totalPayment - totalDeduction;
  const date = formattedDate(payslipData.createdAt);

  return(
    <div className="payslip_template_container">
      
      <div className="payslip_template_header">

        <div className="payslip_template_header_column icon">
          <img src="/icons/Group work.svg" alt="" />
        </div>

        <div className="payslip_template_header_column">
          <div className="payslip_template_header_sub_column sub_top">
            <h6><b>NAME</b></h6>
            <h6>{staff.firstname} {staff.lastname}</h6>
          </div>
          <div className="payslip_template_header_sub_column">
            <h6><b>POSITION</b></h6>
            <h6>{staff.role}</h6>
          </div>
        </div>

        <div className="payslip_template_header_column">
          <div className="payslip_template_header_sub_column sub_top">
            <h6><b>STAFF CODE</b></h6>
            <h6>{staff.staff_code}</h6>
          </div>
          <div className="payslip_template_header_sub_column">
            <h6><b>DATE</b></h6>
            <h6>{date}</h6>
          </div>
        </div>

        <div className="payslip_template_header_column">
          <div className="payslip_template_header_sub_column sub_top">
            <h6><b>COMPANY</b></h6>
            <h6>Eatup Ng</h6>
          </div>
          <div className="payslip_template_header_sub_column">
            <h6><b> WEEK</b></h6>
            <h6>{payslipData.week || "--:--"}</h6>
          </div>
        </div>

      </div>

      <div className="payslip_template_body">

        <div className="payslip_template_payment">
          <div className="payment_head">
            <h6><b>PAYMENT</b></h6>
            <h6><b>AMOUNT</b></h6>
          </div>
         
          <div className="payment_cont">
            {staff.employment_type === "contract" && (
              <>
                <div className="payment_cont_column">
                  <h6>Monday Pay</h6>
                  <h6>{formatNaira(payslipData?.days?.monday?.rate)}</h6>
                </div>

                <div className="payment_cont_column">
                  <h6>Tuesday Pay</h6>
                  <h6>{formatNaira(payslipData?.days?.tuesday?.rate)}</h6>
                </div>

                <div className="payment_cont_column">
                  <h6>Wednesday Pay</h6>
                  <h6>{formatNaira(payslipData?.days?.wednesday?.rate)}</h6>
                </div>

                <div className="payment_cont_column">
                  <h6>Thursday Pay</h6>
                  <h6>{formatNaira(payslipData?.days?.thursday?.rate)}</h6>
                </div>

                <div className="payment_cont_column">
                  <h6>Friday Pay</h6>
                  <h6>{formatNaira(payslipData?.days?.friday?.rate)}</h6>
                </div>

                <div className="payment_cont_column">
                  <h6>Saturday Pay</h6>
                  <h6>{formatNaira(payslipData?.days?.saturday?.rate)}</h6>
                </div>

              </>

            )}
            
            <br/>
            
            <div className="payment_cont_column">
              <h6>Basic Pay</h6>
              <h6>{formatNaira(payslipData.basic_pay)}</h6>
            </div>

            <div className="payment_cont_column">
              <h6>Bonuses</h6>
              <h6>{formatNaira(payslipData.bonuses)}</h6>
            </div>

          </div>
        </div>


        <div className="payslip_template_deductions">
          
          <div className="deduction_cont">
            <div className="deduction_header">
              <h6><b>DEDUCTIONS</b></h6>
              <h6><b>AMOUNT</b></h6>
            </div>

            <div className="deduction_cont">
              <div className="deduction_column">
                <h6>Tax</h6>
                <h6>{formatNaira(payslipData.tax)}</h6>
              </div>

              <div className="deduction_column">
                <h6>Pension</h6>
                <h6>{formatNaira(payslipData.pension)}</h6>
              </div>

              <div className="deduction_column">
                <h6>Lateness Fine</h6>
                <h6>{formatNaira(payslipData.lateness_fine)}</h6>
              </div>

            </div>

          </div>
        </div>

      </div>

      <div className="payslip_template_footer">

        <div className="payslip_template_footer_left">
          <h4>Thank you for your hardwork {staff.firstname}!</h4>
        </div>

        <div className="payslip_template_footer_right">

          <div className="summary_row">
            <h6>Total Payment:</h6>
            <h6>{formatNaira(totalPayment)}</h6>
          </div>

          <div className="summary_row">
            <h6>Total Deduction:</h6>
            <h6>{formatNaira(totalDeduction)}</h6>
          </div>

          <div className="summary_row">
            <h6>Net Payment:</h6>
            <h6><b>{formatNaira(netPay)}</b></h6>

          </div>
          
          
          
        </div>
  
      </div>

    </div>
  )

}

export default PayslipTemplate;


