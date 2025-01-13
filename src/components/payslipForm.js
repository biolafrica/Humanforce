import PayslipTemplate from "../components/payslipTemplate";
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { generateYearMonthWeeks } from "./formatmtime";
import {AlertPopup, useAlert } from "./alert";


const PayslipForm = ({payslips})=>{
  console.log("payslipForm payslip", payslips);
  const currentMonth = generateYearMonthWeeks().currentMonth;
  const currentYear = generateYearMonthWeeks().currentYear;
  const currentWeek = generateYearMonthWeeks().week;
  
  const {alert, showAlert} = useAlert();

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedWeek, setSelectedWeek] = useState(currentWeek);
  const [payslipData, setPayslipData] = useState({});
  
  const handleViewPayslip = (e)=>{
    e.preventDefault();
    const selectedPayslip = payslips[selectedYear].filter((months)=> {
      const optionMonth = new Date(months.createdAt).toLocaleString("default", {
        month: 'long', 
        year: "numeric",
      })
      return(optionMonth === selectedMonth)

    })

    if(selectedPayslip.length > 0 && (payslips[currentYear])[0].staff_type === "fixed"){
      setPayslipData(selectedPayslip[0])

    }else if((selectedPayslip.length > 0 && (payslips[currentYear])[0].staff_type === "contract")){
      const selectedOptionWeek = selectedPayslip.filter((weeks) => weeks.week === selectedWeek);
      setPayslipData(selectedOptionWeek[0])

    }else {
      showAlert('Payslip not found for the selected month', "info");
    }
   
  }

  const downloadPayslipAsPDF = async () =>{
    const pdfContent = document.getElementById("payslip-template");
    const canvas = await html2canvas(pdfContent);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF()
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save(`${payslipData.month} - Payslip.pdf`);
  }

  return(
    <>
      <form onSubmit={handleViewPayslip} className="payslip_form">

        <h4 className="payslip_head">My Payslip</h4>

        <label htmlFor="year"><h4>Year:</h4></label>
        <select
          name="payroll_month" 
          value={selectedYear}
          onChange={(e)=>setSelectedYear(e.target.value)} 
        >
          {Object.keys(payslips).map((year)=>(
            <option value={year} key={year}>{year}</option>
          ))}
        
        </select>
        <div className="error_message"></div>


        <label htmlFor="payslip"><h4>Payslip:</h4></label>
        <select
          name="payroll_month" 
          value={selectedMonth}
          onChange={(e)=>setSelectedMonth(e.target.value)} 
        >
          {(payslips[selectedYear]).map((month)=>{
            const optionMonth = new Date(month.createdAt).toLocaleString("default", {
              month: 'long', 
              year: "numeric"
            });
              
            return(
              <option value={optionMonth} key={optionMonth}>{optionMonth} Payslip</option>
            )
          })}
         
        </select>
        <div className="error_message"></div>

        {(payslips[currentYear])[0].staff_type === "contract" &&  (
          <>
            <label htmlFor="payslip"><h4>Weeks:</h4></label>
            <select
              name="payroll_week" 
              value={selectedWeek}
              onChange={(e)=>setSelectedWeek(e.target.value)} 
            >
              {(payslips[selectedYear]).map((month)=>{
                  
                return(
                  <option value={month.week} key={month.week}>{month.week}</option>
                )
              })}
            
            </select>
            <div className="error_message"></div>
          </>
        )}

        <button type="submit" className="filled-btn"><h4>View Payslip</h4></button>

      </form>

      {payslipData && payslipData._id && (
        <>
          <div id="payslip-template">
            <PayslipTemplate payslipData={payslipData}/>
          </div>
          <button 
            className="filled-btn"
            onClick={downloadPayslipAsPDF}
          >
            <h4>Download as PDF</h4> 
          </button>
        </>
      )}

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

export default PayslipForm