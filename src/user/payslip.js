import PayslipTemplate from "../components/payslipTemplate";
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const Payslip =()=>{

  const currentMonth = new Date().toLocaleString("default", {
    month: 'long', 
    year: "numeric"
  });

  const currentYear = new Date().toLocaleString("default", {
    year: "numeric"
  });

  const mockPayslips = {
  "2025" : [
    {
      firstname : "Jamiu",
      lastname : "Olayemi",
      month : "January 2025",
      basic_pay : "N,200:00",
      bonuses : "N,300:00",
      deductions : "N,300:00",
      net_pay : "N,60,000:00"

    }
  ],
  
  "2024": [

    {
      firstname : "Abiodun",
      lastname : "Biobaku",
      month : "November 2024",
      basic_pay : "N,100:00",
      bonuses : "N,200:00",
      deductions : "N,500:00",
      net_pay : "N,50,000:00"

    },
    {
      firstname : "Jamiu",
      lastname : "Olayemi",
      month : "December 2024",
      basic_pay : "N,200:00",
      bonuses : "N,300:00",
      deductions : "N,300:00",
      net_pay : "N,60,000:00"

    }
  

  ],

  };

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [payslipData, setPayslipData] = useState({});
  
  const handleViewPayslip = (e)=>{
    e.preventDefault();
    const selectedPayslip = mockPayslips[selectedYear].filter((months)=> months.month === selectedMonth);

    if(selectedPayslip.length > 0){
      setPayslipData(selectedPayslip[0])
    }else {
      alert('Payslip not found for the selected month')
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

  return (
    <div className="payslip_container">
      
      <form onSubmit={handleViewPayslip} className="payslip_form">

        <h4 className="payslip_head">My Payslip</h4>

        <label htmlFor="year"><h4>Year:</h4></label>
        <select
          name="payroll_month" 
          value={selectedYear}
          onChange={(e)=>setSelectedYear(e.target.value)} 
        >
          {Object.keys(mockPayslips).map((month)=>(
            <option value={month}>{month}</option>
          ))}
        
        </select>
        <div className="error_message"></div>


        <label htmlFor="payslip"><h4>Payslip:</h4></label>
        <select
          name="payroll_month" 
          value={selectedMonth}
          onChange={(e)=>setSelectedMonth(e.target.value)} 
        >
          {(mockPayslips[selectedYear]).map((month)=>(
            <option value={month.month}>{month.month}</option>
          ))}
         
        </select>
        <div className="error_message"></div>

        <button type="submit" className="filled-btn"><h4>View Payslip</h4></button>

        {payslipData && payslipData.firstname && (
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

      </form>

    </div>

  )
}

export default Payslip;