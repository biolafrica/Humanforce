import {useForm} from "../../hooks/useForm"
import axios from "axios";
import { useParams } from "react-router-dom";
import { AlertPopup,useAlert } from "../alert";
import { useNavigate } from "react-router-dom";
import useTeam from "./buttonState";
import formatNaira from "../../utils/formatNaira"

const UnpaidStaff =({payroll})=>{
  const navigate = useNavigate();
  const {alert, showAlert} = useAlert();
  const {id} = useParams();
  const token = localStorage.getItem("adminAuthToken");
  const {AdminNonExclusiveButton} = useTeam();
 
  const initialValues = {
    basic_pay : !payroll ? "" : payroll.basic_pay,
    bonuses : !payroll ? "" : payroll.bonuses,
    deductions : !payroll ? "" : payroll.deductions,
    lateness_fine : !payroll ? "" : payroll.lateness_fine,
    loan : !payroll ? "" : payroll.loan,
    net_pay : !payroll ? "" : payroll.net_pay,
    pension : !payroll ? "" : payroll.pension,
    tax : !payroll ? "" : payroll.tax,

  }
  const {formData, handleInputChange} = useForm(initialValues);

  const handleSubmitForm = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/payroll/${id}`, formData, {
        headers:{
          Authorization : `Bearer ${token}`
        }
      });
      showAlert("payroll information updated successfully!", "success")
      
      
    } catch (error) {
      console.error("Error updating payroll information . Please try again");
      if(error.response && error.response.status === 500){
        navigate("/server-error")
      }else{
        showAlert("Unsuccessful, please try again", "error");
      }
      
    };
  }

  return(

    <>
      <form className="unpaid_staff" onSubmit={handleSubmitForm}>

        <div className="newstaff_column">

          <div>
            <label htmlFor="basic_pay"><h4>Basic Pay</h4></label>
            <input 
              type="text" 
              placeholder="Enter amount"
              name="basic_pay"
              value={formData.basic_pay} 
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="loan"><h4>Loan</h4></label>
            <input 
              type="text" 
              placeholder="Enter amount"
              name="loan"
              value={formData.loan}
              onChange={handleInputChange} 
            />
          </div>

        </div>

        <div className="newstaff_column">

          <div>
            <label htmlFor="lateness_fine"><h4>Lateness</h4></label>
            <input 
              type="text" 
              placeholder="Enter amount"
              name="lateness_fine"
              value={formData.lateness_fine} 
              onChange={handleInputChange}
              readOnly
            />
          </div>

          <div>
            <label htmlFor="pension"><h4>Pension</h4></label>
            <input 
              type="text" 
              placeholder="Enter amount"
              name="pension"
              value={formData.pension} 
              onChange={handleInputChange}
              readOnly
            />
          </div>

        </div>

        <div className="newstaff_column">

          <div>
            <label htmlFor="deductions"><h4>Deduction</h4></label>
            <input 
              type="text" 
              placeholder="Enter amount"
              name="deductions"
              value={formData.deductions}
              onChange={handleInputChange} 
            />
          </div>

          <div>
            <label htmlFor="bonuses"><h4>Bonuses</h4></label>
            <input 
              type="text" 
              placeholder="Enter amount"
              name="bonuses"
              value={formData.bonuses} 
              onChange={handleInputChange}
            />
          </div>

        </div>

        <div className="newstaff_column">

          <div>
            <label htmlFor="tax"><h4>Payee Tax</h4></label>
            <input 
              type="text" 
              placeholder="Enter payee tax" 
              name="tax"
              value={formData.tax}
              onChange={handleInputChange}
              readOnly
            />
          </div>

          <div>
            <label htmlFor="net_pay"><h4>Net Pay</h4></label>
            <input 
              type="text"
              placeholder="Enter net pay" 
              name="net_pay"
              value={formData.net_pay}
              onChange={handleInputChange}
              readOnly
            />
          </div>

        </div>

        <button className={`${AdminNonExclusiveButton}`} type="submit"><h4>Update</h4></button>

      </form>

      {alert.visible && (
        <AlertPopup 
          visible={alert.visible} 
          message={alert.message} 
          type={alert.type}
          
        />
      )}

    </>

  )
}

const PaidStaff =({paidPayroll})=>{
  const payroll = paidPayroll[0];
  

  return(

    <div className="paid_staff">

      <div className="staff_row">
        <h4>Basic Pay</h4>
        <h4>{formatNaira(payroll.basic_pay)}</h4>
      </div>

      <div className="staff_row">
        <h4>Bonuses</h4>
        <h4>{formatNaira(payroll.bonuses)}</h4>
      </div>

      <div className="staff_row">
        <h4>Loan</h4>
        <h4>{formatNaira(payroll.loan)}</h4>
      </div>

      <div className="staff_row">
        <h4>Late Fine</h4>
        <h4>{formatNaira(payroll.lateness_fine)}</h4>
      </div>

      <div className="staff_row">
        <h4>Pension </h4>
        <h4>{formatNaira(payroll.pension)}</h4>
      </div>

      <div className="staff_row">
        <h4>Deduction</h4>
        <h4>{formatNaira(payroll.deductions)}</h4>
      </div>

      <div className="staff_row">
        <h4>Tax</h4>
        <h4>{formatNaira(payroll.tax)}</h4>
      </div>

      <div className="staff_row">
        <h4>Net Pay</h4>
        <h4>{formatNaira(payroll.net_pay)}</h4>
      </div>

    </div>
    
  )

}

export {
  UnpaidStaff,
  PaidStaff
};