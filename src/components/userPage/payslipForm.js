import PayslipTemplate from "./payslipTemplate";
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { generateYearMonthWeeks } from "../formatmtime";
import {AlertPopup, useAlert } from "../alert";


const PayslipForm = ({payslips, staff})=>{
  const {currentYear, currentWeek, currentMonth} = generateYearMonthWeeks();
  const {alert, showAlert} = useAlert();
  const longMonth = (item)=>{new Date(item).toLocaleString("default", {month: 'long'})}

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedWeek, setSelectedWeek] = useState(currentWeek);
  const [payslipData, setPayslipData] = useState({});
  const [overlay, setOverlay] = useState("")

  const handleViewPayslip = (e)=>{
    e.preventDefault();
    let selectedPayslip = [];

    if (staff.employment_type === "fixed"){
      selectedPayslip = payslips[selectedYear].filter((months)=> {
        const optionMonth = longMonth(months.createdAt)
        return(optionMonth === selectedMonth)
      })

    }else{
      selectedPayslip = payslips[selectedYear][selectedMonth].filter((weeks)=> {
        const optionWeek = weeks.week
        return(optionWeek === selectedWeek)
      })

    }

    if(selectedPayslip.length > 0 && staff.employment_type === "fixed"){
      const selectedPayslip = payslips[selectedYear].filter((months)=> {
        const optionMonth = longMonth(months.createdAt)
        return(optionMonth === selectedMonth)
      })
      setPayslipData(selectedPayslip[0])
      setOverlay("overlay")

    }else if(selectedPayslip.length > 0 && staff.employment_type === "contract"){
      const selectedOptionWeek = selectedPayslip.filter((weeks) => weeks.week === selectedWeek);
      setPayslipData(selectedOptionWeek[0])
      setOverlay("overlay")

    }else {
      showAlert('Payslip not found for the selected month', "info");
    }
   
  }

  const downloadPayslipAsPDF = async () =>{
    const month = new Date(payslipData.createdAt).toLocaleString("default", {
      month: 'long', 
      year: "numeric"
    });

    const pdfContent = document.getElementById("payslip-template");
    const canvas = await html2canvas(pdfContent);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF()
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save(`${payslipData.week ? payslipData.week : month} - Payslip.pdf`);
  }

  const handleClose = ()=>{
    setPayslipData({});
    setOverlay("");

  }

  return(
    <>
      <div className={`${overlay}`}></div>

      {payslipData && payslipData._id && (
        <div className="payslip-template-container">

          <img 
            src="/icons/close alert.svg" 
            alt="cancel icon"
            onClick={handleClose}
            style={{cursor:"pointer"}} 
          />

          <div id="payslip-template">
            <PayslipTemplate payslipData={payslipData} staff={staff}/>
          </div>

          <button 
            className="filled-btn"
            onClick={downloadPayslipAsPDF}
          >
            <h4>Download as PDF</h4> 
          </button>
          
        </div>
      )}

      <form onSubmit={handleViewPayslip} className="payslip_form">

        <h4 className="payslip_head">My Payslip</h4>

        <label htmlFor="year"><h4>Year:</h4></label>
        <select
          name="payroll_month" 
          value={selectedYear}
          onChange={(e)=>setSelectedYear(e.target.value)} 
        >
          {
            Object.keys(payslips)
            .map((year)=><option value={year} key={year}>{year}</option>)
          }
        
        </select>
      


        <label htmlFor="payslip"><h4>Payslip:</h4></label>
        <select
          name="payroll_month" 
          value={selectedMonth}
          onChange={(e)=>setSelectedMonth(e.target.value)} 
        >
          <option value="" >Select Month</option>
          {staff.employment_type === "fixed" ?
            (payslips[selectedYear] || []
              .filter((month)=>{
                const optionMonth = new Date(month.createdAt).toLocaleString("default", {month: 'long'});
                return optionMonth !== currentMonth;
              })
              .map((filteredMonth)=><option value={filteredMonth} key={filteredMonth}>{filteredMonth} Payslip</option>)
            ) :(Object.keys(payslips[selectedYear] || [])
              .map((month)=><option value={month} key={month}>{month}</option>)
            )
          }
         
        </select>
       


        {staff.employment_type === "contract" &&  (
          <>
            <label htmlFor="payslip"><h4>Weeks:</h4></label>
            <select
              name="payroll_week" 
              value={selectedWeek}
              onChange={(e)=>setSelectedWeek(e.target.value)} 
            >
              <option value="" >Select Week</option>
              {
                (payslips[selectedYear][selectedMonth] || [])
                .filter((month)=>month.week !== currentWeek)
                .map((filteredWeek)=><option value={filteredWeek.week} key={filteredWeek.week}>{filteredWeek.week} Payslip</option>)
              }
            
            </select>
            
          </>
        )}

        <button type="submit" className="filled-btn"><h4>View Payslip</h4></button>

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

export default PayslipForm